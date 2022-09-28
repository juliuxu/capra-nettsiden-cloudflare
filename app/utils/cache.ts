export const cacheControlHeaders = {
  "Cache-Control": `public, max-age=${60}, s-maxage=${60}, stale-while-revalidate=${
    60 * 60 * 24 * 30
  }`,
};
