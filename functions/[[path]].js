var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function() {
      "use strict";
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ReactVersion = "18.2.0", REACT_ELEMENT_TYPE = Symbol.for("react.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable != "object")
          return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator == "function" ? maybeIterator : null;
      }
      var ReactCurrentDispatcher = {
        current: null
      }, ReactCurrentBatchConfig = {
        transition: null
      }, ReactCurrentActQueue = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ReactCurrentOwner = {
        current: null
      }, ReactDebugCurrentFrame = {}, currentExtraStackFrame = null;
      function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
      }
      ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
      }, ReactDebugCurrentFrame.getCurrentStack = null, ReactDebugCurrentFrame.getStackAddendum = function() {
        var stack = "";
        currentExtraStackFrame && (stack += currentExtraStackFrame);
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        return impl && (stack += impl() || ""), stack;
      };
      var enableScopeAPI = !1, enableCacheElement = !1, enableTransitionTracing = !1, enableLegacyHidden = !1, enableDebugTracing = !1, ReactSharedInternals = {
        ReactCurrentDispatcher,
        ReactCurrentBatchConfig,
        ReactCurrentOwner
      };
      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame, ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
      function warn(format) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
            args[_key - 1] = arguments[_key];
          printWarning("warn", format, args);
        }
      }
      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
            args[_key2 - 1] = arguments[_key2];
          printWarning("error", format, args);
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame, stack = ReactDebugCurrentFrame2.getStackAddendum();
          stack !== "" && (format += "%s", args = args.concat([stack]));
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format), Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var didWarnStateUpdateForUnmountedComponent = {};
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor, componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass", warningKey = componentName + "." + callerName;
          if (didWarnStateUpdateForUnmountedComponent[warningKey])
            return;
          error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName), didWarnStateUpdateForUnmountedComponent[warningKey] = !0;
        }
      }
      var ReactNoopUpdateQueue = {
        isMounted: function(publicInstance) {
          return !1;
        },
        enqueueForceUpdate: function(publicInstance, callback, callerName) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      function Component(props, context, updater) {
        this.props = props, this.context = context, this.refs = emptyObject, this.updater = updater || ReactNoopUpdateQueue;
      }
      Component.prototype.isReactComponent = {}, Component.prototype.setState = function(partialState, callback) {
        if (typeof partialState != "object" && typeof partialState != "function" && partialState != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      }, Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      {
        var deprecatedAPIs = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, defineDeprecationWarning = function(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
          });
        };
        for (var fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      }
      function ComponentDummy() {
      }
      ComponentDummy.prototype = Component.prototype;
      function PureComponent(props, context, updater) {
        this.props = props, this.context = context, this.refs = emptyObject, this.updater = updater || ReactNoopUpdateQueue;
      }
      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent, assign(pureComponentPrototype, Component.prototype), pureComponentPrototype.isPureReactComponent = !0;
      function createRef() {
        var refObject = {
          current: null
        };
        return Object.seal(refObject), refObject;
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol == "function" && Symbol.toStringTag, type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        try {
          return testStringCoercion(value), !1;
        } catch {
          return !0;
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value))
          return error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value)), testStringCoercion(value);
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName)
          return displayName;
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null)
          return null;
        if (typeof type.tag == "number" && error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof type == "function")
          return type.displayName || type.name || null;
        if (typeof type == "string")
          return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              return outerName !== null ? outerName : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty, RESERVED_PROPS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
      didWarnAboutStringRefs = {};
      function hasValidRef(config2) {
        if (hasOwnProperty.call(config2, "ref")) {
          var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config2.ref !== void 0;
      }
      function hasValidKey(config2) {
        if (hasOwnProperty.call(config2, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config2.key !== void 0;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
        };
        warnAboutAccessingKey.isReactWarning = !0, Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: !0
        });
      }
      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
          specialPropRefWarningShown || (specialPropRefWarningShown = !0, error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
        };
        warnAboutAccessingRef.isReactWarning = !0, Object.defineProperty(props, "ref", {
          get: warnAboutAccessingRef,
          configurable: !0
        });
      }
      function warnIfStringRefCannotBeAutoConverted(config2) {
        if (typeof config2.ref == "string" && ReactCurrentOwner.current && config2.__self && ReactCurrentOwner.current.stateNode !== config2.__self) {
          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
          didWarnAboutStringRefs[componentName] || (error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config2.ref), didWarnAboutStringRefs[componentName] = !0);
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner
        };
        return element._store = {}, Object.defineProperty(element._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(element, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: self
        }), Object.defineProperty(element, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: source
        }), Object.freeze && (Object.freeze(element.props), Object.freeze(element)), element;
      };
      function createElement7(type, config2, children) {
        var propName, props = {}, key = null, ref = null, self = null, source = null;
        if (config2 != null) {
          hasValidRef(config2) && (ref = config2.ref, warnIfStringRefCannotBeAutoConverted(config2)), hasValidKey(config2) && (checkKeyStringCoercion(config2.key), key = "" + config2.key), self = config2.__self === void 0 ? null : config2.__self, source = config2.__source === void 0 ? null : config2.__source;
          for (propName in config2)
            hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (props[propName] = config2[propName]);
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1)
          props.children = children;
        else if (childrenLength > 1) {
          for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
            childArray[i] = arguments[i + 2];
          Object.freeze && Object.freeze(childArray), props.children = childArray;
        }
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps)
            props[propName] === void 0 && (props[propName] = defaultProps[propName]);
        }
        if (key || ref) {
          var displayName = typeof type == "function" ? type.displayName || type.name || "Unknown" : type;
          key && defineKeyPropWarningGetter(props, displayName), ref && defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      }
      function cloneElement(element, config2, children) {
        if (element == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName, props = assign({}, element.props), key = element.key, ref = element.ref, self = element._self, source = element._source, owner = element._owner;
        if (config2 != null) {
          hasValidRef(config2) && (ref = config2.ref, owner = ReactCurrentOwner.current), hasValidKey(config2) && (checkKeyStringCoercion(config2.key), key = "" + config2.key);
          var defaultProps;
          element.type && element.type.defaultProps && (defaultProps = element.type.defaultProps);
          for (propName in config2)
            hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (config2[propName] === void 0 && defaultProps !== void 0 ? props[propName] = defaultProps[propName] : props[propName] = config2[propName]);
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1)
          props.children = children;
        else if (childrenLength > 1) {
          for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
            childArray[i] = arguments[i + 2];
          props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
      }
      function isValidElement2(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var SEPARATOR = ".", SUBSEPARATOR = ":";
      function escape2(key) {
        var escapeRegex = /[=:]/g, escaperLookup = {
          "=": "=0",
          ":": "=2"
        }, escapedString = key.replace(escapeRegex, function(match) {
          return escaperLookup[match];
        });
        return "$" + escapedString;
      }
      var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, "$&/");
      }
      function getElementKey(element, index) {
        return typeof element == "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape2("" + element.key)) : index.toString(36);
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        (type === "undefined" || type === "boolean") && (children = null);
        var invokeCallback = !1;
        if (children === null)
          invokeCallback = !0;
        else
          switch (type) {
            case "string":
            case "number":
              invokeCallback = !0;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = !0;
              }
          }
        if (invokeCallback) {
          var _child = children, mappedChild = callback(_child), childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
          if (isArray(mappedChild)) {
            var escapedChildKey = "";
            childKey != null && (escapedChildKey = escapeUserProvidedKey(childKey) + "/"), mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
              return c;
            });
          } else
            mappedChild != null && (isValidElement2(mappedChild) && (mappedChild.key && (!_child || _child.key !== mappedChild.key) && checkKeyStringCoercion(mappedChild.key), mappedChild = cloneAndReplaceKey(
              mappedChild,
              escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey
            )), array.push(mappedChild));
          return 1;
        }
        var child, nextName, subtreeCount = 0, nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (isArray(children))
          for (var i = 0; i < children.length; i++)
            child = children[i], nextName = nextNamePrefix + getElementKey(child, i), subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        else {
          var iteratorFn = getIteratorFn(children);
          if (typeof iteratorFn == "function") {
            var iterableChildren = children;
            iteratorFn === iterableChildren.entries && (didWarnAboutMaps || warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0);
            for (var iterator = iteratorFn.call(iterableChildren), step, ii = 0; !(step = iterator.next()).done; )
              child = step.value, nextName = nextNamePrefix + getElementKey(child, ii++), subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          } else if (type === "object") {
            var childrenString = String(children);
            throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return subtreeCount;
      }
      function mapChildren(children, func, context) {
        if (children == null)
          return children;
        var result = [], count = 0;
        return mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        }), result;
      }
      function countChildren(children) {
        var n = 0;
        return mapChildren(children, function() {
          n++;
        }), n;
      }
      function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      }
      function toArray(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      }
      function onlyChild(children) {
        if (!isValidElement2(children))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
      function createContext3(defaultValue) {
        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = !1, hasWarnedAboutUsingConsumerProvider = !1, hasWarnedAboutDisplayNameOnConsumer = !1;
        {
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context
          };
          Object.defineProperties(Consumer, {
            Provider: {
              get: function() {
                return hasWarnedAboutUsingConsumerProvider || (hasWarnedAboutUsingConsumerProvider = !0, error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), context.Provider;
              },
              set: function(_Provider) {
                context.Provider = _Provider;
              }
            },
            _currentValue: {
              get: function() {
                return context._currentValue;
              },
              set: function(_currentValue) {
                context._currentValue = _currentValue;
              }
            },
            _currentValue2: {
              get: function() {
                return context._currentValue2;
              },
              set: function(_currentValue2) {
                context._currentValue2 = _currentValue2;
              }
            },
            _threadCount: {
              get: function() {
                return context._threadCount;
              },
              set: function(_threadCount) {
                context._threadCount = _threadCount;
              }
            },
            Consumer: {
              get: function() {
                return hasWarnedAboutUsingNestedContextConsumers || (hasWarnedAboutUsingNestedContextConsumers = !0, error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), context.Consumer;
              }
            },
            displayName: {
              get: function() {
                return context.displayName;
              },
              set: function(displayName) {
                hasWarnedAboutDisplayNameOnConsumer || (warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName), hasWarnedAboutDisplayNameOnConsumer = !0);
              }
            }
          }), context.Consumer = Consumer;
        }
        return context._currentRenderer = null, context._currentRenderer2 = null, context;
      }
      var Uninitialized = -1, Pending = 0, Resolved = 1, Rejected = 2;
      function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
          var ctor = payload._result, thenable = ctor();
          if (thenable.then(function(moduleObject2) {
            if (payload._status === Pending || payload._status === Uninitialized) {
              var resolved = payload;
              resolved._status = Resolved, resolved._result = moduleObject2;
            }
          }, function(error2) {
            if (payload._status === Pending || payload._status === Uninitialized) {
              var rejected = payload;
              rejected._status = Rejected, rejected._result = error2;
            }
          }), payload._status === Uninitialized) {
            var pending = payload;
            pending._status = Pending, pending._result = thenable;
          }
        }
        if (payload._status === Resolved) {
          var moduleObject = payload._result;
          return moduleObject === void 0 && error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, moduleObject), "default" in moduleObject || error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, moduleObject), moduleObject.default;
        } else
          throw payload._result;
      }
      function lazy(ctor) {
        var payload = {
          _status: Uninitialized,
          _result: ctor
        }, lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: payload,
          _init: lazyInitializer
        };
        {
          var defaultProps, propTypes;
          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return defaultProps;
              },
              set: function(newDefaultProps) {
                error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), defaultProps = newDefaultProps, Object.defineProperty(lazyType, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return propTypes;
              },
              set: function(newPropTypes) {
                error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), propTypes = newPropTypes, Object.defineProperty(lazyType, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return lazyType;
      }
      function forwardRef3(render) {
        render != null && render.$$typeof === REACT_MEMO_TYPE ? error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render != "function" ? error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), render != null && (render.defaultProps != null || render.propTypes != null) && error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var elementType = {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render
        };
        {
          var ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name, !render.name && !render.displayName && (render.displayName = name);
            }
          });
        }
        return elementType;
      }
      var REACT_MODULE_REFERENCE;
      REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      function isValidElementType(type) {
        return !!(typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0));
      }
      function memo(type, compare) {
        isValidElementType(type) || error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
        var elementType = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: compare === void 0 ? null : compare
        };
        {
          var ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name, !type.name && !type.displayName && (type.displayName = name);
            }
          });
        }
        return elementType;
      }
      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        return dispatcher === null && error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), dispatcher;
      }
      function useContext4(Context) {
        var dispatcher = resolveDispatcher();
        if (Context._context !== void 0) {
          var realContext = Context._context;
          realContext.Consumer === Context ? error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : realContext.Provider === Context && error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context);
      }
      function useState10(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }
      function useReducer2(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }
      function useRef6(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }
      function useEffect9(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }
      function useInsertionEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useInsertionEffect(create, deps);
      }
      function useLayoutEffect4(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }
      function useCallback5(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }
      function useMemo4(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }
      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }
      function useDebugValue(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }
      function useTransition2() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useTransition();
      }
      function useDeferredValue(value) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDeferredValue(value);
      }
      function useId2() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useId();
      }
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
      }
      var disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = !0;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log, prevInfo = console.info, prevWarn = console.warn, prevError = console.error, prevGroup = console.group, prevGroupCollapsed = console.groupCollapsed, prevGroupEnd = console.groupEnd;
            var props = {
              configurable: !0,
              enumerable: !0,
              value: disabledLog,
              writable: !0
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          if (disabledDepth--, disabledDepth === 0) {
            var props = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          disabledDepth < 0 && error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          return `
` + prefix + name;
        }
      }
      var reentry = !1, componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap == "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0)
            return frame;
        }
        var control;
        reentry = !0;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current, ReactCurrentDispatcher$1.current = null, disableLogs();
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            if (Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack == "string") {
            for (var sampleLines = sample.stack.split(`
`), controlLines = control.stack.split(`
`), s = sampleLines.length - 1, c = controlLines.length - 1; s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]; )
              c--;
            for (; s >= 1 && c >= 0; s--, c--)
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1)
                  do
                    if (s--, c--, c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = `
` + sampleLines[s].replace(" at new ", " at ");
                      return fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName)), typeof fn == "function" && componentFrameCache.set(fn, _frame), _frame;
                    }
                  while (s >= 1 && c >= 0);
                break;
              }
          }
        } finally {
          reentry = !1, ReactCurrentDispatcher$1.current = previousDispatcher, reenableLogs(), Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "", syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        return typeof fn == "function" && componentFrameCache.set(fn, syntheticFrame), syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, !1);
      }
      function shouldConstruct(Component2) {
        var prototype = Component2.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null)
          return "";
        if (typeof type == "function")
          return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type == "string")
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch {
              }
            }
          }
        return "";
      }
      var loggedTypeFailures = {}, ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs)
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] != "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw err.name = "Invariant Violation", err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              error$1 && !(error$1 instanceof Error) && (setCurrentlyValidatingElement(element), error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1), setCurrentlyValidatingElement(null)), error$1 instanceof Error && !(error$1.message in loggedTypeFailures) && (loggedTypeFailures[error$1.message] = !0, setCurrentlyValidatingElement(element), error("Failed %s type: %s", location, error$1.message), setCurrentlyValidatingElement(null));
            }
        }
      }
      function setCurrentlyValidatingElement$1(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          setExtraStackFrame(stack);
        } else
          setExtraStackFrame(null);
      }
      var propTypesMisspellWarningShown;
      propTypesMisspellWarningShown = !1;
      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentNameFromType(ReactCurrentOwner.current.type);
          if (name)
            return `

Check the render method of \`` + name + "`.";
        }
        return "";
      }
      function getSourceInfoErrorAddendum(source) {
        if (source !== void 0) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, ""), lineNumber = source.lineNumber;
          return `

Check your code at ` + fileName + ":" + lineNumber + ".";
        }
        return "";
      }
      function getSourceInfoErrorAddendumForProps(elementProps) {
        return elementProps != null ? getSourceInfoErrorAddendum(elementProps.__source) : "";
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
          var parentName = typeof parentType == "string" ? parentType : parentType.displayName || parentType.name;
          parentName && (info = `

Check the top-level render call using <` + parentName + ">.");
        }
        return info;
      }
      function validateExplicitKey(element, parentType) {
        if (!(!element._store || element._store.validated || element.key != null)) {
          element._store.validated = !0;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (!ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            ownerHasKeyUseWarning[currentComponentErrorInfo] = !0;
            var childOwner = "";
            element && element._owner && element._owner !== ReactCurrentOwner.current && (childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + "."), setCurrentlyValidatingElement$1(element), error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner), setCurrentlyValidatingElement$1(null);
          }
        }
      }
      function validateChildKeys(node, parentType) {
        if (typeof node == "object") {
          if (isArray(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement2(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement2(node))
            node._store && (node._store.validated = !0);
          else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn == "function" && iteratorFn !== node.entries)
              for (var iterator = iteratorFn.call(node), step; !(step = iterator.next()).done; )
                isValidElement2(step.value) && validateExplicitKey(step.value, parentType);
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type == null || typeof type == "string")
            return;
          var propTypes;
          if (typeof type == "function")
            propTypes = type.propTypes;
          else if (typeof type == "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE))
            propTypes = type.propTypes;
          else
            return;
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = !0;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          typeof type.getDefaultProps == "function" && !type.getDefaultProps.isReactClassApproved && error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function validateFragmentProps(fragment) {
        {
          for (var keys = Object.keys(fragment.props), i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment), error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key), setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          fragment.ref !== null && (setCurrentlyValidatingElement$1(fragment), error("Invalid attribute `ref` supplied to `React.Fragment`."), setCurrentlyValidatingElement$1(null));
        }
      }
      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type);
        if (!validType) {
          var info = "";
          (type === void 0 || typeof type == "object" && type !== null && Object.keys(type).length === 0) && (info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var sourceInfo = getSourceInfoErrorAddendumForProps(props);
          sourceInfo ? info += sourceInfo : info += getDeclarationErrorAddendum();
          var typeString;
          type === null ? typeString = "null" : isArray(type) ? typeString = "array" : type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", info = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type, error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement7.apply(this, arguments);
        if (element == null)
          return element;
        if (validType)
          for (var i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i], type);
        return type === REACT_FRAGMENT_TYPE ? validateFragmentProps(element) : validatePropTypes(element), element;
      }
      var didWarnAboutDeprecatedCreateFactory = !1;
      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        return validatedFactory.type = type, didWarnAboutDeprecatedCreateFactory || (didWarnAboutDeprecatedCreateFactory = !0, warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(validatedFactory, "type", {
          enumerable: !1,
          get: function() {
            return warn("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: type
            }), type;
          }
        }), validatedFactory;
      }
      function cloneElementWithValidation(element, props, children) {
        for (var newElement = cloneElement.apply(this, arguments), i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i], newElement.type);
        return validatePropTypes(newElement), newElement;
      }
      function startTransition(scope, options) {
        var prevTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition = {};
        var currentTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          scope();
        } finally {
          if (ReactCurrentBatchConfig.transition = prevTransition, prevTransition === null && currentTransition._updatedFibers) {
            var updatedFibersCount = currentTransition._updatedFibers.size;
            updatedFibersCount > 10 && warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), currentTransition._updatedFibers.clear();
          }
        }
      }
      var didWarnAboutMessageChannel = !1, enqueueTaskImpl = null;
      function enqueueTask(task) {
        if (enqueueTaskImpl === null)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7), nodeRequire = module && module[requireString];
            enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
          } catch {
            enqueueTaskImpl = function(callback) {
              didWarnAboutMessageChannel === !1 && (didWarnAboutMessageChannel = !0, typeof MessageChannel > "u" && error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback, channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      var actScopeDepth = 0, didWarnNoAwaitAct = !1;
      function act(callback) {
        {
          var prevActScopeDepth = actScopeDepth;
          actScopeDepth++, ReactCurrentActQueue.current === null && (ReactCurrentActQueue.current = []);
          var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy, result;
          try {
            if (ReactCurrentActQueue.isBatchingLegacy = !0, result = callback(), !prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
              var queue = ReactCurrentActQueue.current;
              queue !== null && (ReactCurrentActQueue.didScheduleLegacyUpdate = !1, flushActQueue(queue));
            }
          } catch (error2) {
            throw popActScope(prevActScopeDepth), error2;
          } finally {
            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
          }
          if (result !== null && typeof result == "object" && typeof result.then == "function") {
            var thenableResult = result, wasAwaited = !1, thenable = {
              then: function(resolve, reject) {
                wasAwaited = !0, thenableResult.then(function(returnValue2) {
                  popActScope(prevActScopeDepth), actScopeDepth === 0 ? recursivelyFlushAsyncActWork(returnValue2, resolve, reject) : resolve(returnValue2);
                }, function(error2) {
                  popActScope(prevActScopeDepth), reject(error2);
                });
              }
            };
            return !didWarnNoAwaitAct && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              wasAwaited || (didWarnNoAwaitAct = !0, error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), thenable;
          } else {
            var returnValue = result;
            if (popActScope(prevActScopeDepth), actScopeDepth === 0) {
              var _queue = ReactCurrentActQueue.current;
              _queue !== null && (flushActQueue(_queue), ReactCurrentActQueue.current = null);
              var _thenable = {
                then: function(resolve, reject) {
                  ReactCurrentActQueue.current === null ? (ReactCurrentActQueue.current = [], recursivelyFlushAsyncActWork(returnValue, resolve, reject)) : resolve(returnValue);
                }
              };
              return _thenable;
            } else {
              var _thenable2 = {
                then: function(resolve, reject) {
                  resolve(returnValue);
                }
              };
              return _thenable2;
            }
          }
        }
      }
      function popActScope(prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        {
          var queue = ReactCurrentActQueue.current;
          if (queue !== null)
            try {
              flushActQueue(queue), enqueueTask(function() {
                queue.length === 0 ? (ReactCurrentActQueue.current = null, resolve(returnValue)) : recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
            } catch (error2) {
              reject(error2);
            }
          else
            resolve(returnValue);
        }
      }
      var isFlushing = !1;
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = !0;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do
                callback = callback(!0);
              while (callback !== null);
            }
            queue.length = 0;
          } catch (error2) {
            throw queue = queue.slice(i + 1), error2;
          } finally {
            isFlushing = !1;
          }
        }
      }
      var createElement$1 = createElementWithValidation, cloneElement$1 = cloneElementWithValidation, createFactory = createFactoryWithValidation, Children2 = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray,
        only: onlyChild
      };
      exports.Children = Children2, exports.Component = Component, exports.Fragment = REACT_FRAGMENT_TYPE, exports.Profiler = REACT_PROFILER_TYPE, exports.PureComponent = PureComponent, exports.StrictMode = REACT_STRICT_MODE_TYPE, exports.Suspense = REACT_SUSPENSE_TYPE, exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals, exports.cloneElement = cloneElement$1, exports.createContext = createContext3, exports.createElement = createElement$1, exports.createFactory = createFactory, exports.createRef = createRef, exports.forwardRef = forwardRef3, exports.isValidElement = isValidElement2, exports.lazy = lazy, exports.memo = memo, exports.startTransition = startTransition, exports.unstable_act = act, exports.useCallback = useCallback5, exports.useContext = useContext4, exports.useDebugValue = useDebugValue, exports.useDeferredValue = useDeferredValue, exports.useEffect = useEffect9, exports.useId = useId2, exports.useImperativeHandle = useImperativeHandle, exports.useInsertionEffect = useInsertionEffect, exports.useLayoutEffect = useLayoutEffect4, exports.useMemo = useMemo4, exports.useReducer = useReducer2, exports.useRef = useRef6, exports.useState = useState10, exports.useSyncExternalStore = useSyncExternalStore, exports.useTransition = useTransition2, exports.version = ReactVersion, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    module.exports = require_react_development();
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.browser.development.js
var require_react_dom_server_legacy_browser_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.browser.development.js"(exports) {
    "use strict";
    (function() {
      "use strict";
      var React6 = require_react(), ReactVersion = "18.2.0", ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function warn(format) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
            args[_key - 1] = arguments[_key];
          printWarning("warn", format, args);
        }
      }
      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
            args[_key2 - 1] = arguments[_key2];
          printWarning("error", format, args);
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame, stack = ReactDebugCurrentFrame2.getStackAddendum();
          stack !== "" && (format += "%s", args = args.concat([stack]));
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format), Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      function scheduleWork(callback) {
        callback();
      }
      function beginWriting(destination) {
      }
      function writeChunk(destination, chunk) {
        writeChunkAndReturn(destination, chunk);
      }
      function writeChunkAndReturn(destination, chunk) {
        return destination.push(chunk);
      }
      function completeWriting(destination) {
      }
      function close(destination) {
        destination.push(null);
      }
      function stringToChunk(content) {
        return content;
      }
      function stringToPrecomputedChunk(content) {
        return content;
      }
      function closeWithError(destination, error2) {
        destination.destroy(error2);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol == "function" && Symbol.toStringTag, type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        try {
          return testStringCoercion(value), !1;
        } catch {
          return !0;
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkAttributeStringCoercion(value, attributeName) {
        if (willCoercionThrow(value))
          return error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value)), testStringCoercion(value);
      }
      function checkCSSPropertyStringCoercion(value, propName) {
        if (willCoercionThrow(value))
          return error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value)), testStringCoercion(value);
      }
      function checkHtmlStringCoercion(value) {
        if (willCoercionThrow(value))
          return error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value)), testStringCoercion(value);
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty, RESERVED = 0, STRING = 1, BOOLEANISH_STRING = 2, BOOLEAN = 3, OVERLOADED_BOOLEAN = 4, NUMERIC = 5, POSITIVE_NUMERIC = 6, ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$"), illegalAttributeNameCache = {}, validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        return hasOwnProperty.call(validatedAttributeNameCache, attributeName) ? !0 : hasOwnProperty.call(illegalAttributeNameCache, attributeName) ? !1 : VALID_ATTRIBUTE_NAME_REGEX.test(attributeName) ? (validatedAttributeNameCache[attributeName] = !0, !0) : (illegalAttributeNameCache[attributeName] = !0, error("Invalid attribute name: `%s`", attributeName), !1);
      }
      function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED)
          return !1;
        switch (typeof value) {
          case "function":
          case "symbol":
            return !0;
          case "boolean": {
            if (isCustomComponentTag)
              return !1;
            if (propertyInfo !== null)
              return !propertyInfo.acceptsBooleans;
            var prefix2 = name.toLowerCase().slice(0, 5);
            return prefix2 !== "data-" && prefix2 !== "aria-";
          }
          default:
            return !1;
        }
      }
      function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
      }
      function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
        this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN, this.attributeName = attributeName, this.attributeNamespace = attributeNamespace, this.mustUseProperty = mustUseProperty, this.propertyName = name, this.type = type, this.sanitizeURL = sanitizeURL2, this.removeEmptyString = removeEmptyString;
      }
      var properties = {}, reservedProps = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style"
      ];
      reservedProps.forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          RESERVED,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
        var name = _ref[0], attributeName = _ref[1];
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          null,
          !1,
          !1
        );
      }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          !1,
          name.toLowerCase(),
          null,
          !1,
          !1
        );
      }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), [
        "allowFullScreen",
        "async",
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "disableRemotePlayback",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        "itemScope"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          !1,
          name.toLowerCase(),
          null,
          !1,
          !1
        );
      }), [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          !0,
          name,
          null,
          !1,
          !1
        );
      }), [
        "capture",
        "download"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          OVERLOADED_BOOLEAN,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          POSITIVE_NUMERIC,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), ["rowSpan", "start"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          NUMERIC,
          !1,
          name.toLowerCase(),
          null,
          !1,
          !1
        );
      });
      var CAMELIZE = /[\-\:]([a-z])/g, capitalize2 = function(token) {
        return token[1].toUpperCase();
      };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize2);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          null,
          !1,
          !1
        );
      }), [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize2);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          "http://www.w3.org/1999/xlink",
          !1,
          !1
        );
      }), [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize2);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }), ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          !1,
          attributeName.toLowerCase(),
          null,
          !1,
          !1
        );
      });
      var xlinkHref = "xlinkHref";
      properties[xlinkHref] = new PropertyInfoRecord(
        "xlinkHref",
        STRING,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      ), ["src", "href", "action", "formAction"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          !1,
          attributeName.toLowerCase(),
          null,
          !0,
          !0
        );
      });
      var isUnitlessNumber = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      };
      function prefixKey(prefix2, key) {
        return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix2) {
          isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
        });
      });
      var hasReadOnlyValue = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
      };
      function checkControlledValueProps(tagName, props) {
        hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null || error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), props.onChange || props.readOnly || props.disabled || props.checked == null || error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1)
          return typeof props.is == "string";
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var ariaProperties = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
      }, warnedProperties = {}, rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"), rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
      function validateProperty(tagName, name) {
        {
          if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name])
            return !0;
          if (rARIACamel.test(name)) {
            var ariaName = "aria-" + name.slice(4).toLowerCase(), correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
            if (correctName == null)
              return error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties[name] = !0, !0;
            if (name !== correctName)
              return error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName), warnedProperties[name] = !0, !0;
          }
          if (rARIA.test(name)) {
            var lowerCasedName = name.toLowerCase(), standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
            if (standardName == null)
              return warnedProperties[name] = !0, !1;
            if (name !== standardName)
              return error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName), warnedProperties[name] = !0, !0;
          }
        }
        return !0;
      }
      function warnInvalidARIAProps(type, props) {
        {
          var invalidProps = [];
          for (var key in props) {
            var isValid = validateProperty(type, key);
            isValid || invalidProps.push(key);
          }
          var unknownPropString = invalidProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          invalidProps.length === 1 ? error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type) : invalidProps.length > 1 && error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
        }
      }
      function validateProperties(type, props) {
        isCustomComponent(type, props) || warnInvalidARIAProps(type, props);
      }
      var didWarnValueNull = !1;
      function validateProperties$1(type, props) {
        {
          if (type !== "input" && type !== "textarea" && type !== "select")
            return;
          props != null && props.value === null && !didWarnValueNull && (didWarnValueNull = !0, type === "select" && props.multiple ? error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type) : error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type));
        }
      }
      var possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
      }, validateProperty$1 = function() {
      };
      {
        var warnedProperties$1 = {}, EVENT_NAME_REGEX = /^on./, INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/, rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"), rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function(tagName, name, value, eventRegistry) {
          if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name])
            return !0;
          var lowerCasedName = name.toLowerCase();
          if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout")
            return error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties$1[name] = !0, !0;
          if (eventRegistry != null) {
            var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
            if (registrationNameDependencies.hasOwnProperty(name))
              return !0;
            var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
            if (registrationName != null)
              return error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName), warnedProperties$1[name] = !0, !0;
            if (EVENT_NAME_REGEX.test(name))
              return error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties$1[name] = !0, !0;
          } else if (EVENT_NAME_REGEX.test(name))
            return INVALID_EVENT_NAME_REGEX.test(name) && error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties$1[name] = !0, !0;
          if (rARIA$1.test(name) || rARIACamel$1.test(name))
            return !0;
          if (lowerCasedName === "innerhtml")
            return error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties$1[name] = !0, !0;
          if (lowerCasedName === "aria")
            return error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties$1[name] = !0, !0;
          if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value != "string")
            return error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties$1[name] = !0, !0;
          if (typeof value == "number" && isNaN(value))
            return error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties$1[name] = !0, !0;
          var propertyInfo = getPropertyInfo(name), isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            var standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name)
              return error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName), warnedProperties$1[name] = !0, !0;
          } else if (!isReserved && name !== lowerCasedName)
            return error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties$1[name] = !0, !0;
          return typeof value == "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1) ? (value ? error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name), warnedProperties$1[name] = !0, !0) : isReserved ? !0 : shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1) ? (warnedProperties$1[name] = !0, !1) : ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN && (error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value), warnedProperties$1[name] = !0), !0);
        };
      }
      var warnUnknownProperties = function(type, props, eventRegistry) {
        {
          var unknownProps = [];
          for (var key in props) {
            var isValid = validateProperty$1(type, key, props[key], eventRegistry);
            isValid || unknownProps.push(key);
          }
          var unknownPropString = unknownProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          unknownProps.length === 1 ? error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type) : unknownProps.length > 1 && error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
        }
      };
      function validateProperties$2(type, props, eventRegistry) {
        isCustomComponent(type, props) || warnUnknownProperties(type, props, eventRegistry);
      }
      var warnValidStyle = function() {
      };
      {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/, msPattern = /^-ms-/, hyphenPattern = /-(.)/g, badStyleValueWithSemicolonPattern = /;\s*$/, warnedStyleNames = {}, warnedStyleValues = {}, warnedForNaNValue = !1, warnedForInfinityValue = !1, camelize = function(string) {
          return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
          });
        }, warnHyphenatedStyleName = function(name) {
          warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, error(
            "Unsupported style property %s. Did you mean %s?",
            name,
            camelize(name.replace(msPattern, "ms-"))
          ));
        }, warnBadVendoredStyleName = function(name) {
          warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)));
        }, warnStyleValueWithSemicolon = function(name, value) {
          warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value] || (warnedStyleValues[value] = !0, error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, "")));
        }, warnStyleValueIsNaN = function(name, value) {
          warnedForNaNValue || (warnedForNaNValue = !0, error("`NaN` is an invalid value for the `%s` css style property.", name));
        }, warnStyleValueIsInfinity = function(name, value) {
          warnedForInfinityValue || (warnedForInfinityValue = !0, error("`Infinity` is an invalid value for the `%s` css style property.", name));
        };
        warnValidStyle = function(name, value) {
          name.indexOf("-") > -1 ? warnHyphenatedStyleName(name) : badVendoredStyleNamePattern.test(name) ? warnBadVendoredStyleName(name) : badStyleValueWithSemicolonPattern.test(value) && warnStyleValueWithSemicolon(name, value), typeof value == "number" && (isNaN(value) ? warnStyleValueIsNaN(name, value) : isFinite(value) || warnStyleValueIsInfinity(name, value));
        };
      }
      var warnValidStyle$1 = warnValidStyle, matchHtmlRegExp = /["'&<>]/;
      function escapeHtml2(string) {
        checkHtmlStringCoercion(string);
        var str = "" + string, match = matchHtmlRegExp.exec(str);
        if (!match)
          return str;
        var escape2, html = "", index, lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escape2 = "&quot;";
              break;
            case 38:
              escape2 = "&amp;";
              break;
            case 39:
              escape2 = "&#x27;";
              break;
            case 60:
              escape2 = "&lt;";
              break;
            case 62:
              escape2 = "&gt;";
              break;
            default:
              continue;
          }
          lastIndex !== index && (html += str.substring(lastIndex, index)), lastIndex = index + 1, html += escape2;
        }
        return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
      }
      function escapeTextForBrowser(text) {
        return typeof text == "boolean" || typeof text == "number" ? "" + text : escapeHtml2(text);
      }
      var uppercasePattern = /([A-Z])/g, msPattern$1 = /^ms-/;
      function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
      }
      var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, didWarn = !1;
      function sanitizeURL(url) {
        !didWarn && isJavaScriptProtocol.test(url) && (didWarn = !0, error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url)));
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      var startInlineScript = "<script>", endInlineScript = "<\/script>", startScriptSrc = '<script src="', startModuleSrc = '<script type="module" src="', endAsyncScript = '" async=""><\/script>';
      function escapeBootstrapScriptContent(scriptText) {
        return checkHtmlStringCoercion(scriptText), ("" + scriptText).replace(scriptRegex, scriptReplacer);
      }
      var scriptRegex = /(<\/|<)(s)(cript)/gi, scriptReplacer = function(match, prefix2, s, suffix) {
        return "" + prefix2 + (s === "s" ? "\\u0073" : "\\u0053") + suffix;
      };
      function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix, inlineScriptWithNonce = nonce === void 0 ? startInlineScript : '<script nonce="' + escapeTextForBrowser(nonce) + '">', bootstrapChunks = [];
        if (bootstrapScriptContent !== void 0 && bootstrapChunks.push(inlineScriptWithNonce, escapeBootstrapScriptContent(bootstrapScriptContent), endInlineScript), bootstrapScripts !== void 0)
          for (var i = 0; i < bootstrapScripts.length; i++)
            bootstrapChunks.push(startScriptSrc, escapeTextForBrowser(bootstrapScripts[i]), endAsyncScript);
        if (bootstrapModules !== void 0)
          for (var _i = 0; _i < bootstrapModules.length; _i++)
            bootstrapChunks.push(startModuleSrc, escapeTextForBrowser(bootstrapModules[_i]), endAsyncScript);
        return {
          bootstrapChunks,
          startInlineScript: inlineScriptWithNonce,
          placeholderPrefix: idPrefix + "P:",
          segmentPrefix: idPrefix + "S:",
          boundaryPrefix: idPrefix + "B:",
          idPrefix,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: !1,
          sentCompleteBoundaryFunction: !1,
          sentClientRenderFunction: !1
        };
      }
      var ROOT_HTML_MODE = 0, HTML_MODE = 1, SVG_MODE = 2, MATHML_MODE = 3, HTML_TABLE_MODE = 4, HTML_TABLE_BODY_MODE = 5, HTML_TABLE_ROW_MODE = 6, HTML_COLGROUP_MODE = 7;
      function createFormatContext(insertionMode, selectedValue) {
        return {
          insertionMode,
          selectedValue
        };
      }
      function getChildFormatContext(parentContext, type, props) {
        switch (type) {
          case "select":
            return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
          case "svg":
            return createFormatContext(SVG_MODE, null);
          case "math":
            return createFormatContext(MATHML_MODE, null);
          case "foreignObject":
            return createFormatContext(HTML_MODE, null);
          case "table":
            return createFormatContext(HTML_TABLE_MODE, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return createFormatContext(HTML_TABLE_BODY_MODE, null);
          case "colgroup":
            return createFormatContext(HTML_COLGROUP_MODE, null);
          case "tr":
            return createFormatContext(HTML_TABLE_ROW_MODE, null);
        }
        return parentContext.insertionMode >= HTML_TABLE_MODE || parentContext.insertionMode === ROOT_HTML_MODE ? createFormatContext(HTML_MODE, null) : parentContext;
      }
      var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
      function assignSuspenseBoundaryID(responseState) {
        var generatedID = responseState.nextSuspenseID++;
        return responseState.boundaryPrefix + generatedID.toString(16);
      }
      function makeId(responseState, treeId, localId) {
        var idPrefix = responseState.idPrefix, id = ":" + idPrefix + "R" + treeId;
        return localId > 0 && (id += "H" + localId.toString(32)), id + ":";
      }
      function encodeHTMLTextNode(text) {
        return escapeTextForBrowser(text);
      }
      var textSeparator = "<!-- -->";
      function pushTextInstance(target, text, responseState, textEmbedded) {
        return text === "" ? textEmbedded : (textEmbedded && target.push(textSeparator), target.push(encodeHTMLTextNode(text)), !0);
      }
      function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
        lastPushedText && textEmbedded && target.push(textSeparator);
      }
      var styleNameCache = /* @__PURE__ */ new Map();
      function processStyleName(styleName) {
        var chunk = styleNameCache.get(styleName);
        if (chunk !== void 0)
          return chunk;
        var result = escapeTextForBrowser(hyphenateStyleName(styleName));
        return styleNameCache.set(styleName, result), result;
      }
      var styleAttributeStart = ' style="', styleAssign = ":", styleSeparator = ";";
      function pushStyle(target, responseState, style) {
        if (typeof style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        var isFirst = !0;
        for (var styleName in style)
          if (!!hasOwnProperty.call(style, styleName)) {
            var styleValue = style[styleName];
            if (!(styleValue == null || typeof styleValue == "boolean" || styleValue === "")) {
              var nameChunk = void 0, valueChunk = void 0, isCustomProperty = styleName.indexOf("--") === 0;
              isCustomProperty ? (nameChunk = escapeTextForBrowser(styleName), checkCSSPropertyStringCoercion(styleValue, styleName), valueChunk = escapeTextForBrowser(("" + styleValue).trim())) : (warnValidStyle$1(styleName, styleValue), nameChunk = processStyleName(styleName), typeof styleValue == "number" ? styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName) ? valueChunk = styleValue + "px" : valueChunk = "" + styleValue : (checkCSSPropertyStringCoercion(styleValue, styleName), valueChunk = escapeTextForBrowser(("" + styleValue).trim()))), isFirst ? (isFirst = !1, target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk)) : target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
            }
          }
        isFirst || target.push(attributeEnd);
      }
      var attributeSeparator = " ", attributeAssign = '="', attributeEnd = '"', attributeEmptyString = '=""';
      function pushAttribute(target, responseState, name, value) {
        switch (name) {
          case "style": {
            pushStyle(target, responseState, value);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (!(name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N"))) {
          var propertyInfo = getPropertyInfo(name);
          if (propertyInfo !== null) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if (!propertyInfo.acceptsBooleans)
                  return;
            }
            var attributeName = propertyInfo.attributeName, attributeNameChunk = attributeName;
            switch (propertyInfo.type) {
              case BOOLEAN:
                value && target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                return;
              case OVERLOADED_BOOLEAN:
                value === !0 ? target.push(attributeSeparator, attributeNameChunk, attributeEmptyString) : value === !1 || target.push(attributeSeparator, attributeNameChunk, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                return;
              case NUMERIC:
                isNaN(value) || target.push(attributeSeparator, attributeNameChunk, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
              case POSITIVE_NUMERIC:
                !isNaN(value) && value >= 1 && target.push(attributeSeparator, attributeNameChunk, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
              default:
                propertyInfo.sanitizeURL && (checkAttributeStringCoercion(value, attributeName), value = "" + value, sanitizeURL(value)), target.push(attributeSeparator, attributeNameChunk, attributeAssign, escapeTextForBrowser(value), attributeEnd);
            }
          } else if (isAttributeNameSafe(name)) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                var prefix2 = name.toLowerCase().slice(0, 5);
                if (prefix2 !== "data-" && prefix2 !== "aria-")
                  return;
              }
            }
            target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
          }
        }
      }
      var endOfStartTag = ">", endOfStartTagSelfClosing = "/>";
      function pushInnerHTML(target, innerHTML, children) {
        if (innerHTML != null) {
          if (children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof innerHTML != "object" || !("__html" in innerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          var html = innerHTML.__html;
          html != null && (checkHtmlStringCoercion(html), target.push("" + html));
        }
      }
      var didWarnDefaultInputValue = !1, didWarnDefaultChecked = !1, didWarnDefaultSelectValue = !1, didWarnDefaultTextareaValue = !1, didWarnInvalidOptionChildren = !1, didWarnInvalidOptionInnerHTML = !1, didWarnSelectedSetOnOption = !1;
      function checkSelectProp(props, propName) {
        {
          var value = props[propName];
          if (value != null) {
            var array = isArray(value);
            props.multiple && !array ? error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName) : !props.multiple && array && error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
          }
        }
      }
      function pushStartSelect(target, props, responseState) {
        checkControlledValueProps("select", props), checkSelectProp(props, "value"), checkSelectProp(props, "defaultValue"), props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue && (error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), didWarnDefaultSelectValue = !0), target.push(startChunkForTag("select"));
        var children = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return target.push(endOfStartTag), pushInnerHTML(target, innerHTML, children), children;
      }
      function flattenOptionChildren(children) {
        var content = "";
        return React6.Children.forEach(children, function(child) {
          child != null && (content += child, !didWarnInvalidOptionChildren && typeof child != "string" && typeof child != "number" && (didWarnInvalidOptionChildren = !0, error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
        }), content;
      }
      var selectedMarkerAttribute = ' selected=""';
      function pushStartOption(target, props, responseState, formatContext) {
        var selectedValue = formatContext.selectedValue;
        target.push(startChunkForTag("option"));
        var children = null, value = null, selected = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "selected":
                selected = propValue, didWarnSelectedSetOnOption || (error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), didWarnSelectedSetOnOption = !0);
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "value":
                value = propValue;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        if (selectedValue != null) {
          var stringValue;
          if (value !== null ? (checkAttributeStringCoercion(value, "value"), stringValue = "" + value) : (innerHTML !== null && (didWarnInvalidOptionInnerHTML || (didWarnInvalidOptionInnerHTML = !0, error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), stringValue = flattenOptionChildren(children)), isArray(selectedValue))
            for (var i = 0; i < selectedValue.length; i++) {
              checkAttributeStringCoercion(selectedValue[i], "value");
              var v = "" + selectedValue[i];
              if (v === stringValue) {
                target.push(selectedMarkerAttribute);
                break;
              }
            }
          else
            checkAttributeStringCoercion(selectedValue, "select.value"), "" + selectedValue === stringValue && target.push(selectedMarkerAttribute);
        } else
          selected && target.push(selectedMarkerAttribute);
        return target.push(endOfStartTag), pushInnerHTML(target, innerHTML, children), children;
      }
      function pushInput(target, props, responseState) {
        checkControlledValueProps("input", props), props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked && (error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type), didWarnDefaultChecked = !0), props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue && (error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type), didWarnDefaultInputValue = !0), target.push(startChunkForTag("input"));
        var value = null, defaultValue = null, checked = null, defaultChecked = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              case "defaultChecked":
                defaultChecked = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "checked":
                checked = propValue;
                break;
              case "value":
                value = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return checked !== null ? pushAttribute(target, responseState, "checked", checked) : defaultChecked !== null && pushAttribute(target, responseState, "checked", defaultChecked), value !== null ? pushAttribute(target, responseState, "value", value) : defaultValue !== null && pushAttribute(target, responseState, "value", defaultValue), target.push(endOfStartTagSelfClosing), null;
      }
      function pushStartTextArea(target, props, responseState) {
        checkControlledValueProps("textarea", props), props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue && (error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), didWarnDefaultTextareaValue = !0), target.push(startChunkForTag("textarea"));
        var value = null, defaultValue = null, children = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "value":
                value = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        if (value === null && defaultValue !== null && (value = defaultValue), target.push(endOfStartTag), children != null) {
          if (error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), value != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (isArray(children)) {
            if (children.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            checkHtmlStringCoercion(children[0]), value = "" + children[0];
          }
          checkHtmlStringCoercion(children), value = "" + children;
        }
        return typeof value == "string" && value[0] === `
` && target.push(leadingNewline), value !== null && (checkAttributeStringCoercion(value, "value"), target.push(encodeHTMLTextNode("" + value))), null;
      }
      function pushSelfClosing(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return target.push(endOfStartTagSelfClosing), null;
      }
      function pushStartMenuItem(target, props, responseState) {
        target.push(startChunkForTag("menuitem"));
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return target.push(endOfStartTag), null;
      }
      function pushStartTitle(target, props, responseState) {
        target.push(startChunkForTag("title"));
        var children = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        target.push(endOfStartTag);
        {
          var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
          Array.isArray(children) && children.length > 1 ? error("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : child != null && child.$$typeof != null ? error("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : child != null && typeof child != "string" && typeof child != "number" && error("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
        }
        return children;
      }
      function pushStartGenericElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return target.push(endOfStartTag), pushInnerHTML(target, innerHTML, children), typeof children == "string" ? (target.push(encodeHTMLTextNode(children)), null) : children;
      }
      function pushStartCustomElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "style":
                pushStyle(target, responseState, propValue);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                isAttributeNameSafe(propKey) && typeof propValue != "function" && typeof propValue != "symbol" && target.push(attributeSeparator, propKey, attributeAssign, escapeTextForBrowser(propValue), attributeEnd);
                break;
            }
          }
        return target.push(endOfStartTag), pushInnerHTML(target, innerHTML, children), children;
      }
      var leadingNewline = `
`;
      function pushStartPreformattedElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        if (target.push(endOfStartTag), innerHTML != null) {
          if (children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof innerHTML != "object" || !("__html" in innerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          var html = innerHTML.__html;
          html != null && (typeof html == "string" && html.length > 0 && html[0] === `
` ? target.push(leadingNewline, html) : (checkHtmlStringCoercion(html), target.push("" + html)));
        }
        return typeof children == "string" && children[0] === `
` && target.push(leadingNewline), children;
      }
      var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, validatedTagCache = /* @__PURE__ */ new Map();
      function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (tagStartChunk === void 0) {
          if (!VALID_TAG_REGEX.test(tag))
            throw new Error("Invalid tag: " + tag);
          tagStartChunk = "<" + tag, validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
      }
      var DOCTYPE = "<!DOCTYPE html>";
      function pushStartInstance(target, type, props, responseState, formatContext) {
        switch (validateProperties(type, props), validateProperties$1(type, props), validateProperties$2(type, props, null), !props.suppressContentEditableWarning && props.contentEditable && props.children != null && error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE && type.indexOf("-") === -1 && typeof props.is != "string" && type.toLowerCase() !== type && error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type), type) {
          case "select":
            return pushStartSelect(target, props, responseState);
          case "option":
            return pushStartOption(target, props, responseState, formatContext);
          case "textarea":
            return pushStartTextArea(target, props, responseState);
          case "input":
            return pushInput(target, props, responseState);
          case "menuitem":
            return pushStartMenuItem(target, props, responseState);
          case "title":
            return pushStartTitle(target, props, responseState);
          case "listing":
          case "pre":
            return pushStartPreformattedElement(target, props, type, responseState);
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            return pushSelfClosing(target, props, type, responseState);
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return pushStartGenericElement(target, props, type, responseState);
          case "html":
            return formatContext.insertionMode === ROOT_HTML_MODE && target.push(DOCTYPE), pushStartGenericElement(target, props, type, responseState);
          default:
            return type.indexOf("-") === -1 && typeof props.is != "string" ? pushStartGenericElement(target, props, type, responseState) : pushStartCustomElement(target, props, type, responseState);
        }
      }
      var endTag1 = "</", endTag2 = ">";
      function pushEndInstance(target, type, props) {
        switch (type) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            target.push(endTag1, type, endTag2);
        }
      }
      function writeCompletedRoot(destination, responseState) {
        for (var bootstrapChunks = responseState.bootstrapChunks, i = 0; i < bootstrapChunks.length - 1; i++)
          writeChunk(destination, bootstrapChunks[i]);
        return i < bootstrapChunks.length ? writeChunkAndReturn(destination, bootstrapChunks[i]) : !0;
      }
      var placeholder1 = '<template id="', placeholder2 = '"></template>';
      function writePlaceholder(destination, responseState, id) {
        writeChunk(destination, placeholder1), writeChunk(destination, responseState.placeholderPrefix);
        var formattedID = id.toString(16);
        return writeChunk(destination, formattedID), writeChunkAndReturn(destination, placeholder2);
      }
      var startCompletedSuspenseBoundary = "<!--$-->", startPendingSuspenseBoundary1 = '<!--$?--><template id="', startPendingSuspenseBoundary2 = '"></template>', startClientRenderedSuspenseBoundary = "<!--$!-->", endSuspenseBoundary = "<!--/$-->", clientRenderedSuspenseBoundaryError1 = "<template", clientRenderedSuspenseBoundaryErrorAttrInterstitial = '"', clientRenderedSuspenseBoundaryError1A = ' data-dgst="', clientRenderedSuspenseBoundaryError1B = ' data-msg="', clientRenderedSuspenseBoundaryError1C = ' data-stck="', clientRenderedSuspenseBoundaryError2 = "></template>";
      function writeStartCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
      }
      function writeStartPendingSuspenseBoundary(destination, responseState, id) {
        if (writeChunk(destination, startPendingSuspenseBoundary1), id === null)
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        return writeChunk(destination, id), writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
      }
      function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
        var result;
        return result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary), writeChunk(destination, clientRenderedSuspenseBoundaryError1), errorDigest && (writeChunk(destination, clientRenderedSuspenseBoundaryError1A), writeChunk(destination, escapeTextForBrowser(errorDigest)), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial)), errorMesssage && (writeChunk(destination, clientRenderedSuspenseBoundaryError1B), writeChunk(destination, escapeTextForBrowser(errorMesssage)), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial)), errorComponentStack && (writeChunk(destination, clientRenderedSuspenseBoundaryError1C), writeChunk(destination, escapeTextForBrowser(errorComponentStack)), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial)), result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2), result;
      }
      function writeEndCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndPendingSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      var startSegmentHTML = '<div hidden id="', startSegmentHTML2 = '">', endSegmentHTML = "</div>", startSegmentSVG = '<svg aria-hidden="true" style="display:none" id="', startSegmentSVG2 = '">', endSegmentSVG = "</svg>", startSegmentMathML = '<math aria-hidden="true" style="display:none" id="', startSegmentMathML2 = '">', endSegmentMathML = "</math>", startSegmentTable = '<table hidden id="', startSegmentTable2 = '">', endSegmentTable = "</table>", startSegmentTableBody = '<table hidden><tbody id="', startSegmentTableBody2 = '">', endSegmentTableBody = "</tbody></table>", startSegmentTableRow = '<table hidden><tr id="', startSegmentTableRow2 = '">', endSegmentTableRow = "</tr></table>", startSegmentColGroup = '<table hidden><colgroup id="', startSegmentColGroup2 = '">', endSegmentColGroup = "</colgroup></table>";
      function writeStartSegment(destination, responseState, formatContext, id) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE:
            return writeChunk(destination, startSegmentHTML), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentHTML2);
          case SVG_MODE:
            return writeChunk(destination, startSegmentSVG), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentSVG2);
          case MATHML_MODE:
            return writeChunk(destination, startSegmentMathML), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentMathML2);
          case HTML_TABLE_MODE:
            return writeChunk(destination, startSegmentTable), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentTable2);
          case HTML_TABLE_BODY_MODE:
            return writeChunk(destination, startSegmentTableBody), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentTableBody2);
          case HTML_TABLE_ROW_MODE:
            return writeChunk(destination, startSegmentTableRow), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentTableRow2);
          case HTML_COLGROUP_MODE:
            return writeChunk(destination, startSegmentColGroup), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentColGroup2);
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      function writeEndSegment(destination, formatContext) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE:
            return writeChunkAndReturn(destination, endSegmentHTML);
          case SVG_MODE:
            return writeChunkAndReturn(destination, endSegmentSVG);
          case MATHML_MODE:
            return writeChunkAndReturn(destination, endSegmentMathML);
          case HTML_TABLE_MODE:
            return writeChunkAndReturn(destination, endSegmentTable);
          case HTML_TABLE_BODY_MODE:
            return writeChunkAndReturn(destination, endSegmentTableBody);
          case HTML_TABLE_ROW_MODE:
            return writeChunkAndReturn(destination, endSegmentTableRow);
          case HTML_COLGROUP_MODE:
            return writeChunkAndReturn(destination, endSegmentColGroup);
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', completeSegmentScript1Full = completeSegmentFunction + ';$RS("', completeSegmentScript1Partial = '$RS("', completeSegmentScript2 = '","', completeSegmentScript3 = '")<\/script>';
      function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript), responseState.sentCompleteSegmentFunction ? writeChunk(destination, completeSegmentScript1Partial) : (responseState.sentCompleteSegmentFunction = !0, writeChunk(destination, completeSegmentScript1Full)), writeChunk(destination, responseState.segmentPrefix);
        var formattedID = contentSegmentID.toString(16);
        return writeChunk(destination, formattedID), writeChunk(destination, completeSegmentScript2), writeChunk(destination, responseState.placeholderPrefix), writeChunk(destination, formattedID), writeChunkAndReturn(destination, completeSegmentScript3);
      }
      var completeBoundaryScript1Full = completeBoundaryFunction + ';$RC("', completeBoundaryScript1Partial = '$RC("', completeBoundaryScript2 = '","', completeBoundaryScript3 = '")<\/script>';
      function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
        if (writeChunk(destination, responseState.startInlineScript), responseState.sentCompleteBoundaryFunction ? writeChunk(destination, completeBoundaryScript1Partial) : (responseState.sentCompleteBoundaryFunction = !0, writeChunk(destination, completeBoundaryScript1Full)), boundaryID === null)
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        var formattedContentID = contentSegmentID.toString(16);
        return writeChunk(destination, boundaryID), writeChunk(destination, completeBoundaryScript2), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, formattedContentID), writeChunkAndReturn(destination, completeBoundaryScript3);
      }
      var clientRenderScript1Full = clientRenderFunction + ';$RX("', clientRenderScript1Partial = '$RX("', clientRenderScript1A = '"', clientRenderScript2 = ")<\/script>", clientRenderErrorScriptArgInterstitial = ",";
      function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
        if (writeChunk(destination, responseState.startInlineScript), responseState.sentClientRenderFunction ? writeChunk(destination, clientRenderScript1Partial) : (responseState.sentClientRenderFunction = !0, writeChunk(destination, clientRenderScript1Full)), boundaryID === null)
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        return writeChunk(destination, boundaryID), writeChunk(destination, clientRenderScript1A), (errorDigest || errorMessage || errorComponentStack) && (writeChunk(destination, clientRenderErrorScriptArgInterstitial), writeChunk(destination, escapeJSStringsForInstructionScripts(errorDigest || ""))), (errorMessage || errorComponentStack) && (writeChunk(destination, clientRenderErrorScriptArgInterstitial), writeChunk(destination, escapeJSStringsForInstructionScripts(errorMessage || ""))), errorComponentStack && (writeChunk(destination, clientRenderErrorScriptArgInterstitial), writeChunk(destination, escapeJSStringsForInstructionScripts(errorComponentStack))), writeChunkAndReturn(destination, clientRenderScript2);
      }
      var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
      function escapeJSStringsForInstructionScripts(input) {
        var escaped = JSON.stringify(input);
        return escaped.replace(regexForJSStringsInScripts, function(match) {
          switch (match) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
          }
        });
      }
      function createResponseState$1(generateStaticMarkup, identifierPrefix) {
        var responseState = createResponseState(identifierPrefix, void 0);
        return {
          bootstrapChunks: responseState.bootstrapChunks,
          startInlineScript: responseState.startInlineScript,
          placeholderPrefix: responseState.placeholderPrefix,
          segmentPrefix: responseState.segmentPrefix,
          boundaryPrefix: responseState.boundaryPrefix,
          idPrefix: responseState.idPrefix,
          nextSuspenseID: responseState.nextSuspenseID,
          sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
          sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
          sentClientRenderFunction: responseState.sentClientRenderFunction,
          generateStaticMarkup
        };
      }
      function createRootFormatContext() {
        return {
          insertionMode: HTML_MODE,
          selectedValue: null
        };
      }
      function pushTextInstance$1(target, text, responseState, textEmbedded) {
        return responseState.generateStaticMarkup ? (target.push(escapeTextForBrowser(text)), !1) : pushTextInstance(target, text, responseState, textEmbedded);
      }
      function pushSegmentFinale$1(target, responseState, lastPushedText, textEmbedded) {
        if (!responseState.generateStaticMarkup)
          return pushSegmentFinale(target, responseState, lastPushedText, textEmbedded);
      }
      function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
        return responseState.generateStaticMarkup ? !0 : writeStartCompletedSuspenseBoundary(destination);
      }
      function writeStartClientRenderedSuspenseBoundary$1(destination, responseState, errorDigest, errorMessage, errorComponentStack) {
        return responseState.generateStaticMarkup ? !0 : writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMessage, errorComponentStack);
      }
      function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
        return responseState.generateStaticMarkup ? !0 : writeEndCompletedSuspenseBoundary(destination);
      }
      function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
        return responseState.generateStaticMarkup ? !0 : writeEndClientRenderedSuspenseBoundary(destination);
      }
      var assign = Object.assign, REACT_ELEMENT_TYPE = Symbol.for("react.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_SCOPE_TYPE = Symbol.for("react.scope"), REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode"), REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"), REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable != "object")
          return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator == "function" ? maybeIterator : null;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName)
          return displayName;
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null)
          return null;
        if (typeof type.tag == "number" && error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof type == "function")
          return type.displayName || type.name || null;
        if (typeof type == "string")
          return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              return outerName !== null ? outerName : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = !0;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log, prevInfo = console.info, prevWarn = console.warn, prevError = console.error, prevGroup = console.group, prevGroupCollapsed = console.groupCollapsed, prevGroupEnd = console.groupEnd;
            var props = {
              configurable: !0,
              enumerable: !0,
              value: disabledLog,
              writable: !0
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          if (disabledDepth--, disabledDepth === 0) {
            var props = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          disabledDepth < 0 && error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher, prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          return `
` + prefix + name;
        }
      }
      var reentry = !1, componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap == "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0)
            return frame;
        }
        var control;
        reentry = !0;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current, ReactCurrentDispatcher.current = null, disableLogs();
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            if (Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack == "string") {
            for (var sampleLines = sample.stack.split(`
`), controlLines = control.stack.split(`
`), s = sampleLines.length - 1, c = controlLines.length - 1; s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]; )
              c--;
            for (; s >= 1 && c >= 0; s--, c--)
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1)
                  do
                    if (s--, c--, c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = `
` + sampleLines[s].replace(" at new ", " at ");
                      return fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName)), typeof fn == "function" && componentFrameCache.set(fn, _frame), _frame;
                    }
                  while (s >= 1 && c >= 0);
                break;
              }
          }
        } finally {
          reentry = !1, ReactCurrentDispatcher.current = previousDispatcher, reenableLogs(), Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "", syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        return typeof fn == "function" && componentFrameCache.set(fn, syntheticFrame), syntheticFrame;
      }
      function describeClassComponentFrame(ctor, source, ownerFn) {
        return describeNativeComponentFrame(ctor, !0);
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, !1);
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null)
          return "";
        if (typeof type == "function")
          return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type == "string")
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch {
              }
            }
          }
        return "";
      }
      var loggedTypeFailures = {}, ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame.setExtraStackFrame(null);
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs)
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] != "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw err.name = "Invariant Violation", err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              error$1 && !(error$1 instanceof Error) && (setCurrentlyValidatingElement(element), error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1), setCurrentlyValidatingElement(null)), error$1 instanceof Error && !(error$1.message in loggedTypeFailures) && (loggedTypeFailures[error$1.message] = !0, setCurrentlyValidatingElement(element), error("Failed %s type: %s", location, error$1.message), setCurrentlyValidatingElement(null));
            }
        }
      }
      var warnedAboutMissingGetChildContext;
      warnedAboutMissingGetChildContext = {};
      var emptyContextObject = {};
      Object.freeze(emptyContextObject);
      function getMaskedContext(type, unmaskedContext) {
        {
          var contextTypes = type.contextTypes;
          if (!contextTypes)
            return emptyContextObject;
          var context = {};
          for (var key in contextTypes)
            context[key] = unmaskedContext[key];
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(contextTypes, context, "context", name);
          }
          return context;
        }
      }
      function processChildContext(instance, type, parentContext, childContextTypes) {
        {
          if (typeof instance.getChildContext != "function") {
            {
              var componentName = getComponentNameFromType(type) || "Unknown";
              warnedAboutMissingGetChildContext[componentName] || (warnedAboutMissingGetChildContext[componentName] = !0, error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName));
            }
            return parentContext;
          }
          var childContext = instance.getChildContext();
          for (var contextKey in childContext)
            if (!(contextKey in childContextTypes))
              throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(childContextTypes, childContext, "child context", name);
          }
          return assign({}, parentContext, childContext);
        }
      }
      var rendererSigil;
      rendererSigil = {};
      var rootContextSnapshot = null, currentActiveSnapshot = null;
      function popNode(prev) {
        prev.context._currentValue2 = prev.parentValue;
      }
      function pushNode(next) {
        next.context._currentValue2 = next.value;
      }
      function popToNearestCommonAncestor(prev, next) {
        if (prev !== next) {
          popNode(prev);
          var parentPrev = prev.parent, parentNext = next.parent;
          if (parentPrev === null) {
            if (parentNext !== null)
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          } else {
            if (parentNext === null)
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            popToNearestCommonAncestor(parentPrev, parentNext);
          }
          pushNode(next);
        }
      }
      function popAllPrevious(prev) {
        popNode(prev);
        var parentPrev = prev.parent;
        parentPrev !== null && popAllPrevious(parentPrev);
      }
      function pushAllNext(next) {
        var parentNext = next.parent;
        parentNext !== null && pushAllNext(parentNext), pushNode(next);
      }
      function popPreviousToCommonLevel(prev, next) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev === null)
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        parentPrev.depth === next.depth ? popToNearestCommonAncestor(parentPrev, next) : popPreviousToCommonLevel(parentPrev, next);
      }
      function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (parentNext === null)
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext), pushNode(next);
      }
      function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot, next = newSnapshot;
        prev !== next && (prev === null ? pushAllNext(next) : next === null ? popAllPrevious(prev) : prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : prev.depth > next.depth ? popPreviousToCommonLevel(prev, next) : popNextToCommonLevel(prev, next), currentActiveSnapshot = next);
      }
      function pushProvider(context, nextValue) {
        var prevValue;
        prevValue = context._currentValue2, context._currentValue2 = nextValue, context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil && error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), context._currentRenderer2 = rendererSigil;
        var prevNode = currentActiveSnapshot, newNode = {
          parent: prevNode,
          depth: prevNode === null ? 0 : prevNode.depth + 1,
          context,
          parentValue: prevValue,
          value: nextValue
        };
        return currentActiveSnapshot = newNode, newNode;
      }
      function popProvider(context) {
        var prevSnapshot = currentActiveSnapshot;
        if (prevSnapshot === null)
          throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
        prevSnapshot.context !== context && error("The parent context is not the expected context. This is probably a bug in React.");
        {
          var _value = prevSnapshot.parentValue;
          _value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED ? prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue : prevSnapshot.context._currentValue2 = _value, context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil && error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), context._currentRenderer2 = rendererSigil;
        }
        return currentActiveSnapshot = prevSnapshot.parent;
      }
      function getActiveContext() {
        return currentActiveSnapshot;
      }
      function readContext(context) {
        var value = context._currentValue2;
        return value;
      }
      function get(key) {
        return key._reactInternals;
      }
      function set(key, value) {
        key._reactInternals = value;
      }
      var didWarnAboutNoopUpdateForComponent = {}, didWarnAboutDeprecatedWillMount = {}, didWarnAboutUninitializedState, didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate, didWarnAboutLegacyLifecyclesAndDerivedState, didWarnAboutUndefinedDerivedState, warnOnUndefinedDerivedState, warnOnInvalidCallback, didWarnAboutDirectlyAssigningPropsToState, didWarnAboutContextTypeAndContextTypes, didWarnAboutInvalidateContextType;
      {
        didWarnAboutUninitializedState = /* @__PURE__ */ new Set(), didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set(), didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set(), didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set(), didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set(), didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set(), didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
        var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
        warnOnInvalidCallback = function(callback, callerName) {
          if (!(callback === null || typeof callback == "function")) {
            var key = callerName + "_" + callback;
            didWarnOnInvalidCallback.has(key) || (didWarnOnInvalidCallback.add(key), error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback));
          }
        }, warnOnUndefinedDerivedState = function(type, partialState) {
          if (partialState === void 0) {
            var componentName = getComponentNameFromType(type) || "Component";
            didWarnAboutUndefinedDerivedState.has(componentName) || (didWarnAboutUndefinedDerivedState.add(componentName), error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName));
          }
        };
      }
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor, componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass", warningKey = componentName + "." + callerName;
          if (didWarnAboutNoopUpdateForComponent[warningKey])
            return;
          error(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, callerName, callerName, componentName), didWarnAboutNoopUpdateForComponent[warningKey] = !0;
        }
      }
      var classComponentUpdater = {
        isMounted: function(inst) {
          return !1;
        },
        enqueueSetState: function(inst, payload, callback) {
          var internals = get(inst);
          internals.queue === null ? warnNoop(inst, "setState") : (internals.queue.push(payload), callback != null && warnOnInvalidCallback(callback, "setState"));
        },
        enqueueReplaceState: function(inst, payload, callback) {
          var internals = get(inst);
          internals.replace = !0, internals.queue = [payload], callback != null && warnOnInvalidCallback(callback, "setState");
        },
        enqueueForceUpdate: function(inst, callback) {
          var internals = get(inst);
          internals.queue === null ? warnNoop(inst, "forceUpdate") : callback != null && warnOnInvalidCallback(callback, "setState");
        }
      };
      function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
        var partialState = getDerivedStateFromProps(nextProps, prevState);
        warnOnUndefinedDerivedState(ctor, partialState);
        var newState = partialState == null ? prevState : assign({}, prevState, partialState);
        return newState;
      }
      function constructClassInstance(ctor, props, maskedLegacyContext) {
        var context = emptyContextObject, contextType = ctor.contextType;
        if ("contextType" in ctor) {
          var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
          if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
            didWarnAboutInvalidateContextType.add(ctor);
            var addendum = "";
            contextType === void 0 ? addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof contextType != "object" ? addendum = " However, it is set to a " + typeof contextType + "." : contextType.$$typeof === REACT_PROVIDER_TYPE ? addendum = " Did you accidentally pass the Context.Provider instead?" : contextType._context !== void 0 ? addendum = " Did you accidentally pass the Context.Consumer instead?" : addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.", error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
          }
        }
        typeof contextType == "object" && contextType !== null ? context = readContext(contextType) : context = maskedLegacyContext;
        var instance = new ctor(props, context);
        {
          if (typeof ctor.getDerivedStateFromProps == "function" && (instance.state === null || instance.state === void 0)) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            didWarnAboutUninitializedState.has(componentName) || (didWarnAboutUninitializedState.add(componentName), error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName));
          }
          if (typeof ctor.getDerivedStateFromProps == "function" || typeof instance.getSnapshotBeforeUpdate == "function") {
            var foundWillMountName = null, foundWillReceivePropsName = null, foundWillUpdateName = null;
            if (typeof instance.componentWillMount == "function" && instance.componentWillMount.__suppressDeprecationWarning !== !0 ? foundWillMountName = "componentWillMount" : typeof instance.UNSAFE_componentWillMount == "function" && (foundWillMountName = "UNSAFE_componentWillMount"), typeof instance.componentWillReceiveProps == "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? foundWillReceivePropsName = "componentWillReceiveProps" : typeof instance.UNSAFE_componentWillReceiveProps == "function" && (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps"), typeof instance.componentWillUpdate == "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== !0 ? foundWillUpdateName = "componentWillUpdate" : typeof instance.UNSAFE_componentWillUpdate == "function" && (foundWillUpdateName = "UNSAFE_componentWillUpdate"), foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
              var _componentName = getComponentNameFromType(ctor) || "Component", newApiName = typeof ctor.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName) || (didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName), error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _componentName, newApiName, foundWillMountName !== null ? `
  ` + foundWillMountName : "", foundWillReceivePropsName !== null ? `
  ` + foundWillReceivePropsName : "", foundWillUpdateName !== null ? `
  ` + foundWillUpdateName : ""));
            }
          }
        }
        return instance;
      }
      function checkClassInstance(instance, ctor, newProps) {
        {
          var name = getComponentNameFromType(ctor) || "Component", renderPresent = instance.render;
          renderPresent || (ctor.prototype && typeof ctor.prototype.render == "function" ? error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name) : error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name)), instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state && error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name), instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved && error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name), instance.propTypes && error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name), instance.contextType && error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name), instance.contextTypes && error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name), ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor) && (didWarnAboutContextTypeAndContextTypes.add(ctor), error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name)), typeof instance.componentShouldUpdate == "function" && error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name), ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate < "u" && error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component"), typeof instance.componentDidUnmount == "function" && error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name), typeof instance.componentDidReceiveProps == "function" && error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name), typeof instance.componentWillRecieveProps == "function" && error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name), typeof instance.UNSAFE_componentWillRecieveProps == "function" && error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
          var hasMutatedProps = instance.props !== newProps;
          instance.props !== void 0 && hasMutatedProps && error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name), instance.defaultProps && error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name), typeof instance.getSnapshotBeforeUpdate == "function" && typeof instance.componentDidUpdate != "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor) && (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor), error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor))), typeof instance.getDerivedStateFromProps == "function" && error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name), typeof instance.getDerivedStateFromError == "function" && error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name), typeof ctor.getSnapshotBeforeUpdate == "function" && error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
          var _state = instance.state;
          _state && (typeof _state != "object" || isArray(_state)) && error("%s.state: must be set to an object or null", name), typeof instance.getChildContext == "function" && typeof ctor.childContextTypes != "object" && error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
        }
      }
      function callComponentWillMount(type, instance) {
        var oldState = instance.state;
        if (typeof instance.componentWillMount == "function") {
          if (instance.componentWillMount.__suppressDeprecationWarning !== !0) {
            var componentName = getComponentNameFromType(type) || "Unknown";
            didWarnAboutDeprecatedWillMount[componentName] || (warn(
              `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
              componentName
            ), didWarnAboutDeprecatedWillMount[componentName] = !0);
          }
          instance.componentWillMount();
        }
        typeof instance.UNSAFE_componentWillMount == "function" && instance.UNSAFE_componentWillMount(), oldState !== instance.state && (error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component"), classComponentUpdater.enqueueReplaceState(instance, instance.state, null));
      }
      function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
        if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
          var oldQueue = internalInstance.queue, oldReplace = internalInstance.replace;
          if (internalInstance.queue = null, internalInstance.replace = !1, oldReplace && oldQueue.length === 1)
            inst.state = oldQueue[0];
          else {
            for (var nextState = oldReplace ? oldQueue[0] : inst.state, dontMutate = !0, i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
              var partial = oldQueue[i], partialState = typeof partial == "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
              partialState != null && (dontMutate ? (dontMutate = !1, nextState = assign({}, nextState, partialState)) : assign(nextState, partialState));
            }
            inst.state = nextState;
          }
        } else
          internalInstance.queue = null;
      }
      function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
        checkClassInstance(instance, ctor, newProps);
        var initialState = instance.state !== void 0 ? instance.state : null;
        instance.updater = classComponentUpdater, instance.props = newProps, instance.state = initialState;
        var internalInstance = {
          queue: [],
          replace: !1
        };
        set(instance, internalInstance);
        var contextType = ctor.contextType;
        if (typeof contextType == "object" && contextType !== null ? instance.context = readContext(contextType) : instance.context = maskedLegacyContext, instance.state === newProps) {
          var componentName = getComponentNameFromType(ctor) || "Component";
          didWarnAboutDirectlyAssigningPropsToState.has(componentName) || (didWarnAboutDirectlyAssigningPropsToState.add(componentName), error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName));
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        typeof getDerivedStateFromProps == "function" && (instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps)), typeof ctor.getDerivedStateFromProps != "function" && typeof instance.getSnapshotBeforeUpdate != "function" && (typeof instance.UNSAFE_componentWillMount == "function" || typeof instance.componentWillMount == "function") && (callComponentWillMount(ctor, instance), processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext));
      }
      var emptyTreeContext = {
        id: 1,
        overflow: ""
      };
      function getTreeId(context) {
        var overflow = context.overflow, idWithLeadingBit = context.id, id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
        return id.toString(32) + overflow;
      }
      function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id, baseOverflow = baseContext.overflow, baseLength = getBitLength(baseIdWithLeadingBit) - 1, baseId = baseIdWithLeadingBit & ~(1 << baseLength), slot = index + 1, length = getBitLength(totalChildren) + baseLength;
        if (length > 30) {
          var numberOfOverflowBits = baseLength - baseLength % 5, newOverflowBits = (1 << numberOfOverflowBits) - 1, newOverflow = (baseId & newOverflowBits).toString(32), restOfBaseId = baseId >> numberOfOverflowBits, restOfBaseLength = baseLength - numberOfOverflowBits, restOfLength = getBitLength(totalChildren) + restOfBaseLength, restOfNewBits = slot << restOfBaseLength, id = restOfNewBits | restOfBaseId, overflow = newOverflow + baseOverflow;
          return {
            id: 1 << restOfLength | id,
            overflow
          };
        } else {
          var newBits = slot << baseLength, _id = newBits | baseId, _overflow = baseOverflow;
          return {
            id: 1 << length | _id,
            overflow: _overflow
          };
        }
      }
      function getBitLength(number) {
        return 32 - clz32(number);
      }
      function getLeadingBit(id) {
        return 1 << getBitLength(id) - 1;
      }
      var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2;
      function clz32Fallback(x) {
        var asUint = x >>> 0;
        return asUint === 0 ? 32 : 31 - (log(asUint) / LN2 | 0) | 0;
      }
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = typeof Object.is == "function" ? Object.is : is, currentlyRenderingComponent = null, currentlyRenderingTask = null, firstWorkInProgressHook = null, workInProgressHook = null, isReRender = !1, didScheduleRenderPhaseUpdate = !1, localIdCounter = 0, renderPhaseUpdates = null, numberOfReRenders = 0, RE_RENDER_LIMIT = 25, isInHookUserCodeInDev = !1, currentHookNameInDev;
      function resolveCurrentlyRenderingComponent() {
        if (currentlyRenderingComponent === null)
          throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return isInHookUserCodeInDev && error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), currentlyRenderingComponent;
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (prevDeps === null)
          return error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev), !1;
        nextDeps.length !== prevDeps.length && error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
        for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
          if (!objectIs(nextDeps[i], prevDeps[i]))
            return !1;
        return !0;
      }
      function createHook() {
        if (numberOfReRenders > 0)
          throw new Error("Rendered more hooks than during the previous render");
        return {
          memoizedState: null,
          queue: null,
          next: null
        };
      }
      function createWorkInProgressHook() {
        return workInProgressHook === null ? firstWorkInProgressHook === null ? (isReRender = !1, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = !0, workInProgressHook = firstWorkInProgressHook) : workInProgressHook.next === null ? (isReRender = !1, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = !0, workInProgressHook = workInProgressHook.next), workInProgressHook;
      }
      function prepareToUseHooks(task, componentIdentity) {
        currentlyRenderingComponent = componentIdentity, currentlyRenderingTask = task, isInHookUserCodeInDev = !1, localIdCounter = 0;
      }
      function finishHooks(Component, props, children, refOrContext) {
        for (; didScheduleRenderPhaseUpdate; )
          didScheduleRenderPhaseUpdate = !1, localIdCounter = 0, numberOfReRenders += 1, workInProgressHook = null, children = Component(props, refOrContext);
        return resetHooksState(), children;
      }
      function checkDidRenderIdHook() {
        var didRenderIdHook = localIdCounter !== 0;
        return didRenderIdHook;
      }
      function resetHooksState() {
        isInHookUserCodeInDev = !1, currentlyRenderingComponent = null, currentlyRenderingTask = null, didScheduleRenderPhaseUpdate = !1, firstWorkInProgressHook = null, numberOfReRenders = 0, renderPhaseUpdates = null, workInProgressHook = null;
      }
      function readContext$1(context) {
        return isInHookUserCodeInDev && error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), readContext(context);
      }
      function useContext4(context) {
        return currentHookNameInDev = "useContext", resolveCurrentlyRenderingComponent(), readContext(context);
      }
      function basicStateReducer(state, action2) {
        return typeof action2 == "function" ? action2(state) : action2;
      }
      function useState10(initialState) {
        return currentHookNameInDev = "useState", useReducer2(
          basicStateReducer,
          initialState
        );
      }
      function useReducer2(reducer, initialArg, init) {
        if (reducer !== basicStateReducer && (currentHookNameInDev = "useReducer"), currentlyRenderingComponent = resolveCurrentlyRenderingComponent(), workInProgressHook = createWorkInProgressHook(), isReRender) {
          var queue = workInProgressHook.queue, dispatch = queue.dispatch;
          if (renderPhaseUpdates !== null) {
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate !== void 0) {
              renderPhaseUpdates.delete(queue);
              var newState = workInProgressHook.memoizedState, update = firstRenderPhaseUpdate;
              do {
                var action2 = update.action;
                isInHookUserCodeInDev = !0, newState = reducer(newState, action2), isInHookUserCodeInDev = !1, update = update.next;
              } while (update !== null);
              return workInProgressHook.memoizedState = newState, [newState, dispatch];
            }
          }
          return [workInProgressHook.memoizedState, dispatch];
        } else {
          isInHookUserCodeInDev = !0;
          var initialState;
          reducer === basicStateReducer ? initialState = typeof initialArg == "function" ? initialArg() : initialArg : initialState = init !== void 0 ? init(initialArg) : initialArg, isInHookUserCodeInDev = !1, workInProgressHook.memoizedState = initialState;
          var _queue = workInProgressHook.queue = {
            last: null,
            dispatch: null
          }, _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
          return [workInProgressHook.memoizedState, _dispatch];
        }
      }
      function useMemo4(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent(), workInProgressHook = createWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        if (workInProgressHook !== null) {
          var prevState = workInProgressHook.memoizedState;
          if (prevState !== null && nextDeps !== null) {
            var prevDeps = prevState[1];
            if (areHookInputsEqual(nextDeps, prevDeps))
              return prevState[0];
          }
        }
        isInHookUserCodeInDev = !0;
        var nextValue = nextCreate();
        return isInHookUserCodeInDev = !1, workInProgressHook.memoizedState = [nextValue, nextDeps], nextValue;
      }
      function useRef6(initialValue) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent(), workInProgressHook = createWorkInProgressHook();
        var previousRef = workInProgressHook.memoizedState;
        if (previousRef === null) {
          var ref = {
            current: initialValue
          };
          return Object.seal(ref), workInProgressHook.memoizedState = ref, ref;
        } else
          return previousRef;
      }
      function useLayoutEffect4(create, inputs) {
        currentHookNameInDev = "useLayoutEffect", error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
      }
      function dispatchAction(componentIdentity, queue, action2) {
        if (numberOfReRenders >= RE_RENDER_LIMIT)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        if (componentIdentity === currentlyRenderingComponent) {
          didScheduleRenderPhaseUpdate = !0;
          var update = {
            action: action2,
            next: null
          };
          renderPhaseUpdates === null && (renderPhaseUpdates = /* @__PURE__ */ new Map());
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
          if (firstRenderPhaseUpdate === void 0)
            renderPhaseUpdates.set(queue, update);
          else {
            for (var lastRenderPhaseUpdate = firstRenderPhaseUpdate; lastRenderPhaseUpdate.next !== null; )
              lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            lastRenderPhaseUpdate.next = update;
          }
        }
      }
      function useCallback5(callback, deps) {
        return useMemo4(function() {
          return callback;
        }, deps);
      }
      function useMutableSource(source, getSnapshot, subscribe) {
        return resolveCurrentlyRenderingComponent(), getSnapshot(source._source);
      }
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        if (getServerSnapshot === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        return getServerSnapshot();
      }
      function useDeferredValue(value) {
        return resolveCurrentlyRenderingComponent(), value;
      }
      function unsupportedStartTransition() {
        throw new Error("startTransition cannot be called during server rendering.");
      }
      function useTransition2() {
        return resolveCurrentlyRenderingComponent(), [!1, unsupportedStartTransition];
      }
      function useId2() {
        var task = currentlyRenderingTask, treeId = getTreeId(task.treeContext), responseState = currentResponseState;
        if (responseState === null)
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
        var localId = localIdCounter++;
        return makeId(responseState, treeId, localId);
      }
      function noop() {
      }
      var Dispatcher = {
        readContext: readContext$1,
        useContext: useContext4,
        useMemo: useMemo4,
        useReducer: useReducer2,
        useRef: useRef6,
        useState: useState10,
        useInsertionEffect: noop,
        useLayoutEffect: useLayoutEffect4,
        useCallback: useCallback5,
        useImperativeHandle: noop,
        useEffect: noop,
        useDebugValue: noop,
        useDeferredValue,
        useTransition: useTransition2,
        useId: useId2,
        useMutableSource,
        useSyncExternalStore
      }, currentResponseState = null;
      function setCurrentResponseState(responseState) {
        currentResponseState = responseState;
      }
      function getStackByComponentStackNode(componentStack) {
        try {
          var info = "", node = componentStack;
          do {
            switch (node.tag) {
              case 0:
                info += describeBuiltInComponentFrame(node.type, null, null);
                break;
              case 1:
                info += describeFunctionComponentFrame(node.type, null, null);
                break;
              case 2:
                info += describeClassComponentFrame(node.type, null, null);
                break;
            }
            node = node.parent;
          } while (node);
          return info;
        } catch (x) {
          return `
Error generating stack: ` + x.message + `
` + x.stack;
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame, PENDING = 0, COMPLETED = 1, FLUSHED = 2, ABORTED = 3, ERRORED = 4, OPEN = 0, CLOSING = 1, CLOSED = 2, DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
      function defaultErrorHandler(error2) {
        return console.error(error2), null;
      }
      function noop$1() {
      }
      function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError) {
        var pingedTasks = [], abortSet = /* @__PURE__ */ new Set(), request = {
          destination: null,
          responseState,
          progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
          status: OPEN,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: abortSet,
          pingedTasks,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: onError2 === void 0 ? defaultErrorHandler : onError2,
          onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
          onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
          onShellError: onShellError === void 0 ? noop$1 : onShellError,
          onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
        }, rootSegment = createPendingSegment(
          request,
          0,
          null,
          rootFormatContext,
          !1,
          !1
        );
        rootSegment.parentFlushed = !0;
        var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
        return pingedTasks.push(rootTask), request;
      }
      function pingTask(request, task) {
        var pingedTasks = request.pingedTasks;
        pingedTasks.push(task), pingedTasks.length === 1 && scheduleWork(function() {
          return performWork(request);
        });
      }
      function createSuspenseBoundary(request, fallbackAbortableTasks) {
        return {
          id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
          rootSegmentID: -1,
          parentFlushed: !1,
          pendingTasks: 0,
          forceClientRender: !1,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks,
          errorDigest: null
        };
      }
      function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
        request.allPendingTasks++, blockedBoundary === null ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        var task = {
          node,
          ping: function() {
            return pingTask(request, task);
          },
          blockedBoundary,
          blockedSegment,
          abortSet,
          legacyContext,
          context,
          treeContext
        };
        return task.componentStack = null, abortSet.add(task), task;
      }
      function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
        return {
          status: PENDING,
          id: -1,
          index,
          parentFlushed: !1,
          chunks: [],
          children: [],
          formatContext,
          boundary,
          lastPushedText,
          textEmbedded
        };
      }
      var currentTaskInDEV = null;
      function getCurrentStackInDEV() {
        return currentTaskInDEV === null || currentTaskInDEV.componentStack === null ? "" : getStackByComponentStackNode(currentTaskInDEV.componentStack);
      }
      function pushBuiltInComponentStackInDEV(task, type) {
        task.componentStack = {
          tag: 0,
          parent: task.componentStack,
          type
        };
      }
      function pushFunctionComponentStackInDEV(task, type) {
        task.componentStack = {
          tag: 1,
          parent: task.componentStack,
          type
        };
      }
      function pushClassComponentStackInDEV(task, type) {
        task.componentStack = {
          tag: 2,
          parent: task.componentStack,
          type
        };
      }
      function popComponentStackInDEV(task) {
        task.componentStack === null ? error("Unexpectedly popped too many stack frames. This is a bug in React.") : task.componentStack = task.componentStack.parent;
      }
      var lastBoundaryErrorComponentStackDev = null;
      function captureBoundaryErrorDetailsDev(boundary, error2) {
        {
          var errorMessage;
          typeof error2 == "string" ? errorMessage = error2 : error2 && typeof error2.message == "string" ? errorMessage = error2.message : errorMessage = String(error2);
          var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
          lastBoundaryErrorComponentStackDev = null, boundary.errorMessage = errorMessage, boundary.errorComponentStack = errorComponentStack;
        }
      }
      function logRecoverableError(request, error2) {
        var errorDigest = request.onError(error2);
        if (errorDigest != null && typeof errorDigest != "string")
          throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
        return errorDigest;
      }
      function fatalError(request, error2) {
        var onShellError = request.onShellError;
        onShellError(error2);
        var onFatalError = request.onFatalError;
        onFatalError(error2), request.destination !== null ? (request.status = CLOSED, closeWithError(request.destination, error2)) : (request.status = CLOSING, request.fatalError = error2);
      }
      function renderSuspenseBoundary(request, task, props) {
        pushBuiltInComponentStackInDEV(task, "Suspense");
        var parentBoundary = task.blockedBoundary, parentSegment = task.blockedSegment, fallback = props.fallback, content = props.children, fallbackAbortSet = /* @__PURE__ */ new Set(), newBoundary = createSuspenseBoundary(request, fallbackAbortSet), insertionIndex = parentSegment.chunks.length, boundarySegment = createPendingSegment(
          request,
          insertionIndex,
          newBoundary,
          parentSegment.formatContext,
          !1,
          !1
        );
        parentSegment.children.push(boundarySegment), parentSegment.lastPushedText = !1;
        var contentRootSegment = createPendingSegment(
          request,
          0,
          null,
          parentSegment.formatContext,
          !1,
          !1
        );
        contentRootSegment.parentFlushed = !0, task.blockedBoundary = newBoundary, task.blockedSegment = contentRootSegment;
        try {
          if (renderNode(request, task, content), pushSegmentFinale$1(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded), contentRootSegment.status = COMPLETED, queueCompletedSegment(newBoundary, contentRootSegment), newBoundary.pendingTasks === 0) {
            popComponentStackInDEV(task);
            return;
          }
        } catch (error2) {
          contentRootSegment.status = ERRORED, newBoundary.forceClientRender = !0, newBoundary.errorDigest = logRecoverableError(request, error2), captureBoundaryErrorDetailsDev(newBoundary, error2);
        } finally {
          task.blockedBoundary = parentBoundary, task.blockedSegment = parentSegment;
        }
        var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
        suspendedFallbackTask.componentStack = task.componentStack, request.pingedTasks.push(suspendedFallbackTask), popComponentStackInDEV(task);
      }
      function renderHostElement(request, task, type, props) {
        pushBuiltInComponentStackInDEV(task, type);
        var segment = task.blockedSegment, children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
        segment.lastPushedText = !1;
        var prevContext = segment.formatContext;
        segment.formatContext = getChildFormatContext(prevContext, type, props), renderNode(request, task, children), segment.formatContext = prevContext, pushEndInstance(segment.chunks, type), segment.lastPushedText = !1, popComponentStackInDEV(task);
      }
      function shouldConstruct$1(Component) {
        return Component.prototype && Component.prototype.isReactComponent;
      }
      function renderWithHooks(request, task, Component, props, secondArg) {
        var componentIdentity = {};
        prepareToUseHooks(task, componentIdentity);
        var result = Component(props, secondArg);
        return finishHooks(Component, props, result, secondArg);
      }
      function finishClassComponent(request, task, instance, Component, props) {
        var nextChildren = instance.render();
        instance.props !== props && (didWarnAboutReassigningProps || error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component"), didWarnAboutReassigningProps = !0);
        {
          var childContextTypes = Component.childContextTypes;
          if (childContextTypes != null) {
            var previousContext = task.legacyContext, mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
            task.legacyContext = mergedContext, renderNodeDestructive(request, task, nextChildren), task.legacyContext = previousContext;
            return;
          }
        }
        renderNodeDestructive(request, task, nextChildren);
      }
      function renderClassComponent(request, task, Component, props) {
        pushClassComponentStackInDEV(task, Component);
        var maskedContext = getMaskedContext(Component, task.legacyContext), instance = constructClassInstance(Component, props, maskedContext);
        mountClassInstance(instance, Component, props, maskedContext), finishClassComponent(request, task, instance, Component, props), popComponentStackInDEV(task);
      }
      var didWarnAboutBadClass = {}, didWarnAboutModulePatternComponent = {}, didWarnAboutContextTypeOnFunctionComponent = {}, didWarnAboutGetDerivedStateOnFunctionComponent = {}, didWarnAboutReassigningProps = !1, didWarnAboutGenerators = !1, didWarnAboutMaps = !1, hasWarnedAboutUsingContextAsConsumer = !1;
      function renderIndeterminateComponent(request, task, Component, props) {
        var legacyContext;
        if (legacyContext = getMaskedContext(Component, task.legacyContext), pushFunctionComponentStackInDEV(task, Component), Component.prototype && typeof Component.prototype.render == "function") {
          var componentName = getComponentNameFromType(Component) || "Unknown";
          didWarnAboutBadClass[componentName] || (error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName), didWarnAboutBadClass[componentName] = !0);
        }
        var value = renderWithHooks(request, task, Component, props, legacyContext), hasId = checkDidRenderIdHook();
        if (typeof value == "object" && value !== null && typeof value.render == "function" && value.$$typeof === void 0) {
          var _componentName = getComponentNameFromType(Component) || "Unknown";
          didWarnAboutModulePatternComponent[_componentName] || (error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName), didWarnAboutModulePatternComponent[_componentName] = !0);
        }
        if (typeof value == "object" && value !== null && typeof value.render == "function" && value.$$typeof === void 0) {
          {
            var _componentName2 = getComponentNameFromType(Component) || "Unknown";
            didWarnAboutModulePatternComponent[_componentName2] || (error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2), didWarnAboutModulePatternComponent[_componentName2] = !0);
          }
          mountClassInstance(value, Component, props, legacyContext), finishClassComponent(request, task, value, Component, props);
        } else if (validateFunctionComponentInDev(Component), hasId) {
          var prevTreeContext = task.treeContext, totalChildren = 1, index = 0;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
          try {
            renderNodeDestructive(request, task, value);
          } finally {
            task.treeContext = prevTreeContext;
          }
        } else
          renderNodeDestructive(request, task, value);
        popComponentStackInDEV(task);
      }
      function validateFunctionComponentInDev(Component) {
        {
          if (Component && Component.childContextTypes && error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component"), typeof Component.getDerivedStateFromProps == "function") {
            var _componentName3 = getComponentNameFromType(Component) || "Unknown";
            didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] || (error("%s: Function components do not support getDerivedStateFromProps.", _componentName3), didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = !0);
          }
          if (typeof Component.contextType == "object" && Component.contextType !== null) {
            var _componentName4 = getComponentNameFromType(Component) || "Unknown";
            didWarnAboutContextTypeOnFunctionComponent[_componentName4] || (error("%s: Function components do not support contextType.", _componentName4), didWarnAboutContextTypeOnFunctionComponent[_componentName4] = !0);
          }
        }
      }
      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          var props = assign({}, baseProps), defaultProps = Component.defaultProps;
          for (var propName in defaultProps)
            props[propName] === void 0 && (props[propName] = defaultProps[propName]);
          return props;
        }
        return baseProps;
      }
      function renderForwardRef(request, task, type, props, ref) {
        pushFunctionComponentStackInDEV(task, type.render);
        var children = renderWithHooks(request, task, type.render, props, ref), hasId = checkDidRenderIdHook();
        if (hasId) {
          var prevTreeContext = task.treeContext, totalChildren = 1, index = 0;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
          try {
            renderNodeDestructive(request, task, children);
          } finally {
            task.treeContext = prevTreeContext;
          }
        } else
          renderNodeDestructive(request, task, children);
        popComponentStackInDEV(task);
      }
      function renderMemo(request, task, type, props, ref) {
        var innerType = type.type, resolvedProps = resolveDefaultProps(innerType, props);
        renderElement(request, task, innerType, resolvedProps, ref);
      }
      function renderContextConsumer(request, task, context, props) {
        context._context === void 0 ? context !== context.Consumer && (hasWarnedAboutUsingContextAsConsumer || (hasWarnedAboutUsingContextAsConsumer = !0, error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : context = context._context;
        var render = props.children;
        typeof render != "function" && error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
        var newValue = readContext(context), newChildren = render(newValue);
        renderNodeDestructive(request, task, newChildren);
      }
      function renderContextProvider(request, task, type, props) {
        var context = type._context, value = props.value, children = props.children, prevSnapshot;
        prevSnapshot = task.context, task.context = pushProvider(context, value), renderNodeDestructive(request, task, children), task.context = popProvider(context), prevSnapshot !== task.context && error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
      }
      function renderLazyComponent(request, task, lazyComponent, props, ref) {
        pushBuiltInComponentStackInDEV(task, "Lazy");
        var payload = lazyComponent._payload, init = lazyComponent._init, Component = init(payload), resolvedProps = resolveDefaultProps(Component, props);
        renderElement(request, task, Component, resolvedProps, ref), popComponentStackInDEV(task);
      }
      function renderElement(request, task, type, props, ref) {
        if (typeof type == "function")
          if (shouldConstruct$1(type)) {
            renderClassComponent(request, task, type, props);
            return;
          } else {
            renderIndeterminateComponent(request, task, type, props);
            return;
          }
        if (typeof type == "string") {
          renderHostElement(request, task, type, props);
          return;
        }
        switch (type) {
          case REACT_LEGACY_HIDDEN_TYPE:
          case REACT_DEBUG_TRACING_MODE_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_FRAGMENT_TYPE: {
            renderNodeDestructive(request, task, props.children);
            return;
          }
          case REACT_SUSPENSE_LIST_TYPE: {
            pushBuiltInComponentStackInDEV(task, "SuspenseList"), renderNodeDestructive(request, task, props.children), popComponentStackInDEV(task);
            return;
          }
          case REACT_SCOPE_TYPE:
            throw new Error("ReactDOMServer does not yet support scope components.");
          case REACT_SUSPENSE_TYPE: {
            renderSuspenseBoundary(request, task, props);
            return;
          }
        }
        if (typeof type == "object" && type !== null)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE: {
              renderForwardRef(request, task, type, props, ref);
              return;
            }
            case REACT_MEMO_TYPE: {
              renderMemo(request, task, type, props, ref);
              return;
            }
            case REACT_PROVIDER_TYPE: {
              renderContextProvider(request, task, type, props);
              return;
            }
            case REACT_CONTEXT_TYPE: {
              renderContextConsumer(request, task, type, props);
              return;
            }
            case REACT_LAZY_TYPE: {
              renderLazyComponent(request, task, type, props);
              return;
            }
          }
        var info = "";
        throw (type === void 0 || typeof type == "object" && type !== null && Object.keys(type).length === 0) && (info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
      }
      function validateIterable(iterable, iteratorFn) {
        typeof Symbol == "function" && iterable[Symbol.toStringTag] === "Generator" && (didWarnAboutGenerators || error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), didWarnAboutGenerators = !0), iterable.entries === iteratorFn && (didWarnAboutMaps || error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0);
      }
      function renderNodeDestructive(request, task, node) {
        try {
          return renderNodeDestructiveImpl(request, task, node);
        } catch (x) {
          throw typeof x == "object" && x !== null && typeof x.then == "function" || (lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV()), x;
        }
      }
      function renderNodeDestructiveImpl(request, task, node) {
        if (task.node = node, typeof node == "object" && node !== null) {
          switch (node.$$typeof) {
            case REACT_ELEMENT_TYPE: {
              var element = node, type = element.type, props = element.props, ref = element.ref;
              renderElement(request, task, type, props, ref);
              return;
            }
            case REACT_PORTAL_TYPE:
              throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
            case REACT_LAZY_TYPE: {
              var lazyNode = node, payload = lazyNode._payload, init = lazyNode._init, resolvedNode;
              try {
                resolvedNode = init(payload);
              } catch (x) {
                throw typeof x == "object" && x !== null && typeof x.then == "function" && pushBuiltInComponentStackInDEV(task, "Lazy"), x;
              }
              renderNodeDestructive(request, task, resolvedNode);
              return;
            }
          }
          if (isArray(node)) {
            renderChildrenArray(request, task, node);
            return;
          }
          var iteratorFn = getIteratorFn(node);
          if (iteratorFn) {
            validateIterable(node, iteratorFn);
            var iterator = iteratorFn.call(node);
            if (iterator) {
              var step = iterator.next();
              if (!step.done) {
                var children = [];
                do
                  children.push(step.value), step = iterator.next();
                while (!step.done);
                renderChildrenArray(request, task, children);
                return;
              }
              return;
            }
          }
          var childString = Object.prototype.toString.call(node);
          throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
        }
        if (typeof node == "string") {
          var segment = task.blockedSegment;
          segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
          return;
        }
        if (typeof node == "number") {
          var _segment = task.blockedSegment;
          _segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
          return;
        }
        typeof node == "function" && error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
      function renderChildrenArray(request, task, children) {
        for (var totalChildren = children.length, i = 0; i < totalChildren; i++) {
          var prevTreeContext = task.treeContext;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
          try {
            renderNode(request, task, children[i]);
          } finally {
            task.treeContext = prevTreeContext;
          }
        }
      }
      function spawnNewSuspendedTask(request, task, x) {
        var segment = task.blockedSegment, insertionIndex = segment.chunks.length, newSegment = createPendingSegment(
          request,
          insertionIndex,
          null,
          segment.formatContext,
          segment.lastPushedText,
          !0
        );
        segment.children.push(newSegment), segment.lastPushedText = !1;
        var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
        task.componentStack !== null && (newTask.componentStack = task.componentStack.parent);
        var ping = newTask.ping;
        x.then(ping, ping);
      }
      function renderNode(request, task, node) {
        var previousFormatContext = task.blockedSegment.formatContext, previousLegacyContext = task.legacyContext, previousContext = task.context, previousComponentStack = null;
        previousComponentStack = task.componentStack;
        try {
          return renderNodeDestructive(request, task, node);
        } catch (x) {
          if (resetHooksState(), typeof x == "object" && x !== null && typeof x.then == "function") {
            spawnNewSuspendedTask(request, task, x), task.blockedSegment.formatContext = previousFormatContext, task.legacyContext = previousLegacyContext, task.context = previousContext, switchContext(previousContext), task.componentStack = previousComponentStack;
            return;
          } else
            throw task.blockedSegment.formatContext = previousFormatContext, task.legacyContext = previousLegacyContext, task.context = previousContext, switchContext(previousContext), task.componentStack = previousComponentStack, x;
        }
      }
      function erroredTask(request, boundary, segment, error2) {
        var errorDigest = logRecoverableError(request, error2);
        if (boundary === null ? fatalError(request, error2) : (boundary.pendingTasks--, boundary.forceClientRender || (boundary.forceClientRender = !0, boundary.errorDigest = errorDigest, captureBoundaryErrorDetailsDev(boundary, error2), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary))), request.allPendingTasks--, request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function abortTaskSoft(task) {
        var request = this, boundary = task.blockedBoundary, segment = task.blockedSegment;
        segment.status = ABORTED, finishedTask(request, boundary, segment);
      }
      function abortTask(task, request, reason) {
        var boundary = task.blockedBoundary, segment = task.blockedSegment;
        if (segment.status = ABORTED, boundary === null)
          request.allPendingTasks--, request.status !== CLOSED && (request.status = CLOSED, request.destination !== null && close(request.destination));
        else {
          if (boundary.pendingTasks--, !boundary.forceClientRender) {
            boundary.forceClientRender = !0;
            var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
            boundary.errorDigest = request.onError(_error);
            {
              var errorPrefix = "The server did not finish this Suspense boundary: ";
              _error && typeof _error.message == "string" ? _error = errorPrefix + _error.message : _error = errorPrefix + String(_error);
              var previousTaskInDev = currentTaskInDEV;
              currentTaskInDEV = task;
              try {
                captureBoundaryErrorDetailsDev(boundary, _error);
              } finally {
                currentTaskInDEV = previousTaskInDev;
              }
            }
            boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary);
          }
          if (boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, reason);
          }), boundary.fallbackAbortableTasks.clear(), request.allPendingTasks--, request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
      }
      function queueCompletedSegment(boundary, segment) {
        if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
          var childSegment = segment.children[0];
          childSegment.id = segment.id, childSegment.parentFlushed = !0, childSegment.status === COMPLETED && queueCompletedSegment(boundary, childSegment);
        } else {
          var completedSegments = boundary.completedSegments;
          completedSegments.push(segment);
        }
      }
      function finishedTask(request, boundary, segment) {
        if (boundary === null) {
          if (segment.parentFlushed) {
            if (request.completedRootSegment !== null)
              throw new Error("There can only be one root segment. This is a bug in React.");
            request.completedRootSegment = segment;
          }
          if (request.pendingRootTasks--, request.pendingRootTasks === 0) {
            request.onShellError = noop$1;
            var onShellReady = request.onShellReady;
            onShellReady();
          }
        } else if (boundary.pendingTasks--, !boundary.forceClientRender) {
          if (boundary.pendingTasks === 0)
            segment.parentFlushed && segment.status === COMPLETED && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear();
          else if (segment.parentFlushed && segment.status === COMPLETED) {
            queueCompletedSegment(boundary, segment);
            var completedSegments = boundary.completedSegments;
            completedSegments.length === 1 && boundary.parentFlushed && request.partialBoundaries.push(boundary);
          }
        }
        if (request.allPendingTasks--, request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function retryTask(request, task) {
        var segment = task.blockedSegment;
        if (segment.status === PENDING) {
          switchContext(task.context);
          var prevTaskInDEV = null;
          prevTaskInDEV = currentTaskInDEV, currentTaskInDEV = task;
          try {
            renderNodeDestructive(request, task, task.node), pushSegmentFinale$1(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded), task.abortSet.delete(task), segment.status = COMPLETED, finishedTask(request, task.blockedBoundary, segment);
          } catch (x) {
            if (resetHooksState(), typeof x == "object" && x !== null && typeof x.then == "function") {
              var ping = task.ping;
              x.then(ping, ping);
            } else
              task.abortSet.delete(task), segment.status = ERRORED, erroredTask(request, task.blockedBoundary, segment, x);
          } finally {
            currentTaskInDEV = prevTaskInDEV;
          }
        }
      }
      function performWork(request) {
        if (request.status !== CLOSED) {
          var prevContext = getActiveContext(), prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = Dispatcher;
          var prevGetCurrentStackImpl;
          prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack, ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
          var prevResponseState = currentResponseState;
          setCurrentResponseState(request.responseState);
          try {
            var pingedTasks = request.pingedTasks, i;
            for (i = 0; i < pingedTasks.length; i++) {
              var task = pingedTasks[i];
              retryTask(request, task);
            }
            pingedTasks.splice(0, i), request.destination !== null && flushCompletedQueues(request, request.destination);
          } catch (error2) {
            logRecoverableError(request, error2), fatalError(request, error2);
          } finally {
            setCurrentResponseState(prevResponseState), ReactCurrentDispatcher$1.current = prevDispatcher, ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl, prevDispatcher === Dispatcher && switchContext(prevContext);
          }
        }
      }
      function flushSubtree(request, destination, segment) {
        switch (segment.parentFlushed = !0, segment.status) {
          case PENDING: {
            var segmentID = segment.id = request.nextSegmentId++;
            return segment.lastPushedText = !1, segment.textEmbedded = !1, writePlaceholder(destination, request.responseState, segmentID);
          }
          case COMPLETED: {
            segment.status = FLUSHED;
            for (var r = !0, chunks = segment.chunks, chunkIdx = 0, children = segment.children, childIdx = 0; childIdx < children.length; childIdx++) {
              for (var nextChild = children[childIdx]; chunkIdx < nextChild.index; chunkIdx++)
                writeChunk(destination, chunks[chunkIdx]);
              r = flushSegment(request, destination, nextChild);
            }
            for (; chunkIdx < chunks.length - 1; chunkIdx++)
              writeChunk(destination, chunks[chunkIdx]);
            return chunkIdx < chunks.length && (r = writeChunkAndReturn(destination, chunks[chunkIdx])), r;
          }
          default:
            throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
        }
      }
      function flushSegment(request, destination, segment) {
        var boundary = segment.boundary;
        if (boundary === null)
          return flushSubtree(request, destination, segment);
        if (boundary.parentFlushed = !0, boundary.forceClientRender)
          return writeStartClientRenderedSuspenseBoundary$1(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack), flushSubtree(request, destination, segment), writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
        if (boundary.pendingTasks > 0) {
          boundary.rootSegmentID = request.nextSegmentId++, boundary.completedSegments.length > 0 && request.partialBoundaries.push(boundary);
          var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
          return writeStartPendingSuspenseBoundary(destination, request.responseState, id), flushSubtree(request, destination, segment), writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else {
          if (boundary.byteSize > request.progressiveChunkSize)
            return boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id), flushSubtree(request, destination, segment), writeEndPendingSuspenseBoundary(destination, request.responseState);
          writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
          var completedSegments = boundary.completedSegments;
          if (completedSegments.length !== 1)
            throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
          var contentSegment = completedSegments[0];
          return flushSegment(request, destination, contentSegment), writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
        }
      }
      function flushClientRenderedBoundary(request, destination, boundary) {
        return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
      }
      function flushSegmentContainer(request, destination, segment) {
        return writeStartSegment(destination, request.responseState, segment.formatContext, segment.id), flushSegment(request, destination, segment), writeEndSegment(destination, segment.formatContext);
      }
      function flushCompletedBoundary(request, destination, boundary) {
        for (var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++) {
          var segment = completedSegments[i];
          flushPartiallyCompletedSegment(request, destination, boundary, segment);
        }
        return completedSegments.length = 0, writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
      }
      function flushPartialBoundary(request, destination, boundary) {
        for (var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++) {
          var segment = completedSegments[i];
          if (!flushPartiallyCompletedSegment(request, destination, boundary, segment))
            return i++, completedSegments.splice(0, i), !1;
        }
        return completedSegments.splice(0, i), !0;
      }
      function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED)
          return !0;
        var segmentID = segment.id;
        if (segmentID === -1) {
          var rootSegmentID = segment.id = boundary.rootSegmentID;
          if (rootSegmentID === -1)
            throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
          return flushSegmentContainer(request, destination, segment);
        } else
          return flushSegmentContainer(request, destination, segment), writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
      }
      function flushCompletedQueues(request, destination) {
        try {
          var completedRootSegment = request.completedRootSegment;
          completedRootSegment !== null && request.pendingRootTasks === 0 && (flushSegment(request, destination, completedRootSegment), request.completedRootSegment = null, writeCompletedRoot(destination, request.responseState));
          var clientRenderedBoundaries = request.clientRenderedBoundaries, i;
          for (i = 0; i < clientRenderedBoundaries.length; i++) {
            var boundary = clientRenderedBoundaries[i];
            if (!flushClientRenderedBoundary(request, destination, boundary)) {
              request.destination = null, i++, clientRenderedBoundaries.splice(0, i);
              return;
            }
          }
          clientRenderedBoundaries.splice(0, i);
          var completedBoundaries = request.completedBoundaries;
          for (i = 0; i < completedBoundaries.length; i++) {
            var _boundary = completedBoundaries[i];
            if (!flushCompletedBoundary(request, destination, _boundary)) {
              request.destination = null, i++, completedBoundaries.splice(0, i);
              return;
            }
          }
          completedBoundaries.splice(0, i);
          var partialBoundaries = request.partialBoundaries;
          for (i = 0; i < partialBoundaries.length; i++) {
            var _boundary2 = partialBoundaries[i];
            if (!flushPartialBoundary(request, destination, _boundary2)) {
              request.destination = null, i++, partialBoundaries.splice(0, i);
              return;
            }
          }
          partialBoundaries.splice(0, i);
          var largeBoundaries = request.completedBoundaries;
          for (i = 0; i < largeBoundaries.length; i++) {
            var _boundary3 = largeBoundaries[i];
            if (!flushCompletedBoundary(request, destination, _boundary3)) {
              request.destination = null, i++, largeBoundaries.splice(0, i);
              return;
            }
          }
          largeBoundaries.splice(0, i);
        } finally {
          request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0 && (request.abortableTasks.size !== 0 && error("There was still abortable task at the root when we closed. This is a bug in React."), close(destination));
        }
      }
      function startWork(request) {
        scheduleWork(function() {
          return performWork(request);
        });
      }
      function startFlowing(request, destination) {
        if (request.status === CLOSING) {
          request.status = CLOSED, closeWithError(destination, request.fatalError);
          return;
        }
        if (request.status !== CLOSED && request.destination === null) {
          request.destination = destination;
          try {
            flushCompletedQueues(request, destination);
          } catch (error2) {
            logRecoverableError(request, error2), fatalError(request, error2);
          }
        }
      }
      function abort(request, reason) {
        try {
          var abortableTasks = request.abortableTasks;
          abortableTasks.forEach(function(task) {
            return abortTask(task, request, reason);
          }), abortableTasks.clear(), request.destination !== null && flushCompletedQueues(request, request.destination);
        } catch (error2) {
          logRecoverableError(request, error2), fatalError(request, error2);
        }
      }
      function onError() {
      }
      function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
        var didFatal = !1, fatalError2 = null, result = "", destination = {
          push: function(chunk) {
            return chunk !== null && (result += chunk), !0;
          },
          destroy: function(error2) {
            didFatal = !0, fatalError2 = error2;
          }
        }, readyToStream = !1;
        function onShellReady() {
          readyToStream = !0;
        }
        var request = createRequest(children, createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : void 0), createRootFormatContext(), 1 / 0, onError, void 0, onShellReady, void 0, void 0);
        if (startWork(request), abort(request, abortReason), startFlowing(request, destination), didFatal)
          throw fatalError2;
        if (!readyToStream)
          throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        return result;
      }
      function renderToString2(children, options) {
        return renderToStringImpl(children, options, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
      }
      function renderToStaticMarkup(children, options) {
        return renderToStringImpl(children, options, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
      }
      function renderToNodeStream() {
        throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
      }
      function renderToStaticNodeStream() {
        throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
      }
      exports.renderToNodeStream = renderToNodeStream, exports.renderToStaticMarkup = renderToStaticMarkup, exports.renderToStaticNodeStream = renderToStaticNodeStream, exports.renderToString = renderToString2, exports.version = ReactVersion;
    })();
  }
});

// node_modules/react-dom/cjs/react-dom-server.browser.development.js
var require_react_dom_server_browser_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.browser.development.js"(exports) {
    "use strict";
    (function() {
      "use strict";
      var React6 = require_react(), ReactVersion = "18.2.0", ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function warn(format) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
            args[_key - 1] = arguments[_key];
          printWarning("warn", format, args);
        }
      }
      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
            args[_key2 - 1] = arguments[_key2];
          printWarning("error", format, args);
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame, stack = ReactDebugCurrentFrame2.getStackAddendum();
          stack !== "" && (format += "%s", args = args.concat([stack]));
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format), Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      function scheduleWork(callback) {
        callback();
      }
      var VIEW_SIZE = 512, currentView = null, writtenBytes = 0;
      function beginWriting(destination) {
        currentView = new Uint8Array(VIEW_SIZE), writtenBytes = 0;
      }
      function writeChunk(destination, chunk) {
        if (chunk.length !== 0) {
          if (chunk.length > VIEW_SIZE) {
            writtenBytes > 0 && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = new Uint8Array(VIEW_SIZE), writtenBytes = 0), destination.enqueue(chunk);
            return;
          }
          var bytesToWrite = chunk, allowableBytes = currentView.length - writtenBytes;
          allowableBytes < bytesToWrite.length && (allowableBytes === 0 ? destination.enqueue(currentView) : (currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), bytesToWrite = bytesToWrite.subarray(allowableBytes)), currentView = new Uint8Array(VIEW_SIZE), writtenBytes = 0), currentView.set(bytesToWrite, writtenBytes), writtenBytes += bytesToWrite.length;
        }
      }
      function writeChunkAndReturn(destination, chunk) {
        return writeChunk(destination, chunk), !0;
      }
      function completeWriting(destination) {
        currentView && writtenBytes > 0 && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
      }
      function close(destination) {
        destination.close();
      }
      var textEncoder = new TextEncoder();
      function stringToChunk(content) {
        return textEncoder.encode(content);
      }
      function stringToPrecomputedChunk(content) {
        return textEncoder.encode(content);
      }
      function closeWithError(destination, error2) {
        typeof destination.error == "function" ? destination.error(error2) : destination.close();
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol == "function" && Symbol.toStringTag, type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        try {
          return testStringCoercion(value), !1;
        } catch {
          return !0;
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkAttributeStringCoercion(value, attributeName) {
        if (willCoercionThrow(value))
          return error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value)), testStringCoercion(value);
      }
      function checkCSSPropertyStringCoercion(value, propName) {
        if (willCoercionThrow(value))
          return error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value)), testStringCoercion(value);
      }
      function checkHtmlStringCoercion(value) {
        if (willCoercionThrow(value))
          return error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value)), testStringCoercion(value);
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty, RESERVED = 0, STRING = 1, BOOLEANISH_STRING = 2, BOOLEAN = 3, OVERLOADED_BOOLEAN = 4, NUMERIC = 5, POSITIVE_NUMERIC = 6, ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$"), illegalAttributeNameCache = {}, validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        return hasOwnProperty.call(validatedAttributeNameCache, attributeName) ? !0 : hasOwnProperty.call(illegalAttributeNameCache, attributeName) ? !1 : VALID_ATTRIBUTE_NAME_REGEX.test(attributeName) ? (validatedAttributeNameCache[attributeName] = !0, !0) : (illegalAttributeNameCache[attributeName] = !0, error("Invalid attribute name: `%s`", attributeName), !1);
      }
      function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED)
          return !1;
        switch (typeof value) {
          case "function":
          case "symbol":
            return !0;
          case "boolean": {
            if (isCustomComponentTag)
              return !1;
            if (propertyInfo !== null)
              return !propertyInfo.acceptsBooleans;
            var prefix2 = name.toLowerCase().slice(0, 5);
            return prefix2 !== "data-" && prefix2 !== "aria-";
          }
          default:
            return !1;
        }
      }
      function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
      }
      function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
        this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN, this.attributeName = attributeName, this.attributeNamespace = attributeNamespace, this.mustUseProperty = mustUseProperty, this.propertyName = name, this.type = type, this.sanitizeURL = sanitizeURL2, this.removeEmptyString = removeEmptyString;
      }
      var properties = {}, reservedProps = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style"
      ];
      reservedProps.forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          RESERVED,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
        var name = _ref[0], attributeName = _ref[1];
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          null,
          !1,
          !1
        );
      }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          !1,
          name.toLowerCase(),
          null,
          !1,
          !1
        );
      }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), [
        "allowFullScreen",
        "async",
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "disableRemotePlayback",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        "itemScope"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          !1,
          name.toLowerCase(),
          null,
          !1,
          !1
        );
      }), [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          !0,
          name,
          null,
          !1,
          !1
        );
      }), [
        "capture",
        "download"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          OVERLOADED_BOOLEAN,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          POSITIVE_NUMERIC,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), ["rowSpan", "start"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          NUMERIC,
          !1,
          name.toLowerCase(),
          null,
          !1,
          !1
        );
      });
      var CAMELIZE = /[\-\:]([a-z])/g, capitalize2 = function(token) {
        return token[1].toUpperCase();
      };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize2);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          null,
          !1,
          !1
        );
      }), [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize2);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          "http://www.w3.org/1999/xlink",
          !1,
          !1
        );
      }), [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize2);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }), ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          !1,
          attributeName.toLowerCase(),
          null,
          !1,
          !1
        );
      });
      var xlinkHref = "xlinkHref";
      properties[xlinkHref] = new PropertyInfoRecord(
        "xlinkHref",
        STRING,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      ), ["src", "href", "action", "formAction"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          !1,
          attributeName.toLowerCase(),
          null,
          !0,
          !0
        );
      });
      var isUnitlessNumber = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      };
      function prefixKey(prefix2, key) {
        return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix2) {
          isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
        });
      });
      var hasReadOnlyValue = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
      };
      function checkControlledValueProps(tagName, props) {
        hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null || error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), props.onChange || props.readOnly || props.disabled || props.checked == null || error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1)
          return typeof props.is == "string";
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var ariaProperties = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
      }, warnedProperties = {}, rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"), rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
      function validateProperty(tagName, name) {
        {
          if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name])
            return !0;
          if (rARIACamel.test(name)) {
            var ariaName = "aria-" + name.slice(4).toLowerCase(), correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
            if (correctName == null)
              return error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties[name] = !0, !0;
            if (name !== correctName)
              return error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName), warnedProperties[name] = !0, !0;
          }
          if (rARIA.test(name)) {
            var lowerCasedName = name.toLowerCase(), standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
            if (standardName == null)
              return warnedProperties[name] = !0, !1;
            if (name !== standardName)
              return error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName), warnedProperties[name] = !0, !0;
          }
        }
        return !0;
      }
      function warnInvalidARIAProps(type, props) {
        {
          var invalidProps = [];
          for (var key in props) {
            var isValid = validateProperty(type, key);
            isValid || invalidProps.push(key);
          }
          var unknownPropString = invalidProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          invalidProps.length === 1 ? error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type) : invalidProps.length > 1 && error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
        }
      }
      function validateProperties(type, props) {
        isCustomComponent(type, props) || warnInvalidARIAProps(type, props);
      }
      var didWarnValueNull = !1;
      function validateProperties$1(type, props) {
        {
          if (type !== "input" && type !== "textarea" && type !== "select")
            return;
          props != null && props.value === null && !didWarnValueNull && (didWarnValueNull = !0, type === "select" && props.multiple ? error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type) : error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type));
        }
      }
      var possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
      }, validateProperty$1 = function() {
      };
      {
        var warnedProperties$1 = {}, EVENT_NAME_REGEX = /^on./, INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/, rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"), rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function(tagName, name, value, eventRegistry) {
          if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name])
            return !0;
          var lowerCasedName = name.toLowerCase();
          if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout")
            return error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties$1[name] = !0, !0;
          if (eventRegistry != null) {
            var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
            if (registrationNameDependencies.hasOwnProperty(name))
              return !0;
            var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
            if (registrationName != null)
              return error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName), warnedProperties$1[name] = !0, !0;
            if (EVENT_NAME_REGEX.test(name))
              return error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties$1[name] = !0, !0;
          } else if (EVENT_NAME_REGEX.test(name))
            return INVALID_EVENT_NAME_REGEX.test(name) && error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties$1[name] = !0, !0;
          if (rARIA$1.test(name) || rARIACamel$1.test(name))
            return !0;
          if (lowerCasedName === "innerhtml")
            return error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties$1[name] = !0, !0;
          if (lowerCasedName === "aria")
            return error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties$1[name] = !0, !0;
          if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value != "string")
            return error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties$1[name] = !0, !0;
          if (typeof value == "number" && isNaN(value))
            return error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties$1[name] = !0, !0;
          var propertyInfo = getPropertyInfo(name), isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            var standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name)
              return error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName), warnedProperties$1[name] = !0, !0;
          } else if (!isReserved && name !== lowerCasedName)
            return error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties$1[name] = !0, !0;
          return typeof value == "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1) ? (value ? error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name), warnedProperties$1[name] = !0, !0) : isReserved ? !0 : shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1) ? (warnedProperties$1[name] = !0, !1) : ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN && (error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value), warnedProperties$1[name] = !0), !0);
        };
      }
      var warnUnknownProperties = function(type, props, eventRegistry) {
        {
          var unknownProps = [];
          for (var key in props) {
            var isValid = validateProperty$1(type, key, props[key], eventRegistry);
            isValid || unknownProps.push(key);
          }
          var unknownPropString = unknownProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          unknownProps.length === 1 ? error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type) : unknownProps.length > 1 && error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
        }
      };
      function validateProperties$2(type, props, eventRegistry) {
        isCustomComponent(type, props) || warnUnknownProperties(type, props, eventRegistry);
      }
      var warnValidStyle = function() {
      };
      {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/, msPattern = /^-ms-/, hyphenPattern = /-(.)/g, badStyleValueWithSemicolonPattern = /;\s*$/, warnedStyleNames = {}, warnedStyleValues = {}, warnedForNaNValue = !1, warnedForInfinityValue = !1, camelize = function(string) {
          return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
          });
        }, warnHyphenatedStyleName = function(name) {
          warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, error(
            "Unsupported style property %s. Did you mean %s?",
            name,
            camelize(name.replace(msPattern, "ms-"))
          ));
        }, warnBadVendoredStyleName = function(name) {
          warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)));
        }, warnStyleValueWithSemicolon = function(name, value) {
          warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value] || (warnedStyleValues[value] = !0, error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, "")));
        }, warnStyleValueIsNaN = function(name, value) {
          warnedForNaNValue || (warnedForNaNValue = !0, error("`NaN` is an invalid value for the `%s` css style property.", name));
        }, warnStyleValueIsInfinity = function(name, value) {
          warnedForInfinityValue || (warnedForInfinityValue = !0, error("`Infinity` is an invalid value for the `%s` css style property.", name));
        };
        warnValidStyle = function(name, value) {
          name.indexOf("-") > -1 ? warnHyphenatedStyleName(name) : badVendoredStyleNamePattern.test(name) ? warnBadVendoredStyleName(name) : badStyleValueWithSemicolonPattern.test(value) && warnStyleValueWithSemicolon(name, value), typeof value == "number" && (isNaN(value) ? warnStyleValueIsNaN(name, value) : isFinite(value) || warnStyleValueIsInfinity(name, value));
        };
      }
      var warnValidStyle$1 = warnValidStyle, matchHtmlRegExp = /["'&<>]/;
      function escapeHtml2(string) {
        checkHtmlStringCoercion(string);
        var str = "" + string, match = matchHtmlRegExp.exec(str);
        if (!match)
          return str;
        var escape2, html = "", index, lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escape2 = "&quot;";
              break;
            case 38:
              escape2 = "&amp;";
              break;
            case 39:
              escape2 = "&#x27;";
              break;
            case 60:
              escape2 = "&lt;";
              break;
            case 62:
              escape2 = "&gt;";
              break;
            default:
              continue;
          }
          lastIndex !== index && (html += str.substring(lastIndex, index)), lastIndex = index + 1, html += escape2;
        }
        return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
      }
      function escapeTextForBrowser(text) {
        return typeof text == "boolean" || typeof text == "number" ? "" + text : escapeHtml2(text);
      }
      var uppercasePattern = /([A-Z])/g, msPattern$1 = /^ms-/;
      function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
      }
      var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, didWarn = !1;
      function sanitizeURL(url) {
        !didWarn && isJavaScriptProtocol.test(url) && (didWarn = !0, error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url)));
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      var startInlineScript = stringToPrecomputedChunk("<script>"), endInlineScript = stringToPrecomputedChunk("<\/script>"), startScriptSrc = stringToPrecomputedChunk('<script src="'), startModuleSrc = stringToPrecomputedChunk('<script type="module" src="'), endAsyncScript = stringToPrecomputedChunk('" async=""><\/script>');
      function escapeBootstrapScriptContent(scriptText) {
        return checkHtmlStringCoercion(scriptText), ("" + scriptText).replace(scriptRegex, scriptReplacer);
      }
      var scriptRegex = /(<\/|<)(s)(cript)/gi, scriptReplacer = function(match, prefix2, s, suffix) {
        return "" + prefix2 + (s === "s" ? "\\u0073" : "\\u0053") + suffix;
      };
      function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix, inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">'), bootstrapChunks = [];
        if (bootstrapScriptContent !== void 0 && bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript), bootstrapScripts !== void 0)
          for (var i = 0; i < bootstrapScripts.length; i++)
            bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
        if (bootstrapModules !== void 0)
          for (var _i = 0; _i < bootstrapModules.length; _i++)
            bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
        return {
          bootstrapChunks,
          startInlineScript: inlineScriptWithNonce,
          placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
          segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
          boundaryPrefix: idPrefix + "B:",
          idPrefix,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: !1,
          sentCompleteBoundaryFunction: !1,
          sentClientRenderFunction: !1
        };
      }
      var ROOT_HTML_MODE = 0, HTML_MODE = 1, SVG_MODE = 2, MATHML_MODE = 3, HTML_TABLE_MODE = 4, HTML_TABLE_BODY_MODE = 5, HTML_TABLE_ROW_MODE = 6, HTML_COLGROUP_MODE = 7;
      function createFormatContext(insertionMode, selectedValue) {
        return {
          insertionMode,
          selectedValue
        };
      }
      function createRootFormatContext(namespaceURI) {
        var insertionMode = namespaceURI === "http://www.w3.org/2000/svg" ? SVG_MODE : namespaceURI === "http://www.w3.org/1998/Math/MathML" ? MATHML_MODE : ROOT_HTML_MODE;
        return createFormatContext(insertionMode, null);
      }
      function getChildFormatContext(parentContext, type, props) {
        switch (type) {
          case "select":
            return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
          case "svg":
            return createFormatContext(SVG_MODE, null);
          case "math":
            return createFormatContext(MATHML_MODE, null);
          case "foreignObject":
            return createFormatContext(HTML_MODE, null);
          case "table":
            return createFormatContext(HTML_TABLE_MODE, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return createFormatContext(HTML_TABLE_BODY_MODE, null);
          case "colgroup":
            return createFormatContext(HTML_COLGROUP_MODE, null);
          case "tr":
            return createFormatContext(HTML_TABLE_ROW_MODE, null);
        }
        return parentContext.insertionMode >= HTML_TABLE_MODE || parentContext.insertionMode === ROOT_HTML_MODE ? createFormatContext(HTML_MODE, null) : parentContext;
      }
      var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
      function assignSuspenseBoundaryID(responseState) {
        var generatedID = responseState.nextSuspenseID++;
        return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
      }
      function makeId(responseState, treeId, localId) {
        var idPrefix = responseState.idPrefix, id = ":" + idPrefix + "R" + treeId;
        return localId > 0 && (id += "H" + localId.toString(32)), id + ":";
      }
      function encodeHTMLTextNode(text) {
        return escapeTextForBrowser(text);
      }
      var textSeparator = stringToPrecomputedChunk("<!-- -->");
      function pushTextInstance(target, text, responseState, textEmbedded) {
        return text === "" ? textEmbedded : (textEmbedded && target.push(textSeparator), target.push(stringToChunk(encodeHTMLTextNode(text))), !0);
      }
      function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
        lastPushedText && textEmbedded && target.push(textSeparator);
      }
      var styleNameCache = /* @__PURE__ */ new Map();
      function processStyleName(styleName) {
        var chunk = styleNameCache.get(styleName);
        if (chunk !== void 0)
          return chunk;
        var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
        return styleNameCache.set(styleName, result), result;
      }
      var styleAttributeStart = stringToPrecomputedChunk(' style="'), styleAssign = stringToPrecomputedChunk(":"), styleSeparator = stringToPrecomputedChunk(";");
      function pushStyle(target, responseState, style) {
        if (typeof style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        var isFirst = !0;
        for (var styleName in style)
          if (!!hasOwnProperty.call(style, styleName)) {
            var styleValue = style[styleName];
            if (!(styleValue == null || typeof styleValue == "boolean" || styleValue === "")) {
              var nameChunk = void 0, valueChunk = void 0, isCustomProperty = styleName.indexOf("--") === 0;
              isCustomProperty ? (nameChunk = stringToChunk(escapeTextForBrowser(styleName)), checkCSSPropertyStringCoercion(styleValue, styleName), valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()))) : (warnValidStyle$1(styleName, styleValue), nameChunk = processStyleName(styleName), typeof styleValue == "number" ? styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName) ? valueChunk = stringToChunk(styleValue + "px") : valueChunk = stringToChunk("" + styleValue) : (checkCSSPropertyStringCoercion(styleValue, styleName), valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim())))), isFirst ? (isFirst = !1, target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk)) : target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
            }
          }
        isFirst || target.push(attributeEnd);
      }
      var attributeSeparator = stringToPrecomputedChunk(" "), attributeAssign = stringToPrecomputedChunk('="'), attributeEnd = stringToPrecomputedChunk('"'), attributeEmptyString = stringToPrecomputedChunk('=""');
      function pushAttribute(target, responseState, name, value) {
        switch (name) {
          case "style": {
            pushStyle(target, responseState, value);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (!(name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N"))) {
          var propertyInfo = getPropertyInfo(name);
          if (propertyInfo !== null) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if (!propertyInfo.acceptsBooleans)
                  return;
            }
            var attributeName = propertyInfo.attributeName, attributeNameChunk = stringToChunk(attributeName);
            switch (propertyInfo.type) {
              case BOOLEAN:
                value && target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                return;
              case OVERLOADED_BOOLEAN:
                value === !0 ? target.push(attributeSeparator, attributeNameChunk, attributeEmptyString) : value === !1 || target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                return;
              case NUMERIC:
                isNaN(value) || target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
              case POSITIVE_NUMERIC:
                !isNaN(value) && value >= 1 && target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
              default:
                propertyInfo.sanitizeURL && (checkAttributeStringCoercion(value, attributeName), value = "" + value, sanitizeURL(value)), target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
            }
          } else if (isAttributeNameSafe(name)) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                var prefix2 = name.toLowerCase().slice(0, 5);
                if (prefix2 !== "data-" && prefix2 !== "aria-")
                  return;
              }
            }
            target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        }
      }
      var endOfStartTag = stringToPrecomputedChunk(">"), endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
      function pushInnerHTML(target, innerHTML, children) {
        if (innerHTML != null) {
          if (children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof innerHTML != "object" || !("__html" in innerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          var html = innerHTML.__html;
          html != null && (checkHtmlStringCoercion(html), target.push(stringToChunk("" + html)));
        }
      }
      var didWarnDefaultInputValue = !1, didWarnDefaultChecked = !1, didWarnDefaultSelectValue = !1, didWarnDefaultTextareaValue = !1, didWarnInvalidOptionChildren = !1, didWarnInvalidOptionInnerHTML = !1, didWarnSelectedSetOnOption = !1;
      function checkSelectProp(props, propName) {
        {
          var value = props[propName];
          if (value != null) {
            var array = isArray(value);
            props.multiple && !array ? error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName) : !props.multiple && array && error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
          }
        }
      }
      function pushStartSelect(target, props, responseState) {
        checkControlledValueProps("select", props), checkSelectProp(props, "value"), checkSelectProp(props, "defaultValue"), props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue && (error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), didWarnDefaultSelectValue = !0), target.push(startChunkForTag("select"));
        var children = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return target.push(endOfStartTag), pushInnerHTML(target, innerHTML, children), children;
      }
      function flattenOptionChildren(children) {
        var content = "";
        return React6.Children.forEach(children, function(child) {
          child != null && (content += child, !didWarnInvalidOptionChildren && typeof child != "string" && typeof child != "number" && (didWarnInvalidOptionChildren = !0, error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
        }), content;
      }
      var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
      function pushStartOption(target, props, responseState, formatContext) {
        var selectedValue = formatContext.selectedValue;
        target.push(startChunkForTag("option"));
        var children = null, value = null, selected = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "selected":
                selected = propValue, didWarnSelectedSetOnOption || (error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), didWarnSelectedSetOnOption = !0);
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "value":
                value = propValue;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        if (selectedValue != null) {
          var stringValue;
          if (value !== null ? (checkAttributeStringCoercion(value, "value"), stringValue = "" + value) : (innerHTML !== null && (didWarnInvalidOptionInnerHTML || (didWarnInvalidOptionInnerHTML = !0, error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), stringValue = flattenOptionChildren(children)), isArray(selectedValue))
            for (var i = 0; i < selectedValue.length; i++) {
              checkAttributeStringCoercion(selectedValue[i], "value");
              var v = "" + selectedValue[i];
              if (v === stringValue) {
                target.push(selectedMarkerAttribute);
                break;
              }
            }
          else
            checkAttributeStringCoercion(selectedValue, "select.value"), "" + selectedValue === stringValue && target.push(selectedMarkerAttribute);
        } else
          selected && target.push(selectedMarkerAttribute);
        return target.push(endOfStartTag), pushInnerHTML(target, innerHTML, children), children;
      }
      function pushInput(target, props, responseState) {
        checkControlledValueProps("input", props), props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked && (error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type), didWarnDefaultChecked = !0), props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue && (error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type), didWarnDefaultInputValue = !0), target.push(startChunkForTag("input"));
        var value = null, defaultValue = null, checked = null, defaultChecked = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              case "defaultChecked":
                defaultChecked = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "checked":
                checked = propValue;
                break;
              case "value":
                value = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return checked !== null ? pushAttribute(target, responseState, "checked", checked) : defaultChecked !== null && pushAttribute(target, responseState, "checked", defaultChecked), value !== null ? pushAttribute(target, responseState, "value", value) : defaultValue !== null && pushAttribute(target, responseState, "value", defaultValue), target.push(endOfStartTagSelfClosing), null;
      }
      function pushStartTextArea(target, props, responseState) {
        checkControlledValueProps("textarea", props), props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue && (error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), didWarnDefaultTextareaValue = !0), target.push(startChunkForTag("textarea"));
        var value = null, defaultValue = null, children = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "value":
                value = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        if (value === null && defaultValue !== null && (value = defaultValue), target.push(endOfStartTag), children != null) {
          if (error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), value != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (isArray(children)) {
            if (children.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            checkHtmlStringCoercion(children[0]), value = "" + children[0];
          }
          checkHtmlStringCoercion(children), value = "" + children;
        }
        return typeof value == "string" && value[0] === `
` && target.push(leadingNewline), value !== null && (checkAttributeStringCoercion(value, "value"), target.push(stringToChunk(encodeHTMLTextNode("" + value)))), null;
      }
      function pushSelfClosing(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return target.push(endOfStartTagSelfClosing), null;
      }
      function pushStartMenuItem(target, props, responseState) {
        target.push(startChunkForTag("menuitem"));
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return target.push(endOfStartTag), null;
      }
      function pushStartTitle(target, props, responseState) {
        target.push(startChunkForTag("title"));
        var children = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        target.push(endOfStartTag);
        {
          var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
          Array.isArray(children) && children.length > 1 ? error("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : child != null && child.$$typeof != null ? error("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : child != null && typeof child != "string" && typeof child != "number" && error("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
        }
        return children;
      }
      function pushStartGenericElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        return target.push(endOfStartTag), pushInnerHTML(target, innerHTML, children), typeof children == "string" ? (target.push(stringToChunk(encodeHTMLTextNode(children))), null) : children;
      }
      function pushStartCustomElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "style":
                pushStyle(target, responseState, propValue);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                isAttributeNameSafe(propKey) && typeof propValue != "function" && typeof propValue != "symbol" && target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                break;
            }
          }
        return target.push(endOfStartTag), pushInnerHTML(target, innerHTML, children), children;
      }
      var leadingNewline = stringToPrecomputedChunk(`
`);
      function pushStartPreformattedElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null, innerHTML = null;
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null)
              continue;
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        if (target.push(endOfStartTag), innerHTML != null) {
          if (children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof innerHTML != "object" || !("__html" in innerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          var html = innerHTML.__html;
          html != null && (typeof html == "string" && html.length > 0 && html[0] === `
` ? target.push(leadingNewline, stringToChunk(html)) : (checkHtmlStringCoercion(html), target.push(stringToChunk("" + html))));
        }
        return typeof children == "string" && children[0] === `
` && target.push(leadingNewline), children;
      }
      var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, validatedTagCache = /* @__PURE__ */ new Map();
      function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (tagStartChunk === void 0) {
          if (!VALID_TAG_REGEX.test(tag))
            throw new Error("Invalid tag: " + tag);
          tagStartChunk = stringToPrecomputedChunk("<" + tag), validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
      }
      var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
      function pushStartInstance(target, type, props, responseState, formatContext) {
        switch (validateProperties(type, props), validateProperties$1(type, props), validateProperties$2(type, props, null), !props.suppressContentEditableWarning && props.contentEditable && props.children != null && error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE && type.indexOf("-") === -1 && typeof props.is != "string" && type.toLowerCase() !== type && error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type), type) {
          case "select":
            return pushStartSelect(target, props, responseState);
          case "option":
            return pushStartOption(target, props, responseState, formatContext);
          case "textarea":
            return pushStartTextArea(target, props, responseState);
          case "input":
            return pushInput(target, props, responseState);
          case "menuitem":
            return pushStartMenuItem(target, props, responseState);
          case "title":
            return pushStartTitle(target, props, responseState);
          case "listing":
          case "pre":
            return pushStartPreformattedElement(target, props, type, responseState);
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            return pushSelfClosing(target, props, type, responseState);
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return pushStartGenericElement(target, props, type, responseState);
          case "html":
            return formatContext.insertionMode === ROOT_HTML_MODE && target.push(DOCTYPE), pushStartGenericElement(target, props, type, responseState);
          default:
            return type.indexOf("-") === -1 && typeof props.is != "string" ? pushStartGenericElement(target, props, type, responseState) : pushStartCustomElement(target, props, type, responseState);
        }
      }
      var endTag1 = stringToPrecomputedChunk("</"), endTag2 = stringToPrecomputedChunk(">");
      function pushEndInstance(target, type, props) {
        switch (type) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            target.push(endTag1, stringToChunk(type), endTag2);
        }
      }
      function writeCompletedRoot(destination, responseState) {
        for (var bootstrapChunks = responseState.bootstrapChunks, i = 0; i < bootstrapChunks.length - 1; i++)
          writeChunk(destination, bootstrapChunks[i]);
        return i < bootstrapChunks.length ? writeChunkAndReturn(destination, bootstrapChunks[i]) : !0;
      }
      var placeholder1 = stringToPrecomputedChunk('<template id="'), placeholder2 = stringToPrecomputedChunk('"></template>');
      function writePlaceholder(destination, responseState, id) {
        writeChunk(destination, placeholder1), writeChunk(destination, responseState.placeholderPrefix);
        var formattedID = stringToChunk(id.toString(16));
        return writeChunk(destination, formattedID), writeChunkAndReturn(destination, placeholder2);
      }
      var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->"), startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="'), startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>'), startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->"), endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->"), clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template"), clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"'), clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="'), clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="'), clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="'), clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
      function writeStartCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
      }
      function writeStartPendingSuspenseBoundary(destination, responseState, id) {
        if (writeChunk(destination, startPendingSuspenseBoundary1), id === null)
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        return writeChunk(destination, id), writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
      }
      function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
        var result;
        return result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary), writeChunk(destination, clientRenderedSuspenseBoundaryError1), errorDigest && (writeChunk(destination, clientRenderedSuspenseBoundaryError1A), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial)), errorMesssage && (writeChunk(destination, clientRenderedSuspenseBoundaryError1B), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial)), errorComponentStack && (writeChunk(destination, clientRenderedSuspenseBoundaryError1C), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial)), result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2), result;
      }
      function writeEndCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndPendingSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="'), startSegmentHTML2 = stringToPrecomputedChunk('">'), endSegmentHTML = stringToPrecomputedChunk("</div>"), startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="'), startSegmentSVG2 = stringToPrecomputedChunk('">'), endSegmentSVG = stringToPrecomputedChunk("</svg>"), startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="'), startSegmentMathML2 = stringToPrecomputedChunk('">'), endSegmentMathML = stringToPrecomputedChunk("</math>"), startSegmentTable = stringToPrecomputedChunk('<table hidden id="'), startSegmentTable2 = stringToPrecomputedChunk('">'), endSegmentTable = stringToPrecomputedChunk("</table>"), startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="'), startSegmentTableBody2 = stringToPrecomputedChunk('">'), endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>"), startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="'), startSegmentTableRow2 = stringToPrecomputedChunk('">'), endSegmentTableRow = stringToPrecomputedChunk("</tr></table>"), startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="'), startSegmentColGroup2 = stringToPrecomputedChunk('">'), endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
      function writeStartSegment(destination, responseState, formatContext, id) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE:
            return writeChunk(destination, startSegmentHTML), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentHTML2);
          case SVG_MODE:
            return writeChunk(destination, startSegmentSVG), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentSVG2);
          case MATHML_MODE:
            return writeChunk(destination, startSegmentMathML), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentMathML2);
          case HTML_TABLE_MODE:
            return writeChunk(destination, startSegmentTable), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTable2);
          case HTML_TABLE_BODY_MODE:
            return writeChunk(destination, startSegmentTableBody), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTableBody2);
          case HTML_TABLE_ROW_MODE:
            return writeChunk(destination, startSegmentTableRow), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTableRow2);
          case HTML_COLGROUP_MODE:
            return writeChunk(destination, startSegmentColGroup), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentColGroup2);
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      function writeEndSegment(destination, formatContext) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE:
            return writeChunkAndReturn(destination, endSegmentHTML);
          case SVG_MODE:
            return writeChunkAndReturn(destination, endSegmentSVG);
          case MATHML_MODE:
            return writeChunkAndReturn(destination, endSegmentMathML);
          case HTML_TABLE_MODE:
            return writeChunkAndReturn(destination, endSegmentTable);
          case HTML_TABLE_BODY_MODE:
            return writeChunkAndReturn(destination, endSegmentTableBody);
          case HTML_TABLE_ROW_MODE:
            return writeChunkAndReturn(destination, endSegmentTableRow);
          case HTML_COLGROUP_MODE:
            return writeChunkAndReturn(destination, endSegmentColGroup);
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("'), completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("'), completeSegmentScript2 = stringToPrecomputedChunk('","'), completeSegmentScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript), responseState.sentCompleteSegmentFunction ? writeChunk(destination, completeSegmentScript1Partial) : (responseState.sentCompleteSegmentFunction = !0, writeChunk(destination, completeSegmentScript1Full)), writeChunk(destination, responseState.segmentPrefix);
        var formattedID = stringToChunk(contentSegmentID.toString(16));
        return writeChunk(destination, formattedID), writeChunk(destination, completeSegmentScript2), writeChunk(destination, responseState.placeholderPrefix), writeChunk(destination, formattedID), writeChunkAndReturn(destination, completeSegmentScript3);
      }
      var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("'), completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("'), completeBoundaryScript2 = stringToPrecomputedChunk('","'), completeBoundaryScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
        if (writeChunk(destination, responseState.startInlineScript), responseState.sentCompleteBoundaryFunction ? writeChunk(destination, completeBoundaryScript1Partial) : (responseState.sentCompleteBoundaryFunction = !0, writeChunk(destination, completeBoundaryScript1Full)), boundaryID === null)
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        var formattedContentID = stringToChunk(contentSegmentID.toString(16));
        return writeChunk(destination, boundaryID), writeChunk(destination, completeBoundaryScript2), writeChunk(destination, responseState.segmentPrefix), writeChunk(destination, formattedContentID), writeChunkAndReturn(destination, completeBoundaryScript3);
      }
      var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("'), clientRenderScript1Partial = stringToPrecomputedChunk('$RX("'), clientRenderScript1A = stringToPrecomputedChunk('"'), clientRenderScript2 = stringToPrecomputedChunk(")<\/script>"), clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
      function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
        if (writeChunk(destination, responseState.startInlineScript), responseState.sentClientRenderFunction ? writeChunk(destination, clientRenderScript1Partial) : (responseState.sentClientRenderFunction = !0, writeChunk(destination, clientRenderScript1Full)), boundaryID === null)
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        return writeChunk(destination, boundaryID), writeChunk(destination, clientRenderScript1A), (errorDigest || errorMessage || errorComponentStack) && (writeChunk(destination, clientRenderErrorScriptArgInterstitial), writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")))), (errorMessage || errorComponentStack) && (writeChunk(destination, clientRenderErrorScriptArgInterstitial), writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")))), errorComponentStack && (writeChunk(destination, clientRenderErrorScriptArgInterstitial), writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)))), writeChunkAndReturn(destination, clientRenderScript2);
      }
      var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
      function escapeJSStringsForInstructionScripts(input) {
        var escaped = JSON.stringify(input);
        return escaped.replace(regexForJSStringsInScripts, function(match) {
          switch (match) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
          }
        });
      }
      var assign = Object.assign, REACT_ELEMENT_TYPE = Symbol.for("react.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_SCOPE_TYPE = Symbol.for("react.scope"), REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode"), REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"), REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable != "object")
          return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator == "function" ? maybeIterator : null;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName)
          return displayName;
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null)
          return null;
        if (typeof type.tag == "number" && error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof type == "function")
          return type.displayName || type.name || null;
        if (typeof type == "string")
          return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              return outerName !== null ? outerName : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = !0;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log, prevInfo = console.info, prevWarn = console.warn, prevError = console.error, prevGroup = console.group, prevGroupCollapsed = console.groupCollapsed, prevGroupEnd = console.groupEnd;
            var props = {
              configurable: !0,
              enumerable: !0,
              value: disabledLog,
              writable: !0
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          if (disabledDepth--, disabledDepth === 0) {
            var props = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          disabledDepth < 0 && error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher, prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          return `
` + prefix + name;
        }
      }
      var reentry = !1, componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap == "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0)
            return frame;
        }
        var control;
        reentry = !0;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current, ReactCurrentDispatcher.current = null, disableLogs();
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            if (Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack == "string") {
            for (var sampleLines = sample.stack.split(`
`), controlLines = control.stack.split(`
`), s = sampleLines.length - 1, c = controlLines.length - 1; s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]; )
              c--;
            for (; s >= 1 && c >= 0; s--, c--)
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1)
                  do
                    if (s--, c--, c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = `
` + sampleLines[s].replace(" at new ", " at ");
                      return fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName)), typeof fn == "function" && componentFrameCache.set(fn, _frame), _frame;
                    }
                  while (s >= 1 && c >= 0);
                break;
              }
          }
        } finally {
          reentry = !1, ReactCurrentDispatcher.current = previousDispatcher, reenableLogs(), Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "", syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        return typeof fn == "function" && componentFrameCache.set(fn, syntheticFrame), syntheticFrame;
      }
      function describeClassComponentFrame(ctor, source, ownerFn) {
        return describeNativeComponentFrame(ctor, !0);
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, !1);
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null)
          return "";
        if (typeof type == "function")
          return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type == "string")
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch {
              }
            }
          }
        return "";
      }
      var loggedTypeFailures = {}, ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame.setExtraStackFrame(null);
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs)
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] != "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw err.name = "Invariant Violation", err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              error$1 && !(error$1 instanceof Error) && (setCurrentlyValidatingElement(element), error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1), setCurrentlyValidatingElement(null)), error$1 instanceof Error && !(error$1.message in loggedTypeFailures) && (loggedTypeFailures[error$1.message] = !0, setCurrentlyValidatingElement(element), error("Failed %s type: %s", location, error$1.message), setCurrentlyValidatingElement(null));
            }
        }
      }
      var warnedAboutMissingGetChildContext;
      warnedAboutMissingGetChildContext = {};
      var emptyContextObject = {};
      Object.freeze(emptyContextObject);
      function getMaskedContext(type, unmaskedContext) {
        {
          var contextTypes = type.contextTypes;
          if (!contextTypes)
            return emptyContextObject;
          var context = {};
          for (var key in contextTypes)
            context[key] = unmaskedContext[key];
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(contextTypes, context, "context", name);
          }
          return context;
        }
      }
      function processChildContext(instance, type, parentContext, childContextTypes) {
        {
          if (typeof instance.getChildContext != "function") {
            {
              var componentName = getComponentNameFromType(type) || "Unknown";
              warnedAboutMissingGetChildContext[componentName] || (warnedAboutMissingGetChildContext[componentName] = !0, error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName));
            }
            return parentContext;
          }
          var childContext = instance.getChildContext();
          for (var contextKey in childContext)
            if (!(contextKey in childContextTypes))
              throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(childContextTypes, childContext, "child context", name);
          }
          return assign({}, parentContext, childContext);
        }
      }
      var rendererSigil;
      rendererSigil = {};
      var rootContextSnapshot = null, currentActiveSnapshot = null;
      function popNode(prev) {
        prev.context._currentValue = prev.parentValue;
      }
      function pushNode(next) {
        next.context._currentValue = next.value;
      }
      function popToNearestCommonAncestor(prev, next) {
        if (prev !== next) {
          popNode(prev);
          var parentPrev = prev.parent, parentNext = next.parent;
          if (parentPrev === null) {
            if (parentNext !== null)
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          } else {
            if (parentNext === null)
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            popToNearestCommonAncestor(parentPrev, parentNext);
          }
          pushNode(next);
        }
      }
      function popAllPrevious(prev) {
        popNode(prev);
        var parentPrev = prev.parent;
        parentPrev !== null && popAllPrevious(parentPrev);
      }
      function pushAllNext(next) {
        var parentNext = next.parent;
        parentNext !== null && pushAllNext(parentNext), pushNode(next);
      }
      function popPreviousToCommonLevel(prev, next) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev === null)
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        parentPrev.depth === next.depth ? popToNearestCommonAncestor(parentPrev, next) : popPreviousToCommonLevel(parentPrev, next);
      }
      function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (parentNext === null)
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext), pushNode(next);
      }
      function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot, next = newSnapshot;
        prev !== next && (prev === null ? pushAllNext(next) : next === null ? popAllPrevious(prev) : prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : prev.depth > next.depth ? popPreviousToCommonLevel(prev, next) : popNextToCommonLevel(prev, next), currentActiveSnapshot = next);
      }
      function pushProvider(context, nextValue) {
        var prevValue;
        prevValue = context._currentValue, context._currentValue = nextValue, context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil && error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), context._currentRenderer = rendererSigil;
        var prevNode = currentActiveSnapshot, newNode = {
          parent: prevNode,
          depth: prevNode === null ? 0 : prevNode.depth + 1,
          context,
          parentValue: prevValue,
          value: nextValue
        };
        return currentActiveSnapshot = newNode, newNode;
      }
      function popProvider(context) {
        var prevSnapshot = currentActiveSnapshot;
        if (prevSnapshot === null)
          throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
        prevSnapshot.context !== context && error("The parent context is not the expected context. This is probably a bug in React.");
        {
          var value = prevSnapshot.parentValue;
          value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED ? prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue : prevSnapshot.context._currentValue = value, context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil && error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), context._currentRenderer = rendererSigil;
        }
        return currentActiveSnapshot = prevSnapshot.parent;
      }
      function getActiveContext() {
        return currentActiveSnapshot;
      }
      function readContext(context) {
        var value = context._currentValue;
        return value;
      }
      function get(key) {
        return key._reactInternals;
      }
      function set(key, value) {
        key._reactInternals = value;
      }
      var didWarnAboutNoopUpdateForComponent = {}, didWarnAboutDeprecatedWillMount = {}, didWarnAboutUninitializedState, didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate, didWarnAboutLegacyLifecyclesAndDerivedState, didWarnAboutUndefinedDerivedState, warnOnUndefinedDerivedState, warnOnInvalidCallback, didWarnAboutDirectlyAssigningPropsToState, didWarnAboutContextTypeAndContextTypes, didWarnAboutInvalidateContextType;
      {
        didWarnAboutUninitializedState = /* @__PURE__ */ new Set(), didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set(), didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set(), didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set(), didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set(), didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set(), didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
        var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
        warnOnInvalidCallback = function(callback, callerName) {
          if (!(callback === null || typeof callback == "function")) {
            var key = callerName + "_" + callback;
            didWarnOnInvalidCallback.has(key) || (didWarnOnInvalidCallback.add(key), error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback));
          }
        }, warnOnUndefinedDerivedState = function(type, partialState) {
          if (partialState === void 0) {
            var componentName = getComponentNameFromType(type) || "Component";
            didWarnAboutUndefinedDerivedState.has(componentName) || (didWarnAboutUndefinedDerivedState.add(componentName), error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName));
          }
        };
      }
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor, componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass", warningKey = componentName + "." + callerName;
          if (didWarnAboutNoopUpdateForComponent[warningKey])
            return;
          error(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, callerName, callerName, componentName), didWarnAboutNoopUpdateForComponent[warningKey] = !0;
        }
      }
      var classComponentUpdater = {
        isMounted: function(inst) {
          return !1;
        },
        enqueueSetState: function(inst, payload, callback) {
          var internals = get(inst);
          internals.queue === null ? warnNoop(inst, "setState") : (internals.queue.push(payload), callback != null && warnOnInvalidCallback(callback, "setState"));
        },
        enqueueReplaceState: function(inst, payload, callback) {
          var internals = get(inst);
          internals.replace = !0, internals.queue = [payload], callback != null && warnOnInvalidCallback(callback, "setState");
        },
        enqueueForceUpdate: function(inst, callback) {
          var internals = get(inst);
          internals.queue === null ? warnNoop(inst, "forceUpdate") : callback != null && warnOnInvalidCallback(callback, "setState");
        }
      };
      function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
        var partialState = getDerivedStateFromProps(nextProps, prevState);
        warnOnUndefinedDerivedState(ctor, partialState);
        var newState = partialState == null ? prevState : assign({}, prevState, partialState);
        return newState;
      }
      function constructClassInstance(ctor, props, maskedLegacyContext) {
        var context = emptyContextObject, contextType = ctor.contextType;
        if ("contextType" in ctor) {
          var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
          if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
            didWarnAboutInvalidateContextType.add(ctor);
            var addendum = "";
            contextType === void 0 ? addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof contextType != "object" ? addendum = " However, it is set to a " + typeof contextType + "." : contextType.$$typeof === REACT_PROVIDER_TYPE ? addendum = " Did you accidentally pass the Context.Provider instead?" : contextType._context !== void 0 ? addendum = " Did you accidentally pass the Context.Consumer instead?" : addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.", error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
          }
        }
        typeof contextType == "object" && contextType !== null ? context = readContext(contextType) : context = maskedLegacyContext;
        var instance = new ctor(props, context);
        {
          if (typeof ctor.getDerivedStateFromProps == "function" && (instance.state === null || instance.state === void 0)) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            didWarnAboutUninitializedState.has(componentName) || (didWarnAboutUninitializedState.add(componentName), error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName));
          }
          if (typeof ctor.getDerivedStateFromProps == "function" || typeof instance.getSnapshotBeforeUpdate == "function") {
            var foundWillMountName = null, foundWillReceivePropsName = null, foundWillUpdateName = null;
            if (typeof instance.componentWillMount == "function" && instance.componentWillMount.__suppressDeprecationWarning !== !0 ? foundWillMountName = "componentWillMount" : typeof instance.UNSAFE_componentWillMount == "function" && (foundWillMountName = "UNSAFE_componentWillMount"), typeof instance.componentWillReceiveProps == "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? foundWillReceivePropsName = "componentWillReceiveProps" : typeof instance.UNSAFE_componentWillReceiveProps == "function" && (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps"), typeof instance.componentWillUpdate == "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== !0 ? foundWillUpdateName = "componentWillUpdate" : typeof instance.UNSAFE_componentWillUpdate == "function" && (foundWillUpdateName = "UNSAFE_componentWillUpdate"), foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
              var _componentName = getComponentNameFromType(ctor) || "Component", newApiName = typeof ctor.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName) || (didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName), error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _componentName, newApiName, foundWillMountName !== null ? `
  ` + foundWillMountName : "", foundWillReceivePropsName !== null ? `
  ` + foundWillReceivePropsName : "", foundWillUpdateName !== null ? `
  ` + foundWillUpdateName : ""));
            }
          }
        }
        return instance;
      }
      function checkClassInstance(instance, ctor, newProps) {
        {
          var name = getComponentNameFromType(ctor) || "Component", renderPresent = instance.render;
          renderPresent || (ctor.prototype && typeof ctor.prototype.render == "function" ? error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name) : error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name)), instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state && error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name), instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved && error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name), instance.propTypes && error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name), instance.contextType && error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name), instance.contextTypes && error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name), ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor) && (didWarnAboutContextTypeAndContextTypes.add(ctor), error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name)), typeof instance.componentShouldUpdate == "function" && error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name), ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate < "u" && error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component"), typeof instance.componentDidUnmount == "function" && error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name), typeof instance.componentDidReceiveProps == "function" && error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name), typeof instance.componentWillRecieveProps == "function" && error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name), typeof instance.UNSAFE_componentWillRecieveProps == "function" && error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
          var hasMutatedProps = instance.props !== newProps;
          instance.props !== void 0 && hasMutatedProps && error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name), instance.defaultProps && error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name), typeof instance.getSnapshotBeforeUpdate == "function" && typeof instance.componentDidUpdate != "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor) && (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor), error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor))), typeof instance.getDerivedStateFromProps == "function" && error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name), typeof instance.getDerivedStateFromError == "function" && error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name), typeof ctor.getSnapshotBeforeUpdate == "function" && error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
          var _state = instance.state;
          _state && (typeof _state != "object" || isArray(_state)) && error("%s.state: must be set to an object or null", name), typeof instance.getChildContext == "function" && typeof ctor.childContextTypes != "object" && error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
        }
      }
      function callComponentWillMount(type, instance) {
        var oldState = instance.state;
        if (typeof instance.componentWillMount == "function") {
          if (instance.componentWillMount.__suppressDeprecationWarning !== !0) {
            var componentName = getComponentNameFromType(type) || "Unknown";
            didWarnAboutDeprecatedWillMount[componentName] || (warn(
              `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
              componentName
            ), didWarnAboutDeprecatedWillMount[componentName] = !0);
          }
          instance.componentWillMount();
        }
        typeof instance.UNSAFE_componentWillMount == "function" && instance.UNSAFE_componentWillMount(), oldState !== instance.state && (error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component"), classComponentUpdater.enqueueReplaceState(instance, instance.state, null));
      }
      function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
        if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
          var oldQueue = internalInstance.queue, oldReplace = internalInstance.replace;
          if (internalInstance.queue = null, internalInstance.replace = !1, oldReplace && oldQueue.length === 1)
            inst.state = oldQueue[0];
          else {
            for (var nextState = oldReplace ? oldQueue[0] : inst.state, dontMutate = !0, i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
              var partial = oldQueue[i], partialState = typeof partial == "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
              partialState != null && (dontMutate ? (dontMutate = !1, nextState = assign({}, nextState, partialState)) : assign(nextState, partialState));
            }
            inst.state = nextState;
          }
        } else
          internalInstance.queue = null;
      }
      function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
        checkClassInstance(instance, ctor, newProps);
        var initialState = instance.state !== void 0 ? instance.state : null;
        instance.updater = classComponentUpdater, instance.props = newProps, instance.state = initialState;
        var internalInstance = {
          queue: [],
          replace: !1
        };
        set(instance, internalInstance);
        var contextType = ctor.contextType;
        if (typeof contextType == "object" && contextType !== null ? instance.context = readContext(contextType) : instance.context = maskedLegacyContext, instance.state === newProps) {
          var componentName = getComponentNameFromType(ctor) || "Component";
          didWarnAboutDirectlyAssigningPropsToState.has(componentName) || (didWarnAboutDirectlyAssigningPropsToState.add(componentName), error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName));
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        typeof getDerivedStateFromProps == "function" && (instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps)), typeof ctor.getDerivedStateFromProps != "function" && typeof instance.getSnapshotBeforeUpdate != "function" && (typeof instance.UNSAFE_componentWillMount == "function" || typeof instance.componentWillMount == "function") && (callComponentWillMount(ctor, instance), processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext));
      }
      var emptyTreeContext = {
        id: 1,
        overflow: ""
      };
      function getTreeId(context) {
        var overflow = context.overflow, idWithLeadingBit = context.id, id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
        return id.toString(32) + overflow;
      }
      function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id, baseOverflow = baseContext.overflow, baseLength = getBitLength(baseIdWithLeadingBit) - 1, baseId = baseIdWithLeadingBit & ~(1 << baseLength), slot = index + 1, length = getBitLength(totalChildren) + baseLength;
        if (length > 30) {
          var numberOfOverflowBits = baseLength - baseLength % 5, newOverflowBits = (1 << numberOfOverflowBits) - 1, newOverflow = (baseId & newOverflowBits).toString(32), restOfBaseId = baseId >> numberOfOverflowBits, restOfBaseLength = baseLength - numberOfOverflowBits, restOfLength = getBitLength(totalChildren) + restOfBaseLength, restOfNewBits = slot << restOfBaseLength, id = restOfNewBits | restOfBaseId, overflow = newOverflow + baseOverflow;
          return {
            id: 1 << restOfLength | id,
            overflow
          };
        } else {
          var newBits = slot << baseLength, _id = newBits | baseId, _overflow = baseOverflow;
          return {
            id: 1 << length | _id,
            overflow: _overflow
          };
        }
      }
      function getBitLength(number) {
        return 32 - clz32(number);
      }
      function getLeadingBit(id) {
        return 1 << getBitLength(id) - 1;
      }
      var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2;
      function clz32Fallback(x) {
        var asUint = x >>> 0;
        return asUint === 0 ? 32 : 31 - (log(asUint) / LN2 | 0) | 0;
      }
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = typeof Object.is == "function" ? Object.is : is, currentlyRenderingComponent = null, currentlyRenderingTask = null, firstWorkInProgressHook = null, workInProgressHook = null, isReRender = !1, didScheduleRenderPhaseUpdate = !1, localIdCounter = 0, renderPhaseUpdates = null, numberOfReRenders = 0, RE_RENDER_LIMIT = 25, isInHookUserCodeInDev = !1, currentHookNameInDev;
      function resolveCurrentlyRenderingComponent() {
        if (currentlyRenderingComponent === null)
          throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return isInHookUserCodeInDev && error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), currentlyRenderingComponent;
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (prevDeps === null)
          return error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev), !1;
        nextDeps.length !== prevDeps.length && error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
        for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
          if (!objectIs(nextDeps[i], prevDeps[i]))
            return !1;
        return !0;
      }
      function createHook() {
        if (numberOfReRenders > 0)
          throw new Error("Rendered more hooks than during the previous render");
        return {
          memoizedState: null,
          queue: null,
          next: null
        };
      }
      function createWorkInProgressHook() {
        return workInProgressHook === null ? firstWorkInProgressHook === null ? (isReRender = !1, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = !0, workInProgressHook = firstWorkInProgressHook) : workInProgressHook.next === null ? (isReRender = !1, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = !0, workInProgressHook = workInProgressHook.next), workInProgressHook;
      }
      function prepareToUseHooks(task, componentIdentity) {
        currentlyRenderingComponent = componentIdentity, currentlyRenderingTask = task, isInHookUserCodeInDev = !1, localIdCounter = 0;
      }
      function finishHooks(Component, props, children, refOrContext) {
        for (; didScheduleRenderPhaseUpdate; )
          didScheduleRenderPhaseUpdate = !1, localIdCounter = 0, numberOfReRenders += 1, workInProgressHook = null, children = Component(props, refOrContext);
        return resetHooksState(), children;
      }
      function checkDidRenderIdHook() {
        var didRenderIdHook = localIdCounter !== 0;
        return didRenderIdHook;
      }
      function resetHooksState() {
        isInHookUserCodeInDev = !1, currentlyRenderingComponent = null, currentlyRenderingTask = null, didScheduleRenderPhaseUpdate = !1, firstWorkInProgressHook = null, numberOfReRenders = 0, renderPhaseUpdates = null, workInProgressHook = null;
      }
      function readContext$1(context) {
        return isInHookUserCodeInDev && error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), readContext(context);
      }
      function useContext4(context) {
        return currentHookNameInDev = "useContext", resolveCurrentlyRenderingComponent(), readContext(context);
      }
      function basicStateReducer(state, action2) {
        return typeof action2 == "function" ? action2(state) : action2;
      }
      function useState10(initialState) {
        return currentHookNameInDev = "useState", useReducer2(
          basicStateReducer,
          initialState
        );
      }
      function useReducer2(reducer, initialArg, init) {
        if (reducer !== basicStateReducer && (currentHookNameInDev = "useReducer"), currentlyRenderingComponent = resolveCurrentlyRenderingComponent(), workInProgressHook = createWorkInProgressHook(), isReRender) {
          var queue = workInProgressHook.queue, dispatch = queue.dispatch;
          if (renderPhaseUpdates !== null) {
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate !== void 0) {
              renderPhaseUpdates.delete(queue);
              var newState = workInProgressHook.memoizedState, update = firstRenderPhaseUpdate;
              do {
                var action2 = update.action;
                isInHookUserCodeInDev = !0, newState = reducer(newState, action2), isInHookUserCodeInDev = !1, update = update.next;
              } while (update !== null);
              return workInProgressHook.memoizedState = newState, [newState, dispatch];
            }
          }
          return [workInProgressHook.memoizedState, dispatch];
        } else {
          isInHookUserCodeInDev = !0;
          var initialState;
          reducer === basicStateReducer ? initialState = typeof initialArg == "function" ? initialArg() : initialArg : initialState = init !== void 0 ? init(initialArg) : initialArg, isInHookUserCodeInDev = !1, workInProgressHook.memoizedState = initialState;
          var _queue = workInProgressHook.queue = {
            last: null,
            dispatch: null
          }, _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
          return [workInProgressHook.memoizedState, _dispatch];
        }
      }
      function useMemo4(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent(), workInProgressHook = createWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        if (workInProgressHook !== null) {
          var prevState = workInProgressHook.memoizedState;
          if (prevState !== null && nextDeps !== null) {
            var prevDeps = prevState[1];
            if (areHookInputsEqual(nextDeps, prevDeps))
              return prevState[0];
          }
        }
        isInHookUserCodeInDev = !0;
        var nextValue = nextCreate();
        return isInHookUserCodeInDev = !1, workInProgressHook.memoizedState = [nextValue, nextDeps], nextValue;
      }
      function useRef6(initialValue) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent(), workInProgressHook = createWorkInProgressHook();
        var previousRef = workInProgressHook.memoizedState;
        if (previousRef === null) {
          var ref = {
            current: initialValue
          };
          return Object.seal(ref), workInProgressHook.memoizedState = ref, ref;
        } else
          return previousRef;
      }
      function useLayoutEffect4(create, inputs) {
        currentHookNameInDev = "useLayoutEffect", error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
      }
      function dispatchAction(componentIdentity, queue, action2) {
        if (numberOfReRenders >= RE_RENDER_LIMIT)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        if (componentIdentity === currentlyRenderingComponent) {
          didScheduleRenderPhaseUpdate = !0;
          var update = {
            action: action2,
            next: null
          };
          renderPhaseUpdates === null && (renderPhaseUpdates = /* @__PURE__ */ new Map());
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
          if (firstRenderPhaseUpdate === void 0)
            renderPhaseUpdates.set(queue, update);
          else {
            for (var lastRenderPhaseUpdate = firstRenderPhaseUpdate; lastRenderPhaseUpdate.next !== null; )
              lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            lastRenderPhaseUpdate.next = update;
          }
        }
      }
      function useCallback5(callback, deps) {
        return useMemo4(function() {
          return callback;
        }, deps);
      }
      function useMutableSource(source, getSnapshot, subscribe) {
        return resolveCurrentlyRenderingComponent(), getSnapshot(source._source);
      }
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        if (getServerSnapshot === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        return getServerSnapshot();
      }
      function useDeferredValue(value) {
        return resolveCurrentlyRenderingComponent(), value;
      }
      function unsupportedStartTransition() {
        throw new Error("startTransition cannot be called during server rendering.");
      }
      function useTransition2() {
        return resolveCurrentlyRenderingComponent(), [!1, unsupportedStartTransition];
      }
      function useId2() {
        var task = currentlyRenderingTask, treeId = getTreeId(task.treeContext), responseState = currentResponseState;
        if (responseState === null)
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
        var localId = localIdCounter++;
        return makeId(responseState, treeId, localId);
      }
      function noop() {
      }
      var Dispatcher = {
        readContext: readContext$1,
        useContext: useContext4,
        useMemo: useMemo4,
        useReducer: useReducer2,
        useRef: useRef6,
        useState: useState10,
        useInsertionEffect: noop,
        useLayoutEffect: useLayoutEffect4,
        useCallback: useCallback5,
        useImperativeHandle: noop,
        useEffect: noop,
        useDebugValue: noop,
        useDeferredValue,
        useTransition: useTransition2,
        useId: useId2,
        useMutableSource,
        useSyncExternalStore
      }, currentResponseState = null;
      function setCurrentResponseState(responseState) {
        currentResponseState = responseState;
      }
      function getStackByComponentStackNode(componentStack) {
        try {
          var info = "", node = componentStack;
          do {
            switch (node.tag) {
              case 0:
                info += describeBuiltInComponentFrame(node.type, null, null);
                break;
              case 1:
                info += describeFunctionComponentFrame(node.type, null, null);
                break;
              case 2:
                info += describeClassComponentFrame(node.type, null, null);
                break;
            }
            node = node.parent;
          } while (node);
          return info;
        } catch (x) {
          return `
Error generating stack: ` + x.message + `
` + x.stack;
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame, PENDING = 0, COMPLETED = 1, FLUSHED = 2, ABORTED = 3, ERRORED = 4, OPEN = 0, CLOSING = 1, CLOSED = 2, DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
      function defaultErrorHandler(error2) {
        return console.error(error2), null;
      }
      function noop$1() {
      }
      function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
        var pingedTasks = [], abortSet = /* @__PURE__ */ new Set(), request = {
          destination: null,
          responseState,
          progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
          status: OPEN,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: abortSet,
          pingedTasks,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: onError === void 0 ? defaultErrorHandler : onError,
          onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
          onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
          onShellError: onShellError === void 0 ? noop$1 : onShellError,
          onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
        }, rootSegment = createPendingSegment(
          request,
          0,
          null,
          rootFormatContext,
          !1,
          !1
        );
        rootSegment.parentFlushed = !0;
        var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
        return pingedTasks.push(rootTask), request;
      }
      function pingTask(request, task) {
        var pingedTasks = request.pingedTasks;
        pingedTasks.push(task), pingedTasks.length === 1 && scheduleWork(function() {
          return performWork(request);
        });
      }
      function createSuspenseBoundary(request, fallbackAbortableTasks) {
        return {
          id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
          rootSegmentID: -1,
          parentFlushed: !1,
          pendingTasks: 0,
          forceClientRender: !1,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks,
          errorDigest: null
        };
      }
      function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
        request.allPendingTasks++, blockedBoundary === null ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        var task = {
          node,
          ping: function() {
            return pingTask(request, task);
          },
          blockedBoundary,
          blockedSegment,
          abortSet,
          legacyContext,
          context,
          treeContext
        };
        return task.componentStack = null, abortSet.add(task), task;
      }
      function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
        return {
          status: PENDING,
          id: -1,
          index,
          parentFlushed: !1,
          chunks: [],
          children: [],
          formatContext,
          boundary,
          lastPushedText,
          textEmbedded
        };
      }
      var currentTaskInDEV = null;
      function getCurrentStackInDEV() {
        return currentTaskInDEV === null || currentTaskInDEV.componentStack === null ? "" : getStackByComponentStackNode(currentTaskInDEV.componentStack);
      }
      function pushBuiltInComponentStackInDEV(task, type) {
        task.componentStack = {
          tag: 0,
          parent: task.componentStack,
          type
        };
      }
      function pushFunctionComponentStackInDEV(task, type) {
        task.componentStack = {
          tag: 1,
          parent: task.componentStack,
          type
        };
      }
      function pushClassComponentStackInDEV(task, type) {
        task.componentStack = {
          tag: 2,
          parent: task.componentStack,
          type
        };
      }
      function popComponentStackInDEV(task) {
        task.componentStack === null ? error("Unexpectedly popped too many stack frames. This is a bug in React.") : task.componentStack = task.componentStack.parent;
      }
      var lastBoundaryErrorComponentStackDev = null;
      function captureBoundaryErrorDetailsDev(boundary, error2) {
        {
          var errorMessage;
          typeof error2 == "string" ? errorMessage = error2 : error2 && typeof error2.message == "string" ? errorMessage = error2.message : errorMessage = String(error2);
          var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
          lastBoundaryErrorComponentStackDev = null, boundary.errorMessage = errorMessage, boundary.errorComponentStack = errorComponentStack;
        }
      }
      function logRecoverableError(request, error2) {
        var errorDigest = request.onError(error2);
        if (errorDigest != null && typeof errorDigest != "string")
          throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
        return errorDigest;
      }
      function fatalError(request, error2) {
        var onShellError = request.onShellError;
        onShellError(error2);
        var onFatalError = request.onFatalError;
        onFatalError(error2), request.destination !== null ? (request.status = CLOSED, closeWithError(request.destination, error2)) : (request.status = CLOSING, request.fatalError = error2);
      }
      function renderSuspenseBoundary(request, task, props) {
        pushBuiltInComponentStackInDEV(task, "Suspense");
        var parentBoundary = task.blockedBoundary, parentSegment = task.blockedSegment, fallback = props.fallback, content = props.children, fallbackAbortSet = /* @__PURE__ */ new Set(), newBoundary = createSuspenseBoundary(request, fallbackAbortSet), insertionIndex = parentSegment.chunks.length, boundarySegment = createPendingSegment(
          request,
          insertionIndex,
          newBoundary,
          parentSegment.formatContext,
          !1,
          !1
        );
        parentSegment.children.push(boundarySegment), parentSegment.lastPushedText = !1;
        var contentRootSegment = createPendingSegment(
          request,
          0,
          null,
          parentSegment.formatContext,
          !1,
          !1
        );
        contentRootSegment.parentFlushed = !0, task.blockedBoundary = newBoundary, task.blockedSegment = contentRootSegment;
        try {
          if (renderNode(request, task, content), pushSegmentFinale(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded), contentRootSegment.status = COMPLETED, queueCompletedSegment(newBoundary, contentRootSegment), newBoundary.pendingTasks === 0) {
            popComponentStackInDEV(task);
            return;
          }
        } catch (error2) {
          contentRootSegment.status = ERRORED, newBoundary.forceClientRender = !0, newBoundary.errorDigest = logRecoverableError(request, error2), captureBoundaryErrorDetailsDev(newBoundary, error2);
        } finally {
          task.blockedBoundary = parentBoundary, task.blockedSegment = parentSegment;
        }
        var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
        suspendedFallbackTask.componentStack = task.componentStack, request.pingedTasks.push(suspendedFallbackTask), popComponentStackInDEV(task);
      }
      function renderHostElement(request, task, type, props) {
        pushBuiltInComponentStackInDEV(task, type);
        var segment = task.blockedSegment, children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
        segment.lastPushedText = !1;
        var prevContext = segment.formatContext;
        segment.formatContext = getChildFormatContext(prevContext, type, props), renderNode(request, task, children), segment.formatContext = prevContext, pushEndInstance(segment.chunks, type), segment.lastPushedText = !1, popComponentStackInDEV(task);
      }
      function shouldConstruct$1(Component) {
        return Component.prototype && Component.prototype.isReactComponent;
      }
      function renderWithHooks(request, task, Component, props, secondArg) {
        var componentIdentity = {};
        prepareToUseHooks(task, componentIdentity);
        var result = Component(props, secondArg);
        return finishHooks(Component, props, result, secondArg);
      }
      function finishClassComponent(request, task, instance, Component, props) {
        var nextChildren = instance.render();
        instance.props !== props && (didWarnAboutReassigningProps || error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component"), didWarnAboutReassigningProps = !0);
        {
          var childContextTypes = Component.childContextTypes;
          if (childContextTypes != null) {
            var previousContext = task.legacyContext, mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
            task.legacyContext = mergedContext, renderNodeDestructive(request, task, nextChildren), task.legacyContext = previousContext;
            return;
          }
        }
        renderNodeDestructive(request, task, nextChildren);
      }
      function renderClassComponent(request, task, Component, props) {
        pushClassComponentStackInDEV(task, Component);
        var maskedContext = getMaskedContext(Component, task.legacyContext), instance = constructClassInstance(Component, props, maskedContext);
        mountClassInstance(instance, Component, props, maskedContext), finishClassComponent(request, task, instance, Component, props), popComponentStackInDEV(task);
      }
      var didWarnAboutBadClass = {}, didWarnAboutModulePatternComponent = {}, didWarnAboutContextTypeOnFunctionComponent = {}, didWarnAboutGetDerivedStateOnFunctionComponent = {}, didWarnAboutReassigningProps = !1, didWarnAboutGenerators = !1, didWarnAboutMaps = !1, hasWarnedAboutUsingContextAsConsumer = !1;
      function renderIndeterminateComponent(request, task, Component, props) {
        var legacyContext;
        if (legacyContext = getMaskedContext(Component, task.legacyContext), pushFunctionComponentStackInDEV(task, Component), Component.prototype && typeof Component.prototype.render == "function") {
          var componentName = getComponentNameFromType(Component) || "Unknown";
          didWarnAboutBadClass[componentName] || (error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName), didWarnAboutBadClass[componentName] = !0);
        }
        var value = renderWithHooks(request, task, Component, props, legacyContext), hasId = checkDidRenderIdHook();
        if (typeof value == "object" && value !== null && typeof value.render == "function" && value.$$typeof === void 0) {
          var _componentName = getComponentNameFromType(Component) || "Unknown";
          didWarnAboutModulePatternComponent[_componentName] || (error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName), didWarnAboutModulePatternComponent[_componentName] = !0);
        }
        if (typeof value == "object" && value !== null && typeof value.render == "function" && value.$$typeof === void 0) {
          {
            var _componentName2 = getComponentNameFromType(Component) || "Unknown";
            didWarnAboutModulePatternComponent[_componentName2] || (error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2), didWarnAboutModulePatternComponent[_componentName2] = !0);
          }
          mountClassInstance(value, Component, props, legacyContext), finishClassComponent(request, task, value, Component, props);
        } else if (validateFunctionComponentInDev(Component), hasId) {
          var prevTreeContext = task.treeContext, totalChildren = 1, index = 0;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
          try {
            renderNodeDestructive(request, task, value);
          } finally {
            task.treeContext = prevTreeContext;
          }
        } else
          renderNodeDestructive(request, task, value);
        popComponentStackInDEV(task);
      }
      function validateFunctionComponentInDev(Component) {
        {
          if (Component && Component.childContextTypes && error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component"), typeof Component.getDerivedStateFromProps == "function") {
            var _componentName3 = getComponentNameFromType(Component) || "Unknown";
            didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] || (error("%s: Function components do not support getDerivedStateFromProps.", _componentName3), didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = !0);
          }
          if (typeof Component.contextType == "object" && Component.contextType !== null) {
            var _componentName4 = getComponentNameFromType(Component) || "Unknown";
            didWarnAboutContextTypeOnFunctionComponent[_componentName4] || (error("%s: Function components do not support contextType.", _componentName4), didWarnAboutContextTypeOnFunctionComponent[_componentName4] = !0);
          }
        }
      }
      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          var props = assign({}, baseProps), defaultProps = Component.defaultProps;
          for (var propName in defaultProps)
            props[propName] === void 0 && (props[propName] = defaultProps[propName]);
          return props;
        }
        return baseProps;
      }
      function renderForwardRef(request, task, type, props, ref) {
        pushFunctionComponentStackInDEV(task, type.render);
        var children = renderWithHooks(request, task, type.render, props, ref), hasId = checkDidRenderIdHook();
        if (hasId) {
          var prevTreeContext = task.treeContext, totalChildren = 1, index = 0;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
          try {
            renderNodeDestructive(request, task, children);
          } finally {
            task.treeContext = prevTreeContext;
          }
        } else
          renderNodeDestructive(request, task, children);
        popComponentStackInDEV(task);
      }
      function renderMemo(request, task, type, props, ref) {
        var innerType = type.type, resolvedProps = resolveDefaultProps(innerType, props);
        renderElement(request, task, innerType, resolvedProps, ref);
      }
      function renderContextConsumer(request, task, context, props) {
        context._context === void 0 ? context !== context.Consumer && (hasWarnedAboutUsingContextAsConsumer || (hasWarnedAboutUsingContextAsConsumer = !0, error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : context = context._context;
        var render = props.children;
        typeof render != "function" && error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
        var newValue = readContext(context), newChildren = render(newValue);
        renderNodeDestructive(request, task, newChildren);
      }
      function renderContextProvider(request, task, type, props) {
        var context = type._context, value = props.value, children = props.children, prevSnapshot;
        prevSnapshot = task.context, task.context = pushProvider(context, value), renderNodeDestructive(request, task, children), task.context = popProvider(context), prevSnapshot !== task.context && error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
      }
      function renderLazyComponent(request, task, lazyComponent, props, ref) {
        pushBuiltInComponentStackInDEV(task, "Lazy");
        var payload = lazyComponent._payload, init = lazyComponent._init, Component = init(payload), resolvedProps = resolveDefaultProps(Component, props);
        renderElement(request, task, Component, resolvedProps, ref), popComponentStackInDEV(task);
      }
      function renderElement(request, task, type, props, ref) {
        if (typeof type == "function")
          if (shouldConstruct$1(type)) {
            renderClassComponent(request, task, type, props);
            return;
          } else {
            renderIndeterminateComponent(request, task, type, props);
            return;
          }
        if (typeof type == "string") {
          renderHostElement(request, task, type, props);
          return;
        }
        switch (type) {
          case REACT_LEGACY_HIDDEN_TYPE:
          case REACT_DEBUG_TRACING_MODE_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_FRAGMENT_TYPE: {
            renderNodeDestructive(request, task, props.children);
            return;
          }
          case REACT_SUSPENSE_LIST_TYPE: {
            pushBuiltInComponentStackInDEV(task, "SuspenseList"), renderNodeDestructive(request, task, props.children), popComponentStackInDEV(task);
            return;
          }
          case REACT_SCOPE_TYPE:
            throw new Error("ReactDOMServer does not yet support scope components.");
          case REACT_SUSPENSE_TYPE: {
            renderSuspenseBoundary(request, task, props);
            return;
          }
        }
        if (typeof type == "object" && type !== null)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE: {
              renderForwardRef(request, task, type, props, ref);
              return;
            }
            case REACT_MEMO_TYPE: {
              renderMemo(request, task, type, props, ref);
              return;
            }
            case REACT_PROVIDER_TYPE: {
              renderContextProvider(request, task, type, props);
              return;
            }
            case REACT_CONTEXT_TYPE: {
              renderContextConsumer(request, task, type, props);
              return;
            }
            case REACT_LAZY_TYPE: {
              renderLazyComponent(request, task, type, props);
              return;
            }
          }
        var info = "";
        throw (type === void 0 || typeof type == "object" && type !== null && Object.keys(type).length === 0) && (info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
      }
      function validateIterable(iterable, iteratorFn) {
        typeof Symbol == "function" && iterable[Symbol.toStringTag] === "Generator" && (didWarnAboutGenerators || error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), didWarnAboutGenerators = !0), iterable.entries === iteratorFn && (didWarnAboutMaps || error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0);
      }
      function renderNodeDestructive(request, task, node) {
        try {
          return renderNodeDestructiveImpl(request, task, node);
        } catch (x) {
          throw typeof x == "object" && x !== null && typeof x.then == "function" || (lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV()), x;
        }
      }
      function renderNodeDestructiveImpl(request, task, node) {
        if (task.node = node, typeof node == "object" && node !== null) {
          switch (node.$$typeof) {
            case REACT_ELEMENT_TYPE: {
              var element = node, type = element.type, props = element.props, ref = element.ref;
              renderElement(request, task, type, props, ref);
              return;
            }
            case REACT_PORTAL_TYPE:
              throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
            case REACT_LAZY_TYPE: {
              var lazyNode = node, payload = lazyNode._payload, init = lazyNode._init, resolvedNode;
              try {
                resolvedNode = init(payload);
              } catch (x) {
                throw typeof x == "object" && x !== null && typeof x.then == "function" && pushBuiltInComponentStackInDEV(task, "Lazy"), x;
              }
              renderNodeDestructive(request, task, resolvedNode);
              return;
            }
          }
          if (isArray(node)) {
            renderChildrenArray(request, task, node);
            return;
          }
          var iteratorFn = getIteratorFn(node);
          if (iteratorFn) {
            validateIterable(node, iteratorFn);
            var iterator = iteratorFn.call(node);
            if (iterator) {
              var step = iterator.next();
              if (!step.done) {
                var children = [];
                do
                  children.push(step.value), step = iterator.next();
                while (!step.done);
                renderChildrenArray(request, task, children);
                return;
              }
              return;
            }
          }
          var childString = Object.prototype.toString.call(node);
          throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
        }
        if (typeof node == "string") {
          var segment = task.blockedSegment;
          segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
          return;
        }
        if (typeof node == "number") {
          var _segment = task.blockedSegment;
          _segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
          return;
        }
        typeof node == "function" && error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
      function renderChildrenArray(request, task, children) {
        for (var totalChildren = children.length, i = 0; i < totalChildren; i++) {
          var prevTreeContext = task.treeContext;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
          try {
            renderNode(request, task, children[i]);
          } finally {
            task.treeContext = prevTreeContext;
          }
        }
      }
      function spawnNewSuspendedTask(request, task, x) {
        var segment = task.blockedSegment, insertionIndex = segment.chunks.length, newSegment = createPendingSegment(
          request,
          insertionIndex,
          null,
          segment.formatContext,
          segment.lastPushedText,
          !0
        );
        segment.children.push(newSegment), segment.lastPushedText = !1;
        var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
        task.componentStack !== null && (newTask.componentStack = task.componentStack.parent);
        var ping = newTask.ping;
        x.then(ping, ping);
      }
      function renderNode(request, task, node) {
        var previousFormatContext = task.blockedSegment.formatContext, previousLegacyContext = task.legacyContext, previousContext = task.context, previousComponentStack = null;
        previousComponentStack = task.componentStack;
        try {
          return renderNodeDestructive(request, task, node);
        } catch (x) {
          if (resetHooksState(), typeof x == "object" && x !== null && typeof x.then == "function") {
            spawnNewSuspendedTask(request, task, x), task.blockedSegment.formatContext = previousFormatContext, task.legacyContext = previousLegacyContext, task.context = previousContext, switchContext(previousContext), task.componentStack = previousComponentStack;
            return;
          } else
            throw task.blockedSegment.formatContext = previousFormatContext, task.legacyContext = previousLegacyContext, task.context = previousContext, switchContext(previousContext), task.componentStack = previousComponentStack, x;
        }
      }
      function erroredTask(request, boundary, segment, error2) {
        var errorDigest = logRecoverableError(request, error2);
        if (boundary === null ? fatalError(request, error2) : (boundary.pendingTasks--, boundary.forceClientRender || (boundary.forceClientRender = !0, boundary.errorDigest = errorDigest, captureBoundaryErrorDetailsDev(boundary, error2), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary))), request.allPendingTasks--, request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function abortTaskSoft(task) {
        var request = this, boundary = task.blockedBoundary, segment = task.blockedSegment;
        segment.status = ABORTED, finishedTask(request, boundary, segment);
      }
      function abortTask(task, request, reason) {
        var boundary = task.blockedBoundary, segment = task.blockedSegment;
        if (segment.status = ABORTED, boundary === null)
          request.allPendingTasks--, request.status !== CLOSED && (request.status = CLOSED, request.destination !== null && close(request.destination));
        else {
          if (boundary.pendingTasks--, !boundary.forceClientRender) {
            boundary.forceClientRender = !0;
            var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
            boundary.errorDigest = request.onError(_error);
            {
              var errorPrefix = "The server did not finish this Suspense boundary: ";
              _error && typeof _error.message == "string" ? _error = errorPrefix + _error.message : _error = errorPrefix + String(_error);
              var previousTaskInDev = currentTaskInDEV;
              currentTaskInDEV = task;
              try {
                captureBoundaryErrorDetailsDev(boundary, _error);
              } finally {
                currentTaskInDEV = previousTaskInDev;
              }
            }
            boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary);
          }
          if (boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, reason);
          }), boundary.fallbackAbortableTasks.clear(), request.allPendingTasks--, request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
      }
      function queueCompletedSegment(boundary, segment) {
        if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
          var childSegment = segment.children[0];
          childSegment.id = segment.id, childSegment.parentFlushed = !0, childSegment.status === COMPLETED && queueCompletedSegment(boundary, childSegment);
        } else {
          var completedSegments = boundary.completedSegments;
          completedSegments.push(segment);
        }
      }
      function finishedTask(request, boundary, segment) {
        if (boundary === null) {
          if (segment.parentFlushed) {
            if (request.completedRootSegment !== null)
              throw new Error("There can only be one root segment. This is a bug in React.");
            request.completedRootSegment = segment;
          }
          if (request.pendingRootTasks--, request.pendingRootTasks === 0) {
            request.onShellError = noop$1;
            var onShellReady = request.onShellReady;
            onShellReady();
          }
        } else if (boundary.pendingTasks--, !boundary.forceClientRender) {
          if (boundary.pendingTasks === 0)
            segment.parentFlushed && segment.status === COMPLETED && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear();
          else if (segment.parentFlushed && segment.status === COMPLETED) {
            queueCompletedSegment(boundary, segment);
            var completedSegments = boundary.completedSegments;
            completedSegments.length === 1 && boundary.parentFlushed && request.partialBoundaries.push(boundary);
          }
        }
        if (request.allPendingTasks--, request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function retryTask(request, task) {
        var segment = task.blockedSegment;
        if (segment.status === PENDING) {
          switchContext(task.context);
          var prevTaskInDEV = null;
          prevTaskInDEV = currentTaskInDEV, currentTaskInDEV = task;
          try {
            renderNodeDestructive(request, task, task.node), pushSegmentFinale(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded), task.abortSet.delete(task), segment.status = COMPLETED, finishedTask(request, task.blockedBoundary, segment);
          } catch (x) {
            if (resetHooksState(), typeof x == "object" && x !== null && typeof x.then == "function") {
              var ping = task.ping;
              x.then(ping, ping);
            } else
              task.abortSet.delete(task), segment.status = ERRORED, erroredTask(request, task.blockedBoundary, segment, x);
          } finally {
            currentTaskInDEV = prevTaskInDEV;
          }
        }
      }
      function performWork(request) {
        if (request.status !== CLOSED) {
          var prevContext = getActiveContext(), prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = Dispatcher;
          var prevGetCurrentStackImpl;
          prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack, ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
          var prevResponseState = currentResponseState;
          setCurrentResponseState(request.responseState);
          try {
            var pingedTasks = request.pingedTasks, i;
            for (i = 0; i < pingedTasks.length; i++) {
              var task = pingedTasks[i];
              retryTask(request, task);
            }
            pingedTasks.splice(0, i), request.destination !== null && flushCompletedQueues(request, request.destination);
          } catch (error2) {
            logRecoverableError(request, error2), fatalError(request, error2);
          } finally {
            setCurrentResponseState(prevResponseState), ReactCurrentDispatcher$1.current = prevDispatcher, ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl, prevDispatcher === Dispatcher && switchContext(prevContext);
          }
        }
      }
      function flushSubtree(request, destination, segment) {
        switch (segment.parentFlushed = !0, segment.status) {
          case PENDING: {
            var segmentID = segment.id = request.nextSegmentId++;
            return segment.lastPushedText = !1, segment.textEmbedded = !1, writePlaceholder(destination, request.responseState, segmentID);
          }
          case COMPLETED: {
            segment.status = FLUSHED;
            for (var r = !0, chunks = segment.chunks, chunkIdx = 0, children = segment.children, childIdx = 0; childIdx < children.length; childIdx++) {
              for (var nextChild = children[childIdx]; chunkIdx < nextChild.index; chunkIdx++)
                writeChunk(destination, chunks[chunkIdx]);
              r = flushSegment(request, destination, nextChild);
            }
            for (; chunkIdx < chunks.length - 1; chunkIdx++)
              writeChunk(destination, chunks[chunkIdx]);
            return chunkIdx < chunks.length && (r = writeChunkAndReturn(destination, chunks[chunkIdx])), r;
          }
          default:
            throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
        }
      }
      function flushSegment(request, destination, segment) {
        var boundary = segment.boundary;
        if (boundary === null)
          return flushSubtree(request, destination, segment);
        if (boundary.parentFlushed = !0, boundary.forceClientRender)
          return writeStartClientRenderedSuspenseBoundary(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack), flushSubtree(request, destination, segment), writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
        if (boundary.pendingTasks > 0) {
          boundary.rootSegmentID = request.nextSegmentId++, boundary.completedSegments.length > 0 && request.partialBoundaries.push(boundary);
          var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
          return writeStartPendingSuspenseBoundary(destination, request.responseState, id), flushSubtree(request, destination, segment), writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else {
          if (boundary.byteSize > request.progressiveChunkSize)
            return boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id), flushSubtree(request, destination, segment), writeEndPendingSuspenseBoundary(destination, request.responseState);
          writeStartCompletedSuspenseBoundary(destination, request.responseState);
          var completedSegments = boundary.completedSegments;
          if (completedSegments.length !== 1)
            throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
          var contentSegment = completedSegments[0];
          return flushSegment(request, destination, contentSegment), writeEndCompletedSuspenseBoundary(destination, request.responseState);
        }
      }
      function flushClientRenderedBoundary(request, destination, boundary) {
        return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
      }
      function flushSegmentContainer(request, destination, segment) {
        return writeStartSegment(destination, request.responseState, segment.formatContext, segment.id), flushSegment(request, destination, segment), writeEndSegment(destination, segment.formatContext);
      }
      function flushCompletedBoundary(request, destination, boundary) {
        for (var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++) {
          var segment = completedSegments[i];
          flushPartiallyCompletedSegment(request, destination, boundary, segment);
        }
        return completedSegments.length = 0, writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
      }
      function flushPartialBoundary(request, destination, boundary) {
        for (var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++) {
          var segment = completedSegments[i];
          if (!flushPartiallyCompletedSegment(request, destination, boundary, segment))
            return i++, completedSegments.splice(0, i), !1;
        }
        return completedSegments.splice(0, i), !0;
      }
      function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED)
          return !0;
        var segmentID = segment.id;
        if (segmentID === -1) {
          var rootSegmentID = segment.id = boundary.rootSegmentID;
          if (rootSegmentID === -1)
            throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
          return flushSegmentContainer(request, destination, segment);
        } else
          return flushSegmentContainer(request, destination, segment), writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
      }
      function flushCompletedQueues(request, destination) {
        beginWriting();
        try {
          var completedRootSegment = request.completedRootSegment;
          completedRootSegment !== null && request.pendingRootTasks === 0 && (flushSegment(request, destination, completedRootSegment), request.completedRootSegment = null, writeCompletedRoot(destination, request.responseState));
          var clientRenderedBoundaries = request.clientRenderedBoundaries, i;
          for (i = 0; i < clientRenderedBoundaries.length; i++) {
            var boundary = clientRenderedBoundaries[i];
            if (!flushClientRenderedBoundary(request, destination, boundary)) {
              request.destination = null, i++, clientRenderedBoundaries.splice(0, i);
              return;
            }
          }
          clientRenderedBoundaries.splice(0, i);
          var completedBoundaries = request.completedBoundaries;
          for (i = 0; i < completedBoundaries.length; i++) {
            var _boundary = completedBoundaries[i];
            if (!flushCompletedBoundary(request, destination, _boundary)) {
              request.destination = null, i++, completedBoundaries.splice(0, i);
              return;
            }
          }
          completedBoundaries.splice(0, i), completeWriting(destination), beginWriting(destination);
          var partialBoundaries = request.partialBoundaries;
          for (i = 0; i < partialBoundaries.length; i++) {
            var _boundary2 = partialBoundaries[i];
            if (!flushPartialBoundary(request, destination, _boundary2)) {
              request.destination = null, i++, partialBoundaries.splice(0, i);
              return;
            }
          }
          partialBoundaries.splice(0, i);
          var largeBoundaries = request.completedBoundaries;
          for (i = 0; i < largeBoundaries.length; i++) {
            var _boundary3 = largeBoundaries[i];
            if (!flushCompletedBoundary(request, destination, _boundary3)) {
              request.destination = null, i++, largeBoundaries.splice(0, i);
              return;
            }
          }
          largeBoundaries.splice(0, i);
        } finally {
          completeWriting(destination), request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0 && (request.abortableTasks.size !== 0 && error("There was still abortable task at the root when we closed. This is a bug in React."), close(destination));
        }
      }
      function startWork(request) {
        scheduleWork(function() {
          return performWork(request);
        });
      }
      function startFlowing(request, destination) {
        if (request.status === CLOSING) {
          request.status = CLOSED, closeWithError(destination, request.fatalError);
          return;
        }
        if (request.status !== CLOSED && request.destination === null) {
          request.destination = destination;
          try {
            flushCompletedQueues(request, destination);
          } catch (error2) {
            logRecoverableError(request, error2), fatalError(request, error2);
          }
        }
      }
      function abort(request, reason) {
        try {
          var abortableTasks = request.abortableTasks;
          abortableTasks.forEach(function(task) {
            return abortTask(task, request, reason);
          }), abortableTasks.clear(), request.destination !== null && flushCompletedQueues(request, request.destination);
        } catch (error2) {
          logRecoverableError(request, error2), fatalError(request, error2);
        }
      }
      function renderToReadableStream(children, options) {
        return new Promise(function(resolve, reject) {
          var onFatalError, onAllReady, allReady = new Promise(function(res, rej) {
            onAllReady = res, onFatalError = rej;
          });
          function onShellReady() {
            var stream = new ReadableStream(
              {
                type: "bytes",
                pull: function(controller) {
                  startFlowing(request, controller);
                },
                cancel: function(reason) {
                  abort(request);
                }
              },
              {
                highWaterMark: 0
              }
            );
            stream.allReady = allReady, resolve(stream);
          }
          function onShellError(error2) {
            allReady.catch(function() {
            }), reject(error2);
          }
          var request = createRequest(children, createResponseState(options ? options.identifierPrefix : void 0, options ? options.nonce : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, onAllReady, onShellReady, onShellError, onFatalError);
          if (options && options.signal) {
            var signal = options.signal, listener = function() {
              abort(request, signal.reason), signal.removeEventListener("abort", listener);
            };
            signal.addEventListener("abort", listener);
          }
          startWork(request);
        });
      }
      exports.renderToReadableStream = renderToReadableStream, exports.version = ReactVersion;
    })();
  }
});

// node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "node_modules/react-dom/server.browser.js"(exports) {
    "use strict";
    var l, s;
    l = require_react_dom_server_legacy_browser_development(), s = require_react_dom_server_browser_development();
    exports.version = l.version;
    exports.renderToString = l.renderToString;
    exports.renderToStaticMarkup = l.renderToStaticMarkup;
    exports.renderToNodeStream = l.renderToNodeStream;
    exports.renderToStaticNodeStream = l.renderToStaticNodeStream;
    exports.renderToReadableStream = s.renderToReadableStream;
  }
});

// node_modules/@babel/runtime/helpers/esm/extends.js
var init_extends = __esm({
  "node_modules/@babel/runtime/helpers/esm/extends.js"() {
  }
});

// node_modules/history/index.js
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  return search && search !== "?" && (pathname += search.charAt(0) === "?" ? search : "?" + search), hash && hash !== "#" && (pathname += hash.charAt(0) === "#" ? hash : "#" + hash), pathname;
}
function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    hashIndex >= 0 && (parsedPath.hash = path.substr(hashIndex), path = path.substr(0, hashIndex));
    var searchIndex = path.indexOf("?");
    searchIndex >= 0 && (parsedPath.search = path.substr(searchIndex), path = path.substr(0, searchIndex)), path && (parsedPath.pathname = path);
  }
  return parsedPath;
}
var Action, init_history = __esm({
  "node_modules/history/index.js"() {
    init_extends();
    (function(Action2) {
      Action2.Pop = "POP", Action2.Push = "PUSH", Action2.Replace = "REPLACE";
    })(Action || (Action = {}));
  }
});

// node_modules/react-router/index.js
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    typeof console < "u" && console.warn(message);
    try {
      throw new Error(message);
    } catch {
    }
  }
}
function warningOnce(key, cond, message) {
  !cond && !alreadyWarned[key] && (alreadyWarned[key] = !0, warning(!1, message));
}
function matchRoutes(routes2, locationArg, basename) {
  basename === void 0 && (basename = "/");
  let location = typeof locationArg == "string" ? parsePath(locationArg) : locationArg, pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null)
    return null;
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i)
    matches = matchRouteBranch(branches[i], pathname);
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  return branches === void 0 && (branches = []), parentsMeta === void 0 && (parentsMeta = []), parentPath === void 0 && (parentPath = ""), routes2.forEach((route, index) => {
    let meta7 = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === !0,
      childrenIndex: index,
      route
    };
    meta7.relativePath.startsWith("/") && (meta7.relativePath.startsWith(parentPath) || invariant(!1, 'Absolute route path "' + meta7.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), meta7.relativePath = meta7.relativePath.slice(parentPath.length));
    let path = joinPaths([parentPath, meta7.relativePath]), routesMeta = parentsMeta.concat(meta7);
    route.children && route.children.length > 0 && (route.index === !0 && invariant(!1, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')), flattenRoutes(route.children, branches, routesMeta, path)), !(route.path == null && !route.index) && branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  }), branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta7) => meta7.childrenIndex), b.routesMeta.map((meta7) => meta7.childrenIndex)));
}
function computeScore(path, index) {
  let segments = path.split("/"), initialScore = segments.length;
  return segments.some(isSplat) && (initialScore += splatPenalty), index && (initialScore += indexRouteValue), segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  return a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]) ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch, matchedParams = {}, matchedPathname = "/", matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta7 = routesMeta[i], end = i === routesMeta.length - 1, remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/", match = matchPath({
      path: meta7.relativePath,
      caseSensitive: meta7.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta7.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    }), match.pathnameBase !== "/" && (matchedPathname = joinPaths([matchedPathname, match.pathnameBase]));
  }
  return matches;
}
function matchPath(pattern, pathname) {
  typeof pattern == "string" && (pattern = {
    path: pattern,
    caseSensitive: !1,
    end: !0
  });
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end), match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0], pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1"), captureGroups = match.slice(1);
  return {
    params: paramNames.reduce((memo, paramName, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      return memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName), memo;
    }, {}),
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  caseSensitive === void 0 && (caseSensitive = !1), end === void 0 && (end = !0), warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [], regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => (paramNames.push(paramName), "([^\\/]+)"));
  return path.endsWith("*") ? (paramNames.push("*"), regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)", [new RegExp(regexpSource, caseSensitive ? void 0 : "i"), paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return warning(!1, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")), value;
  }
}
function resolvePath(to, fromPathname) {
  fromPathname === void 0 && (fromPathname = "/");
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to == "string" ? parsePath(to) : to;
  return {
    pathname: toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  return relativePath.split("/").forEach((segment) => {
    segment === ".." ? segments.length > 1 && segments.pop() : segment !== "." && segments.push(segment);
  }), segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg == "string" ? parsePath(toArg) : toArg, toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname, from;
  if (toPathname == null)
    from = locationPathname;
  else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      for (; toSegments[0] === ".."; )
        toSegments.shift(), routePathnameIndex -= 1;
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  return toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/") && (path.pathname += "/"), path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to == "string" ? parsePath(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase()))
    return null;
  let nextChar = pathname.charAt(basename.length);
  return nextChar && nextChar !== "/" ? null : pathname.slice(basename.length) || "/";
}
function useHref(to) {
  useInRouterContext() || invariant(
    !1,
    "useHref() may be used only in the context of a <Router> component."
  );
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext), {
    hash,
    pathname,
    search
  } = useResolvedPath(to), joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to), endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return (0, import_react.useContext)(LocationContext) != null;
}
function useLocation() {
  return useInRouterContext() || invariant(
    !1,
    "useLocation() may be used only in the context of a <Router> component."
  ), (0, import_react.useContext)(LocationContext).location;
}
function useNavigate() {
  useInRouterContext() || invariant(
    !1,
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext), {
    matches
  } = (0, import_react.useContext)(RouteContext), {
    pathname: locationPathname
  } = useLocation(), routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase)), activeRef = (0, import_react.useRef)(!1);
  return (0, import_react.useEffect)(() => {
    activeRef.current = !0;
  }), (0, import_react.useCallback)(function(to, options) {
    if (options === void 0 && (options = {}), warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !activeRef.current)
      return;
    if (typeof to == "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    basename !== "/" && (path.pathname = joinPaths([basename, path.pathname])), (options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
}
function useOutlet(context) {
  let outlet = (0, import_react.useContext)(RouteContext).outlet;
  return outlet && /* @__PURE__ */ (0, import_react.createElement)(OutletContext.Provider, {
    value: context
  }, outlet);
}
function useResolvedPath(to) {
  let {
    matches
  } = (0, import_react.useContext)(RouteContext), {
    pathname: locationPathname
  } = useLocation(), routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return (0, import_react.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function useRoutes(routes2, locationArg) {
  useInRouterContext() || invariant(
    !1,
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let {
    matches: parentMatches
  } = (0, import_react.useContext)(RouteContext), routeMatch = parentMatches[parentMatches.length - 1], parentParams = routeMatch ? routeMatch.params : {}, parentPathname = routeMatch ? routeMatch.pathname : "/", parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/", parentRoute = routeMatch && routeMatch.route;
  {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation(), location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg == "string" ? parsePath(locationArg) : locationArg;
    parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase)) || invariant(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')), location = parsedLocationArg;
  } else
    location = locationFromContext;
  let pathname = location.pathname || "/", remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/", matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  return warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" '), warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'), _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  return parentMatches === void 0 && (parentMatches = []), matches == null ? null : matches.reduceRight((outlet, match, index) => /* @__PURE__ */ (0, import_react.createElement)(RouteContext.Provider, {
    children: match.route.element !== void 0 ? match.route.element : outlet,
    value: {
      outlet,
      matches: parentMatches.concat(matches.slice(0, index + 1))
    }
  }), null);
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = !1
  } = _ref3;
  useInRouterContext() && invariant(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let basename = normalizePathname(basenameProp), navigationContext = (0, import_react.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  typeof locationProp == "string" && (locationProp = parsePath(locationProp));
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp, location = (0, import_react.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);
    return trailingPathname == null ? null : {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  return warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), location == null ? null : /* @__PURE__ */ (0, import_react.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ (0, import_react.createElement)(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
var import_react, NavigationContext, LocationContext, RouteContext, alreadyWarned, paramRe, dynamicSegmentValue, indexRouteValue, emptySegmentValue, staticSegmentValue, splatPenalty, isSplat, joinPaths, normalizePathname, normalizeSearch, normalizeHash, OutletContext, init_react_router = __esm({
  "node_modules/react-router/index.js"() {
    init_history();
    init_history();
    import_react = __toESM(require_react());
    NavigationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    NavigationContext.displayName = "Navigation";
    LocationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    LocationContext.displayName = "Location";
    RouteContext = /* @__PURE__ */ (0, import_react.createContext)({
      outlet: null,
      matches: []
    });
    RouteContext.displayName = "Route";
    alreadyWarned = {};
    paramRe = /^:\w+$/, dynamicSegmentValue = 3, indexRouteValue = 2, emptySegmentValue = 1, staticSegmentValue = 10, splatPenalty = -2, isSplat = (s) => s === "*";
    joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/"), normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/"), normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search, normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    OutletContext = /* @__PURE__ */ (0, import_react.createContext)(null);
  }
});

// node_modules/react-router-dom/index.js
function _extends3() {
  return _extends3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends3.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
function warning2(cond, message) {
  if (!cond) {
    typeof console < "u" && console.warn(message);
    try {
      throw new Error(message);
    } catch {
    }
  }
}
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3, [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location
  });
  return (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]), /* @__PURE__ */ (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp, navigate = useNavigate(), location = useLocation(), path = useResolvedPath(to);
  return (0, import_react2.useCallback)((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
function useSearchParams(defaultInit) {
  warning2(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
  let defaultSearchParamsRef = (0, import_react2.useRef)(createSearchParams(defaultInit)), location = useLocation(), searchParams = (0, import_react2.useMemo)(() => {
    let searchParams2 = createSearchParams(location.search);
    for (let key of defaultSearchParamsRef.current.keys())
      searchParams2.has(key) || defaultSearchParamsRef.current.getAll(key).forEach((value) => {
        searchParams2.append(key, value);
      });
    return searchParams2;
  }, [location.search]), navigate = useNavigate(), setSearchParams = (0, import_react2.useCallback)((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}
function createSearchParams(init) {
  return init === void 0 && (init = ""), new URLSearchParams(typeof init == "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
  }, []));
}
var import_react2, _excluded, _excluded2, Link, NavLink, init_react_router_dom = __esm({
  "node_modules/react-router-dom/index.js"() {
    import_react2 = __toESM(require_react());
    init_react_router();
    init_react_router();
    _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
    HistoryRouter.displayName = "unstable_HistoryRouter";
    Link = /* @__PURE__ */ (0, import_react2.forwardRef)(function(_ref4, ref) {
      let {
        onClick,
        reloadDocument,
        replace = !1,
        state,
        target,
        to
      } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded), href = useHref(to), internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target
      });
      function handleClick(event) {
        onClick && onClick(event), !event.defaultPrevented && !reloadDocument && internalOnClick(event);
      }
      return /* @__PURE__ */ (0, import_react2.createElement)("a", _extends3({}, rest, {
        href,
        onClick: handleClick,
        ref,
        target
      }));
    });
    Link.displayName = "Link";
    NavLink = /* @__PURE__ */ (0, import_react2.forwardRef)(function(_ref5, ref) {
      let {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = !1,
        className: classNameProp = "",
        end = !1,
        style: styleProp,
        to,
        children
      } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2), location = useLocation(), path = useResolvedPath(to), locationPathname = location.pathname, toPathname = path.pathname;
      caseSensitive || (locationPathname = locationPathname.toLowerCase(), toPathname = toPathname.toLowerCase());
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/", ariaCurrent = isActive ? ariaCurrentProp : void 0, className;
      typeof classNameProp == "function" ? className = classNameProp({
        isActive
      }) : className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
      let style = typeof styleProp == "function" ? styleProp({
        isActive
      }) : styleProp;
      return /* @__PURE__ */ (0, import_react2.createElement)(Link, _extends3({}, rest, {
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to
      }), typeof children == "function" ? children({
        isActive
      }) : children);
    });
    NavLink.displayName = "NavLink";
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-dev-runtime.development.js"(exports) {
    "use strict";
    (function() {
      "use strict";
      var React6 = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable != "object")
          return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator == "function" ? maybeIterator : null;
      }
      var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
            args[_key2 - 1] = arguments[_key2];
          printWarning("error", format, args);
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame, stack = ReactDebugCurrentFrame2.getStackAddendum();
          stack !== "" && (format += "%s", args = args.concat([stack]));
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format), Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = !1, enableCacheElement = !1, enableTransitionTracing = !1, enableLegacyHidden = !1, enableDebugTracing = !1, REACT_MODULE_REFERENCE;
      REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      function isValidElementType(type) {
        return !!(typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0));
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName)
          return displayName;
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null)
          return null;
        if (typeof type.tag == "number" && error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof type == "function")
          return type.displayName || type.name || null;
        if (typeof type == "string")
          return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              return outerName !== null ? outerName : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var assign = Object.assign, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = !0;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log, prevInfo = console.info, prevWarn = console.warn, prevError = console.error, prevGroup = console.group, prevGroupCollapsed = console.groupCollapsed, prevGroupEnd = console.groupEnd;
            var props = {
              configurable: !0,
              enumerable: !0,
              value: disabledLog,
              writable: !0
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          if (disabledDepth--, disabledDepth === 0) {
            var props = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          disabledDepth < 0 && error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher, prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          return `
` + prefix + name;
        }
      }
      var reentry = !1, componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap == "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0)
            return frame;
        }
        var control;
        reentry = !0;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current, ReactCurrentDispatcher.current = null, disableLogs();
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            if (Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack == "string") {
            for (var sampleLines = sample.stack.split(`
`), controlLines = control.stack.split(`
`), s = sampleLines.length - 1, c = controlLines.length - 1; s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]; )
              c--;
            for (; s >= 1 && c >= 0; s--, c--)
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1)
                  do
                    if (s--, c--, c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = `
` + sampleLines[s].replace(" at new ", " at ");
                      return fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName)), typeof fn == "function" && componentFrameCache.set(fn, _frame), _frame;
                    }
                  while (s >= 1 && c >= 0);
                break;
              }
          }
        } finally {
          reentry = !1, ReactCurrentDispatcher.current = previousDispatcher, reenableLogs(), Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "", syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        return typeof fn == "function" && componentFrameCache.set(fn, syntheticFrame), syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, !1);
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null)
          return "";
        if (typeof type == "function")
          return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type == "string")
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch {
              }
            }
          }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty, loggedTypeFailures = {}, ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame.setExtraStackFrame(null);
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs)
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] != "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw err.name = "Invariant Violation", err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              error$1 && !(error$1 instanceof Error) && (setCurrentlyValidatingElement(element), error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1), setCurrentlyValidatingElement(null)), error$1 instanceof Error && !(error$1.message in loggedTypeFailures) && (loggedTypeFailures[error$1.message] = !0, setCurrentlyValidatingElement(element), error("Failed %s type: %s", location, error$1.message), setCurrentlyValidatingElement(null));
            }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol == "function" && Symbol.toStringTag, type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        try {
          return testStringCoercion(value), !1;
        } catch {
          return !0;
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value))
          return error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value)), testStringCoercion(value);
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner, RESERVED_PROPS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
      didWarnAboutStringRefs = {};
      function hasValidRef(config2) {
        if (hasOwnProperty.call(config2, "ref")) {
          var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config2.ref !== void 0;
      }
      function hasValidKey(config2) {
        if (hasOwnProperty.call(config2, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config2.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config2, self) {
        if (typeof config2.ref == "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
          didWarnAboutStringRefs[componentName] || (error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config2.ref), didWarnAboutStringRefs[componentName] = !0);
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
          };
          warnAboutAccessingKey.isReactWarning = !0, Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            specialPropRefWarningShown || (specialPropRefWarningShown = !0, error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
          };
          warnAboutAccessingRef.isReactWarning = !0, Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: !0
          });
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner
        };
        return element._store = {}, Object.defineProperty(element._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(element, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: self
        }), Object.defineProperty(element, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: source
        }), Object.freeze && (Object.freeze(element.props), Object.freeze(element)), element;
      };
      function jsxDEV54(type, config2, maybeKey, source, self) {
        {
          var propName, props = {}, key = null, ref = null;
          maybeKey !== void 0 && (checkKeyStringCoercion(maybeKey), key = "" + maybeKey), hasValidKey(config2) && (checkKeyStringCoercion(config2.key), key = "" + config2.key), hasValidRef(config2) && (ref = config2.ref, warnIfStringRefCannotBeAutoConverted(config2, self));
          for (propName in config2)
            hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (props[propName] = config2[propName]);
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps)
              props[propName] === void 0 && (props[propName] = defaultProps[propName]);
          }
          if (key || ref) {
            var displayName = typeof type == "function" ? type.displayName || type.name || "Unknown" : type;
            key && defineKeyPropWarningGetter(props, displayName), ref && defineRefPropWarningGetter(props, displayName);
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner, ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
      }
      var propTypesMisspellWarningShown;
      propTypesMisspellWarningShown = !1;
      function isValidElement2(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name)
              return `

Check the render method of \`` + name + "`.";
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, ""), lineNumber = source.lineNumber;
            return `

Check your code at ` + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType == "string" ? parentType : parentType.displayName || parentType.name;
            parentName && (info = `

Check the top-level render call using <` + parentName + ">.");
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null)
            return;
          element._store.validated = !0;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo])
            return;
          ownerHasKeyUseWarning[currentComponentErrorInfo] = !0;
          var childOwner = "";
          element && element._owner && element._owner !== ReactCurrentOwner$1.current && (childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + "."), setCurrentlyValidatingElement$1(element), error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner), setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node != "object")
            return;
          if (isArray(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement2(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement2(node))
            node._store && (node._store.validated = !0);
          else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn == "function" && iteratorFn !== node.entries)
              for (var iterator = iteratorFn.call(node), step; !(step = iterator.next()).done; )
                isValidElement2(step.value) && validateExplicitKey(step.value, parentType);
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type == null || typeof type == "string")
            return;
          var propTypes;
          if (typeof type == "function")
            propTypes = type.propTypes;
          else if (typeof type == "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE))
            propTypes = type.propTypes;
          else
            return;
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = !0;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          typeof type.getDefaultProps == "function" && !type.getDefaultProps.isReactClassApproved && error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function validateFragmentProps(fragment) {
        {
          for (var keys = Object.keys(fragment.props), i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment), error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key), setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          fragment.ref !== null && (setCurrentlyValidatingElement$1(fragment), error("Invalid attribute `ref` supplied to `React.Fragment`."), setCurrentlyValidatingElement$1(null));
        }
      }
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            (type === void 0 || typeof type == "object" && type !== null && Object.keys(type).length === 0) && (info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sourceInfo = getSourceInfoErrorAddendum(source);
            sourceInfo ? info += sourceInfo : info += getDeclarationErrorAddendum();
            var typeString;
            type === null ? typeString = "null" : isArray(type) ? typeString = "array" : type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", info = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type, error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV54(type, props, key, source, self);
          if (element == null)
            return element;
          if (validType) {
            var children = props.children;
            if (children !== void 0)
              if (isStaticChildren)
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++)
                    validateChildKeys(children[i], type);
                  Object.freeze && Object.freeze(children);
                } else
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                validateChildKeys(children, type);
          }
          return type === REACT_FRAGMENT_TYPE ? validateFragmentProps(element) : validatePropTypes(element), element;
        }
      }
      var jsxDEV$1 = jsxWithValidation;
      exports.Fragment = REACT_FRAGMENT_TYPE, exports.jsxDEV = jsxDEV$1;
    })();
  }
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS({
  "node_modules/react/jsx-dev-runtime.js"(exports, module) {
    "use strict";
    module.exports = require_react_jsx_dev_runtime_development();
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse2;
    exports.serialize = serialize2;
    var decode = decodeURIComponent, encode = encodeURIComponent, fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str != "string")
        throw new TypeError("argument str must be a string");
      for (var obj = {}, opt = options || {}, pairs = str.split(";"), dec = opt.decode || decode, i = 0; i < pairs.length; i++) {
        var pair = pairs[i], index = pair.indexOf("=");
        if (!(index < 0)) {
          var key = pair.substring(0, index).trim();
          if (obj[key] == null) {
            var val = pair.substring(index + 1, pair.length).trim();
            val[0] === '"' && (val = val.slice(1, -1)), obj[key] = tryDecode(val, dec);
          }
        }
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {}, enc = opt.encode || encode;
      if (typeof enc != "function")
        throw new TypeError("option encode is invalid");
      if (!fieldContentRegExp.test(name))
        throw new TypeError("argument name is invalid");
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value))
        throw new TypeError("argument val is invalid");
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge))
          throw new TypeError("option maxAge is invalid");
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain))
          throw new TypeError("option domain is invalid");
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path))
          throw new TypeError("option path is invalid");
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString != "function")
          throw new TypeError("option expires is invalid");
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly && (str += "; HttpOnly"), opt.secure && (str += "; Secure"), opt.sameSite) {
        var sameSite = typeof opt.sameSite == "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case !0:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch {
        return str;
      }
    }
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/warnings.js
function warnOnce(condition, message) {
  !condition && !alreadyWarned2[message] && (alreadyWarned2[message] = !0, console.warn(message));
}
var alreadyWarned2, init_warnings = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/warnings.js"() {
    alreadyWarned2 = {};
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/cookies.js
async function encodeCookieValue(sign, value, secrets) {
  let encoded = encodeData(value);
  return secrets.length > 0 && (encoded = await sign(encoded, secrets[0])), encoded;
}
async function decodeCookieValue(unsign, value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== !1)
        return decodeData(unsignedValue);
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString(), result = "", index = 0, chr, code;
  for (; index < str.length; )
    chr = str.charAt(index++), /[\w*+\-./@]/.exec(chr) ? result += chr : (code = chr.charCodeAt(0), code < 256 ? result += "%" + hex(code, 2) : result += "%u" + hex(code, 4).toUpperCase());
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  for (; result.length < length; )
    result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString(), result = "", index = 0, chr, part;
  for (; index < str.length; ) {
    if (chr = str.charAt(index++), chr === "%") {
      if (str.charAt(index) === "u") {
        if (part = str.slice(index + 1, index + 5), /^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16)), index += 5;
          continue;
        }
      } else if (part = str.slice(index, index + 2), /^[\da-f]{2}$/i.exec(part)) {
        result += String.fromCharCode(parseInt(part, 16)), index += 2;
        continue;
      }
    }
    result += chr;
  }
  return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
  warnOnce(!expires, `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}
var import_cookie, createCookieFactory, isCookie, init_cookies = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/cookies.js"() {
    import_cookie = __toESM(require_cookie());
    init_warnings();
    createCookieFactory = ({
      sign,
      unsign
    }) => (name, cookieOptions = {}) => {
      let {
        secrets,
        ...options
      } = {
        secrets: [],
        path: "/",
        sameSite: "lax",
        ...cookieOptions
      };
      return warnOnceAboutExpiresCookie(name, options.expires), {
        get name() {
          return name;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge < "u" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader)
            return null;
          let cookies = (0, import_cookie.parse)(cookieHeader, {
            ...options,
            ...parseOptions
          });
          return name in cookies ? cookies[name] === "" ? "" : await decodeCookieValue(unsign, cookies[name], secrets) : null;
        },
        async serialize(value, serializeOptions) {
          return (0, import_cookie.serialize)(name, value === "" ? "" : await encodeCookieValue(sign, value, secrets), {
            ...options,
            ...serializeOptions
          });
        }
      };
    }, isCookie = (object) => object != null && typeof object.name == "string" && typeof object.isSigned == "boolean" && typeof object.parse == "function" && typeof object.serialize == "function";
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/utils.js
function stringToArray(s) {
  let utf8 = unescape(encodeURIComponent(s));
  return Uint8Array.from(utf8, (_, i) => utf8.charCodeAt(i));
}
function arrayToString(a) {
  let utf8 = String.fromCharCode.apply(null, a);
  return decodeURIComponent(escape(utf8));
}
function mergeArrays(...arrays) {
  let out = new Uint8Array(arrays.reduce((total, arr) => total + arr.length, 0)), offset = 0;
  for (let arr of arrays)
    out.set(arr, offset), offset += arr.length;
  return out;
}
function arraysEqual(a, b) {
  if (a.length !== b.length)
    return !1;
  for (let i = 0; i < a.length; i++)
    if (a[i] !== b[i])
      return !1;
  return !0;
}
var init_utils = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/utils.js"() {
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/search.js
function coerce(a) {
  return a instanceof Uint8Array ? (index) => a[index] : a;
}
function jsmemcmp(buf1, pos1, buf2, pos2, len) {
  let fn1 = coerce(buf1), fn2 = coerce(buf2);
  for (let i = 0; i < len; ++i)
    if (fn1(pos1 + i) !== fn2(pos2 + i))
      return !1;
  return !0;
}
function createOccurenceTable(s) {
  let table = new Array(256).fill(s.length);
  if (s.length > 1)
    for (let i = 0; i < s.length - 1; i++)
      table[s[i]] = s.length - 1 - i;
  return table;
}
var MATCH, StreamSearch, ReadableStreamSearch, EOQ, QueueableStreamSearch, init_search = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/search.js"() {
    init_utils();
    MATCH = Symbol("Match"), StreamSearch = class {
      constructor(needle) {
        this._lookbehind = new Uint8Array(), typeof needle == "string" ? this._needle = needle = stringToArray(needle) : this._needle = needle, this._lastChar = needle[needle.length - 1], this._occ = createOccurenceTable(needle);
      }
      feed(chunk) {
        let pos = 0, tokens, allTokens = [];
        for (; pos !== chunk.length; )
          [pos, ...tokens] = this._feed(chunk, pos), allTokens.push(...tokens);
        return allTokens;
      }
      end() {
        let tail = this._lookbehind;
        return this._lookbehind = new Uint8Array(), tail;
      }
      _feed(data, bufPos) {
        let tokens = [], pos = -this._lookbehind.length;
        if (pos < 0) {
          for (; pos < 0 && pos <= data.length - this._needle.length; ) {
            let ch = this._charAt(data, pos + this._needle.length - 1);
            if (ch === this._lastChar && this._memcmp(data, pos, this._needle.length - 1))
              return pos > -this._lookbehind.length && tokens.push(this._lookbehind.slice(0, this._lookbehind.length + pos)), tokens.push(MATCH), this._lookbehind = new Uint8Array(), [
                pos + this._needle.length,
                ...tokens
              ];
            pos += this._occ[ch];
          }
          if (pos < 0)
            for (; pos < 0 && !this._memcmp(data, pos, data.length - pos); )
              pos++;
          if (pos >= 0)
            tokens.push(this._lookbehind), this._lookbehind = new Uint8Array();
          else {
            let bytesToCutOff = this._lookbehind.length + pos;
            return bytesToCutOff > 0 && (tokens.push(this._lookbehind.slice(0, bytesToCutOff)), this._lookbehind = this._lookbehind.slice(bytesToCutOff)), this._lookbehind = Uint8Array.from(new Array(this._lookbehind.length + data.length), (_, i) => this._charAt(data, i - this._lookbehind.length)), [
              data.length,
              ...tokens
            ];
          }
        }
        for (pos += bufPos; pos <= data.length - this._needle.length; ) {
          let ch = data[pos + this._needle.length - 1];
          if (ch === this._lastChar && data[pos] === this._needle[0] && jsmemcmp(this._needle, 0, data, pos, this._needle.length - 1))
            return pos > bufPos && tokens.push(data.slice(bufPos, pos)), tokens.push(MATCH), [
              pos + this._needle.length,
              ...tokens
            ];
          pos += this._occ[ch];
        }
        if (pos < data.length) {
          for (; pos < data.length && (data[pos] !== this._needle[0] || !jsmemcmp(data, pos, this._needle, 0, data.length - pos)); )
            ++pos;
          pos < data.length && (this._lookbehind = data.slice(pos));
        }
        return pos > 0 && tokens.push(data.slice(bufPos, pos < data.length ? pos : data.length)), [
          data.length,
          ...tokens
        ];
      }
      _charAt(data, pos) {
        return pos < 0 ? this._lookbehind[this._lookbehind.length + pos] : data[pos];
      }
      _memcmp(data, pos, len) {
        return jsmemcmp(this._charAt.bind(this, data), pos, this._needle, 0, len);
      }
    }, ReadableStreamSearch = class {
      constructor(needle, _readableStream) {
        this._readableStream = _readableStream, this._search = new StreamSearch(needle);
      }
      async *[Symbol.asyncIterator]() {
        let reader = this._readableStream.getReader();
        try {
          for (; ; ) {
            let result = await reader.read();
            if (result.done)
              break;
            yield* this._search.feed(result.value);
          }
          let tail = this._search.end();
          tail.length && (yield tail);
        } finally {
          reader.releaseLock();
        }
      }
    }, EOQ = Symbol("End of Queue"), QueueableStreamSearch = class {
      constructor(needle) {
        this._chunksQueue = [], this._closed = !1, this._search = new StreamSearch(needle);
      }
      push(...chunks) {
        if (this._closed)
          throw new Error("cannot call push after close");
        this._chunksQueue.push(...chunks), this._notify && this._notify();
      }
      close() {
        if (this._closed)
          throw new Error("close was already called");
        this._closed = !0, this._chunksQueue.push(EOQ), this._notify && this._notify();
      }
      async *[Symbol.asyncIterator]() {
        for (; ; ) {
          let chunk;
          for (; !(chunk = this._chunksQueue.shift()); )
            await new Promise((resolve) => this._notify = resolve), this._notify = void 0;
          if (chunk === EOQ)
            break;
          yield* this._search.feed(chunk);
        }
        let tail = this._search.end();
        tail.length && (yield tail);
      }
    };
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/index.js
function parseContentDisposition(header) {
  let parts = header.split(";").map((part) => part.trim());
  if (parts.shift() !== "form-data")
    throw new Error('malformed content-disposition header: missing "form-data" in `' + JSON.stringify(parts) + "`");
  let out = {};
  for (let part of parts) {
    let kv = part.split("=", 2);
    if (kv.length !== 2)
      throw new Error("malformed content-disposition header: key-value pair not found - " + part + " in `" + header + "`");
    let [name, value] = kv;
    if (value[0] === '"' && value[value.length - 1] === '"')
      out[name] = value.slice(1, -1).replace(/\\"/g, '"');
    else if (value[0] !== '"' && value[value.length - 1] !== '"')
      out[name] = value;
    else if (value[0] === '"' && value[value.length - 1] !== '"' || value[0] !== '"' && value[value.length - 1] === '"')
      throw new Error("malformed content-disposition header: mismatched quotations in `" + header + "`");
  }
  if (!out.name)
    throw new Error("malformed content-disposition header: missing field name in `" + header + "`");
  return out;
}
function parsePartHeaders(lines) {
  let entries = [], disposition = !1, line;
  for (; typeof (line = lines.shift()) < "u"; ) {
    let colon = line.indexOf(":");
    if (colon === -1)
      throw new Error("malformed multipart-form header: missing colon");
    let header = line.slice(0, colon).trim().toLowerCase(), value = line.slice(colon + 1).trim();
    switch (header) {
      case "content-disposition":
        disposition = !0, entries.push(...Object.entries(parseContentDisposition(value)));
        break;
      case "content-type":
        entries.push([
          "contentType",
          value
        ]);
    }
  }
  if (!disposition)
    throw new Error("malformed multipart-form header: missing content-disposition");
  return Object.fromEntries(entries);
}
async function readHeaderLines(it, needle) {
  let firstChunk = !0, lastTokenWasMatch = !1, headerLines = [[]], crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    let result = await it.next();
    if (result.done)
      throw new Error("malformed multipart-form data: unexpected end of stream");
    if (firstChunk && result.value !== MATCH && arraysEqual(result.value.slice(0, 2), dash))
      return [
        void 0,
        new Uint8Array()
      ];
    let chunk;
    if (result.value !== MATCH)
      chunk = result.value;
    else if (!lastTokenWasMatch)
      chunk = needle;
    else
      throw new Error("malformed multipart-form data: unexpected boundary");
    if (!chunk.length)
      continue;
    firstChunk && (firstChunk = !1);
    let tokens = crlfSearch.feed(chunk);
    for (let [i, token] of tokens.entries()) {
      let isMatch = token === MATCH;
      if (!(!isMatch && !token.length)) {
        if (lastTokenWasMatch && isMatch)
          return tokens.push(crlfSearch.end()), [
            headerLines.filter((chunks) => chunks.length).map(mergeArrays2).map(arrayToString),
            mergeArrays(...tokens.slice(i + 1).map((token2) => token2 === MATCH ? CRLF : token2))
          ];
        (lastTokenWasMatch = isMatch) ? headerLines.push([]) : headerLines[headerLines.length - 1].push(token);
      }
    }
  }
}
async function* streamMultipart(body, boundary) {
  let needle = mergeArrays(dash, stringToArray(boundary)), it = new ReadableStreamSearch(needle, body)[Symbol.asyncIterator]();
  for (; ; ) {
    let result = await it.next();
    if (result.done)
      return;
    if (result.value === MATCH)
      break;
  }
  let crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    let feedChunk = function(chunk) {
      let chunks = [];
      for (let token of crlfSearch.feed(chunk))
        trailingCRLF && chunks.push(CRLF), (trailingCRLF = token === MATCH) || chunks.push(token);
      return mergeArrays(...chunks);
    }, [headerLines, tail] = await readHeaderLines(it, needle);
    if (!headerLines)
      return;
    async function nextToken() {
      let result = await it.next();
      if (result.done)
        throw new Error("malformed multipart-form data: unexpected end of stream");
      return result;
    }
    let trailingCRLF = !1, done = !1;
    async function nextChunk() {
      let result = await nextToken(), chunk;
      if (result.value !== MATCH)
        chunk = result.value;
      else if (!trailingCRLF)
        chunk = CRLF;
      else
        return done = !0, { value: crlfSearch.end() };
      return { value: feedChunk(chunk) };
    }
    let bufferedChunks = [{ value: feedChunk(tail) }];
    for (yield {
      ...parsePartHeaders(headerLines),
      data: {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          for (; ; ) {
            let result = bufferedChunks.shift();
            if (!result)
              break;
            if (result.value.length > 0)
              return result;
          }
          for (; ; ) {
            if (done)
              return {
                done,
                value: void 0
              };
            let result = await nextChunk();
            if (result.value.length > 0)
              return result;
          }
        }
      }
    }; !done; )
      bufferedChunks.push(await nextChunk());
  }
}
var mergeArrays2, dash, CRLF, init_src = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/index.js"() {
    init_search();
    init_utils();
    mergeArrays2 = Function.prototype.apply.bind(mergeArrays, void 0), dash = stringToArray("--"), CRLF = stringToArray(`\r
`);
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/formData.js
function composeUploadHandlers(...handlers) {
  return async (part) => {
    for (let handler of handlers) {
      let value = await handler(part);
      if (typeof value < "u" && value !== null)
        return value;
    }
  };
}
async function parseMultipartFormData(request, uploadHandler) {
  let contentType = request.headers.get("Content-Type") || "", [type, boundary] = contentType.split(/\s*;\s*boundary=/);
  if (!request.body || !boundary || type !== "multipart/form-data")
    throw new TypeError("Could not parse content as FormData.");
  let formData = new FormData(), parts = streamMultipart(request.body, boundary);
  for await (let part of parts) {
    if (part.done)
      break;
    typeof part.filename == "string" && (part.filename = part.filename.split(/[/\\]/).pop());
    let value = await uploadHandler(part);
    typeof value < "u" && value !== null && formData.append(part.name, value);
  }
  return formData;
}
var init_formData = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/formData.js"() {
    init_src();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/responses.js
function isResponse(value) {
  return value != null && typeof value.status == "number" && typeof value.statusText == "string" && typeof value.headers == "object" && typeof value.body < "u";
}
function isRedirectResponse2(response) {
  return redirectStatusCodes.has(response.status);
}
function isCatchResponse2(response) {
  return response.headers.get("X-Remix-Catch") != null;
}
var json, redirect, redirectStatusCodes, init_responses = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/responses.js"() {
    json = (data, init = {}) => {
      let responseInit = typeof init == "number" ? {
        status: init
      } : init, headers = new Headers(responseInit.headers);
      return headers.has("Content-Type") || headers.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(data), {
        ...responseInit,
        headers
      });
    }, redirect = (url, init = 302) => {
      let responseInit = init;
      typeof responseInit == "number" ? responseInit = {
        status: responseInit
      } : typeof responseInit.status > "u" && (responseInit.status = 302);
      let headers = new Headers(responseInit.headers);
      return headers.set("Location", url), new Response(null, {
        ...responseInit,
        headers
      });
    };
    redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/data.js
async function callRouteAction({
  loadContext,
  match,
  request
}) {
  let action2 = match.route.module.action;
  if (!action2) {
    let response = new Response(null, {
      status: 405
    });
    return response.headers.set("X-Remix-Catch", "yes"), response;
  }
  let result;
  try {
    result = await action2({
      request: stripDataParam(stripIndexParam(request)),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error))
      throw error;
    isRedirectResponse2(error) || error.headers.set("X-Remix-Catch", "yes"), result = error;
  }
  if (result === void 0)
    throw new Error(`You defined an action for route "${match.route.id}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  return isResponse(result) ? result : json(result);
}
async function callRouteLoader({
  loadContext,
  match,
  request
}) {
  let loader10 = match.route.module.loader;
  if (!loader10)
    throw new Error(`You made a ${request.method} request to ${request.url} but did not provide a default component or \`loader\` for route "${match.route.id}", so there is no way to handle the request.`);
  let result;
  try {
    result = await loader10({
      request: stripDataParam(stripIndexParam(request)),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error))
      throw error;
    isRedirectResponse2(error) || error.headers.set("X-Remix-Catch", "yes"), result = error;
  }
  if (result === void 0)
    throw new Error(`You defined a loader for route "${match.route.id}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  return isResponse(result) ? result : json(result);
}
function stripIndexParam(request) {
  let url = new URL(request.url), indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues)
    indexValue && indexValuesToKeep.push(indexValue);
  for (let toKeep of indexValuesToKeep)
    url.searchParams.append("index", toKeep);
  return new Request(url.href, request);
}
function stripDataParam(request) {
  let url = new URL(request.url);
  return url.searchParams.delete("_data"), new Request(url.href, request);
}
function extractData2(response) {
  let contentType = response.headers.get("Content-Type");
  return contentType && /\bapplication\/json\b/.test(contentType) ? response.json() : response.text();
}
var init_data = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/data.js"() {
    init_responses();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/entry.js
function createEntryMatches(matches, routes2) {
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: routes2[match.route.id]
  }));
}
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo, routeId) => (memo[routeId] = manifest[routeId].module, memo), {});
}
var init_entry = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/entry.js"() {
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/errors.js
async function serializeError(error) {
  return {
    message: error.message,
    stack: error.stack
  };
}
var init_errors = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/errors.js"() {
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: !0,
      map: !1,
      silent: !1
    };
    function isNonEmptyString(str) {
      return typeof str == "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString), nameValue = parts.shift().split("="), name = nameValue.shift(), value = nameValue.join("=");
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      return parts.forEach(function(part) {
        var sides = part.split("="), key = sides.shift().trimLeft().toLowerCase(), value2 = sides.join("=");
        key === "expires" ? cookie.expires = new Date(value2) : key === "max-age" ? cookie.maxAge = parseInt(value2, 10) : key === "secure" ? cookie.secure = !0 : key === "httponly" ? cookie.httpOnly = !0 : key === "samesite" ? cookie.sameSite = value2 : cookie[key] = value2;
      }), cookie;
    }
    function parse2(input, options) {
      if (options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions, !input)
        return options.map ? {} : [];
      if (input.headers && input.headers["set-cookie"])
        input = input.headers["set-cookie"];
      else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key) {
          return key.toLowerCase() === "set-cookie";
        })];
        !sch && input.headers.cookie && !options.silent && console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        ), input = sch;
      }
      if (Array.isArray(input) || (input = [input]), options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions, options.map) {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          return cookies2[cookie.name] = cookie, cookies2;
        }, cookies);
      } else
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString))
        return cookiesString;
      if (typeof cookiesString != "string")
        return [];
      var cookiesStrings = [], pos = 0, start, ch, lastComma, nextStart, cookiesSeparatorFound;
      function skipWhitespace() {
        for (; pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos)); )
          pos += 1;
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        return ch = cookiesString.charAt(pos), ch !== "=" && ch !== ";" && ch !== ",";
      }
      for (; pos < cookiesString.length; ) {
        for (start = pos, cookiesSeparatorFound = !1; skipWhitespace(); )
          if (ch = cookiesString.charAt(pos), ch === ",") {
            for (lastComma = pos, pos += 1, skipWhitespace(), nextStart = pos; pos < cookiesString.length && notSpecialChar(); )
              pos += 1;
            pos < cookiesString.length && cookiesString.charAt(pos) === "=" ? (cookiesSeparatorFound = !0, pos = nextStart, cookiesStrings.push(cookiesString.substring(start, lastComma)), start = pos) : pos = lastComma + 1;
          } else
            pos += 1;
        (!cookiesSeparatorFound || pos >= cookiesString.length) && cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/headers.js
function getDocumentHeaders(build, matches, routeLoaderResponses, actionResponse) {
  return matches.reduce((parentHeaders, match, index) => {
    let routeModule = build.routes[match.route.id].module, routeLoaderResponse = routeLoaderResponses[match.route.id], loaderHeaders = routeLoaderResponse ? routeLoaderResponse.headers : new Headers(), actionHeaders = actionResponse ? actionResponse.headers : new Headers(), headers = new Headers(routeModule.headers ? typeof routeModule.headers == "function" ? routeModule.headers({
      loaderHeaders,
      parentHeaders,
      actionHeaders
    }) : routeModule.headers : void 0);
    return prependCookies(actionHeaders, headers), prependCookies(loaderHeaders, headers), prependCookies(parentHeaders, headers), headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  parentSetCookieString && (0, import_set_cookie_parser.splitCookiesString)(parentSetCookieString).forEach((cookie) => {
    childHeaders.append("Set-Cookie", cookie);
  });
}
var import_set_cookie_parser, init_headers = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/headers.js"() {
    import_set_cookie_parser = __toESM(require_set_cookie());
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/mode.js
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}
var ServerMode, init_mode = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/mode.js"() {
    (function(ServerMode2) {
      ServerMode2.Development = "development", ServerMode2.Production = "production", ServerMode2.Test = "test";
    })(ServerMode || (ServerMode = {}));
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js
function matchServerRoutes(routes2, pathname) {
  let matches = matchRoutes(routes2, pathname);
  return matches ? matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  })) : null;
}
var init_routeMatching = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js"() {
    init_react_router_dom();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routes.js
function createRoutes(manifest, parentId) {
  return Object.entries(manifest).filter(([, route]) => route.parentId === parentId).map(([id, route]) => ({
    ...route,
    children: createRoutes(manifest, id)
  }));
}
var init_routes = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routes.js"() {
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/markup.js
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
var ESCAPE_LOOKUP, ESCAPE_REGEX, init_markup = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/markup.js"() {
    ESCAPE_LOOKUP = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    }, ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js
function createServerHandoffString(serverHandoff) {
  return escapeHtml(JSON.stringify(serverHandoff));
}
var init_serverHandoff = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js"() {
    init_markup();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/server.js
async function handleDataRequest({
  handleDataRequest: handleDataRequest2,
  loadContext,
  matches,
  request,
  serverMode
}) {
  if (!isValidRequestMethod(request))
    return errorBoundaryError(new Error(`Invalid request method "${request.method}"`), 405);
  let url = new URL(request.url);
  if (!matches)
    return errorBoundaryError(new Error(`No route matches URL "${url.pathname}"`), 404);
  let response, match;
  try {
    if (isActionRequest(request))
      match = getRequestMatch(url, matches), response = await callRouteAction({
        loadContext,
        match,
        request
      });
    else {
      let routeId = url.searchParams.get("_data");
      if (!routeId)
        return errorBoundaryError(new Error("Missing route id in ?_data"), 403);
      let tempMatch = matches.find((match2) => match2.route.id === routeId);
      if (!tempMatch)
        return errorBoundaryError(new Error(`Route "${routeId}" does not match URL "${url.pathname}"`), 403);
      match = tempMatch, response = await callRouteLoader({
        loadContext,
        match,
        request
      });
    }
    if (isRedirectResponse2(response)) {
      let headers = new Headers(response.headers);
      return headers.set("X-Remix-Redirect", headers.get("Location")), headers.delete("Location"), response.headers.get("Set-Cookie") !== null && headers.set("X-Remix-Revalidate", "yes"), new Response(null, {
        status: 204,
        headers
      });
    }
    return handleDataRequest2 && (response = await handleDataRequest2(response, {
      context: loadContext,
      params: match.params,
      request
    })), response;
  } catch (error) {
    return serverMode !== ServerMode.Test && console.error(error), serverMode === ServerMode.Development && error instanceof Error ? errorBoundaryError(error, 500) : errorBoundaryError(new Error("Unexpected Server Error"), 500);
  }
}
async function handleDocumentRequest({
  build,
  loadContext,
  matches,
  request,
  routes: routes2,
  serverMode
}) {
  let url = new URL(request.url), appState = {
    trackBoundaries: !0,
    trackCatchBoundaries: !0,
    catchBoundaryRouteId: null,
    renderBoundaryRouteId: null,
    loaderBoundaryRouteId: null,
    error: void 0,
    catch: void 0
  };
  isValidRequestMethod(request) ? matches || (appState.trackCatchBoundaries = !1, appState.catch = {
    data: null,
    status: 404,
    statusText: "Not Found"
  }) : (matches = null, appState.trackCatchBoundaries = !1, appState.catch = {
    data: null,
    status: 405,
    statusText: "Method Not Allowed"
  });
  let actionStatus, actionData, actionMatch, actionResponse;
  if (matches && isActionRequest(request)) {
    actionMatch = getRequestMatch(url, matches);
    try {
      if (actionResponse = await callRouteAction({
        loadContext,
        match: actionMatch,
        request
      }), isRedirectResponse2(actionResponse))
        return actionResponse;
      actionStatus = {
        status: actionResponse.status,
        statusText: actionResponse.statusText
      }, isCatchResponse2(actionResponse) ? (appState.catchBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "CatchBoundary"), appState.trackCatchBoundaries = !1, appState.catch = {
        ...actionStatus,
        data: await extractData2(actionResponse)
      }) : actionData = {
        [actionMatch.route.id]: await extractData2(actionResponse)
      };
    } catch (error) {
      appState.loaderBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "ErrorBoundary"), appState.trackBoundaries = !1, appState.error = await serializeError(error), serverMode !== ServerMode.Test && console.error(`There was an error running the action for route ${actionMatch.route.id}`);
    }
  }
  let routeModules = createEntryRouteModules(build.routes), matchesToLoad = matches || [];
  appState.catch ? matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad, "CatchBoundary").slice(0, -1) : appState.error && (matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad, "ErrorBoundary").slice(0, -1));
  let loaderRequest = new Request(request.url, {
    body: null,
    headers: request.headers,
    method: request.method,
    redirect: request.redirect,
    signal: request.signal
  }), routeLoaderResults = await Promise.allSettled(matchesToLoad.map((match) => match.route.module.loader ? callRouteLoader({
    loadContext,
    match,
    request: loaderRequest
  }) : Promise.resolve(void 0))), actionCatch = appState.catch, actionError = appState.error, actionCatchBoundaryRouteId = appState.catchBoundaryRouteId, actionLoaderBoundaryRouteId = appState.loaderBoundaryRouteId;
  appState.catch = void 0, appState.error = void 0;
  let routeLoaderResponses = {}, loaderStatusCodes = [], routeData = {};
  for (let index = 0; index < matchesToLoad.length; index++) {
    let match = matchesToLoad[index], result = routeLoaderResults[index], error = result.status === "rejected" ? result.reason : void 0, response = result.status === "fulfilled" ? result.value : void 0, isRedirect = response ? isRedirectResponse2(response) : !1, isCatch = response ? isCatchResponse2(response) : !1;
    if (appState.catch || appState.error)
      break;
    if (!actionCatch && !actionError && response && isRedirect)
      return response;
    if (match.route.module.CatchBoundary && (appState.catchBoundaryRouteId = match.route.id), match.route.module.ErrorBoundary && (appState.loaderBoundaryRouteId = match.route.id), error) {
      loaderStatusCodes.push(500), appState.trackBoundaries = !1, appState.error = await serializeError(error), serverMode !== ServerMode.Test && console.error(`There was an error running the data loader for route ${match.route.id}`);
      break;
    } else if (response)
      if (routeLoaderResponses[match.route.id] = response, loaderStatusCodes.push(response.status), isCatch) {
        appState.trackCatchBoundaries = !1, appState.catch = {
          data: await extractData2(response),
          status: response.status,
          statusText: response.statusText
        };
        break;
      } else
        routeData[match.route.id] = await extractData2(response);
  }
  appState.catch || (appState.catchBoundaryRouteId = actionCatchBoundaryRouteId), appState.error || (appState.loaderBoundaryRouteId = actionLoaderBoundaryRouteId), appState.catch = actionCatch || appState.catch, appState.error = actionError || appState.error;
  let renderableMatches = getRenderableMatches(matches, appState);
  if (!renderableMatches) {
    renderableMatches = [];
    let root = routes2[0];
    root != null && root.module.CatchBoundary && (appState.catchBoundaryRouteId = "root", renderableMatches.push({
      params: {},
      pathname: "",
      route: routes2[0]
    }));
  }
  let notOkResponse = actionStatus && actionStatus.status !== 200 ? actionStatus.status : loaderStatusCodes.find((status) => status !== 200), responseStatusCode = appState.error ? 500 : typeof notOkResponse == "number" ? notOkResponse : appState.catch ? appState.catch.status : 200, responseHeaders = getDocumentHeaders(build, renderableMatches, routeLoaderResponses, actionResponse), entryMatches = createEntryMatches(renderableMatches, build.assets.routes), serverHandoff = {
    actionData,
    appState,
    matches: entryMatches,
    routeData
  }, entryContext = {
    ...serverHandoff,
    manifest: build.assets,
    routeModules,
    serverHandoffString: createServerHandoffString(serverHandoff)
  }, handleDocumentRequest2 = build.entry.module.default;
  try {
    return await handleDocumentRequest2(request, responseStatusCode, responseHeaders, entryContext);
  } catch (error) {
    responseStatusCode = 500, appState.trackBoundaries = !1, appState.error = await serializeError(error), entryContext.serverHandoffString = createServerHandoffString(serverHandoff);
    try {
      return await handleDocumentRequest2(request, responseStatusCode, responseHeaders, entryContext);
    } catch (error2) {
      serverMode !== ServerMode.Test && console.error(error2);
      let message = "Unexpected Server Error";
      return serverMode === ServerMode.Development && (message += `

${String(error2)}`), new Response(message, {
        status: 500,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }
  }
}
async function handleResourceRequest({
  loadContext,
  matches,
  request,
  serverMode
}) {
  let match = matches.slice(-1)[0];
  try {
    return isActionRequest(request) ? await callRouteAction({
      match,
      loadContext,
      request
    }) : await callRouteLoader({
      match,
      loadContext,
      request
    });
  } catch (error) {
    serverMode !== ServerMode.Test && console.error(error);
    let message = "Unexpected Server Error";
    return serverMode === ServerMode.Development && (message += `

${String(error)}`), new Response(message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
function isActionRequest({
  method
}) {
  return validActionMethods.has(method.toUpperCase());
}
function isValidRequestMethod({
  method
}) {
  return validRequestMethods.has(method.toUpperCase());
}
async function errorBoundaryError(error, status) {
  return json(await serializeError(error), {
    status,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function isIndexRequestUrl(url) {
  return url.searchParams.getAll("index").some((param) => param === "");
}
function getRequestMatch(url, matches) {
  let match = matches.slice(-1)[0];
  return !isIndexRequestUrl(url) && match.route.id.endsWith("/index") ? matches.slice(-2)[0] : match;
}
function getDeepestRouteIdWithBoundary(matches, key) {
  let matched = getMatchesUpToDeepestBoundary(matches, key).slice(-1)[0];
  return matched ? matched.route.id : null;
}
function getMatchesUpToDeepestBoundary(matches, key) {
  let deepestBoundaryIndex = -1;
  return matches.forEach((match, index) => {
    match.route.module[key] && (deepestBoundaryIndex = index);
  }), deepestBoundaryIndex === -1 ? [] : matches.slice(0, deepestBoundaryIndex + 1);
}
function getRenderableMatches(matches, appState) {
  if (!matches)
    return null;
  if (!appState.catch && !appState.error)
    return matches;
  let lastRenderableIndex = -1;
  return matches.forEach((match, index) => {
    let id = match.route.id;
    (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id || appState.catchBoundaryRouteId === id) && (lastRenderableIndex = index);
  }), matches.slice(0, lastRenderableIndex + 1);
}
var createRequestHandler, validActionMethods, validRequestMethods, init_server = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/server.js"() {
    init_data();
    init_entry();
    init_errors();
    init_headers();
    init_mode();
    init_routeMatching();
    init_routes();
    init_responses();
    init_serverHandoff();
    createRequestHandler = (build, mode) => {
      let routes2 = createRoutes(build.routes), serverMode = isServerMode(mode) ? mode : ServerMode.Production;
      return async function(request, loadContext = {}) {
        let url = new URL(request.url), matches = matchServerRoutes(routes2, url.pathname), response;
        return url.searchParams.has("_data") ? response = await handleDataRequest({
          request,
          loadContext,
          matches,
          handleDataRequest: build.entry.module.handleDataRequest,
          serverMode
        }) : matches && !matches[matches.length - 1].route.module.default ? response = await handleResourceRequest({
          request,
          loadContext,
          matches,
          serverMode
        }) : response = await handleDocumentRequest({
          build,
          loadContext,
          matches,
          request,
          routes: routes2,
          serverMode
        }), request.method === "HEAD" ? new Response(null, {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText
        }) : response;
      };
    };
    validActionMethods = /* @__PURE__ */ new Set(["POST", "PUT", "PATCH", "DELETE"]);
    validRequestMethods = /* @__PURE__ */ new Set(["GET", "HEAD", ...validActionMethods]);
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions.js
function flash(name) {
  return `__flash_${name}__`;
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/api/remix#signing-cookies for more information.`);
}
var createSession, isSession, createSessionStorageFactory, init_sessions = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions.js"() {
    init_cookies();
    init_warnings();
    createSession = (initialData = {}, id = "") => {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name) {
          return map.has(name) || map.has(flash(name));
        },
        get(name) {
          if (map.has(name))
            return map.get(name);
          let flashName = flash(name);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            return map.delete(flashName), value;
          }
        },
        set(name, value) {
          map.set(name, value);
        },
        flash(name, value) {
          map.set(flash(name), value);
        },
        unset(name) {
          map.delete(name);
        }
      };
    }, isSession = (object) => object != null && typeof object.id == "string" && typeof object.data < "u" && typeof object.has == "function" && typeof object.get == "function" && typeof object.set == "function" && typeof object.flash == "function" && typeof object.unset == "function", createSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg == null ? void 0 : cookieArg.name) || "__session", cookieArg);
      return warnOnceAboutSigningSessionCookie(cookie), {
        async getSession(cookieHeader, options) {
          let id = cookieHeader && await cookie.parse(cookieHeader, options), data = id && await readData(id);
          return createSession(data || {}, id || "");
        },
        async commitSession(session, options) {
          let {
            id,
            data
          } = session;
          return id ? await updateData(id, data, cookie.expires) : id = await createData(data, cookie.expires), cookie.serialize(id, options);
        },
        async destroySession(session, options) {
          return await deleteData(session.id), cookie.serialize("", {
            ...options,
            expires: new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js
var createCookieSessionStorageFactory, init_cookieStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js"() {
    init_cookies();
    init_sessions();
    createCookieSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg
    } = {}) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg == null ? void 0 : cookieArg.name) || "__session", cookieArg);
      return warnOnceAboutSigningSessionCookie(cookie), {
        async getSession(cookieHeader, options) {
          return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
        },
        async commitSession(session, options) {
          let serializedCookie = await cookie.serialize(session.data, options);
          if (serializedCookie.length > 4096)
            throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
          return serializedCookie;
        },
        async destroySession(_session, options) {
          return cookie.serialize("", {
            ...options,
            expires: new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js
var createMemorySessionStorageFactory, init_memoryStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js"() {
    createMemorySessionStorageFactory = (createSessionStorage) => ({
      cookie
    } = {}) => {
      let uniqueId = 0, map = /* @__PURE__ */ new Map();
      return createSessionStorage({
        cookie,
        async createData(data, expires) {
          let id = (++uniqueId).toString();
          return map.set(id, {
            data,
            expires
          }), id;
        },
        async readData(id) {
          if (map.has(id)) {
            let {
              data,
              expires
            } = map.get(id);
            if (!expires || expires > new Date())
              return data;
            expires && map.delete(id);
          }
          return null;
        },
        async updateData(id, data, expires) {
          map.set(id, {
            data,
            expires
          });
        },
        async deleteData(id) {
          map.delete(id);
        }
      });
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js
var MaxPartSizeExceededError, init_errors2 = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js"() {
    MaxPartSizeExceededError = class extends Error {
      constructor(field, maxBytes) {
        super(`Field "${field}" exceeded upload size of ${maxBytes} bytes.`), this.field = field, this.maxBytes = maxBytes;
      }
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js
function createMemoryUploadHandler({
  filter,
  maxPartSize = 3e6
} = {}) {
  return async ({
    filename,
    contentType,
    name,
    data
  }) => {
    if (filter && !await filter({
      filename,
      contentType,
      name
    }))
      return;
    let size = 0, chunks = [];
    for await (let chunk of data) {
      if (size += chunk.byteLength, size > maxPartSize)
        throw new MaxPartSizeExceededError(name, maxPartSize);
      chunks.push(chunk);
    }
    return typeof filename == "string" ? new File(chunks, filename, {
      type: contentType
    }) : await new Blob(chunks, {
      type: contentType
    }).text();
  };
}
var init_memoryUploadHandler = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js"() {
    init_errors2();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  MaxPartSizeExceededError: () => MaxPartSizeExceededError,
  createCookieFactory: () => createCookieFactory,
  createCookieSessionStorageFactory: () => createCookieSessionStorageFactory,
  createMemorySessionStorageFactory: () => createMemorySessionStorageFactory,
  createRequestHandler: () => createRequestHandler,
  createSession: () => createSession,
  createSessionStorageFactory: () => createSessionStorageFactory,
  isCookie: () => isCookie,
  isSession: () => isSession,
  json: () => json,
  redirect: () => redirect,
  unstable_composeUploadHandlers: () => composeUploadHandlers,
  unstable_createMemoryUploadHandler: () => createMemoryUploadHandler,
  unstable_parseMultipartFormData: () => parseMultipartFormData
});
var init_esm = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/index.js"() {
    init_cookies();
    init_formData();
    init_responses();
    init_server();
    init_sessions();
    init_cookieStorage();
    init_memoryStorage();
    init_memoryUploadHandler();
    init_errors2();
  }
});

// node_modules/@sanity/image-url/lib/browser/image-url.umd.js
var require_image_url_umd = __commonJS({
  "node_modules/@sanity/image-url/lib/browser/image-url.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports == "object" && typeof module < "u" ? module.exports = factory() : typeof define == "function" && define.amd ? define(factory) : global.SanityImageUrlBuilder = factory();
    })(exports, function() {
      var example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
      function parseAssetId(ref) {
        var ref$1 = ref.split("-"), id = ref$1[1], dimensionString = ref$1[2], format = ref$1[3];
        if (!id || !dimensionString || !format)
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        var ref$2 = dimensionString.split("x"), imgWidthStr = ref$2[0], imgHeightStr = ref$2[1], width = +imgWidthStr, height = +imgHeightStr, isValidAssetId = isFinite(width) && isFinite(height);
        if (!isValidAssetId)
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        return {
          id,
          width,
          height,
          format
        };
      }
      var isRef = function(src) {
        var source = src;
        return source ? typeof source._ref == "string" : !1;
      }, isAsset = function(src) {
        var source = src;
        return source ? typeof source._id == "string" : !1;
      }, isAssetStub = function(src) {
        var source = src;
        return source && source.asset ? typeof source.asset.url == "string" : !1;
      };
      function parseSource(source) {
        if (!source)
          return null;
        var image;
        if (typeof source == "string" && isUrl(source))
          image = {
            asset: {
              _ref: urlToId(source)
            }
          };
        else if (typeof source == "string")
          image = {
            asset: {
              _ref: source
            }
          };
        else if (isRef(source))
          image = {
            asset: source
          };
        else if (isAsset(source))
          image = {
            asset: {
              _ref: source._id || ""
            }
          };
        else if (isAssetStub(source))
          image = {
            asset: {
              _ref: urlToId(source.asset.url)
            }
          };
        else if (typeof source.asset == "object")
          image = source;
        else
          return null;
        var img = source;
        return img.crop && (image.crop = img.crop), img.hotspot && (image.hotspot = img.hotspot), applyDefaults(image);
      }
      function isUrl(url) {
        return /^https?:\/\//.test("" + url);
      }
      function urlToId(url) {
        var parts = url.split("/").slice(-1);
        return ("image-" + parts[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      function applyDefaults(image) {
        if (image.crop && image.hotspot)
          return image;
        var result = Object.assign({}, image);
        return result.crop || (result.crop = {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        }), result.hotspot || (result.hotspot = {
          x: 0.5,
          y: 0.5,
          height: 1,
          width: 1
        }), result;
      }
      var SPEC_NAME_TO_URL_NAME_MAPPINGS = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]];
      function urlForImage(options) {
        var spec = Object.assign({}, options || {}), source = spec.source;
        delete spec.source;
        var image = parseSource(source);
        if (!image)
          throw new Error("Unable to resolve image URL from source (" + JSON.stringify(source) + ")");
        var id = image.asset._ref || image.asset._id || "", asset = parseAssetId(id), cropLeft = Math.round(image.crop.left * asset.width), cropTop = Math.round(image.crop.top * asset.height), crop = {
          left: cropLeft,
          top: cropTop,
          width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
          height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
        }, hotSpotVerticalRadius = image.hotspot.height * asset.height / 2, hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2, hotSpotCenterX = image.hotspot.x * asset.width, hotSpotCenterY = image.hotspot.y * asset.height, hotspot = {
          left: hotSpotCenterX - hotSpotHorizontalRadius,
          top: hotSpotCenterY - hotSpotVerticalRadius,
          right: hotSpotCenterX + hotSpotHorizontalRadius,
          bottom: hotSpotCenterY + hotSpotVerticalRadius
        };
        return spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop || (spec = Object.assign(
          {},
          spec,
          fit({
            crop,
            hotspot
          }, spec)
        )), specToImageUrl(Object.assign(
          {},
          spec,
          { asset }
        ));
      }
      function specToImageUrl(spec) {
        var cdnUrl = spec.baseUrl || "https://cdn.sanity.io", filename = spec.asset.id + "-" + spec.asset.width + "x" + spec.asset.height + "." + spec.asset.format, baseUrl = cdnUrl + "/images/" + spec.projectId + "/" + spec.dataset + "/" + filename, params = [];
        if (spec.rect) {
          var ref = spec.rect, left = ref.left, top = ref.top, width = ref.width, height = ref.height, isEffectiveCrop = left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width;
          isEffectiveCrop && params.push("rect=" + left + "," + top + "," + width + "," + height);
        }
        spec.bg && params.push("bg=" + spec.bg), spec.focalPoint && (params.push("fp-x=" + spec.focalPoint.x), params.push("fp-y=" + spec.focalPoint.y));
        var flip = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
        return flip && params.push("flip=" + flip), SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
          var specName = mapping[0], param = mapping[1];
          typeof spec[specName] < "u" ? params.push(param + "=" + encodeURIComponent(spec[specName])) : typeof spec[param] < "u" && params.push(param + "=" + encodeURIComponent(spec[param]));
        }), params.length === 0 ? baseUrl : baseUrl + "?" + params.join("&");
      }
      function fit(source, spec) {
        var cropRect, imgWidth = spec.width, imgHeight = spec.height;
        if (!(imgWidth && imgHeight))
          return {
            width: imgWidth,
            height: imgHeight,
            rect: source.crop
          };
        var crop = source.crop, hotspot = source.hotspot, desiredAspectRatio = imgWidth / imgHeight, cropAspectRatio = crop.width / crop.height;
        if (cropAspectRatio > desiredAspectRatio) {
          var height = Math.round(crop.height), width = Math.round(height * desiredAspectRatio), top = Math.max(0, Math.round(crop.top)), hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left), left = Math.max(0, Math.round(hotspotXCenter - width / 2));
          left < crop.left ? left = crop.left : left + width > crop.left + crop.width && (left = crop.left + crop.width - width), cropRect = {
            left,
            top,
            width,
            height
          };
        } else {
          var width$1 = crop.width, height$1 = Math.round(width$1 / desiredAspectRatio), left$1 = Math.max(0, Math.round(crop.left)), hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top), top$1 = Math.max(0, Math.round(hotspotYCenter - height$1 / 2));
          top$1 < crop.top ? top$1 = crop.top : top$1 + height$1 > crop.top + crop.height && (top$1 = crop.top + crop.height - height$1), cropRect = {
            left: left$1,
            top: top$1,
            width: width$1,
            height: height$1
          };
        }
        return {
          width: imgWidth,
          height: imgHeight,
          rect: cropRect
        };
      }
      var validFits = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"], validCrops = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"], validAutoModes = ["format"];
      function isSanityClientLike(client) {
        return client ? typeof client.clientConfig == "object" : !1;
      }
      function rewriteSpecName(key) {
        for (var specs = SPEC_NAME_TO_URL_NAME_MAPPINGS, i = 0, list = specs; i < list.length; i += 1) {
          var entry2 = list[i], specName = entry2[0], param = entry2[1];
          if (key === specName || key === param)
            return specName;
        }
        return key;
      }
      function urlBuilder(options) {
        var client = options;
        if (isSanityClientLike(client)) {
          var ref = client.clientConfig, apiUrl = ref.apiHost, projectId = ref.projectId, dataset = ref.dataset, apiHost = apiUrl || "https://api.sanity.io";
          return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId,
            dataset
          });
        }
        return new ImageUrlBuilder(null, options);
      }
      var ImageUrlBuilder = function(parent, options) {
        this.options = parent ? Object.assign(
          {},
          parent.options || {},
          options || {}
        ) : Object.assign({}, options || {});
      };
      return ImageUrlBuilder.prototype.withOptions = function(options) {
        var baseUrl = options.baseUrl || this.options.baseUrl, newOptions = {
          baseUrl
        };
        for (var key in options)
          if (options.hasOwnProperty(key)) {
            var specKey = rewriteSpecName(key);
            newOptions[specKey] = options[key];
          }
        return new ImageUrlBuilder(this, Object.assign(
          {},
          { baseUrl },
          newOptions
        ));
      }, ImageUrlBuilder.prototype.image = function(source) {
        return this.withOptions({
          source
        });
      }, ImageUrlBuilder.prototype.dataset = function(dataset$1) {
        return this.withOptions({
          dataset: dataset$1
        });
      }, ImageUrlBuilder.prototype.projectId = function(projectId$1) {
        return this.withOptions({
          projectId: projectId$1
        });
      }, ImageUrlBuilder.prototype.bg = function(bg$1) {
        return this.withOptions({
          bg: bg$1
        });
      }, ImageUrlBuilder.prototype.dpr = function(dpr$1) {
        return this.withOptions(dpr$1 && dpr$1 !== 1 ? {
          dpr: dpr$1
        } : {});
      }, ImageUrlBuilder.prototype.width = function(width$1) {
        return this.withOptions({
          width: width$1
        });
      }, ImageUrlBuilder.prototype.height = function(height$1) {
        return this.withOptions({
          height: height$1
        });
      }, ImageUrlBuilder.prototype.focalPoint = function(x, y) {
        return this.withOptions({
          focalPoint: {
            x,
            y
          }
        });
      }, ImageUrlBuilder.prototype.maxWidth = function(maxWidth$1) {
        return this.withOptions({
          maxWidth: maxWidth$1
        });
      }, ImageUrlBuilder.prototype.minWidth = function(minWidth$1) {
        return this.withOptions({
          minWidth: minWidth$1
        });
      }, ImageUrlBuilder.prototype.maxHeight = function(maxHeight$1) {
        return this.withOptions({
          maxHeight: maxHeight$1
        });
      }, ImageUrlBuilder.prototype.minHeight = function(minHeight$1) {
        return this.withOptions({
          minHeight: minHeight$1
        });
      }, ImageUrlBuilder.prototype.size = function(width, height) {
        return this.withOptions({
          width,
          height
        });
      }, ImageUrlBuilder.prototype.blur = function(blur$1) {
        return this.withOptions({
          blur: blur$1
        });
      }, ImageUrlBuilder.prototype.sharpen = function(sharpen$1) {
        return this.withOptions({
          sharpen: sharpen$1
        });
      }, ImageUrlBuilder.prototype.rect = function(left, top, width, height) {
        return this.withOptions({
          rect: {
            left,
            top,
            width,
            height
          }
        });
      }, ImageUrlBuilder.prototype.format = function(format$1) {
        return this.withOptions({
          format: format$1
        });
      }, ImageUrlBuilder.prototype.invert = function(invert$1) {
        return this.withOptions({
          invert: invert$1
        });
      }, ImageUrlBuilder.prototype.orientation = function(orientation$1) {
        return this.withOptions({
          orientation: orientation$1
        });
      }, ImageUrlBuilder.prototype.quality = function(quality$1) {
        return this.withOptions({
          quality: quality$1
        });
      }, ImageUrlBuilder.prototype.forceDownload = function(download) {
        return this.withOptions({
          download
        });
      }, ImageUrlBuilder.prototype.flipHorizontal = function() {
        return this.withOptions({
          flipHorizontal: !0
        });
      }, ImageUrlBuilder.prototype.flipVertical = function() {
        return this.withOptions({
          flipVertical: !0
        });
      }, ImageUrlBuilder.prototype.ignoreImageParams = function() {
        return this.withOptions({
          ignoreImageParams: !0
        });
      }, ImageUrlBuilder.prototype.fit = function(value) {
        if (validFits.indexOf(value) === -1)
          throw new Error('Invalid fit mode "' + value + '"');
        return this.withOptions({
          fit: value
        });
      }, ImageUrlBuilder.prototype.crop = function(value) {
        if (validCrops.indexOf(value) === -1)
          throw new Error('Invalid crop mode "' + value + '"');
        return this.withOptions({
          crop: value
        });
      }, ImageUrlBuilder.prototype.saturation = function(saturation$1) {
        return this.withOptions({
          saturation: saturation$1
        });
      }, ImageUrlBuilder.prototype.auto = function(value) {
        if (validAutoModes.indexOf(value) === -1)
          throw new Error('Invalid auto mode "' + value + '"');
        return this.withOptions({
          auto: value
        });
      }, ImageUrlBuilder.prototype.pad = function(pad$1) {
        return this.withOptions({
          pad: pad$1
        });
      }, ImageUrlBuilder.prototype.url = function() {
        return urlForImage(this.options);
      }, ImageUrlBuilder.prototype.toString = function() {
        return this.url();
      }, urlBuilder;
    });
  }
});

// node_modules/@remix-run/cloudflare/dist/crypto.js
var require_crypto = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var encoder = new TextEncoder(), sign = async (value, secret) => {
      let key = await createKey(secret, ["sign"]), data = encoder.encode(value), signature = await crypto.subtle.sign("HMAC", key, data), hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
      return value + "." + hash;
    }, unsign = async (signed, secret) => {
      let index = signed.lastIndexOf("."), value = signed.slice(0, index), hash = signed.slice(index + 1), key = await createKey(secret, ["verify"]), data = encoder.encode(value), signature = byteStringToUint8Array(atob(hash));
      return await crypto.subtle.verify("HMAC", key, signature, data) ? value : !1;
    };
    async function createKey(secret, usages) {
      return await crypto.subtle.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: "SHA-256"
      }, !1, usages);
    }
    function byteStringToUint8Array(byteString) {
      let array = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++)
        array[i] = byteString.charCodeAt(i);
      return array;
    }
    exports.sign = sign;
    exports.unsign = unsign;
  }
});

// node_modules/@remix-run/cloudflare/dist/implementations.js
var require_implementations = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/implementations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = (init_esm(), __toCommonJS(esm_exports)), crypto2 = require_crypto(), createCookie = serverRuntime.createCookieFactory({
      sign: crypto2.sign,
      unsign: crypto2.unsign
    }), createCookieSessionStorage = serverRuntime.createCookieSessionStorageFactory(createCookie), createSessionStorage = serverRuntime.createSessionStorageFactory(createCookie), createMemorySessionStorage = serverRuntime.createMemorySessionStorageFactory(createSessionStorage);
    exports.createCookie = createCookie;
    exports.createCookieSessionStorage = createCookieSessionStorage;
    exports.createMemorySessionStorage = createMemorySessionStorage;
    exports.createSessionStorage = createSessionStorage;
  }
});

// node_modules/@remix-run/cloudflare/dist/sessions/cloudflareKVSessionStorage.js
var require_cloudflareKVSessionStorage = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/sessions/cloudflareKVSessionStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var implementations = require_implementations();
    function createCloudflareKVSessionStorage({
      cookie,
      kv
    }) {
      return implementations.createSessionStorage({
        cookie,
        async createData(data, expires) {
          for (; ; ) {
            let randomBytes = new Uint8Array(8);
            crypto.getRandomValues(randomBytes);
            let id = [...randomBytes].map((x) => x.toString(16).padStart(2, "0")).join("");
            if (!await kv.get(id, "json"))
              return await kv.put(id, JSON.stringify(data), {
                expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
              }), id;
          }
        },
        async readData(id) {
          let session = await kv.get(id);
          return session ? JSON.parse(session) : null;
        },
        async updateData(id, data, expires) {
          await kv.put(id, JSON.stringify(data), {
            expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
          });
        },
        async deleteData(id) {
          await kv.delete(id);
        }
      });
    }
    exports.createCloudflareKVSessionStorage = createCloudflareKVSessionStorage;
  }
});

// node_modules/@remix-run/cloudflare/dist/index.js
var require_dist = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cloudflareKVSessionStorage = require_cloudflareKVSessionStorage(), implementations = require_implementations(), serverRuntime = (init_esm(), __toCommonJS(esm_exports));
    exports.createCloudflareKVSessionStorage = cloudflareKVSessionStorage.createCloudflareKVSessionStorage;
    exports.createCookie = implementations.createCookie;
    exports.createCookieSessionStorage = implementations.createCookieSessionStorage;
    exports.createMemorySessionStorage = implementations.createMemorySessionStorage;
    exports.createSessionStorage = implementations.createSessionStorage;
    Object.defineProperty(exports, "MaxPartSizeExceededError", {
      enumerable: !0,
      get: function() {
        return serverRuntime.MaxPartSizeExceededError;
      }
    });
    Object.defineProperty(exports, "createRequestHandler", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createRequestHandler;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "unstable_composeUploadHandlers", {
      enumerable: !0,
      get: function() {
        return serverRuntime.unstable_composeUploadHandlers;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return serverRuntime.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return serverRuntime.unstable_parseMultipartFormData;
      }
    });
  }
});

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server2 = __toESM(require_server_browser());

// node_modules/@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js
function _extends2() {
  return _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends2.apply(this, arguments);
}

// node_modules/@remix-run/react/dist/esm/components.js
var React2 = __toESM(require_react());
init_react_router_dom();
init_history();

// node_modules/@remix-run/react/dist/esm/errorBoundaries.js
var import_react3 = __toESM(require_react());
var RemixErrorBoundary = class extends import_react3.default.Component {
  constructor(props) {
    super(props), this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    return state.location !== props.location ? {
      error: props.error || null,
      location: props.location
    } : {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ import_react3.default.createElement(this.props.component, {
      error: this.state.error
    }) : this.props.children;
  }
};
function RemixRootDefaultErrorBoundary({
  error
}) {
  return console.error(error), /* @__PURE__ */ import_react3.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react3.default.createElement("head", null, /* @__PURE__ */ import_react3.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react3.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react3.default.createElement("title", null, "Application Error!")), /* @__PURE__ */ import_react3.default.createElement("body", null, /* @__PURE__ */ import_react3.default.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, /* @__PURE__ */ import_react3.default.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), /* @__PURE__ */ import_react3.default.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, error.stack)), /* @__PURE__ */ import_react3.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `
    }
  })));
}
var RemixCatchContext = /* @__PURE__ */ import_react3.default.createContext(void 0);
function useCatch() {
  return (0, import_react3.useContext)(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component,
  children
}) {
  return catchVal ? /* @__PURE__ */ import_react3.default.createElement(RemixCatchContext.Provider, {
    value: catchVal
  }, /* @__PURE__ */ import_react3.default.createElement(Component, null)) : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  let caught = useCatch();
  return /* @__PURE__ */ import_react3.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react3.default.createElement("head", null, /* @__PURE__ */ import_react3.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react3.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react3.default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ import_react3.default.createElement("body", null, /* @__PURE__ */ import_react3.default.createElement("h1", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, caught.status, " ", caught.statusText), /* @__PURE__ */ import_react3.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `
    }
  })));
}

// node_modules/@remix-run/react/dist/esm/invariant.js
function invariant2(value, message) {
  if (value === !1 || value === null || typeof value > "u")
    throw new Error(message);
}

// node_modules/@remix-run/react/dist/esm/links.js
init_history();

// node_modules/@remix-run/react/dist/esm/routeModules.js
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache)
    return routeModulesCache[route.id];
  try {
    let routeModule = await import(
      /* webpackIgnore: true */
      route.module
    );
    return routeModulesCache[route.id] = routeModule, routeModule;
  } catch {
    return window.location.reload(), new Promise(() => {
    });
  }
}

// node_modules/@remix-run/react/dist/esm/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    var _module$links;
    let module = routeModules[match.route.id];
    return ((_module$links = module.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module)) || [];
  }).flat(1), preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
async function prefetchStyleLinks(routeModule) {
  if (!routeModule.links)
    return;
  let descriptors = routeModule.links();
  if (!descriptors)
    return;
  let styleLinks = [];
  for (let descriptor of descriptors)
    !isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet" && styleLinks.push({
      ...descriptor,
      rel: "preload",
      as: "style"
    });
  let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      document.head.contains(link) && document.head.removeChild(link);
    }
    link.onload = () => {
      removeLink(), resolve();
    }, link.onerror = () => {
      removeLink(), resolve();
    }, document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page == "string";
}
function isHtmlLinkDescriptor(object) {
  return object == null ? !1 : object.href == null ? object.rel === "preload" && (typeof object.imageSrcSet == "string" || typeof object.imagesrcset == "string") && (typeof object.imageSizes == "string" || typeof object.imagesizes == "string") : typeof object.rel == "string" && typeof object.href == "string";
}
async function getStylesheetPrefetchLinks(matches, routeModules) {
  return (await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(match.route, routeModules);
    return mod.links ? mod.links() : [];
  }))).flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "preload" ? {
    ...link,
    rel: "prefetch"
  } : {
    ...link,
    rel: "prefetch",
    as: "style"
  });
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, location, mode) {
  let path = parsePathPatch(page), isNew = (match, index) => currentMatches[index] ? match.route.id !== currentMatches[index].route.id : !0, matchPathChanged = (match, index) => {
    var _currentMatches$index;
    return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
  };
  return mode === "data" && location.search !== path.search ? nextMatches.filter((match, index) => match.route.hasLoader ? isNew(match, index) || matchPathChanged(match, index) ? !0 : match.route.shouldReload ? match.route.shouldReload({
    params: match.params,
    prevUrl: new URL(location.pathname + location.search + location.hash, window.origin),
    url: new URL(page, window.origin)
  }) : !0 : !1) : nextMatches.filter((match, index) => (mode === "assets" || match.route.hasLoader) && (isNew(match, index) || matchPathChanged(match, index)));
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path, searchParams = new URLSearchParams(search);
    return searchParams.set("_data", match.route.id), `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id], hrefs = [route.module];
    return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id], hrefs = [route.module];
    return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set(), preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    if (!isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href))
      return deduped;
    let str = JSON.stringify(descriptor);
    return set.has(str) || (set.add(str), deduped.push(descriptor)), deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = parsePath(href);
  return path.search === void 0 && (path.search = ""), path;
}

// node_modules/@remix-run/react/dist/esm/markup.js
function createHtml(html) {
  return {
    __html: html
  };
}

// node_modules/@remix-run/react/dist/esm/routes.js
var React = __toESM(require_react());

// node_modules/@remix-run/react/dist/esm/data.js
function isCatchResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
}
function isErrorResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Error") != null;
}
function isRedirectResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
}
async function fetchData(url, routeId, signal, submission) {
  url.searchParams.set("_data", routeId);
  let init = submission ? getActionInit(submission, signal) : {
    credentials: "same-origin",
    signal
  }, response = await fetch(url.href, init);
  if (isErrorResponse(response)) {
    let data = await response.json(), error = new Error(data.message);
    return error.stack = data.stack, error;
  }
  return response;
}
async function extractData(response) {
  let contentType = response.headers.get("Content-Type");
  return contentType && /\bapplication\/json\b/.test(contentType) ? response.json() : response.text();
}
function getActionInit(submission, signal) {
  let {
    encType,
    method,
    formData
  } = submission, headers, body = formData;
  if (encType === "application/x-www-form-urlencoded") {
    body = new URLSearchParams();
    for (let [key, value] of formData)
      invariant2(typeof value == "string", 'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'), body.append(key, value);
    headers = {
      "Content-Type": encType
    };
  }
  return {
    method,
    body,
    signal,
    credentials: "same-origin",
    headers
  };
}

// node_modules/@remix-run/react/dist/esm/transition.js
init_history();

// node_modules/@remix-run/react/dist/esm/routeMatching.js
init_react_router_dom();
function matchClientRoutes(routes2, location) {
  let matches = matchRoutes(routes2, location);
  return matches ? matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  })) : null;
}

// node_modules/@remix-run/react/dist/esm/transition.js
var CatchValue = class {
  constructor(status, statusText, data) {
    this.status = status, this.statusText = statusText, this.data = data;
  }
};
function isActionSubmission(submission) {
  return ["POST", "PUT", "PATCH", "DELETE"].includes(submission.method);
}
function isLoaderSubmission(submission) {
  return submission.method === "GET";
}
function isRedirectLocation(location) {
  return Boolean(location.state) && location.state.isRedirect;
}
function isLoaderRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "loader";
}
function isActionRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "action";
}
function isFetchActionRedirect(location) {
  return isRedirectLocation(location) && location.state.type === "fetchAction";
}
function isLoaderSubmissionRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "loaderSubmission";
}
var TransitionRedirect = class {
  constructor(location, setCookie) {
    this.setCookie = setCookie, this.location = typeof location == "string" ? location : location.pathname + location.search;
  }
}, IDLE_TRANSITION = {
  state: "idle",
  submission: void 0,
  location: void 0,
  type: "idle"
}, IDLE_FETCHER = {
  state: "idle",
  type: "init",
  data: void 0,
  submission: void 0
};
function createTransitionManager(init) {
  let {
    routes: routes2
  } = init, pendingNavigationController, fetchControllers = /* @__PURE__ */ new Map(), incrementingLoadId = 0, navigationLoadId = -1, fetchReloadIds = /* @__PURE__ */ new Map(), fetchRedirectIds = /* @__PURE__ */ new Set(), subscribers = /* @__PURE__ */ new Set(), matches = matchClientRoutes(routes2, init.location);
  matches || (matches = [{
    params: {},
    pathname: "",
    route: routes2[0]
  }]);
  let state = {
    location: init.location,
    loaderData: init.loaderData || {},
    actionData: init.actionData,
    catch: init.catch,
    error: init.error,
    catchBoundaryId: init.catchBoundaryId || null,
    errorBoundaryId: init.errorBoundaryId || null,
    matches,
    nextMatches: void 0,
    transition: IDLE_TRANSITION,
    fetchers: /* @__PURE__ */ new Map()
  };
  function update(updates) {
    updates.transition && updates.transition === IDLE_TRANSITION && (pendingNavigationController = void 0), state = Object.assign({}, state, updates);
    for (let subscriber of subscribers.values())
      subscriber(state);
  }
  function getState() {
    return state;
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function setFetcher(key, fetcher) {
    state.fetchers.set(key, fetcher);
  }
  function deleteFetcher(key) {
    fetchControllers.has(key) && abortFetcher(key), fetchReloadIds.delete(key), fetchRedirectIds.delete(key), state.fetchers.delete(key);
  }
  async function send(event) {
    switch (event.type) {
      case "navigation": {
        let {
          action: action2,
          location,
          submission
        } = event, matches2 = matchClientRoutes(routes2, location);
        matches2 ? !submission && isHashChangeOnly(location) ? await handleHashChange(location, matches2) : action2 === Action.Pop ? await handleLoad(location, matches2) : submission && isActionSubmission(submission) ? await handleActionSubmissionNavigation(location, submission, matches2) : submission && isLoaderSubmission(submission) ? await handleLoaderSubmissionNavigation(location, submission, matches2) : isActionRedirectLocation(location) ? await handleActionRedirect(location, matches2) : isLoaderSubmissionRedirectLocation(location) ? await handleLoaderSubmissionRedirect(location, matches2) : isLoaderRedirectLocation(location) ? await handleLoaderRedirect(location, matches2) : isFetchActionRedirect(location) ? await handleFetchActionRedirect(location, matches2) : await handleLoad(location, matches2) : (matches2 = [{
          params: {},
          pathname: "",
          route: routes2[0]
        }], await handleNotFoundNavigation(location, matches2)), navigationLoadId = -1;
        break;
      }
      case "fetcher": {
        let {
          key,
          submission,
          href
        } = event, matches2 = matchClientRoutes(routes2, href);
        invariant2(matches2, "No matches found"), fetchControllers.has(key) && abortFetcher(key);
        let match = getFetcherRequestMatch(new URL(href, window.location.href), matches2);
        submission && isActionSubmission(submission) ? await handleActionFetchSubmission(key, submission, match) : submission && isLoaderSubmission(submission) ? await handleLoaderFetchSubmission(href, key, submission, match) : await handleLoaderFetch(href, key, match);
        break;
      }
      default:
        throw new Error(`Unknown data event type: ${event.type}`);
    }
  }
  function dispose() {
    abortNormalNavigation();
    for (let [, controller] of fetchControllers)
      controller.abort();
  }
  function isIndexRequestUrl2(url) {
    for (let param of url.searchParams.getAll("index"))
      if (param === "")
        return !0;
    return !1;
  }
  function getFetcherRequestMatch(url, matches2) {
    let match = matches2.slice(-1)[0];
    return !isIndexRequestUrl2(url) && match.route.index ? matches2.slice(-2)[0] : match;
  }
  async function handleActionFetchSubmission(key, submission, match) {
    let currentFetcher = state.fetchers.get(key), fetcher = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      data: (currentFetcher == null ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher), update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callAction(submission, match, controller.signal);
    if (controller.signal.aborted)
      return;
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: !0,
        type: "fetchAction",
        setCookie: result.value.setCookie
      };
      fetchRedirectIds.add(key), init.onRedirect(result.value.location, locationState), setFetcher(key, {
        state: "loading",
        type: "actionRedirect",
        submission,
        data: void 0
      }), update({
        fetchers: new Map(state.fetchers)
      });
      return;
    }
    if (maybeBailOnError(match, key, result) || await maybeBailOnCatch(match, key, result))
      return;
    let loadFetcher = {
      state: "loading",
      type: "actionReload",
      data: result.value,
      submission
    };
    setFetcher(key, loadFetcher), update({
      fetchers: new Map(state.fetchers)
    });
    let maybeActionErrorResult = isErrorResult(result) ? result : void 0, maybeActionCatchResult = isCatchResult(result) ? result : void 0, loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let matchesToLoad = state.nextMatches || state.matches, results = await callLoaders(state, state.transition.location || state.location, matchesToLoad, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, match.route.id, loadFetcher);
    if (controller.signal.aborted)
      return;
    fetchReloadIds.delete(key), fetchControllers.delete(key);
    let redirect2 = findRedirect(results);
    if (redirect2) {
      let locationState = {
        isRedirect: !0,
        type: "loader",
        setCookie: redirect2.setCookie
      };
      init.onRedirect(redirect2.location, locationState);
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, state.matches, maybeActionErrorResult), [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, state.matches, maybeActionCatchResult) || [], doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    let abortedKeys = abortStaleFetchLoads(loadId);
    if (abortedKeys && markFetchersDone(abortedKeys), yeetStaleNavigationLoad(loadId)) {
      let {
        transition
      } = state;
      invariant2(transition.state === "loading", "Expected loading transition"), update({
        location: transition.location,
        matches: state.nextMatches,
        error,
        errorBoundaryId,
        catch: catchVal,
        catchBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad),
        actionData: transition.type === "actionReload" ? state.actionData : void 0,
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers)
      });
    } else
      update({
        fetchers: new Map(state.fetchers),
        error,
        errorBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad)
      });
  }
  function yeetStaleNavigationLoad(landedId) {
    return state.transition.state === "loading" && navigationLoadId < landedId ? (abortNormalNavigation(), !0) : !1;
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key), doneFetcher = {
        state: "idle",
        type: "done",
        data: fetcher.data,
        submission: void 0
      };
      setFetcher(key, doneFetcher);
    }
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds)
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant2(fetcher, `Expected fetcher: ${key}`), fetcher.state === "loading" && (abortFetcher(key), fetchReloadIds.delete(key), yeetedKeys.push(key));
      }
    return yeetedKeys.length ? yeetedKeys : !1;
  }
  async function handleLoaderFetchSubmission(href, key, submission, match) {
    let currentFetcher = state.fetchers.get(key), fetcher = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      data: (currentFetcher == null ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher), update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    if (fetchControllers.delete(key), controller.signal.aborted)
      return;
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: !0,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result) || await maybeBailOnCatch(match, key, result))
      return;
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher), update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function handleLoaderFetch(href, key, match) {
    if (typeof AbortController > "u")
      throw new Error("handleLoaderFetch was called during the server render, but it shouldn't be. You are likely calling useFetcher.load() in the body of your component. Try moving it to a useEffect or a callback.");
    let currentFetcher = state.fetchers.get(key), fetcher = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      data: (currentFetcher == null ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher), update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    if (controller.signal.aborted)
      return;
    if (fetchControllers.delete(key), isRedirectResult(result)) {
      let locationState = {
        isRedirect: !0,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result) || await maybeBailOnCatch(match, key, result))
      return;
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher), update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function maybeBailOnCatch(match, key, result) {
    if (isCatchResult(result)) {
      let catchBoundaryId = findNearestCatchBoundary(match, state.matches);
      return state.fetchers.delete(key), update({
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers),
        catch: {
          data: result.value.data,
          status: result.value.status,
          statusText: result.value.statusText
        },
        catchBoundaryId
      }), !0;
    }
    return !1;
  }
  function maybeBailOnError(match, key, result) {
    if (isErrorResult(result)) {
      let errorBoundaryId = findNearestBoundary(match, state.matches);
      return state.fetchers.delete(key), update({
        fetchers: new Map(state.fetchers),
        error: result.value,
        errorBoundaryId
      }), !0;
    }
    return !1;
  }
  async function handleNotFoundNavigation(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "normalLoad",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await Promise.resolve();
    let catchBoundaryId = findNearestCatchBoundary(matches2[0], matches2);
    update({
      location,
      matches: matches2,
      catch: {
        data: null,
        status: 404,
        statusText: "Not Found"
      },
      catchBoundaryId,
      transition: IDLE_TRANSITION
    });
  }
  async function handleActionSubmissionNavigation(location, submission, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "submitting",
        type: "actionSubmission",
        submission,
        location
      },
      nextMatches: matches2
    });
    let controller = new AbortController();
    pendingNavigationController = controller;
    let actionMatches = matches2;
    !isIndexRequestUrl2(createUrl(submission.action)) && actionMatches[matches2.length - 1].route.index && (actionMatches = actionMatches.slice(0, -1));
    let leafMatch = actionMatches.slice(-1)[0], result = await callAction(submission, leafMatch, controller.signal);
    if (controller.signal.aborted)
      return;
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: !0,
        type: "action",
        setCookie: result.value.setCookie
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    let catchVal, catchBoundaryId;
    isCatchResult(result) && ([catchVal, catchBoundaryId] = await findCatchAndBoundaryId([result], actionMatches, result) || []), update({
      transition: {
        state: "loading",
        type: "actionReload",
        submission,
        location
      },
      actionData: {
        [leafMatch.route.id]: result.value
      }
    }), await loadPageData(location, matches2, submission, leafMatch.route.id, result, catchVal, catchBoundaryId);
  }
  async function handleLoaderSubmissionNavigation(location, submission, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "submitting",
        type: "loaderSubmission",
        submission,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2, submission);
  }
  async function handleHashChange(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "normalLoad",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await Promise.resolve(), update({
      location,
      matches: matches2,
      transition: IDLE_TRANSITION
    });
  }
  async function handleLoad(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "normalLoad",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2);
  }
  async function handleLoaderRedirect(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "normalRedirect",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2);
  }
  async function handleLoaderSubmissionRedirect(location, matches2) {
    abortNormalNavigation(), invariant2(state.transition.type === "loaderSubmission", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    update({
      transition: {
        state: "loading",
        type: "loaderSubmissionRedirect",
        submission,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2, submission);
  }
  async function handleFetchActionRedirect(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "fetchActionRedirect",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2);
  }
  async function handleActionRedirect(location, matches2) {
    abortNormalNavigation(), invariant2(state.transition.type === "actionSubmission" || state.transition.type === "actionReload" || state.transition.type === "actionRedirect", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    update({
      transition: {
        state: "loading",
        type: "actionRedirect",
        submission,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2, submission);
  }
  function isHashChangeOnly(location) {
    return createHref(state.location) === createHref(location) && state.location.hash !== location.hash;
  }
  async function loadPageData(location, matches2, submission, submissionRouteId, actionResult, catchVal, catchBoundaryId) {
    let maybeActionErrorResult = actionResult && isErrorResult(actionResult) ? actionResult : void 0, maybeActionCatchResult = actionResult && isCatchResult(actionResult) ? actionResult : void 0, controller = new AbortController();
    pendingNavigationController = controller, navigationLoadId = ++incrementingLoadId;
    let results = await callLoaders(state, location, matches2, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, submissionRouteId, void 0, catchBoundaryId);
    if (controller.signal.aborted)
      return;
    let redirect2 = findRedirect(results);
    if (redirect2) {
      if (state.transition.type === "actionReload" || isActionRedirectLocation(location)) {
        let locationState = {
          isRedirect: !0,
          type: "action",
          setCookie: redirect2.setCookie
        };
        init.onRedirect(redirect2.location, locationState);
      } else if (state.transition.type === "loaderSubmission") {
        let locationState = {
          isRedirect: !0,
          type: "loaderSubmission",
          setCookie: redirect2.setCookie
        };
        init.onRedirect(redirect2.location, locationState);
      } else {
        var _location$state;
        let locationState = {
          isRedirect: !0,
          type: "loader",
          setCookie: redirect2.setCookie || ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.setCookie) === !0
        };
        init.onRedirect(redirect2.location, locationState);
      }
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, matches2, maybeActionErrorResult);
    [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, matches2, maybeActionErrorResult) || [catchVal, catchBoundaryId], markFetchRedirectsDone();
    let abortedIds = abortStaleFetchLoads(navigationLoadId);
    abortedIds && markFetchersDone(abortedIds), update({
      location,
      matches: matches2,
      error,
      errorBoundaryId,
      catch: catchVal,
      catchBoundaryId,
      loaderData: makeLoaderData(state, results, matches2),
      actionData: state.transition.type === "actionReload" ? state.actionData : void 0,
      transition: IDLE_TRANSITION,
      fetchers: abortedIds ? new Map(state.fetchers) : state.fetchers
    });
  }
  function abortNormalNavigation() {
    pendingNavigationController && pendingNavigationController.abort();
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant2(controller, `Expected fetch controller: ${key}`), controller.abort(), fetchControllers.delete(key);
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant2(fetcher, `Expected fetcher: ${key}`), fetcher.type === "actionRedirect" && (fetchRedirectIds.delete(key), doneKeys.push(key));
    }
    markFetchersDone(doneKeys);
  }
  function subscribe(subscriber) {
    return subscribers.add(subscriber), () => {
      subscribers.delete(subscriber);
    };
  }
  return {
    subscribe,
    send,
    getState,
    getFetcher,
    deleteFetcher,
    dispose,
    get _internalFetchControllers() {
      return fetchControllers;
    }
  };
}
async function callLoaders(state, location, matches, signal, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  let url = createUrl(createHref(location)), matchesToLoad = filterMatchesToLoad(state, location, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId);
  return Promise.all(matchesToLoad.map((match) => callLoader(match, url, signal)));
}
async function callLoader(match, url, signal) {
  invariant2(match.route.loader, `Expected loader for ${match.route.id}`);
  try {
    let {
      params
    } = match, value = await match.route.loader({
      params,
      url,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
async function callAction(submission, match, signal) {
  try {
    let value = await match.route.action({
      url: createUrl(submission.action),
      params: match.params,
      submission,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
function filterMatchesToLoad(state, location, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  var _location$state2;
  if (catchBoundaryId || submissionRouteId && (actionCatchResult || actionErrorResult)) {
    let foundProblematicRoute = !1;
    matches = matches.filter((match) => foundProblematicRoute ? !1 : match.route.id === submissionRouteId || match.route.id === catchBoundaryId ? (foundProblematicRoute = !0, !1) : !0);
  }
  let isNew = (match, index) => state.matches[index] ? match.route.id !== state.matches[index].route.id : !0, matchPathChanged = (match, index) => {
    var _state$matches$index$;
    return state.matches[index].pathname !== match.pathname || ((_state$matches$index$ = state.matches[index].route.path) === null || _state$matches$index$ === void 0 ? void 0 : _state$matches$index$.endsWith("*")) && state.matches[index].params["*"] !== match.params["*"];
  }, url = createUrl(createHref(location)), filterByRouteProps = (match, index) => {
    if (!match.route.loader)
      return !1;
    if (isNew(match, index) || matchPathChanged(match, index))
      return !0;
    if (match.route.shouldReload) {
      let prevUrl = createUrl(createHref(state.location));
      return match.route.shouldReload({
        prevUrl,
        url,
        submission,
        params: match.params
      });
    }
    return !0;
  };
  return state.matches.length === 1 ? matches.filter((match) => !!match.route.loader) : (fetcher == null ? void 0 : fetcher.type) === "actionReload" || state.transition.type === "actionReload" || state.transition.type === "actionRedirect" || state.transition.type === "fetchActionRedirect" || createHref(url) === createHref(state.location) || url.searchParams.toString() !== state.location.search.substring(1) || (_location$state2 = location.state) !== null && _location$state2 !== void 0 && _location$state2.setCookie ? matches.filter(filterByRouteProps) : matches.filter((match, index, arr) => {
    var _location$state3;
    return (actionErrorResult || actionCatchResult) && arr.length - 1 === index ? !1 : match.route.loader && (isNew(match, index) || matchPathChanged(match, index) || ((_location$state3 = location.state) === null || _location$state3 === void 0 ? void 0 : _location$state3.setCookie));
  });
}
function isRedirectResult(result) {
  return result.value instanceof TransitionRedirect;
}
function createHref(location) {
  return location.pathname + location.search;
}
function findRedirect(results) {
  for (let result of results)
    if (isRedirectResult(result))
      return result.value;
  return null;
}
async function findCatchAndBoundaryId(results, matches, actionCatchResult) {
  let loaderCatchResult;
  for (let result of results)
    if (isCatchResult(result)) {
      loaderCatchResult = result;
      break;
    }
  let extractCatchData = async (res) => ({
    status: res.status,
    statusText: res.statusText,
    data: res.data
  });
  if (actionCatchResult && loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(actionCatchResult.value), boundaryId];
  }
  if (loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(loaderCatchResult.value), boundaryId];
  }
  return null;
}
function findErrorAndBoundaryId(results, matches, actionErrorResult) {
  let loaderErrorResult;
  for (let result of results)
    if (isErrorResult(result)) {
      loaderErrorResult = result;
      break;
    }
  if (actionErrorResult && loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (actionErrorResult) {
    let boundaryId = findNearestBoundary(actionErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [loaderErrorResult.value, boundaryId];
  }
  return [void 0, void 0];
}
function findNearestCatchBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches)
    if (match.route.CatchBoundary && (nearestBoundaryId = match.route.id), match === matchWithError)
      break;
  return nearestBoundaryId;
}
function findNearestBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches)
    if (match.route.ErrorBoundary && (nearestBoundaryId = match.route.id), match === matchWithError)
      break;
  return nearestBoundaryId;
}
function makeLoaderData(state, results, matches) {
  let newData = {};
  for (let {
    match,
    value
  } of results)
    newData[match.route.id] = value;
  let loaderData = {};
  for (let {
    route
  } of matches) {
    let value = newData[route.id] !== void 0 ? newData[route.id] : state.loaderData[route.id];
    value !== void 0 && (loaderData[route.id] = value);
  }
  return loaderData;
}
function isCatchResult(result) {
  return result.value instanceof CatchValue;
}
function isErrorResult(result) {
  return result.value instanceof Error;
}
function createUrl(href) {
  return new URL(href, window.location.origin);
}

// node_modules/@remix-run/react/dist/esm/routes.js
function createClientRoute(entryRoute, routeModulesCache, Component) {
  return {
    caseSensitive: !!entryRoute.caseSensitive,
    element: /* @__PURE__ */ React.createElement(Component, {
      id: entryRoute.id
    }),
    id: entryRoute.id,
    path: entryRoute.path,
    index: entryRoute.index,
    module: entryRoute.module,
    loader: createLoader(entryRoute, routeModulesCache),
    action: createAction(entryRoute, routeModulesCache),
    shouldReload: createShouldReload(entryRoute, routeModulesCache),
    ErrorBoundary: entryRoute.hasErrorBoundary,
    CatchBoundary: entryRoute.hasCatchBoundary,
    hasLoader: entryRoute.hasLoader
  };
}
function createClientRoutes(routeManifest, routeModulesCache, Component, parentId) {
  return Object.keys(routeManifest).filter((key) => routeManifest[key].parentId === parentId).map((key) => {
    let route = createClientRoute(routeManifest[key], routeModulesCache, Component), children = createClientRoutes(routeManifest, routeModulesCache, Component, route.id);
    return children.length > 0 && (route.children = children), route;
  });
}
function createShouldReload(route, routeModules) {
  return (arg) => {
    let module = routeModules[route.id];
    return invariant2(module, `Expected route module to be loaded for ${route.id}`), module.unstable_shouldReload ? module.unstable_shouldReload(arg) : !0;
  };
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  return await prefetchStyleLinks(routeModule), routeModule;
}
function createLoader(route, routeModules) {
  return async ({
    url,
    signal,
    submission
  }) => {
    if (route.hasLoader) {
      let [result] = await Promise.all([fetchData(url, route.id, signal, submission), loadRouteModuleWithBlockingLinks(route, routeModules)]);
      if (result instanceof Error)
        throw result;
      let redirect2 = await checkRedirect(result);
      if (redirect2)
        return redirect2;
      if (isCatchResponse(result))
        throw new CatchValue(result.status, result.statusText, await extractData(result));
      return extractData(result);
    } else
      await loadRouteModuleWithBlockingLinks(route, routeModules);
  };
}
function createAction(route, routeModules) {
  return async ({
    url,
    signal,
    submission
  }) => {
    route.hasAction || console.error(`Route "${route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);
    let result = await fetchData(url, route.id, signal, submission);
    if (result instanceof Error)
      throw result;
    let redirect2 = await checkRedirect(result);
    if (redirect2)
      return redirect2;
    if (await loadRouteModuleWithBlockingLinks(route, routeModules), isCatchResponse(result))
      throw new CatchValue(result.status, result.statusText, await extractData(result));
    return extractData(result);
  };
}
async function checkRedirect(response) {
  if (isRedirectResponse(response)) {
    let url = new URL(response.headers.get("X-Remix-Redirect"), window.location.origin);
    if (url.origin !== window.location.origin)
      await new Promise(() => {
        window.location.replace(url.href);
      });
    else
      return new TransitionRedirect(url.pathname + url.search + url.hash, response.headers.get("X-Remix-Revalidate") !== null);
  }
  return null;
}

// node_modules/@remix-run/react/dist/esm/components.js
var RemixEntryContext = /* @__PURE__ */ React2.createContext(void 0);
function useRemixEntryContext() {
  let context = React2.useContext(RemixEntryContext);
  return invariant2(context, "You must render this element inside a <Remix> element"), context;
}
function RemixEntry({
  context: entryContext,
  action: action2,
  location: historyLocation,
  navigator: _navigator,
  static: staticProp = !1
}) {
  let {
    manifest,
    routeData: documentLoaderData,
    actionData: documentActionData,
    routeModules,
    serverHandoffString,
    appState: entryComponentDidCatchEmulator
  } = entryContext, clientRoutes = React2.useMemo(() => createClientRoutes(manifest.routes, routeModules, RemixRoute), [manifest, routeModules]), [clientState, setClientState] = React2.useState(entryComponentDidCatchEmulator), [transitionManager] = React2.useState(() => createTransitionManager({
    routes: clientRoutes,
    actionData: documentActionData,
    loaderData: documentLoaderData,
    location: historyLocation,
    catch: entryComponentDidCatchEmulator.catch,
    catchBoundaryId: entryComponentDidCatchEmulator.catchBoundaryRouteId,
    onRedirect: _navigator.replace
  }));
  React2.useEffect(() => {
    let subscriber = (state) => {
      setClientState({
        catch: state.catch,
        error: state.error,
        catchBoundaryRouteId: state.catchBoundaryId,
        loaderBoundaryRouteId: state.errorBoundaryId,
        renderBoundaryRouteId: null,
        trackBoundaries: !1,
        trackCatchBoundaries: !1
      });
    };
    return transitionManager.subscribe(subscriber);
  }, [transitionManager]);
  let navigator = React2.useMemo(() => ({
    ..._navigator,
    push: (to, state) => transitionManager.getState().transition.state !== "idle" ? _navigator.replace(to, state) : _navigator.push(to, state)
  }), [_navigator, transitionManager]), {
    location,
    matches,
    loaderData,
    actionData
  } = transitionManager.getState();
  React2.useEffect(() => {
    let {
      location: location2
    } = transitionManager.getState();
    historyLocation !== location2 && transitionManager.send({
      type: "navigation",
      location: historyLocation,
      submission: consumeNextNavigationSubmission(),
      action: action2
    });
  }, [transitionManager, historyLocation, action2]);
  let ssrErrorBeforeRoutesRendered = clientState.error && clientState.renderBoundaryRouteId === null && clientState.loaderBoundaryRouteId === null ? deserializeError(clientState.error) : void 0, ssrCatchBeforeRoutesRendered = clientState.catch && clientState.catchBoundaryRouteId === null ? clientState.catch : void 0;
  return /* @__PURE__ */ React2.createElement(RemixEntryContext.Provider, {
    value: {
      matches,
      manifest,
      appState: clientState,
      routeModules,
      serverHandoffString,
      clientRoutes,
      routeData: loaderData,
      actionData,
      transitionManager
    }
  }, /* @__PURE__ */ React2.createElement(RemixErrorBoundary, {
    location,
    component: RemixRootDefaultErrorBoundary,
    error: ssrErrorBeforeRoutesRendered
  }, /* @__PURE__ */ React2.createElement(RemixCatchBoundary, {
    location,
    component: RemixRootDefaultCatchBoundary,
    catch: ssrCatchBeforeRoutesRendered
  }, /* @__PURE__ */ React2.createElement(Router, {
    navigationType: action2,
    location,
    navigator,
    static: staticProp
  }, /* @__PURE__ */ React2.createElement(Routes2, null)))));
}
function deserializeError(data) {
  let error = new Error(data.message);
  return error.stack = data.stack, error;
}
function Routes2() {
  let {
    clientRoutes
  } = useRemixEntryContext();
  return useRoutes(clientRoutes) || clientRoutes[0].element;
}
var RemixRouteContext = /* @__PURE__ */ React2.createContext(void 0);
function useRemixRouteContext() {
  let context = React2.useContext(RemixRouteContext);
  return invariant2(context, "You must render this element in a remix route element"), context;
}
function DefaultRouteComponent({
  id
}) {
  throw new Error(`Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
}
function RemixRoute({
  id
}) {
  let location = useLocation(), {
    routeData,
    routeModules,
    appState
  } = useRemixEntryContext();
  invariant2(routeData, `Cannot initialize 'routeData'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`), invariant2(routeModules, `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);
  let data = routeData[id], {
    default: Component,
    CatchBoundary: CatchBoundary2,
    ErrorBoundary
  } = routeModules[id], element = Component ? /* @__PURE__ */ React2.createElement(Component, null) : /* @__PURE__ */ React2.createElement(DefaultRouteComponent, {
    id
  }), context = {
    data,
    id
  };
  if (CatchBoundary2) {
    let maybeServerCaught = appState.catch && appState.catchBoundaryRouteId === id ? appState.catch : void 0;
    appState.trackCatchBoundaries && (appState.catchBoundaryRouteId = id), context = maybeServerCaught ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in a catch boundary.");
      }
    } : {
      id,
      data
    }, element = /* @__PURE__ */ React2.createElement(RemixCatchBoundary, {
      location,
      component: CatchBoundary2,
      catch: maybeServerCaught
    }, element);
  }
  if (ErrorBoundary) {
    let maybeServerRenderError = appState.error && (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id) ? deserializeError(appState.error) : void 0;
    appState.trackBoundaries && (appState.renderBoundaryRouteId = id), context = maybeServerRenderError ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in an error boundary.");
      }
    } : {
      id,
      data
    }, element = /* @__PURE__ */ React2.createElement(RemixErrorBoundary, {
      location,
      component: ErrorBoundary,
      error: maybeServerRenderError
    }, element);
  }
  return /* @__PURE__ */ React2.createElement(RemixRouteContext.Provider, {
    value: context
  }, element);
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React2.useState(!1), [shouldPrefetch, setShouldPrefetch] = React2.useState(!1), {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  React2.useEffect(() => {
    prefetch === "render" && setShouldPrefetch(!0);
  }, [prefetch]);
  let setIntent = () => {
    prefetch === "intent" && setMaybePrefetch(!0);
  }, cancelIntent = () => {
    prefetch === "intent" && (setMaybePrefetch(!1), setShouldPrefetch(!1));
  };
  return React2.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(!0);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]), [shouldPrefetch, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
var NavLink2 = /* @__PURE__ */ React2.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let href = useHref(to), [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(NavLink, _extends2({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React2.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
NavLink2.displayName = "NavLink";
var Link2 = /* @__PURE__ */ React2.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let href = useHref(to), [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Link, _extends2({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React2.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
Link2.displayName = "Link";
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event), event.defaultPrevented || ourHandler(event);
  };
}
function Links() {
  let {
    matches,
    routeModules,
    manifest
  } = useRemixEntryContext(), links2 = React2.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, links2.map((link) => {
    if (isPageLinkDescriptor(link))
      return /* @__PURE__ */ React2.createElement(PrefetchPageLinks, _extends2({
        key: link.page
      }, link));
    let imageSrcSet = null;
    return "useId" in React2 ? (link.imagesrcset && (link.imageSrcSet = imageSrcSet = link.imagesrcset, delete link.imagesrcset), link.imagesizes && (link.imageSizes = link.imagesizes, delete link.imagesizes)) : (link.imageSrcSet && (link.imagesrcset = imageSrcSet = link.imageSrcSet, delete link.imageSrcSet), link.imageSizes && (link.imagesizes = link.imageSizes, delete link.imageSizes)), /* @__PURE__ */ React2.createElement("link", _extends2({
      key: link.rel + (link.href || "") + (imageSrcSet || "")
    }, link));
  }));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let {
    clientRoutes
  } = useRemixEntryContext(), matches = React2.useMemo(() => matchClientRoutes(clientRoutes, page), [clientRoutes, page]);
  return matches ? /* @__PURE__ */ React2.createElement(PrefetchPageLinksImpl, _extends2({
    page,
    matches
  }, dataLinkProps)) : (console.warn(`Tried to prefetch ${page} but no routes matched.`), null);
}
function usePrefetchedStylesheets(matches) {
  let {
    routeModules
  } = useRemixEntryContext(), [styleLinks, setStyleLinks] = React2.useState([]);
  return React2.useEffect(() => {
    let interrupted = !1;
    return getStylesheetPrefetchLinks(matches, routeModules).then((links2) => {
      interrupted || setStyleLinks(links2);
    }), () => {
      interrupted = !0;
    };
  }, [matches, routeModules]), styleLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation(), {
    matches,
    manifest
  } = useRemixEntryContext(), newMatchesForData = React2.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location, "data"), [page, nextMatches, matches, location]), newMatchesForAssets = React2.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location, "assets"), [page, nextMatches, matches, location]), dataHrefs = React2.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]), moduleHrefs = React2.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]), styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React2.createElement("link", _extends2({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React2.createElement("link", _extends2({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React2.createElement("link", _extends2({
    key: link.href
  }, link))));
}
function Meta() {
  let {
    matches,
    routeData,
    routeModules
  } = useRemixEntryContext(), location = useLocation(), meta7 = {}, parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id, data = routeData[routeId], params = match.params, routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta == "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location
      }) : routeModule.meta;
      Object.assign(meta7, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, Object.entries(meta7).map(([name, value]) => {
    if (!value)
      return null;
    if (["charset", "charSet"].includes(name))
      return /* @__PURE__ */ React2.createElement("meta", {
        key: "charset",
        charSet: value
      });
    if (name === "title")
      return /* @__PURE__ */ React2.createElement("title", {
        key: "title"
      }, String(value));
    let isOpenGraphTag = name.startsWith("og:");
    return [value].flat().map((content) => isOpenGraphTag ? /* @__PURE__ */ React2.createElement("meta", {
      property: name,
      content,
      key: name + content
    }) : typeof content == "string" ? /* @__PURE__ */ React2.createElement("meta", {
      name,
      content,
      key: name + content
    }) : /* @__PURE__ */ React2.createElement("meta", _extends2({
      key: name + JSON.stringify(content)
    }, content)));
  }));
}
var isHydrated = !1;
function Scripts(props) {
  let {
    manifest,
    matches,
    pendingLocation,
    clientRoutes,
    serverHandoffString
  } = useRemixEntryContext();
  React2.useEffect(() => {
    isHydrated = !0;
  }, []);
  let initialScripts = React2.useMemo(() => {
    let contextScript = serverHandoffString ? `window.__remixContext = ${serverHandoffString};` : "", routeModulesScript = `${matches.map((match, index) => `import ${JSON.stringify(manifest.url)};
import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("script", _extends2({}, props, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: createHtml(contextScript),
      type: void 0
    })), /* @__PURE__ */ React2.createElement("script", _extends2({}, props, {
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module",
      async: !0
    })));
  }, []), nextMatches = React2.useMemo(() => {
    if (pendingLocation) {
      let matches2 = matchClientRoutes(clientRoutes, pendingLocation);
      return invariant2(matches2, `No routes match path "${pendingLocation.pathname}"`), matches2;
    }
    return [];
  }, [pendingLocation, clientRoutes]), routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1), preloads = manifest.entry.imports.concat(routePreloads);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("link", {
    rel: "modulepreload",
    href: manifest.entry.module,
    crossOrigin: props.crossOrigin
  }), dedupe2(preloads).map((path) => /* @__PURE__ */ React2.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), isHydrated ? null : initialScripts);
}
function dedupe2(array) {
  return [...new Set(array)];
}
var Form = /* @__PURE__ */ React2.forwardRef((props, ref) => /* @__PURE__ */ React2.createElement(FormImpl, _extends2({}, props, {
  ref
})));
Form.displayName = "Form";
var FormImpl = /* @__PURE__ */ React2.forwardRef(({
  reloadDocument = !1,
  replace = !1,
  method = "get",
  action: action2,
  encType = "application/x-www-form-urlencoded",
  fetchKey,
  onSubmit,
  ...props
}, forwardedRef) => {
  let submit = useSubmitImpl(fetchKey), formMethod = method.toLowerCase() === "get" ? "get" : "post", formAction = useFormAction(action2);
  return /* @__PURE__ */ React2.createElement("form", _extends2({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    encType,
    onSubmit: reloadDocument ? void 0 : (event) => {
      if (onSubmit && onSubmit(event), event.defaultPrevented)
        return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      submit(submitter || event.currentTarget, {
        method,
        replace
      });
    }
  }, props));
});
FormImpl.displayName = "FormImpl";
function useFormAction(action2, method = "get") {
  let {
    id
  } = useRemixRouteContext(), resolvedPath = useResolvedPath(action2 ?? "."), location = useLocation(), {
    search,
    hash
  } = resolvedPath, isIndexRoute = id.endsWith("/index");
  if (action2 == null && (search = location.search, hash = location.hash, isIndexRoute)) {
    let params = new URLSearchParams(search);
    params.delete("index"), search = params.toString() ? `?${params.toString()}` : "";
  }
  return (action2 == null || action2 === ".") && isIndexRoute && (search = search ? search.replace(/^\?/, "?index&") : "?index"), createPath({
    pathname: resolvedPath.pathname,
    search,
    hash
  });
}
function useSubmit() {
  return useSubmitImpl();
}
var defaultMethod = "get", defaultEncType = "application/x-www-form-urlencoded";
function useSubmitImpl(key) {
  let navigate = useNavigate(), defaultAction = useFormAction(), {
    transitionManager
  } = useRemixEntryContext();
  return React2.useCallback((target, options = {}) => {
    let method, action2, encType, formData;
    if (isFormElement(target)) {
      let submissionTrigger = options.submissionTrigger;
      method = options.method || target.getAttribute("method") || defaultMethod, action2 = options.action || target.getAttribute("action") || defaultAction, encType = options.encType || target.getAttribute("enctype") || defaultEncType, formData = new FormData(target), submissionTrigger && submissionTrigger.name && formData.append(submissionTrigger.name, submissionTrigger.value);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null)
        throw new Error("Cannot submit a <button> without a <form>");
      method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod, action2 = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction, encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType, formData = new FormData(form), target.name && formData.append(target.name, target.value);
    } else {
      if (isHtmlElement(target))
        throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      if (method = options.method || "get", action2 = options.action || defaultAction, encType = options.encType || "application/x-www-form-urlencoded", target instanceof FormData)
        formData = target;
      else if (formData = new FormData(), target instanceof URLSearchParams)
        for (let [name, value] of target)
          formData.append(name, value);
      else if (target != null)
        for (let name of Object.keys(target))
          formData.append(name, target[name]);
    }
    if (typeof document > "u")
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    let {
      protocol,
      host
    } = window.location, url = new URL(action2, `${protocol}//${host}`);
    if (method.toLowerCase() === "get") {
      let params = new URLSearchParams(), hasParams = !1;
      for (let [name, value] of formData)
        if (typeof value == "string")
          hasParams = !0, params.append(name, value);
        else
          throw new Error("Cannot submit binary form data using GET");
      let isIndexAction = new URLSearchParams(url.search).getAll("index").some((v) => v === "");
      key != null && isIndexAction && (hasParams = !0, params.append("index", "")), url.search = hasParams ? `?${params.toString()}` : "";
    }
    let submission = {
      formData,
      action: url.pathname + url.search,
      method: method.toUpperCase(),
      encType,
      key: Math.random().toString(36).substr(2, 8)
    };
    key ? transitionManager.send({
      type: "fetcher",
      href: submission.action,
      submission,
      key
    }) : (setNextNavigationSubmission(submission), navigate(url.pathname + url.search, {
      replace: options.replace
    }));
  }, [defaultAction, key, navigate, transitionManager]);
}
var nextNavigationSubmission;
function setNextNavigationSubmission(submission) {
  nextNavigationSubmission = submission;
}
function consumeNextNavigationSubmission() {
  let submission = nextNavigationSubmission;
  return nextNavigationSubmission = void 0, submission;
}
function isHtmlElement(object) {
  return object != null && typeof object.tagName == "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function useBeforeUnload(callback) {
  React2.useEffect(() => (window.addEventListener("beforeunload", callback), () => {
    window.removeEventListener("beforeunload", callback);
  }), [callback]);
}
function useLoaderData() {
  return useRemixRouteContext().data;
}
function useTransition() {
  let {
    transitionManager
  } = useRemixEntryContext();
  return transitionManager.getState().transition;
}
function createFetcherForm(fetchKey) {
  let FetcherForm = /* @__PURE__ */ React2.forwardRef((props, ref) => /* @__PURE__ */ React2.createElement(FormImpl, _extends2({}, props, {
    ref,
    fetchKey
  })));
  return FetcherForm.displayName = "fetcher.Form", FetcherForm;
}
var fetcherId = 0;
function useFetcher() {
  let {
    transitionManager
  } = useRemixEntryContext(), [key] = React2.useState(() => String(++fetcherId)), [Form2] = React2.useState(() => createFetcherForm(key)), [load] = React2.useState(() => (href) => {
    transitionManager.send({
      type: "fetcher",
      href,
      key
    });
  }), submit = useSubmitImpl(key), fetcher = transitionManager.getFetcher(key), fetcherWithComponents = React2.useMemo(() => ({
    Form: Form2,
    submit,
    load,
    ...fetcher
  }), [fetcher, Form2, submit, load]);
  return React2.useEffect(() => () => transitionManager.deleteFetcher(key), [transitionManager, key]), fetcherWithComponents;
}
var LiveReload = function({
  port = Number(8002),
  nonce = void 0
}) {
  let js = String.raw;
  return /* @__PURE__ */ React2.createElement("script", {
    nonce,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: js`
                function remixLiveReloadConnect(config) {
                  let protocol = location.protocol === "https:" ? "wss:" : "ws:";
                  let host = location.hostname;
                  let socketPath = protocol + "//" + host + ":" + ${String(port)} + "/socket";

                  let ws = new WebSocket(socketPath);
                  ws.onmessage = (message) => {
                    let event = JSON.parse(message.data);
                    if (event.type === "LOG") {
                      console.log(event.message);
                    }
                    if (event.type === "RELOAD") {
                      console.log("💿 Reloading window ...");
                      window.location.reload();
                    }
                  };
                  ws.onopen = () => {
                    if (config && typeof config.onOpen === "function") {
                      config.onOpen();
                    }
                  };
                  ws.onclose = (error) => {
                    console.log("Remix dev asset server web socket closed. Reconnecting...");
                    setTimeout(
                      () =>
                        remixLiveReloadConnect({
                          onOpen: () => window.location.reload(),
                        }),
                      1000
                    );
                  };
                  ws.onerror = (error) => {
                    console.log("Remix dev asset server web socket error:");
                    console.error(error);
                  };
                }
                remixLiveReloadConnect();
              `
    }
  });
};

// node_modules/@remix-run/react/dist/esm/index.js
init_react_router_dom();

// node_modules/@remix-run/react/dist/esm/scroll-restoration.js
var React3 = __toESM(require_react());
init_react_router_dom();
var STORAGE_KEY = "positions", positions = {};
if (typeof document < "u") {
  let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
  sessionPositions && (positions = JSON.parse(sessionPositions));
}
function ScrollRestoration({
  nonce = void 0
}) {
  useScrollRestoration(), React3.useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []), useBeforeUnload(React3.useCallback(() => {
    window.history.scrollRestoration = "auto";
  }, []));
  let restoreScroll = ((STORAGE_KEY2) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key
      }, "");
    }
    try {
      let storedY = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}")[window.history.state.key];
      typeof storedY == "number" && window.scrollTo(0, storedY);
    } catch (error) {
      console.error(error), sessionStorage.removeItem(STORAGE_KEY2);
    }
  }).toString();
  return /* @__PURE__ */ React3.createElement("script", {
    nonce,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)})`
    }
  });
}
var hydrated = !1;
function useScrollRestoration() {
  let location = useLocation(), transition = useTransition(), wasSubmissionRef = React3.useRef(!1);
  React3.useEffect(() => {
    transition.submission && (wasSubmissionRef.current = !0);
  }, [transition]), React3.useEffect(() => {
    transition.location && (positions[location.key] = window.scrollY);
  }, [transition, location]), useBeforeUnload(React3.useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  }, [])), typeof document < "u" && React3.useLayoutEffect(() => {
    if (!hydrated) {
      hydrated = !0;
      return;
    }
    let y = positions[location.key];
    if (y != null) {
      window.scrollTo(0, y);
      return;
    }
    if (location.hash) {
      let el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    if (wasSubmissionRef.current === !0) {
      wasSubmissionRef.current = !1;
      return;
    }
    window.scrollTo(0, 0);
  }, [location]), React3.useEffect(() => {
    transition.submission && (wasSubmissionRef.current = !0);
  }, [transition]);
}

// node_modules/@remix-run/react/dist/esm/server.js
init_history();
var React4 = __toESM(require_react());
function RemixServer({
  context,
  url
}) {
  typeof url == "string" && (url = new URL(url));
  let location = {
    pathname: url.pathname,
    search: url.search,
    hash: "",
    state: null,
    key: "default"
  }, staticNavigator = {
    createHref(to) {
      return typeof to == "string" ? to : createPath(to);
    },
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
    },
    forward() {
      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
    },
    block() {
      throw new Error("You cannot use navigator.block() on the server because it is a stateless environment.");
    }
  };
  return /* @__PURE__ */ React4.createElement(RemixEntry, {
    context,
    action: Action.Pop,
    location,
    navigator: staticNavigator,
    static: !0
  });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server2.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/global.css
var global_default = "/build/_assets/global-YSILUUDL.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-TXEWBZYH.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900&display=swap"
  }
], meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "no",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "flex flex-col h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/sitemap[.]xml.ts
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader
});

// app/utils/misc.ts
function typedBoolean(value) {
  return Boolean(value);
}
function getDomainUrl(request) {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host)
    throw new Error("Could not determine domain URL.");
  return `${host.includes("localhost") ? "http" : "https"}://${host}`;
}
function removeTrailingSlash(s) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}
function capitalize(value) {
  return value.substring(0, 1).toUpperCase() + value.substring(1);
}
function formatPhoneNumber(value) {
  return value.replace(/^(\d{3})(\d{2})(\d{3})$/, "$1 $2 $3");
}
function isEqual(entry1, entry2) {
  if (typeof entry1 != "object" || typeof entry2 != "object" || entry1 === null || entry2 === null)
    return typeof entry1 == typeof entry2 && entry1 === entry2;
  let fieldsIn1 = Object.entries(entry1), keysIn2 = Object.keys(entry2);
  return fieldsIn1.length !== keysIn2.length ? !1 : fieldsIn1.every(([key1, value1]) => {
    if (!keysIn2.includes(key1))
      return !1;
    let value2 = entry2[key1];
    return isEqual(value1, value2);
  });
}
function classNames(...args) {
  let resolved = [];
  for (let arg of args)
    typeof arg == "number" || typeof arg == "string" ? resolved.push(arg) : Array.isArray(arg) ? resolved.push(classNames(...arg)) : typeof arg == "object" && resolved.push(...Object.keys(arg).filter((it) => arg[it]));
  return resolved.filter(typedBoolean).join(" ");
}
function uniqueBy(list, selector) {
  let s = /* @__PURE__ */ new Set(), result = [];
  return list.forEach((x) => {
    let key = selector(x);
    s.has(key) || (result.push(x), s.add(key));
  }), result;
}
function shiftedBy(arr, i, direction = "left") {
  let _arr = arr.slice(), n = i % arr.length, taken = _arr.splice(direction === "left" ? 0 : arr.length - n, n);
  return direction === "left" ? _arr.push(...taken) : _arr.unshift(...taken), _arr;
}

// app/utils/sitemap.server.ts
async function getSiteMapEntries(request, routeModules, manifest) {
  let rawSitemapEntries = (await Promise.all(
    Object.entries(routeModules).map(async ([id, mod]) => {
      if (id === "root" || id.startsWith("routes/test"))
        return;
      let handle3 = mod.handle;
      if (handle3 != null && handle3.getSitemapEntries)
        return handle3.getSitemapEntries(request);
      if (!("default" in mod))
        return;
      let manifestEntry = manifest.routes[id];
      if (!manifestEntry) {
        console.warn(`Could not find a manifest entry for ${id}`);
        return;
      }
      let parentId = manifestEntry.parentId, parent = parentId ? manifest.routes[parentId] : null, path;
      if (manifestEntry.path)
        path = removeTrailingSlash(manifestEntry.path);
      else if (manifestEntry.index)
        path = "";
      else
        return;
      for (; parent; )
        path = `${parent.path ? removeTrailingSlash(parent.path) : ""}/${path}`, parentId = parent.parentId, parent = parentId ? manifest.routes[parentId] : null;
      return path.startsWith("//") && (path = path.slice(0, 1)), path.includes(":") ? void 0 : { route: removeTrailingSlash(path) };
    })
  )).flat().filter(typedBoolean), sitemapEntries = [];
  for (let entry2 of rawSitemapEntries) {
    let existingEntryForRoute = sitemapEntries.find(
      (e) => e.route === entry2.route
    );
    existingEntryForRoute ? isEqual(existingEntryForRoute, entry2) || console.warn(
      `Duplicate route for ${entry2.route} with different sitemap data`,
      { entry: entry2, existingEntryForRoute }
    ) : sitemapEntries.push(entry2);
  }
  return sitemapEntries;
}

// app/routes/sitemap[.]xml.ts
function toXmlTag([key, value]) {
  return value ? `<${key}>${value}</${key}>` : "";
}
function toXmlEntry(domainUrl) {
  return ({ route, ...entry2 }) => {
    let tags = Object.entries(entry2).map(toXmlTag);
    return `<url><loc>${domainUrl}${route}</loc>${tags.join("")}</url>`;
  };
}
var loader = async ({ request, context }) => {
  let domainUrl = getDomainUrl(request), sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
  ${(await getSiteMapEntries(
    request,
    context.routeModules,
    context.manifest
  )).map(toXmlEntry(domainUrl)).join("")}
</urlset>
  `.trim();
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(sitemap))
    }
  });
};

// app/routes/api.contact.tsx
var api_contact_exports = {};
__export(api_contact_exports, {
  action: () => action
});
init_esm();
function validate(formData) {
  let errors = {}, name = formData.get("name");
  (typeof name != "string" || name.trim().length === 0) && (errors.name = "Navn m\xE5 v\xE6re satt.");
  let phoneNumber = formData.get("phoneNumber");
  if (typeof phoneNumber != "string" || phoneNumber.trim().length === 0)
    errors.phoneNumber = "Vi trenger et gyldig telefonnummer.";
  else {
    let trimmedPhoneNumber = phoneNumber.replace(/[- +]/g, "");
    /^\d+$/.test(trimmedPhoneNumber) || (errors.phoneNumber = "Vi trenger et gyldig telefonnummer.");
  }
  let email = formData.get("email");
  if (typeof email != "string" || email.trim().length === 0)
    errors.email = "Vi trenger en gyldig e-post.";
  else {
    let parts = email.split("@");
    (parts.length < 2 || parts.some((p) => p.length === 0)) && (errors.email = "Vi trenger en gyldig e-post.");
  }
  return errors;
}
var action = async ({ request }) => {
  let formData = await request.formData(), errors = validate(formData);
  return Object.keys(errors).length > 0 ? json({ errors }, 400) : json(null, 201);
};

// app/routes/__layout.tsx
var layout_exports = {};
__export(layout_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => Layout,
  loader: () => loader2,
  meta: () => meta2,
  unstable_shouldReload: () => unstable_shouldReload
});
init_esm();

// app/utils/constants.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), contactInfo = {
  email: "post@capraconsulting.no",
  phoneNumber: "45832632",
  companyAddress: {
    name: "Capra Consulting AS",
    street: "Stenersgata 2",
    postalCode: "0184",
    city: "Oslo"
  }
}, menuItems = [
  { title: "Dette kan vi", href: "/dette-kan-vi" },
  { title: "Dette har vi gjort", href: "/dette-har-vi-gjort" },
  { title: "Blogg", href: "/blogg" },
  { title: "Mentorprogram", href: "/mentor" },
  { title: "Bli en av oss", href: "/bli-en-av-oss" },
  { title: "Partnere", href: "/partnere" },
  { title: "Om oss", href: "/om-oss" },
  { title: "Ansatte", href: "/ansatte" }
], externalLinks = {
  mailto: `mailto:${contactInfo.email}`,
  callUs: `tel:+47${contactInfo.phoneNumber}`,
  facebook: "https://facebook.com/capraconsulting",
  instagram: "https://instagram.com/capraconsulting",
  linkedIn: "https://linkedin.com/company/capraconsulting",
  youTube: "https://youtube.com/channel/UCL8VXozo5_A2zSMlQ05sCSw",
  gitHub: "https://github.com/capraconsulting",
  googleMaps: "https://google.com/maps/place/Capra+Consulting+AS/@59.9130579,10.7490986,17z/data=!3m1!4b1!4m5!3m4!1s0x46416e89e8977fa5:0x2cb9207380d3722e!8m2!3d59.9130579!4d10.7512872"
}, socialPlatforms = [
  "facebook",
  "instagram",
  "linkedIn",
  "youTube",
  "gitHub"
], socialIcons = {
  facebook: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
    d: "M3.104 22C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104H15.8v-7.745h2.6l.389-3.019h-2.99V9.31c0-.873.243-1.469 1.497-1.469h1.598v-2.7a21.367 21.367 0 00-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.226h-2.607v3.019h2.607V22h-9.58z"
  }, void 0, !1, {
    fileName: "app/utils/constants.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this),
  instagram: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: "white"
      }, void 0, !1, {
        fileName: "app/utils/constants.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M16 11.37a4 4 0 11-7.914 1.173A4 4 0 0116 11.37zM17.5 6.5h.01",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: "#fd414d",
        fill: "#fd414d"
      }, void 0, !1, {
        fileName: "app/utils/constants.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/utils/constants.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this),
  linkedIn: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.476 2h17.043c.816 0 1.479.646 1.479 1.442v17.114c0 .796-.663 1.443-1.48 1.443H3.477c-.814 0-1.476-.647-1.476-1.443V3.442C2 2.646 2.662 2 3.476 2zm12.6 17.041h2.966v-5.234c0-2.57-.555-4.546-3.558-4.546-1.443 0-2.411.79-2.807 1.541h-.04V9.497H9.79v9.544h2.965v-4.72c0-1.245.236-2.452 1.78-2.452 1.521 0 1.54 1.424 1.54 2.53v4.642zM4.729 6.474a1.72 1.72 0 103.439 0 1.72 1.72 0 00-3.439 0zM7.931 19.04H4.964V9.497H7.93v9.544z"
  }, void 0, !1, {
    fileName: "app/utils/constants.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this),
  youTube: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
    d: "M10 15V9l6 3-6 3zm11.8-6.98s-.196-1.372-.795-1.976c-.76-.793-1.613-.796-2.004-.842C16.202 5 12.004 5 12.004 5h-.008s-4.199 0-6.997.202c-.391.046-1.243.05-2.005.842C2.395 6.648 2.2 8.02 2.2 8.02S2 9.63 2 11.24v1.51c0 1.612.2 3.222.2 3.222s.195 1.372.794 1.976c.762.793 1.761.768 2.206.85C6.8 18.954 12 19 12 19s4.203-.006 7.001-.208c.39-.046 1.243-.05 2.004-.843.6-.604.795-1.976.795-1.976s.2-1.61.2-3.221v-1.51c0-1.611-.2-3.222-.2-3.222z"
  }, void 0, !1, {
    fileName: "app/utils/constants.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this),
  gitHub: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
    d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
  }, void 0, !1, {
    fileName: "app/utils/constants.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this)
};

// app/components/footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), FooterModule = ({ title, children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
      className: "uppercase text-white font-bold text-lg mb-0.5",
      children: title
    }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this),
    children
  ]
}, void 0, !0, {
  fileName: "app/components/footer.tsx",
  lineNumber: 20,
  columnNumber: 3
}, this), ICON_SIZE = 24, FooterSocialIcon = ({ platform }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterLink, {
  href: externalLinks[platform],
  external: !0,
  title: capitalize(platform),
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: ICON_SIZE,
    height: ICON_SIZE,
    className: "fill-white",
    xmlns: "https://www.w3.org/2000/svg",
    children: socialIcons[platform]
  }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this)
}, void 0, !1, {
  fileName: "app/components/footer.tsx",
  lineNumber: 33,
  columnNumber: 3
}, this), footerLinkClass = "text-secondary underline block mb-2 mt-1 md:my-0", FooterLink = ({
  href,
  external,
  children,
  title
}) => external ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
  href,
  className: footerLinkClass,
  target: "_blank",
  rel: "noopener noreferrer",
  title,
  children: children || href
}, void 0, !1, {
  fileName: "app/components/footer.tsx",
  lineNumber: 73,
  columnNumber: 7
}, this) : href.startsWith("/") ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
  className: footerLinkClass,
  to: href,
  children: children || href
}, void 0, !1, {
  fileName: "app/components/footer.tsx",
  lineNumber: 87,
  columnNumber: 7
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
  href,
  className: footerLinkClass,
  children: children || href
}, void 0, !1, {
  fileName: "app/components/footer.tsx",
  lineNumber: 94,
  columnNumber: 5
}, this), Footer = ({ images }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
  className: "bg-main border-none flex flex-col gap-10 py-7 items-center",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      className: "flex flex-col gap-10 md:gap-0 md:flex-row justify-evenly w-full max-w-6xl px-6 md:px-0",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col gap-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterModule, {
              title: "Bes\xF8ksadresse",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterLink, {
                href: externalLinks.googleMaps,
                external: !0,
                title: "Adressen til Capra",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: [
                    contactInfo.companyAddress.name,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/components/footer.tsx",
                      lineNumber: 117,
                      columnNumber: 15
                    }, this),
                    contactInfo.companyAddress.street,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/components/footer.tsx",
                      lineNumber: 119,
                      columnNumber: 15
                    }, this),
                    contactInfo.companyAddress.postalCode,
                    " ",
                    contactInfo.companyAddress.city
                  ]
                }, void 0, !0, {
                  fileName: "app/components/footer.tsx",
                  lineNumber: 115,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/footer.tsx",
                lineNumber: 110,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 109,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterModule, {
              title: "Kontakt",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterLink, {
                href: externalLinks.mailto,
                children: contactInfo.email
              }, void 0, !1, {
                fileName: "app/components/footer.tsx",
                lineNumber: 126,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 125,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterModule, {
              title: "Telefon",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterLink, {
                href: externalLinks.callUs,
                children: formatPhoneNumber(contactInfo.phoneNumber)
              }, void 0, !1, {
                fileName: "app/components/footer.tsx",
                lineNumber: 131,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 130,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterModule, {
            title: "Meny",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              className: "flex flex-col gap-1",
              children: menuItems.map((it) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterLink, {
                  href: it.href,
                  children: it.title
                }, void 0, !1, {
                  fileName: "app/components/footer.tsx",
                  lineNumber: 141,
                  columnNumber: 17
                }, this)
              }, it.href, !1, {
                fileName: "app/components/footer.tsx",
                lineNumber: 140,
                columnNumber: 15
              }, this))
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 138,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 137,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 136,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterModule, {
            title: "Samarbeidspartner",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "https://www.rideskole.no/",
              target: "_blank",
              rel: "noopener noreferrer",
              title: "EKT Rideskole og Husdyrpark",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                className: "p-1 w-20 rounded bg-white",
                src: images["logo-ekt"].imageUrl,
                alt: images["logo-ekt"].alt
              }, void 0, !1, {
                fileName: "app/components/footer.tsx",
                lineNumber: 155,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 149,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 148,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 147,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterModule, {
            title: "Sertifiseringer",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "https://rapportering.miljofyrtarn.no/stats/119100",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  title: "Capra er Milj\xF8t\xE5rnsertifisert",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "p-1 w-20 rounded bg-white",
                    src: images["logo-miljofyrtaarn"].imageUrl,
                    alt: images["logo-miljofyrtaarn"].alt
                  }, void 0, !1, {
                    fileName: "app/components/footer.tsx",
                    lineNumber: 172,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/footer.tsx",
                  lineNumber: 166,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "https://baproddnvglbcvecert-frontend.azurefd.net/certificate/v3/150234-2014-AQ-NOR-NA",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  title: "Capra er ISO-9001-sertifisert - trykk for \xE5 se sertifikat",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "p-1 w-20 rounded bg-white",
                    src: images["logo-quality-sys-cert-iso-9001"].imageUrl,
                    alt: images["logo-quality-sys-cert-iso-9001"].alt
                  }, void 0, !1, {
                    fileName: "app/components/footer.tsx",
                    lineNumber: 184,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/footer.tsx",
                  lineNumber: 178,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/footer.tsx",
              lineNumber: 165,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 164,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 163,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 107,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      className: "flex flex-row justify-center gap-8",
      children: socialPlatforms.map((it) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterSocialIcon, {
        platform: it
      }, it, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, this))
    }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 194,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      className: "flex flex-row justify-center gap-3 text-xs text-white underline",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/personvernerklaering",
          children: "Personvernerkl\xE6ring"
        }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 200,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: "/informasjonskapsler",
          children: "Informasjonskapsler"
        }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 201,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 199,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/footer.tsx",
  lineNumber: 106,
  columnNumber: 3
}, this);

// app/components/header.tsx
var import_react9 = __toESM(require_react());

// app/hooks/use-disable-scroll.ts
var import_react7 = __toESM(require_react());
function useDisableScroll(condition = !0) {
  (0, import_react7.useEffect)(() => (document.body.style.overflowY = condition ? "hidden" : "scroll", () => {
    document.body.style.overflowY = "scroll";
  }), [condition]);
}

// app/hooks/use-has-scrolled.ts
var import_react8 = __toESM(require_react());
function useHasScrolled(offset = 0) {
  let [hasScrolled, setHasScrolled] = (0, import_react8.useState)(!1);
  return (0, import_react8.useEffect)(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > offset);
    }
    return document.addEventListener("scroll", handleScroll), handleScroll(), () => document.removeEventListener("scroll", handleScroll);
  }, [offset]), hasScrolled;
}

// app/components/header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Header() {
  let [expanded, setExpanded] = (0, import_react9.useState)(!1), showBottomBorder = useHasScrolled();
  return useDisableScroll(expanded), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
    className: classNames(
      "flex desktop:justify-between px-6 desktop:px-8 items-center sticky top-0 bottom-0 z-10 transition-border transition-background duration-200 border-solid border-b",
      {
        "bg-main h-screen flex-col text-white": expanded,
        "bg-white border-b-[#ccc] max-h-nav-height": !expanded && showBottomBorder,
        "bg-background border-b-transparent max-h-nav-height": !expanded && !showBottomBorder
      }
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-between w-full desktop:w-auto",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
            to: "/",
            prefetch: "render",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 842 596",
              "aria-label": "Capra Consulting - Logo",
              className: classNames(
                "h-nav-height w-auto inline-block",
                expanded ? "fill-white" : "fill-black"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  style: { transition: "fill .2s" },
                  d: "M159.9 466c-11.1 9.7-29.7 14.6-45.7 15.3-41.3 1.7-55.7-21-56.8-44.8-1.1-23.9 16.8-49 57-50.6 15.1-.6 29.6 3.5 41.4 12.3l-13.5 11.7c-7.5-5.6-17.5-7.9-27.2-7.5-26.9 1.1-37.8 18-37 33.3.8 15.2 12.1 30.5 39.5 29.4 9.7-.4 20.5-4.1 27.6-10.4l14.7 11.3zM246.9 388.4l-22.3 41.1-27.3 50H220l9.5-17.3h58.2l9.4 17.3H320l-49.7-91.2-23.4.1zm-8.9 57.8l20.7-39 20.7 39H238zM711.5 388.4l-22.3 41.1-27.3 50h22.7l9.5-17.3h58.2l9.4 17.3h22.9l-49.7-91.2-23.4.1zm-8.9 57.8l20.7-39 20.7 39h-41.4zM431.3 388.4h-55.7l.1 25.5v65.7h21v-26.9h31.5c48.1 0 53.6-50.2 17.1-62.2-4.6-1.5-9.3-2.1-14-2.1m-3.2 48.4h-31.5v-32.4h31.5c26.8-.1 26.9 32.4 0 32.4M624.7 479.6l-31.5-29.2c32.6-9.8 33-49.3 1.2-59.9-4.5-1.5-9.3-2.1-14.1-2.1h-55.7v91.2h21v-26.9h24.2l28.6 26.9h26.3zm-47.6-42.8h-31.5v-32.4h31.5c26.8-.1 26.9 32.4 0 32.4M412.9 268.1c-24-3.7-42.1-24.4-42.1-49.5 0-27.7 22.4-50.1 50.1-50.1 27.7 0 50.1 22.4 50.1 50.1 0 12.6-4.7 24.1-12.3 32.9.3-.3 54.8-20.7 66.6-25.1.2-2.6.3-5.2.3-7.8 0-57.8-46.9-104.7-104.7-104.7-57.8 0-104.7 46.9-104.7 104.7 0 57.8 46.9 104.7 104.7 104.7 51.1 0 93.6-34.9 102.8-83.3-21.5 8.9-35.2 13.9-35.2 13.9s-9.1 3.5-29.4 10.4c-19.2 5.6-30.8 5.8-46.2 3.8"
                }, void 0, !1, {
                  fileName: "app/components/header.tsx",
                  lineNumber: 40,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  fill: "none",
                  d: "M0 0h841.9v595.3H0z"
                }, void 0, !1, {
                  fileName: "app/components/header.tsx",
                  lineNumber: 44,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/header.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleMenuButton, {
            isOpen: expanded,
            onToggle: setExpanded
          }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/header.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: classNames(
          "flex-col items-center justify-center desktop:flex-row desktop:gap-5 text-3xl desktop:text-lg h-screen desktop:h-auto -mt-nav-height desktop:my-0",
          expanded ? "flex" : "hidden desktop:flex"
        ),
        children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink2, {
          to: item.href,
          prefetch: "intent",
          className: ({ isActive }) => classNames("px-2 leading-loose", {
            "desktop:border-b-[3px] desktop:border-b-main": isActive
          }),
          onClick: () => setExpanded(!1),
          children: item.title
        }, item.href, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var ToggleMenuButton = ({
  isOpen,
  onToggle
}) => {
  let lineClassName = classNames(
    "h-[3px] w-8 transition-opacity transition-transform",
    isOpen ? "bg-white absolute" : "bg-grey my-[5px]"
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    className: classNames("desktop:hidden w-8", {
      relative: isOpen
    }),
    onClick: () => onToggle(!isOpen),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: classNames(lineClassName, {
          "origin-center -rotate-45": isOpen
        })
      }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 96,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: classNames(lineClassName, {
          "opacity-0": isOpen
        })
      }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: classNames(lineClassName, {
          "origin-center rotate-45": isOpen
        })
      }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 106,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
};

// app/components/todo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), Todo = ({
  title = "TODO",
  display = "flex",
  size = "large",
  className,
  style,
  children,
  badge = !1
}) => {
  let rootClassName = "border-gray-600 border-dashed", titleClassName = "", badgeClassName = "";
  return size === "large" && (rootClassName += " border-4 p-6", titleClassName += " text-2xl font-semibold", badgeClassName += " left-2 top-2 border-2 p-1"), size === "small" && (rootClassName += " border-2 p-2", titleClassName += " text-xl", badgeClassName += " left-1 top-1 border px-1 text-xs"), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style,
    className: `${display} relative flex-col justify-center items-center ${rootClassName} ${className}`,
    children: [
      badge && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: `absolute font-bold bg-yellow border-black text-black rounded ${badgeClassName}`,
        children: "TODO"
      }, void 0, !1, {
        fileName: "app/components/todo.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: titleClassName,
        children: title
      }, void 0, !1, {
        fileName: "app/components/todo.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      children
    ]
  }, void 0, !0, {
    fileName: "app/components/todo.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
};

// node_modules/sanity-codegen/index.esm.js
function createClient({
  dataset,
  projectId,
  token,
  previewMode: _previewMode = !1,
  apiVersion = "1",
  fetch: fetch2,
  useCdn
}) {
  let normalizedApiVersion = normalizeApiVersion(apiVersion), previewModeRef = {
    current: _previewMode
  };
  function normalizeApiVersion(version) {
    let [firstChar] = version;
    return firstChar === "v" ? version.slice(1) : version;
  }
  async function jsonFetch(url, options) {
    return await (await fetch2(url, Object.assign({}, options, {
      headers: Object.assign({
        Accept: "application/json"
      }, options == null ? void 0 : options.headers)
    }))).json();
  }
  async function get(_type, id) {
    let previewClause = previewModeRef.current && !!token ? `|| _id=="drafts.${id}"` : "", [result] = await query(`* [_id == "${id}" ${previewClause}]`);
    return result;
  }
  async function getAll(type, filterClause) {
    return await query(`* [_type == "${type}"${filterClause ? ` && ${filterClause}` : ""}]`);
  }
  async function expand(ref) {
    return await get(null, ref._ref);
  }
  async function query(query2) {
    let searchParams = new URLSearchParams(), preview = previewModeRef.current && !!token;
    searchParams.set("query", query2);
    let response = await jsonFetch(`https://${projectId}.${useCdn ? "apicdn" : "api"}.sanity.io/v${normalizedApiVersion}/data/query/${dataset}?${searchParams.toString()}`, Object.assign({}, token && !useCdn && {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })), prefix = "drafts.";
    if (!preview)
      return response.result.filter((doc) => !doc._id.startsWith(prefix));
    let removeDraftPrefix = (_id) => _id.startsWith(prefix) ? _id.substring(prefix.length) : _id, draftDocs = response.result.filter((doc) => doc._id.startsWith("drafts.")).reduce((acc, next) => (acc[removeDraftPrefix(next._id)] = next, acc), {}), finalAcc = response.result.reduce((acc, next) => {
      let id = removeDraftPrefix(next._id);
      return acc[id] = draftDocs[id] || next, acc;
    }, {});
    return Object.values(finalAcc);
  }
  function setPreviewMode(previewMode) {
    previewModeRef.current = previewMode;
  }
  return {
    get,
    getAll,
    expand,
    query,
    setPreviewMode
  };
}

// app/sanity/config.ts
var config = {
  apiVersion: "2021-03-25",
  dataset: "production",
  projectId: "3drrs17h",
  useCdn: !1
};

// app/sanity/sanity-client.server.ts
var sanityClient = createClient({
  ...config,
  previewMode: !1,
  fetch: (...args) => fetch(...args)
});
async function getSanitySitemapEntries(type, parent, priority) {
  return (await sanityClient.query(
    `*[_type == "${type}"]{ _id, _updatedAt, slug }`
  )).filter((it) => {
    var _a;
    return !!((_a = it.slug) != null && _a.current);
  }).map((it) => {
    var _a, _b;
    return {
      route: [parent, (_a = it.slug) == null ? void 0 : _a.current].filter(typedBoolean).join("/"),
      lastmod: (_b = it._updatedAt) == null ? void 0 : _b.slice(0, 10),
      priority
    };
  });
}

// app/utils/imageBuilder.ts
var import_image_url = __toESM(require_image_url_umd());
var builder = (0, import_image_url.default)(config), urlFor = (source) => builder.image(source).format("webp");

// app/utils/dataRetrieval.ts
var getImageObjectWithDefaultImages = (imageNames, data) => {
  let retrievedImages = data.reduce(
    (images, asset) => asset.title ? {
      ...images,
      [asset.title]: {
        imageUrl: urlFor(asset.image).url(),
        alt: asset.imageAlt ?? ""
      }
    } : images,
    {}
  );
  return imageNames.reduce(
    (images, imageName) => ({
      ...images,
      [imageName]: imageName in retrievedImages ? retrievedImages[imageName] : { imageUrl: "", alt: "" }
    }),
    {}
  );
};
async function fetchImageAssets(imageNames) {
  let imageData = await sanityClient.getAll(
    "imageAsset",
    `title in ${JSON.stringify(imageNames)}`
  );
  return getImageObjectWithDefaultImages(imageNames, imageData);
}

// app/routes/__layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), loader2 = async () => {
  let images = await fetchImageAssets([
    "logo-quality-sys-cert-iso-9001",
    "logo-miljofyrtaarn",
    "logo-ekt"
  ]);
  return json({ images });
}, unstable_shouldReload = () => !1, meta2 = () => ({
  title: "Capra Consulting: IT-konsulenter med ekspertise i software"
});
function Layout() {
  let data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/routes/__layout.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "flex-grow flex flex-col items-center gap-12 md:gap-36 py-[50px] overflow-x-hidden md:overflow-x-auto",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, !1, {
          fileName: "app/routes/__layout.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__layout.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {
        images: data.images
      }, void 0, !1, {
        fileName: "app/routes/__layout.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = useCatch(), data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "TODO Error side"
          }, void 0, !1, {
            fileName: "app/routes/__layout.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, !1, {
            fileName: "app/routes/__layout.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, !1, {
            fileName: "app/routes/__layout.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
            fileName: "app/routes/__layout.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "flex flex-col h-screen",
            children: [
              caught.status === 404 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
                badge: !0,
                className: "h-full",
                title: "404 - Siden ble ikke funnet",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
                  title: "F.eks. bilde av en s\xF8t/forvirret geit"
                }, void 0, !1, {
                  fileName: "app/routes/__layout.tsx",
                  lineNumber: 67,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__layout.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              caught.status !== 404 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
                badge: !0,
                className: "h-full",
                title: `${caught.status} ${caught.statusText}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
                    title: "Kanskje en stacktrace?"
                  }, void 0, !1, {
                    fileName: "app/routes/__layout.tsx",
                    lineNumber: 78,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
                    title: "F.eks. bilde av en geit som pr\xF8ver frebrilsk \xE5 fikse nettsiden"
                  }, void 0, !1, {
                    fileName: "app/routes/__layout.tsx",
                    lineNumber: 79,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__layout.tsx",
                lineNumber: 73,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__layout.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {
            images: data.images
          }, void 0, !1, {
            fileName: "app/routes/__layout.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, !1, {
            fileName: "app/routes/__layout.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/routes/__layout/dette-kan-vi/it-konsulenter.tsx
var it_konsulenter_exports = {};
__export(it_konsulenter_exports, {
  default: () => ItKonsulenter
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ItKonsulenter() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
    className: "h-full"
  }, void 0, !1, {
    fileName: "app/routes/__layout/dette-kan-vi/it-konsulenter.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/__layout/dette-har-vi-gjort/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  assertItemFound: () => assertItemFound,
  default: () => DetteHarViGjortItem,
  handle: () => handle,
  loader: () => loader3,
  meta: () => meta3
});
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), handle = {
  getSitemapEntries: () => getSanitySitemapEntries("selvskryt", "/dette-har-vi-gjort")
};
function assertItemFound(item) {
  if (item === void 0)
    throw new Response("Not Found", {
      status: 404
    });
}
var loader3 = async ({ params }) => {
  let item = (await ((slug) => sanityClient.getAll("selvskryt", `slug.current == "${slug}"`))(params.slug ?? ""))[0];
  return assertItemFound(item), json({ item });
}, meta3 = ({ data }) => ({
  title: data.item.helmetTitle,
  description: data.item.helmetDescription
});
function DetteHarViGjortItem() {
  var _a;
  let { item } = useLoaderData(), texts = (_a = item.body) == null ? void 0 : _a.map((x) => {
    var _a2;
    return (_a2 = x == null ? void 0 : x.children[0]) == null ? void 0 : _a2.text;
  }).filter(Boolean);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: item.helmetTitle
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-har-vi-gjort/$slug.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: item.helmetDescription
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-har-vi-gjort/$slug.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      texts == null ? void 0 : texts.map((x, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: x
      }, i, !1, {
        fileName: "app/routes/__layout/dette-har-vi-gjort/$slug.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", {
            children: "See JSON"
          }, void 0, !1, {
            fileName: "app/routes/__layout/dette-har-vi-gjort/$slug.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
            children: JSON.stringify(item, null, 2)
          }, void 0, !1, {
            fileName: "app/routes/__layout/dette-har-vi-gjort/$slug.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/dette-har-vi-gjort/$slug.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/dette-har-vi-gjort/$slug.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/__layout/dette-har-vi-gjort/index.tsx
var dette_har_vi_gjort_exports = {};
__export(dette_har_vi_gjort_exports, {
  SelvskrytCard: () => SelvskrytCard,
  default: () => DetteHarViGjort,
  loader: () => loader4,
  meta: () => meta4
});
init_esm();

// app/components/badge.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), Badge = ({
  children,
  variant,
  color,
  size,
  className
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
  className: classNames(
    "py-1 px-2 border rounded font-semibold",
    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",
      "border-main bg-main text-white": variant === "solid" && color === "main",
      "border-blue bg-blue text-white": variant === "solid" && color === "blue",
      "border-main text-main": variant === "outline" && color === "main",
      "border-blue text-blue": variant === "outline" && color === "blue"
    },
    className
  ),
  children
}, void 0, !1, {
  fileName: "app/components/badge.tsx",
  lineNumber: 20,
  columnNumber: 5
}, this);

// app/components/call-to-action-box.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), CallToActionBox = ({
  title,
  description,
  linkText
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
  badge: !0,
  title: "",
  className: "border-none py-0 px-0 w-full",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-11/12 max-w-7xl py-24 px-6 bg-peach-20 flex flex-col items-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "font-bold text-xl",
        children: title
      }, void 0, !1, {
        fileName: "app/components/call-to-action-box.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: description
      }, void 0, !1, {
        fileName: "app/components/call-to-action-box.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        className: "mt-7 w-48",
        badge: !0,
        size: "small",
        title: linkText
      }, void 0, !1, {
        fileName: "app/components/call-to-action-box.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/call-to-action-box.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/call-to-action-box.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this);

// app/components/card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), Card = ({ children, image, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: classNames(
    "flex flex-col w-full h-full border transition-all shadow hover:shadow-xl",
    className
  ),
  children: [
    image,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "h-full px-3 py-4 flex flex-col gap-5",
      children
    }, void 0, !1, {
      fileName: "app/components/card.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/card.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this);

// app/components/filter-button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), FilterButton = ({ children, active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
  className: classNames(
    "py-1 px-4 rounded border border-secondary transition font-bold text-sm peer-focus:ring-secondary peer-focus:ring-1",
    {
      "bg-secondary text-white": active,
      "bg-white text-secondary": !active
    }
  ),
  children
}, void 0, !1, {
  fileName: "app/components/filter-button.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this);

// app/components/filter-row.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), FilterRow = ({
  filters,
  activeFilters,
  filterKey
}) => {
  let submit = useSubmit(), transition = useTransition(), isFilterActive = (key, filter) => {
    var _a, _b;
    return (_a = transition.submission) != null && _a.formData ? (_b = transition.submission) == null ? void 0 : _b.formData.getAll(key).includes(filter) : !!activeFilters.includes(filter);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex gap-3 flex-wrap",
    children: filters.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
      className: "cursor-pointer",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          type: "checkbox",
          name: filterKey,
          className: "peer sr-only",
          value: x,
          checked: isFilterActive(filterKey, x),
          onChange: (e) => submit(e.currentTarget.form)
        }, void 0, !1, {
          fileName: "app/components/filter-row.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilterButton, {
          active: isFilterActive(filterKey, x),
          children: x
        }, void 0, !1, {
          fileName: "app/components/filter-row.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ]
    }, x, !0, {
      fileName: "app/components/filter-row.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/filter-row.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};

// app/components/title-and-text.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), TitleAndText = ({
  title,
  titleAs: TitleComponent,
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "w-full flex flex-col items-center gap-3 lg:gap-4 text-center",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleComponent, {
      className: "max-w-7xl font-bold text-3xl md:text-4xl lg:text-6xl text-secondary",
      children: title
    }, void 0, !1, {
      fileName: "app/components/title-and-text.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      className: "max-w-4xl font-light text-lg md:text-xl lg:text-2xl text-secondary",
      children
    }, void 0, !1, {
      fileName: "app/components/title-and-text.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/title-and-text.tsx",
  lineNumber: 12,
  columnNumber: 5
}, this);

// app/routes/__layout/dette-har-vi-gjort/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), URL_FILTER_KEY = "kategori", loader4 = async ({ request }) => {
  let allItems = await sanityClient.query(
    '* [_type == "selvskryt"] { ..., filter[]-> }'
  );
  allItems.forEach((item) => {
    item.filter === null && (item.filter = []);
  });
  let filters = allItems.flatMap((x) => x.filter);
  filters = uniqueBy(filters, (x) => x._id);
  let searchParams = new URL(request.url).searchParams, activeFilters = new Set(searchParams.getAll(URL_FILTER_KEY)), filteredItems = allItems.filter(
    (x) => activeFilters.size === 0 || x.filter.some((filter) => activeFilters.has(filter.title))
  );
  return json({ items: filteredItems, filters });
}, meta4 = () => ({
  title: "Vi er stolte av arbeidet vi gj\xF8r - Se caser her | Capra Consulting",
  description: "Det er viktig \xE5 l\xF8fte frem godt arbeid! Vi syns ogs\xE5 det er helt n\xF8dvendig \xE5 vise frem det flotte vi i Capra f\xE5r til sammen med v\xE5re kunder. Se caser her."
});
function DetteHarViGjort() {
  let data = useLoaderData(), [search] = useSearchParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-7xl w-full sm:w-11/12 flex flex-col gap-12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
            title: "Dette har vi gjort for andre",
            titleAs: "h1",
            children: "Vi skaper samfunsnytte for over 1 000 000 brukere hver eneste dag! Her har du noen f\xE5 av tingene v\xE5re kick-ass folk gj\xF8r for kunder."
          }, void 0, !1, {
            fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col gap-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
                method: "get",
                action: "",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilterRow, {
                  filters: data.filters.map((x) => x.title),
                  activeFilters: search.getAll(URL_FILTER_KEY),
                  filterKey: URL_FILTER_KEY
                }, void 0, !1, {
                  fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
                  lineNumber: 65,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
                lineNumber: 64,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                className: "grid gap-12 sm:gap-10 md:gap-8 lg:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center",
                children: data.items.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelvskrytCard, {
                    selvskryt: x
                  }, x._id, !1, {
                    fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                  }, this)
                }, x._id, !1, {
                  fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
                  lineNumber: 74,
                  columnNumber: 15
                }, this))
              }, void 0, !1, {
                fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
                lineNumber: 72,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CallToActionBox, {
        title: "Er du nysgjerrig om du og Capra er en match?",
        description: "Ta en titt p\xE5 stillingene v\xE5re da vel!",
        linkText: "Se stillinger"
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
var SelvskrytCard = ({ selvskryt }) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
    prefetch: "intent",
    to: (_a = selvskryt.slug) == null ? void 0 : _a.current,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
      image: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "relative pb-[66%] md:pb-[100%]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: "absolute h-full w-full object-cover",
          alt: selvskryt.mainImageAlt,
          src: urlFor(selvskryt.mainImage).size(4500 / 5, 3e3 / 5).url()
        }, void 0, !1, {
          fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "text-xl font-bold text-blue",
              children: selvskryt.title
            }, void 0, !1, {
              fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
              lineNumber: 111,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: selvskryt.titleLong
            }, void 0, !1, {
              fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
              lineNumber: 112,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
          lineNumber: 110,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-wrap gap-1",
          children: selvskryt.filter.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
            variant: "outline",
            color: "blue",
            size: "sm",
            children: x.title
          }, x._id, !1, {
            fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__layout/dette-har-vi-gjort/index.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
};

// app/routes/__layout/dette-kan-vi/frontend.tsx
var frontend_exports = {};
__export(frontend_exports, {
  default: () => Frontend
});

// app/components/button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function getClassNames(variant) {
  return classNames(
    "w-[200px] rounded-md border-2 font-bold min-h-[40px] leading-snug block py-3 text-center transition ease-in-out",
    {
      "bg-white border-main text-main hover:bg-main hover:text-white": variant === "outline",
      "bg-main border-transparent text-white hover:bg-main-darker": variant === "solid"
    }
  );
}
var Button = ({ variant, ...props }) => {
  let className = classNames(getClassNames(variant), props.className);
  return "href" in props ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
    to: props.href,
    prefetch: props.prefetch,
    className,
    children: props.children
  }, void 0, !1, {
    fileName: "app/components/button.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    ...props,
    className
  }, void 0, !1, {
    fileName: "app/components/button.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
};

// app/components/contact-form.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), ContactForm = ({ title }) => {
  var _a, _b, _c;
  let fetcher = useFetcher(), isSuccess = fetcher.type === "done" && !fetcher.data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
    className: "bg-secondary flex flex-col items-center text-white w-full -mb-[50px] py-[3vh] px-[100px] mx-auto",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-3xl font-semibold text-peach",
            children: isSuccess ? "Takk for din interesse!" : title
          }, void 0, !1, {
            fileName: "app/components/contact-form.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: isSuccess ? "Vi tar kontakt med deg s\xE5 snart som mulig." : "Fyll ut skjemaet s\xE5 kontakter vi deg!"
          }, void 0, !1, {
            fileName: "app/components/contact-form.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/contact-form.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "flex justify-between w-full max-w-7xl gap-12 mb-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
            method: "post",
            action: "/api/contact",
            className: "w-1/2 flex flex-col gap-[4vh]",
            name: "contact",
            "data-netlify": "true",
            "data-netlify-honeypot": "bot-field",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                name: "form-name",
                value: "contact"
              }, void 0, !1, {
                fileName: "app/components/contact-form.tsx",
                lineNumber: 35,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
                id: "name",
                label: "Navn",
                required: !0,
                placeholder: "Ditt navn",
                errors: (_a = fetcher.data) == null ? void 0 : _a.errors
              }, void 0, !1, {
                fileName: "app/components/contact-form.tsx",
                lineNumber: 36,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
                id: "company",
                label: "Bedrift",
                placeholder: "Din bedrift"
              }, void 0, !1, {
                fileName: "app/components/contact-form.tsx",
                lineNumber: 43,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
                id: "phoneNumber",
                label: "Telefon",
                required: !0,
                placeholder: "Ditt telefonnummer",
                errors: (_b = fetcher.data) == null ? void 0 : _b.errors
              }, void 0, !1, {
                fileName: "app/components/contact-form.tsx",
                lineNumber: 44,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
                id: "email",
                label: "E-post",
                type: "email",
                required: !0,
                placeholder: "Din e-post",
                errors: (_c = fetcher.data) == null ? void 0 : _c.errors
              }, void 0, !1, {
                fileName: "app/components/contact-form.tsx",
                lineNumber: 51,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                variant: "solid",
                type: "submit",
                children: "Kontakt meg"
              }, void 0, !1, {
                fileName: "app/components/contact-form.tsx",
                lineNumber: 59,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/contact-form.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
            badge: !0,
            title: "Salgsrepresentanter",
            className: "w-1/2"
          }, void 0, !1, {
            fileName: "app/components/contact-form.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/contact-form.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/contact-form.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}, Input = ({ id, label, required, placeholder, type = "text", errors }) => {
  let fieldErrors = errors == null ? void 0 : errors[id];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        htmlFor: id,
        className: "block",
        "aria-required": required,
        children: [
          label,
          required && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "inline-block text-red",
            children: "*"
          }, void 0, !1, {
            fileName: "app/components/contact-form.tsx",
            lineNumber: 82,
            columnNumber: 22
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/contact-form.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        id,
        name: id,
        type,
        placeholder,
        className: "w-full p-[1vh] text-black"
      }, void 0, !1, {
        fileName: "app/components/contact-form.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      fieldErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-red",
        children: fieldErrors
      }, void 0, !1, {
        fileName: "app/components/contact-form.tsx",
        lineNumber: 91,
        columnNumber: 23
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/contact-form.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
};

// app/utils/random.ts
function randomInteger(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomNumber(min, max) {
  return randomInteger(min * 100, max * 100) / 100;
}
function randomValue(arr) {
  return arr[randomInteger(0, arr.length - 1)];
}
function shuffled(arr) {
  let _arr = arr.slice(), currentIndex = _arr.length;
  for (; currentIndex !== 0; ) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    let tmp = _arr[currentIndex];
    _arr[currentIndex] = _arr[randomIndex], _arr[randomIndex] = tmp;
  }
  return _arr;
}

// app/components/content-and-image-box/patterns.tsx
function randomPattern(direction, fillClassName) {
  return {
    ...randomValue(CONTENT_BOX_PATTERNS[direction]),
    color: fillClassName
  };
}
var CONTENT_BOX_PATTERNS = {
  left: [
    {
      pattern: "square-offset-grid",
      width: 170,
      height: 170,
      left: "-5%",
      top: "-20%"
    },
    {
      pattern: "l-h-lines",
      width: 300,
      height: 120,
      left: "-2%",
      top: "-18%"
    },
    {
      pattern: "l-h-lines",
      width: 300,
      height: 120,
      left: "-2%",
      top: "-5%",
      flipV: !0
    },
    {
      pattern: "l-solid",
      width: 300,
      height: 120,
      left: "-2%",
      top: "-5%",
      flipV: !0
    }
  ],
  right: [
    {
      pattern: "square-offset-grid",
      width: 150,
      height: 150,
      left: "75%",
      top: "-20%"
    },
    {
      pattern: "l-h-lines",
      width: 250,
      height: 150,
      left: "-12%",
      top: "-10%",
      flipV: !0
    },
    {
      pattern: "l-h-lines",
      width: 250,
      height: 150,
      right: "-1%",
      top: "-7%",
      flipV: !0,
      flipH: !0
    },
    {
      pattern: "l-solid",
      width: 300,
      height: 120,
      left: "-2%",
      top: "-5%",
      flipV: !0
    },
    {
      pattern: "l-solid",
      width: 300,
      height: 120,
      right: "-2%",
      top: "-5%",
      flipV: !0,
      flipH: !0
    }
  ]
};

// app/components/content-and-image-box/utils.ts
var PATTERN_CLASSES = {
  peach: [
    "bg-peach text-secondary",
    ["fill-main", "fill-bordeaux", "fill-light-blue", "fill-secondary"]
  ],
  lightBlue: [
    "bg-light-blue text-secondary",
    ["fill-main", "fill-secondary", "fill-bordeaux", "fill-peach"]
  ],
  bordeaux: ["bg-bordeaux text-secondary", ["fill-peach", "fill-light-blue"]],
  darkBlue: [
    "bg-secondary-80 text-peach-20",
    ["fill-peach", "fill-light-blue"]
  ]
};
function getBoxConfig(color) {
  let [boxClassName, patternClassNames] = PATTERN_CLASSES[color];
  return {
    boxClassName,
    patternClassName: randomValue(patternClassNames)
  };
}

// app/components/pattern/pattern-generator.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), PatternGenerator = ({
  size,
  rows,
  cols,
  rect,
  color,
  style,
  filterRects = () => !0,
  modifyRect = () => ({})
}) => {
  let rowCount = rows ? Math.floor(size.height / (rect.size.height + rect.padding.height)) : 1, colCount = cols ? Math.floor(size.width / (rect.size.width + rect.padding.width)) : 1, rects = [];
  for (let row = 0; row < rowCount; row++)
    for (let col = 0; col < colCount; col++) {
      let defaultProps = {
        ...rect.size,
        x: cols ? col * (rect.size.width + rect.padding.width) : 0,
        y: rows ? row * (rect.size.height + rect.padding.height) : 0
      }, props = {
        ...defaultProps,
        ...modifyRect({ col, row, ...defaultProps })
      };
      filterRects(props) && rects.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        ...props
      }, `${row}-${col}`, !1, {
        fileName: "app/components/pattern/pattern-generator.tsx",
        lineNumber: 94,
        columnNumber: 20
      }, this));
    }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    ...size,
    viewBox: `0 0 ${size.width} ${size.height}`,
    className: classNames(color, "hidden md:block z-9 absolute"),
    style,
    children: rects
  }, void 0, !1, {
    fileName: "app/components/pattern/pattern-generator.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
};

// app/components/pattern/size.ts
var Size = class {
  constructor(size) {
    this.height = size.height, this.width = size.width;
  }
  scaled(scale) {
    let isNumber = typeof scale == "number";
    return new Size({
      width: this.width * (isNumber ? scale : scale.width ?? 1),
      height: this.height * (isNumber ? scale : scale.height ?? 1)
    });
  }
  static of(size) {
    return new Size(
      typeof size == "number" ? {
        height: size,
        width: size
      } : size
    );
  }
  static randomInRange(min, max) {
    return Size.of(randomInteger(min, max));
  }
};

// app/components/pattern/patterns/grid.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), RECT_CONFIG = {
  size: Size.randomInRange(3, 5),
  padding: Size.randomInRange(3, 5)
}, Grid = (props) => {
  let clip = props.size.scaled({
    height: randomNumber(0.3, 0.6),
    width: randomNumber(0.3, 0.8)
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PatternGenerator, {
    ...props,
    rect: RECT_CONFIG,
    cols: !0,
    rows: !0,
    filterRects: (rect) => rect.x + rect.width < clip.width || rect.y > clip.height
  }, void 0, !1, {
    fileName: "app/components/pattern/patterns/grid.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// app/components/pattern/patterns/horizontal-lines.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), RECT_CONFIG2 = {
  size: Size.randomInRange(2, 4),
  padding: Size.randomInRange(3, 4)
}, HorizontalLines = ({ shape, ...props }) => {
  let clip = props.size;
  return shape === "l-like" && (clip = clip.scaled({
    width: randomNumber(0.3, 0.7),
    height: randomNumber(0.15, 0.6)
  })), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PatternGenerator, {
    ...props,
    rect: RECT_CONFIG2,
    rows: !0,
    modifyRect: ({ y }) => ({
      width: y > props.size.height - clip.height ? props.size.width : clip.width
    })
  }, void 0, !1, {
    fileName: "app/components/pattern/patterns/horizontal-lines.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};

// app/components/pattern/patterns/l-horizontal-lines.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), RECT_CONFIG3 = {
  size: Size.of(3),
  padding: Size.of(3)
}, LHorizontalLines = (props) => {
  let clip = props.size.scaled(0.4);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PatternGenerator, {
    ...props,
    rect: RECT_CONFIG3,
    rows: !0,
    modifyRect: ({ y }) => ({
      width: y > props.size.height - clip.height ? props.size.width : clip.width
    })
  }, void 0, !1, {
    fileName: "app/components/pattern/patterns/l-horizontal-lines.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/components/pattern/patterns/l-solid.tsx
var import_react17 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), COLS = 100, ROWS = 100, BODY_COLS = 25, TAIL_COLS = COLS - BODY_COLS, TAIL_ROWS = 30, LSolid = ({ size, color, style }) => {
  let clipId = (0, import_react17.useId)(), body = size.scaled({
    width: BODY_COLS / COLS
  }), tail = size.scaled({
    height: TAIL_ROWS / ROWS,
    width: TAIL_COLS / COLS
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    ...size,
    viewBox: `0 0 ${size.width} ${size.height}`,
    className: classNames(color, "hidden md:block z-9 absolute"),
    style,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("clipPath", {
        id: clipId,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
            x: "0",
            y: "0",
            ...body
          }, void 0, !1, {
            fileName: "app/components/pattern/patterns/l-solid.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
            x: body.width,
            y: body.height - tail.height,
            width: tail.width,
            height: tail.height
          }, void 0, !1, {
            fileName: "app/components/pattern/patterns/l-solid.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/pattern/patterns/l-solid.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        clipPath: `url(#${clipId})`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
          height: size.height,
          width: size.width,
          x: 0,
          y: 0
        }, void 0, !1, {
          fileName: "app/components/pattern/patterns/l-solid.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/pattern/patterns/l-solid.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/pattern/patterns/l-solid.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/components/pattern/patterns/offset-grid.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), RECT_CONFIG4 = {
  size: Size.randomInRange(2, 4).scaled({
    width: 0.8
  }),
  padding: Size.randomInRange(3, 4)
}, OffsetGrid = ({ shape, ...props }) => {
  let clip = props.size;
  return shape === "l-like" && (clip = clip.scaled({
    height: randomNumber(0.4, 0.7),
    width: randomNumber(0.3, 0.8)
  })), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PatternGenerator, {
    ...props,
    rect: RECT_CONFIG4,
    cols: !0,
    rows: !0,
    filterRects: ({ x, y, width }) => x + width < clip.width || y > props.size.height - clip.height,
    modifyRect: ({ x, row }) => ({
      x: x + (row % 2 === 0 ? 0 : RECT_CONFIG4.padding.width)
    })
  }, void 0, !1, {
    fileName: "app/components/pattern/patterns/offset-grid.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/components/pattern/patterns/square-offset-grid.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), RECT_CONFIG5 = {
  size: Size.of(7),
  padding: Size.of(6).scaled({
    width: 0.8
  })
}, SquareOffsetGrid = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PatternGenerator, {
  ...props,
  rect: RECT_CONFIG5,
  cols: !0,
  rows: !0,
  modifyRect: ({ x, row }) => ({
    x: x + (row % 2 === 0 ? 0 : RECT_CONFIG5.padding.width)
  })
}, void 0, !1, {
  fileName: "app/components/pattern/patterns/square-offset-grid.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this);

// app/components/pattern/patterns/vertical-lines.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), RECT_CONFIG6 = {
  size: Size.randomInRange(2, 3),
  padding: Size.randomInRange(2, 3)
}, VerticalLines = ({ shape, ...props }) => {
  let clip = props.size;
  return shape === "l-like" && (clip = clip.scaled({
    width: randomNumber(0.3, 0.7),
    height: randomNumber(0.15, 0.6)
  })), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PatternGenerator, {
    ...props,
    rect: RECT_CONFIG6,
    cols: !0,
    modifyRect: ({ x }) => ({
      height: x + RECT_CONFIG6.size.width > clip.width ? clip.height : props.size.height
    })
  }, void 0, !1, {
    fileName: "app/components/pattern/patterns/vertical-lines.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};

// app/components/pattern/types.ts
var PATTERN_TYPES = [
  "grid",
  "offset-grid",
  "v-lines",
  "h-lines",
  "square-offset-grid",
  "l-h-lines",
  "l-solid"
];

// app/hooks/use-window-width.ts
var import_react18 = __toESM(require_react());
function useWindowWidth(defaultValue) {
  let [windowWidth, setWindowWidth] = (0, import_react18.useState)(defaultValue);
  return (0, import_react18.useEffect)(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    return window.addEventListener("resize", updateWindowWidth), updateWindowWidth(), () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []), windowWidth;
}

// app/components/pattern/pattern.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), BREAKPOINT_TABLET_PX = 1024, patterns = {
  grid: Grid,
  "v-lines": VerticalLines,
  "offset-grid": OffsetGrid,
  "h-lines": HorizontalLines,
  "square-offset-grid": SquareOffsetGrid,
  "l-h-lines": LHorizontalLines,
  "l-solid": LSolid
}, Pattern = ({
  pattern = randomValue(PATTERN_TYPES),
  shape = Math.random() > 0.33 ? "rect" : "l-like",
  color,
  width,
  height,
  left = "unset",
  top = "unset",
  right = "unset",
  flipV = !1,
  flipH = !1
}) => {
  let windowWidth = useWindowWidth(BREAKPOINT_TABLET_PX), size = Size.of({ width, height });
  windowWidth <= BREAKPOINT_TABLET_PX && (size = size.scaled(0.8));
  let PatternComponent = patterns[pattern];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PatternComponent, {
    size,
    shape,
    color,
    style: {
      left,
      top,
      right,
      transform: `scale(${flipH ? -1 : 1}, ${flipV ? -1 : 1})`
    }
  }, void 0, !1, {
    fileName: "app/components/pattern/pattern.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
};

// app/components/content-and-image-box/content-and-image-box.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), ContentAndImageBox = ({
  title,
  children,
  image,
  color,
  height,
  direction = "left"
}) => {
  let { boxClassName, patternClassName } = getBoxConfig(color);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: classNames(
      "flex-col-reverse flex w-full justify-center items-center",
      {
        "md:flex-row": direction === "left",
        "md:flex-row-reverse": direction === "right"
      }
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: classNames(
          "w-full md:w-[40vw] lg:w-[60w] md:min-w-[500px] flex flex-col justify-center",
          boxClassName,
          {
            "md:pl-[40px] md:pr-[100px]": direction === "left",
            "md:pl-[100px]": direction === "right"
          }
        ),
        style: { height },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "p-[2vw] pb-0 text-2xl md:text-4xl font-bold",
            children: title
          }, void 0, !1, {
            fileName: "app/components/content-and-image-box/content-and-image-box.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "p-[2vw] whitespace-pre-line text-md md:text-lg",
            children
          }, void 0, !1, {
            fileName: "app/components/content-and-image-box/content-and-image-box.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/content-and-image-box/content-and-image-box.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: classNames(
          "relative max-h-60 md:h-[30vw] md:max-h-96 aspect-square shadow-xl bg-white",
          {
            "md:-ml-[100px]": direction === "left",
            "md:-mr-[100px]": direction === "right"
          }
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pattern, {
            ...randomPattern(direction, patternClassName)
          }, void 0, !1, {
            fileName: "app/components/content-and-image-box/content-and-image-box.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          image
        ]
      }, void 0, !0, {
        fileName: "app/components/content-and-image-box/content-and-image-box.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/content-and-image-box/content-and-image-box.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
};

// app/routes/__layout/dette-kan-vi/frontend.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Frontend() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Hvorfor frontend?",
        titleAs: "h1",
        children: "Frontend er det vanlige folk har mest forhold til. Det er her de store brukeropplevelsene skapes. Om det gjelder et internsystem, hjemmeside eller nettbutikk, er frontend absolutt noe alle selskaper b\xF8r investere i. En god frontendopplevelse kan v\xE6re forskjellen p\xE5 \xE5 vinne og tape kunder. Har du en robust frontendl\xF8sning i dag er du godt rigget for \xE5 v\xE6re konkurransedyktig i markedet."
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/frontend.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "L\xF8sningen",
        image: void 0,
        height: "50vw",
        color: "lightBlue",
        children: "For \xE5 bygge en robust l\xF8sning trenger du gode frontend-utviklere som hjelper deg med \xE5 velge riktig arkitektur. Riktig arkitektur s\xF8rger blant annet for at det g\xE5r lynraskt fra du trykker enter til nettsiden dukker opp i vinduet ditt og for muligheter til \xE5 bygge det du trenger effektivt. I frontendverdenen endres teknologiene i et raskt tempo. Rammeverk, bibliotek og verkt\xF8y brukes i sammenheng med hvilket behov man har for l\xF8sningen. Noen av teknologiene vi har valgt \xE5 spesialisere oss p\xE5 er TypeScript, React, Vue og Svelte. Ikke bare er dette blant de rammeverkene som brukes av noen av verdens st\xF8rste selskap, som Facebook og Instagram, men er de som utvikleres og moderniseres raskest."
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/frontend.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "V\xE5re utviklere",
        image: void 0,
        height: "40vw",
        color: "bordeaux",
        direction: "right",
        children: "I dag skaper v\xE5re frontend utviklere kick-ass brukeropplevelser hos bla. Gjensidige, Amedia og NRK, og vi mener at suksessoppskriften er v\xE5re evner til \xE5 ta i bruk riktig rammeverk og fokus p\xE5 fremtidsrettet, modul\xE6r og testet kode. Disse faktorene er det viktigste grunnlaget for \xE5 skape applikasjoner som er dynamiske, tilpasningsdyktige og enkle \xE5 vedlikeholde. Teknologier og arkitekturer er der jo bare for \xE5 tjene et st\xF8rre form\xE5l: \xE5 hjelpe brukeren \xE5 f\xE5 gjort jobben sin trygt, raskt og effektivt. Og Capra har selvf\xF8lgelig de mest brukerorienterte frontend utviklerene som er \xE5 oppdrive!"
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/frontend.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactForm, {
        title: "Trenger du frontend spisskompetanse p\xE5 ditt team?"
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/frontend.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/dette-kan-vi/frontend.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/__layout/dette-kan-vi/backend.tsx
var backend_exports = {};
__export(backend_exports, {
  default: () => Backend
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Backend() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
    title: "Backend",
    children: "Under construction\u2026"
  }, void 0, !1, {
    fileName: "app/routes/__layout/dette-kan-vi/backend.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/__layout/personvernerklaering.tsx
var personvernerklaering_exports = {};
__export(personvernerklaering_exports, {
  default: () => Personvernerkl\u00E6ring
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Personvernerkl\u00E6ring() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
    className: "h-full"
  }, void 0, !1, {
    fileName: "app/routes/__layout/personvernerklaering.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/__layout/dette-kan-vi/liflig.tsx
var liflig_exports = {};
__export(liflig_exports, {
  default: () => Liflig
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Liflig() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
    className: "h-full"
  }, void 0, !1, {
    fileName: "app/routes/__layout/dette-kan-vi/liflig.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/__layout/informasjonskapsler.tsx
var informasjonskapsler_exports = {};
__export(informasjonskapsler_exports, {
  default: () => Informasjonskapsler
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Informasjonskapsler() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
    className: "h-full"
  }, void 0, !1, {
    fileName: "app/routes/__layout/informasjonskapsler.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/__layout/dette-kan-vi/index.tsx
var dette_kan_vi_exports = {};
__export(dette_kan_vi_exports, {
  default: () => DetteKanVi
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DetteKanVi() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "V\xE5re tjenester og ekspertiser",
        titleAs: "h1",
        children: "Forskjellige utfordringer krever forskjellige l\xF8sninger. Vi tilbyr derfor to tjenester for \xE5 skape l\xF8sninger for deg og din bedrift."
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        className: "w-full",
        title: "Liflig"
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        className: "w-full",
        title: "Konsulenter"
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Teknologier",
        titleAs: "h2",
        children: "Vi i Capra er spesialister. Vi har tatt klare tekniske valg og blitt blant de beste innenfor v\xE5re fagfelt."
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Sky",
        image: void 0,
        height: "40vw",
        color: "peach",
        children: "I Capra spesialiserer vi oss innenfor Amazon Web Services og er \xE9n av fire bedrifter som er advanced tier consulting partnere i Norge. V\xE5r dybdekunnskap p\xE5 sky gj\xF8r at vi kan vi hjelpe deg p\xE5 din reise opp i skyen, ogs\xE5 om du bruker Microsoft Azure og Google Cloud."
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Backend",
        direction: "right",
        image: void 0,
        height: "40vw",
        color: "darkBlue",
        children: `P\xE5 backend har vi valgt \xE5 satse p\xE5 Java-plattformen og Kotlin for \xE5 l\xF8se de store og tunge prosessene i kulissene. 

 Hvorfor det? Vi har valgt markedets st\xF8rste, modne og levende spr\xE5k. Ved \xE5 velge de spr\xE5kene som utvikler seg raskest s\xF8rger vi for at vi alltid vil kunne levere nye og smartere l\xF8sninger som vi vet fungerer.`
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Frontend",
        image: void 0,
        height: "40vw",
        color: "lightBlue",
        children: `P\xE5 frontend satser vi blant annet p\xE5 TypeScript, JavaScript, React og Vue. 

 Riktig bruk av rammeverk og fokus p\xE5 framtidsrettet og testet kode, mener vi er   suksessfaktorer. Med rette applikasjoner som raskt kan endres og som er enkle \xE5 vedlikeholde, skaper vi brukeropplevelser i verdensklasse.`
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Teknisk arkitektur",
        direction: "right",
        image: void 0,
        height: "40vw",
        color: "bordeaux",
        children: `Det er viktig \xE5 benytte riktig metodikk for \xE5 komme frem til en god arkitektur og god teknologi. Koden\xE6re arkitekter kan teste ut funksjoner for \xE5 sikre at l\xF8sningene lar seg realisere og at rammene for en god implementasjon er der for utviklerne. 

 Sentralt her er CI/CD, DevOps/NoOps, Microservices, IaC, DDD, Terraform og AWS. `
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Team-, prosjektleder og smidig coach",
        image: void 0,
        height: "40vw",
        color: "peach",
        children: `For \xE5 skape verdi raskt b\xF8r man bruke metodikker som s\xF8rger for at man fokuserer p\xE5 de rette oppgavene, m\xE5lene og skaper selvg\xE5ende autonome team. Vi hjelper v\xE5re kunder med teamledelse, prosjektledelse, produktutvikling, smidig coaching, og organisasjonsutvikling. 

 Stikkord her er Agile, Team Topologies, DDD, Accelerate, 5 Dysfunctions of a Team og Empowered.`
      }, void 0, !1, {
        fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/dette-kan-vi/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/__layout/bli-en-av-oss.tsx
var bli_en_av_oss_exports = {};
__export(bli_en_av_oss_exports, {
  default: () => BliEnAvOss,
  loader: () => loader5
});
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), TEAM_TAILOR_API_VERSION = "20210218", loader5 = async () => {
  if (!process.env.TEAM_TAILOR_API_KEY)
    throw new Response("process.env.TEAM_TAILOR_API_KEY needs to be set", {
      status: 500
    });
  let headers = {
    Authorization: `Token token=${process.env.TEAM_TAILOR_API_KEY}`,
    "X-Api-Version": TEAM_TAILOR_API_VERSION
  }, jobsTeamTailor = await fetch("https://api.teamtailor.com/v1/jobs", {
    headers
  }).then((x) => x.json()), fetchDepartment = (url) => fetch(url, {
    headers
  }).then((x) => x.json()), jobs = await Promise.all(
    jobsTeamTailor.data.filter((job) => !job.attributes.internal).map(
      async (job) => ({
        id: job.id,
        title: job.attributes.title,
        url: job.links["careersite-job-url"],
        department: (await fetchDepartment(job.relationships.department.links.related)).data.attributes.name
      })
    )
  );
  return json({ jobs });
};
function BliEnAvOss() {
  let data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col gap-12 w-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
            title: "Bli en av oss!",
            titleAs: "h1",
            children: "Det skal v\xE6re skikkelig bra \xE5 v\xE6re ansatt i Capra. Vi vet nemlig at kick-ass ansatte er et resultat av en god arbeidsplass - og det ansvaret tar vi p\xE5 st\xF8rste alvor."
          }, void 0, !1, {
            fileName: "app/routes/__layout/bli-en-av-oss.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex gap-4 justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                variant: "outline",
                href: "https://capraconsulting.teamtailor.com/jobs",
                children: "Se stillinger"
              }, void 0, !1, {
                fileName: "app/routes/__layout/bli-en-av-oss.tsx",
                lineNumber: 104,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                variant: "outline",
                href: "/ansatte",
                children: "Se de ansatte"
              }, void 0, !1, {
                fileName: "app/routes/__layout/bli-en-av-oss.tsx",
                lineNumber: 110,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__layout/bli-en-av-oss.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/bli-en-av-oss.tsx",
        lineNumber: 96,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(JobListingsByDepartment, {
        className: "w-11/12 max-w-4xl",
        jobs: data.jobs,
        titleAs: "h2"
      }, void 0, !1, {
        fileName: "app/routes/__layout/bli-en-av-oss.tsx",
        lineNumber: 116,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "TODO: Info om st\xF8rrelse p\xE5 selskapet",
        image: void 0,
        height: "40vw",
        color: "lightBlue",
        children: "Er du happy og kunden happy, s\xE5 er Capra happy!"
      }, void 0, !1, {
        fileName: "app/routes/__layout/bli-en-av-oss.tsx",
        lineNumber: 122,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Vi er stolte av fagmilj\xF8et",
        image: void 0,
        height: "40vw",
        direction: "right",
        color: "peach",
        children: "Vi best\xE5r av en gjeng som er over gjennomsnittet interessert i tech, og det reflekteres i fagmilj\xF8et v\xE5rt. Fagmilj\xF8ene er \xE5pne og du kan delta p\xE5 det du vil ."
      }, void 0, !1, {
        fileName: "app/routes/__layout/bli-en-av-oss.tsx",
        lineNumber: 131,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Vi liker \xE5 v\xE6re sammen",
        image: void 0,
        height: "50vw",
        color: "bordeaux",
        children: "Kontoret til Capra ligger midt p\xE5 Jernbanetorget s\xE5nn at du enkelt kan komme \u201Chjemom\u201D en tur, f\xF8r eller etter du har v\xE6rt hos kunde. Kontoret blir brukt mye . N\xE5r du er p\xE5 hjemmebane kan du slappe av med ping pong, spill, noe digg \xE5 drikke og godt selskap. I tillegg til julelunsj, juletrefest, sommerfest, \xE5rsfest, l\xF8nningspilser og internkonferansen CapraCon , s\xE5 har vi mange sosiale initiativ som er startet av v\xE5re egne. Blant annet er det flere som digger squash, toppturer, cageball, familieturer p\xE5 teater, vinsmaking osv . Savner du noe? Det er \xE5pent for nye initiativer!"
      }, void 0, !1, {
        fileName: "app/routes/__layout/bli-en-av-oss.tsx",
        lineNumber: 143,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CallToActionBox, {
        title: "Er du nysgjerrig om du og Capra er en match?",
        description: "Ta en titt p\xE5 stillingene v\xE5re da vel!",
        linkText: "Se stillinger"
      }, void 0, !1, {
        fileName: "app/routes/__layout/bli-en-av-oss.tsx",
        lineNumber: 160,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/bli-en-av-oss.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
var JobListingsByDepartment = ({
  jobs,
  titleAs: TitleComponent,
  className
}) => {
  let departments = uniqueBy(
    jobs.map((x) => x.department),
    (x) => x
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `flex flex-col gap-8 ${className}`,
    children: departments.map((department) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleComponent, {
          className: "text-2xl font-bold",
          children: department
        }, void 0, !1, {
          fileName: "app/routes/__layout/bli-en-av-oss.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(JobListings, {
          jobs: jobs.filter((job) => job.department === department)
        }, department, !1, {
          fileName: "app/routes/__layout/bli-en-av-oss.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this)
      ]
    }, department, !0, {
      fileName: "app/routes/__layout/bli-en-av-oss.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/__layout/bli-en-av-oss.tsx",
    lineNumber: 184,
    columnNumber: 5
  }, this);
}, JobListings = ({ jobs }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
  className: "flex flex-col gap-2",
  children: jobs.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
      href: x.url,
      target: "_blank",
      rel: "noreferrer",
      className: "text-xl underline decoration-main",
      children: x.title
    }, void 0, !1, {
      fileName: "app/routes/__layout/bli-en-av-oss.tsx",
      lineNumber: 209,
      columnNumber: 11
    }, this)
  }, x.id, !1, {
    fileName: "app/routes/__layout/bli-en-av-oss.tsx",
    lineNumber: 207,
    columnNumber: 9
  }, this))
}, void 0, !1, {
  fileName: "app/routes/__layout/bli-en-av-oss.tsx",
  lineNumber: 205,
  columnNumber: 5
}, this);

// app/routes/__layout/blogg/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => BloggPost,
  handle: () => handle2
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), handle2 = {
  getSitemapEntries: () => getSanitySitemapEntries("blogg", "/blogg")
};
function BloggPost() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
    className: "h-full"
  }, void 0, !1, {
    fileName: "app/routes/__layout/blogg/$slug.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/__layout/blogg/index.tsx
var blogg_exports = {};
__export(blogg_exports, {
  BloggCard: () => BloggCard,
  default: () => BloggIndex,
  loader: () => loader6,
  meta: () => meta5
});
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), URL_FILTER_KEY2 = "kategori", loader6 = async ({ request }) => {
  let allItems = await sanityClient.query(
    '* [_type == "blogg"]|order(publishedAt desc) { ..., filter[]->, authors[]-> }'
  );
  allItems.forEach((item) => {
    item.filter === null && (item.filter = []), item.authors === null && (item.authors = []);
  });
  let filters = allItems.flatMap((x) => x.filter);
  filters = uniqueBy(filters, (x) => x._id);
  let searchParams = new URL(request.url).searchParams, activeFilters = new Set(searchParams.getAll(URL_FILTER_KEY2)), filteredItems = allItems.filter(
    (x) => activeFilters.size === 0 || x.filter.some((filter) => activeFilters.has(filter.title))
  );
  return json({ items: filteredItems, filters });
}, meta5 = () => ({
  title: "Les hva som r\xF8rer seg i IT-bransjen - Blogg | Capra Consulting",
  description: "P\xE5 bloggen v\xE5r kan du lese om hva som skjer i IT-bransjen. Vi vil dele tips, r\xE5d og mye snacks! Spesielt relevant for deg som skal starte \xE5 jobbe med IT."
});
function BloggIndex() {
  let data = useLoaderData(), [search] = useSearchParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "max-w-7xl w-full sm:w-11/12 flex flex-col gap-12",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
          title: "Blogg",
          titleAs: "h1",
          children: "Her p\xE5 bloggen skriver vi om det som interesserer oss av tech, ting som skjer der ute i bransjen v\xE5r og andre happenings i Capra."
        }, void 0, !1, {
          fileName: "app/routes/__layout/blogg/index.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col gap-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
              method: "get",
              action: "",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilterRow, {
                filters: data.filters.map((x) => x.title),
                activeFilters: search.getAll(URL_FILTER_KEY2),
                filterKey: URL_FILTER_KEY2
              }, void 0, !1, {
                fileName: "app/routes/__layout/blogg/index.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__layout/blogg/index.tsx",
              lineNumber: 64,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              className: "grid gap-12 sm:gap-10 md:gap-8 lg:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center",
              children: data.items.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BloggCard, {
                  bloggEntry: x
                }, x._id, !1, {
                  fileName: "app/routes/__layout/blogg/index.tsx",
                  lineNumber: 75,
                  columnNumber: 17
                }, this)
              }, x._id, !1, {
                fileName: "app/routes/__layout/blogg/index.tsx",
                lineNumber: 74,
                columnNumber: 15
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/__layout/blogg/index.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__layout/blogg/index.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__layout/blogg/index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__layout/blogg/index.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
var BloggCard = ({ bloggEntry }) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
    prefetch: "intent",
    to: (_a = bloggEntry.slug) == null ? void 0 : _a.current,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
      image: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "relative pb-[50%]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: "absolute h-full w-full object-cover",
          alt: "",
          src: urlFor(bloggEntry.mainImage).size(4500 / 5, 3e3 / 5).url()
        }, void 0, !1, {
          fileName: "app/routes/__layout/blogg/index.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__layout/blogg/index.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-xl font-bold",
          children: bloggEntry.title
        }, void 0, !1, {
          fileName: "app/routes/__layout/blogg/index.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: bloggEntry.authors.map((author) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-grey",
            children: author.name
          }, author._id, !1, {
            fileName: "app/routes/__layout/blogg/index.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/__layout/blogg/index.tsx",
          lineNumber: 105,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-sm font-light text-grey-dark",
          children: new Date(bloggEntry.publishedAt).toLocaleDateString("no", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          })
        }, void 0, !1, {
          fileName: "app/routes/__layout/blogg/index.tsx",
          lineNumber: 112,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__layout/blogg/index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__layout/blogg/index.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
};

// app/routes/__layout/partnere.tsx
var partnere_exports = {};
__export(partnere_exports, {
  default: () => Partnere
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Partnere() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Amazon Web Services",
        titleAs: "h1",
        children: "I Capra er vi stolte av \xE5 v\xE6re et av de f\xE5 virkelig store norske kompetansemilj\xF8ene p\xE5 AWS."
      }, void 0, !1, {
        fileName: "app/routes/__layout/partnere.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        className: "py-0 px-0 w-full",
        title: "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-peach-20 flex flex-row items-center py-[5%] px-[10%] ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                "Som",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "https://aws.amazon.com/blogs/apn/",
                  className: "font-bold underline",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "APN Advanced Tier Consulting Partner"
                }, void 0, !1, {
                  fileName: "app/routes/__layout/partnere.tsx",
                  lineNumber: 18,
                  columnNumber: 13
                }, this),
                " ",
                "med over 40 sertifiserte medarbeidere og dyp erfaring fra noen av de mest innovative implementeringene i Norge, gj\xF8r vi overgangen til sky til et smertefritt paradigmeskifte."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__layout/partnere.tsx",
              lineNumber: 16,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
              title: "AWS partner network bilde",
              className: "w-[340px] h-[90px] py-0 px-0"
            }, void 0, !1, {
              fileName: "app/routes/__layout/partnere.tsx",
              lineNumber: 30,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__layout/partnere.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__layout/partnere.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Andre partnere",
        titleAs: "h2",
        children: "I Capra har vi flere partnere som vi setter stor pris p\xE5. Vi st\xF8tter store og sm\xE5 akt\xF8rer som Capra og v\xE5re ansatte bryr seg om."
      }, void 0, !1, {
        fileName: "app/routes/__layout/partnere.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        className: "py-0 px-y h-[500px]",
        title: "Kode 24 | Oslo Architect | Teknologihuset | Kongsvinger Tennisklubb"
      }, void 0, !1, {
        fileName: "app/routes/__layout/partnere.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CallToActionBox, {
        title: "Vi skriver ofte om partnerne v\xE5re i bloggen",
        description: "Sjekk ut hva som skjer i og rundt Capra",
        linkText: "Les bloggen"
      }, void 0, !1, {
        fileName: "app/routes/__layout/partnere.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactForm, {
        title: "Hvordan kan vi hjelpe deg?"
      }, void 0, !1, {
        fileName: "app/routes/__layout/partnere.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/partnere.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/__layout/ansatte.tsx
var ansatte_exports = {};
__export(ansatte_exports, {
  AnsattCard: () => AnsattCard,
  default: () => Ansatte,
  loader: () => loader7
});
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), URL_FILTER_KEY3 = "kategori", loader7 = async ({ request }) => {
  let [allItems, icons] = await Promise.all([
    sanityClient.query(
      '* [_type == "author" && employee == true] | order(name){ ..., filter[]-> }'
    ),
    fetchImageAssets([
      "icon-website",
      "icon-twitter",
      "icon-linkedin",
      "icon-github"
    ])
  ]);
  allItems.forEach((item) => {
    item.filter === null && (item.filter = []);
  });
  let filters = allItems.flatMap((x) => x.filter);
  filters = uniqueBy(filters, (x) => x._id);
  let searchParams = new URL(request.url).searchParams, activeFilters = new Set(searchParams.getAll(URL_FILTER_KEY3)), filteredItems = allItems.filter(
    (x) => activeFilters.size === 0 || x.filter.some((filter) => activeFilters.has(filter.title))
  );
  return json({ items: filteredItems, filters, icons });
};
function Ansatte() {
  let data = useLoaderData(), [search] = useSearchParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-7xl w-full sm:w-11/12 flex flex-col gap-12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
            title: "Kontakt oss i Capra",
            titleAs: "h1",
            children: "Vi vil gjerne h\xF8re fra deg."
          }, void 0, !1, {
            fileName: "app/routes/__layout/ansatte.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col gap-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
                method: "get",
                action: ".",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilterRow, {
                  filters: data.filters.map((x) => x.title),
                  activeFilters: search.getAll(URL_FILTER_KEY3),
                  filterKey: URL_FILTER_KEY3
                }, void 0, !1, {
                  fileName: "app/routes/__layout/ansatte.tsx",
                  lineNumber: 66,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__layout/ansatte.tsx",
                lineNumber: 65,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                className: "grid gap-12 sm:gap-10 md:gap-8 lg:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center",
                children: data.items.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnsattCard, {
                    employee: x,
                    icons: data.icons
                  }, void 0, !1, {
                    fileName: "app/routes/__layout/ansatte.tsx",
                    lineNumber: 76,
                    columnNumber: 17
                  }, this)
                }, x._id, !1, {
                  fileName: "app/routes/__layout/ansatte.tsx",
                  lineNumber: 75,
                  columnNumber: 15
                }, this))
              }, void 0, !1, {
                fileName: "app/routes/__layout/ansatte.tsx",
                lineNumber: 73,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__layout/ansatte.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/ansatte.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactForm, {
        title: "Snakk med oss om dine IT-utfordringer!"
      }, void 0, !1, {
        fileName: "app/routes/__layout/ansatte.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/ansatte.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
var AnsattCard = ({ employee, icons }) => {
  let classes = {
    icon: "w-6 h-6 transition-all hover:invert"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
    image: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "relative pb-[66%] md:pb-[100%]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        className: "absolute h-full w-full object-cover",
        alt: `Bilde av ${employee.name}`,
        src: urlFor(employee.image).size(4500 / 5, 3e3 / 5).url()
      }, void 0, !1, {
        fileName: "app/routes/__layout/ansatte.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__layout/ansatte.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-lg font-bold color-secondary\xA8",
            children: employee.name
          }, void 0, !1, {
            fileName: "app/routes/__layout/ansatte.tsx",
            lineNumber: 113,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: `mailto:${employee.email}`,
            className: "underline",
            children: employee.email
          }, void 0, !1, {
            fileName: "app/routes/__layout/ansatte.tsx",
            lineNumber: 114,
            columnNumber: 9
          }, this),
          employee.phone && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: `tel:+47${employee.phone.replace(/\s/g, "")}`,
            className: "underline",
            children: employee.phone
          }, void 0, !1, {
            fileName: "app/routes/__layout/ansatte.tsx",
            lineNumber: 118,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/ansatte.tsx",
        lineNumber: 112,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-wrap gap-1",
        children: employee.filter.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
          variant: "solid",
          color: "main",
          size: "sm",
          children: x.title
        }, x._id, !1, {
          fileName: "app/routes/__layout/ansatte.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/__layout/ansatte.tsx",
        lineNumber: 128,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-auto flex gap-1",
        children: [
          employee.linkedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: employee.linkedIn,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              alt: "linkedin",
              className: classes.icon,
              src: icons["icon-linkedin"].imageUrl
            }, void 0, !1, {
              fileName: "app/routes/__layout/ansatte.tsx",
              lineNumber: 140,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__layout/ansatte.tsx",
            lineNumber: 139,
            columnNumber: 11
          }, this),
          employee.twitter && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: employee.twitter,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              alt: "twitter",
              className: classes.icon,
              src: icons["icon-twitter"].imageUrl
            }, void 0, !1, {
              fileName: "app/routes/__layout/ansatte.tsx",
              lineNumber: 149,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__layout/ansatte.tsx",
            lineNumber: 148,
            columnNumber: 11
          }, this),
          employee.github && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: employee.github,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              alt: "github",
              className: classes.icon,
              src: icons["icon-github"].imageUrl
            }, void 0, !1, {
              fileName: "app/routes/__layout/ansatte.tsx",
              lineNumber: 158,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__layout/ansatte.tsx",
            lineNumber: 157,
            columnNumber: 11
          }, this),
          employee.website && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: employee.website,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              alt: "nettside",
              className: classes.icon,
              src: icons["icon-website"].imageUrl
            }, void 0, !1, {
              fileName: "app/routes/__layout/ansatte.tsx",
              lineNumber: 167,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__layout/ansatte.tsx",
            lineNumber: 166,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/ansatte.tsx",
        lineNumber: 137,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/ansatte.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
};

// app/routes/__layout/mentor.tsx
var mentor_exports = {};
__export(mentor_exports, {
  default: () => Mentor
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Mentor() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Er du en teknologistudent i Oslo og \xF8nsker veiledning fra en mentor?",
        titleAs: "h1",
        children: "Vi tror mangelen p\xE5 erfaring er det st\xF8rste hinderet mellom teknologistudenter og dr\xF8mmejobben. Derfor \xF8nsker Capra \xE5 veilede fem studenter gjennom v\xE5ren 2022."
      }, void 0, !1, {
        fileName: "app/routes/__layout/mentor.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        title: "S\xF8k her!",
        className: "w-60"
      }, void 0, !1, {
        fileName: "app/routes/__layout/mentor.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        className: "w-full h-[500px]",
        title: "Din egen mentor | CV- og LinkedIn-kurs | Oppstart midten av februar"
      }, void 0, !1, {
        fileName: "app/routes/__layout/mentor.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Hva f\xE5r du ut av det?",
        image: void 0,
        height: "40vw",
        color: "peach",
        children: "Du f\xE5r din egen helt egne mentor som f\xF8lger deg gjennom et semester. M\xE5let er \xE5 hjelpe deg til \xE5 f\xE5 din dr\xF8mmejobb etter studiene, enten du vil bli konsulent eller noe helt annet. Rekrutteringsgjengen holder et CV- og LinkedIn-kurs for \xE5 hjelpe deg p\xE5 veien. I tillegg er det planlagt flere fellessamlinger der du kan bli kjent med de andre mentorene og menteene."
      }, void 0, !1, {
        fileName: "app/routes/__layout/mentor.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Hva ser vi etter?",
        image: void 0,
        height: "40vw",
        direction: "right",
        color: "bordeaux",
        children: "Vi ser etter deg som g\xE5r i 1-3. klasse og som \xF8nsker \xE5 forberede seg til det faktiske arbeidslivet. Vi er ikke opptatt av karakterer, og du trenger heller ikke ha et \xF8nske om \xE5 jobbe i Capra etter studiene."
      }, void 0, !1, {
        fileName: "app/routes/__layout/mentor.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CallToActionBox, {
        title: "Vil du ha en egen mentor?",
        description: "Send en s\xF8knad til mentorprogrammet v\xE5rt da vel!",
        linkText: "S\xF8knadsskjema"
      }, void 0, !1, {
        fileName: "app/routes/__layout/mentor.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/mentor.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/__layout/om-oss.tsx
var om_oss_exports = {};
__export(om_oss_exports, {
  default: () => OmOss,
  loader: () => loader8,
  valuePropositions: () => valuePropositions
});
init_esm();

// app/components/bubbles/bubble-grid.tsx
var import_react23 = __toESM(require_react());

// app/components/bubbles/bubble.tsx
var import_react22 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), Bubble = ({ position, children, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: classNames(
    "absolute rounded-full overflow-hidden select-none transition-[top,left,width,height] ease-in-out duration-500",
    "border border-light-blue",
    rest.onClick && "cursor-pointer hover:scale-105 active:scale-110"
  ),
  style: { ...position },
  ...rest,
  children
}, void 0, !1, {
  fileName: "app/components/bubbles/bubble.tsx",
  lineNumber: 20,
  columnNumber: 5
}, this), BubbleContainer = ({
  positions: positions3,
  items,
  bubbleEffect,
  className
}) => {
  let maxBubbleCount = Math.min(positions3.length, items.length), [count, setCount] = (0, import_react22.useState)(0), triggerBubbling = () => setCount((x) => x + 1), updatedPositions;
  return bubbleEffect === "shift" ? updatedPositions = shiftedBy(positions3, count) : bubbleEffect === "shuffle" ? updatedPositions = shuffled(positions3) : updatedPositions = positions3, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `relative ${className}`,
    children: items.slice(0, maxBubbleCount).map((x, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bubble, {
      position: updatedPositions[i],
      onClick: bubbleEffect !== "none" ? triggerBubbling : void 0,
      children: x
    }, i, !1, {
      fileName: "app/components/bubbles/bubble.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/bubbles/bubble.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
};

// app/components/bubbles/bubble-grid.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), BubbleGrid = ({
  items,
  bubbleEffect = "shuffle"
}) => {
  var _a;
  let ref = (0, import_react23.useRef)(null);
  useWindowWidth(0);
  let rect = ((_a = ref.current) == null ? void 0 : _a.getBoundingClientRect()) ?? {
    width: 400,
    height: 600
  }, positions3 = createGridPositions(rect.width, rect.height, items.length);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "min-h-[600px] max-w-4xl h-full w-full",
    ref,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BubbleContainer, {
      items,
      bubbleEffect,
      positions: positions3
    }, void 0, !1, {
      fileName: "app/components/bubbles/bubble-grid.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/bubbles/bubble-grid.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}, createGridPositions = (w, h, length) => {
  let x = h * h / length;
  if (length === 0 || x === 0)
    return [];
  let dim = Math.sqrt(x), cols = Math.floor(w / dim), offset = Math.round((w - dim * cols) / 2), rows = Math.ceil(h / dim);
  return [...Array(rows).keys()].flatMap((i) => [...Array(cols).keys()].map((j) => ({
    width: Math.round(dim),
    height: Math.round(dim),
    top: i * Math.round(dim),
    left: offset + j * Math.round(dim)
  }))).map(
    (x2) => ({
      top: `${x2.top}px`,
      left: `${x2.left}px`,
      width: `${x2.width}px`,
      height: `${x2.height}px`
    })
  );
};

// app/components/bubbles/capra-helper.server.ts
var fetchEmployeeImages = async () => (await sanityClient.query(
  '* [_type == "author" && image.hotspot.x != null] | order(name) {..., image{..., asset->}}'
)).map((x) => x.image).filter(typedBoolean).map((image) => urlFor(image).size(120, 120).url());

// app/components/value-wheel/value-wheel.tsx
var import_react25 = __toESM(require_react());

// app/components/value-wheel/bubble.tsx
var import_react24 = __toESM(require_react());

// app/components/value-wheel/text-span.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), reducefn = (n) => (acc, _word, i, words) => i % n === 0 ? acc.concat([words.slice(i, i + n)]) : acc, mapfn = (x) => (line, i) => {
  let tprops = {
    key: `word-${i}`,
    x
  };
  return i > 0 && (tprops.dy = 5), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tspan", {
    ...tprops,
    children: line.join(" ")
  }, void 0, !1, {
    fileName: "app/components/value-wheel/text-span.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}, TextSpan = ({ x, y, style, text, wordsPerLine }) => {
  let spans = text.split(" ").filter((w) => !(/\s/.test(w) || w.length < 1)).reduce(reducefn(wordsPerLine), []).map(mapfn(x)), adjustY = spans.length > 1 ? y - spans.length * 1.5 : y;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("text", {
    style,
    y: adjustY,
    textAnchor: "middle",
    children: spans
  }, void 0, !1, {
    fileName: "app/components/value-wheel/text-span.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
};

// app/components/value-wheel/bubble.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), canAnimate = (ref) => ref && ref.current && "beginElement" in ref.current, AnimatedBubble = ({
  isActive,
  style,
  onClick,
  textColor,
  textStyles,
  text
}) => {
  let beginRef = (0, import_react24.useRef)(void 0), endRef = (0, import_react24.useRef)(null), wasActive = (0, import_react24.useRef)(isActive), className = `animated-bubble ${isActive ? "active" : ""}`;
  return (0, import_react24.useEffect)(() => {
    let doAnimBegin = !wasActive.current && isActive, doAnimEnd = wasActive.current && !isActive;
    doAnimBegin && canAnimate(beginRef) && beginRef.current.beginElement(), doAnimEnd && canAnimate(endRef) && endRef.current.beginElement(), wasActive.current !== isActive && (wasActive.current = isActive);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
    className,
    onClick,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
        r: 15,
        cx: 50,
        cy: 50,
        style: {
          ...style,
          stroke: "white",
          strokeWidth: "0.5",
          cursor: "pointer"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
            ref: beginRef,
            attributeName: "r",
            begin: "indefinite",
            dur: "125ms",
            to: 35,
            fill: "freeze"
          }, void 0, !1, {
            fileName: "app/components/value-wheel/bubble.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
            ref: endRef,
            attributeName: "r",
            begin: "indefinite",
            dur: "125ms",
            to: 15,
            fill: "freeze"
          }, void 0, !1, {
            fileName: "app/components/value-wheel/bubble.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/value-wheel/bubble.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextSpan, {
        x: 50,
        y: 50,
        style: {
          ...textStyles,
          fontSize: "2.8pt",
          fill: textColor,
          cursor: "pointer"
        },
        text,
        wordsPerLine: 6
      }, void 0, !1, {
        fileName: "app/components/value-wheel/bubble.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/value-wheel/bubble.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
};

// app/components/value-wheel/filter.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), Filter = ({ id }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("filter", {
  id,
  height: "200%",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("feGaussianBlur", {
      in: "SourceAlpha",
      stdDeviation: ".33"
    }, void 0, !1, {
      fileName: "app/components/value-wheel/filter.tsx",
      lineNumber: 7,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("feOffset", {
      dx: "0",
      dy: ".33",
      result: "offsetblur"
    }, void 0, !1, {
      fileName: "app/components/value-wheel/filter.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("feComponentTransfer", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("feFuncA", {
        type: "linear",
        slope: ".33"
      }, void 0, !1, {
        fileName: "app/components/value-wheel/filter.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/components/value-wheel/filter.tsx",
      lineNumber: 10,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("feMerge", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("feMergeNode", {}, void 0, !1, {
          fileName: "app/components/value-wheel/filter.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("feMergeNode", {
          in: "SourceGraphic"
        }, void 0, !1, {
          fileName: "app/components/value-wheel/filter.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/value-wheel/filter.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/value-wheel/filter.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this);

// app/components/value-wheel/utils.ts
var polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}, createArc = (x, y, radius, startAngle, endAngle) => {
  let start = polarToCartesian(x, y, radius, endAngle), end = polarToCartesian(x, y, radius, startAngle), largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return [start.x, start.y, radius, radius, 0, largeArcFlag, 0, end.x, end.y];
}, createAngles = (nslices, margin) => (i, offset = 0) => {
  let incr = 360 / nslices, angle1 = 90 + i * incr, angle2 = angle1 + incr;
  return [angle1 + offset + margin, angle2 + offset - margin];
}, getFlags = ({ invert = !1 }) => invert ? [1, 0, 1] : [0, 0, 0];

// app/components/value-wheel/slice.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), $j = (ary, ...args) => {
  if (!Array.isArray(ary))
    throw new Error("$j function only works with arrays.");
  return ary.slice(...args).join(" ");
}, Slice = ({
  arc1,
  arc2,
  filter,
  style,
  text,
  textXy,
  textColor,
  textStyles,
  onClick
}) => {
  let id = "slice-" + arc1.concat(arc2).map(Math.round).join("."), args = {
    d: $j(
      [
        `M ${$j(arc1, 0, 2)}`,
        `A ${$j(arc1, 2)}`,
        `L ${$j(arc2, -2)}`,
        `A ${$j(arc2, 2, 4)} ${$j(getFlags({ invert: !0 }))} ${$j(
          arc2,
          0,
          2
        )}`,
        `L ${$j(arc1, 0, 2)}`
      ],
      0
    ),
    id,
    filter,
    style
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
    style: { cursor: "pointer" },
    onClick: () => onClick(),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        ...args
      }, void 0, !1, {
        fileName: "app/components/value-wheel/slice.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("text", {
        x: textXy[0],
        y: textXy[1],
        fill: textColor,
        style: {
          ...textStyles,
          fontSize: "2.5pt",
          fontWeight: "bold",
          textAnchor: "middle",
          dominantBaseline: "central",
          textTransform: "uppercase"
        },
        children: text
      }, void 0, !1, {
        fileName: "app/components/value-wheel/slice.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/value-wheel/slice.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
};

// app/components/value-wheel/donut.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), Donut = ({
  title,
  valuePropositions: valuePropositions2,
  active,
  onClick
}) => {
  var _a, _b, _c, _d;
  let nodes = valuePropositions2, x = 50, y = 50, rad1 = 46, rad2 = 17, rad3 = 32, nslices = 5, margin = 360 / 100 * 0.5, $angles = createAngles(nslices, margin), slices = nodes.map((_d2, idx) => {
    let offsetRad = active === idx ? 2 : 0, angles = $angles(idx, 0), textAngles = $angles(idx, 38);
    return [
      createArc(x, y, rad1 + offsetRad, ...angles),
      createArc(x, y, rad2 + offsetRad, ...angles),
      createArc(x, y, rad3 + offsetRad, ...textAngles)
    ];
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    style: {
      width: "100%",
      height: "100%",
      userSelect: "none"
    },
    viewBox: "0 0 100 100",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Filter, {
        id: "shadow"
      }, void 0, !1, {
        fileName: "app/components/value-wheel/donut.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this),
      slices.map(([arc1, arc2, arc3], idx) => {
        let key = arc1.map(Math.floor).join("."), textXy = arc3.slice(-2).map(Math.round);
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slice, {
          filter: "url(#shadow)",
          onClick: () => onClick(idx),
          arc1,
          arc2,
          textXy,
          text: nodes[idx].text,
          textColor: nodes[idx].textColor,
          style: {
            stroke: nodes[idx].color,
            fill: nodes[idx].color,
            strokeWidth: "0.33"
          }
        }, `slice-${key}`, !1, {
          fileName: "app/components/value-wheel/donut.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("text", {
        x: 50,
        y: 51,
        style: {
          textAnchor: "middle",
          fill: "black",
          fontSize: "2.5pt",
          fontWeight: "bold",
          textTransform: "uppercase"
        },
        children: title
      }, void 0, !1, {
        fileName: "app/components/value-wheel/donut.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedBubble, {
        isActive: active > -1,
        style: {
          stroke: (_a = nodes[active]) == null ? void 0 : _a.color,
          fill: ((_b = nodes[active]) == null ? void 0 : _b.color) || "white",
          strokeWidth: 0.33
        },
        textColor: (_c = nodes[active]) == null ? void 0 : _c.textColor,
        onClick: () => onClick(active),
        text: ((_d = nodes[active]) == null ? void 0 : _d.content) || title
      }, void 0, !1, {
        fileName: "app/components/value-wheel/donut.tsx",
        lineNumber: 90,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/value-wheel/donut.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
};

// app/components/value-wheel/value-wheel.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), ValueWheel = (props) => {
  let [active, setActive] = (0, import_react25.useState)(-1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-5/6 max-w-xl my-0 mx-auto",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Donut, {
      ...props,
      active,
      onClick: (idx) => {
        setActive(idx === active ? -1 : idx);
      }
    }, void 0, !1, {
      fileName: "app/components/value-wheel/value-wheel.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/value-wheel/value-wheel.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// app/routes/__layout/om-oss.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), loader8 = async () => {
  let [images, employeeImages] = await Promise.all([
    fetchImageAssets([]),
    fetchEmployeeImages()
  ]);
  return json({ images, employeeImages });
};
function OmOss() {
  let { employeeImages } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Om oss",
        titleAs: "h1",
        children: "Vi er et IT-konsulentselskap best\xE5ende av de beste folkene i landet. Her jobber vi like fullt med hjertet som med hjernen."
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoBox, {
        title: "Hvem er vi?",
        children: "Capra ble startet i 2005 og er i dag fremdeles et uavhengig og heleid norskt selskap . V\xE5r rolle er \xE5 inspirere gjennom innovativ teknologi og l\xF8sninger, ikke bare for kundene v\xE5re, men hele bransjen. Vi tilegner, deler, bruker og utvikler kunnskap og l\xF8sninger for oss selv og for kundene v\xE5re."
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "flex flex-col gap-12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
            title: "Verdier driver oss i riktig retning",
            titleAs: "h2",
            children: "Verdiene er egenskaper som vi setter pris p\xE5 hos v\xE5re kollegaer. Vi bruker verdiene n\xE5r vi tar beslutninger, hver eneste dag!"
          }, void 0, !1, {
            fileName: "app/routes/__layout/om-oss.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValueWheel, {
            title: "V\xE5re Verdier",
            valuePropositions
          }, void 0, !1, {
            fileName: "app/routes/__layout/om-oss.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "flex flex-col gap-12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
            title: "Vi skal bli passe store",
            titleAs: "h2",
            children: "Vi vil v\xE6re et selskap hvor alle kjenner alle, hvor vi er sm\xE5 nok til \xE5 v\xE6re smidig, men samtidig store nok til \xE5 ha innflytelse. Derfor skal vi ikke bli fler enn 140 personer. Det er akkurat nok folk til \xE5 fylle det omr\xE5det under!"
          }, void 0, !1, {
            fileName: "app/routes/__layout/om-oss.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BubbleGrid, {
            items: employeeImages.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: x,
              alt: "Ansatt i Capra"
            }, x, !1, {
              fileName: "app/routes/__layout/om-oss.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__layout/om-oss.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Capra er organisert i team",
        titleAs: "h2",
        children: "Vi bryr oss ikke om titler eller hieraki. Derfor har vi ingen ledergruppe, men heller team som best\xE5r av kollegaer som har frivillig meldt seg til \xE5 gj\xF8re Capra bedre."
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        className: "w-11/12 h-[400px]",
        title: "Forskjelige teams"
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Visjoner for fremtiden",
        titleAs: "h2",
        children: "De neste \xE5rene skal vi fokusere p\xE5 fire hovedomr\xE5der som skal gj\xF8re oss, v\xE5re ansatte og v\xE5re kunder bedre."
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        className: "w-11/12 h-[400px]",
        title: "Organisasjon | Forretningsutvikling | Markedsf\xF8ring | Kompetanse"
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoBox, {
        title: 'Hva betyr egentlig "Capra"?',
        className: "bg-light-blue-20",
        children: "Navnet Capra betyr geit p\xE5 latin. Geiter er naturlig nysgjerrige og intelligente , og de lever gjerne i flokk , samtidig som de har evnen til \xE5 v\xE6re selvstendige . Det syns vi egentlig er ganske beskrivende for de geitene som jobber i Capra."
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Vi dyrker innovasjon",
        titleAs: "h2",
        children: "Det \xE5 l\xE6re og utvikle oss, sammen med frihet til \xE5 pr\xF8ve ut ideer, gir grobunn for nyskapning og forandring. Det er noe av det viktigste vi gj\xF8r i Capra."
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Bratte l\xE6ringskurver",
        image: void 0,
        height: "40vw",
        color: "peach",
        children: "For \xE5 bli de beste p\xE5 v\xE5re fagomr\xE5der, m\xE5 vi kunne l\xE6re. Derfor setter vi av tid til fagsamlinger og inviduell l\xE6ring ."
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Du eier ideene dine",
        image: void 0,
        height: "40vw",
        direction: "right",
        color: "lightBlue",
        children: "Vi vet at mange liker \xE5 holde p\xE5 med hobby prosjekter. S\xE5 lenge prosjektet ikke faller under Capras anvendelsesomr\xE5de s\xE5 er ideen din. Det betyr at den appen eller SaaS-l\xF8sningen du bygger er din og bare din ."
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 111,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Tenk selv, fremfor \xE5 ha regler",
        titleAs: "h2",
        children: "Kloke mennesker tar kloke valg! Vi vil tenke selv fremfor \xE5 ha mange regler . Vi tror det inspirerer til l\xF8sninger litt utenfor boksen."
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        className: "py-0 px-0 w-[550px]",
        title: "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "w-full flex flex-col gap-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
              size: "small",
              title: "Vi jobber hvor vi vil, s\xE5 lenge kunden er happy."
            }, void 0, !1, {
              fileName: "app/routes/__layout/om-oss.tsx",
              lineNumber: 131,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
              size: "small",
              title: "Vi styrer egne kompetanse- og hardwarebudsjetter."
            }, void 0, !1, {
              fileName: "app/routes/__layout/om-oss.tsx",
              lineNumber: 135,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
              size: "small",
              title: "Vi har ingen obligatoriske internaktiviteter - tiden v\xE5r styrer vi selv."
            }, void 0, !1, {
              fileName: "app/routes/__layout/om-oss.tsx",
              lineNumber: 139,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__layout/om-oss.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 129,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CallToActionBox, {
        title: "Vi arrangerer en kick-ass konferanse",
        description: "Vi elsker \xE5 l\xE6re bort det vi kan. Derfor arrangerer vi internkonferanse hvert \xE5r!",
        linkText: "Les om CapraCon"
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 146,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Kontakt",
        titleAs: "h2",
        children: "Vi vil gjerne h\xF8re fra deg!"
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 152,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        badge: !0,
        className: "w-full",
        title: "Kontakt oss kort"
      }, void 0, !1, {
        fileName: "app/routes/__layout/om-oss.tsx",
        lineNumber: 156,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/om-oss.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
var InfoBox = ({ title, children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
  badge: !0,
  title: "",
  className: `border-none bg-peach-20 w-11/12 max-w-7xl ${className ?? ""}`,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "uppercase font-bold text-main",
      children: title
    }, void 0, !1, {
      fileName: "app/routes/__layout/om-oss.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children
    }, void 0, !1, {
      fileName: "app/routes/__layout/om-oss.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/routes/__layout/om-oss.tsx",
  lineNumber: 168,
  columnNumber: 5
}, this), valuePropositions = [
  {
    id: "value-proposition-1",
    textColor: "#03173E",
    text: "fleksibel",
    content: "Vi har fokus p\xE5 frihet og er \xE5pen for endringer.",
    color: "#F8D3BC"
  },
  {
    id: "value-proposition-2",
    textColor: "#03173E",
    text: "stolt",
    content: `Vi har yrkesstolthet og f\xF8ler eierskap. 
  Vi tar ansvar utover det som forventes av oss.`,
    color: "#C1DCE5"
  },
  {
    id: "value-proposition-3",
    textColor: "#fff",
    text: "l\xE6rende",
    content: `Vi l\xE6rer mye og fort, og 
  vi l\xE6rer bort. Vi s\xF8ker forbedring og 
  utfordrer etablerte sannheter.`,
    color: "#EA5154"
  },
  {
    id: "value-proposition-4",
    textColor: "#fff",
    text: "uselvisk",
    content: `Vi er inkluderende og vi bryr oss. Vi unner og 
  feirer andres suksess.`,
    color: "#03173E"
  },
  {
    id: "value-proposition-5",
    textColor: "#fff",
    text: "\xE5pen",
    content: `Vi er uformelle og \xE6rlige. 
  Vi deler alt, med mindre norsk lov sier at vi ikke kan.`,
    color: "#5D2332"
  }
];

// app/routes/__layout/index.tsx
var layout_exports2 = {};
__export(layout_exports2, {
  default: () => Index,
  loader: () => loader9,
  meta: () => meta6
});
init_esm();

// app/components/bubbles/bubble-sandwich.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), BubbleSandwich = ({
  items,
  children,
  bubbleEffect = "shift"
}) => {
  let middleIndex = Math.floor(items.length / 2), items1 = items.slice(0, middleIndex), items2 = items.slice(middleIndex);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "min-h-[300px] max-w-4xl sm:grid",
    style: { gridTemplateColumns: "22% 54% 22%" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BubbleContainer, {
        items: items1,
        positions: positions1,
        bubbleEffect,
        className: "hidden sm:block"
      }, void 0, !1, {
        fileName: "app/components/bubbles/bubble-sandwich.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children
      }, void 0, !1, {
        fileName: "app/components/bubbles/bubble-sandwich.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BubbleContainer, {
        items: items2,
        positions: positions2,
        bubbleEffect,
        className: "hidden sm:block"
      }, void 0, !1, {
        fileName: "app/components/bubbles/bubble-sandwich.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/bubbles/bubble-sandwich.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}, positions1 = [
  {
    top: "0%",
    left: "40%",
    width: "70px",
    height: "70px"
  },
  {
    top: "15%",
    left: "5%",
    width: "80px",
    height: "80px"
  },
  {
    top: "25%",
    left: "50%",
    width: "60px",
    height: "60px"
  },
  {
    top: "46%",
    left: "3%",
    width: "75px",
    height: "75px"
  },
  {
    top: "46%",
    left: "45%",
    width: "65px",
    height: "65px"
  },
  {
    top: "66%",
    left: "60%",
    width: "75px",
    height: "75px"
  }
], positions2 = [
  {
    top: "0%",
    left: "40%",
    width: "80px",
    height: "80px"
  },
  {
    top: "10%",
    left: "5%",
    width: "70px",
    height: "70px"
  },
  {
    top: "25%",
    left: "60%",
    width: "60px",
    height: "60px"
  },
  {
    top: "36%",
    left: "16%",
    width: "75px",
    height: "75px"
  },
  {
    top: "46%",
    left: "60%",
    width: "65px",
    height: "65px"
  },
  {
    top: "66%",
    left: "6%",
    width: "75px",
    height: "75px"
  },
  {
    top: "70%",
    left: "44%",
    width: "75px",
    height: "75px"
  }
];

// app/components/typing-text.tsx
var import_react27 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), timings = {
  typing: {
    delay: 1e3,
    speed: 50
  },
  erasing: {
    delay: 2e3,
    speed: 50
  }
}, TypingText = ({
  text,
  typing = timings.typing,
  erasing = timings.erasing
}) => {
  let [{ state, displayText }, tick] = useTextReducer(
    typeof text == "string" ? [text] : text
  );
  return (0, import_react27.useEffect)(() => {
    let timeout, interval;
    switch (state) {
      case "idle":
        timeout = setTimeout(
          tick,
          displayText.length === 0 ? typing.delay : erasing.delay
        );
        break;
      case "typing":
        interval = setInterval(tick, typing.speed);
        break;
      case "erasing":
        interval = setInterval(tick, erasing.speed);
        break;
    }
    return () => {
      clearInterval(interval), clearTimeout(timeout);
    };
  }, [state, erasing, typing]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    children: [
      displayText,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cursor, {}, void 0, !1, {
        fileName: "app/components/typing-text.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/typing-text.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
};
function useTextReducer(texts) {
  return (0, import_react27.useReducer)(
    ({ currentWordIndex, displayText, state }) => {
      if (!(currentWordIndex in texts))
        throw new Error(
          `Unresolvable index: i=${currentWordIndex}, l=${texts.length}`
        );
      let selectedWord = texts[currentWordIndex], currentLength = displayText.length;
      switch (state) {
        case "typing":
          currentLength === selectedWord.length ? state = "idle" : currentLength++;
          break;
        case "erasing":
          currentLength === 0 ? (state = "idle", currentWordIndex++, currentWordIndex in texts || (currentWordIndex = 0)) : currentLength--;
          break;
        case "idle":
          state = currentLength === 0 ? "typing" : "erasing";
          break;
      }
      return {
        state,
        currentWordIndex,
        displayText: selectedWord.substring(0, currentLength)
      };
    },
    {
      currentWordIndex: 0,
      displayText: "",
      state: "idle"
    }
  );
}
var Cursor = () => {
  let [show, setShow] = (0, import_react27.useState)(!0);
  return (0, import_react27.useEffect)(() => {
    let cursorInterval = setInterval(() => {
      setShow((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    className: classNames(
      "inline-block transition-opacity duration-500",
      show ? "opacity-1" : "opacity-0"
    ),
    children: "|"
  }, void 0, !1, {
    fileName: "app/components/typing-text.tsx",
    lineNumber: 140,
    columnNumber: 5
  }, this);
};

// app/routes/__layout/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), meta6 = () => ({
  title: "Capra Consulting: IT-konsulenter med ekspertise i software",
  ogTitle: "Capra Consulting: IT-konsulenter med ekspertise i software",
  description: "Vi er IT-konsulenter innen softwareutvikling og Norges beste p\xE5 sky. I Capra har vi h\xF8y kvalitet p\xE5 v\xE5re ansatte, og det vil vi fortsette med. Bli med oss!"
}), loader9 = async () => {
  let [images, employeeImages] = await Promise.all([
    fetchImageAssets(["tech", "aws"]),
    fetchEmployeeImages().then(shuffled).then((l) => l.slice(0, 13))
  ]);
  return json({ images, employeeImages });
};
function Index() {
  let { images, employeeImages } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col gap-12 w-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
            title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: [
                "Vi er norges beste p\xE5",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TypingText, {
                  text: [
                    "AWS",
                    "selvskryt",
                    "java",
                    "vaffelspising",
                    "javascript",
                    "smash",
                    "agile",
                    "bordtennis"
                  ]
                }, void 0, !1, {
                  fileName: "app/routes/__layout/index.tsx",
                  lineNumber: 43,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__layout/index.tsx",
              lineNumber: 41,
              columnNumber: 13
            }, this),
            titleAs: "h1",
            children: "Bold statement? Absolutt."
          }, void 0, !1, {
            fileName: "app/routes/__layout/index.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex gap-4 justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                variant: "outline",
                href: "/dette-kan-vi",
                children: "Bli kunde?"
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 62,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                variant: "outline",
                href: "/bli-en-av-oss",
                children: "Jobb hos oss!"
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 65,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__layout/index.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
        title: "Hva trenger du?",
        titleAs: "h2",
        children: "Vi elsker \xE5 l\xF8se komplekse problemer, men vi vet at en enkelt arbeidsmetode ikke passer alle. Derfor tilbyr vi to m\xE5ter \xE5 l\xF8se utfordringene dine!"
      }, void 0, !1, {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-4xl w-11/12 flex gap-4 flex-col-reverse md:flex-row",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
            title: "Liflig",
            className: "flex-1",
            style: { minHeight: 340 },
            children: "Du har ideene - la v\xE5rt inhouse team bygge og forvalte hele tjenesten for deg"
          }, void 0, !1, {
            fileName: "app/routes/__layout/index.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-1 grid grid-cols-2 gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardModule, {
                title: "Vi tar det tekniske",
                className: "bg-bordeaux text-white"
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 83,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardModule, {
                title: "Kompetanse p\xE5 laget",
                className: "bg-bordeaux text-white"
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 87,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardModule, {
                title: "Kort oppstartstid",
                className: "bg-bordeaux text-white"
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 91,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardModule, {
                title: "",
                illustration: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "h-full w-full bg-gradient-to-r from-red-200 to-fuchsia-500"
                }, void 0, !1, {
                  fileName: "app/routes/__layout/index.tsx",
                  lineNumber: 98,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 95,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__layout/index.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-4xl w-11/12 flex gap-4 flex-col-reverse md:flex-row-reverse",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
            title: "Konsulenter",
            className: "flex-1",
            style: { minHeight: 340 },
            children: "Trenger du flere gode hoder p\xE5 teamet ditt? Vi gir deg IT-konsulenter med spisskompetanse!"
          }, void 0, !1, {
            fileName: "app/routes/__layout/index.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-1 grid grid-cols-2 gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardModule, {
                title: "Opp i skyen",
                className: "bg-light-blue text-slate-800"
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 110,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardModule, {
                title: "Vi t\xF8r \xE5 r\xE5dgi",
                className: "bg-light-blue text-slate-800"
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 114,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardModule, {
                title: "Faglig sterke",
                className: "bg-light-blue text-slate-800"
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 118,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardModule, {
                title: "",
                illustration: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "h-full w-full bg-gradient-to-r from-sky-200 to-slate-500"
                }, void 0, !1, {
                  fileName: "app/routes/__layout/index.tsx",
                  lineNumber: 125,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__layout/index.tsx",
                lineNumber: 122,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__layout/index.tsx",
            lineNumber: 109,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 104,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Vi er Advanced Tier Consulting Partner",
        image: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: images.aws.imageUrl,
          alt: images.aws.alt
        }, void 0, !1, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 133,
          columnNumber: 16
        }, this),
        height: "32vw",
        color: "peach",
        children: "Vi er et av fire norske selskaper som kan kalle seg AWS-Partner!"
      }, void 0, !1, {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 131,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentAndImageBox, {
        title: "Vi er spesialister",
        image: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: "w-full h-full object-contain overflow-hidden",
          src: images.tech.imageUrl,
          alt: images.tech.alt
        }, void 0, !1, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        height: "35vw",
        direction: "right",
        color: "lightBlue",
        children: "Ingen kan v\xE6re best i alt! Derfor spesialiserer vi oss p\xE5 utvalgte markedsledenede teknologier."
      }, void 0, !1, {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 139,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BubbleSandwich, {
        items: employeeImages.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: x,
          alt: "Ansatt i Capra"
        }, x, !1, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 158,
          columnNumber: 11
        }, this)),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col items-center gap-8 sm:gap-[10vh]",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleAndText, {
              title: "Vi har kickass folk",
              titleAs: "h2",
              children: "I Capra setter vi menneskene f\xF8rst. Vi vet at forn\xF8yde og motiverte folk skaper den beste arbeidsplassen."
            }, void 0, !1, {
              fileName: "app/routes/__layout/index.tsx",
              lineNumber: 162,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
              href: "/ansatte",
              variant: "solid",
              children: "Se v\xE5re ansatte"
            }, void 0, !1, {
              fileName: "app/routes/__layout/index.tsx",
              lineNumber: 166,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 161,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 156,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
        title: "Vi jobber med store akt\xF8rer i Norge",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-wrap gap-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
              title: "Bilde fra sanity",
              className: "h-40 w-40"
            }, void 0, !1, {
              fileName: "app/routes/__layout/index.tsx",
              lineNumber: 174,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
              title: "Bilde fra sanity",
              className: "h-40 w-40"
            }, void 0, !1, {
              fileName: "app/routes/__layout/index.tsx",
              lineNumber: 175,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
              title: "Bilde fra sanity",
              className: "h-40 w-40"
            }, void 0, !1, {
              fileName: "app/routes/__layout/index.tsx",
              lineNumber: 176,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
              title: "Bilde fra sanity",
              className: "h-40 w-40"
            }, void 0, !1, {
              fileName: "app/routes/__layout/index.tsx",
              lineNumber: 177,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 173,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 172,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactForm, {
        title: "Vil du vite mer om hvordan vi kan hjelpe deg?"
      }, void 0, !1, {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 180,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__layout/index.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var CardModule = ({ title, illustration, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
  display: "inline-flex",
  className: `p-0 aspect-square border-none overflow-hidden rounded ${className}`,
  title: "",
  children: [
    illustration,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "font-semibold",
      children: title
    }, void 0, !1, {
      fileName: "app/routes/__layout/index.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/routes/__layout/index.tsx",
  lineNumber: 192,
  columnNumber: 5
}, this);

// app/routes/oliver.tsx
var oliver_exports = {};
__export(oliver_exports, {
  default: () => Oliver
});
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Oliver() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Todo, {
      className: "text-9xl",
      children: "\u{1F410}"
    }, void 0, !1, {
      fileName: "app/routes/oliver.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/oliver.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "0583dc3b", entry: { module: "/build/entry.client-3RNMB42I.js", imports: ["/build/_shared/chunk-FERMNJJA.js", "/build/_shared/chunk-3CPB4T5C.js", "/build/_shared/chunk-42Z7WWMI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FRRP7A6X.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout": { id: "routes/__layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__layout-LZW736ZR.js", imports: ["/build/_shared/chunk-5HQEQBB4.js", "/build/_shared/chunk-AL2N5SUO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__layout/ansatte": { id: "routes/__layout/ansatte", parentId: "routes/__layout", path: "ansatte", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/ansatte-25FHBHVR.js", imports: ["/build/_shared/chunk-YWIH73MO.js", "/build/_shared/chunk-2EB37VFY.js", "/build/_shared/chunk-5ELYOYPK.js", "/build/_shared/chunk-KSGQIP6H.js", "/build/_shared/chunk-XU4LWT62.js", "/build/_shared/chunk-HPLF6M7J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/bli-en-av-oss": { id: "routes/__layout/bli-en-av-oss", parentId: "routes/__layout", path: "bli-en-av-oss", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/bli-en-av-oss-AFFKCJ4Y.js", imports: ["/build/_shared/chunk-2EB37VFY.js", "/build/_shared/chunk-267WS3YS.js", "/build/_shared/chunk-DNM6DI2F.js", "/build/_shared/chunk-XU4LWT62.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/blogg/$slug": { id: "routes/__layout/blogg/$slug", parentId: "routes/__layout", path: "blogg/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/blogg/$slug-EVZZOFDN.js", imports: ["/build/_shared/chunk-HPLF6M7J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/blogg/index": { id: "routes/__layout/blogg/index", parentId: "routes/__layout", path: "blogg", index: !0, caseSensitive: void 0, module: "/build/routes/__layout/blogg/index-A4DK3PK6.js", imports: ["/build/_shared/chunk-KSGQIP6H.js", "/build/_shared/chunk-XU4LWT62.js", "/build/_shared/chunk-HPLF6M7J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/dette-har-vi-gjort/$slug": { id: "routes/__layout/dette-har-vi-gjort/$slug", parentId: "routes/__layout", path: "dette-har-vi-gjort/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/dette-har-vi-gjort/$slug-NGU47N3L.js", imports: ["/build/_shared/chunk-HPLF6M7J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/dette-har-vi-gjort/index": { id: "routes/__layout/dette-har-vi-gjort/index", parentId: "routes/__layout", path: "dette-har-vi-gjort", index: !0, caseSensitive: void 0, module: "/build/routes/__layout/dette-har-vi-gjort/index-NNH44PCQ.js", imports: ["/build/_shared/chunk-5ELYOYPK.js", "/build/_shared/chunk-KSGQIP6H.js", "/build/_shared/chunk-DNM6DI2F.js", "/build/_shared/chunk-XU4LWT62.js", "/build/_shared/chunk-HPLF6M7J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/dette-kan-vi/backend": { id: "routes/__layout/dette-kan-vi/backend", parentId: "routes/__layout", path: "dette-kan-vi/backend", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/dette-kan-vi/backend-NSUID47E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/dette-kan-vi/frontend": { id: "routes/__layout/dette-kan-vi/frontend", parentId: "routes/__layout", path: "dette-kan-vi/frontend", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/dette-kan-vi/frontend-22NPWXJH.js", imports: ["/build/_shared/chunk-YWIH73MO.js", "/build/_shared/chunk-2EB37VFY.js", "/build/_shared/chunk-267WS3YS.js", "/build/_shared/chunk-XU4LWT62.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/dette-kan-vi/index": { id: "routes/__layout/dette-kan-vi/index", parentId: "routes/__layout", path: "dette-kan-vi", index: !0, caseSensitive: void 0, module: "/build/routes/__layout/dette-kan-vi/index-23RYIP26.js", imports: ["/build/_shared/chunk-267WS3YS.js", "/build/_shared/chunk-XU4LWT62.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/dette-kan-vi/it-konsulenter": { id: "routes/__layout/dette-kan-vi/it-konsulenter", parentId: "routes/__layout", path: "dette-kan-vi/it-konsulenter", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/dette-kan-vi/it-konsulenter-JVDHKXP7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/dette-kan-vi/liflig": { id: "routes/__layout/dette-kan-vi/liflig", parentId: "routes/__layout", path: "dette-kan-vi/liflig", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/dette-kan-vi/liflig-3ULJZSQJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/index": { id: "routes/__layout/index", parentId: "routes/__layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__layout/index-SNY5C6JB.js", imports: ["/build/_shared/chunk-WZAENTLN.js", "/build/_shared/chunk-YWIH73MO.js", "/build/_shared/chunk-2EB37VFY.js", "/build/_shared/chunk-267WS3YS.js", "/build/_shared/chunk-XU4LWT62.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/informasjonskapsler": { id: "routes/__layout/informasjonskapsler", parentId: "routes/__layout", path: "informasjonskapsler", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/informasjonskapsler-Y4ISQ6KU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/mentor": { id: "routes/__layout/mentor", parentId: "routes/__layout", path: "mentor", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/mentor-2GOZRL4Q.js", imports: ["/build/_shared/chunk-267WS3YS.js", "/build/_shared/chunk-DNM6DI2F.js", "/build/_shared/chunk-XU4LWT62.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/om-oss": { id: "routes/__layout/om-oss", parentId: "routes/__layout", path: "om-oss", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/om-oss-ZDBGKUI3.js", imports: ["/build/_shared/chunk-WZAENTLN.js", "/build/_shared/chunk-267WS3YS.js", "/build/_shared/chunk-DNM6DI2F.js", "/build/_shared/chunk-XU4LWT62.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/partnere": { id: "routes/__layout/partnere", parentId: "routes/__layout", path: "partnere", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/partnere-X2L4Q2XO.js", imports: ["/build/_shared/chunk-YWIH73MO.js", "/build/_shared/chunk-2EB37VFY.js", "/build/_shared/chunk-DNM6DI2F.js", "/build/_shared/chunk-XU4LWT62.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__layout/personvernerklaering": { id: "routes/__layout/personvernerklaering", parentId: "routes/__layout", path: "personvernerklaering", index: void 0, caseSensitive: void 0, module: "/build/routes/__layout/personvernerklaering-WFASH37A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.contact": { id: "routes/api.contact", parentId: "root", path: "api/contact", index: void 0, caseSensitive: void 0, module: "/build/routes/api.contact-EH5KQ5H4.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/oliver": { id: "routes/oliver", parentId: "root", path: "oliver", index: void 0, caseSensitive: void 0, module: "/build/routes/oliver-OLVFQGP6.js", imports: ["/build/_shared/chunk-AL2N5SUO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sitemap[.]xml": { id: "routes/sitemap[.]xml", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/sitemap[.]xml-Q7JO25MU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-0583DC3B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sitemap[.]xml": {
    id: "routes/sitemap[.]xml",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/api.contact": {
    id: "routes/api.contact",
    parentId: "root",
    path: "api/contact",
    index: void 0,
    caseSensitive: void 0,
    module: api_contact_exports
  },
  "routes/__layout": {
    id: "routes/__layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/__layout/dette-kan-vi/it-konsulenter": {
    id: "routes/__layout/dette-kan-vi/it-konsulenter",
    parentId: "routes/__layout",
    path: "dette-kan-vi/it-konsulenter",
    index: void 0,
    caseSensitive: void 0,
    module: it_konsulenter_exports
  },
  "routes/__layout/dette-har-vi-gjort/$slug": {
    id: "routes/__layout/dette-har-vi-gjort/$slug",
    parentId: "routes/__layout",
    path: "dette-har-vi-gjort/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/__layout/dette-har-vi-gjort/index": {
    id: "routes/__layout/dette-har-vi-gjort/index",
    parentId: "routes/__layout",
    path: "dette-har-vi-gjort",
    index: !0,
    caseSensitive: void 0,
    module: dette_har_vi_gjort_exports
  },
  "routes/__layout/dette-kan-vi/frontend": {
    id: "routes/__layout/dette-kan-vi/frontend",
    parentId: "routes/__layout",
    path: "dette-kan-vi/frontend",
    index: void 0,
    caseSensitive: void 0,
    module: frontend_exports
  },
  "routes/__layout/dette-kan-vi/backend": {
    id: "routes/__layout/dette-kan-vi/backend",
    parentId: "routes/__layout",
    path: "dette-kan-vi/backend",
    index: void 0,
    caseSensitive: void 0,
    module: backend_exports
  },
  "routes/__layout/personvernerklaering": {
    id: "routes/__layout/personvernerklaering",
    parentId: "routes/__layout",
    path: "personvernerklaering",
    index: void 0,
    caseSensitive: void 0,
    module: personvernerklaering_exports
  },
  "routes/__layout/dette-kan-vi/liflig": {
    id: "routes/__layout/dette-kan-vi/liflig",
    parentId: "routes/__layout",
    path: "dette-kan-vi/liflig",
    index: void 0,
    caseSensitive: void 0,
    module: liflig_exports
  },
  "routes/__layout/informasjonskapsler": {
    id: "routes/__layout/informasjonskapsler",
    parentId: "routes/__layout",
    path: "informasjonskapsler",
    index: void 0,
    caseSensitive: void 0,
    module: informasjonskapsler_exports
  },
  "routes/__layout/dette-kan-vi/index": {
    id: "routes/__layout/dette-kan-vi/index",
    parentId: "routes/__layout",
    path: "dette-kan-vi",
    index: !0,
    caseSensitive: void 0,
    module: dette_kan_vi_exports
  },
  "routes/__layout/bli-en-av-oss": {
    id: "routes/__layout/bli-en-av-oss",
    parentId: "routes/__layout",
    path: "bli-en-av-oss",
    index: void 0,
    caseSensitive: void 0,
    module: bli_en_av_oss_exports
  },
  "routes/__layout/blogg/$slug": {
    id: "routes/__layout/blogg/$slug",
    parentId: "routes/__layout",
    path: "blogg/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/__layout/blogg/index": {
    id: "routes/__layout/blogg/index",
    parentId: "routes/__layout",
    path: "blogg",
    index: !0,
    caseSensitive: void 0,
    module: blogg_exports
  },
  "routes/__layout/partnere": {
    id: "routes/__layout/partnere",
    parentId: "routes/__layout",
    path: "partnere",
    index: void 0,
    caseSensitive: void 0,
    module: partnere_exports
  },
  "routes/__layout/ansatte": {
    id: "routes/__layout/ansatte",
    parentId: "routes/__layout",
    path: "ansatte",
    index: void 0,
    caseSensitive: void 0,
    module: ansatte_exports
  },
  "routes/__layout/mentor": {
    id: "routes/__layout/mentor",
    parentId: "routes/__layout",
    path: "mentor",
    index: void 0,
    caseSensitive: void 0,
    module: mentor_exports
  },
  "routes/__layout/om-oss": {
    id: "routes/__layout/om-oss",
    parentId: "routes/__layout",
    path: "om-oss",
    index: void 0,
    caseSensitive: void 0,
    module: om_oss_exports
  },
  "routes/__layout/index": {
    id: "routes/__layout/index",
    parentId: "routes/__layout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: layout_exports2
  },
  "routes/oliver": {
    id: "routes/oliver",
    parentId: "root",
    path: "oliver",
    index: void 0,
    caseSensitive: void 0,
    module: oliver_exports
  }
};

// worker.ts
var import_cloudflare = __toESM(require_dist());
function createRequestHandler2({
  build,
  getLoadContext,
  mode
}) {
  let handleRequest3 = (0, import_cloudflare.createRequestHandler)(build, mode);
  return (context) => {
    let loadContext = getLoadContext == null ? void 0 : getLoadContext(context);
    return handleRequest3(context.request, loadContext);
  };
}
function createPagesFunctionHandler({
  build,
  getLoadContext,
  mode
}) {
  let handleRequest3 = createRequestHandler2({
    build,
    getLoadContext,
    mode
  }), handleFetch = async (context) => {
    let response;
    context.request.headers.delete("if-none-match");
    try {
      response = await context.env.ASSETS.fetch(
        context.request.url,
        context.request.clone()
      ), response = response && response.status >= 200 && response.status < 400 ? new Response(response.body, response) : void 0;
    } catch {
    }
    return response || (response = await handleRequest3(context)), response;
  };
  return async (context) => {
    try {
      return await handleFetch(context);
    } catch (e) {
      return e instanceof Error ? (console.error(e), new Response(e.message || e.toString(), {
        status: 500
      })) : new Response("Internal Error", {
        status: 500
      });
    }
  };
}

// server.ts
var handleRequest2 = createPagesFunctionHandler({
  build: server_build_exports,
  mode: "development",
  getLoadContext: (context) => context.env
});
function onRequest(context) {
  return handleRequest2(context);
}
export {
  onRequest
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @remix-run/cloudflare v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=/build/[[path]].js.map
