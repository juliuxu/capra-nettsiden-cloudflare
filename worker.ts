import type { AppLoadContext, ServerBuild } from "@remix-run/cloudflare";
import { createRequestHandler as createRemixRequestHandler } from "@remix-run/cloudflare";

/**
 * A function that returns the value to use as `context` in route `loader` and
 * `action` functions.
 *
 * You can think of this as an escape hatch that allows you to pass
 * environment/platform-specific values through to your loader/action.
 */
export type GetLoadContextFunction<Env = any> = (
  context: EventContext<Env, any, any>,
) => AppLoadContext;

export type RequestHandler<Env = any> = PagesFunction<Env>;

export interface createPagesFunctionHandlerParams<Env = any> {
  build: ServerBuild;
  getLoadContext?: GetLoadContextFunction<Env>;
  mode?: string;
}

export function createRequestHandler<Env = any>({
  build,
  getLoadContext,
  mode,
}: createPagesFunctionHandlerParams<Env>): RequestHandler<Env> {
  let handleRequest = createRemixRequestHandler(build, mode);

  return (context) => {
    let loadContext = getLoadContext?.(context);

    return handleRequest(context.request, loadContext);
  };
}

declare const process: any;

export function createPagesFunctionHandler<Env = any>({
  build,
  getLoadContext,
  mode,
}: createPagesFunctionHandlerParams<Env>) {
  let handleRequest = createRequestHandler<Env>({
    build,
    getLoadContext,
    mode,
  });

  let handleFetch = async (
    context: EventContext<Env, any, any>,
    cacheKey: string | Request,
    cache?: Cache,
  ) => {
    // https://github.com/cloudflare/wrangler2/issues/117
    context.request.headers.delete("if-none-match");

    // Fetch asset
    try {
      let assetResponse = await (context.env as any).ASSETS.fetch(
        context.request.url,
        context.request.clone(),
      );
      assetResponse =
        assetResponse &&
        assetResponse.status >= 200 &&
        assetResponse.status < 400
          ? new Response(assetResponse.body, assetResponse)
          : undefined;
      if (assetResponse) return assetResponse;
    } catch {}

    // Remix request
    const response = await handleRequest(context);

    // Save to cache
    if (response.ok && cache && response.headers.has("Cache-Control")) {
      // Store the fetched response as cacheKey
      // Use waitUntil so you can return the response without blocking on
      // writing to cache
      response.headers.set("X-SWR-Date", new Date().toUTCString());
      context.waitUntil(cache.put(cacheKey, response.clone()));
    }
    return response;
  };

  return async (context: EventContext<Env, any, any>) => {
    try {
      // Read from Cache
      // https://developers.cloudflare.com/workers/runtime-apis/cache/
      const url = new URL(context.request.url);
      const useCache =
        url.hostname !== "localhost" && context.request.method === "GET";
      const cacheKey = new Request(url.href, context.request);
      const cache = useCache ? await caches.open("custom:remix") : undefined;

      const cachedResponse = await cache?.match(cacheKey);
      if (cachedResponse) {
        // stale-while-revalidate
        const responseDate = cachedResponse.headers.get("X-SWR-Date");
        const cacheControl = cachedResponse.headers.get("Cache-Control");

        const date = responseDate ? new Date(responseDate) : null;
        const secondsSinceDate = date
          ? (Date.now() - date.getTime()) / 1000
          : 0;

        let matches = cacheControl?.match(/s-maxage=(\d+)/);
        const sMaxage = matches ? parseInt(matches[1], 10) : 0;

        matches = cacheControl?.match(/stale-while-revalidate=(\d+)/);
        const staleWhileRevalidate = matches ? parseInt(matches[1], 10) : 0;

        if (
          sMaxage &&
          staleWhileRevalidate &&
          secondsSinceDate &&
          sMaxage - staleWhileRevalidate < secondsSinceDate
        ) {
          handleFetch(context, cacheKey, cache);
        }

        const res = cachedResponse.clone();
        res.headers.set(
          "x-debug",
          `sMaxage=${sMaxage}, staleWhileRevalidate=${staleWhileRevalidate}, secondsSinceDate=${secondsSinceDate}`,
        );

        return res;
      }

      return await handleFetch(context, cacheKey, cache);
    } catch (e) {
      if (process.env.NODE_ENV === "development" && e instanceof Error) {
        console.error(e);
        return new Response(e.message || e.toString(), {
          status: 500,
        });
      }

      return new Response("Internal Error", {
        status: 500,
      });
    }
  };
}
