function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-editor-develop-developmonet-module"], {
  /***/
  "./node_modules/jquery/dist/jquery.js":
  /*!********************************************!*\
    !*** ./node_modules/jquery/dist/jquery.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesJqueryDistJqueryJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
    * jQuery JavaScript Library v3.5.1
    * https://jquery.com/
    *
    * Includes Sizzle.js
    * https://sizzlejs.com/
    *
    * Copyright JS Foundation and other contributors
    * Released under the MIT license
    * https://jquery.org/license
    *
    * Date: 2020-05-04T22:49Z
    */


    (function (global, factory) {
      "use strict";

      if (true && typeof module.exports === "object") {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ? factory(global, true) : function (w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }

          return factory(w);
        };
      } else {
        factory(global);
      } // Pass this if window is not defined yet

    })(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
      // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
      // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
      // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
      // enough that all such attempts are guarded in a try block.
      "use strict";

      var arr = [];
      var getProto = Object.getPrototypeOf;
      var _slice = arr.slice;
      var flat = arr.flat ? function (array) {
        return arr.flat.call(array);
      } : function (array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};

      var isFunction = function isFunction(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
      };

      var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
      };

      var document = window.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };

      function DOMEval(code, node, doc) {
        doc = doc || document;
        var i,
            val,
            script = doc.createElement("script");
        script.text = code;

        if (node) {
          for (i in preservedScriptAttributes) {
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);

            if (val) {
              script.setAttribute(i, val);
            }
          }
        }

        doc.head.appendChild(script).parentNode.removeChild(script);
      }

      function toType(obj) {
        if (obj == null) {
          return obj + "";
        } // Support: Android <=2.3 only (functionish RegExp)


        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      /* global Symbol */
      // Defining this global in .eslintrc.json would create a danger of using the global
      // unguarded in another place, it seems safer to define global only for this module


      var version = "3.5.1",
          // Define a local copy of jQuery
      jQuery = function jQuery(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
      };

      jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function toArray() {
          return _slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function get(num) {
          // Return all the elements in a clean array
          if (num == null) {
            return _slice.call(this);
          } // Return just the one element from the set


          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function pushStack(elems) {
          // Build a new jQuery matched element set
          var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

          ret.prevObject = this; // Return the newly-formed element set

          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function each(callback) {
          return jQuery.each(this, callback);
        },
        map: function map(callback) {
          return this.pushStack(jQuery.map(this, function (elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function slice() {
          return this.pushStack(_slice.apply(this, arguments));
        },
        first: function first() {
          return this.eq(0);
        },
        last: function last() {
          return this.eq(-1);
        },
        even: function even() {
          return this.pushStack(jQuery.grep(this, function (_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function odd() {
          return this.pushStack(jQuery.grep(this, function (_elem, i) {
            return i % 2;
          }));
        },
        eq: function eq(i) {
          var len = this.length,
              j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function end() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
      };

      jQuery.extend = jQuery.fn.extend = function () {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false; // Handle a deep copy situation

        if (typeof target === "boolean") {
          deep = target; // Skip the boolean and the target

          target = arguments[i] || {};
          i++;
        } // Handle case when target is a string or something (possible in deep copy)


        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        } // Extend jQuery itself if only one argument is passed


        if (i === length) {
          target = this;
          i--;
        }

        for (; i < length; i++) {
          // Only deal with non-null/undefined values
          if ((options = arguments[i]) != null) {
            // Extend the base object
            for (name in options) {
              copy = options[name]; // Prevent Object.prototype pollution
              // Prevent never-ending loop

              if (name === "__proto__" || target === copy) {
                continue;
              } // Recurse if we're merging plain objects or arrays


              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name]; // Ensure proper type for the source value

                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }

                copyIsArray = false; // Never move original objects, clone them

                target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
              } else if (copy !== undefined) {
                target[name] = copy;
              }
            }
          }
        } // Return the modified object


        return target;
      };

      jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function error(msg) {
          throw new Error(msg);
        },
        noop: function noop() {},
        isPlainObject: function isPlainObject(obj) {
          var proto, Ctor; // Detect obvious negatives
          // Use toString instead of jQuery.type to catch host objects

          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }

          proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

          if (!proto) {
            return true;
          } // Objects with prototype are plain iff they were constructed by a global Object function


          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function isEmptyObject(obj) {
          var name;

          for (name in obj) {
            return false;
          }

          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function globalEval(code, options, doc) {
          DOMEval(code, {
            nonce: options && options.nonce
          }, doc);
        },
        each: function each(obj, callback) {
          var length,
              i = 0;

          if (isArrayLike(obj)) {
            length = obj.length;

            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }

          return obj;
        },
        // results is for internal usage only
        makeArray: function makeArray(arr, results) {
          var ret = results || [];

          if (arr != null) {
            if (isArrayLike(Object(arr))) {
              jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
            } else {
              push.call(ret, arr);
            }
          }

          return ret;
        },
        inArray: function inArray(elem, arr, i) {
          return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function merge(first, second) {
          var len = +second.length,
              j = 0,
              i = first.length;

          for (; j < len; j++) {
            first[i++] = second[j];
          }

          first.length = i;
          return first;
        },
        grep: function grep(elems, callback, invert) {
          var callbackInverse,
              matches = [],
              i = 0,
              length = elems.length,
              callbackExpect = !invert; // Go through the array, only saving the items
          // that pass the validator function

          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);

            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }

          return matches;
        },
        // arg is for internal usage only
        map: function map(elems, callback, arg) {
          var length,
              value,
              i = 0,
              ret = []; // Go through the array, translating each of the items to their new values

          if (isArrayLike(elems)) {
            length = elems.length;

            for (; i < length; i++) {
              value = callback(elems[i], i, arg);

              if (value != null) {
                ret.push(value);
              }
            } // Go through every key on the object,

          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);

              if (value != null) {
                ret.push(value);
              }
            }
          } // Flatten any nested arrays


          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
      });

      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      } // Populate the class2type map


      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });

      function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
            type = toType(obj);

        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }

        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }

      var Sizzle =
      /*!
       * Sizzle CSS Selector Engine v2.3.5
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2020-03-14
       */
      function (window) {
        var i,
            support,
            Expr,
            getText,
            isXML,
            tokenize,
            compile,
            select,
            outermostContext,
            sortInput,
            hasDuplicate,
            // Local document vars
        setDocument,
            document,
            docElem,
            documentIsHTML,
            rbuggyQSA,
            rbuggyMatches,
            matches,
            contains,
            // Instance-specific data
        expando = "sizzle" + 1 * new Date(),
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            nonnativeSelectorCache = createCache(),
            sortOrder = function sortOrder(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }

          return 0;
        },
            // Instance methods
        hasOwn = {}.hasOwnProperty,
            arr = [],
            pop = arr.pop,
            pushNative = arr.push,
            push = arr.push,
            slice = arr.slice,
            // Use a stripped-down indexOf as it's faster than native
        // https://jsperf.com/thor-indexof-vs-for/5
        indexOf = function indexOf(list, elem) {
          var i = 0,
              len = list.length;

          for (; i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }

          return -1;
        },
            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
            // Regular expressions
        // http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]",
            // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
        // or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
            pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)",
            // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"),
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
            rdescend = new RegExp(whitespace + "|>"),
            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),
            matchExpr = {
          "ID": new RegExp("^#(" + identifier + ")"),
          "CLASS": new RegExp("^\\.(" + identifier + ")"),
          "TAG": new RegExp("^(" + identifier + "|[*])"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
            rhtml = /HTML$/i,
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,
            rnative = /^[^{]+\{\s*\[native \w/,
            // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            rsibling = /[+~]/,
            // CSS escapes
        // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
            funescape = function funescape(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 0x10000;
          return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
          nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
          // Support: IE <=11+
          // For values outside the Basic Multilingual Plane (BMP), manually construct a
          // surrogate pair
          high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },
            // CSS string/identifier serialization
        // https://drafts.csswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            fcssescape = function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
            if (ch === "\0") {
              return "\uFFFD";
            } // Control characters and (dependent upon position) numbers get escaped as code points


            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          } // Other potentially-special ASCII characters get backslash-escaped


          return "\\" + ch;
        },
            // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        unloadHandler = function unloadHandler() {
          setDocument();
        },
            inDisabledFieldset = addCombinator(function (elem) {
          return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, {
          dir: "parentNode",
          next: "legend"
        }); // Optimize for push.apply( _, NodeList )


        try {
          push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
          // Detect silently failing push.apply
          // eslint-disable-next-line no-unused-expressions

          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push = {
            apply: arr.length ? // Leverage slice if possible
            function (target, els) {
              pushNative.apply(target, slice.call(els));
            } : // Support: IE<9
            // Otherwise append directly
            function (target, els) {
              var j = target.length,
                  i = 0; // Can't trust NodeList.length

              while (target[j++] = els[i++]) {}

              target.length = j - 1;
            }
          };
        }

        function Sizzle(selector, context, results, seed) {
          var m,
              i,
              elem,
              nid,
              match,
              groups,
              newSelector,
              newContext = context && context.ownerDocument,
              // nodeType defaults to 9, since context defaults to document
          nodeType = context ? context.nodeType : 9;
          results = results || []; // Return early from calls with invalid selector or context

          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          } // Try to shortcut find operations (as opposed to filters) in HTML documents


          if (!seed) {
            setDocument(context);
            context = context || document;

            if (documentIsHTML) {
              // If the selector is sufficiently simple, try using a "get*By*" DOM method
              // (excepting DocumentFragment context, where the methods don't exist)
              if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                // ID selector
                if (m = match[1]) {
                  // Document context
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      // Support: IE, Opera, Webkit
                      // TODO: identify versions
                      // getElementById can match elements by name instead of ID
                      if (elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    } else {
                      return results;
                    } // Element context

                  } else {
                    // Support: IE, Opera, Webkit
                    // TODO: identify versions
                    // getElementById can match elements by name instead of ID
                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  } // Type selector

                } else if (match[2]) {
                  push.apply(results, context.getElementsByTagName(selector));
                  return results; // Class selector
                } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                  push.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              } // Take advantage of querySelectorAll


              if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
              // Exclude object elements
              nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                newSelector = selector;
                newContext = context; // qSA considers elements outside a scoping root when evaluating child or
                // descendant combinators, which is not what we want.
                // In such cases, we work around the behavior by prefixing every selector in the
                // list with an ID selector referencing the scope context.
                // The technique has to be used as well when a leading combinator is used
                // as such selectors are not recognized by querySelectorAll.
                // Thanks to Andrew Dupont for this technique.

                if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                  // Expand context for sibling selectors
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
                  // supports it & if we're not changing the context.

                  if (newContext !== context || !support.scope) {
                    // Capture the context ID, setting it first if necessary
                    if (nid = context.getAttribute("id")) {
                      nid = nid.replace(rcssescape, fcssescape);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  } // Prefix every selector in the list


                  groups = tokenize(selector);
                  i = groups.length;

                  while (i--) {
                    groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                  }

                  newSelector = groups.join(",");
                }

                try {
                  push.apply(results, newContext.querySelectorAll(newSelector));
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          } // All others


          return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
         * Create key-value caches of limited size
         * @returns {function(string, object)} Returns the Object data after storing it on itself with
         *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
         *	deleting the oldest entry
         */


        function createCache() {
          var keys = [];

          function cache(key, value) {
            // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
            if (keys.push(key + " ") > Expr.cacheLength) {
              // Only keep the most recent entries
              delete cache[keys.shift()];
            }

            return cache[key + " "] = value;
          }

          return cache;
        }
        /**
         * Mark a function for special use by Sizzle
         * @param {Function} fn The function to mark
         */


        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        /**
         * Support testing using an element
         * @param {Function} fn Passed the created element and returns a boolean result
         */


        function assert(fn) {
          var el = document.createElement("fieldset");

          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            // Remove from its parent by default
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            } // release memory in IE


            el = null;
          }
        }
        /**
         * Adds the same handler for all of the specified attrs
         * @param {String} attrs Pipe-separated list of attributes
         * @param {Function} handler The method that will be applied
         */


        function addHandle(attrs, handler) {
          var arr = attrs.split("|"),
              i = arr.length;

          while (i--) {
            Expr.attrHandle[arr[i]] = handler;
          }
        }
        /**
         * Checks document order of two siblings
         * @param {Element} a
         * @param {Element} b
         * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
         */


        function siblingCheck(a, b) {
          var cur = b && a,
              diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

          if (diff) {
            return diff;
          } // Check if b follows a


          if (cur) {
            while (cur = cur.nextSibling) {
              if (cur === b) {
                return -1;
              }
            }
          }

          return a ? 1 : -1;
        }
        /**
         * Returns a function to use in pseudos for input types
         * @param {String} type
         */


        function createInputPseudo(type) {
          return function (elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
          };
        }
        /**
         * Returns a function to use in pseudos for buttons
         * @param {String} type
         */


        function createButtonPseudo(type) {
          return function (elem) {
            var name = elem.nodeName.toLowerCase();
            return (name === "input" || name === "button") && elem.type === type;
          };
        }
        /**
         * Returns a function to use in pseudos for :enabled/:disabled
         * @param {Boolean} disabled true for :disabled; false for :enabled
         */


        function createDisabledPseudo(disabled) {
          // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
          return function (elem) {
            // Only certain elements can match :enabled or :disabled
            // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
            // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
            if ("form" in elem) {
              // Check for inherited disabledness on relevant non-disabled elements:
              // * listed form-associated elements in a disabled fieldset
              //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
              //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
              // * option elements in a disabled optgroup
              //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
              // All such elements have a "form" property.
              if (elem.parentNode && elem.disabled === false) {
                // Option elements defer to a parent optgroup if present
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                } // Support: IE 6 - 11
                // Use the isDisabled shortcut property to check for disabled fieldset ancestors


                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

                /* jshint -W018 */
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }

              return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
              // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
              // even exist on them, let alone have a boolean value.
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            } // Remaining elements are neither :enabled nor :disabled


            return false;
          };
        }
        /**
         * Returns a function to use in pseudos for positionals
         * @param {Function} fn
         */


        function createPositionalPseudo(fn) {
          return markFunction(function (argument) {
            argument = +argument;
            return markFunction(function (seed, matches) {
              var j,
                  matchIndexes = fn([], seed.length, argument),
                  i = matchIndexes.length; // Match elements found at the specified indexes

              while (i--) {
                if (seed[j = matchIndexes[i]]) {
                  seed[j] = !(matches[j] = seed[j]);
                }
              }
            });
          });
        }
        /**
         * Checks a node for validity as a Sizzle context
         * @param {Element|Object=} context
         * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
         */


        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        } // Expose support vars for convenience


        support = Sizzle.support = {};
        /**
         * Detects XML nodes
         * @param {Element|Object} elem An element or a document
         * @returns {Boolean} True iff elem is a non-HTML XML node
         */

        isXML = Sizzle.isXML = function (elem) {
          var namespace = elem.namespaceURI,
              docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
          // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
          // https://bugs.jquery.com/ticket/4833

          return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
        };
        /**
         * Sets document-related variables once based on the current document
         * @param {Element|Object} [doc] An element or document object to use to set the document
         * @returns {Object} Returns the current document
         */


        setDocument = Sizzle.setDocument = function (node) {
          var hasCompare,
              subWindow,
              doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq

          if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
            return document;
          } // Update global variables


          document = doc;
          docElem = document.documentElement;
          documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
          // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq

          if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
            // Support: IE 11, Edge
            if (subWindow.addEventListener) {
              subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
            } else if (subWindow.attachEvent) {
              subWindow.attachEvent("onunload", unloadHandler);
            }
          } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
          // Safari 4 - 5 only, Opera <=11.6 - 12.x only
          // IE/Edge & older browsers don't support the :scope pseudo-class.
          // Support: Safari 6.0 only
          // Safari 6.0 supports :scope but it's an alias of :root there.


          support.scope = assert(function (el) {
            docElem.appendChild(el).appendChild(document.createElement("div"));
            return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
          });
          /* Attributes
          ---------------------------------------------------------------------- */
          // Support: IE<8
          // Verify that getAttribute really returns attributes and not properties
          // (excepting IE8 booleans)

          support.attributes = assert(function (el) {
            el.className = "i";
            return !el.getAttribute("className");
          });
          /* getElement(s)By*
          ---------------------------------------------------------------------- */
          // Check if getElementsByTagName("*") returns only elements

          support.getElementsByTagName = assert(function (el) {
            el.appendChild(document.createComment(""));
            return !el.getElementsByTagName("*").length;
          }); // Support: IE<9

          support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
          // Check if getElementById returns elements by name
          // The broken getElementById methods don't pick up programmatically-set names,
          // so use a roundabout getElementsByName test

          support.getById = assert(function (el) {
            docElem.appendChild(el).id = expando;
            return !document.getElementsByName || !document.getElementsByName(expando).length;
          }); // ID filter and find

          if (support.getById) {
            Expr.filter["ID"] = function (id) {
              var attrId = id.replace(runescape, funescape);
              return function (elem) {
                return elem.getAttribute("id") === attrId;
              };
            };

            Expr.find["ID"] = function (id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter["ID"] = function (id) {
              var attrId = id.replace(runescape, funescape);
              return function (elem) {
                var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node && node.value === attrId;
              };
            }; // Support: IE 6 - 7 only
            // getElementById is not reliable as a find shortcut


            Expr.find["ID"] = function (id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node,
                    i,
                    elems,
                    elem = context.getElementById(id);

                if (elem) {
                  // Verify the id attribute
                  node = elem.getAttributeNode("id");

                  if (node && node.value === id) {
                    return [elem];
                  } // Fall back on getElementsByName


                  elems = context.getElementsByName(id);
                  i = 0;

                  while (elem = elems[i++]) {
                    node = elem.getAttributeNode("id");

                    if (node && node.value === id) {
                      return [elem];
                    }
                  }
                }

                return [];
              }
            };
          } // Tag


          Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
            } else if (support.qsa) {
              return context.querySelectorAll(tag);
            }
          } : function (tag, context) {
            var elem,
                tmp = [],
                i = 0,
                // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
            results = context.getElementsByTagName(tag); // Filter out possible comments

            if (tag === "*") {
              while (elem = results[i++]) {
                if (elem.nodeType === 1) {
                  tmp.push(elem);
                }
              }

              return tmp;
            }

            return results;
          }; // Class

          Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          /* QSA/matchesSelector
          ---------------------------------------------------------------------- */
          // QSA and matchesSelector support
          // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


          rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
          // We allow this because of a bug in IE8/9 that throws an error
          // whenever `document.activeElement` is accessed on an iframe
          // So, we allow :focus to pass through QSA all the time to avoid the IE error
          // See https://bugs.jquery.com/ticket/13378

          rbuggyQSA = [];

          if (support.qsa = rnative.test(document.querySelectorAll)) {
            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            assert(function (el) {
              var input; // Select is set to empty string on purpose
              // This is to test IE's treatment of not explicitly
              // setting a boolean content attribute,
              // since its presence should be enough
              // https://bugs.jquery.com/ticket/12359

              docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
              // Nothing should be selected when empty strings follow ^= or $= or *=
              // The test attribute must be unknown in Opera but "safe" for WinRT
              // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

              if (el.querySelectorAll("[msallowcapture^='']").length) {
                rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
              } // Support: IE8
              // Boolean attributes and "value" are not treated correctly


              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              } // Support: IE 11+, Edge 15 - 18+
              // IE 11/Edge don't find elements on a `[name='']` query in some cases.
              // Adding a temporary attribute to the document before the selection works
              // around the issue.
              // Interestingly, IE 10 & older don't seem to have the issue.


              input = document.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);

              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
              } // Webkit/Opera - :checked should return selected option elements
              // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
              // IE8 throws error here and will not see later tests


              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              } // Support: Safari 8+, iOS 8+
              // https://bugs.webkit.org/show_bug.cgi?id=136851
              // In-page `selector#id sibling-combinator selector` fails


              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              } // Support: Firefox <=3.6 - 5 only
              // Old Firefox doesn't throw on a badly-escaped identifier.


              el.querySelectorAll("\\\f");
              rbuggyQSA.push("[\\r\\n\\f]");
            });
            assert(function (el) {
              el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
              // The type and name attributes are restricted during .innerHTML assignment

              var input = document.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D"); // Support: IE8
              // Enforce case-sensitivity of name attribute

              if (el.querySelectorAll("[name=d]").length) {
                rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
              } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
              // IE8 throws error here and will not see later tests


              if (el.querySelectorAll(":enabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              } // Support: IE9-11+
              // IE's :disabled selector does not pick up the children of disabled fieldsets


              docElem.appendChild(el).disabled = true;

              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              } // Support: Opera 10 - 11 only
              // Opera 10-11 does not throw on post-comma invalid pseudos


              el.querySelectorAll("*,:x");
              rbuggyQSA.push(",.*:");
            });
          }

          if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
            assert(function (el) {
              // Check to see if it's possible to do matchesSelector
              // on a disconnected node (IE 9)
              support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
              // Gecko does not error, returns false instead

              matches.call(el, "[s!='']:x");
              rbuggyMatches.push("!=", pseudos);
            });
          }

          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
          /* Contains
          ---------------------------------------------------------------------- */

          hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
          // Purposefully self-exclusive
          // As in, an element does not contain itself

          contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
            var adown = a.nodeType === 9 ? a.documentElement : a,
                bup = b && b.parentNode;
            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
          } : function (a, b) {
            if (b) {
              while (b = b.parentNode) {
                if (b === a) {
                  return true;
                }
              }
            }

            return false;
          };
          /* Sorting
          ---------------------------------------------------------------------- */
          // Document order sorting

          sortOrder = hasCompare ? function (a, b) {
            // Flag for duplicate removal
            if (a === b) {
              hasDuplicate = true;
              return 0;
            } // Sort on method existence if only one input has compareDocumentPosition


            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

            if (compare) {
              return compare;
            } // Calculate position if both inputs belong to the same document
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq


            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
            1; // Disconnected nodes

            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              // Choose the first element that is related to our preferred document
              // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.
              // eslint-disable-next-line eqeqeq
              if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                return -1;
              } // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.
              // eslint-disable-next-line eqeqeq


              if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                return 1;
              } // Maintain original order


              return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
            }

            return compare & 4 ? -1 : 1;
          } : function (a, b) {
            // Exit early if the nodes are identical
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }

            var cur,
                i = 0,
                aup = a.parentNode,
                bup = b.parentNode,
                ap = [a],
                bp = [b]; // Parentless nodes are either documents or disconnected

            if (!aup || !bup) {
              // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.

              /* eslint-disable eqeqeq */
              return a == document ? -1 : b == document ? 1 :
              /* eslint-enable eqeqeq */
              aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
            } else if (aup === bup) {
              return siblingCheck(a, b);
            } // Otherwise we need full lists of their ancestors for comparison


            cur = a;

            while (cur = cur.parentNode) {
              ap.unshift(cur);
            }

            cur = b;

            while (cur = cur.parentNode) {
              bp.unshift(cur);
            } // Walk down the tree looking for a discrepancy


            while (ap[i] === bp[i]) {
              i++;
            }

            return i ? // Do a sibling check if the nodes have a common ancestor
            siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.

            /* eslint-disable eqeqeq */
            ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
            /* eslint-enable eqeqeq */
            0;
          };
          return document;
        };

        Sizzle.matches = function (expr, elements) {
          return Sizzle(expr, null, null, elements);
        };

        Sizzle.matchesSelector = function (elem, expr) {
          setDocument(elem);

          if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }

          return Sizzle(expr, document, null, [elem]).length > 0;
        };

        Sizzle.contains = function (context, elem) {
          // Set document vars if needed
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if ((context.ownerDocument || context) != document) {
            setDocument(context);
          }

          return contains(context, elem);
        };

        Sizzle.attr = function (elem, name) {
          // Set document vars if needed
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if ((elem.ownerDocument || elem) != document) {
            setDocument(elem);
          }

          var fn = Expr.attrHandle[name.toLowerCase()],
              // Don't get fooled by Object.prototype properties (jQuery #13807)
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
          return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };

        Sizzle.escape = function (sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };

        Sizzle.error = function (msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
         * Document sorting and removing duplicates
         * @param {ArrayLike} results
         */


        Sizzle.uniqueSort = function (results) {
          var elem,
              duplicates = [],
              j = 0,
              i = 0; // Unless we *know* we can detect duplicates, assume their presence

          hasDuplicate = !support.detectDuplicates;
          sortInput = !support.sortStable && results.slice(0);
          results.sort(sortOrder);

          if (hasDuplicate) {
            while (elem = results[i++]) {
              if (elem === results[i]) {
                j = duplicates.push(i);
              }
            }

            while (j--) {
              results.splice(duplicates[j], 1);
            }
          } // Clear input after sorting to release objects
          // See https://github.com/jquery/sizzle/pull/225


          sortInput = null;
          return results;
        };
        /**
         * Utility function for retrieving the text value of an array of DOM nodes
         * @param {Array|Element} elem
         */


        getText = Sizzle.getText = function (elem) {
          var node,
              ret = "",
              i = 0,
              nodeType = elem.nodeType;

          if (!nodeType) {
            // If no nodeType, this is expected to be an array
            while (node = elem[i++]) {
              // Do not traverse comment nodes
              ret += getText(node);
            }
          } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            // Use textContent for elements
            // innerText usage removed for consistency of new lines (jQuery #11153)
            if (typeof elem.textContent === "string") {
              return elem.textContent;
            } else {
              // Traverse its children
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                ret += getText(elem);
              }
            }
          } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          } // Do not include comment or processing instruction nodes


          return ret;
        };

        Expr = Sizzle.selectors = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: true
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: true
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            "ATTR": function ATTR(match) {
              match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }

              return match.slice(0, 4);
            },
            "CHILD": function CHILD(match) {
              /* matches from matchExpr["CHILD"]
              	1 type (only|nth|...)
              	2 what (child|of-type)
              	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
              	4 xn-component of xn+y argument ([+-]?\d*n|)
              	5 sign of xn-component
              	6 x of xn-component
              	7 sign of y-component
              	8 y of y-component
              */
              match[1] = match[1].toLowerCase();

              if (match[1].slice(0, 3) === "nth") {
                // nth-* requires argument
                if (!match[3]) {
                  Sizzle.error(match[0]);
                } // numeric x and y parameters for Expr.filter.CHILD
                // remember that false/true cast respectively to 0/1


                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
              } else if (match[3]) {
                Sizzle.error(match[0]);
              }

              return match;
            },
            "PSEUDO": function PSEUDO(match) {
              var excess,
                  unquoted = !match[6] && match[2];

              if (matchExpr["CHILD"].test(match[0])) {
                return null;
              } // Accept quoted arguments as-is


              if (match[3]) {
                match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
              } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
              excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
              excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                // excess is a negative index
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              } // Return only captures needed by the pseudo filter method (type and argument)


              return match.slice(0, 3);
            }
          },
          filter: {
            "TAG": function TAG(nodeNameSelector) {
              var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function () {
                return true;
              } : function (elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
              };
            },
            "CLASS": function CLASS(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
              });
            },
            "ATTR": function ATTR(name, operator, check) {
              return function (elem) {
                var result = Sizzle.attr(elem, name);

                if (result == null) {
                  return operator === "!=";
                }

                if (!operator) {
                  return true;
                }

                result += "";
                /* eslint-disable max-len */

                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                /* eslint-enable max-len */
              };
            },
            "CHILD": function CHILD(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth",
                  forward = type.slice(-4) !== "last",
                  ofType = what === "of-type";
              return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
              function (elem) {
                return !!elem.parentNode;
              } : function (elem, _context, xml) {
                var cache,
                    uniqueCache,
                    outerCache,
                    node,
                    nodeIndex,
                    start,
                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                    parent = elem.parentNode,
                    name = ofType && elem.nodeName.toLowerCase(),
                    useCache = !xml && !ofType,
                    diff = false;

                if (parent) {
                  // :(first|last|only)-(child|of-type)
                  if (simple) {
                    while (dir) {
                      node = elem;

                      while (node = node[dir]) {
                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                          return false;
                        }
                      } // Reverse direction for :only-* (if we haven't yet done so)


                      start = dir = type === "only" && !start && "nextSibling";
                    }

                    return true;
                  }

                  start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

                  if (forward && useCache) {
                    // Seek `elem` from a previously-cached index
                    // ...in a gzip-friendly way
                    node = parent;
                    outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                    // Defend against cloned attroperties (jQuery gh-1709)

                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];

                    while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                    diff = nodeIndex = 0) || start.pop()) {
                      // When found, cache indexes on `parent` and break
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    // Use previously-cached element index if available
                    if (useCache) {
                      // ...in a gzip-friendly way
                      node = elem;
                      outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)

                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    } // xml :nth-child(...)
                    // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                    if (diff === false) {
                      // Use the same loop as above to seek `elem` from the start
                      while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                          // Cache the index of each encountered element
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                            // Defend against cloned attroperties (jQuery gh-1709)

                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                            uniqueCache[type] = [dirruns, diff];
                          }

                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  } // Incorporate the offset, then check against cycle size


                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            "PSEUDO": function PSEUDO(pseudo, argument) {
              // pseudo-class names are case-insensitive
              // http://www.w3.org/TR/selectors/#pseudo-classes
              // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
              // Remember that setFilters inherits from pseudos
              var args,
                  fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
              // arguments are needed to create the filter function
              // just as Sizzle does

              if (fn[expando]) {
                return fn(argument);
              } // But maintain support for old signatures


              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                  var idx,
                      matched = fn(seed, argument),
                      i = matched.length;

                  while (i--) {
                    idx = indexOf(seed, matched[i]);
                    seed[idx] = !(matches[idx] = matched[i]);
                  }
                }) : function (elem) {
                  return fn(elem, 0, args);
                };
              }

              return fn;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            "not": markFunction(function (selector) {
              // Trim the selector passed to compile
              // to avoid treating leading and trailing
              // spaces as combinators
              var input = [],
                  results = [],
                  matcher = compile(selector.replace(rtrim, "$1"));
              return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
                var elem,
                    unmatched = matcher(seed, null, xml, []),
                    i = seed.length; // Match elements unmatched by `matcher`

                while (i--) {
                  if (elem = unmatched[i]) {
                    seed[i] = !(matches[i] = elem);
                  }
                }
              }) : function (elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results); // Don't keep the element (issue #299)

                input[0] = null;
                return !results.pop();
              };
            }),
            "has": markFunction(function (selector) {
              return function (elem) {
                return Sizzle(selector, elem).length > 0;
              };
            }),
            "contains": markFunction(function (text) {
              text = text.replace(runescape, funescape);
              return function (elem) {
                return (elem.textContent || getText(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // http://www.w3.org/TR/selectors/#lang-pseudo
            "lang": markFunction(function (lang) {
              // lang value must be a valid identifier
              if (!ridentifier.test(lang || "")) {
                Sizzle.error("unsupported lang: " + lang);
              }

              lang = lang.replace(runescape, funescape).toLowerCase();
              return function (elem) {
                var elemLang;

                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);

                return false;
              };
            }),
            // Miscellaneous
            "target": function target(elem) {
              var hash = window.location && window.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            "root": function root(elem) {
              return elem === docElem;
            },
            "focus": function focus(elem) {
              return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            "enabled": createDisabledPseudo(false),
            "disabled": createDisabledPseudo(true),
            "checked": function checked(elem) {
              // In CSS3, :checked should return both checked and selected elements
              // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
              var nodeName = elem.nodeName.toLowerCase();
              return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
            },
            "selected": function selected(elem) {
              // Accessing this property makes selected-by-default
              // options in Safari work properly
              if (elem.parentNode) {
                // eslint-disable-next-line no-unused-expressions
                elem.parentNode.selectedIndex;
              }

              return elem.selected === true;
            },
            // Contents
            "empty": function empty(elem) {
              // http://www.w3.org/TR/selectors/#empty-pseudo
              // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
              //   but not by others (comment: 8; processing instruction: 7; etc.)
              // nodeType < 6 works because attributes (2) do not appear as children
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }

              return true;
            },
            "parent": function parent(elem) {
              return !Expr.pseudos["empty"](elem);
            },
            // Element/input types
            "header": function header(elem) {
              return rheader.test(elem.nodeName);
            },
            "input": function input(elem) {
              return rinputs.test(elem.nodeName);
            },
            "button": function button(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === "button" || name === "button";
            },
            "text": function text(elem) {
              var attr;
              return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
              // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
              (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            "first": createPositionalPseudo(function () {
              return [0];
            }),
            "last": createPositionalPseudo(function (_matchIndexes, length) {
              return [length - 1];
            }),
            "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            "even": createPositionalPseudo(function (matchIndexes, length) {
              var i = 0;

              for (; i < length; i += 2) {
                matchIndexes.push(i);
              }

              return matchIndexes;
            }),
            "odd": createPositionalPseudo(function (matchIndexes, length) {
              var i = 1;

              for (; i < length; i += 2) {
                matchIndexes.push(i);
              }

              return matchIndexes;
            }),
            "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
              var i = argument < 0 ? argument + length : argument > length ? length : argument;

              for (; --i >= 0;) {
                matchIndexes.push(i);
              }

              return matchIndexes;
            }),
            "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
              var i = argument < 0 ? argument + length : argument;

              for (; ++i < length;) {
                matchIndexes.push(i);
              }

              return matchIndexes;
            })
          }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

        for (i in {
          radio: true,
          checkbox: true,
          file: true,
          password: true,
          image: true
        }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }

        for (i in {
          submit: true,
          reset: true
        }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        } // Easy API for creating new setFilters


        function setFilters() {}

        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();

        tokenize = Sizzle.tokenize = function (selector, parseOnly) {
          var matched,
              match,
              tokens,
              type,
              soFar,
              groups,
              preFilters,
              cached = tokenCache[selector + " "];

          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }

          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;

          while (soFar) {
            // Comma and first run
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                // Don't consume trailing commas as valid
                soFar = soFar.slice(match[0].length) || soFar;
              }

              groups.push(tokens = []);
            }

            matched = false; // Combinators

            if (match = rcombinators.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrim, " ")
              });
              soFar = soFar.slice(matched.length);
            } // Filters


            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }

            if (!matched) {
              break;
            }
          } // Return the length of the invalid excess
          // if we're just parsing
          // Otherwise, throw an error or return tokens


          return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
          tokenCache(selector, groups).slice(0);
        };

        function toSelector(tokens) {
          var i = 0,
              len = tokens.length,
              selector = "";

          for (; i < len; i++) {
            selector += tokens[i].value;
          }

          return selector;
        }

        function addCombinator(matcher, combinator, base) {
          var dir = combinator.dir,
              skip = combinator.next,
              key = skip || dir,
              checkNonElements = base && key === "parentNode",
              doneName = done++;
          return combinator.first ? // Check against closest ancestor/preceding element
          function (elem, context, xml) {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }

            return false;
          } : // Check against all ancestor/preceding elements
          function (elem, context, xml) {
            var oldCache,
                uniqueCache,
                outerCache,
                newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

            if (xml) {
              while (elem = elem[dir]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while (elem = elem[dir]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                  if (skip && skip === elem.nodeName.toLowerCase()) {
                    elem = elem[dir] || elem;
                  } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    // Assign to newCache so results back-propagate to previous elements
                    return newCache[2] = oldCache[2];
                  } else {
                    // Reuse newcache so results back-propagate to previous elements
                    uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                    if (newCache[2] = matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              }
            }

            return false;
          };
        }

        function elementMatcher(matchers) {
          return matchers.length > 1 ? function (elem, context, xml) {
            var i = matchers.length;

            while (i--) {
              if (!matchers[i](elem, context, xml)) {
                return false;
              }
            }

            return true;
          } : matchers[0];
        }

        function multipleContexts(selector, contexts, results) {
          var i = 0,
              len = contexts.length;

          for (; i < len; i++) {
            Sizzle(selector, contexts[i], results);
          }

          return results;
        }

        function condense(unmatched, map, filter, context, xml) {
          var elem,
              newUnmatched = [],
              i = 0,
              len = unmatched.length,
              mapped = map != null;

          for (; i < len; i++) {
            if (elem = unmatched[i]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);

                if (mapped) {
                  map.push(i);
                }
              }
            }
          }

          return newUnmatched;
        }

        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }

          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }

          return markFunction(function (seed, results, context, xml) {
            var temp,
                i,
                elem,
                preMap = [],
                postMap = [],
                preexisting = results.length,
                // Get initial elements from seed or context
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                // Prefilter to get matcher input, preserving a map for seed-results synchronization
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
            postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
            [] : // ...otherwise use results directly
            results : matcherIn; // Find primary matches

            if (matcher) {
              matcher(matcherIn, matcherOut, context, xml);
            } // Apply postFilter


            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

              i = temp.length;

              while (i--) {
                if (elem = temp[i]) {
                  matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
              }
            }

            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  // Get the final matcherOut by condensing this intermediate into postFinder contexts
                  temp = [];
                  i = matcherOut.length;

                  while (i--) {
                    if (elem = matcherOut[i]) {
                      // Restore matcherIn since elem is not yet a final match
                      temp.push(matcherIn[i] = elem);
                    }
                  }

                  postFinder(null, matcherOut = [], temp, xml);
                } // Move matched elements from seed to results to keep them synchronized


                i = matcherOut.length;

                while (i--) {
                  if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              } // Add elements to results, through postFinder if defined

            } else {
              matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push.apply(results, matcherOut);
              }
            }
          });
        }

        function matcherFromTokens(tokens) {
          var checkContext,
              matcher,
              j,
              len = tokens.length,
              leadingRelative = Expr.relative[tokens[0].type],
              implicitRelative = leadingRelative || Expr.relative[" "],
              i = leadingRelative ? 1 : 0,
              // The foundational matcher ensures that elements are reachable from top-level context(s)
          matchContext = addCombinator(function (elem) {
            return elem === checkContext;
          }, implicitRelative, true),
              matchAnyContext = addCombinator(function (elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true),
              matchers = [function (elem, context, xml) {
            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

            checkContext = null;
            return ret;
          }];

          for (; i < len; i++) {
            if (matcher = Expr.relative[tokens[i].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

              if (matcher[expando]) {
                // Find the next relative operator (if any) for proper handling
                j = ++i;

                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }

                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                tokens.slice(0, i - 1).concat({
                  value: tokens[i - 2].type === " " ? "*" : ""
                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
              }

              matchers.push(matcher);
            }
          }

          return elementMatcher(matchers);
        }

        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0,
              byElement = elementMatchers.length > 0,
              superMatcher = function superMatcher(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                // We must always have either seed elements or outermost context
            elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                // Use integer dirruns iff this is the outermost matcher
            dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
                len = elems.length;

            if (outermost) {
              // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.
              // eslint-disable-next-line eqeqeq
              outermostContext = context == document || context || outermost;
            } // Add elements passing elementMatchers directly to results
            // Support: IE<9, Safari
            // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0; // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq

                if (!context && elem.ownerDocument != document) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }

                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }

                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              } // Track unmatched elements for set filters


              if (bySet) {
                // They will have gone through all possible matchers
                if (elem = !matcher && elem) {
                  matchedCount--;
                } // Lengthen the array for every element, matched or not


                if (seed) {
                  unmatched.push(elem);
                }
              }
            } // `i` is now the count of elements visited above, and adding it to `matchedCount`
            // makes the latter nonnegative.


            matchedCount += i; // Apply set filters to unmatched elements
            // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
            // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
            // no element matchers and no seed.
            // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
            // case, which will result in a "00" `matchedCount` that differs from `i` but is also
            // numerically zero.

            if (bySet && i !== matchedCount) {
              j = 0;

              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }

              if (seed) {
                // Reintegrate element matches to eliminate the need for sorting
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                } // Discard index placeholder values to get only actual matches


                setMatched = condense(setMatched);
              } // Add matches to results


              push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                Sizzle.uniqueSort(results);
              }
            } // Override manipulation of globals by nested matchers


            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }

            return unmatched;
          };

          return bySet ? markFunction(superMatcher) : superMatcher;
        }

        compile = Sizzle.compile = function (selector, match
        /* Internal Use Only */
        ) {
          var i,
              setMatchers = [],
              elementMatchers = [],
              cached = compilerCache[selector + " "];

          if (!cached) {
            // Generate a function of recursive functions that can be used to check each element
            if (!match) {
              match = tokenize(selector);
            }

            i = match.length;

            while (i--) {
              cached = matcherFromTokens(match[i]);

              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            } // Cache the compiled function


            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

            cached.selector = selector;
          }

          return cached;
        };
        /**
         * A low-level selection function that works with Sizzle's compiled
         *  selector functions
         * @param {String|Function} selector A selector or a pre-compiled
         *  selector function built with Sizzle.compile
         * @param {Element} context
         * @param {Array} [results]
         * @param {Array} [seed] A set of elements to match against
         */


        select = Sizzle.select = function (selector, context, results, seed) {
          var i,
              tokens,
              token,
              type,
              find,
              compiled = typeof selector === "function" && selector,
              match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
          // (the latter of which guarantees us context)

          if (match.length === 1) {
            // Reduce context if the leading compound selector is an ID
            tokens = match[0] = match[0].slice(0);

            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

              if (!context) {
                return results; // Precompiled matchers will still verify ancestry, so step up a level
              } else if (compiled) {
                context = context.parentNode;
              }

              selector = selector.slice(tokens.shift().value.length);
            } // Fetch a seed set for right-to-left matching


            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

            while (i--) {
              token = tokens[i]; // Abort if we hit a combinator

              if (Expr.relative[type = token.type]) {
                break;
              }

              if (find = Expr.find[type]) {
                // Search, expanding context for leading sibling combinators
                if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                  // If seed is empty or no tokens remain, we can return early
                  tokens.splice(i, 1);
                  selector = seed.length && toSelector(tokens);

                  if (!selector) {
                    push.apply(results, seed);
                    return results;
                  }

                  break;
                }
              }
            }
          } // Compile and execute a filtering function if one is not provided
          // Provide `match` to avoid retokenization if we modified the selector above


          (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
          return results;
        }; // One-time assignments
        // Sort stability


        support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
        // Always assume duplicates if they aren't passed to the comparison function

        support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

        setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*

        support.sortDetached = assert(function (el) {
          // Should return 1, but returns 4 (following)
          return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        }); // Support: IE<8
        // Prevent attribute/property "interpolation"
        // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

        if (!assert(function (el) {
          el.innerHTML = "<a href='#'></a>";
          return el.firstChild.getAttribute("href") === "#";
        })) {
          addHandle("type|href|height|width", function (elem, name, isXML) {
            if (!isXML) {
              return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
            }
          });
        } // Support: IE<9
        // Use defaultValue in place of getAttribute("value")


        if (!support.attributes || !assert(function (el) {
          el.innerHTML = "<input/>";
          el.firstChild.setAttribute("value", "");
          return el.firstChild.getAttribute("value") === "";
        })) {
          addHandle("value", function (elem, _name, isXML) {
            if (!isXML && elem.nodeName.toLowerCase() === "input") {
              return elem.defaultValue;
            }
          });
        } // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies


        if (!assert(function (el) {
          return el.getAttribute("disabled") == null;
        })) {
          addHandle(booleans, function (elem, name, isXML) {
            var val;

            if (!isXML) {
              return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }
          });
        }

        return Sizzle;
      }(window);

      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors; // Deprecated

      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      jQuery.escapeSelector = Sizzle.escape;

      var dir = function dir(elem, _dir, until) {
        var matched = [],
            truncate = until !== undefined;

        while ((elem = elem[_dir]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }

            matched.push(elem);
          }
        }

        return matched;
      };

      var _siblings = function siblings(n, elem) {
        var matched = [];

        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }

        return matched;
      };

      var rneedsContext = jQuery.expr.match.needsContext;

      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }

      ;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery.grep(elements, function (elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        } // Single element


        if (qualifier.nodeType) {
          return jQuery.grep(elements, function (elem) {
            return elem === qualifier !== not;
          });
        } // Arraylike of elements (jQuery, arguments, Array)


        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function (elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        } // Filtered directly for both simple and complex selectors


        return jQuery.filter(qualifier, elements, not);
      }

      jQuery.filter = function (expr, elems, not) {
        var elem = elems[0];

        if (not) {
          expr = ":not(" + expr + ")";
        }

        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }

        return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
          return elem.nodeType === 1;
        }));
      };

      jQuery.fn.extend({
        find: function find(selector) {
          var i,
              ret,
              len = this.length,
              self = this;

          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function () {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }

          ret = this.pushStack([]);

          for (i = 0; i < len; i++) {
            jQuery.find(selector, self[i], ret);
          }

          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function filter(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function not(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function is(selector) {
          return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
      }); // Initialize a jQuery object
      // A central reference to the root jQuery(document)

      var rootjQuery,
          // A simple way to check for HTML strings
      // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
      // Strict HTML recognition (#11290: must start with <)
      // Shortcut simple #id case for speed
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
          init = jQuery.fn.init = function (selector, context, root) {
        var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

        if (!selector) {
          return this;
        } // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)


        root = root || rootjQuery; // Handle HTML strings

        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          } // Match html or make sure no context is specified for #id


          if (match && (match[1] || !context)) {
            // HANDLE: $(html) -> $(array)
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
              // Intentionally let the error be thrown if parseHTML is not present

              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  // Properties of context are called as methods if possible
                  if (isFunction(this[match])) {
                    this[match](context[match]); // ...and otherwise set as attributes
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }

              return this; // HANDLE: $(#id)
            } else {
              elem = document.getElementById(match[2]);

              if (elem) {
                // Inject the element directly into the jQuery object
                this[0] = elem;
                this.length = 1;
              }

              return this;
            } // HANDLE: $(expr, $(...))

          } else if (!context || context.jquery) {
            return (context || root).find(selector); // HANDLE: $(expr, context)
            // (which is just equivalent to: $(context).find(expr)
          } else {
            return this.constructor(context).find(selector);
          } // HANDLE: $(DOMElement)

        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this; // HANDLE: $(function)
          // Shortcut for document ready
        } else if (isFunction(selector)) {
          return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
          selector(jQuery);
        }

        return jQuery.makeArray(selector, this);
      }; // Give the init function the jQuery prototype for later instantiation


      init.prototype = jQuery.fn; // Initialize central reference

      rootjQuery = jQuery(document);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/,
          // Methods guaranteed to produce a unique set when starting from a unique set
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery.fn.extend({
        has: function has(target) {
          var targets = jQuery(target, this),
              l = targets.length;
          return this.filter(function () {
            var i = 0;

            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function closest(selectors, context) {
          var cur,
              i = 0,
              l = this.length,
              matched = [],
              targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                // Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }

          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function index(elem) {
          // No argument, return index in parent
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          } // Index in selector


          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
          } // Locate the position of the desired element


          return indexOf.call(this, // If it receives a jQuery object, the first element is used
          elem.jquery ? elem[0] : elem);
        },
        add: function add(selector, context) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function addBack(selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
      });

      function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}

        return cur;
      }

      jQuery.each({
        parent: function parent(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function parents(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function parentsUntil(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function next(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function prev(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function nextAll(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function prevAll(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function nextUntil(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function prevUntil(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function siblings(elem) {
          return _siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function children(elem) {
          return _siblings(elem.firstChild);
        },
        contents: function contents(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
          // Treat the template element as a regular one in browsers that
          // don't support it.


          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }

          return jQuery.merge([], elem.childNodes);
        }
      }, function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
          var matched = jQuery.map(this, fn, until);

          if (name.slice(-5) !== "Until") {
            selector = until;
          }

          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }

          if (this.length > 1) {
            // Remove duplicates
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            } // Reverse order for parents* and prev-derivatives


            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }

          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
          object[flag] = true;
        });
        return object;
      }
      /*
       * Create a callback list using the following parameters:
       *
       *	options: an optional list of space-separated options that will change how
       *			the callback list behaves or a more traditional option object
       *
       * By default a callback list will act like an event callback list and can be
       * "fired" multiple times.
       *
       * Possible options:
       *
       *	once:			will ensure the callback list can only be fired once (like a Deferred)
       *
       *	memory:			will keep track of previous values and will call any callback added
       *					after the list has been fired right away with the latest "memorized"
       *					values (like a Deferred)
       *
       *	unique:			will ensure a callback can only be added once (no duplicate in the list)
       *
       *	stopOnFalse:	interrupt callings when a callback returns false
       *
       */


      jQuery.Callbacks = function (options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

        var // Flag to know if list is currently firing
        firing,
            // Last fire value for non-forgettable lists
        memory,
            // Flag to know if list was already fired
        _fired,
            // Flag to prevent firing
        _locked,
            // Actual callback list
        list = [],
            // Queue of execution data for repeatable lists
        queue = [],
            // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1,
            // Fire callbacks
        fire = function fire() {
          // Enforce single-firing
          _locked = _locked || options.once; // Execute callbacks for all pending executions,
          // respecting firingIndex overrides and runtime changes

          _fired = firing = true;

          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();

            while (++firingIndex < list.length) {
              // Run callback and check for early termination
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                // Jump to end and forget the data so .add doesn't re-fire
                firingIndex = list.length;
                memory = false;
              }
            }
          } // Forget the data if we're done with it


          if (!options.memory) {
            memory = false;
          }

          firing = false; // Clean up if we're done firing for good

          if (_locked) {
            // Keep an empty list if we have data for future add calls
            if (memory) {
              list = []; // Otherwise, this object is spent
            } else {
              list = "";
            }
          }
        },
            // Actual Callbacks object
        self = {
          // Add a callback or a collection of callbacks to the list
          add: function add() {
            if (list) {
              // If we have memory from a past run, we should fire after adding
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }

              (function add(args) {
                jQuery.each(args, function (_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    // Inspect recursively
                    add(arg);
                  }
                });
              })(arguments);

              if (memory && !firing) {
                fire();
              }
            }

            return this;
          },
          // Remove a callback from the list
          remove: function remove() {
            jQuery.each(arguments, function (_, arg) {
              var index;

              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1); // Handle firing indexes

                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function has(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function empty() {
            if (list) {
              list = [];
            }

            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function disable() {
            _locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function disabled() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function lock() {
            _locked = queue = [];

            if (!memory && !firing) {
              list = memory = "";
            }

            return this;
          },
          locked: function locked() {
            return !!_locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function fireWith(context, args) {
            if (!_locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);

              if (!firing) {
                fire();
              }
            }

            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function fire() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function fired() {
            return !!_fired;
          }
        };

        return self;
      };

      function Identity(v) {
        return v;
      }

      function Thrower(ex) {
        throw ex;
      }

      function adoptValue(value, resolve, reject, noValue) {
        var method;

        try {
          // Check for promise aspect first to privilege synchronous behavior
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject); // Other thenables
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject); // Other non-thenables
          } else {
            // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [value].slice(noValue));
          } // For Promises/A+, convert exceptions into rejections
          // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
          // Deferred#then to conditionally suppress rejection.

        } catch (value) {
          // Support: Android 4.0 only
          // Strict mode functions invoked without .call/.apply get global-object context
          reject.apply(undefined, [value]);
        }
      }

      jQuery.extend({
        Deferred: function Deferred(func) {
          var tuples = [// action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
              _state = "pending",
              _promise = {
            state: function state() {
              return _state;
            },
            always: function always() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function _catch(fn) {
              return _promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function pipe()
            /* fnDone, fnFail, fnProgress */
            {
              var fns = arguments;
              return jQuery.Deferred(function (newDefer) {
                jQuery.each(tuples, function (_i, tuple) {
                  // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
                  // deferred.done(function() { bind to newDefer or newDefer.resolve })
                  // deferred.fail(function() { bind to newDefer or newDefer.reject })

                  deferred[tuple[1]](function () {
                    var returned = fn && fn.apply(this, arguments);

                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function then(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;

              function resolve(depth, deferred, handler, special) {
                return function () {
                  var that = this,
                      args = arguments,
                      mightThrow = function mightThrow() {
                    var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                    // https://promisesaplus.com/#point-59
                    // Ignore double-resolution attempts

                    if (depth < maxDepth) {
                      return;
                    }

                    returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                    // https://promisesaplus.com/#point-48

                    if (returned === deferred.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    } // Support: Promises/A+ sections 2.3.3.1, 3.5
                    // https://promisesaplus.com/#point-54
                    // https://promisesaplus.com/#point-75
                    // Retrieve `then` only once


                    then = returned && ( // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    typeof returned === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                    if (isFunction(then)) {
                      // Special processors (notify) just wait for resolution
                      if (special) {
                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                      } else {
                        // ...and disregard older resolution values
                        maxDepth++;
                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                      } // Handle all other returned values

                    } else {
                      // Only substitute handlers pass on context
                      // and multiple values (non-spec behavior)
                      if (handler !== Identity) {
                        that = undefined;
                        args = [returned];
                      } // Process the value(s)
                      // Default process is resolve


                      (special || deferred.resolveWith)(that, args);
                    }
                  },
                      // Only normal processors (resolve) catch and reject exceptions
                  process = special ? mightThrow : function () {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery.Deferred.exceptionHook) {
                        jQuery.Deferred.exceptionHook(e, process.stackTrace);
                      } // Support: Promises/A+ section 2.3.3.3.4.1
                      // https://promisesaplus.com/#point-61
                      // Ignore post-resolution exceptions


                      if (depth + 1 >= maxDepth) {
                        // Only substitute handlers pass on context
                        // and multiple values (non-spec behavior)
                        if (handler !== Thrower) {
                          that = undefined;
                          args = [e];
                        }

                        deferred.rejectWith(that, args);
                      }
                    }
                  }; // Support: Promises/A+ section 2.3.3.3.1
                  // https://promisesaplus.com/#point-57
                  // Re-resolve promises immediately to dodge false rejection from
                  // subsequent errors


                  if (depth) {
                    process();
                  } else {
                    // Call an optional hook to record the stack, in case of exception
                    // since it's otherwise lost when execution goes async
                    if (jQuery.Deferred.getStackHook) {
                      process.stackTrace = jQuery.Deferred.getStackHook();
                    }

                    window.setTimeout(process);
                  }
                };
              }

              return jQuery.Deferred(function (newDefer) {
                // progress_handlers.add( ... )
                tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

                tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

                tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function promise(obj) {
              return obj != null ? jQuery.extend(obj, _promise) : _promise;
            }
          },
              deferred = {}; // Add list-specific methods

          jQuery.each(tuples, function (i, tuple) {
            var list = tuple[2],
                stateString = tuple[5]; // promise.progress = list.add
            // promise.done = list.add
            // promise.fail = list.add

            _promise[tuple[1]] = list.add; // Handle state

            if (stateString) {
              list.add(function () {
                // state = "resolved" (i.e., fulfilled)
                // state = "rejected"
                _state = stateString;
              }, // rejected_callbacks.disable
              // fulfilled_callbacks.disable
              tuples[3 - i][2].disable, // rejected_handlers.disable
              // fulfilled_handlers.disable
              tuples[3 - i][3].disable, // progress_callbacks.lock
              tuples[0][2].lock, // progress_handlers.lock
              tuples[0][3].lock);
            } // progress_handlers.fire
            // fulfilled_handlers.fire
            // rejected_handlers.fire


            list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
            // deferred.resolve = function() { deferred.resolveWith(...) }
            // deferred.reject = function() { deferred.rejectWith(...) }

            deferred[tuple[0]] = function () {
              deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
              return this;
            }; // deferred.notifyWith = list.fireWith
            // deferred.resolveWith = list.fireWith
            // deferred.rejectWith = list.fireWith


            deferred[tuple[0] + "With"] = list.fireWith;
          }); // Make the deferred a promise

          _promise.promise(deferred); // Call given func if any


          if (func) {
            func.call(deferred, deferred);
          } // All done!


          return deferred;
        },
        // Deferred helper
        when: function when(singleValue) {
          var // count of uncompleted subordinates
          remaining = arguments.length,
              // count of unprocessed arguments
          i = remaining,
              // subordinate fulfillment data
          resolveContexts = Array(i),
              resolveValues = _slice.call(arguments),
              // the master Deferred
          master = jQuery.Deferred(),
              // subordinate callback factory
          updateFunc = function updateFunc(i) {
            return function (value) {
              resolveContexts[i] = this;
              resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

              if (! --remaining) {
                master.resolveWith(resolveContexts, resolveValues);
              }
            };
          }; // Single- and empty arguments are adopted like Promise.resolve


          if (remaining <= 1) {
            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

            if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return master.then();
            }
          } // Multiple arguments are aggregated like Promise.all array elements


          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), master.reject);
          }

          return master.promise();
        }
      }); // These usually indicate a programmer mistake during development,
      // warn about them ASAP rather than swallowing them by default.

      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

      jQuery.Deferred.exceptionHook = function (error, stack) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
          window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };

      jQuery.readyException = function (error) {
        window.setTimeout(function () {
          throw error;
        });
      }; // The deferred used on DOM ready


      var readyList = jQuery.Deferred();

      jQuery.fn.ready = function (fn) {
        readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        ["catch"](function (error) {
          jQuery.readyException(error);
        });
        return this;
      };

      jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function ready(wait) {
          // Abort if there are pending holds or we're already ready
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          } // Remember that the DOM is ready


          jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          } // If there are functions bound, to execute


          readyList.resolveWith(document, [jQuery]);
        }
      });
      jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

      function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
      } // Catch cases where $(document).ready() is called
      // after the browser event has already occurred.
      // Support: IE <=9 - 10 only
      // Older IE sometimes signals "interactive" too soon


      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout(jQuery.ready);
      } else {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

        window.addEventListener("load", completed);
      } // Multifunctional method to get and set values of a collection
      // The value/s can optionally be executed if it's a function


      var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            len = elems.length,
            bulk = key == null; // Sets many values

        if (toType(key) === "object") {
          chainable = true;

          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          } // Sets one value

        } else if (value !== undefined) {
          chainable = true;

          if (!isFunction(value)) {
            raw = true;
          }

          if (bulk) {
            // Bulk operations run against the entire set
            if (raw) {
              fn.call(elems, value);
              fn = null; // ...except when executing function values
            } else {
              bulk = fn;

              fn = function fn(elem, _key, value) {
                return bulk.call(jQuery(elem), value);
              };
            }
          }

          if (fn) {
            for (; i < len; i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
          }
        }

        if (chainable) {
          return elems;
        } // Gets


        if (bulk) {
          return fn.call(elems);
        }

        return len ? fn(elems[0], key) : emptyGet;
      }; // Matches dashed string for camelizing


      var rmsPrefix = /^-ms-/,
          rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      } // Convert dashed to camelCase; used by the css and data modules
      // Support: IE <=9 - 11, Edge 12 - 15
      // Microsoft forgot to hump their vendor prefix (#9572)


      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }

      var acceptData = function acceptData(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };

      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }

      Data.uid = 1;
      Data.prototype = {
        cache: function cache(owner) {
          // Check if the owner object already has a cache
          var value = owner[this.expando]; // If not, create one

          if (!value) {
            value = {}; // We can accept data for non-element nodes in modern browsers,
            // but we should not, see #8335.
            // Always return an empty object.

            if (acceptData(owner)) {
              // If it is a node unlikely to be stringify-ed or looped over
              // use plain assignment
              if (owner.nodeType) {
                owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
                // configurable must be true to allow the property to be
                // deleted when data is removed
              } else {
                Object.defineProperty(owner, this.expando, {
                  value: value,
                  configurable: true
                });
              }
            }
          }

          return value;
        },
        set: function set(owner, data, value) {
          var prop,
              cache = this.cache(owner); // Handle: [ owner, key, value ] args
          // Always use camelCase key (gh-2257)

          if (typeof data === "string") {
            cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
          } else {
            // Copy the properties one-by-one to the cache object
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }

          return cache;
        },
        get: function get(owner, key) {
          return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
          owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function access(owner, key, value) {
          // In cases where either:
          //
          //   1. No key was specified
          //   2. A string key was specified, but no value provided
          //
          // Take the "read" path and allow the get method to determine
          // which value to return, respectively either:
          //
          //   1. The entire cache object
          //   2. The data stored at the key
          //
          if (key === undefined || key && typeof key === "string" && value === undefined) {
            return this.get(owner, key);
          } // When the key is not a string, or both a key and value
          // are specified, set or extend (existing objects) with either:
          //
          //   1. An object of properties
          //   2. A key and value
          //


          this.set(owner, key, value); // Since the "set" path can have two possible entry points
          // return the expected data based on which path was taken[*]

          return value !== undefined ? value : key;
        },
        remove: function remove(owner, key) {
          var i,
              cache = owner[this.expando];

          if (cache === undefined) {
            return;
          }

          if (key !== undefined) {
            // Support array or space separated string of keys
            if (Array.isArray(key)) {
              // If key is an array of keys...
              // We always set camelCase keys, so remove that.
              key = key.map(camelCase);
            } else {
              key = camelCase(key); // If a key with the spaces exists, use it.
              // Otherwise, create an array by matching non-whitespace

              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }

            i = key.length;

            while (i--) {
              delete cache[key[i]];
            }
          } // Remove the expando if there's no more data


          if (key === undefined || jQuery.isEmptyObject(cache)) {
            // Support: Chrome <=35 - 45
            // Webkit & Blink performance suffers when deleting properties
            // from DOM nodes, so set to undefined instead
            // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
            if (owner.nodeType) {
              owner[this.expando] = undefined;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function hasData(owner) {
          var cache = owner[this.expando];
          return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data(); //	Implementation Summary
      //
      //	1. Enforce API surface and semantic compatibility with 1.9.x branch
      //	2. Improve the module's maintainability by reducing the storage
      //		paths to a single mechanism.
      //	3. Use the same single mechanism to support "private" and "user" data.
      //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
      //	5. Avoid exposing implementation details on user objects (eg. expando properties)
      //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          rmultiDash = /[A-Z]/g;

      function getData(data) {
        if (data === "true") {
          return true;
        }

        if (data === "false") {
          return false;
        }

        if (data === "null") {
          return null;
        } // Only convert to a number if it doesn't change the string


        if (data === +data + "") {
          return +data;
        }

        if (rbrace.test(data)) {
          return JSON.parse(data);
        }

        return data;
      }

      function dataAttr(elem, key, data) {
        var name; // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute

        if (data === undefined && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);

          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {} // Make sure we set the data so it isn't changed later


            dataUser.set(elem, key, data);
          } else {
            data = undefined;
          }
        }

        return data;
      }

      jQuery.extend({
        hasData: function hasData(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function data(elem, name, _data) {
          return dataUser.access(elem, name, _data);
        },
        removeData: function removeData(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function _data(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function _removeData(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data: function data(key, value) {
          var i,
              name,
              data,
              elem = this[0],
              attrs = elem && elem.attributes; // Gets all values

          if (key === undefined) {
            if (this.length) {
              data = dataUser.get(elem);

              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;

                while (i--) {
                  // Support: IE 11 only
                  // The attrs elements can be null (#14894)
                  if (attrs[i]) {
                    name = attrs[i].name;

                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }

                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }

            return data;
          } // Sets multiple values


          if (typeof key === "object") {
            return this.each(function () {
              dataUser.set(this, key);
            });
          }

          return access(this, function (value) {
            var data; // The calling jQuery object (element matches) is not empty
            // (and therefore has an element appears at this[ 0 ]) and the
            // `value` parameter was not undefined. An empty jQuery object
            // will result in `undefined` for elem = this[ 0 ] which will
            // throw an exception if an attempt to read a data cache is made.

            if (elem && value === undefined) {
              // Attempt to get data from the cache
              // The key will always be camelCased in Data
              data = dataUser.get(elem, key);

              if (data !== undefined) {
                return data;
              } // Attempt to "discover" the data in
              // HTML5 custom data-* attrs


              data = dataAttr(elem, key);

              if (data !== undefined) {
                return data;
              } // We tried really hard, but the data doesn't exist.


              return;
            } // Set the data...


            this.each(function () {
              // We always store the camelCased key
              dataUser.set(this, key, value);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function removeData(key) {
          return this.each(function () {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery.extend({
        queue: function queue(elem, type, data) {
          var queue;

          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }

            return queue || [];
          }
        },
        dequeue: function dequeue(elem, type) {
          type = type || "fx";

          var queue = jQuery.queue(elem, type),
              startLength = queue.length,
              fn = queue.shift(),
              hooks = jQuery._queueHooks(elem, type),
              next = function next() {
            jQuery.dequeue(elem, type);
          }; // If the fx queue is dequeued, always remove the progress sentinel


          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }

          if (fn) {
            // Add a progress sentinel to prevent the fx queue from being
            // automatically dequeued
            if (type === "fx") {
              queue.unshift("inprogress");
            } // Clear up the last queue stop function


            delete hooks.stop;
            fn.call(elem, next, hooks);
          }

          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function _queueHooks(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function () {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery.fn.extend({
        queue: function queue(type, data) {
          var setter = 2;

          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }

          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }

          return data === undefined ? this : this.each(function () {
            var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

            jQuery._queueHooks(this, type);

            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue: function dequeue(type) {
          return this.each(function () {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function clearQueue(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function promise(type, obj) {
          var tmp,
              count = 1,
              defer = jQuery.Deferred(),
              elements = this,
              i = this.length,
              resolve = function resolve() {
            if (! --count) {
              defer.resolveWith(elements, [elements]);
            }
          };

          if (typeof type !== "string") {
            obj = type;
            type = undefined;
          }

          type = type || "fx";

          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");

            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }

          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document.documentElement;

      var isAttached = function isAttached(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
      },
          composed = {
        composed: true
      }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
      // Check attachment across shadow DOM boundaries when possible (gh-3504)
      // Support: iOS 10.0-10.2 only
      // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
      // leading to errors. We need to check for `getRootNode`.


      if (documentElement.getRootNode) {
        isAttached = function isAttached(elem) {
          return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }

      var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem; // Inline style trumps all

        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
      };

      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted,
            scale,
            maxIterations = 20,
            currentValue = tween ? function () {
          return tween.cur();
        } : function () {
          return jQuery.css(elem, prop, "");
        },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
            // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

        if (initialInUnit && initialInUnit[3] !== unit) {
          // Support: Firefox <=54
          // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
          initial = initial / 2; // Trust units reported by jQuery.css

          unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

          initialInUnit = +initial || 1;

          while (maxIterations--) {
            // Evaluate and update our best guess (doubling guesses that zero out).
            // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
            jQuery.style(elem, prop, initialInUnit + unit);

            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }

            initialInUnit = initialInUnit / scale;
          }

          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

          valueParts = valueParts || [];
        }

        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }

        return adjusted;
      }

      var defaultDisplayMap = {};

      function getDefaultDisplay(elem) {
        var temp,
            doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[nodeName];

        if (display) {
          return display;
        }

        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);

        if (display === "none") {
          display = "block";
        }

        defaultDisplayMap[nodeName] = display;
        return display;
      }

      function showHide(elements, show) {
        var display,
            elem,
            values = [],
            index = 0,
            length = elements.length; // Determine new display value for elements that need to change

        for (; index < length; index++) {
          elem = elements[index];

          if (!elem.style) {
            continue;
          }

          display = elem.style.display;

          if (show) {
            // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
            // check is required in this first loop unless we have a nonempty display value (either
            // inline or about-to-be-restored)
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;

              if (!values[index]) {
                elem.style.display = "";
              }
            }

            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none"; // Remember what we're overwriting

              dataPriv.set(elem, "display", display);
            }
          }
        } // Set the display of the elements in a second loop to avoid constant reflow


        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }

        return elements;
      }

      jQuery.fn.extend({
        show: function show() {
          return showHide(this, true);
        },
        hide: function hide() {
          return showHide(this);
        },
        toggle: function toggle(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }

          return this.each(function () {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

      (function () {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)

        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input); // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments

        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned

        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.

        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })(); // We have to close these tags to support XHTML (#13200)


      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td; // Support: IE <=9 only

      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }

      function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret;

        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }

        if (tag === undefined || tag && nodeName(context, tag)) {
          return jQuery.merge([context], ret);
        }

        return ret;
      } // Mark scripts as having already been evaluated


      function setGlobalEval(elems, refElements) {
        var i = 0,
            l = elems.length;

        for (; i < l; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
      }

      var rhtml = /<|&#?\w+;/;

      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem,
            tmp,
            tag,
            wrap,
            attached,
            j,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;

        for (; i < l; i++) {
          elem = elems[i];

          if (elem || elem === 0) {
            // Add nodes directly
            if (toType(elem) === "object") {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

              j = wrap[0];

              while (j--) {
                tmp = tmp.lastChild;
              } // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit


              jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

              tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

              tmp.textContent = "";
            }
          }
        } // Remove wrapper from fragment


        fragment.textContent = "";
        i = 0;

        while (elem = nodes[i++]) {
          // Skip elements already in the context collection (trac-4087)
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }

            continue;
          }

          attached = isAttached(elem); // Append to fragment

          tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

          if (attached) {
            setGlobalEval(tmp);
          } // Capture executables


          if (scripts) {
            j = 0;

            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }

        return fragment;
      }

      var rkeyEvent = /^key/,
          rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

      function returnTrue() {
        return true;
      }

      function returnFalse() {
        return false;
      } // Support: IE <=9 - 11+
      // focus() and blur() are asynchronous, except when they are no-op.
      // So expect focus to be synchronous when the element is already active,
      // and blur to be synchronous when the element is not already active.
      // (focus and blur are always synchronous in other supported browsers,
      // this just defines when we can count on it).


      function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
      } // Support: IE <=9 only
      // Accessing document.activeElement can throw unexpectedly
      // https://bugs.jquery.com/ticket/13393


      function safeActiveElement() {
        try {
          return document.activeElement;
        } catch (err) {}
      }

      function _on(elem, types, selector, data, fn, one) {
        var origFn, type; // Types can be a map of types/handlers

        if (typeof types === "object") {
          // ( types-Object, selector, data )
          if (typeof selector !== "string") {
            // ( types-Object, data )
            data = data || selector;
            selector = undefined;
          }

          for (type in types) {
            _on(elem, type, selector, data, types[type], one);
          }

          return elem;
        }

        if (data == null && fn == null) {
          // ( types, fn )
          fn = selector;
          data = selector = undefined;
        } else if (fn == null) {
          if (typeof selector === "string") {
            // ( types, selector, fn )
            fn = data;
            data = undefined;
          } else {
            // ( types, data, fn )
            fn = data;
            data = selector;
            selector = undefined;
          }
        }

        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }

        if (one === 1) {
          origFn = fn;

          fn = function fn(event) {
            // Can use an empty set, since event contains the info
            jQuery().off(event);
            return origFn.apply(this, arguments);
          }; // Use same guid so caller can remove using origFn


          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }

        return elem.each(function () {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      /*
       * Helper functions for managing events -- not part of the public interface.
       * Props to Dean Edwards' addEvent library for many of the ideas.
       */


      jQuery.event = {
        global: {},
        add: function add(elem, types, handler, data, selector) {
          var handleObjIn,
              eventHandle,
              tmp,
              events,
              t,
              handleObj,
              special,
              handlers,
              type,
              namespaces,
              origType,
              elemData = dataPriv.get(elem); // Only attach events to objects that accept data

          if (!acceptData(elem)) {
            return;
          } // Caller can pass in an object of custom data in lieu of the handler


          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          } // Ensure that invalid selectors throw exceptions at attach time
          // Evaluate against documentElement in case elem is a non-element node (e.g., document)


          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          } // Make sure that the handler has a unique ID, used to find/remove it later


          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          } // Init the element's event structure and main handler, if this is the first


          if (!(events = elemData.events)) {
            events = elemData.events = Object.create(null);
          }

          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function (e) {
              // Discard the second event of a jQuery.event.trigger() and
              // when an event is called after a page has unloaded
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
          } // Handle multiple events separated by a space


          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;

          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

            if (!type) {
              continue;
            } // If event changes its type, use the special event handlers for the changed type


            special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

            type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

            special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

            handleObj = jQuery.extend({
              type: type,
              origType: origType,
              data: data,
              handler: handler,
              guid: handler.guid,
              selector: selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn); // Init the event handler queue if we're the first

            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }

            if (special.add) {
              special.add.call(elem, handleObj);

              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            } // Add to the element's handler list, delegates in front


            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            } // Keep track of which events have ever been used, for event optimization


            jQuery.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function remove(elem, types, handler, selector, mappedTypes) {
          var j,
              origCount,
              tmp,
              events,
              t,
              handleObj,
              special,
              handlers,
              type,
              namespaces,
              origType,
              elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

          if (!elemData || !(events = elemData.events)) {
            return;
          } // Once for each type.namespace in types; type may be omitted


          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;

          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }

              continue;
            }

            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

            origCount = j = handlers.length;

            while (j--) {
              handleObj = handlers[j];

              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);

                if (handleObj.selector) {
                  handlers.delegateCount--;
                }

                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            } // Remove generic event handler if we removed something and no more handlers exist
            // (avoids potential for endless recursion during removal of special event handlers)


            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }

              delete events[type];
            }
          } // Remove data and the expando if it's no longer used


          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function dispatch(nativeEvent) {
          var i,
              j,
              ret,
              matched,
              handleObj,
              handlerQueue,
              args = new Array(arguments.length),
              // Make a writable jQuery.Event from the native event object
          event = jQuery.event.fix(nativeEvent),
              handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
              special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

          args[0] = event;

          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }

          event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          } // Determine handlers


          handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

          i = 0;

          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;

            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              // If the event is namespaced, then each handler is only invoked if it is
              // specially universal or its namespaces are a superset of the event's.
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

                if (ret !== undefined) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          } // Call the postDispatch hook for the mapped type


          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }

          return event.result;
        },
        handlers: function handlers(event, _handlers) {
          var i,
              handleObj,
              sel,
              matchedHandlers,
              matchedSelectors,
              handlerQueue = [],
              delegateCount = _handlers.delegateCount,
              cur = event.target; // Find delegate handlers

          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              // Don't check non-elements (#13208)
              // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};

                for (i = 0; i < delegateCount; i++) {
                  handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

                  sel = handleObj.selector + " ";

                  if (matchedSelectors[sel] === undefined) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                  }

                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }

                if (matchedHandlers.length) {
                  handlerQueue.push({
                    elem: cur,
                    handlers: matchedHandlers
                  });
                }
              }
            }
          } // Add the remaining (directly-bound) handlers


          cur = this;

          if (delegateCount < _handlers.length) {
            handlerQueue.push({
              elem: cur,
              handlers: _handlers.slice(delegateCount)
            });
          }

          return handlerQueue;
        },
        addProp: function addProp(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function () {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function () {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function set(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: value
              });
            }
          });
        },
        fix: function fix(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function setup(data) {
              // For mutual compressibility with _default, replace `this` access with a local var.
              // `|| data` is dead code meant only to preserve the variable through minification.
              var el = this || data; // Claim the first handler

              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                // dataPriv.set( el, "click", ... )
                leverageNative(el, "click", returnTrue);
              } // Return false to allow normal processing in the caller


              return false;
            },
            trigger: function trigger(data) {
              // For mutual compressibility with _default, replace `this` access with a local var.
              // `|| data` is dead code meant only to preserve the variable through minification.
              var el = this || data; // Force setup before triggering a click

              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              } // Return non-false to allow normal event-path propagation


              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function _default(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function postDispatch(event) {
              // Support: Firefox 20+
              // Firefox doesn't alert if the returnValue field is not set.
              if (event.result !== undefined && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      }; // Ensure the presence of an event listener that handles manually-triggered
      // synthetic events by interrupting progress until reinvoked in response to
      // *native* events that it fires directly, ensuring that state changes have
      // already occurred before other listeners are invoked.

      function leverageNative(el, type, expectSync) {
        // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
        if (!expectSync) {
          if (dataPriv.get(el, type) === undefined) {
            jQuery.event.add(el, type, returnTrue);
          }

          return;
        } // Register the controller as a special universal handler for all event namespaces


        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
          namespace: false,
          handler: function handler(event) {
            var notAsync,
                result,
                saved = dataPriv.get(this, type);

            if (event.isTrigger & 1 && this[type]) {
              // Interrupt processing of the outer synthetic .trigger()ed event
              // Saved data should be false in such cases, but might be a leftover capture object
              // from an async native handler (gh-4350)
              if (!saved.length) {
                // Store arguments for use when handling the inner native event
                // There will always be at least one argument (an event object), so this array
                // will not be confused with a leftover capture object.
                saved = _slice.call(arguments);
                dataPriv.set(this, type, saved); // Trigger the native event and capture its result
                // Support: IE <=9 - 11+
                // focus() and blur() are asynchronous

                notAsync = expectSync(this, type);
                this[type]();
                result = dataPriv.get(this, type);

                if (saved !== result || notAsync) {
                  dataPriv.set(this, type, false);
                } else {
                  result = {};
                }

                if (saved !== result) {
                  // Cancel the outer synthetic event
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result.value;
                } // If this is an inner synthetic event for an event with a bubbling surrogate
                // (focus or blur), assume that the surrogate already propagated from triggering the
                // native event and prevent that from happening again here.
                // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                // less bad than duplication.

              } else if ((jQuery.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              } // If this is a native event triggered above, everything is now in order
              // Fire an inner synthetic event with the original arguments

            } else if (saved.length) {
              // ...and capture the result
              dataPriv.set(this, type, {
                value: jQuery.event.trigger( // Support: IE <=9 - 11+
                // Extend with the prototype to reset the above stopImmediatePropagation()
                jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
              }); // Abort handling of the native event

              event.stopImmediatePropagation();
            }
          }
        });
      }

      jQuery.removeEvent = function (elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };

      jQuery.Event = function (src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        } // Event object


        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type; // Events bubbling up the document may have been marked as prevented
          // by a handler lower down the tree; reflect the correct value.

          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse; // Create target properties
          // Support: Safari <=6 - 7 only
          // Target should not be a text node (#504, #13143)

          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget; // Event type
        } else {
          this.type = src;
        } // Put explicitly provided properties onto the event object


        if (props) {
          jQuery.extend(this, props);
        } // Create a timestamp if incoming event doesn't have one


        this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

        this[jQuery.expando] = true;
      }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
      // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function preventDefault() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;

          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function stopPropagation() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;

          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;

          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }

          this.stopPropagation();
        }
      }; // Includes all common event props including KeyEvent and MouseEvent specific props

      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function which(event) {
          var button = event.button; // Add which for key events

          if (event.which == null && rkeyEvent.test(event.type)) {
            return event.charCode != null ? event.charCode : event.keyCode;
          } // Add which for click: 1 === left; 2 === middle; 3 === right


          if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
            if (button & 1) {
              return 1;
            }

            if (button & 2) {
              return 3;
            }

            if (button & 4) {
              return 2;
            }

            return 0;
          }

          return event.which;
        }
      }, jQuery.event.addProp);
      jQuery.each({
        focus: "focusin",
        blur: "focusout"
      }, function (type, delegateType) {
        jQuery.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function setup() {
            // Claim the first handler
            // dataPriv.set( this, "focus", ... )
            // dataPriv.set( this, "blur", ... )
            leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

            return false;
          },
          trigger: function trigger() {
            // Force setup before trigger
            leverageNative(this, type); // Return non-false to allow normal event-path propagation

            return true;
          },
          delegateType: delegateType
        };
      }); // Create mouseenter/leave events using mouseover/out and event-time checks
      // so that event delegation works in jQuery.
      // Do the same for pointerenter/pointerleave and pointerover/pointerout
      //
      // Support: Safari 7 only
      // Safari sends mouseenter too often; see:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
      // for the description of the bug (it existed in older Chrome versions as well).

      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function handle(event) {
            var ret,
                target = this,
                related = event.relatedTarget,
                handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
            // NB: No relatedTarget if the mouse left/entered the browser window

            if (!related || related !== target && !jQuery.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }

            return ret;
          }
        };
      });
      jQuery.fn.extend({
        on: function on(types, selector, data, fn) {
          return _on(this, types, selector, data, fn);
        },
        one: function one(types, selector, data, fn) {
          return _on(this, types, selector, data, fn, 1);
        },
        off: function off(types, selector, fn) {
          var handleObj, type;

          if (types && types.preventDefault && types.handleObj) {
            // ( event )  dispatched jQuery.Event
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
            return this;
          }

          if (typeof types === "object") {
            // ( types-object [, selector] )
            for (type in types) {
              this.off(type, selector, types[type]);
            }

            return this;
          }

          if (selector === false || typeof selector === "function") {
            // ( types [, fn] )
            fn = selector;
            selector = undefined;
          }

          if (fn === false) {
            fn = returnFalse;
          }

          return this.each(function () {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });
      var // Support: IE <=10 - 11, Edge 12 - 13 only
      // In IE/Edge using regex groups here causes severe slowdowns.
      // See https://connect.microsoft.com/IE/feedback/details/1736512/
      rnoInnerhtml = /<script|<style|<link/i,
          // checked="checked" or checked
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
          rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery(elem).children("tbody")[0] || elem;
        }

        return elem;
      } // Replace/restore the type attribute of script elements for safe DOM manipulation


      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }

      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }

        return elem;
      }

      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;

        if (dest.nodeType !== 1) {
          return;
        } // 1. Copy private data: events, handlers, etc.


        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;

          if (events) {
            dataPriv.remove(dest, "handle events");

            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        } // 2. Copy user data


        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      } // Fix IE bugs, see support tests


      function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

        if (nodeName === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
        } else if (nodeName === "input" || nodeName === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }

      function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = flat(args);
        var fragment,
            first,
            scripts,
            hasScripts,
            node,
            doc,
            i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function (index) {
            var self = collection.eq(index);

            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }

            domManip(self, args, callback, ignored);
          });
        }

        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;

          if (fragment.childNodes.length === 1) {
            fragment = first;
          } // Require either new content or an interest in ignored elements to invoke the callback


          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length; // Use the original fragment for the last item
            // instead of the first because it can end up
            // being emptied incorrectly in certain situations (#8070).

            for (; i < l; i++) {
              node = fragment;

              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

                if (hasScripts) {
                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // push.apply(_, arraylike) throws on ancient WebKit
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }

              callback.call(collection[i], node, i);
            }

            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

              jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];

                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    // Optional AJAX dependency, but won't run scripts if not present
                    if (jQuery._evalUrl && !node.noModule) {
                      jQuery._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }

        return collection;
      }

      function _remove(elem, selector, keepData) {
        var node,
            nodes = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;

        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }

          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }

            node.parentNode.removeChild(node);
          }
        }

        return elem;
      }

      jQuery.extend({
        htmlPrefilter: function htmlPrefilter(html) {
          return html;
        },
        clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
          var i,
              l,
              srcElements,
              destElements,
              clone = elem.cloneNode(true),
              inPage = isAttached(elem); // Fix IE cloning issues

          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
            destElements = getAll(clone);
            srcElements = getAll(elem);

            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          } // Copy the events from the original to the clone


          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);

              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          } // Preserve script evaluation history


          destElements = getAll(clone, "script");

          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          } // Return the cloned set


          return clone;
        },
        cleanData: function cleanData(elems) {
          var data,
              elem,
              type,
              special = jQuery.event.special,
              i = 0;

          for (; (elem = elems[i]) !== undefined; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                } // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove


                elem[dataPriv.expando] = undefined;
              }

              if (elem[dataUser.expando]) {
                // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function detach(selector) {
          return _remove(this, selector, true);
        },
        remove: function remove(selector) {
          return _remove(this, selector);
        },
        text: function text(value) {
          return access(this, function (value) {
            return value === undefined ? jQuery.text(this) : this.empty().each(function () {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value;
              }
            });
          }, null, value, arguments.length);
        },
        append: function append() {
          return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function prepend() {
          return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function before() {
          return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function after() {
          return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function empty() {
          var elem,
              i = 0;

          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              // Prevent memory leaks
              jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

              elem.textContent = "";
            }
          }

          return this;
        },
        clone: function clone(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function () {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function html(value) {
          return access(this, function (value) {
            var elem = this[0] || {},
                i = 0,
                l = this.length;

            if (value === undefined && elem.nodeType === 1) {
              return elem.innerHTML;
            } // See if we can take a shortcut and just use innerHTML


            if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
              value = jQuery.htmlPrefilter(value);

              try {
                for (; i < l; i++) {
                  elem = this[i] || {}; // Remove element nodes and prevent memory leaks

                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value;
                  }
                }

                elem = 0; // If using innerHTML throws an exception, use the fallback method
              } catch (e) {}
            }

            if (elem) {
              this.empty().append(value);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function replaceWith() {
          var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

          return domManip(this, arguments, function (elem) {
            var parent = this.parentNode;

            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));

              if (parent) {
                parent.replaceChild(elem, this);
              }
            } // Force callback invocation

          }, ignored);
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (name, original) {
        jQuery.fn[name] = function (selector) {
          var elems,
              ret = [],
              insert = jQuery(selector),
              last = insert.length - 1,
              i = 0;

          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
            // .get() because push.apply(_, arraylike) throws on ancient WebKit

            push.apply(ret, elems.get());
          }

          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

      var getStyles = function getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;

        if (!view || !view.opener) {
          view = window;
        }

        return view.getComputedStyle(elem);
      };

      var swap = function swap(elem, options, callback) {
        var ret,
            name,
            old = {}; // Remember the old values, and insert the new ones

        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }

        ret = callback.call(elem); // Revert the old values

        for (name in options) {
          elem.style[name] = old[name];
        }

        return ret;
      };

      var rboxStyle = new RegExp(cssExpand.join("|"), "i");

      (function () {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
          // This is a singleton, we need to execute it only once
          if (!div) {
            return;
          }

          container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
          // Some styles come back with percentage values, even though they shouldn't

          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
          // Detect misreporting of content dimensions for box-sizing:border-box elements

          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
          // Detect overflow:scroll screwiness (gh-3699)
          // Support: Chrome <=64
          // Don't get tricked when zoom affects offsetWidth (gh-4029)

          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
          // it will also be a sign that checks already performed

          div = null;
        }

        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }

        var pixelPositionVal,
            boxSizingReliableVal,
            scrollboxSizeVal,
            pixelBoxStylesVal,
            reliableTrDimensionsVal,
            reliableMarginLeftVal,
            container = document.createElement("div"),
            div = document.createElement("div"); // Finish early in limited (non-browser) environments

        if (!div.style) {
          return;
        } // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)


        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
          boxSizingReliable: function boxSizingReliable() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function pixelBoxStyles() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function pixelPosition() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function reliableMarginLeft() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function scrollboxSize() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          reliableTrDimensions: function reliableTrDimensions() {
            var table, tr, trChild, trStyle;

            if (reliableTrDimensionsVal == null) {
              table = document.createElement("table");
              tr = document.createElement("tr");
              trChild = document.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
              documentElement.removeChild(table);
            }

            return reliableTrDimensionsVal;
          }
        });
      })();

      function curCSS(elem, name, computed) {
        var width,
            minWidth,
            maxWidth,
            ret,
            // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem); // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, #12537)
        //   .css('--customProperty) (#3144)

        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];

          if (ret === "" && !isAttached(elem)) {
            ret = jQuery.style(elem, name);
          } // A tribute to the "awesome hack by Dean Edwards"
          // Android Browser returns percentage for some values,
          // but width seems to be reliably pixels.
          // This is against the CSSOM draft spec:
          // https://drafts.csswg.org/cssom/#resolved-values


          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            // Remember the original values
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth; // Put in the new values to get a computed value out

            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width; // Revert the changed values

            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }

        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
      }

      function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
          get: function get() {
            if (conditionFn()) {
              // Hook not needed (or it's not possible to use it due
              // to missing dependency), remove it.
              delete this.get;
              return;
            } // Hook needed; redefine it so that the support test is not executed again.


            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }

      var cssPrefixes = ["Webkit", "Moz", "ms"],
          emptyStyle = document.createElement("div").style,
          vendorProps = {}; // Return a vendor-prefixed property or undefined

      function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1),
            i = cssPrefixes.length;

        while (i--) {
          name = cssPrefixes[i] + capName;

          if (name in emptyStyle) {
            return name;
          }
        }
      } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


      function finalPropName(name) {
        var _final = jQuery.cssProps[name] || vendorProps[name];

        if (_final) {
          return _final;
        }

        if (name in emptyStyle) {
          return name;
        }

        return vendorProps[name] = vendorPropName(name) || name;
      }

      var // Swappable if display is none or starts with table
      // except "table", "table-cell", or "table-caption"
      // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
      rdisplayswap = /^(none|table(?!-c[ea]).+)/,
          rcustomProp = /^--/,
          cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
          cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };

      function setPositiveNumber(_elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
      }

      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0,
            extra = 0,
            delta = 0; // Adjustment may not be necessary

        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }

        for (; i < 4; i += 2) {
          // Both box models exclude margin
          if (box === "margin") {
            delta += jQuery.css(elem, box + cssExpand[i], true, styles);
          } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


          if (!isBorderBox) {
            // Add padding
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

            if (box !== "padding") {
              delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
            } else {
              extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"

          } else {
            // For "content", subtract padding
            if (box === "content") {
              delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            } // For "content" or "padding", subtract border


            if (box !== "margin") {
              delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        } // Account for positive content-box scroll gutter when requested by providing computedVal


        if (!isBorderBox && computedVal >= 0) {
          // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
          // Assuming integer scroll gutter, subtract the rest and round down
          delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }

        return delta;
      }

      function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem),
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            valueIsBorderBox = isBorderBox,
            val = curCSS(elem, dimension, styles),
            offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.

        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }

          val = "auto";
        } // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.


        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
          // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
          // retrieved value as a content box dimension.

          valueIsBorderBox = offsetProp in elem;

          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        } // Normalize "" and auto


        val = parseFloat(val) || 0; // Adjust for the element's box model

        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
      }

      jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function get(elem, computed) {
              if (computed) {
                // We should always get a number back from opacity
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          "animationIterationCount": true,
          "columnCount": true,
          "fillOpacity": true,
          "flexGrow": true,
          "flexShrink": true,
          "fontWeight": true,
          "gridArea": true,
          "gridColumn": true,
          "gridColumnEnd": true,
          "gridColumnStart": true,
          "gridRow": true,
          "gridRowEnd": true,
          "gridRowStart": true,
          "lineHeight": true,
          "opacity": true,
          "order": true,
          "orphans": true,
          "widows": true,
          "zIndex": true,
          "zoom": true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function style(elem, name, value, extra) {
          // Don't set styles on text and comment nodes
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          } // Make sure that we're working with the right name


          var ret,
              type,
              hooks,
              origName = camelCase(name),
              isCustomProp = rcustomProp.test(name),
              style = elem.style; // Make sure that we're working with the right name. We don't
          // want to query the value if it is a CSS custom property
          // since they are user-defined.

          if (!isCustomProp) {
            name = finalPropName(origName);
          } // Gets hook for the prefixed version, then unprefixed version


          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

          if (value !== undefined) {
            type = typeof value; // Convert "+=" or "-=" to relative numbers (#7345)

            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret); // Fixes bug #9237

              type = "number";
            } // Make sure that null and NaN values aren't set (#7116)


            if (value == null || value !== value) {
              return;
            } // If a number was passed in, add the unit (except for certain CSS properties)
            // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
            // "px" to a few hardcoded values.


            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            } // background-* props affect original clone's values


            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            } // If a hook was provided, use that value, otherwise just set the specified value


            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            // If a hook was provided get the non-computed value from there
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
              return ret;
            } // Otherwise just get the value from the style object


            return style[name];
          }
        },
        css: function css(elem, name, extra, styles) {
          var val,
              num,
              hooks,
              origName = camelCase(name),
              isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
          // want to modify the value if it is a CSS custom property
          // since they are user-defined.

          if (!isCustomProp) {
            name = finalPropName(origName);
          } // Try prefixed name followed by the unprefixed name


          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          } // Otherwise, if a way to get the computed value exists, use that


          if (val === undefined) {
            val = curCSS(elem, name, styles);
          } // Convert "normal" to computed value


          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          } // Make numeric if forced or a qualifier was provided and val looks numeric


          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }

          return val;
        }
      });
      jQuery.each(["height", "width"], function (_i, dimension) {
        jQuery.cssHooks[dimension] = {
          get: function get(elem, computed, extra) {
            if (computed) {
              // Certain elements can have dimension info if we invisibly show them
              // but it must have a current display style that would benefit
              return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function set(elem, value, extra) {
            var matches,
                styles = getStyles(elem),
                // Only read styles.position if the test has a chance to fail
            // to avoid forcing a reflow.
            scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
                // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
            boxSizingNeeded = scrollboxSizeBuggy || extra,
                isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
            // faking a content-box to get border and padding (gh-3699)

            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
            } // Convert to pixels if value adjustment is needed


            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery.css(elem, dimension);
            }

            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
          }, function () {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      }); // These hooks are used by animate to expand properties

      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand: function expand(value) {
            var i = 0,
                expanded = {},
                // Assumes a single number if not a string
            parts = typeof value === "string" ? value.split(" ") : [value];

            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }

            return expanded;
          }
        };

        if (prefix !== "margin") {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery.fn.extend({
        css: function css(name, value) {
          return access(this, function (elem, name, value) {
            var styles,
                len,
                map = {},
                i = 0;

            if (Array.isArray(name)) {
              styles = getStyles(elem);
              len = name.length;

              for (; i < len; i++) {
                map[name[i]] = jQuery.css(elem, name[i], false, styles);
              }

              return map;
            }

            return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
          }, name, value, arguments.length > 1);
        }
      });

      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }

      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function init(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function cur() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function run(percent) {
          var eased,
              hooks = Tween.propHooks[this.prop];

          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
          } else {
            this.pos = eased = percent;
          }

          this.now = (this.end - this.start) * eased + this.start;

          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }

          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }

          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function get(tween) {
            var result; // Use a property on the element directly when it is not a DOM element,
            // or when there is no matching style property that exists.

            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            } // Passing an empty string as a 3rd parameter to .css will automatically
            // attempt a parseFloat and fallback to a string if the parse fails.
            // Simple values such as "10px" are parsed to Float;
            // complex values such as "rotate(1rad)" are returned as-is.


            result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

            return !result || result === "auto" ? 0 : result;
          },
          set: function set(tween) {
            // Use step hook for back compat.
            // Use cssHook if its there.
            // Use .style if available and use plain properties where available.
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      }; // Support: IE <=9 only
      // Panic based approach to setting things on disconnected nodes

      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function set(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery.easing = {
        linear: function linear(p) {
          return p;
        },
        swing: function swing(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

      jQuery.fx.step = {};
      var fxNow,
          inProgress,
          rfxtypes = /^(?:toggle|show|hide)$/,
          rrun = /queueHooks$/;

      function schedule() {
        if (inProgress) {
          if (document.hidden === false && window.requestAnimationFrame) {
            window.requestAnimationFrame(schedule);
          } else {
            window.setTimeout(schedule, jQuery.fx.interval);
          }

          jQuery.fx.tick();
        }
      } // Animations created synchronously will run synchronously


      function createFxNow() {
        window.setTimeout(function () {
          fxNow = undefined;
        });
        return fxNow = Date.now();
      } // Generate parameters to create a standard animation


      function genFx(type, includeWidth) {
        var which,
            i = 0,
            attrs = {
          height: type
        }; // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right

        includeWidth = includeWidth ? 1 : 0;

        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }

        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }

        return attrs;
      }

      function createTween(value, prop, animation) {
        var tween,
            collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length;

        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            // We're done with this property
            return tween;
          }
        }
      }

      function defaultPrefilter(elem, props, opts) {
        var prop,
            value,
            toggle,
            hooks,
            oldfire,
            propTween,
            restoreDisplay,
            display,
            isBox = "width" in props || "height" in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree(elem),
            dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");

          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;

            hooks.empty.fire = function () {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }

          hooks.unqueued++;
          anim.always(function () {
            // Ensure the complete handler is called before this completes
            anim.always(function () {
              hooks.unqueued--;

              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        } // Detect show/hide animations


        for (prop in props) {
          value = props[prop];

          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";

            if (value === (hidden ? "hide" : "show")) {
              // Pretend to be hidden if this is a "show" and
              // there is still data from a stopped show/hide
              if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                hidden = true; // Ignore all other no-op show/hide data
              } else {
                continue;
              }
            }

            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        } // Bail out if this is a no-op like .hide().hide()


        propTween = !jQuery.isEmptyObject(props);

        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        } // Restrict "overflow" and "display" styles during box animations


        if (isBox && elem.nodeType === 1) {
          // Support: IE <=9 - 11, Edge 12 - 15
          // Record all 3 overflow attributes because IE does not infer the shorthand
          // from identically-valued overflowX and overflowY and Edge just mirrors
          // the overflowX value there.
          opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

          restoreDisplay = dataShow && dataShow.display;

          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }

          display = jQuery.css(elem, "display");

          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              // Get nonempty value(s) by temporarily forcing visibility
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          } // Animate inline elements as inline-block


          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              // Restore the original display value at the end of pure show/hide animations
              if (!propTween) {
                anim.done(function () {
                  style.display = restoreDisplay;
                });

                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }

              style.display = "inline-block";
            }
          }
        }

        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function () {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        } // Implement show/hide animations


        propTween = false;

        for (prop in orig) {
          // General show/hide setup for this element animation
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {
                display: restoreDisplay
              });
            } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


            if (toggle) {
              dataShow.hidden = !hidden;
            } // Show elements before animating them


            if (hidden) {
              showHide([elem], true);
            }
            /* eslint-disable no-loop-func */


            anim.done(function () {
              /* eslint-enable no-loop-func */
              // The final step of a "hide" animation is actually hiding the element
              if (!hidden) {
                showHide([elem]);
              }

              dataPriv.remove(elem, "fxshow");

              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          } // Per-property setup


          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;

            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }

      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];

          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }

          if (index !== name) {
            props[name] = value;
            delete props[index];
          }

          hooks = jQuery.cssHooks[name];

          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
            // Reusing 'index' because we have the correct "name"

            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }

      function Animation(elem, properties, options) {
        var result,
            stopped,
            index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function () {
          // Don't match elem in the :animated selector
          delete tick.elem;
        }),
            tick = function tick() {
          if (stopped) {
            return false;
          }

          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              // Support: Android 2.3 only
          // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
          temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;

          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }

          deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

          if (percent < 1 && length) {
            return remaining;
          } // If this was an empty animation, synthesize a final progress notification


          if (!length) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          } // Resolve the animation and report its conclusion


          deferred.resolveWith(elem, [animation]);
          return false;
        },
            animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function createTween(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function stop(gotoEnd) {
            var index = 0,
                // If we are going to the end, we want to run all the tweens
            // otherwise we skip this part
            length = gotoEnd ? animation.tweens.length : 0;

            if (stopped) {
              return this;
            }

            stopped = true;

            for (; index < length; index++) {
              animation.tweens[index].run(1);
            } // Resolve when we played the last frame; otherwise, reject


            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }

            return this;
          }
        }),
            props = animation.props;

        propFilter(props, animation.opts.specialEasing);

        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

          if (result) {
            if (isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }

            return result;
          }
        }

        jQuery.map(props, createTween, animation);

        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        } // Attach callbacks from options


        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
          elem: elem,
          anim: animation,
          queue: animation.opts.queue
        }));
        return animation;
      }

      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [function (prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function tweener(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }

          var prop,
              index = 0,
              length = props.length;

          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function prefilter(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });

      jQuery.speed = function (speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        }; // Go to the end state if fx are off

        if (jQuery.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery.fx.speeds._default;
            }
          }
        } // Normalize opt.queue - true/undefined/null -> "fx"


        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        } // Queueing


        opt.old = opt.complete;

        opt.complete = function () {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }

          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };

        return opt;
      };

      jQuery.fn.extend({
        fadeTo: function fadeTo(speed, to, easing, callback) {
          // Show any hidden elements after setting opacity to 0
          return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
          .end().animate({
            opacity: to
          }, speed, easing, callback);
        },
        animate: function animate(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop),
              optall = jQuery.speed(speed, easing, callback),
              doAnimation = function doAnimation() {
            // Operate on a copy of prop so per-property easing won't be lost
            var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };

          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function stop(type, clearQueue, gotoEnd) {
          var stopQueue = function stopQueue(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };

          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = undefined;
          }

          if (clearQueue) {
            this.queue(type || "fx", []);
          }

          return this.each(function () {
            var dequeue = true,
                index = type != null && type + "queueHooks",
                timers = jQuery.timers,
                data = dataPriv.get(this);

            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }

            for (index = timers.length; index--;) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            } // Start the next in the queue if the last step wasn't forced.
            // Timers currently will call their complete callbacks, which
            // will dequeue but only if they were gotoEnd.


            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function finish(type) {
          if (type !== false) {
            type = type || "fx";
          }

          return this.each(function () {
            var index,
                data = dataPriv.get(this),
                queue = data[type + "queue"],
                hooks = data[type + "queueHooks"],
                timers = jQuery.timers,
                length = queue ? queue.length : 0; // Enable finishing flag on private data

            data.finish = true; // Empty the queue first

            jQuery.queue(this, type, []);

            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            } // Look for any active animations, and finish them


            for (index = timers.length; index--;) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            } // Look for any animations in the old queue and finish them


            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            } // Turn off finishing flag


            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function (_i, name) {
        var cssFn = jQuery.fn[name];

        jQuery.fn[name] = function (speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      }); // Generate shortcuts for custom animations

      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery.timers = [];

      jQuery.fx.tick = function () {
        var timer,
            i = 0,
            timers = jQuery.timers;
        fxNow = Date.now();

        for (; i < timers.length; i++) {
          timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }

        if (!timers.length) {
          jQuery.fx.stop();
        }

        fxNow = undefined;
      };

      jQuery.fx.timer = function (timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
      };

      jQuery.fx.interval = 13;

      jQuery.fx.start = function () {
        if (inProgress) {
          return;
        }

        inProgress = true;
        schedule();
      };

      jQuery.fx.stop = function () {
        inProgress = null;
      };

      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      }; // Based off of the plugin by Clint Helfers, with permission.
      // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

      jQuery.fn.delay = function (time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function (next, hooks) {
          var timeout = window.setTimeout(next, time);

          hooks.stop = function () {
            window.clearTimeout(timeout);
          };
        });
      };

      (function () {
        var input = document.createElement("input"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox"; // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"

        support.checkOn = input.value !== ""; // Support: IE <=11 only
        // Must access selectedIndex to make default options select

        support.optSelected = opt.selected; // Support: IE <=11 only
        // An input loses its value after becoming a radio

        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();

      var boolHook,
          attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function attr(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function removeAttr(name) {
          return this.each(function () {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr: function attr(elem, name, value) {
          var ret,
              hooks,
              nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          } // Fallback to prop when attributes are not supported


          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          } // Attribute hooks are determined by the lowercase version
          // Grab necessary hook if one is defined


          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
          }

          if (value !== undefined) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }

            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }

            elem.setAttribute(name, value + "");
            return value;
          }

          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }

          ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

          return ret == null ? undefined : ret;
        },
        attrHooks: {
          type: {
            set: function set(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);

                if (val) {
                  elem.value = val;
                }

                return value;
              }
            }
          }
        },
        removeAttr: function removeAttr(elem, value) {
          var name,
              i = 0,
              // Attribute names can contain non-HTML whitespace characters
          // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
          attrNames = value && value.match(rnothtmlwhite);

          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      }); // Hooks for boolean attributes

      boolHook = {
        set: function set(elem, value, name) {
          if (value === false) {
            // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }

          return name;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;

        attrHandle[name] = function (elem, name, isXML) {
          var ret,
              handle,
              lowercaseName = name.toLowerCase();

          if (!isXML) {
            // Avoid an infinite loop by temporarily removing this function from the getter
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }

          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i,
          rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function prop(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function removeProp(name) {
          return this.each(function () {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop: function prop(elem, name, value) {
          var ret,
              hooks,
              nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }

          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            // Fix name and attach hooks
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
          }

          if (value !== undefined) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }

            return elem[name] = value;
          }

          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }

          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function get(elem) {
              // Support: IE <=9 - 11 only
              // elem.tabIndex doesn't always return the
              // correct value when it hasn't been explicitly set
              // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
              // Use proper attribute retrieval(#12072)
              var tabindex = jQuery.find.attr(elem, "tabindex");

              if (tabindex) {
                return parseInt(tabindex, 10);
              }

              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }

              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      }); // Support: IE <=11 only
      // Accessing the selectedIndex property
      // forces the browser to respect setting selected
      // on the option
      // The getter ensures a default option is selected
      // when in an optgroup
      // eslint rule "no-unused-expressions" is disabled for this code
      // since it considers such accessions noop

      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function get(elem) {
            /* eslint no-unused-expressions: "off" */
            var parent = elem.parentNode;

            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }

            return null;
          },
          set: function set(elem) {
            /* eslint no-unused-expressions: "off" */
            var parent = elem.parentNode;

            if (parent) {
              parent.selectedIndex;

              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }

      jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        jQuery.propFix[this.toLowerCase()] = this;
      }); // Strip and collapse whitespace according to HTML spec
      // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }

      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }

      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }

        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }

        return [];
      }

      jQuery.fn.extend({
        addClass: function addClass(value) {
          var classes,
              elem,
              cur,
              curValue,
              clazz,
              j,
              finalValue,
              i = 0;

          if (isFunction(value)) {
            return this.each(function (j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
          }

          classes = classesToArray(value);

          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

              if (cur) {
                j = 0;

                while (clazz = classes[j++]) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                  }
                } // Only assign if different to avoid unneeded rendering.


                finalValue = stripAndCollapse(cur);

                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }

          return this;
        },
        removeClass: function removeClass(value) {
          var classes,
              elem,
              cur,
              curValue,
              clazz,
              j,
              finalValue,
              i = 0;

          if (isFunction(value)) {
            return this.each(function (j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
          }

          if (!arguments.length) {
            return this.attr("class", "");
          }

          classes = classesToArray(value);

          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

              if (cur) {
                j = 0;

                while (clazz = classes[j++]) {
                  // Remove *all* instances
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ");
                  }
                } // Only assign if different to avoid unneeded rendering.


                finalValue = stripAndCollapse(cur);

                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }

          return this;
        },
        toggleClass: function toggleClass(value, stateVal) {
          var type = typeof value,
              isValidValue = type === "string" || Array.isArray(value);

          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }

          if (isFunction(value)) {
            return this.each(function (i) {
              jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
          }

          return this.each(function () {
            var className, i, self, classNames;

            if (isValidValue) {
              // Toggle individual class names
              i = 0;
              self = jQuery(this);
              classNames = classesToArray(value);

              while (className = classNames[i++]) {
                // Check each className given, space separated list
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              } // Toggle whole class name

            } else if (value === undefined || type === "boolean") {
              className = getClass(this);

              if (className) {
                // Store className if set
                dataPriv.set(this, "__className__", className);
              } // If the element has a class name or if we're passed `false`,
              // then remove the whole classname (if there was one, the above saved it).
              // Otherwise bring back whatever was previously saved (if anything),
              // falling back to the empty string if nothing was stored.


              if (this.setAttribute) {
                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          });
        },
        hasClass: function hasClass(selector) {
          var className,
              elem,
              i = 0;
          className = " " + selector + " ";

          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }

          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery.fn.extend({
        val: function val(value) {
          var hooks,
              ret,
              valueIsFunction,
              elem = this[0];

          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                return ret;
              }

              ret = elem.value; // Handle most common string cases

              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              } // Handle cases where value is null/undef or number


              return ret == null ? "" : ret;
            }

            return;
          }

          valueIsFunction = isFunction(value);
          return this.each(function (i) {
            var val;

            if (this.nodeType !== 1) {
              return;
            }

            if (valueIsFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            } // Treat null/undefined as ""; convert numbers to string


            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function (value) {
                return value == null ? "" : value + "";
              });
            }

            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
              this.value = val;
            }
          });
        }
      });
      jQuery.extend({
        valHooks: {
          option: {
            get: function get(elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : // Support: IE <=10 - 11 only
              // option.text throws exceptions (#14686, #14858)
              // Strip and collapse whitespace
              // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
              stripAndCollapse(jQuery.text(elem));
            }
          },
          select: {
            get: function get(elem) {
              var value,
                  option,
                  i,
                  options = elem.options,
                  index = elem.selectedIndex,
                  one = elem.type === "select-one",
                  values = one ? null : [],
                  max = one ? index + 1 : options.length;

              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              } // Loop through all the selected options


              for (; i < max; i++) {
                option = options[i]; // Support: IE <=9 only
                // IE8-9 doesn't update selected after form reset (#2551)

                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  // Get the specific value for the option
                  value = jQuery(option).val(); // We don't need an array for one selects

                  if (one) {
                    return value;
                  } // Multi-Selects return an array


                  values.push(value);
                }
              }

              return values;
            },
            set: function set(elem, value) {
              var optionSet,
                  option,
                  options = elem.options,
                  values = jQuery.makeArray(value),
                  i = options.length;

              while (i--) {
                option = options[i];
                /* eslint-disable no-cond-assign */

                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
                /* eslint-enable no-cond-assign */

              } // Force browsers to behave consistently when non-matching value is set


              if (!optionSet) {
                elem.selectedIndex = -1;
              }

              return values;
            }
          }
        }
      }); // Radios and checkboxes getter/setter

      jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {
          set: function set(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
          }
        };

        if (!support.checkOn) {
          jQuery.valHooks[this].get = function (elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      }); // Return jQuery for attributes-only inclusion

      support.focusin = "onfocusin" in window;

      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
          stopPropagationCallback = function stopPropagationCallback(e) {
        e.stopPropagation();
      };

      jQuery.extend(jQuery.event, {
        trigger: function trigger(event, data, elem, onlyHandlers) {
          var i,
              cur,
              tmp,
              bubbleType,
              ontype,
              handle,
              special,
              lastElement,
              eventPath = [elem || document],
              type = hasOwn.call(event, "type") ? event.type : event,
              namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          } // focus/blur morphs to focusin/out; ensure we're not firing them right now


          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }

          if (type.indexOf(".") > -1) {
            // Namespaced trigger; create a regexp to match event type in handle()
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }

          ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

          event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

          event.result = undefined;

          if (!event.target) {
            event.target = elem;
          } // Clone any incoming data and prepend the event, creating the handler arg list


          data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

          special = jQuery.event.special[type] || {};

          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          } // Determine event propagation path in advance, per W3C events spec (#9951)
          // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;

            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }

            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            } // Only add window if we got to document (e.g., not plain obj or detached DOM)


            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
          } // Fire handlers on the event path


          i = 0;

          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

            if (handle) {
              handle.apply(cur, data);
            } // Native handler


            handle = ontype && cur[ontype];

            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);

              if (event.result === false) {
                event.preventDefault();
              }
            }
          }

          event.type = type; // If nobody prevented the default action, do it now

          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              // Call a native DOM method on the target with the same name as the event.
              // Don't do default actions on window, that's where global variables be (#6170)
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                // Don't re-trigger an onFOO event when we call its FOO() method
                tmp = elem[ontype];

                if (tmp) {
                  elem[ontype] = null;
                } // Prevent re-triggering of the same event, since we already bubbled it above


                jQuery.event.triggered = type;

                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }

                elem[type]();

                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }

                jQuery.event.triggered = undefined;

                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }

          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function simulate(type, elem, event) {
          var e = jQuery.extend(new jQuery.Event(), event, {
            type: type,
            isSimulated: true
          });
          jQuery.event.trigger(e, null, elem);
        }
      });
      jQuery.fn.extend({
        trigger: function trigger(type, data) {
          return this.each(function () {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function triggerHandler(type, data) {
          var elem = this[0];

          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      }); // Support: Firefox <=44
      // Firefox doesn't have focus(in | out) events
      // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
      //
      // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
      // focus(in | out) events fire after focus & blur events,
      // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
      // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

      if (!support.focusin) {
        jQuery.each({
          focus: "focusin",
          blur: "focusout"
        }, function (orig, fix) {
          // Attach a single capturing handler on the document while someone wants focusin/focusout
          var handler = function handler(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
          };

          jQuery.event.special[fix] = {
            setup: function setup() {
              // Handle: regular nodes (via `this.ownerDocument`), window
              // (via `this.document`) & document (via `this`).
              var doc = this.ownerDocument || this.document || this,
                  attaches = dataPriv.access(doc, fix);

              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }

              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function teardown() {
              var doc = this.ownerDocument || this.document || this,
                  attaches = dataPriv.access(doc, fix) - 1;

              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);
              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }

      var location = window.location;
      var nonce = {
        guid: Date.now()
      };
      var rquery = /\?/; // Cross-browser xml parsing

      jQuery.parseXML = function (data) {
        var xml;

        if (!data || typeof data !== "string") {
          return null;
        } // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.


        try {
          xml = new window.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
          xml = undefined;
        }

        if (!xml || xml.getElementsByTagName("parsererror").length) {
          jQuery.error("Invalid XML: " + data);
        }

        return xml;
      };

      var rbracket = /\[\]$/,
          rCRLF = /\r?\n/g,
          rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
          rsubmittable = /^(?:input|select|textarea|keygen)/i;

      function buildParams(prefix, obj, traditional, add) {
        var name;

        if (Array.isArray(obj)) {
          // Serialize array item.
          jQuery.each(obj, function (i, v) {
            if (traditional || rbracket.test(prefix)) {
              // Treat each array item as a scalar.
              add(prefix, v);
            } else {
              // Item is non-scalar (array or object), encode its numeric index.
              buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          // Serialize object item.
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          // Serialize scalar item.
          add(prefix, obj);
        }
      } // Serialize an array of form elements or a set of
      // key/values into a query string


      jQuery.param = function (a, traditional) {
        var prefix,
            s = [],
            add = function add(key, valueOrFunction) {
          // If value is a function, invoke it and use its return value
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };

        if (a == null) {
          return "";
        } // If an array was passed in, assume that it is an array of form elements.


        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          // Serialize the form elements
          jQuery.each(a, function () {
            add(this.name, this.value);
          });
        } else {
          // If traditional, encode the "old" way (the way 1.3.2 or older
          // did it), otherwise encode params recursively.
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        } // Return the resulting serialization


        return s.join("&");
      };

      jQuery.fn.extend({
        serialize: function serialize() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
          return this.map(function () {
            // Can add propHook for "elements" to filter or add form elements
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function () {
            var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function (_i, elem) {
            var val = jQuery(this).val();

            if (val == null) {
              return null;
            }

            if (Array.isArray(val)) {
              return jQuery.map(val, function (val) {
                return {
                  name: elem.name,
                  value: val.replace(rCRLF, "\r\n")
                };
              });
            }

            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          }).get();
        }
      });
      var r20 = /%20/g,
          rhash = /#.*$/,
          rantiCache = /([?&])_=[^&]*/,
          rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
          // #7653, #8125, #8152: local protocol detection
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          rnoContent = /^(?:GET|HEAD)$/,
          rprotocol = /^\/\//,

      /* Prefilters
       * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
       * 2) These are called:
       *    - BEFORE asking for a transport
       *    - AFTER param serialization (s.data is a string if s.processData is true)
       * 3) key is the dataType
       * 4) the catchall symbol "*" can be used
       * 5) execution will start with transport dataType and THEN continue down to "*" if needed
       */
      prefilters = {},

      /* Transports bindings
       * 1) key is the dataType
       * 2) the catchall symbol "*" can be used
       * 3) selection will start with transport dataType and THEN go to "*" if needed
       */
      transports = {},
          // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
      allTypes = "*/".concat("*"),
          // Anchor tag for parsing the document origin
      originAnchor = document.createElement("a");
      originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

      function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function (dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }

          var dataType,
              i = 0,
              dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

          if (isFunction(func)) {
            // For each dataType in the dataTypeExpression
            while (dataType = dataTypes[i++]) {
              // Prepend if requested
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      } // Base inspection function for prefilters and transports


      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {},
            seekingTransport = structure === transports;

        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      } // A special extend for ajax options
      // that takes "flat" options (not to be deep extended)
      // Fixes #9887


      function ajaxExtend(target, src) {
        var key,
            deep,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for (key in src) {
          if (src[key] !== undefined) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }

        if (deep) {
          jQuery.extend(true, target, deep);
        }

        return target;
      }
      /* Handles responses to an ajax request:
       * - finds the right dataType (mediates between content-type and expected dataType)
       * - returns the corresponding response
       */


      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct,
            type,
            finalDataType,
            firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

        while (dataTypes[0] === "*") {
          dataTypes.shift();

          if (ct === undefined) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        } // Check if we're dealing with a known content-type


        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        } // Check to see if we have a response for the expected dataType


        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          // Try convertible dataTypes
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }

            if (!firstDataType) {
              firstDataType = type;
            }
          } // Or just use first one


          finalDataType = finalDataType || firstDataType;
        } // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response


        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }

          return responses[finalDataType];
        }
      }
      /* Chain conversions given the request and the original response
       * Also sets the responseXXX fields on the jqXHR instance
       */


      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2,
            current,
            conv,
            tmp,
            prev,
            converters = {},
            // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }

        current = dataTypes.shift(); // Convert to each sequential dataType

        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          } // Apply the dataFilter if provided


          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }

          prev = current;
          current = dataTypes.shift();

          if (current) {
            // There's only work to do if current dataType is non-auto
            if (current === "*") {
              current = prev; // Convert response if prev dataType is non-auto and differs from current
            } else if (prev !== "*" && prev !== current) {
              // Seek a direct converter
              conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

              if (!conv) {
                for (conv2 in converters) {
                  // If conv2 outputs current
                  tmp = conv2.split(" ");

                  if (tmp[1] === current) {
                    // If prev can be converted to accepted input
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                    if (conv) {
                      // Condense equivalence converters
                      if (conv === true) {
                        conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }

                      break;
                    }
                  }
                }
              } // Apply converter (if not an equivalence)


              if (conv !== true) {
                // Unless errors are allowed to bubble, catch and return them
                if (conv && s["throws"]) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }

        return {
          state: "success",
          data: response
        };
      }

      jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",

          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function ajaxSetup(target, settings) {
          return settings ? // Building a settings object
          ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
          ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function ajax(url, options) {
          // If url is an object, simulate pre-1.5 signature
          if (typeof url === "object") {
            options = url;
            url = undefined;
          } // Force options to be an object


          options = options || {};

          var transport,
              // URL without anti-cache param
          cacheURL,
              // Response headers
          responseHeadersString,
              responseHeaders,
              // timeout handle
          timeoutTimer,
              // Url cleanup var
          urlAnchor,
              // Request state (becomes false upon send and true upon completion)
          completed,
              // To know if global events are to be dispatched
          fireGlobals,
              // Loop variable
          i,
              // uncached part of the url
          uncached,
              // Create the final options object
          s = jQuery.ajaxSetup({}, options),
              // Callbacks context
          callbackContext = s.context || s,
              // Context for global events is callbackContext if it is a DOM node or jQuery collection
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
              // Deferreds
          deferred = jQuery.Deferred(),
              completeDeferred = jQuery.Callbacks("once memory"),
              // Status-dependent callbacks
          _statusCode = s.statusCode || {},
              // Headers (they are sent all at once)
          requestHeaders = {},
              requestHeadersNames = {},
              // Default abort message
          strAbort = "canceled",
              // Fake xhr
          jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function getResponseHeader(key) {
              var match;

              if (completed) {
                if (!responseHeaders) {
                  responseHeaders = {};

                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }

                match = responseHeaders[key.toLowerCase() + " "];
              }

              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function getAllResponseHeaders() {
              return completed ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function setRequestHeader(name, value) {
              if (completed == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }

              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function overrideMimeType(type) {
              if (completed == null) {
                s.mimeType = type;
              }

              return this;
            },
            // Status-dependent callbacks
            statusCode: function statusCode(map) {
              var code;

              if (map) {
                if (completed) {
                  // Execute the appropriate callbacks
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  // Lazy-add the new callbacks in a way that preserves old ones
                  for (code in map) {
                    _statusCode[code] = [_statusCode[code], map[code]];
                  }
                }
              }

              return this;
            },
            // Cancel the request
            abort: function abort(statusText) {
              var finalText = statusText || strAbort;

              if (transport) {
                transport.abort(finalText);
              }

              done(0, finalText);
              return this;
            }
          }; // Attach deferreds


          deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
          // Handle falsy url in the settings object (#10093: consistency with old signature)
          // We also use the url parameter if available

          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

          s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

          if (s.crossDomain == null) {
            urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
            // IE throws exception on accessing the href property if url is malformed,
            // e.g. http://example.com:80x/

            try {
              urlAnchor.href = s.url; // Support: IE <=8 - 11 only
              // Anchor's host property isn't correctly set when s.url is relative

              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              // If there is an error parsing the URL, assume it is crossDomain,
              // it can be rejected by the transport if it is invalid
              s.crossDomain = true;
            }
          } // Convert data if not already a string


          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
          } // Apply prefilters


          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

          if (completed) {
            return jqXHR;
          } // We can fire global events as of now if asked to
          // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


          fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          } // Uppercase the type


          s.type = s.type.toUpperCase(); // Determine if request has content

          s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
          // and/or If-None-Match header later on
          // Remove hash to simplify url manipulation

          cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

          if (!s.hasContent) {
            // Remember the hash so we can put it back
            uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

              delete s.data;
            } // Add or update anti-cache param if needed


            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            } // Put hash and anti-cache on the URL that will be requested (gh-1732)


            s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }

            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          } // Set the correct header, if data is being sent


          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          } // Set the Accepts header for the server, depending on the dataType


          jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          } // Allow custom headers/mimetypes and early abort


          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
            // Abort if not done already and return
            return jqXHR.abort();
          } // Aborting is no longer a cancellation


          strAbort = "abort"; // Install callbacks on deferreds

          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error); // Get transport

          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1; // Send global event

            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            } // If request was aborted inside ajaxSend, stop there


            if (completed) {
              return jqXHR;
            } // Timeout


            if (s.async && s.timeout > 0) {
              timeoutTimer = window.setTimeout(function () {
                jqXHR.abort("timeout");
              }, s.timeout);
            }

            try {
              completed = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              // Rethrow post-completion exceptions
              if (completed) {
                throw e;
              } // Propagate others as results


              done(-1, e);
            }
          } // Callback for when everything is done


          function done(status, nativeStatusText, responses, headers) {
            var isSuccess,
                success,
                error,
                response,
                modified,
                statusText = nativeStatusText; // Ignore repeat invocations

            if (completed) {
              return;
            }

            completed = true; // Clear timeout if it exists

            if (timeoutTimer) {
              window.clearTimeout(timeoutTimer);
            } // Dereference transport for early garbage collection
            // (no matter how long the jqXHR object will be used)


            transport = undefined; // Cache response headers

            responseHeadersString = headers || ""; // Set readyState

            jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

            isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            } // Use a noop converter for missing script


            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
              s.converters["text script"] = function () {};
            } // Convert no matter what (that way responseXXX fields are always set)


            response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

            if (isSuccess) {
              // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");

                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }

                modified = jqXHR.getResponseHeader("etag");

                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              } // if no content


              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent"; // if not modified
              } else if (status === 304) {
                statusText = "notmodified"; // If we have data, let's convert it
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              // Extract error from statusText and normalize for non-aborts
              error = statusText;

              if (status || !statusText) {
                statusText = "error";

                if (status < 0) {
                  status = 0;
                }
              }
            } // Set data for the fake xhr object


            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            } // Status-dependent callbacks


            jqXHR.statusCode(_statusCode);
            _statusCode = undefined;

            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            } // Complete


            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

              if (! --jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }

          return jqXHR;
        },
        getJSON: function getJSON(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function getScript(url, callback) {
          return jQuery.get(url, undefined, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function (_i, method) {
        jQuery[method] = function (url, data, callback, type) {
          // Shift arguments if data argument was omitted
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
          } // The url can be an options object (which then must have .url)


          return jQuery.ajax(jQuery.extend({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });
      jQuery.ajaxPrefilter(function (s) {
        var i;

        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });

      jQuery._evalUrl = function (url, options, doc) {
        return jQuery.ajax({
          url: url,
          // Make this explicit, since user can override this through ajaxSetup (#11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function textScript() {}
          },
          dataFilter: function dataFilter(response) {
            jQuery.globalEval(response, options, doc);
          }
        });
      };

      jQuery.fn.extend({
        wrapAll: function wrapAll(html) {
          var wrap;

          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            } // The elements to wrap the target around


            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }

            wrap.map(function () {
              var elem = this;

              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }

              return elem;
            }).append(this);
          }

          return this;
        },
        wrapInner: function wrapInner(html) {
          if (isFunction(html)) {
            return this.each(function (i) {
              jQuery(this).wrapInner(html.call(this, i));
            });
          }

          return this.each(function () {
            var self = jQuery(this),
                contents = self.contents();

            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function wrap(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function (i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function unwrap(selector) {
          this.parent(selector).not("body").each(function () {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });

      jQuery.expr.pseudos.hidden = function (elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };

      jQuery.expr.pseudos.visible = function (elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };

      jQuery.ajaxSettings.xhr = function () {
        try {
          return new window.XMLHttpRequest();
        } catch (e) {}
      };

      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // #1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      },
          xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function (options) {
        var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function send(headers, complete) {
              var i,
                  xhr = options.xhr();
              xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              } // Override mime type if needed


              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              } // X-Requested-With header
              // For cross-domain requests, seeing as conditions for a preflight are
              // akin to a jigsaw puzzle, we simply never set it to be sure.
              // (it can always be set on a per-request basis or even using ajaxSetup)
              // For same-domain requests, won't change header if already provided.


              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              } // Set headers


              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              } // Callback


              _callback = function callback(type) {
                return function () {
                  if (_callback) {
                    _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      // Support: IE <=9 only
                      // On a manual native abort, IE9 throws
                      // errors on any property access that is not readyState
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete( // File: protocol always yields status 0; see #8605, #14207
                        xhr.status, xhr.statusText);
                      }
                    } else {
                      complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                      // IE9 has no XHR2 but throws on binary (trac-11426)
                      // For XHR2 non-text, let the caller handle it (gh-2498)
                      (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                        binary: xhr.response
                      } : {
                        text: xhr.responseText
                      }, xhr.getAllResponseHeaders());
                    }
                  }
                };
              }; // Listen to events


              xhr.onload = _callback();
              errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
              // Use onreadystatechange to replace onabort
              // to handle uncaught aborts

              if (xhr.onabort !== undefined) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function () {
                  // Check readyState before timeout as it changes
                  if (xhr.readyState === 4) {
                    // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window.setTimeout(function () {
                      if (_callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              } // Create the abort callback


              _callback = _callback("abort");

              try {
                // Do send the request (this may raise an exception)
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                // #14683: Only rethrow if this hasn't been notified as an error yet
                if (_callback) {
                  throw e;
                }
              }
            },
            abort: function abort() {
              if (_callback) {
                _callback();
              }
            }
          };
        }
      }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

      jQuery.ajaxPrefilter(function (s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      }); // Install script dataType

      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function textScript(text) {
            jQuery.globalEval(text);
            return text;
          }
        }
      }); // Handle cache's special case and crossDomain

      jQuery.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
          s.cache = false;
        }

        if (s.crossDomain) {
          s.type = "GET";
        }
      }); // Bind script tag hack transport

      jQuery.ajaxTransport("script", function (s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
          var script, _callback2;

          return {
            send: function send(_, complete) {
              script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                charset: s.scriptCharset,
                src: s.url
              }).on("load error", _callback2 = function callback(evt) {
                script.remove();
                _callback2 = null;

                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              }); // Use native DOM manipulation to avoid our domManip AJAX trickery

              document.head.appendChild(script[0]);
            },
            abort: function abort() {
              if (_callback2) {
                _callback2();
              }
            }
          };
        }
      });
      var oldCallbacks = [],
          rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
          var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      }); // Detect, normalize options and install callbacks for jsonp requests

      jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
        var callbackName,
            overwritten,
            responseContainer,
            jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

        if (jsonProp || s.dataTypes[0] === "jsonp") {
          // Get callback name, remembering preexisting value associated with it
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          } // Use data converter to retrieve json after script execution


          s.converters["script json"] = function () {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }

            return responseContainer[0];
          }; // Force json dataType


          s.dataTypes[0] = "json"; // Install callback

          overwritten = window[callbackName];

          window[callbackName] = function () {
            responseContainer = arguments;
          }; // Clean-up function (fires after converters)


          jqXHR.always(function () {
            // If previous value didn't exist - remove it
            if (overwritten === undefined) {
              jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
            } else {
              window[callbackName] = overwritten;
            } // Save back as free


            if (s[callbackName]) {
              // Make sure that re-using the options doesn't screw things around
              s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

              oldCallbacks.push(callbackName);
            } // Call if it was a function and we have a response


            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }

            responseContainer = overwritten = undefined;
          }); // Delegate to script

          return "script";
        }
      }); // Support: Safari 8 only
      // In Safari 8 documents created via document.implementation.createHTMLDocument
      // collapse sibling forms: the second one becomes a child of the first one.
      // Because of that, this security measure has to be disabled in Safari 8.
      // https://bugs.webkit.org/show_bug.cgi?id=137337

      support.createHTMLDocument = function () {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }(); // Argument "data" should be string of html
      // context (optional): If specified, the fragment will be created in this context,
      // defaults to document
      // keepScripts (optional): If true, will include scripts passed in the html string


      jQuery.parseHTML = function (data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }

        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }

        var base, parsed, scripts;

        if (!context) {
          // Stop scripts or inline event handlers from being executed immediately
          // by using document.implementation
          if (support.createHTMLDocument) {
            context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
            // so any parsed elements with URLs
            // are based on the document's URL (gh-2965)

            base = context.createElement("base");
            base.href = document.location.href;
            context.head.appendChild(base);
          } else {
            context = document;
          }
        }

        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && []; // Single tag

        if (parsed) {
          return [context.createElement(parsed[1])];
        }

        parsed = buildFragment([data], context, scripts);

        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }

        return jQuery.merge([], parsed.childNodes);
      };
      /**
       * Load a url into a page
       */


      jQuery.fn.load = function (url, params, callback) {
        var selector,
            type,
            response,
            self = this,
            off = url.indexOf(" ");

        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        } // If it's a function


        if (isFunction(params)) {
          // We assume that it's the callback
          callback = params;
          params = undefined; // Otherwise, build a param string
        } else if (params && typeof params === "object") {
          type = "POST";
        } // If we have elements to modify, make the request


        if (self.length > 0) {
          jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function (responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
            // but they are ignored because response was set above.
            // If it fails, this function gets "jqXHR", "status", "error"
          }).always(callback && function (jqXHR, status) {
            self.each(function () {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }

        return this;
      };

      jQuery.expr.pseudos.animated = function (elem) {
        return jQuery.grep(jQuery.timers, function (fn) {
          return elem === fn.elem;
        }).length;
      };

      jQuery.offset = {
        setOffset: function setOffset(elem, options, i) {
          var curPosition,
              curLeft,
              curCSSTop,
              curTop,
              curOffset,
              curCSSLeft,
              calculatePosition,
              position = jQuery.css(elem, "position"),
              curElem = jQuery(elem),
              props = {}; // Set position first, in-case top/left are set even on static elem

          if (position === "static") {
            elem.style.position = "relative";
          }

          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
          // top or left is auto and position is either absolute or fixed

          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }

          if (isFunction(options)) {
            // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }

          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }

          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }

          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            if (typeof props.top === "number") {
              props.top += "px";
            }

            if (typeof props.left === "number") {
              props.left += "px";
            }

            curElem.css(props);
          }
        }
      };
      jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function offset(options) {
          // Preserve chaining for setter
          if (arguments.length) {
            return options === undefined ? this : this.each(function (i) {
              jQuery.offset.setOffset(this, options, i);
            });
          }

          var rect,
              win,
              elem = this[0];

          if (!elem) {
            return;
          } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
          // Support: IE <=11 only
          // Running getBoundingClientRect on a
          // disconnected node in IE throws an error


          if (!elem.getClientRects().length) {
            return {
              top: 0,
              left: 0
            };
          } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function position() {
          if (!this[0]) {
            return;
          }

          var offsetParent,
              offset,
              doc,
              elem = this[0],
              parentOffset = {
            top: 0,
            left: 0
          }; // position:fixed elements are offset from the viewport, which itself always has zero offset

          if (jQuery.css(elem, "position") === "fixed") {
            // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
            // when a statically positioned element is identified

            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;

            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }

            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              // Incorporate borders into its offset, since they are outside its content origin
              parentOffset = jQuery(offsetParent).offset();
              parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
          } // Subtract parent offsets and element margins


          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function offsetParent() {
          return this.map(function () {
            var offsetParent = this.offsetParent;

            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }

            return offsetParent || documentElement;
          });
        }
      }); // Create scrollLeft and scrollTop methods

      jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (method, prop) {
        var top = "pageYOffset" === prop;

        jQuery.fn[method] = function (val) {
          return access(this, function (elem, method, val) {
            // Coalesce documents and windows
            var win;

            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }

            if (val === undefined) {
              return win ? win[prop] : elem[method];
            }

            if (win) {
              win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
            } else {
              elem[method] = val;
            }
          }, method, val, arguments.length);
        };
      }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
      // Add the top/left cssHooks using jQuery.fn.position
      // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
      // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
      // getComputedStyle returns percent when specified for top/left/bottom/right;
      // rather than make the css module depend on the offset module, just check for it here

      jQuery.each(["top", "left"], function (_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
          }
        });
      }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

      jQuery.each({
        Height: "height",
        Width: "width"
      }, function (name, type) {
        jQuery.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function (defaultExtra, funcName) {
          // Margin is only for outerHeight, outerWidth
          jQuery.fn[funcName] = function (margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function (elem, type, value) {
              var doc;

              if (isWindow(elem)) {
                // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              } // Get document width or height


              if (elem.nodeType === 9) {
                doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                // whichever is greatest

                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
              }

              return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
              jQuery.css(elem, type, extra) : // Set width or height on the element
              jQuery.style(elem, type, value, extra);
            }, type, chainable ? margin : undefined, chainable);
          };
        });
      });
      jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
        jQuery.fn[type] = function (fn) {
          return this.on(type, fn);
        };
      });
      jQuery.fn.extend({
        bind: function bind(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function unbind(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function delegate(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function undelegate(selector, types, fn) {
          // ( namespace ) or ( selector, types [, fn] )
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function hover(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
        // Handle event binding
        jQuery.fn[name] = function (data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      }); // Support: Android <=4.0 only
      // Make sure we trim BOM and NBSP

      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
      // arguments.
      // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
      // However, it is not slated for removal any time soon

      jQuery.proxy = function (fn, context) {
        var tmp, args, proxy;

        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        } // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.


        if (!isFunction(fn)) {
          return undefined;
        } // Simulated bind


        args = _slice.call(arguments, 2);

        proxy = function proxy() {
          return fn.apply(context || this, args.concat(_slice.call(arguments)));
        }; // Set the guid of unique handler to the same of original handler, so it can be removed


        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
      };

      jQuery.holdReady = function (hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };

      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;
      jQuery.isFunction = isFunction;
      jQuery.isWindow = isWindow;
      jQuery.camelCase = camelCase;
      jQuery.type = toType;
      jQuery.now = Date.now;

      jQuery.isNumeric = function (obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };

      jQuery.trim = function (text) {
        return text == null ? "" : (text + "").replace(rtrim, "");
      }; // Register as a named AMD module, since jQuery can be concatenated with other
      // files that may use define, but not via a proper concatenation script that
      // understands anonymous AMD modules. A named AMD is safest and most robust
      // way to register. Lowercase jquery is used because AMD module names are
      // derived from file names, and jQuery is normally delivered in a lowercase
      // file name. Do this after creating the global so that if an AMD module wants
      // to call noConflict to hide this version of jQuery, it will work.
      // Note that for maximum portability, libraries that are not jQuery should
      // declare themselves as anonymous modules, and avoid setting a global if an
      // AMD loader is present. jQuery is a special case. For more information, see
      // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return jQuery;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      }

      var // Map over jQuery in case of overwrite
      _jQuery = window.jQuery,
          // Map over the $ in case of overwrite
      _$ = window.$;

      jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
          window.$ = _$;
        }

        if (deep && window.jQuery === jQuery) {
          window.jQuery = _jQuery;
        }

        return jQuery;
      }; // Expose jQuery and $ identifiers, even in AMD
      // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
      // and CommonJS for browser emulators (#13566)


      if (typeof noGlobal === "undefined") {
        window.jQuery = window.$ = jQuery;
      }

      return jQuery;
    });
    /***/

  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-basic/data-basic/data-basic.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-basic/data-basic/data-basic.component.html ***!
    \********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompBasicDataBasicDataBasicComponentHtml(module, exports) {
    module.exports = "<p>\n  data-basic works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-basic/event-basic/event-basic.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-basic/event-basic/event-basic.component.html ***!
    \**********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompBasicEventBasicEventBasicComponentHtml(module, exports) {
    module.exports = "<p>\n  event-basic works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-basic/style-basic/style-basic.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-basic/style-basic/style-basic.component.html ***!
    \**********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompBasicStyleBasicStyleBasicComponentHtml(module, exports) {
    module.exports = "<p>\n  setting-basic works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-basic/temp-basic/temp-basic.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-basic/temp-basic/temp-basic.component.html ***!
    \********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompBasicTempBasicTempBasicComponentHtml(module, exports) {
    module.exports = "<p>\n  temp-basic works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-lib/basic/select/select.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-lib/basic/select/select.component.html ***!
    \****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompLibBasicSelectSelectComponentHtml(module, exports) {
    module.exports = "<select name=\"\" id=\"\"></select>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-lib/basic/swiper/swiper.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-lib/basic/swiper/swiper.component.html ***!
    \****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompLibBasicSwiperSwiperComponentHtml(module, exports) {
    module.exports = "<p>\n  swiper works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-lib/tool/scale/scale.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-lib/tool/scale/scale.component.html ***!
    \*************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompLibToolScaleScaleComponentHtml(module, exports) {
    module.exports = "<div class=\"canvas\">\n  <canvas id=\"w-canvas\" width=\"3400\" height=\"30\"></canvas>\n  <canvas id=\"h-canvas\" width=\"30\" height=\"1660\"></canvas>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/audio-val/audio-val.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/data/audio-val/audio-val.component.html ***!
    \**************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsDataAudioValAudioValComponentHtml(module, exports) {
    module.exports = "<div *ngIf=\"showBoolHeader()\" class=\"data-val\">\n    <div class=\"title\">\n        <span class=\"tit\">éŸ³é¢‘</span> \n        <span class=\"icon\" (click)=\"showMoreFun()\">\n          <img src=\"{{iconUrl}}\" alt=\"\">\n        </span>\n    </div>\n    <div class=\"val\" *ngIf=\"showMoreBool\">\n      <input type=\"text\" #button_val=\"ngModel\" [(ngModel)]=\"data['audio_val']\">\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/button-val/button-val.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/data/button-val/button-val.component.html ***!
    \****************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsDataButtonValButtonValComponentHtml(module, exports) {
    module.exports = "<div *ngIf=\"showBoolHeader()\" class=\"data-val\">\n  <div class=\"title\">\n      <span class=\"tit\">按钮文字</span> \n      <span class=\"icon\" (click)=\"showMoreFun()\">\n        <img src=\"{{iconUrl}}\" alt=\"\">\n      </span>\n  </div>\n  <div class=\"val\" *ngIf=\"showMoreBool\">\n    <input type=\"text\" #button_val=\"ngModel\" [(ngModel)]=\"data['button_val']\">\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/img-val/img-val.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/data/img-val/img-val.component.html ***!
    \**********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsDataImgValImgValComponentHtml(module, exports) {
    module.exports = "<div class=\"img-val\" *ngIf=\"showBoolHeader()\">\n    <div class=\"title\">\n      <span class=\"tit\">图片选择</span> \n      <span class=\"icon\" (click)=\"showMoreFun()\">\n        <img src=\"{{iconUrl}}\" alt=\"\">\n      </span>\n    </div>\n    <div class=\"file-val\" *ngIf=\"showMoreBool\">\n      <div class=\"img-item\" *ngFor=\"let img of imgs\">\n        <img src=\"{{img['url']}}\" alt=\"\" (click)=\"selectImg(img)\">\n      </div> \n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/input-val/input-val.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/data/input-val/input-val.component.html ***!
    \**************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsDataInputValInputValComponentHtml(module, exports) {
    module.exports = "<div *ngIf=\"showBoolHeader()\" class=\"data-val\">\n  <div class=\"title\">\n      <span class=\"tit\">文本</span> \n      <span class=\"icon\" (click)=\"showMoreFun()\">\n        <img src=\"{{iconUrl}}\" alt=\"\">\n      </span>\n  </div>\n  <div class=\"val\" *ngIf=\"showMoreBool\">\n    <input type=\"text\" #button_val=\"ngModel\" [(ngModel)]=\"data['input_val']\">\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/list-val/list-val.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/data/list-val/list-val.component.html ***!
    \************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsDataListValListValComponentHtml(module, exports) {
    module.exports = "<div class=\"list-val\" *ngIf=\"showBoolHeader()\">\n  <div class=\"tit\">列表</div>\n  <div class=\"set-body\">\n    <div class=\"set-grid\">\n      <span class=\"lab\">标题</span>\n      <input type=\"text\" [(ngModel)]=\"data['list_val']['list_tit_val']\">\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/text-val/text-val.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/data/text-val/text-val.component.html ***!
    \************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsDataTextValTextValComponentHtml(module, exports) {
    module.exports = "<div *ngIf=\"showBoolHeader()\" class=\"data-val\">\n    <div class=\"title\">\n      <span class=\"tit\">文本值</span> \n      <span class=\"icon\" (click)=\"showMoreFun()\">\n        <img src=\"{{iconUrl}}\" alt=\"\">\n      </span>\n    </div>\n    <div class=\"val\" *ngIf=\"showMoreBool\">\n      <input type=\"text\" #button_val=\"ngModel\" [(ngModel)]=\"data['text_val']\">\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/textarea-val/textarea-val.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/data/textarea-val/textarea-val.component.html ***!
    \********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsDataTextareaValTextareaValComponentHtml(module, exports) {
    module.exports = "<div *ngIf=\"showBoolHeader()\" class=\"data-val\">\n    <div class=\"title\">\n      <span class=\"tit\">文本框</span> \n      <span class=\"icon\" (click)=\"showMoreFun()\">\n        <img src=\"{{iconUrl}}\" alt=\"\">\n      </span>\n    </div>\n    <div class=\"val\" *ngIf=\"showMoreBool\">\n      <input  #textarea_val=\"ngModel\" [(ngModel)]=\"data['textarea_val']\">\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/uploader/uploader.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/data/uploader/uploader.component.html ***!
    \************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsDataUploaderUploaderComponentHtml(module, exports) {
    module.exports = "<div class=\"uploader\">\n  文件上传\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/video-val/video-val.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/data/video-val/video-val.component.html ***!
    \**************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsDataVideoValVideoValComponentHtml(module, exports) {
    module.exports = "<div *ngIf=\"showBoolHeader()\" class=\"data-val\">\n    <div class=\"title\">\n        <span class=\"tit\">视频</span> \n        <span class=\"icon\" (click)=\"showMoreFun()\">\n          <img src=\"{{iconUrl}}\" alt=\"\">\n        </span>\n      </div>\n    <div class=\"val\" *ngIf=\"showMoreBool\">\n      <input type=\"text\" #button_val=\"ngModel\" [(ngModel)]=\"data['video_val']\">\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/event/route-event/route-event.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/event/route-event/route-event.component.html ***!
    \*******************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsEventRouteEventRouteEventComponentHtml(module, exports) {
    module.exports = "<div class=\"route-event\" *ngIf=\"showBoolHeader() && !event['routeBool']\">\n  <div class=\"item-set item-set-grid grid-2\">\n    <input class=\"val\" [checked]=\"event['routeBool']\" type=\"checkbox\"   (click)=\"changeVal()\" >\n    <label class=\"lab\">绑定路由跳转</label>\n  </div>\n</div>\n<div class=\"route-event\" *ngIf=\"showBoolHeader() && event['routeBool']\">\n    <div class=\"item-set item-set-grid grid-2\">\n      <input class=\"val\" [checked]=\"event['routeBool']\" type=\"checkbox\"   (click)=\"changeVal()\" >\n      <label class=\"lab\">绑定路由跳转</label>\n    </div>\n    <div class=\"tit\">路由</div>\n    <div class=\"value-set\">\n      <span class=\"lab\">路径</span>\n      <input class=\"val\" type=\"text\" [(ngModel)]=\"event['route']['route_url']\" placeholder=\"路径\">\n    </div>\n    <div class=\"value-set\">\n      <span class=\"lab\">参数</span>\n      <input class=\"val\" type=\"text\" [(ngModel)]=\"event['route']['data']['param']\" placeholder=\"param赋值\">\n    </div>\n    <div class=\"value-set\">\n      <span class=\"lab\">项目</span>\n      <input class=\"val\" type=\"text\" [(ngModel)]=\"event['route']['data']['projectId']\" placeholder=\"\">\n    </div>\n    <div class=\"value-set\">\n      <span class=\"lab\">页面</span>\n      <input class=\"val\" type=\"text\" [(ngModel)]=\"event['route']['data']['pageId']\" placeholder=\"\">\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/background/background.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/background/background.component.html ***!
    \*****************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStyleBackgroundBackgroundComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid-1\">\n  <div class=\"title\">\n    <span class=\"tit\">背景</span> \n    <span class=\"icon\" (click)=\"showMoreFun()\">\n      <img src=\"{{iconUrl}}\" alt=\"\">\n    </span>\n  </div>\n  <div class=\"set-val val-grid-2\" *ngIf=\"showMoreBool\">\n      <div class=\"style-bg-color\">\n        <span [ngStyle]=\"{'background':style['background']}\"></span>\n      </div>\n      <ul class=\"bgs\">\n        <li class=\"item\" *ngFor=\"let bg of backgroundArr;let i = index;\" [ngClass]=\"{'bd-style':i === 0,'borderSpan':i===1}\">\n          <span class=\"bg-col\" (click)=\"selColor(bg)\"  [ngStyle]=\"{'background':bg}\"></span>\n        </li>\n      </ul>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/border/border.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/border/border.component.html ***!
    \*********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStyleBorderBorderComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid-1\">\n  <div class=\"title\">\n      <span class=\"tit\">边框</span> \n      <span class=\"icon\" (click)=\"showMoreFun()\">\n          <img src=\"{{iconUrl}}\" alt=\"\">\n      </span>\n  </div>\n  <!-- 简化用户操作 -->\n  <div class=\"set-val val-grid-2 \" *ngIf=\"showMoreBool\">\n    <div class=\"style-bg-color\">\n        <span [ngStyle]=\"{'background':style['borderColor']}\"></span>\n    </div>\n    <ul class=\"borders\">\n      <li class=\"item\" *ngFor=\"let bg of borderCol;let i = index;\" [ngClass]=\"{'bd-style':i === 0}\">\n        <span class=\"bg-col\" (click)=\"selBorderCol(bg, i)\"  [ngStyle]=\"{'background':bg}\"></span>\n      </li>\n    </ul>\n    <div class=\"style-bg-radius\">\n        <div class=\"lab\">{{style['borderRadius'] || 0}} %</div>\n    </div>\n    <div class=\"borders borders-radius\">\n        <input class=\"borderRadius\" name=\"borderRadius\" step=\"1\" type=\"range\" min=\"0\" max=\"50\"  [(ngModel)]=\"style['borderRadius']\"  placeholder=\"圆角\" >\n    </div>\n \n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/color/color.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/color/color.component.html ***!
    \*******************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStyleColorColorComponentHtml(module, exports) {
    module.exports = "<p>\n  color works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/fonts/fonts.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/fonts/fonts.component.html ***!
    \*******************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStyleFontsFontsComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid-1\">\n    <div class=\"title\">\n        <span class=\"tit\">字体</span> \n        <span class=\"icon\" (click)=\"showMoreFun()\">\n            <img src=\"{{iconUrl}}\" alt=\"\">\n        </span>\n    </div>\n    <div class=\"set-val \" *ngIf=\"showMoreBool\">\n        <label class=\"lab\">大小</label>\n        <input class=\"val\" type=\"number\" step=\"1\" min=\"12\" max=\"50\" [(ngModel)]=\"style['fontSize']\" placeholder=\"字体大小\">\n    </div>\n    <div class=\"val val-grid\" *ngIf=\"showMoreBool\">\n        <div class=\"item\" (click)=\"changeStyle('textAlign', item['value'])\" [ngClass]=\"{'sel': item['value'] === style['textAlign']}\" *ngFor='let item of fontAlign;'>{{item['name']}}</div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/opacity/opacity.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/opacity/opacity.component.html ***!
    \***********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStyleOpacityOpacityComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid-1\">\n  <div class=\"title\">\n    <span class=\"tit\">透明度</span> \n    <span class=\"icon\" (click)=\"showMoreFun()\">\n      <img src=\"{{iconUrl}}\" alt=\"\">\n    </span>\n  </div>\n  <div class=\"set-val val-grid-2\" *ngIf=\"showMoreBool\">\n      <div class=\"lab\">{{style['opacity'] || 1}}</div>\n      <input class=\"opacity\" name=\"opeacity\" step=\"0.05\" type=\"range\"min=\"0.4\" max=\"1\"  [(ngModel)]=\"style['opacity']\" placeholder=\"透明度\" >\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/padding/padding.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/padding/padding.component.html ***!
    \***********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStylePaddingPaddingComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid\">\n    <div class=\"set-val\">\n        <label class=\"lab\">内边距</label>\n        <input  class=\"val\" min=\"0\" type=\"number\" [(ngModel)]=\"style['paddingTopBottom']\" placeholder=\"上下\" >\n        <input  class=\"val\" min=\"0\" type=\"number\" [(ngModel)]=\"style['paddingLeftRight']\" placeholder=\"左右\" >\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/page-size/page-size.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/page-size/page-size.component.html ***!
    \***************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStylePageSizePageSizeComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid-2\" *ngIf=\"pageStyles\">\n    <div class=\"set-val\">\n      <label class=\"lab\">长</label>\n      <input  class=\"val\" type=\"number\"  [(ngModel)]=\"pageStyles['width']\" placeholder=\"长\" >\n  </div>\n  <div class=\"set-val\">\n      <label class=\"lab\">宽</label>\n      <input  class=\"val\" type=\"number\"  [(ngModel)]=\"pageStyles['height']\" placeholder=\"宽\" >\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/position/position.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/position/position.component.html ***!
    \*************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStylePositionPositionComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid-2\">\n  <div class=\"set-val\">\n      <label class=\"lab\">X</label>\n      <input  class=\"val\" type=\"number\"  [(ngModel)]=\"style['left']\" placeholder=\"左边距\" >\n  </div>\n  <div class=\"set-val\">\n      <label class=\"lab\">Y</label>\n      <input class=\"val\" type=\"number\" id=\"setTopVal\"  [(ngModel)]=\"style['top']\" placeholder=\"上边距\" >\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/size/size.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/size/size.component.html ***!
    \*****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStyleSizeSizeComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid-2\">\n    <div class=\"set-val\">\n      <label class=\"lab\">长</label>\n      <input  class=\"val\" type=\"number\"  [(ngModel)]=\"style['width']\" placeholder=\"长\" >\n  </div>\n  <div class=\"set-val\">\n      <label class=\"lab\">宽</label>\n      <input  class=\"val\" type=\"number\"  [(ngModel)]=\"style['height']\" placeholder=\"宽\" >\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/style-copy/style-copy.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/style-copy/style-copy.component.html ***!
    \*****************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStyleStyleCopyStyleCopyComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set  item-set-grid grid-1\">\n  <div class=\"title\">\n    <span class=\"tit\">CSS</span> \n    <span class=\"icon\" (click)=\"showMoreFun()\" [title]=\"showMoreBool ? '隐藏' :'显示'\">\n      <img class=\"code\" src=\"assets/icons/code.svg\" alt=\"\">\n    </span>\n  </div>\n  <div class=\"set-val\"  *ngIf=\"showMoreBool\">\n    <code class=\"style-code\" id=\"copyContent\">\n      <ng-container *ngFor=\"let code of styleArr;let i = index;\">\n          <code class=\"in-block\">\n            {{code}};\n          </code>\n      </ng-container>\n      <span class=\"copy\" (click)=\"copyStyle(styleArr)\">复制</span>\n    </code>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/user-drag/user-drag.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/user-drag/user-drag.component.html ***!
    \***************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStyleUserDragUserDragComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid-2\">\n    <div class=\"set-val\">\n      <input class=\"val\" [checked]=\"style['userDrag'] === 'element'\" type=\"checkbox\"   (click)=\"changeVal('element')\" >\n      <label class=\"lab\">不固定</label>\n  </div>\n  <div class=\"set-val\">\n    <input class=\"val\" [checked]=\"style['userDrag'] === 'none'\" type=\"checkbox\" (click)=\"changeVal('none')\" >\n    <label class=\"lab\">固定</label>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/z-index/z-index.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/comps/comp-settings/style/z-index/z-index.component.html ***!
    \***********************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorCompsCompSettingsStyleZIndexZIndexComponentHtml(module, exports) {
    module.exports = "<div class=\"item-set item-set-grid grid-1\">\n  <div class=\"title\">\n    <span class=\"tit\">图层</span> \n    <span class=\"icon\" (click)=\"showMoreFun()\">\n      <img src=\"{{iconUrl}}\" alt=\"\">\n    </span>\n  </div>\n  <div class=\"set-val\"  *ngIf=\"showMoreBool\">\n    <ul class=\"z-index\">\n        <li class=\"item\" *ngFor=\"let zIndex of zIndexS;let i = index;\" [ngClass]=\"{'bd-style':i === 0}\">\n          <input type=\"radio\" [(ngModel)]=\"style['zIndex']\" name=\"zIndex\" [value]=\"zIndex\" (ngModelChange)=\"setStyle('zIndex',zIndex)\">{{zIndex}}\n        </li>\n      </ul>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-configuration/comp-configuration.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/develop/comp-configuration/comp-configuration.component.html ***!
    \***************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorDevelopCompConfigurationCompConfigurationComponentHtml(module, exports) {
    module.exports = "<div class=\"comp-config\">\n  \n  <!-- 操作管理 -->\n  <div class=\"marage-btn\" *ngIf=\"pageGridSetting['showLeft']\">\n    <div class=\"tabs\">\n        <div class=\"tab\" [ngClass]=\"{active:currentTab === 'tabList'}\" (click)=\"selectTabs('tabList')\">列表</div>\n        <div class=\"tab\"  [ngClass]=\"{active:currentTab ==='tabComps'}\" (click)=\"selectTabs('tabComps')\">元素</div>\n        <div class=\"tab add\" (click)=\"createPage()\" title=\"页面创建\">+</div>\n    </div>\n  </div>\n  \n  <!--页面管理 -->\n  <app-comp-page-list *ngIf=\"pageGridSetting['showLeft'] && currentTab === 'tabList'\" \n  [pages]=\"pages\"\n  (editorCurrentPage)=\"editorCurrentPage($event)\"\n  (delCurrentPage)=\"delCurrentPage($event)\"\n  (selCurrentPage)=\"seledCurrentPage($event)\">\n  </app-comp-page-list>\n  \n  <!-- 元素管理 -->\n  <app-comp-page-comps-list *ngIf=\"pageGridSetting['showLeft'] && currentTab === 'tabComps'\" \n  [pageComps]=\"currnetPageComps\"\n  (activeComp)=\"activeComp($event)\">\n  </app-comp-page-comps-list>\n\n  <!-- 组件列表 -->\n  <app-comp-list\n    *ngIf=\"pageGridSetting['showLeft']\"\n    class=\"modules\" \n    [compList]=\"compList\"\n    [currnetPageComps]=\"currnetPageComps\"\n    (compDragEvent)=\"dragCompEnd($event)\">\n  </app-comp-list>\n\n  <!-- 边框设置 -->\n  <div class=\"div-border right-border\">\n    <div class=\"set-btn\" (click)=\"showGrigFun()\">\n      <img src=\"assets/icons/right.svg\" alt=\"\" *ngIf=\"!pageGridSetting['showLeft']\">\n      <img src=\"assets/icons/left.svg\" alt=\"\" *ngIf=\"pageGridSetting['showLeft']\"> \n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-configuration/comp-list/comp-list.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/develop/comp-configuration/comp-list/comp-list.component.html ***!
    \****************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorDevelopCompConfigurationCompListCompListComponentHtml(module, exports) {
    module.exports = "<div class=\"item-module \" *ngFor=\"let module of compList ; let mIndex = index;\">\n    <div class=\"comp-tit\" (click)=\"module['hiddenBool']= !module['hiddenBool']\">\n      <img class=\"icon\" src=\"assets/icons/downicon.svg\" [ngClass]=\"{'icon-showmore':!module['hiddenBool'],'icon-showlitter':module['hiddenBool']}\" alt=\"\">\n      <div class=\"tit\" [ngClass]=\"{'icon-showmore':!module['hiddenBool'],'icon-showlitter':module['hiddenBool']}\"> {{module['name']}}</div>\n    </div>\n    <div class=\"comp-list lists scrollY\" id=\"compList\">\n      <ng-container *ngIf=\"!module['hiddenBool']\">\n          <ng-container *ngFor=\"let comp of module['compList'];let cIndex = index;\" >\n              <div class=\"content-item\" id=\"{{'id_'+mIndex+cIndex}}\" draggable=\"true\" [ngClass]=\"{'noPage':!currnetPageComps}\" (dragend)=\"currnetPageComps && dragCompEnd($event, comp['type'], ''+mIndex+cIndex)\" >\n                <img src=\"{{comp['iconUrl']}}\" alt=\"{{comp['name']}}\" class=\"icon\">\n                <span class=\"text\">{{comp['name']}}</span>\n                <img *ngIf=\"comp['vip_state']\" src=\"assets/icons/vip.svg\" alt=\"\" class=\"vip_icon\">\n              </div>\n          </ng-container>\n      </ng-container>\n    </div>  \n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-configuration/comp-page-comps-list/comp-page-comps-list.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/develop/comp-configuration/comp-page-comps-list/comp-page-comps-list.component.html ***!
    \**************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorDevelopCompConfigurationCompPageCompsListCompPageCompsListComponentHtml(module, exports) {
    module.exports = "<div class=\"comp-page-comps-list scrollY\">\n  <!-- <div class=\"tit\">页面列表</div> -->\n  <div class=\"comps\" >\n    <ng-container  *ngFor=\"let comp of pageComps;let i = index;\" >\n        <div class=\"item comp-item\" *ngIf=\"comp['type'] !== 'auxi'\" [ngClass]=\"{actived: comp['actived']}\" (click)=\"selectComp(comp)\">\n          <span class=\"index\">{{i+1}}.</span>\n          <span class=\"comp-name\" >{{comp['name']}}</span>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"!pageComps || pageComps.length ===0\">\n      <span class=\"no-val\">当前页面没有元素</span>\n    </ng-container>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-configuration/comp-page-list/comp-page-list.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/develop/comp-configuration/comp-page-list/comp-page-list.component.html ***!
    \**************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorDevelopCompConfigurationCompPageListCompPageListComponentHtml(module, exports) {
    module.exports = "<div class=\"comp-page scrollY\">\n  <!-- <div class=\"tit\">页面列表</div> -->\n  <div class=\"pages\">\n    <div *ngFor=\"let page of pages;\">\n        <div class=\"item page-item\" [ngClass]=\"{actived: page['actived']}\" (click)=\"changeComponent(page)\">\n          <img src=\"assets/icons/page.svg\" alt=\"\" class=\"icon\">\n          <span class=\"page-name\" >{{page['name']}}</span>\n          <img class=\"editorPage iconPage\" (click)=\"editorPage(page, $event)\" src=\"assets/icons/editorLine.svg\" title=\"编辑页面\" alt=\"编辑\">\n          <img class=\"deletePage iconPage\" (click)=\"deletePage(page, $event)\" src=\"assets/icons/delete.svg\" [title]=\"'删除'+page['name']+'页面'\" >\n        </div>\n    </div>\n    <ng-container *ngIf=\"!pages || pages.length ===0\">\n        <span class=\"no-val\">当前项目没有页面</span>\n      </ng-container>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-help/comp-help.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/develop/comp-help/comp-help.component.html ***!
    \*********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorDevelopCompHelpCompHelpComponentHtml(module, exports) {
    module.exports = "<div class=\"help\">\n  <div class=\"title\" (click)=\"showHelp = !showHelp\">\n    <span><img class=\"img-help\" src=\"assets/icons/help2.svg\" alt=\"\"></span>\n  </div>\n  <div class=\"body\" *ngIf=\"showHelp\"> \n    <div class=\"tit\">\n      <div class=\"title\" title=\"帮助文档\">帮助文档</div>\n      <img src=\"assets/icons/hidden.png\" title=\"隐藏文档\" alt=\"隐藏文档\" class=\"close\" (click)=\"showHelp = !showHelp\">\n    </div>\n    <div class=\"item-title\">快捷键</div>\n    <ng-container *ngFor=\"let item of data;let i = $index\">\n      <div class=\"key-item\">\n        <code class=\"name\">{{item['name']}}</code>\n        <code class=\"key\">{{item['key_same']}}</code>\n      </div>\n    </ng-container>\n    <div class=\"item-title\">仓库</div>\n    <ng-container>\n      <div class=\"key-item\">\n        <code class=\"name\">GitHub</code>\n        <a href=\"https://github.com/bojue\">bojue</a>\n      </div>\n    </ng-container>\n  \n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-pre-view/comp-pre-view.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/develop/comp-pre-view/comp-pre-view.component.html ***!
    \*****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorDevelopCompPreViewCompPreViewComponentHtml(module, exports) {
    module.exports = "<div class=\"pre-view\">\n    <div class=\"view-icon\">\n      <img class=\"view\" (click)=\"goBack()\" src=\"assets/icons/return.svg\" title=\"当前预览模式\" alt=\"预览模式\">\n    </div>\n    <div class=\"content\" [ngStyle]=\"{'width':pageInfo && pageInfo['width']+'px', 'height':pageInfo &&pageInfo['height']+'px'}\">\n        <ng-template view-contain-ref #contentComp ></ng-template>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-setting/comp-setting.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/develop/comp-setting/comp-setting.component.html ***!
    \***************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorDevelopCompSettingCompSettingComponentHtml(module, exports) {
    module.exports = "<div class=\"settings\">\n  <div class=\"comp-page\">\n    <!-- 预览 -->\n    <div class=\"page-config\">\n      <div class=\"pre-view-background\">\n        <span class=\"title\">背景:</span>\n        <img class=\"item-bg\" (click)=\"changeBg('open')\" src=\"assets/icons/grid-open.svg\" alt=\"网格开\" title=\"网格开\">\n        <img class=\"item-bg\" (click)=\"changeBg('close')\" src=\"assets/icons/grid-close.svg\" alt=\"网格关\" title=\"网格关\">\n      </div>\n      <div class=\"pre-view-button\" (click)=\"hasPageBool && preView($event)\">\n        <img src=\"assets/icons/yulan.svg\" class=\"pre-view\" [ngClass]=\"{'display-pre':!hasPageBool}\" title=\"预览\" alt=\"预览\">\n      </div>   \n      <div class=\"update\">\n        <div class=\"save\" (click)=\"updatePage()\">更新</div>\n      </div>\n    </div> \n  </div>\n  <div class=\"comp-item\">\n      <!-- 1.页面选择-->\n      <ng-container  *ngIf=\"!hasPageBool && !activeSettingObj && pageGridSetting['showRight']\">\n        <div class=\"item-discription noComp\">\n          <div class=\"title\" title=\"请选择页面\">{{'请选择页面'}}</div>\n        </div>\n      </ng-container>\n\n      <!-- 2.页面设置 -->\n      <ng-container  *ngIf=\"currentPage && !activeSettingObj && pageGridSetting['showRight']\">\n        <div class=\"item-discription\">\n          <div class=\"title\" title=\"请选择组件\">{{(pageName || '') + '页面'}}</div>\n        </div>\n        <div class=\"set-body\">\n          <app-page-size [pageStyles]=\"currentPage\"></app-page-size>\n        </div>\n      </ng-container>\n\n      <!-- 3.组件设置 -->\n      <ng-container *ngIf=\"activeSettingObj && pageGridSetting['showRight']\">\n        <div class=\"item-discription\">\n          <div class=\"title\">{{activeSettingObj['name']}}</div>\n        </div>\n        <!-- 组件删除 -->\n        <div class=\"del\">\n          <img class='del-btn' (click)=\"deleteComp($event)\" src=\"assets/icons/delete.svg\" title=\"删除组件\" alt=\"删除组件\">\n        </div>\n        \n        <div class=\"set-tabs\">\n          <ng-container *ngFor=\"let tab of states;\" >\n            <div class=\"item tab\" (click)=\"activeState(tab)\" [ngClass]=\"{'active':tab['active']}\">\n              {{tab['name']}}\n            </div>\n          </ng-container>\n        </div>\n  \n        <div class=\"set-body\" *ngIf=\"stateObj === 'style'\">\n          <div class=\"set-list scrollY styles\" >\n            <app-user-drag class=\"set-item user-select-node \" [style]=\"activeSettingObj['style']\"></app-user-drag>\n            <app-size [style]=\"activeSettingObj['style']\" class=\"user-select-node\"></app-size>\n            <app-position class=\"set-item user-select-node \" [style]=\"activeSettingObj['style']\"></app-position>\n            <app-padding class=\"set-item user-select-node \" [style]=\"activeSettingObj['style']\"></app-padding>\n            <app-border class=\"set-item user-select-node \" [style]=\"activeSettingObj['style']\"></app-border>\n            <app-opacity class=\"set-item user-select-node \" [style]=\"activeSettingObj['style']\"></app-opacity>\n            <app-fonts class=\"set-item user-select-node \" [style]=\"activeSettingObj['style']\"></app-fonts>\n            <app-background class=\"set-item user-select-node \" [style]=\"activeSettingObj['style']\"></app-background>\n            <app-z-index class=\"set-item user-select-node \" [style]=\"activeSettingObj['style']\" ></app-z-index>\n            <app-style-copy class=\"set-item\" [style]=\"activeSettingObj['style']\"></app-style-copy>\n          </div>\n        </div>\n        \n        <div class=\"set-body\" *ngIf=\"stateObj === 'data' \">\n          <div class=\"set-list scrollY  setting-valus\" >\n            <app-img-val [data]=\"activeSettingObj['data']\"></app-img-val>\n            <app-button-val [data]=\"activeSettingObj['data']\"></app-button-val>\n            <app-input-val [data]=\"activeSettingObj['data']\"></app-input-val>\n            <app-textarea-val [data]=\"activeSettingObj['data']\" ></app-textarea-val>\n            <app-text-val [data]=\"activeSettingObj['data']\"></app-text-val>\n            <app-list-val [data]=\"activeSettingObj['data']\"></app-list-val>\n            <app-video-val [data]=\"activeSettingObj['data']\"></app-video-val>\n            <app-audio-val [data]=\"activeSettingObj['data']\"></app-audio-val>\n          </div>\n        </div>\n  \n        <div class=\"set-body\" *ngIf=\"stateObj === 'event' \" >\n          <div class=\"set-list scrollY setting-events\">\n            <app-route-event [event]=\"activeSettingObj['event']\"></app-route-event>\n          </div>\n        </div>\n      </ng-container>\n      \n      <!-- 边框设置 -->\n      <div class=\"div-border left-border\">\n          <div class=\"set-btn\" (click)=\"showGrigFun()\">\n              <img src=\"assets/icons/right.svg\" alt=\"\" *ngIf=\"pageGridSetting['showRight']\">\n              <img src=\"assets/icons/left.svg\" alt=\"\" *ngIf=\"!pageGridSetting['showRight']\"> \n            </div>\n      </div>\n  </div>\n  \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/index.js!./src/app/editor/develop/development.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/editor/develop/development.html ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRawLoaderIndexJsSrcAppEditorDevelopDevelopmentHtml(module, exports) {
    module.exports = "<div class=\"devBody\" [ngClass]=\"{\n  'width-all':pageGridSetting['showLeft'] && pageGridSetting['showRight'],\n  'width-no':!pageGridSetting['showLeft'] && !pageGridSetting['showRight'],\n  'width-left':pageGridSetting['showLeft'] && !pageGridSetting['showRight'],\n  'width-right':!pageGridSetting['showLeft'] && pageGridSetting['showRight']}\">\n  <!-- 1.组态管理 -->\n  <div class=\"comp-marage\">\n    <app-comp-configuration\n      [projectId]=\"projectId\"\n      [currnetPageComps]=\"currnetPageComps\"\n      [pageGridSetting]=\"pageGridSetting\"\n      (compDragEvent)=\"dragCompEnd($event)\"\n      (selCurrentPage)=\"getCurrentPage($event)\"\n      (activeCompFun)=\"activeComp($event)\"\n      (addPage)=\"addPage($event)\">\n    </app-comp-configuration>\n  </div>\n\n  <!-- 2.卡尺辅助 -->\n  <div class=\"canvas-comp\">\n    <app-scale></app-scale>\n  </div>\n\n  <!-- 3.视图 -->\n  <div id='componentsBody' [ngClass]=\"{hasPage:!currnetPageComps, 'bg-grid':development_setting_bg==='bg-grid', 'bg-blank': development_setting_bg === 'bg-blank'}\" class=\"border-r border-b m-l-5 h90 content\">\n    <div class=\"selectPagePrompt\" *ngIf=\"!currnetPageComps\">\n      <div class=\"info\">请选择页面</div>\n    </div>\n    <div class=\"content\" [ngStyle]=\"{'width':currentPage && currentPage['style'] && currentPage['style']['width']+'px','height':currentPage && currentPage['style'] && currentPage['style']['height'] + 'px'}\">\n      <ng-template view-contain-ref #contentComp ></ng-template>\n    </div>\n\n  </div>\n\n  <!-- 4.设置-->\n  <div class=\"setting-but\">\n    <app-comp-setting \n      class=\"settings\" \n      [currentPage]= \"currentPage\"\n      [hasPageBool]=\"!!currnetPageComps\"\n      [pageGridSetting]=\"pageGridSetting\"\n      [activeSettingObj]=\"activeCompSettingObject\" \n      (settingObjChange)=\"chengeComponent($event)\"\n      (deleteComponent)=\"deleteComponent($event)\"\n      (preViewComp)=\"preView()\"\n      (updateCurrentPage)=\"savePage()\"\n      (changeBackground)=\"changeBg($event)\">\n    </app-comp-setting>\n  </div>\n  \n  <!-- 5.帮助 -->\n  <div class=\"comp-help\">\n    <app-comp-help></app-comp-help>\n  </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-basic/comp-setting-basic.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/editor/comps/comp-basic/comp-setting-basic.module.ts ***!
    \**********************************************************************/

  /*! exports provided: CompSettingBasicModule */

  /***/
  function srcAppEditorCompsCompBasicCompSettingBasicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompSettingBasicModule", function () {
      return CompSettingBasicModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");
    /* harmony import */


    var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic/basic.component */
    "./src/app/editor/comps/comp-basic/basic/basic.component.ts");
    /* harmony import */


    var _custom_basic_custom_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./custom-basic/custom-basic.component */
    "./src/app/editor/comps/comp-basic/custom-basic/custom-basic.component.ts");
    /* harmony import */


    var _data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");
    /* harmony import */


    var _event_basic_event_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./event-basic/event-basic.component */
    "./src/app/editor/comps/comp-basic/event-basic/event-basic.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _temp_basic_temp_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./temp-basic/temp-basic.component */
    "./src/app/editor/comps/comp-basic/temp-basic/temp-basic.component.ts");

    var settingBasic = [_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"], _custom_basic_custom_basic_component__WEBPACK_IMPORTED_MODULE_3__["CustomBasicComponent"], _data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_4__["DataBasicComponent"], _event_basic_event_basic_component__WEBPACK_IMPORTED_MODULE_5__["EventBasicComponent"], _style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_1__["StyleBasicComponent"], _temp_basic_temp_basic_component__WEBPACK_IMPORTED_MODULE_7__["TempBasicComponent"]];

    var CompSettingBasicModule = function CompSettingBasicModule() {
      _classCallCheck(this, CompSettingBasicModule);
    };

    CompSettingBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      declarations: [[].concat(settingBasic)],
      imports: [],
      providers: [],
      exports: [[].concat(settingBasic)],
      bootstrap: [],
      entryComponents: [[].concat(settingBasic)],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CompSettingBasicModule);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/editor/comps/comp-basic/data-basic/data-basic.component.scss ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompBasicDataBasicDataBasicComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLWJhc2ljL2RhdGEtYmFzaWMvZGF0YS1iYXNpYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts ***!
    \****************************************************************************/

  /*! exports provided: DataBasicComponent */

  /***/
  function srcAppEditorCompsCompBasicDataBasicDataBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataBasicComponent", function () {
      return DataBasicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataBasicComponent = /*#__PURE__*/function () {
      function DataBasicComponent() {
        _classCallCheck(this, DataBasicComponent);

        this.createObj = {};
      }

      _createClass(DataBasicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showBoolHeader",
        value: function showBoolHeader() {
          return this.data.hasOwnProperty(this.data_type);
        }
      }, {
        key: "initParentData",
        value: function initParentData() {
          this.showMoreBool = true;
          this.initIcon();
        }
      }, {
        key: "showMoreFun",
        value: function showMoreFun() {
          this.showMoreBool = !this.showMoreBool;
          this.initIcon();
        }
      }, {
        key: "initIcon",
        value: function initIcon() {
          this.iconUrl = this.showMoreBool ? 'assets/icons/up.svg' : 'assets/icons/down.svg';
        }
      }]);

      return DataBasicComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DataBasicComponent.prototype, "data", void 0);
    DataBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-data-basic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./data-basic.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-basic/data-basic/data-basic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./data-basic.component.scss */
      "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DataBasicComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-basic/event-basic/event-basic.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-basic/event-basic/event-basic.component.scss ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompBasicEventBasicEventBasicComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLWJhc2ljL2V2ZW50LWJhc2ljL2V2ZW50LWJhc2ljLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-basic/event-basic/event-basic.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/editor/comps/comp-basic/event-basic/event-basic.component.ts ***!
    \******************************************************************************/

  /*! exports provided: EventBasicComponent */

  /***/
  function srcAppEditorCompsCompBasicEventBasicEventBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventBasicComponent", function () {
      return EventBasicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventBasicComponent = /*#__PURE__*/function () {
      function EventBasicComponent() {
        _classCallCheck(this, EventBasicComponent);
      }

      _createClass(EventBasicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showBoolHeader",
        value: function showBoolHeader() {
          return this.event && this.event.hasOwnProperty(this.event_type);
        }
      }, {
        key: "initParentData",
        value: function initParentData() {
          this.showMoreBool = true;
          this.initIcon();
        }
      }, {
        key: "showMoreFun",
        value: function showMoreFun() {
          this.showMoreBool = !this.showMoreBool;
          this.initIcon();
        }
      }, {
        key: "initIcon",
        value: function initIcon() {
          this.iconUrl = this.showMoreBool ? 'assets/icons/up.svg' : 'assets/icons/down.svg';
        }
      }]);

      return EventBasicComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EventBasicComponent.prototype, "event", void 0);
    EventBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-basic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-basic.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-basic/event-basic/event-basic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-basic.component.scss */
      "./src/app/editor/comps/comp-basic/event-basic/event-basic.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EventBasicComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-basic/style-basic/style-basic.component.scss ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompBasicStyleBasicStyleBasicComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLWJhc2ljL3N0eWxlLWJhc2ljL3N0eWxlLWJhc2ljLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts ***!
    \******************************************************************************/

  /*! exports provided: StyleBasicComponent */

  /***/
  function srcAppEditorCompsCompBasicStyleBasicStyleBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleBasicComponent", function () {
      return StyleBasicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_editor_model_setting_style_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/editor/model/setting-style.model */
    "./src/app/editor/model/setting-style.model.ts");
    /* harmony import */


    var _model_setting_page_style_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/setting-page-style.model */
    "./src/app/editor/model/setting-page-style.model.ts");

    var StyleBasicComponent = /*#__PURE__*/function () {
      function StyleBasicComponent() {
        _classCallCheck(this, StyleBasicComponent);

        this.WARP_CODE = String.fromCharCode(13); //换行
      }

      _createClass(StyleBasicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initParentData",
        value: function initParentData() {
          this.showMoreBool = true;
          this.initIcon();
        }
      }, {
        key: "showMoreFun",
        value: function showMoreFun() {
          this.showMoreBool = !this.showMoreBool;
          this.initIcon();
        }
      }, {
        key: "initIcon",
        value: function initIcon() {
          this.iconUrl = this.showMoreBool ? 'assets/icons/up.svg' : 'assets/icons/down.svg';
        }
      }]);

      return StyleBasicComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_editor_model_setting_style_model__WEBPACK_IMPORTED_MODULE_2__["SettingStyle"])], StyleBasicComponent.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_setting_page_style_model__WEBPACK_IMPORTED_MODULE_3__["PageStyle"])], StyleBasicComponent.prototype, "pageStyles", void 0);
    StyleBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-style-basic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./style-basic.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-basic/style-basic/style-basic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./style-basic.component.scss */
      "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StyleBasicComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-basic/temp-basic/temp-basic.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/editor/comps/comp-basic/temp-basic/temp-basic.component.scss ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompBasicTempBasicTempBasicComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLWJhc2ljL3RlbXAtYmFzaWMvdGVtcC1iYXNpYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-basic/temp-basic/temp-basic.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/editor/comps/comp-basic/temp-basic/temp-basic.component.ts ***!
    \****************************************************************************/

  /*! exports provided: TempBasicComponent */

  /***/
  function srcAppEditorCompsCompBasicTempBasicTempBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TempBasicComponent", function () {
      return TempBasicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../basic/basic.component */
    "./src/app/editor/comps/comp-basic/basic/basic.component.ts");

    var TempBasicComponent = /*#__PURE__*/function (_basic_basic_componen) {
      _inherits(TempBasicComponent, _basic_basic_componen);

      var _super = _createSuper(TempBasicComponent);

      function TempBasicComponent() {
        _classCallCheck(this, TempBasicComponent);

        return _super.call(this);
      }

      return TempBasicComponent;
    }(_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"]);

    TempBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-temp-basic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./temp-basic.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-basic/temp-basic/temp-basic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./temp-basic.component.scss */
      "./src/app/editor/comps/comp-basic/temp-basic/temp-basic.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TempBasicComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-dev.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/editor/comps/comp-dev.module.ts ***!
    \*************************************************/

  /*! exports provided: CompDevModule */

  /***/
  function srcAppEditorCompsCompDevModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompDevModule", function () {
      return CompDevModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_lib_tool_area_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./comp-lib/tool/area/area.component */
    "./src/app/editor/comps/comp-lib/tool/area/area.component.ts");
    /* harmony import */


    var _comp_lib_tool_auxiliary_auxiliary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comp-lib/tool/auxiliary/auxiliary.component */
    "./src/app/editor/comps/comp-lib/tool/auxiliary/auxiliary.component.ts");
    /* harmony import */


    var _comp_lib_tool_scale_scale_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comp-lib/tool/scale/scale.component */
    "./src/app/editor/comps/comp-lib/tool/scale/scale.component.ts");
    /* harmony import */


    var _comp_settings_style_comp_style_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comp-settings/style/comp-style.module */
    "./src/app/editor/comps/comp-settings/style/comp-style.module.ts");
    /* harmony import */


    var _comp_settings_data_comp_data_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comp-settings/data/comp-data.module */
    "./src/app/editor/comps/comp-settings/data/comp-data.module.ts");
    /* harmony import */


    var _comp_lib_business_comp_business_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./comp-lib/business/comp-business.module */
    "./src/app/editor/comps/comp-lib/business/comp-business.module.ts");
    /* harmony import */


    var _comp_settings_event_comp_event_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./comp-settings/event/comp-event.module */
    "./src/app/editor/comps/comp-settings/event/comp-event.module.ts");
    /* harmony import */


    var _comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./comp-basic/comp-setting-basic.module */
    "./src/app/editor/comps/comp-basic/comp-setting-basic.module.ts");
    /* harmony import */


    var src_app_core_code_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/core/code.module */
    "./src/app/core/code.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _comp_lib_basic_comp_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./comp-lib/basic/comp.module */
    "./src/app/editor/comps/comp-lib/basic/comp.module.ts");

    var CompDevModule = function CompDevModule() {
      _classCallCheck(this, CompDevModule);
    };

    CompDevModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_comp_lib_tool_auxiliary_auxiliary_component__WEBPACK_IMPORTED_MODULE_3__["AuxiliaryComponent"], _comp_lib_tool_scale_scale_component__WEBPACK_IMPORTED_MODULE_4__["ScaleComponent"], _comp_lib_tool_area_area_component__WEBPACK_IMPORTED_MODULE_2__["AreaComponent"]],
      imports: [src_app_core_code_module__WEBPACK_IMPORTED_MODULE_10__["CodeModule"], _comp_settings_style_comp_style_module__WEBPACK_IMPORTED_MODULE_5__["CompStyleModule"], _comp_settings_data_comp_data_module__WEBPACK_IMPORTED_MODULE_6__["CompDataModule"], _comp_lib_basic_comp_module__WEBPACK_IMPORTED_MODULE_13__["CompBasicModule"], _comp_lib_business_comp_business_module__WEBPACK_IMPORTED_MODULE_7__["CompBusinessModule"], _comp_settings_event_comp_event_module__WEBPACK_IMPORTED_MODULE_8__["CompEventModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_9__["CompSettingBasicModule"]],
      providers: [],
      exports: [_comp_lib_tool_auxiliary_auxiliary_component__WEBPACK_IMPORTED_MODULE_3__["AuxiliaryComponent"], _comp_lib_tool_scale_scale_component__WEBPACK_IMPORTED_MODULE_4__["ScaleComponent"], _comp_lib_tool_area_area_component__WEBPACK_IMPORTED_MODULE_2__["AreaComponent"]],
      bootstrap: [],
      entryComponents: [_comp_lib_tool_auxiliary_auxiliary_component__WEBPACK_IMPORTED_MODULE_3__["AuxiliaryComponent"], _comp_lib_tool_scale_scale_component__WEBPACK_IMPORTED_MODULE_4__["ScaleComponent"], _comp_lib_tool_area_area_component__WEBPACK_IMPORTED_MODULE_2__["AreaComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CompDevModule);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-lib/basic/comp.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/editor/comps/comp-lib/basic/comp.module.ts ***!
    \************************************************************/

  /*! exports provided: CompBasicModule */

  /***/
  function srcAppEditorCompsCompLibBasicCompModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompBasicModule", function () {
      return CompBasicModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./button/button.component */
    "./src/app/editor/comps/comp-lib/basic/button/button.component.ts");
    /* harmony import */


    var _core_code_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/code.module */
    "./src/app/core/code.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select/select.component */
    "./src/app/editor/comps/comp-lib/basic/select/select.component.ts");
    /* harmony import */


    var _text_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./text/text.component */
    "./src/app/editor/comps/comp-lib/basic/text/text.component.ts");
    /* harmony import */


    var _img_img_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./img/img.component */
    "./src/app/editor/comps/comp-lib/basic/img/img.component.ts");
    /* harmony import */


    var _input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./input/input.component */
    "./src/app/editor/comps/comp-lib/basic/input/input.component.ts");
    /* harmony import */


    var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./textarea/textarea.component */
    "./src/app/editor/comps/comp-lib/basic/textarea/textarea.component.ts");
    /* harmony import */


    var _line_line_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./line/line.component */
    "./src/app/editor/comps/comp-lib/basic/line/line.component.ts");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./video/video.component */
    "./src/app/editor/comps/comp-lib/basic/video/video.component.ts");
    /* harmony import */


    var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./swiper/swiper.component */
    "./src/app/editor/comps/comp-lib/basic/swiper/swiper.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var basicComp = [_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"], _text_text_component__WEBPACK_IMPORTED_MODULE_6__["TextComponent"], _img_img_component__WEBPACK_IMPORTED_MODULE_7__["ImgComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_8__["InputComponent"], _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_9__["TextareaComponent"], _line_line_component__WEBPACK_IMPORTED_MODULE_10__["LineComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_11__["VideoComponent"], _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_12__["SwiperComponent"]];

    var CompBasicModule = function CompBasicModule() {
      _classCallCheck(this, CompBasicModule);
    };

    CompBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
      declarations: [[].concat(basicComp)],
      imports: [_core_code_module__WEBPACK_IMPORTED_MODULE_2__["CodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      exports: [[].concat(basicComp)],
      providers: [],
      bootstrap: [],
      entryComponents: [[].concat(basicComp)],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CompBasicModule);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-lib/basic/select/select.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/editor/comps/comp-lib/basic/select/select.component.scss ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompLibBasicSelectSelectComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLWxpYi9iYXNpYy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-lib/basic/select/select.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/editor/comps/comp-lib/basic/select/select.component.ts ***!
    \************************************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppEditorCompsCompLibBasicSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SelectComponent = /*#__PURE__*/function () {
      function SelectComponent() {
        _classCallCheck(this, SelectComponent);
      }

      _createClass(SelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectComponent;
    }();

    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-lib/basic/select/select.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select.component.scss */
      "./src/app/editor/comps/comp-lib/basic/select/select.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SelectComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-lib/basic/swiper/swiper.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/editor/comps/comp-lib/basic/swiper/swiper.component.scss ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompLibBasicSwiperSwiperComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLWxpYi9iYXNpYy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-lib/basic/swiper/swiper.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/editor/comps/comp-lib/basic/swiper/swiper.component.ts ***!
    \************************************************************************/

  /*! exports provided: SwiperComponent */

  /***/
  function srcAppEditorCompsCompLibBasicSwiperSwiperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwiperComponent", function () {
      return SwiperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SwiperComponent = /*#__PURE__*/function () {
      function SwiperComponent() {
        _classCallCheck(this, SwiperComponent);
      }

      _createClass(SwiperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SwiperComponent;
    }();

    SwiperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-swiper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./swiper.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-lib/basic/swiper/swiper.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./swiper.component.scss */
      "./src/app/editor/comps/comp-lib/basic/swiper/swiper.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SwiperComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-lib/business/comp-business.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/editor/comps/comp-lib/business/comp-business.module.ts ***!
    \************************************************************************/

  /*! exports provided: CompBusinessModule */

  /***/
  function srcAppEditorCompsCompLibBusinessCompBusinessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompBusinessModule", function () {
      return CompBusinessModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
    /* harmony import */


    var _comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../comp-basic/comp-setting-basic.module */
    "./src/app/editor/comps/comp-basic/comp-setting-basic.module.ts");
    /* harmony import */


    var _core_code_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../core/code.module */
    "./src/app/core/code.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _chart_pie_chart_pie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chart-pie/chart-pie.component */
    "./src/app/editor/comps/comp-lib/business/chart-pie/chart-pie.component.ts");
    /* harmony import */


    var _chart_guage_chart_guage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chart-guage/chart-guage.component */
    "./src/app/editor/comps/comp-lib/business/chart-guage/chart-guage.component.ts");
    /* harmony import */


    var _chart_polyline_chart_polyline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./chart-polyline/chart-polyline.component */
    "./src/app/editor/comps/comp-lib/business/chart-polyline/chart-polyline.component.ts");
    /* harmony import */


    var _chart_radar_chart_radar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./chart-radar/chart-radar.component */
    "./src/app/editor/comps/comp-lib/business/chart-radar/chart-radar.component.ts");

    var customComp = [_chart_pie_chart_pie_component__WEBPACK_IMPORTED_MODULE_7__["ChartPieComponent"], _chart_guage_chart_guage_component__WEBPACK_IMPORTED_MODULE_8__["ChartGuageComponent"], _chart_polyline_chart_polyline_component__WEBPACK_IMPORTED_MODULE_9__["ChartPolylineComponent"], _chart_radar_chart_radar_component__WEBPACK_IMPORTED_MODULE_10__["ChartRadarComponent"]];

    var CompBusinessModule = function CompBusinessModule() {
      _classCallCheck(this, CompBusinessModule);
    };

    CompBusinessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [[].concat(customComp)],
      imports: [_core_code_module__WEBPACK_IMPORTED_MODULE_4__["CodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["NgxEchartsModule"], _comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_3__["CompSettingBasicModule"]],
      exports: [[].concat(customComp)],
      providers: [],
      bootstrap: [],
      entryComponents: [[].concat(customComp)],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CompBusinessModule);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-lib/tool/scale/scale.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/editor/comps/comp-lib/tool/scale/scale.component.scss ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompLibToolScaleScaleComponentScss(module, exports) {
    module.exports = ":host /deep/ .canvas {\n  position: absolute;\n  left: 0px;\n  top: 0; }\n  :host /deep/ .canvas #w-canvas {\n    height: 20px;\n    width: 1700px;\n    left: -10px;\n    top: 0;\n    position: absolute;\n    border-top: 1px solid #ccc; }\n  :host /deep/ .canvas #h-canvas {\n    position: absolute;\n    top: 1px;\n    left: 0px;\n    height: 830px;\n    width: 15px;\n    border-left: 1px solid #ccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1saWIvdG9vbC9zY2FsZS9zY2FsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsTUFBSyxFQUFBO0VBSmI7SUFNWSxZQUFZO0lBQ1osYUFBWTtJQUNaLFdBQVc7SUFDWCxNQUFLO0lBQ0wsa0JBQWtCO0lBQ2xCLDBCQUF5QixFQUFBO0VBWHJDO0lBY1ksa0JBQWtCO0lBQ2xCLFFBQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLWxpYi90b29sL3NjYWxlL3NjYWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCAvZGVlcC8ge1xuICAgIC5jYW52YXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgICN3LWNhbnZhcyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDoxNzAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2NjYztcbiAgICAgICAgfVxuICAgICAgICAjaC1jYW52YXMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOjFweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIGhlaWdodDogODMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjY2NjO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-lib/tool/scale/scale.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/editor/comps/comp-lib/tool/scale/scale.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ScaleComponent */

  /***/
  function srcAppEditorCompsCompLibToolScaleScaleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScaleComponent", function () {
      return ScaleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScaleComponent = /*#__PURE__*/function () {
      function ScaleComponent(element) {
        _classCallCheck(this, ScaleComponent);

        this.element = element;
      }

      _createClass(ScaleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCanvas();
        }
      }, {
        key: "getCanvas",
        value: function getCanvas() {
          this.getLine(4000, 'w');
          this.getLine(1600, 'h');
        } //刻度尺和刻度标注

      }, {
        key: "getLine",
        value: function getLine() {
          var maxLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;
          var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'w';

          var _qEle = status === 'w' ? '#w-canvas' : '#h-canvas';

          var w_canvas = this.element.nativeElement.querySelector(_qEle);

          var _w = w_canvas.getContext('2d');

          _w.beginPath();

          _w.strokeStyle = '#000';
          _w.lineWidth = 1;

          for (var i = -40; i < maxLine; i = i + 20) {
            if (status === 'w') {
              _w.moveTo(i, 0);

              if (i % 100 !== 0) {
                _w.lineTo(i, 8);
              } else if (i % 200 === 0) {
                _w.lineTo(i, 15);
              } else {
                _w.font = '500 20px Tahoma';

                _w.fillText("".concat((i - 100) / 2), i + 3, 24);

                _w.lineTo(i, 15);
              }
            } else {
              var _hi = i - 40;

              _w.moveTo(0, i);

              if (_hi % 100 !== 0) {
                _w.lineTo(8, i);
              } else {
                _w.font = '500 20px Tahoma';

                _w.fillText("".concat(_hi / 2), 10, i + 10);

                _w.lineTo(12, i);
              }
            }
          }

          _w.stroke();

          _w.closePath();
        }
      }]);

      return ScaleComponent;
    }();

    ScaleComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    ScaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scale',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scale.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-lib/tool/scale/scale.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scale.component.scss */
      "./src/app/editor/comps/comp-lib/tool/scale/scale.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ScaleComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/audio-val/audio-val.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/audio-val/audio-val.component.scss ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsDataAudioValAudioValComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL2RhdGEvYXVkaW8tdmFsL2F1ZGlvLXZhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/audio-val/audio-val.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/audio-val/audio-val.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AudioValComponent */

  /***/
  function srcAppEditorCompsCompSettingsDataAudioValAudioValComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioValComponent", function () {
      return AudioValComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");

    var AudioValComponent = /*#__PURE__*/function (_comp_basic_data_basi) {
      _inherits(AudioValComponent, _comp_basic_data_basi);

      var _super2 = _createSuper(AudioValComponent);

      function AudioValComponent() {
        var _this;

        _classCallCheck(this, AudioValComponent);

        _this = _super2.call(this);
        _this.data_type = 'audio_val';
        return _this;
      }

      _createClass(AudioValComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
        }
      }]);

      return AudioValComponent;
    }(_comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__["DataBasicComponent"]);

    AudioValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-audio-val',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./audio-val.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/audio-val/audio-val.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./audio-val.component.scss */
      "./src/app/editor/comps/comp-settings/data/audio-val/audio-val.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AudioValComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/button-val/button-val.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/button-val/button-val.component.scss ***!
    \**************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsDataButtonValButtonValComponentScss(module, exports) {
    module.exports = ":host /deep/ .data-val {\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9kYXRhL2J1dHRvbi12YWwvYnV0dG9uLXZhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2NvbXBzL2NvbXAtc2V0dGluZ3MvZGF0YS9idXR0b24tdmFsL2J1dHRvbi12YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8ge1xuICAgIC5kYXRhLXZhbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/button-val/button-val.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/button-val/button-val.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ButtonValComponent */

  /***/
  function srcAppEditorCompsCompSettingsDataButtonValButtonValComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonValComponent", function () {
      return ButtonValComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");

    var ButtonValComponent = /*#__PURE__*/function (_comp_basic_data_basi2) {
      _inherits(ButtonValComponent, _comp_basic_data_basi2);

      var _super3 = _createSuper(ButtonValComponent);

      function ButtonValComponent() {
        var _this2;

        _classCallCheck(this, ButtonValComponent);

        _this2 = _super3.call(this);
        _this2.data_type = 'button_val';
        return _this2;
      }

      _createClass(ButtonValComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
        }
      }]);

      return ButtonValComponent;
    }(_comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__["DataBasicComponent"]);

    ButtonValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-button-val',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./button-val.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/button-val/button-val.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./button-val.component.scss */
      "./src/app/editor/comps/comp-settings/data/button-val/button-val.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ButtonValComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/comp-data.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/comp-data.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CompDataModule */

  /***/
  function srcAppEditorCompsCompSettingsDataCompDataModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompDataModule", function () {
      return CompDataModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./uploader/uploader.component */
    "./src/app/editor/comps/comp-settings/data/uploader/uploader.component.ts");
    /* harmony import */


    var _button_val_button_val_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./button-val/button-val.component */
    "./src/app/editor/comps/comp-settings/data/button-val/button-val.component.ts");
    /* harmony import */


    var _text_val_text_val_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./text-val/text-val.component */
    "./src/app/editor/comps/comp-settings/data/text-val/text-val.component.ts");
    /* harmony import */


    var _textarea_val_textarea_val_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./textarea-val/textarea-val.component */
    "./src/app/editor/comps/comp-settings/data/textarea-val/textarea-val.component.ts");
    /* harmony import */


    var _input_val_input_val_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./input-val/input-val.component */
    "./src/app/editor/comps/comp-settings/data/input-val/input-val.component.ts");
    /* harmony import */


    var _img_val_img_val_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./img-val/img-val.component */
    "./src/app/editor/comps/comp-settings/data/img-val/img-val.component.ts");
    /* harmony import */


    var _list_val_list_val_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./list-val/list-val.component */
    "./src/app/editor/comps/comp-settings/data/list-val/list-val.component.ts");
    /* harmony import */


    var _audio_val_audio_val_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./audio-val/audio-val.component */
    "./src/app/editor/comps/comp-settings/data/audio-val/audio-val.component.ts");
    /* harmony import */


    var _video_val_video_val_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./video-val/video-val.component */
    "./src/app/editor/comps/comp-settings/data/video-val/video-val.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../comp-basic/comp-setting-basic.module */
    "./src/app/editor/comps/comp-basic/comp-setting-basic.module.ts");
    /* harmony import */


    var src_app_core_code_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/core/code.module */
    "./src/app/core/code.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/core/provider/indexDB/indexDB.service */
    "./src/app/core/provider/indexDB/indexDB.service.ts");

    var dataComp = [_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_1__["UploaderComponent"], _button_val_button_val_component__WEBPACK_IMPORTED_MODULE_2__["ButtonValComponent"], _text_val_text_val_component__WEBPACK_IMPORTED_MODULE_3__["TextValComponent"], _textarea_val_textarea_val_component__WEBPACK_IMPORTED_MODULE_4__["TextareaValComponent"], _input_val_input_val_component__WEBPACK_IMPORTED_MODULE_5__["InputValComponent"], _img_val_img_val_component__WEBPACK_IMPORTED_MODULE_6__["ImgValComponent"], _list_val_list_val_component__WEBPACK_IMPORTED_MODULE_7__["ListValComponent"], _audio_val_audio_val_component__WEBPACK_IMPORTED_MODULE_8__["AudioValComponent"], _video_val_video_val_component__WEBPACK_IMPORTED_MODULE_9__["VideoValComponent"]];

    var CompDataModule = function CompDataModule() {
      _classCallCheck(this, CompDataModule);
    };

    CompDataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
      declarations: [[].concat(dataComp)],
      imports: [src_app_core_code_module__WEBPACK_IMPORTED_MODULE_12__["CodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_11__["CompSettingBasicModule"]],
      exports: [[].concat(dataComp)],
      providers: [src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_15__["IndexDBService"]],
      bootstrap: [],
      entryComponents: [[].concat(dataComp)],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CompDataModule);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/img-val/img-val.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/img-val/img-val.component.scss ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsDataImgValImgValComponentScss(module, exports) {
    module.exports = ":host /deep/ .img-val .title {\n  height: 30px;\n  line-height: 30px; }\n\n:host /deep/ .img-val .file-val {\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n:host /deep/ .img-val .file-val .img-item {\n    cursor: pointer;\n    text-align: center;\n    margin: 2px 0px; }\n\n:host /deep/ .img-val .file-val .img-item img {\n      width: 94%;\n      height: 76px;\n      border: 1px solid blueviolet;\n      border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9kYXRhL2ltZy12YWwvaW1nLXZhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFKN0I7RUFPWSxhQUFZO0VBQ1osOEJBQThCLEVBQUE7O0FBUjFDO0lBVWdCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBOztBQVovQjtNQWVvQixVQUFVO01BQ1YsWUFBWTtNQUNaLDRCQUEyQjtNQUMzQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL2RhdGEvaW1nLXZhbC9pbWctdmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgL2RlZXAvIHtcbiAgICAuaW1nLXZhbCB7ICAgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgfSBcbiAgICAgICAgLmZpbGUtdmFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgICAgICAgICAgIC5pbWctaXRlbSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJweCAwcHg7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmx1ZXZpb2xldDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/img-val/img-val.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/img-val/img-val.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ImgValComponent */

  /***/
  function srcAppEditorCompsCompSettingsDataImgValImgValComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgValComponent", function () {
      return ImgValComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../comp-basic/data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");
    /* harmony import */


    var src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/provider/indexDB/indexDB.service */
    "./src/app/core/provider/indexDB/indexDB.service.ts");

    var ImgValComponent = /*#__PURE__*/function (_comp_basic_data_basi3) {
      _inherits(ImgValComponent, _comp_basic_data_basi3);

      var _super4 = _createSuper(ImgValComponent);

      function ImgValComponent(indexDBService) {
        var _this3;

        _classCallCheck(this, ImgValComponent);

        _this3 = _super4.call(this);
        _this3.indexDBService = indexDBService;
        _this3.data_type = 'img_url';
        _this3.imgsUrl = 'imgs';
        return _this3;
      }

      _createClass(ImgValComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this4 = this;

          rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].forkJoin([this.indexDBService.getDataAll(this.imgsUrl)]).subscribe(function (res) {
            _this4.imgs = res && res[0];
          });
        }
      }, {
        key: "selectImg",
        value: function selectImg(img) {
          if (img && img['url']) {
            this.data['img_url'] = img['url'];
          }
        }
      }]);

      return ImgValComponent;
    }(_comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_3__["DataBasicComponent"]);

    ImgValComponent.ctorParameters = function () {
      return [{
        type: src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_4__["IndexDBService"]
      }];
    };

    ImgValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-img-val',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./img-val.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/img-val/img-val.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./img-val.component.scss */
      "./src/app/editor/comps/comp-settings/data/img-val/img-val.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_4__["IndexDBService"]])], ImgValComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/input-val/input-val.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/input-val/input-val.component.scss ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsDataInputValInputValComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL2RhdGEvaW5wdXQtdmFsL2lucHV0LXZhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/input-val/input-val.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/input-val/input-val.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: InputValComponent */

  /***/
  function srcAppEditorCompsCompSettingsDataInputValInputValComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputValComponent", function () {
      return InputValComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");

    var InputValComponent = /*#__PURE__*/function (_comp_basic_data_basi4) {
      _inherits(InputValComponent, _comp_basic_data_basi4);

      var _super5 = _createSuper(InputValComponent);

      function InputValComponent() {
        var _this5;

        _classCallCheck(this, InputValComponent);

        _this5 = _super5.call(this);
        _this5.data_type = 'input_val';
        return _this5;
      }

      _createClass(InputValComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
        }
      }]);

      return InputValComponent;
    }(_comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__["DataBasicComponent"]);

    InputValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-input-val',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input-val.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/input-val/input-val.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input-val.component.scss */
      "./src/app/editor/comps/comp-settings/data/input-val/input-val.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InputValComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/list-val/list-val.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/list-val/list-val.component.scss ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsDataListValListValComponentScss(module, exports) {
    module.exports = ":host /deep/ .list-val {\n  display: block;\n  margin: 10px; }\n  :host /deep/ .list-val .set-grid {\n    display: grid;\n    margin-left: 15px;\n    margin-top: 10px;\n    grid-template-columns: 40px 110px; }\n  :host /deep/ .list-val .set-grid input {\n      padding: 4px 6px; }\n  :host /deep/ .list-val .set-grid .val {\n      padding: 4px 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9kYXRhL2xpc3QtdmFsL2xpc3QtdmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsY0FBYztFQUNkLFlBQVksRUFBQTtFQUhwQjtJQUtZLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFBO0VBUjdDO01BVWdCLGdCQUFnQixFQUFBO0VBVmhDO01BYWdCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2NvbXBzL2NvbXAtc2V0dGluZ3MvZGF0YS9saXN0LXZhbC9saXN0LXZhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLyB7IFxuICAgIC5saXN0LXZhbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIC5zZXQtZ3JpZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDExMHB4O1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmFsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/list-val/list-val.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/list-val/list-val.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ListValComponent */

  /***/
  function srcAppEditorCompsCompSettingsDataListValListValComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListValComponent", function () {
      return ListValComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");

    var ListValComponent = /*#__PURE__*/function (_comp_basic_data_basi5) {
      _inherits(ListValComponent, _comp_basic_data_basi5);

      var _super6 = _createSuper(ListValComponent);

      function ListValComponent() {
        var _this6;

        _classCallCheck(this, ListValComponent);

        _this6 = _super6.call(this);
        _this6.data_type = 'list_val';
        return _this6;
      }

      _createClass(ListValComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initDate();
        }
      }, {
        key: "initDate",
        value: function initDate() {
          this.list_grid_list = [{
            name: 'grid',
            value: true
          }, {
            name: '?�',
            value: false
          }];
        }
      }]);

      return ListValComponent;
    }(_comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__["DataBasicComponent"]);

    ListValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-val',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-val.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/list-val/list-val.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-val.component.scss */
      "./src/app/editor/comps/comp-settings/data/list-val/list-val.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ListValComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/text-val/text-val.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/text-val/text-val.component.scss ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsDataTextValTextValComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL2RhdGEvdGV4dC12YWwvdGV4dC12YWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/text-val/text-val.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/text-val/text-val.component.ts ***!
    \********************************************************************************/

  /*! exports provided: TextValComponent */

  /***/
  function srcAppEditorCompsCompSettingsDataTextValTextValComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextValComponent", function () {
      return TextValComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");

    var TextValComponent = /*#__PURE__*/function (_comp_basic_data_basi6) {
      _inherits(TextValComponent, _comp_basic_data_basi6);

      var _super7 = _createSuper(TextValComponent);

      function TextValComponent() {
        var _this7;

        _classCallCheck(this, TextValComponent);

        _this7 = _super7.call(this);
        _this7.data_type = 'text_val';
        return _this7;
      }

      _createClass(TextValComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
        }
      }]);

      return TextValComponent;
    }(_comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__["DataBasicComponent"]);

    TextValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-text-val',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./text-val.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/text-val/text-val.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./text-val.component.scss */
      "./src/app/editor/comps/comp-settings/data/text-val/text-val.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TextValComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/textarea-val/textarea-val.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/textarea-val/textarea-val.component.scss ***!
    \******************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsDataTextareaValTextareaValComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL2RhdGEvdGV4dGFyZWEtdmFsL3RleHRhcmVhLXZhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/textarea-val/textarea-val.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/textarea-val/textarea-val.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: TextareaValComponent */

  /***/
  function srcAppEditorCompsCompSettingsDataTextareaValTextareaValComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextareaValComponent", function () {
      return TextareaValComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");

    var TextareaValComponent = /*#__PURE__*/function (_comp_basic_data_basi7) {
      _inherits(TextareaValComponent, _comp_basic_data_basi7);

      var _super8 = _createSuper(TextareaValComponent);

      function TextareaValComponent() {
        var _this8;

        _classCallCheck(this, TextareaValComponent);

        _this8 = _super8.call(this);
        _this8.data_type = 'textarea_val';
        return _this8;
      }

      _createClass(TextareaValComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
        }
      }]);

      return TextareaValComponent;
    }(_comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__["DataBasicComponent"]);

    TextareaValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-textarea-val',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./textarea-val.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/textarea-val/textarea-val.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./textarea-val.component.scss */
      "./src/app/editor/comps/comp-settings/data/textarea-val/textarea-val.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TextareaValComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/uploader/uploader.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/uploader/uploader.component.scss ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsDataUploaderUploaderComponentScss(module, exports) {
    module.exports = ":host /deep/ .uploader {\n  margin-top: 10px; }\n  :host /deep/ .uploader .tit {\n    margin: 10px; }\n  :host /deep/ .uploader .file-val {\n    display: grid;\n    grid-template-columns: 50% 50%; }\n  :host /deep/ .uploader .file-val .img-item {\n      cursor: pointer;\n      text-align: center; }\n  :host /deep/ .uploader .file-val .img-item img {\n        width: 88%;\n        height: 76px;\n        border: 1px solid blueviolet;\n        border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9kYXRhL3VwbG9hZGVyL3VwbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCLEVBQUE7RUFGeEI7SUFJWSxZQUFZLEVBQUE7RUFKeEI7SUFPWSxhQUFZO0lBQ1osOEJBQThCLEVBQUE7RUFSMUM7TUFVZ0IsZUFBZTtNQUNmLGtCQUFrQixFQUFBO0VBWGxDO1FBYW9CLFVBQVU7UUFDVixZQUFZO1FBQ1osNEJBQTJCO1FBQzNCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2NvbXBzL2NvbXAtc2V0dGluZ3MvZGF0YS91cGxvYWRlci91cGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLyB7XG4gICAgLnVwbG9hZGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLnRpdCB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbGUtdmFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgICAgICAgICAgIC5pbWctaXRlbSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODglO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmx1ZXZpb2xldDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/uploader/uploader.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/uploader/uploader.component.ts ***!
    \********************************************************************************/

  /*! exports provided: UploaderComponent */

  /***/
  function srcAppEditorCompsCompSettingsDataUploaderUploaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploaderComponent", function () {
      return UploaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");

    var UploaderComponent = /*#__PURE__*/function (_comp_basic_data_basi8) {
      _inherits(UploaderComponent, _comp_basic_data_basi8);

      var _super9 = _createSuper(UploaderComponent);

      function UploaderComponent() {
        _classCallCheck(this, UploaderComponent);

        return _super9.call(this);
      }

      _createClass(UploaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UploaderComponent;
    }(_comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__["DataBasicComponent"]);

    UploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-uploader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./uploader.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/uploader/uploader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./uploader.component.scss */
      "./src/app/editor/comps/comp-settings/data/uploader/uploader.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UploaderComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/video-val/video-val.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/video-val/video-val.component.scss ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsDataVideoValVideoValComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL2RhdGEvdmlkZW8tdmFsL3ZpZGVvLXZhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/data/video-val/video-val.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/data/video-val/video-val.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: VideoValComponent */

  /***/
  function srcAppEditorCompsCompSettingsDataVideoValVideoValComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoValComponent", function () {
      return VideoValComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/data-basic/data-basic.component */
    "./src/app/editor/comps/comp-basic/data-basic/data-basic.component.ts");

    var VideoValComponent = /*#__PURE__*/function (_comp_basic_data_basi9) {
      _inherits(VideoValComponent, _comp_basic_data_basi9);

      var _super10 = _createSuper(VideoValComponent);

      function VideoValComponent() {
        var _this9;

        _classCallCheck(this, VideoValComponent);

        _this9 = _super10.call(this);
        _this9.data_type = 'video_val';
        return _this9;
      }

      _createClass(VideoValComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
        }
      }]);

      return VideoValComponent;
    }(_comp_basic_data_basic_data_basic_component__WEBPACK_IMPORTED_MODULE_2__["DataBasicComponent"]);

    VideoValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video-val',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-val.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/data/video-val/video-val.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-val.component.scss */
      "./src/app/editor/comps/comp-settings/data/video-val/video-val.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VideoValComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/event/comp-event.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/event/comp-event.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CompEventModule */

  /***/
  function srcAppEditorCompsCompSettingsEventCompEventModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompEventModule", function () {
      return CompEventModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _route_event_route_event_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./route-event/route-event.component */
    "./src/app/editor/comps/comp-settings/event/route-event/route-event.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../comp-basic/comp-setting-basic.module */
    "./src/app/editor/comps/comp-basic/comp-setting-basic.module.ts");
    /* harmony import */


    var src_app_core_code_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/code.module */
    "./src/app/core/code.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var styleComp = [_route_event_route_event_component__WEBPACK_IMPORTED_MODULE_1__["RouteEventComponent"]];

    var CompEventModule = function CompEventModule() {
      _classCallCheck(this, CompEventModule);
    };

    CompEventModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [[].concat(styleComp)],
      imports: [src_app_core_code_module__WEBPACK_IMPORTED_MODULE_4__["CodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_3__["CompSettingBasicModule"]],
      exports: [[].concat(styleComp)],
      providers: [],
      bootstrap: [],
      entryComponents: [[].concat(styleComp)],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CompEventModule);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/event/route-event/route-event.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/event/route-event/route-event.component.scss ***!
    \*****************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsEventRouteEventRouteEventComponentScss(module, exports) {
    module.exports = ":host /deep/ .route-event {\n  display: block;\n  position: relative; }\n  :host /deep/ .route-event .grid-2 {\n    grid-template-columns: 15% 80%; }\n  :host /deep/ .route-event .grid-2 .lab {\n      position: absolute;\n      left: 24px;\n      top: 11px; }\n  :host /deep/ .route-event .value-set {\n    width: 100%; }\n  :host /deep/ .route-event .value-set span {\n      display: inline-block;\n      width: 33px;\n      text-align: center;\n      color: #777777; }\n  :host /deep/ .route-event .value-set input {\n      height: 28px;\n      line-height: 28px;\n      width: 100px;\n      padding: 1px 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9ldmVudC9yb3V0ZS1ldmVudC9yb3V0ZS1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtFQUgxQjtJQUtZLDhCQUE4QixFQUFBO0VBTDFDO01BT2dCLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsU0FBUyxFQUFBO0VBVHpCO0lBYVksV0FBVyxFQUFBO0VBYnZCO01BZWdCLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTtFQWxCOUI7TUFxQmdCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2NvbXBzL2NvbXAtc2V0dGluZ3MvZXZlbnQvcm91dGUtZXZlbnQvcm91dGUtZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IC9kZWVwLyB7XG4gICAgLnJvdXRlLWV2ZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLmdyaWQtMiB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4MCU7XG4gICAgICAgICAgICAubGFie1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudmFsdWUtc2V0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc3Nzc3NztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/event/route-event/route-event.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/event/route-event/route-event.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: RouteEventComponent */

  /***/
  function srcAppEditorCompsCompSettingsEventRouteEventRouteEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteEventComponent", function () {
      return RouteEventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_event_basic_event_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/event-basic/event-basic.component */
    "./src/app/editor/comps/comp-basic/event-basic/event-basic.component.ts");

    var RouteEventComponent = /*#__PURE__*/function (_comp_basic_event_bas) {
      _inherits(RouteEventComponent, _comp_basic_event_bas);

      var _super11 = _createSuper(RouteEventComponent);

      function RouteEventComponent() {
        _classCallCheck(this, RouteEventComponent);

        return _super11.call(this);
      }

      _createClass(RouteEventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initData();
        }
      }, {
        key: "initData",
        value: function initData() {
          this.event_type = 'route';
        }
      }, {
        key: "changeVal",
        value: function changeVal() {
          this.event['routeBool'] = !this.event['routeBool'];
        }
      }]);

      return RouteEventComponent;
    }(_comp_basic_event_basic_event_basic_component__WEBPACK_IMPORTED_MODULE_2__["EventBasicComponent"]);

    RouteEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-route-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./route-event.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/event/route-event/route-event.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./route-event.component.scss */
      "./src/app/editor/comps/comp-settings/event/route-event/route-event.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RouteEventComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/background/background.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/background/background.component.scss ***!
    \***************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStyleBackgroundBackgroundComponentScss(module, exports) {
    module.exports = ":host /deep/ .grid-1 {\n  grid-template-columns: 100%; }\n  :host /deep/ .grid-1 .set-val .lab {\n    width: 50px !important; }\n  :host /deep/ .grid-1 .set-val .val {\n    width: 100px !important; }\n  :host /deep/ .style-bg-color span {\n  border: 1px solid rgba(230, 230, 230, 0.8);\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  border: 1px solid #e6e6e6; }\n  :host /deep/ .bd-style.item span {\n  width: 24px;\n  height: 24px; }\n  :host /deep/ .borderSpan span {\n  border: 1px solid rgba(230, 230, 230, 0.8); }\n  :host /deep/ .item {\n  display: inline-block;\n  min-width: 23px; }\n  :host /deep/ .item .bg-col {\n    width: 24px;\n    height: 24px;\n    display: inline-block;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS9iYWNrZ3JvdW5kL2JhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSwyQkFBMkIsRUFBQTtFQUZuQztJQUtnQixzQkFBc0IsRUFBQTtFQUx0QztJQVFnQix1QkFBdUIsRUFBQTtFQVJ2QztFQWNZLDBDQUFxQztFQUNyQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix5QkFBd0IsRUFBQTtFQWxCcEM7RUFzQlEsV0FBVztFQUNYLFlBQVksRUFBQTtFQXZCcEI7RUE0QlksMENBQXFDLEVBQUE7RUE1QmpEO0VBa0NRLHFCQUFvQjtFQUNwQixlQUFlLEVBQUE7RUFuQ3ZCO0lBcUNZLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQW9CO0lBQ3BCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL3N0eWxlL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLyB7IFxuICAgIC5ncmlkLTEge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICAgIC5zZXQtdmFsIHtcbiAgICAgICAgICAgIC5sYWIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmFsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3R5bGUtYmctY29sb3Ige1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgkY29sb3I6ICNlNmU2ZTYsICRhbHBoYTogMC44KTtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5iZC1zdHlsZS5pdGVtIHNwYW4ge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cblxuICAgIC5ib3JkZXJTcGFue1xuICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKCRjb2xvcjogI2U2ZTZlNiwgJGFscGhhOiAwLjgpO1xuICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5pdGVtIHtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIG1pbi13aWR0aDogMjNweDtcbiAgICAgICAgLmJnLWNvbCB7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/background/background.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/background/background.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: BackgroundComponent */

  /***/
  function srcAppEditorCompsCompSettingsStyleBackgroundBackgroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function () {
      return BackgroundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var BackgroundComponent = /*#__PURE__*/function (_comp_basic_style_bas) {
      _inherits(BackgroundComponent, _comp_basic_style_bas);

      var _super12 = _createSuper(BackgroundComponent);

      function BackgroundComponent() {
        _classCallCheck(this, BackgroundComponent);

        return _super12.call(this);
      }

      _createClass(BackgroundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
          this.backgroundArr = ['transparent', '#ffffff', '#e6e6e6', '#cdcdcd', '#707070', '#2c2c2c', '#d81e06', '#f4ea2a', '#1afa29', '#1296db'];
        }
      }, {
        key: "selColor",
        value: function selColor(col) {
          this.style['background'] = col;
        }
      }]);

      return BackgroundComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    BackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-background',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./background.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/background/background.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./background.component.scss */
      "./src/app/editor/comps/comp-settings/style/background/background.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BackgroundComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/border/border.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/border/border.component.scss ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStyleBorderBorderComponentScss(module, exports) {
    module.exports = ":host /deep/ .style-bg-color span {\n  width: 19px;\n  height: 18px;\n  display: inline-block;\n  border: 1px solid #e6e6e6; }\n\n:host /deep/ .bd-style.item span {\n  width: 24px;\n  height: 24px; }\n\n:host /deep/ .item {\n  display: inline-block;\n  min-width: 23px; }\n\n:host /deep/ .item .bg-col {\n    width: 24px;\n    height: 24px;\n    display: inline-block;\n    cursor: pointer; }\n\n:host /deep/ .borders {\n  display: block;\n  min-height: 30px;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS9ib3JkZXIvYm9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseUJBQXdCLEVBQUE7O0FBTnBDO0VBV1EsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFacEI7RUFlUSxxQkFBb0I7RUFDcEIsZUFBZSxFQUFBOztBQWhCdkI7SUFrQlksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBb0I7SUFDcEIsZUFBZSxFQUFBOztBQXJCM0I7RUF5QlEsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL3N0eWxlL2JvcmRlci9ib3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8geyBcbiAgICAuc3R5bGUtYmctY29sb3Ige1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJkLXN0eWxlLml0ZW0gc3BhbiB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgfVxuICAgIC5pdGVtIHtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIG1pbi13aWR0aDogMjNweDtcbiAgICAgICAgLmJnLWNvbCB7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ib3JkZXJzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/border/border.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/border/border.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: BorderComponent */

  /***/
  function srcAppEditorCompsCompSettingsStyleBorderBorderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorderComponent", function () {
      return BorderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var BorderComponent = /*#__PURE__*/function (_comp_basic_style_bas2) {
      _inherits(BorderComponent, _comp_basic_style_bas2);

      var _super13 = _createSuper(BorderComponent);

      function BorderComponent() {
        _classCallCheck(this, BorderComponent);

        return _super13.call(this);
      }

      _createClass(BorderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
          this.borderCol = ['#ffffff', '#e6e6e6', '#cdcdcd', '#707070', '#2c2c2c', '#d81e06', '#f4ea2a', '#1afa29', '#1296db', '#13227a'];
          this.borderStyles = [{
            name: '无',
            value: ''
          }, {
            name: '直线',
            value: 'solid'
          }, {
            name: '点线',
            value: 'dotted'
          }, {
            name: '虚线',
            value: 'dashed'
          }];
        }
      }, {
        key: "selBorderCol",
        value: function selBorderCol(col, colIndex) {
          this.style['borderColor'] = col;
          this.style['borderWidth'] = colIndex === 0 ? 0 : 1;
          this.style['borderStyle'] = colIndex === 0 ? null : 'solid';
        }
      }]);

      return BorderComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    BorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-border',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./border.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/border/border.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./border.component.scss */
      "./src/app/editor/comps/comp-settings/style/border/border.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BorderComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/color/color.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/color/color.component.scss ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStyleColorColorComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL3N0eWxlL2NvbG9yL2NvbG9yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/color/color.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/color/color.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ColorComponent */

  /***/
  function srcAppEditorCompsCompSettingsStyleColorColorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorComponent", function () {
      return ColorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var ColorComponent = /*#__PURE__*/function (_comp_basic_style_bas3) {
      _inherits(ColorComponent, _comp_basic_style_bas3);

      var _super14 = _createSuper(ColorComponent);

      function ColorComponent() {
        _classCallCheck(this, ColorComponent);

        return _super14.call(this);
      }

      _createClass(ColorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ColorComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    ColorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-color',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./color.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/color/color.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./color.component.scss */
      "./src/app/editor/comps/comp-settings/style/color/color.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ColorComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/comp-style.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/comp-style.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CompStyleModule */

  /***/
  function srcAppEditorCompsCompSettingsStyleCompStyleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompStyleModule", function () {
      return CompStyleModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _color_color_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./color/color.component */
    "./src/app/editor/comps/comp-settings/style/color/color.component.ts");
    /* harmony import */


    var _size_size_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./size/size.component */
    "./src/app/editor/comps/comp-settings/style/size/size.component.ts");
    /* harmony import */


    var _background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./background/background.component */
    "./src/app/editor/comps/comp-settings/style/background/background.component.ts");
    /* harmony import */


    var _position_position_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./position/position.component */
    "./src/app/editor/comps/comp-settings/style/position/position.component.ts");
    /* harmony import */


    var _border_border_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./border/border.component */
    "./src/app/editor/comps/comp-settings/style/border/border.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _z_index_z_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./z-index/z-index.component */
    "./src/app/editor/comps/comp-settings/style/z-index/z-index.component.ts");
    /* harmony import */


    var _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./fonts/fonts.component */
    "./src/app/editor/comps/comp-settings/style/fonts/fonts.component.ts");
    /* harmony import */


    var _opacity_opacity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./opacity/opacity.component */
    "./src/app/editor/comps/comp-settings/style/opacity/opacity.component.ts");
    /* harmony import */


    var _core_code_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../core/code.module */
    "./src/app/core/code.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _padding_padding_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./padding/padding.component */
    "./src/app/editor/comps/comp-settings/style/padding/padding.component.ts");
    /* harmony import */


    var _style_copy_style_copy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./style-copy/style-copy.component */
    "./src/app/editor/comps/comp-settings/style/style-copy/style-copy.component.ts");
    /* harmony import */


    var _page_size_page_size_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./page-size/page-size.component */
    "./src/app/editor/comps/comp-settings/style/page-size/page-size.component.ts");
    /* harmony import */


    var _user_drag_user_drag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user-drag/user-drag.component */
    "./src/app/editor/comps/comp-settings/style/user-drag/user-drag.component.ts");

    var settingComp = [_color_color_component__WEBPACK_IMPORTED_MODULE_1__["ColorComponent"], _size_size_component__WEBPACK_IMPORTED_MODULE_2__["SizeComponent"], _background_background_component__WEBPACK_IMPORTED_MODULE_3__["BackgroundComponent"], _position_position_component__WEBPACK_IMPORTED_MODULE_4__["PositionComponent"], _padding_padding_component__WEBPACK_IMPORTED_MODULE_13__["PaddingComponent"], _border_border_component__WEBPACK_IMPORTED_MODULE_5__["BorderComponent"], _z_index_z_index_component__WEBPACK_IMPORTED_MODULE_7__["ZIndexComponent"], _opacity_opacity_component__WEBPACK_IMPORTED_MODULE_9__["OpacityComponent"], _fonts_fonts_component__WEBPACK_IMPORTED_MODULE_8__["FontsComponent"], _style_copy_style_copy_component__WEBPACK_IMPORTED_MODULE_14__["StyleCopyComponent"], _page_size_page_size_component__WEBPACK_IMPORTED_MODULE_15__["PageSizeComponent"], _user_drag_user_drag_component__WEBPACK_IMPORTED_MODULE_16__["UserDragComponent"]];

    var CompStyleModule = function CompStyleModule() {
      _classCallCheck(this, CompStyleModule);
    };

    CompStyleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      declarations: [[].concat(settingComp)],
      imports: [_core_code_module__WEBPACK_IMPORTED_MODULE_10__["CodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"]],
      exports: [[].concat(settingComp)],
      providers: [],
      bootstrap: [],
      entryComponents: [[].concat(settingComp)],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CompStyleModule);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/fonts/fonts.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/fonts/fonts.component.scss ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStyleFontsFontsComponentScss(module, exports) {
    module.exports = ":host /deep/ .val-grid {\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: grid;\n  grid-template-columns: auto auto 33.3%;\n  grid-column-gap: 4px; }\n  :host /deep/ .val-grid .item {\n    cursor: pointer;\n    border: 1px solid #cdcdcd;\n    padding: 3px 4px;\n    text-align: center; }\n  :host /deep/ .val-grid .item.sel, :host /deep/ .val-grid .item:hover {\n      color: #fff;\n      background: deepskyblue;\n      border-color: deepskyblue; }\n  :host /deep/ .set-val label {\n  display: inline-block;\n  width: 54px;\n  left: 12px; }\n  :host /deep/ .set-val input.val {\n  width: 77px;\n  margin-left: 31px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS9mb250cy9mb250cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG9CQUFvQixFQUFBO0VBUjVCO0lBVVksZUFBZTtJQUNmLHlCQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFiOUI7TUFnQmdCLFdBQVU7TUFDVix1QkFBdUI7TUFDdkIseUJBQXdCLEVBQUE7RUFsQnhDO0VBd0JZLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsVUFBVSxFQUFBO0VBMUJ0QjtFQTZCWSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS9mb250cy9mb250cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QgL2RlZXAvIHtcbiAgICAudmFsLWdyaWQge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byAzMy4zJTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA0cHg7XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDIwNSwgMjA1LCAyMDUpO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgJi5zZWwgLCAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGVlcHNreWJsdWU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOmRlZXBza3libHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zZXQtdmFsIHtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDU0cHg7XG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnZhbCB7XG4gICAgICAgICAgICB3aWR0aDogNzdweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/fonts/fonts.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/fonts/fonts.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FontsComponent */

  /***/
  function srcAppEditorCompsCompSettingsStyleFontsFontsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontsComponent", function () {
      return FontsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var FontsComponent = /*#__PURE__*/function (_comp_basic_style_bas4) {
      _inherits(FontsComponent, _comp_basic_style_bas4);

      var _super15 = _createSuper(FontsComponent);

      function FontsComponent() {
        _classCallCheck(this, FontsComponent);

        return _super15.call(this);
      }

      _createClass(FontsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
          this.fontAlign = [{
            name: "左",
            value: 'left'
          }, {
            name: '中',
            value: 'center'
          }, {
            name: '右',
            value: 'right'
          }];
        }
      }, {
        key: "changeStyle",
        value: function changeStyle(param, val) {
          this.style[param] = val;
        }
      }]);

      return FontsComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    FontsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fonts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fonts.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/fonts/fonts.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fonts.component.scss */
      "./src/app/editor/comps/comp-settings/style/fonts/fonts.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FontsComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/opacity/opacity.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/opacity/opacity.component.scss ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStyleOpacityOpacityComponentScss(module, exports) {
    module.exports = ":host /deep/ .val-grid-2 {\n  height: 26px;\n  line-height: 26px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS9vcGFjaXR5L29wYWNpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFZO0VBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS9vcGFjaXR5L29wYWNpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8ge1xuICAgIC52YWwtZ3JpZC0yIHtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/opacity/opacity.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/opacity/opacity.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: OpacityComponent */

  /***/
  function srcAppEditorCompsCompSettingsStyleOpacityOpacityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpacityComponent", function () {
      return OpacityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var OpacityComponent = /*#__PURE__*/function (_comp_basic_style_bas5) {
      _inherits(OpacityComponent, _comp_basic_style_bas5);

      var _super16 = _createSuper(OpacityComponent);

      function OpacityComponent() {
        _classCallCheck(this, OpacityComponent);

        return _super16.call(this);
      }

      _createClass(OpacityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
        }
      }]);

      return OpacityComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    OpacityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-opacity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./opacity.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/opacity/opacity.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./opacity.component.scss */
      "./src/app/editor/comps/comp-settings/style/opacity/opacity.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OpacityComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/padding/padding.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/padding/padding.component.scss ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStylePaddingPaddingComponentScss(module, exports) {
    module.exports = ":host .set-val label {\n  display: inline-block;\n  width: 64px; }\n\n:host .set-val input {\n  left: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS9wYWRkaW5nL3BhZGRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUp2QjtFQU9ZLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL3N0eWxlL3BhZGRpbmcvcGFkZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuc2V0LXZhbCB7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGxlZnQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/padding/padding.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/padding/padding.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PaddingComponent */

  /***/
  function srcAppEditorCompsCompSettingsStylePaddingPaddingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaddingComponent", function () {
      return PaddingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var PaddingComponent = /*#__PURE__*/function (_comp_basic_style_bas6) {
      _inherits(PaddingComponent, _comp_basic_style_bas6);

      var _super17 = _createSuper(PaddingComponent);

      function PaddingComponent() {
        _classCallCheck(this, PaddingComponent);

        return _super17.call(this);
      }

      _createClass(PaddingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaddingComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    PaddingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-padding',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./padding.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/padding/padding.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./padding.component.scss */
      "./src/app/editor/comps/comp-settings/style/padding/padding.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PaddingComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/page-size/page-size.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/page-size/page-size.component.scss ***!
    \*************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStylePageSizePageSizeComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL3N0eWxlL3BhZ2Utc2l6ZS9wYWdlLXNpemUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/page-size/page-size.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/page-size/page-size.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PageSizeComponent */

  /***/
  function srcAppEditorCompsCompSettingsStylePageSizePageSizeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageSizeComponent", function () {
      return PageSizeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var PageSizeComponent = /*#__PURE__*/function (_comp_basic_style_bas7) {
      _inherits(PageSizeComponent, _comp_basic_style_bas7);

      var _super18 = _createSuper(PageSizeComponent);

      function PageSizeComponent() {
        _classCallCheck(this, PageSizeComponent);

        return _super18.call(this);
      }

      _createClass(PageSizeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageSizeComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    PageSizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-size',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-size.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/page-size/page-size.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-size.component.scss */
      "./src/app/editor/comps/comp-settings/style/page-size/page-size.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PageSizeComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/position/position.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/position/position.component.scss ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStylePositionPositionComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL3N0eWxlL3Bvc2l0aW9uL3Bvc2l0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/position/position.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/position/position.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: PositionComponent */

  /***/
  function srcAppEditorCompsCompSettingsStylePositionPositionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PositionComponent", function () {
      return PositionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var PositionComponent = /*#__PURE__*/function (_comp_basic_style_bas8) {
      _inherits(PositionComponent, _comp_basic_style_bas8);

      var _super19 = _createSuper(PositionComponent);

      function PositionComponent() {
        _classCallCheck(this, PositionComponent);

        return _super19.call(this);
      }

      _createClass(PositionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PositionComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-position',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./position.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/position/position.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./position.component.scss */
      "./src/app/editor/comps/comp-settings/style/position/position.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PositionComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/size/size.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/size/size.component.scss ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStyleSizeSizeComponentScss(module, exports) {
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL3N0eWxlL3NpemUvc2l6ZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/size/size.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/size/size.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SizeComponent */

  /***/
  function srcAppEditorCompsCompSettingsStyleSizeSizeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SizeComponent", function () {
      return SizeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var SizeComponent = /*#__PURE__*/function (_comp_basic_style_bas9) {
      _inherits(SizeComponent, _comp_basic_style_bas9);

      var _super20 = _createSuper(SizeComponent);

      function SizeComponent() {
        _classCallCheck(this, SizeComponent);

        return _super20.call(this);
      }

      _createClass(SizeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SizeComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    SizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-size',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./size.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/size/size.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./size.component.scss */
      "./src/app/editor/comps/comp-settings/style/size/size.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SizeComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/style-copy/style-copy.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/style-copy/style-copy.component.scss ***!
    \***************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStyleStyleCopyStyleCopyComponentScss(module, exports) {
    module.exports = ":host /deep/ code {\n  background: #eee;\n  display: block;\n  height: 300px;\n  overflow-y: auto;\n  text-align: left;\n  padding: 10px 6px;\n  word-break: break-all; }\n\n:host /deep/ .in-block {\n  display: block;\n  height: 18px;\n  line-height: 18px;\n  padding: 0;\n  margin-bottom: 2px; }\n\n:host /deep/ .set-val {\n  margin: 0px;\n  padding: 0; }\n\n:host /deep/ .set-val .style-code {\n    position: absolute;\n    bottom: 29px;\n    width: 160px;\n    margin: 3px; }\n\n:host /deep/ .item-set-grid .title .icon {\n  opacity: 0.4; }\n\n:host /deep/ .item-set-grid .title .icon img.code {\n    width: 16px; }\n\n:host /deep/ .copy {\n  width: 40px;\n  height: 18px;\n  position: absolute;\n  bottom: 10px;\n  right: 15px;\n  border: 1px solid #ccc;\n  text-align: center;\n  line-height: 18px;\n  color: #ccc; }\n\n:host /deep/ .copy:hover {\n    border: 1px solid #999999;\n    color: #999999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS9zdHlsZS1jb3B5L3N0eWxlLWNvcHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFSN0I7RUFXUSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBZjFCO0VBa0JRLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBbkJsQjtJQXFCWSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBeEJ2QjtFQTRCUSxZQUFZLEVBQUE7O0FBNUJwQjtJQThCWSxXQUFXLEVBQUE7O0FBOUJ2QjtFQW1DUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUEzQ25CO0lBNkNZLHlCQUF5QjtJQUN6QixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS9zdHlsZS1jb3B5L3N0eWxlLWNvcHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8ge1xuICAgIGNvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMTBweCA2cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG4gICAgLmluLWJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB9XG4gICAgLnNldC12YWwge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLnN0eWxlLWNvZGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAyOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLml0ZW0tc2V0LWdyaWQgLnRpdGxlIC5pY29uIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICBpbWcuY29kZSB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIC5jb3B5IHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XG5cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/style-copy/style-copy.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/style-copy/style-copy.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: StyleCopyComponent */

  /***/
  function srcAppEditorCompsCompSettingsStyleStyleCopyStyleCopyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleCopyComponent", function () {
      return StyleCopyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");
    /* harmony import */


    var _core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../core/provider/toaster/toastr.service */
    "./src/app/core/provider/toaster/toastr.service.ts");

    var StyleCopyComponent = /*#__PURE__*/function (_comp_basic_style_bas10) {
      _inherits(StyleCopyComponent, _comp_basic_style_bas10);

      var _super21 = _createSuper(StyleCopyComponent);

      function StyleCopyComponent(toastr) {
        var _this10;

        _classCallCheck(this, StyleCopyComponent);

        _this10 = _super21.call(this);
        _this10.toastr = toastr;
        return _this10;
      }

      _createClass(StyleCopyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
          this.showMoreBool = false;
          this.initDate();
        }
      }, {
        key: "initDate",
        value: function initDate() {
          this.compStyle = '';
          this.styleArr = [];
          this.styleObj = this.getStringObj();
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.initDate();
        }
      }, {
        key: "getStringObj",
        value: function getStringObj() {
          var _obj = {};
          var _res = '';

          for (var key in this.style) {
            _obj = this.getParamVal(key, _obj);
          }

          for (var _key2 in _obj) {
            _res += "".concat(_key2, ":").concat(_obj[_key2], ";").concat(this.WARP_CODE);
          }

          return _res;
        }
      }, {
        key: "getParamVal",
        value: function getParamVal(key, _obj) {
          var val = this.style[key];
          var _val = val;

          if (['height', 'width', 'top', 'left'].indexOf(key) > -1) {
            var _val2 = val + 'px';

            _obj[key] = _val2;
            this.styleArr.push("".concat(key, ":").concat(_val2));
          } else {
            switch (key) {
              case 'paddingTopBottom':
                _val = val + 'px';
                _obj['padding-top'] = _val;
                _obj['padding-bottom'] = _val;
                this.styleArr.push("padding-top:".concat(_val));
                this.styleArr.push("padding-bottom:".concat(_val));
                break;

              case 'paddingLeftRight':
                _val = val + 'px';
                _obj['padding-right'] = _val;
                _obj['padding-left'] = _val;
                this.styleArr.push("padding-right:".concat(_val));
                this.styleArr.push("padding-left:".concat(_val));
                break;

              case 'textAlign':
                _obj['text-align'] = val;
                this.styleArr.push("text-align:".concat(val));
                break;

              case 'borderColor':
                _obj['border-color'] = val;
                this.styleArr.push("border-color:".concat(val));
                break;

              case 'borderStyle':
                _obj['border-style'] = val;
                this.styleArr.push("border-style:".concat(val));
                break;

              case 'borderWidth':
                _val = val + 'px';
                _obj['border-width'] = _val;
                this.styleArr.push("border-width:".concat(_val));
                break;

              case 'zIndex':
                _obj['z-index'] = _val;
                this.styleArr.push("z-index:".concat(_val));
                break;
            }
          }

          return _obj;
        }
      }, {
        key: "copyStyle",
        value: function copyStyle() {
          var el = document.createElement('textarea');
          el.value = this.styleObj;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
          this.showCopySuccess();
        }
      }, {
        key: "showCopySuccess",
        value: function showCopySuccess() {
          this.toastr.showToaster({
            state: this.toastr.STATE.SUCCESS,
            info: "拷贝成功"
          });
        }
      }]);

      return StyleCopyComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    StyleCopyComponent.ctorParameters = function () {
      return [{
        type: _core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_3__["TempoToastrService"]
      }];
    };

    StyleCopyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-style-copy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./style-copy.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/style-copy/style-copy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./style-copy.component.scss */
      "./src/app/editor/comps/comp-settings/style/style-copy/style-copy.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_3__["TempoToastrService"]])], StyleCopyComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/user-drag/user-drag.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/user-drag/user-drag.component.scss ***!
    \*************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStyleUserDragUserDragComponentScss(module, exports) {
    module.exports = ":host .set-val label {\n  width: 50px;\n  margin-left: 18px; }\n\n:host input.val {\n  width: 20px;\n  float: left;\n  z-index: 1;\n  margin-left: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS91c2VyLWRyYWcvdXNlci1kcmFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUh6QjtFQU1RLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2NvbXBzL2NvbXAtc2V0dGluZ3Mvc3R5bGUvdXNlci1kcmFnL3VzZXItZHJhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuc2V0LXZhbCBsYWJlbCB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICB9XG4gICAgaW5wdXQudmFsIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/user-drag/user-drag.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/user-drag/user-drag.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: UserDragComponent */

  /***/
  function srcAppEditorCompsCompSettingsStyleUserDragUserDragComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDragComponent", function () {
      return UserDragComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var UserDragComponent = /*#__PURE__*/function (_comp_basic_style_bas11) {
      _inherits(UserDragComponent, _comp_basic_style_bas11);

      var _super22 = _createSuper(UserDragComponent);

      function UserDragComponent() {
        _classCallCheck(this, UserDragComponent);

        return _super22.call(this);
      }

      _createClass(UserDragComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeVal",
        value: function changeVal(val) {
          this.style['userDrag'] = val || 'element';
        }
      }]);

      return UserDragComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    UserDragComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-drag',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-drag.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/user-drag/user-drag.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-drag.component.scss */
      "./src/app/editor/comps/comp-settings/style/user-drag/user-drag.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UserDragComponent);
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/z-index/z-index.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/z-index/z-index.component.scss ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorCompsCompSettingsStyleZIndexZIndexComponentScss(module, exports) {
    module.exports = ":host /deep/ .set-val {\n  margin: 0px; }\n\n:host /deep/ .z-index {\n  display: grid;\n  grid-template-columns: 20% 20% 20% auto auto;\n  width: 92%;\n  margin-left: 4% !important;\n  margin-top: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvY29tcHMvY29tcC1zZXR0aW5ncy9zdHlsZS96LWluZGV4L3otaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxXQUFVLEVBQUE7O0FBRmxCO0VBS1EsYUFBWTtFQUNaLDRDQUE2QztFQUM3QyxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jb21wcy9jb21wLXNldHRpbmdzL3N0eWxlL3otaW5kZXgvei1pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLyB7IFxuICAgIC5zZXQtdmFsIHtcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICB9XG4gICAgLnotaW5kZXgge1xuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDIwJSAyMCUgYXV0byBhdXRvIDtcbiAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor/comps/comp-settings/style/z-index/z-index.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/editor/comps/comp-settings/style/z-index/z-index.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ZIndexComponent */

  /***/
  function srcAppEditorCompsCompSettingsStyleZIndexZIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZIndexComponent", function () {
      return ZIndexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../comp-basic/style-basic/style-basic.component */
    "./src/app/editor/comps/comp-basic/style-basic/style-basic.component.ts");

    var ZIndexComponent = /*#__PURE__*/function (_comp_basic_style_bas12) {
      _inherits(ZIndexComponent, _comp_basic_style_bas12);

      var _super23 = _createSuper(ZIndexComponent);

      function ZIndexComponent() {
        _classCallCheck(this, ZIndexComponent);

        return _super23.call(this);
      }

      _createClass(ZIndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initParentData();
          this.zIndexS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        }
      }, {
        key: "setStyle",
        value: function setStyle(param, val) {
          this.style[param] = val;
        }
      }]);

      return ZIndexComponent;
    }(_comp_basic_style_basic_style_basic_component__WEBPACK_IMPORTED_MODULE_2__["StyleBasicComponent"]);

    ZIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-z-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./z-index.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/comps/comp-settings/style/z-index/z-index.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./z-index.component.scss */
      "./src/app/editor/comps/comp-settings/style/z-index/z-index.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ZIndexComponent);
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-configuration/comp-configuration.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/editor/develop/comp-configuration/comp-configuration.component.scss ***!
    \*************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorDevelopCompConfigurationCompConfigurationComponentScss(module, exports) {
    module.exports = ":host /deep/ .comp-config {\n  border-right: 4px solid #ffffff;\n  margin-right: 1px; }\n\n:host /deep/ .marage-btn {\n  position: relative;\n  display: block; }\n\n:host /deep/ .marage-btn .tabs {\n    font-size: 14px;\n    display: block;\n    text-align: center; }\n\n:host /deep/ .marage-btn .tabs .tab {\n      display: inline-block;\n      cursor: pointer;\n      border-right: 1px solid #eeeeee;\n      border-bottom: 1px solid #cccccc;\n      width: 69px;\n      height: 30px;\n      line-height: 30px; }\n\n:host /deep/ .marage-btn .tabs .tab.add {\n        width: 28px;\n        border-right: none; }\n\n:host /deep/ .marage-btn .tabs .tab.active {\n        width: 69px;\n        font-size: 14px; }\n\n:host /deep/ .marage-btn .tabs .tab.active, :host /deep/ .marage-btn .tabs .tab:hover {\n        color: red;\n        border-bottom-color: red; }\n\n:host /deep/ .pages {\n  min-height: 250px;\n  padding: 5px; }\n\n:host /deep/ .right-border {\n  right: -1px; }\n\n:host /deep/ .right-border .set-btn {\n    cursor: pointer;\n    position: absolute;\n    top: 385px;\n    width: 6px;\n    height: 30px;\n    background: rgba(255, 0, 0, 0.5);\n    left: 2px; }\n\n:host /deep/ .right-border .set-btn:hover {\n      background: rgba(255, 0, 0, 0.8); }\n\n:host /deep/ .right-border .set-btn img {\n      width: 6px;\n      height: 30px; }\n\n:host /deep/ .right-border .set-btn img:hover {\n        width: 7px; }\n\n:host /deep/ .div-border {\n  position: absolute;\n  width: 4px;\n  height: 819px;\n  background: #eeeeee;\n  border: 1px solid #eeeeee;\n  top: 0px; }\n\n@-webkit-keyframes trans-lett {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(90deg); } }\n\n@keyframes trans-lett {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(90deg); } }\n\n@-webkit-keyframes trans-more {\n  0% {\n    transform: rotate(90deg); }\n  100% {\n    transform: rotate(0deg); } }\n\n@keyframes trans-more {\n  0% {\n    transform: rotate(90deg); }\n  100% {\n    transform: rotate(0deg); } }\n\n:host /deep/ .item-discription {\n  height: 30px;\n  line-height: 30px;\n  border-left: 4px solid #1296db;\n  background: rgba(18, 150, 219, 0.05); }\n\n:host /deep/ .item-discription .title {\n    padding-left: 20px;\n    font-size: 13px; }\n\n:host /deep/ .comp-tit {\n  cursor: pointer;\n  position: relative;\n  height: 24px;\n  line-height: 24px;\n  background: #f2f2f2; }\n\n:host /deep/ .comp-tit .icon {\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    right: 20px;\n    top: 5px; }\n\n:host /deep/ .comp-tit .icon.icon-showmore {\n      -webkit-animation: trans-more 0.3s ease-in-out 0s;\n              animation: trans-more 0.3s ease-in-out 0s; }\n\n:host /deep/ .comp-tit .icon.icon-showlitter {\n      -webkit-animation: trans-lett 0.3s ease-in-out 0s;\n              animation: trans-lett 0.3s ease-in-out 0s;\n      transform: rotate(90deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9jb21wLWNvbmZpZ3VyYXRpb24vY29tcC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsK0JBQStCO0VBQy9CLGlCQUFpQixFQUFBOztBQUh6QjtFQU1RLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBUHRCO0lBU1ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTs7QUFYOUI7TUFhZ0IscUJBQXFCO01BQ3JCLGVBQWU7TUFDZiwrQkFBK0I7TUFDL0IsZ0NBQWdDO01BQ2hDLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCLEVBQUE7O0FBbkJqQztRQXFCb0IsV0FBVztRQUNYLGtCQUFrQixFQUFBOztBQXRCdEM7UUF5Qm9CLFdBQVc7UUFDWCxlQUFlLEVBQUE7O0FBMUJuQztRQThCb0IsVUFBVTtRQUNWLHdCQUFzQyxFQUFBOztBQS9CMUQ7RUFxQ1EsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUF0Q3BCO0VBeUNRLFdBQVcsRUFBQTs7QUF6Q25CO0lBMkNZLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0NBQThCO0lBQzlCLFNBQVMsRUFBQTs7QUFqRHJCO01BbURnQixnQ0FBNkIsRUFBQTs7QUFuRDdDO01Bc0RnQixVQUFVO01BQ1YsWUFBWSxFQUFBOztBQXZENUI7UUF5RG9CLFVBQVUsRUFBQTs7QUF6RDlCO0VBK0RRLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBd0I7RUFDeEIsUUFBUSxFQUFBOztBQUVaO0VBRUk7SUFDSSx1QkFBc0IsRUFBQTtFQUUxQjtJQUNJLHdCQUF1QixFQUFBLEVBQUE7O0FBTi9CO0VBRUk7SUFDSSx1QkFBc0IsRUFBQTtFQUUxQjtJQUNJLHdCQUF1QixFQUFBLEVBQUE7O0FBRy9CO0VBRUk7SUFDSSx3QkFBdUIsRUFBQTtFQUUzQjtJQUNJLHVCQUFzQixFQUFBLEVBQUE7O0FBTjlCO0VBRUk7SUFDSSx3QkFBdUIsRUFBQTtFQUUzQjtJQUNJLHVCQUFzQixFQUFBLEVBQUE7O0FBckZsQztFQTBGUSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDhCQUF3QztFQUN4QyxvQ0FBbUMsRUFBQTs7QUE3RjNDO0lBK0ZZLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBaEczQjtFQW9HUSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBeEczQjtJQTBHWSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUSxFQUFBOztBQTlHcEI7TUFnSGdCLGlEQUF5QztjQUF6Qyx5Q0FBeUMsRUFBQTs7QUFoSHpEO01BbUhnQixpREFBeUM7Y0FBekMseUNBQXlDO01BQ3pDLHdCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2RldmVsb3AvY29tcC1jb25maWd1cmF0aW9uL2NvbXAtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QgL2RlZXAvIHtcbiAgICAuY29tcC1jb25maWcge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgICB9XG4gICAgLm1hcmFnZS1idG4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAudGFicyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC50YWIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbiAgICAgICAgICAgICAgICB3aWR0aDogNjlweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgJi5hZGQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2OXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuYWN0aXZlLCY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiYSgyNTUsIDAsIDAsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFnZXMge1xuICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgICAucmlnaHQtYm9yZGVyIHtcbiAgICAgICAgcmlnaHQ6IC0xcHg7XG4gICAgICAgIC5zZXQtYnRuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzg1cHg7XG4gICAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMCwwLCAwLjUpO1xuICAgICAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwwLDAsIDAuOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGl2LWJvcmRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgaGVpZ2h0OiA4MTlweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgQGtleWZyYW1lcyB0cmFucy1sZXR0XG4gICAge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyB0cmFucy1tb3JlXG4gICAge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1kaXNjcmlwdGlvbiB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiKDE4LCAxNTAsIDIxOSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE1MCwgMjE5LDAuMDUpO1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb21wLXRpdCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAmLmljb24tc2hvd21vcmUge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnMtbW9yZSAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5pY29uLXNob3dsaXR0ZXIge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnMtbGV0dCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-configuration/comp-configuration.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/editor/develop/comp-configuration/comp-configuration.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CompConfigurationComponent */

  /***/
  function srcAppEditorDevelopCompConfigurationCompConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompConfigurationComponent", function () {
      return CompConfigurationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_providers_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/app.service */
    "./src/app/providers/app.service.ts");
    /* harmony import */


    var _provider_comp_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../provider/comp-list.service */
    "./src/app/editor/provider/comp-list.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _core_provider_baseHttp_base_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/provider/baseHttp/base-http.service */
    "./src/app/core/provider/baseHttp/base-http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _provider_comp_storage_local_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../provider/comp-storage-local.service */
    "./src/app/editor/provider/comp-storage-local.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _pages_workspace_page_page_add_page_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../pages/workspace/page/page-add/page-add.component */
    "./src/app/pages/workspace/page/page-add/page-add.component.ts");
    /* harmony import */


    var _core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../core/provider/toaster/toastr.service */
    "./src/app/core/provider/toaster/toastr.service.ts");
    /* harmony import */


    var src_app_core_provider_toaster_sweetalert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/core/provider/toaster/sweetalert.service */
    "./src/app/core/provider/toaster/sweetalert.service.ts");
    /* harmony import */


    var _pages_workspace_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../pages/workspace/page/page-edit/page-edit.component */
    "./src/app/pages/workspace/page/page-edit/page-edit.component.ts");
    /* harmony import */


    var src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/core/provider/indexDB/indexDB.service */
    "./src/app/core/provider/indexDB/indexDB.service.ts");
    /* harmony import */


    var src_app_core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/core/emitSub/emit-sub.service */
    "./src/app/core/emitSub/emit-sub.service.ts");

    var CompConfigurationComponent = /*#__PURE__*/function (_core_provider_baseHt) {
      _inherits(CompConfigurationComponent, _core_provider_baseHt);

      var _super24 = _createSuper(CompConfigurationComponent);

      function CompConfigurationComponent(http, service, activatedRoute, compListService, localService, modalService, toaster, sweet, indexDBService, emitSerice) {
        var _this11;

        _classCallCheck(this, CompConfigurationComponent);

        _this11 = _super24.call(this, http, 'page');
        _this11.http = http;
        _this11.service = service;
        _this11.activatedRoute = activatedRoute;
        _this11.compListService = compListService;
        _this11.localService = localService;
        _this11.modalService = modalService;
        _this11.toaster = toaster;
        _this11.sweet = sweet;
        _this11.indexDBService = indexDBService;
        _this11.emitSerice = emitSerice;
        _this11.compDragEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this11.selCurrentPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this11.activeCompFun = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this11.addPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this11.pagesUrl = 'pages';
        return _this11;
      }

      _createClass(CompConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getParams();
          this.initData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "getParams",
        value: function getParams() {
          var _this12 = this;

          this.activatedRoute.queryParams.subscribe(function (res) {
            _this12.projectId = res['project'];
            _this12.pageId = res['page'];
          });
        }
      }, {
        key: "initData",
        value: function initData() {
          var _this13 = this;

          this.getData();
          this.sub = this.emitSerice.getEmitEvent().subscribe(function (res) {
            if (res && res['type'] === 'update-projects') {
              _this13.getData();
            }
          });
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this14 = this;

          var query = {
            prop: 'projectId',
            val: parseInt(this.projectId)
          };
          rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].forkJoin([this.indexDBService.getDataAll(this.pagesUrl, query)]).subscribe(function (res) {
            _this14.pages = res && res[0];

            _this14.initPage();
          });
          this.showBool = true;
          this.compList = this.compListService.getCompList();
          this.selectTabs();
        }
      }, {
        key: "initPage",
        value: function initPage() {
          var page = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](this.pages, {
            id: Number(this.pageId)
          });

          if (page) {
            page['actived'] = true;
            this.seledCurrentPage(page, 'init');
          }
        }
      }, {
        key: "dragCompEnd",
        value: function dragCompEnd(event) {
          this.compDragEvent.emit(event);
        }
      }, {
        key: "showGrigFun",
        value: function showGrigFun() {
          this.pageGridSetting['showLeft'] = !this.pageGridSetting['showLeft'];
        }
      }, {
        key: "selectTabs",
        value: function selectTabs() {
          var tab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tabList';
          this.currentTab = tab;
        } //选择当前页面的组件列表

      }, {
        key: "seledCurrentPage",
        value: function seledCurrentPage(page, state) {
          if (state !== 'init') {
            this.localService.clearEditorLocalStorage();
          }

          this.selCurrentPage.emit(page);
        }
      }, {
        key: "activeComp",
        value: function activeComp(comp) {
          this.activeCompFun.emit(comp);
        }
      }, {
        key: "createPage",
        value: function createPage() {
          this.addPageComponet(); // this.addPage.emit()
        }
      }, {
        key: "addPageComponet",
        value: function addPageComponet() {
          var _this15 = this;

          var addComp = this.modalService.open(_pages_workspace_page_page_add_page_add_component__WEBPACK_IMPORTED_MODULE_11__["PageAddComponent"]);
          addComp.componentInstance.datas = {
            state: 'addPage'
          };
          addComp.result.then(function (result) {
            if (result === 'success') {
              _this15.initData();
            } else {}
          });
        }
      }, {
        key: "editorCurrentPage",
        value: function editorCurrentPage(event) {
          var _this16 = this;

          var comp = this.modalService.open(_pages_workspace_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__["PageEditComponent"]);
          comp.componentInstance.datas = {
            state: 'editorPage',
            page: event
          };
          comp.result.then(function (result) {
            if (result === 'success') {
              _this16.initData();
            } else {}
          }, function (reason) {});
        }
      }, {
        key: "delCurrentPage",
        value: function delCurrentPage(page) {
          var _this17 = this;

          var id = page['id'];

          if (id !== null) {
            this.sweet.deleteAlert().then(function (res) {
              if (res['value']) {
                rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].forkJoin([_this17.indexDBService.deleteData(_this17.pagesUrl, id)]).subscribe(function (res) {
                  _this17.initData();

                  _this17.toaster.showToaster({
                    state: _this17.toaster.STATE.SUCCESS,
                    info: '页面删除成功'
                  });
                }, function (error) {
                  _this17.toaster.showToaster({
                    state: _this17.toaster.STATE.ERROR,
                    info: '页面删除失败'
                  });
                });
              }
            });
          }
        }
      }]);

      return CompConfigurationComponent;
    }(_core_provider_baseHttp_base_http_service__WEBPACK_IMPORTED_MODULE_5__["BaseHttpService"]);

    CompConfigurationComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: src_app_providers_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _provider_comp_list_service__WEBPACK_IMPORTED_MODULE_3__["CompListService"]
      }, {
        type: _provider_comp_storage_local_service__WEBPACK_IMPORTED_MODULE_9__["CompStorageLocalService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]
      }, {
        type: _core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_12__["TempoToastrService"]
      }, {
        type: src_app_core_provider_toaster_sweetalert_service__WEBPACK_IMPORTED_MODULE_13__["SweetalertService"]
      }, {
        type: src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_15__["IndexDBService"]
      }, {
        type: src_app_core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_16__["EmitSubService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompConfigurationComponent.prototype, "pageGridSetting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompConfigurationComponent.prototype, "currnetPageComps", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompConfigurationComponent.prototype, "compDragEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompConfigurationComponent.prototype, "selCurrentPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompConfigurationComponent.prototype, "activeCompFun", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompConfigurationComponent.prototype, "addPage", void 0);
    CompConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comp-configuration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comp-configuration.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-configuration/comp-configuration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comp-configuration.component.scss */
      "./src/app/editor/develop/comp-configuration/comp-configuration.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_app_providers_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _provider_comp_list_service__WEBPACK_IMPORTED_MODULE_3__["CompListService"], _provider_comp_storage_local_service__WEBPACK_IMPORTED_MODULE_9__["CompStorageLocalService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"], _core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_12__["TempoToastrService"], src_app_core_provider_toaster_sweetalert_service__WEBPACK_IMPORTED_MODULE_13__["SweetalertService"], src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_15__["IndexDBService"], src_app_core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_16__["EmitSubService"]])], CompConfigurationComponent);
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-configuration/comp-list/comp-list.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/editor/develop/comp-configuration/comp-list/comp-list.component.scss ***!
    \**************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorDevelopCompConfigurationCompListCompListComponentScss(module, exports) {
    module.exports = ":host /deep/ .info {\n  position: absolute;\n  left: 75px;\n  top: 10px; }\n\n:host /deep/ .comp-tit {\n  cursor: pointer;\n  position: relative;\n  height: 24px;\n  line-height: 24px;\n  background: #f2f2f2;\n  color: #444444; }\n\n:host /deep/ .comp-tit .icon {\n    position: absolute;\n    width: 16px;\n    height: 15px;\n    right: 20px;\n    top: 5px; }\n\n:host /deep/ .comp-tit .tit {\n    margin-left: 8px; }\n\n:host /deep/ .lists {\n  position: relative;\n  display: grid;\n  width: 96%;\n  margin-left: 2%;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  margin-top: 2px;\n  margin-bottom: 1px; }\n\n:host /deep/ .lists .content-item {\n    cursor: pointer;\n    border: 1px solid #F5F5F5;\n    height: 60px;\n    margin-left: -1px;\n    margin-bottom: -1px;\n    text-align: center;\n    opacity: 0.8;\n    position: relative; }\n\n:host /deep/ .lists .content-item.noPage {\n      opacity: 0.5;\n      cursor: no-drop; }\n\n:host /deep/ .lists .content-item:hover {\n      background: rgba(255, 0, 0, 0.1);\n      opacity: 1; }\n\n:host /deep/ .lists .content-item img {\n      display: block;\n      width: 28px;\n      height: 30px;\n      margin-left: 13px;\n      margin-top: 4px; }\n\n:host /deep/ .lists .content-item img.vip_icon {\n        position: absolute;\n        width: 12px;\n        height: 12px;\n        right: 0px;\n        top: -3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9jb21wLWNvbmZpZ3VyYXRpb24vY29tcC1saXN0L2NvbXAtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQVlRLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQWRqQjtFQW1CUSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQTZCO0VBQzdCLGNBQWMsRUFBQTs7QUF4QnRCO0lBMEJZLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFPLEVBQUE7O0FBOUJuQjtJQWlDWSxnQkFBZ0IsRUFBQTs7QUFqQzVCO0VBdUNRLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZix3Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQTdDMUI7SUFnRFksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQixFQUFBOztBQXZEOUI7TUF5RGdCLFlBQVk7TUFDWixlQUFlLEVBQUE7O0FBMUQvQjtNQTZEZ0IsZ0NBQThCO01BQzlCLFVBQVUsRUFBQTs7QUE5RDFCO01BaUVnQixjQUFjO01BQ2QsV0FBVztNQUNYLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsZUFBZSxFQUFBOztBQXJFL0I7UUF1RW9CLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9jb21wLWNvbmZpZ3VyYXRpb24vY29tcC1saXN0L2NvbXAtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QgL2RlZXAvIHtcbiAgICAkY29sb3ItYmx1ZS0xOiAjRjZGN0ZCIDtcbiAgICAkY29sb3ItYmx1ZS0yOiAjZWFmNmZlO1xuICAgICRjb2xvci1ibHVlLTM6ICMzMzk5ZmY7XG4gICAgJGNvbG9yLWdyZXktMTogI2NjY2NjYztcbiAgICAkY29sb3ItcmVkLTE6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xuICAgICRiYWNrZ3JvdWRuLWNvbG9yMTogJGNvbG9yLWJsdWUtMjtcbiAgICAkYm9yZGVyLWNvbG9yMTogJGNvbG9yLWJsdWUtMTtcbiAgICAkYm9yZGVyLWNvbG9yMjogJGNvbG9yLWJsdWUtMjtcbiAgICAkYm9yZGVyLWNvbG9yMzogJGNvbG9yLXJlZC0xO1xuICAgICRib3JkZXItY29sb3I0OiAkY29sb3ItZ3JleS0xO1xuICAgIC5pbmZvIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA3NXB4O1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgfVxuIFxuXG4gICAgLmNvbXAtdGl0e1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjQyLCAyNDIsIDI0Mik7XG4gICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOjVweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmxpc3RzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMuMyUgMzMuMyUgMzMuMyUgO1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcblxuICAgICAgICAuY29udGVudC1pdGVtIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAmLm5vUGFnZSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwgMC4xKTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgICAgICYudmlwX2ljb24ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-configuration/comp-list/comp-list.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/editor/develop/comp-configuration/comp-list/comp-list.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CompListComponent */

  /***/
  function srcAppEditorDevelopCompConfigurationCompListCompListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompListComponent", function () {
      return CompListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CompListComponent = /*#__PURE__*/function () {
      function CompListComponent(elementRef) {
        _classCallCheck(this, CompListComponent);

        this.elementRef = elementRef;
        this.compDragEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CompListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dragCompEnd",
        value: function dragCompEnd(event, data, idVal) {
          if (!!this.currnetPageComps) {
            event['compType'] = data;
            this.compDragEvent.emit(event);
          } // TODO 拖拽优化

        }
      }]);

      return CompListComponent;
    }();

    CompListComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompListComponent.prototype, "compList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompListComponent.prototype, "currnetPageComps", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompListComponent.prototype, "compDragEvent", void 0);
    CompListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comp-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comp-list.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-configuration/comp-list/comp-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comp-list.component.scss */
      "./src/app/editor/develop/comp-configuration/comp-list/comp-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], CompListComponent);
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-configuration/comp-page-comps-list/comp-page-comps-list.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/editor/develop/comp-configuration/comp-page-comps-list/comp-page-comps-list.component.scss ***!
    \************************************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorDevelopCompConfigurationCompPageCompsListCompPageCompsListComponentScss(module, exports) {
    module.exports = ":host .comp-page-comps-list {\n  min-height: 250px;\n  padding: 5px; }\n  :host .comp-page-comps-list .comp-item {\n    position: relative;\n    cursor: pointer;\n    height: 24px;\n    line-height: 24px;\n    padding: 0 5px; }\n  :host .comp-page-comps-list .comp-item:active, :host .comp-page-comps-list .comp-item:hover, :host .comp-page-comps-list .comp-item.actived {\n      background: rgba(255, 0, 0, 0.05); }\n  :host .comp-page-comps-list .comp-item .index {\n      width: 20px;\n      display: inline-block;\n      text-align: left; }\n  :host .comp-page-comps-list .comp-item .comp-name {\n      -webkit-user-select: text;\n         -moz-user-select: text;\n          -ms-user-select: text;\n              user-select: text; }\n  :host .no-val {\n  text-align: center;\n  margin: 10px;\n  color: #aaa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9jb21wLWNvbmZpZ3VyYXRpb24vY29tcC1wYWdlLWNvbXBzLWxpc3QvY29tcC1wYWdlLWNvbXBzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0VBSHBCO0lBS1ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWMsRUFBQTtFQVQxQjtNQVdnQixpQ0FBOEIsRUFBQTtFQVg5QztNQWNnQixXQUFXO01BQ1gscUJBQXFCO01BQ3JCLGdCQUFnQixFQUFBO0VBaEJoQztNQW1CZ0IseUJBQWlCO1NBQWpCLHNCQUFpQjtVQUFqQixxQkFBaUI7Y0FBakIsaUJBQWlCLEVBQUE7RUFuQmpDO0VBeUJRLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2RldmVsb3AvY29tcC1jb25maWd1cmF0aW9uL2NvbXAtcGFnZS1jb21wcy1saXN0L2NvbXAtcGFnZS1jb21wcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5jb21wLXBhZ2UtY29tcHMtbGlzdCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIC5jb21wLWl0ZW0ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgICY6YWN0aXZlICwmOmhvdmVyLCAmLmFjdGl2ZWR7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMCwwLDAuMDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmluZGV4IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb21wLW5hbWUge1xuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICBcbiAgICB9XG4gICAgLm5vLXZhbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2FhYTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-configuration/comp-page-comps-list/comp-page-comps-list.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/editor/develop/comp-configuration/comp-page-comps-list/comp-page-comps-list.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: CompPageCompsListComponent */

  /***/
  function srcAppEditorDevelopCompConfigurationCompPageCompsListCompPageCompsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompPageCompsListComponent", function () {
      return CompPageCompsListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var loadsh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! loadsh */
    "./node_modules/loadsh/lodash.js");
    /* harmony import */


    var loadsh__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(loadsh__WEBPACK_IMPORTED_MODULE_2__);

    var CompPageCompsListComponent = /*#__PURE__*/function () {
      function CompPageCompsListComponent() {
        _classCallCheck(this, CompPageCompsListComponent);

        this.activeComp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CompPageCompsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initCompState",
        value: function initCompState(comp) {
          if (comp['active']) return;
          loadsh__WEBPACK_IMPORTED_MODULE_2__["map"](this.pageComps, function (item) {
            item['active'] = false;
          });

          if (comp) {
            comp['active'] = true;
          }
        }
      }, {
        key: "selectComp",
        value: function selectComp(comp) {
          this.initCompState(comp);
          this.activeComp.emit(comp);
        }
      }]);

      return CompPageCompsListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompPageCompsListComponent.prototype, "pageComps", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompPageCompsListComponent.prototype, "activeComp", void 0);
    CompPageCompsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comp-page-comps-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comp-page-comps-list.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-configuration/comp-page-comps-list/comp-page-comps-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comp-page-comps-list.component.scss */
      "./src/app/editor/develop/comp-configuration/comp-page-comps-list/comp-page-comps-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CompPageCompsListComponent);
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-configuration/comp-page-list/comp-page-list.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/editor/develop/comp-configuration/comp-page-list/comp-page-list.component.scss ***!
    \************************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorDevelopCompConfigurationCompPageListCompPageListComponentScss(module, exports) {
    module.exports = ":host /deep/ ul, :host /deep/ li {\n  list-style: none;\n  padding: 0px;\n  margin: 0; }\n\n:host /deep/ .pages {\n  position: relative;\n  font-weight: 400;\n  font-size: 12px; }\n\n:host /deep/ .pages .page-item {\n    position: relative;\n    height: 24px;\n    line-height: 24px;\n    cursor: pointer;\n    border: 1px solid #fff;\n    opacity: 0.8; }\n\n:host /deep/ .pages .page-item:active, :host /deep/ .pages .page-item:hover, :host /deep/ .pages .page-item.actived {\n      background: rgba(255, 0, 0, 0.05); }\n\n:host /deep/ .pages .page-item .icon {\n      padding: 3px 2px 3px 5px;\n      position: absolute;\n      width: 22px;\n      height: 22px; }\n\n:host /deep/ .pages .page-item .page-name {\n      margin-left: 26px;\n      -webkit-user-select: text;\n         -moz-user-select: text;\n          -ms-user-select: text;\n              user-select: text; }\n\n:host /deep/ .pages .page-item .iconPage {\n      width: 18px;\n      height: 18px;\n      position: absolute;\n      opacity: 0.1;\n      top: 2px;\n      z-index: 2; }\n\n:host /deep/ .pages .page-item .editorPage {\n      right: 20px;\n      opacity: 0; }\n\n:host /deep/ .pages .page-item .deletePage {\n      right: 0px;\n      opacity: 0; }\n\n:host /deep/ .pages .page-item:active .iconPage, :host /deep/ .pages .page-item:hover .iconPage {\n    opacity: 0.8; }\n\n:host /deep/ .no-val {\n  text-align: center;\n  margin: 10px;\n  color: #aaa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9jb21wLWNvbmZpZ3VyYXRpb24vY29tcC1wYWdlLWxpc3QvY29tcC1wYWdlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZ0I7RUFDaEIsWUFBVztFQUNYLFNBQVMsRUFBQTs7QUFKakI7RUFPUSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFUdkI7SUFXWSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXFCO0lBQ3JCLFlBQVksRUFBQTs7QUFoQnhCO01Ba0JnQixpQ0FBOEIsRUFBQTs7QUFsQjlDO01Bc0JnQix3QkFBd0I7TUFDeEIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBekI1QjtNQTRCZ0IsaUJBQWlCO01BQ2pCLHlCQUFpQjtTQUFqQixzQkFBaUI7VUFBakIscUJBQWlCO2NBQWpCLGlCQUFpQixFQUFBOztBQTdCakM7TUFnQ2dCLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixRQUFRO01BQ1IsVUFBVSxFQUFBOztBQXJDMUI7TUF3Q2dCLFdBQVc7TUFDWCxVQUFVLEVBQUE7O0FBekMxQjtNQTRDZ0IsVUFBVTtNQUNWLFVBQVUsRUFBQTs7QUE3QzFCO0lBa0RnQixZQUFZLEVBQUE7O0FBbEQ1QjtFQXdEUSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9kZXZlbG9wL2NvbXAtY29uZmlndXJhdGlvbi9jb21wLXBhZ2UtbGlzdC9jb21wLXBhZ2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLyB7XG4gICAgdWwsbGl7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5wYWdlcyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAucGFnZS1pdGVtIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgJjphY3RpdmUgLCY6aG92ZXIsICYuYWN0aXZlZHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC4wNSk7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNTUsMCwwLDAuMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDJweCAzcHggNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZS1uYW1lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjZweDtcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29uUGFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5lZGl0b3JQYWdlIHtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlbGV0ZVBhZ2Uge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucGFnZS1pdGVtOmFjdGl2ZSwucGFnZS1pdGVtOmhvdmVye1xuICAgICAgICAgICAgLmljb25QYWdlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubm8tdmFsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjYWFhO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-configuration/comp-page-list/comp-page-list.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/editor/develop/comp-configuration/comp-page-list/comp-page-list.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: CompPageListComp */

  /***/
  function srcAppEditorDevelopCompConfigurationCompPageListCompPageListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompPageListComp", function () {
      return CompPageListComp;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CompPageListComp = /*#__PURE__*/function () {
      function CompPageListComp(activeRoute) {
        _classCallCheck(this, CompPageListComp);

        this.activeRoute = activeRoute;
        this.selCurrentPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delCurrentPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editorCurrentPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.options = {};
      }

      _createClass(CompPageListComp, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //初始化组态选择状态

      }, {
        key: "initPageState",
        value: function initPageState(currentPage) {
          if (this.pages && Array.isArray(this.pages)) {
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](this.pages, function (page) {
              page['actived'] = false;
            });
          }
        } //选择当前可编辑页面，传递页面组件列表当父类容器渲染

      }, {
        key: "changeComponent",
        value: function changeComponent(item) {
          this.initPageState(item);
          item['actived'] = true;
          this.selCurrentPage.emit(item);
        }
      }, {
        key: "deletePage",
        value: function deletePage(page, event) {
          this.delCurrentPage.emit(page);
          event.stopPropagation();
        }
      }, {
        key: "editorPage",
        value: function editorPage(page, event) {
          this.editorCurrentPage.emit(page);
          event.stopPropagation();
        }
      }]);

      return CompPageListComp;
    }();

    CompPageListComp.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompPageListComp.prototype, "pages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompPageListComp.prototype, "selCurrentPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompPageListComp.prototype, "delCurrentPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompPageListComp.prototype, "editorCurrentPage", void 0);
    CompPageListComp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comp-page-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comp-page-list.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-configuration/comp-page-list/comp-page-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comp-page-list.component.scss */
      "./src/app/editor/develop/comp-configuration/comp-page-list/comp-page-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], CompPageListComp);
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-help/comp-help.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/editor/develop/comp-help/comp-help.component.scss ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorDevelopCompHelpCompHelpComponentScss(module, exports) {
    module.exports = ":host .help {\n  position: fixed;\n  bottom: 110px;\n  right: 10px; }\n  :host .help .title {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    position: relative; }\n  :host .help .img-help {\n    width: 28px; }\n  :host .help .body {\n    position: absolute;\n    right: -8px;\n    bottom: 20px;\n    background: #ffffff;\n    width: 171px;\n    height: 290px;\n    border-bottom: 1px solid  #eee; }\n  :host .help .body .tit {\n      background: rgba(255, 0, 0, 0.05);\n      left: 0px; }\n  :host .help .body .tit .title {\n        left: 0;\n        border-left: 5px solid rgba(255, 0, 0, 0.9);\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        height: 30px;\n        line-height: 30px;\n        padding-left: 10px;\n        font-size: 13px; }\n  :host .help .body .close {\n      cursor: pointer;\n      position: absolute;\n      right: 6px;\n      width: 16px;\n      top: 7px; }\n  :host .help .body .item-title {\n      font-size: 12px;\n      height: 26px;\n      line-height: 26px;\n      margin: 0px 5px;\n      color: #aaaaaa; }\n  :host .help .body .key-item {\n      position: relative;\n      display: grid;\n      grid-template-columns: 30% 70%;\n      height: 40px;\n      line-height: 40px;\n      color: #666666;\n      font-size: 13px; }\n  :host .help .body .key-item .name {\n        text-align: center;\n        color: #ccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9jb21wLWhlbHAvY29tcC1oZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXLEVBQUE7RUFKbkI7SUFNWSxlQUFlO0lBQ2YseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBUjlCO0lBV1ksV0FBVyxFQUFBO0VBWHZCO0lBY1ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCLEVBQUE7RUFwQjFDO01Bc0JnQixpQ0FBK0I7TUFDL0IsU0FBUyxFQUFBO0VBdkJ6QjtRQXlCb0IsT0FBTztRQUNQLDJDQUF5QztRQUN6Qyx5QkFBaUI7V0FBakIsc0JBQWlCO1lBQWpCLHFCQUFpQjtnQkFBakIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWUsRUFBQTtFQS9CbkM7TUFvQ2dCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFdBQVc7TUFDWCxRQUFRLEVBQUE7RUF4Q3hCO01BMkNnQixlQUFlO01BQ2YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0FBYSxFQUFBO0VBL0M3QjtNQW1EZ0Isa0JBQWtCO01BQ2xCLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsZUFBZSxFQUFBO0VBekQvQjtRQTJEb0Isa0JBQWtCO1FBQ2xCLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9kZXZlbG9wL2NvbXAtaGVscC9jb21wLWhlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmhlbHAge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMTEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1oZWxwIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAtOHB4O1xuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAxNzFweDtcbiAgICAgICAgICAgIGhlaWdodDogMjkwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgICNlZWU7XG4gICAgICAgICAgICAudGl0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsIDAuMDUpO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYmEoMjU1LDAsMCwgMC45KTtcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogNnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICAgIHRvcDogN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLml0ZW0tdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiNhYWFhYWE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rZXktaXRlbSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-help/comp-help.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/editor/develop/comp-help/comp-help.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CompHelpComponent */

  /***/
  function srcAppEditorDevelopCompHelpCompHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompHelpComponent", function () {
      return CompHelpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CompHelpComponent = /*#__PURE__*/function () {
      function CompHelpComponent() {
        _classCallCheck(this, CompHelpComponent);

        this.showHelp = false;
      }

      _createClass(CompHelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.data = [{
            name: "拷贝",
            keySameBool: true,
            key_same: "Control + C",
            key_mac: "Control + C",
            key_window: "Control + C"
          }, {
            name: "粘贴",
            keySameBool: true,
            key_same: "Control + V",
            key_mac: "Control + V",
            key_window: "Control + V"
          }, {
            name: "删除",
            keySameBool: true,
            key_same: "Delete",
            key_mac: "Delete",
            key_window: "Delete"
          }, {
            name: "位置",
            keySameBool: true,
            key_same: "上,下,左,右",
            key_mac: "上下左右键",
            key_window: "上下左右键"
          }];
        }
      }]);

      return CompHelpComponent;
    }();

    CompHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comp-help',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comp-help.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-help/comp-help.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comp-help.component.scss */
      "./src/app/editor/develop/comp-help/comp-help.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CompHelpComponent);
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-pre-view/comp-pre-view.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/editor/develop/comp-pre-view/comp-pre-view.component.scss ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorDevelopCompPreViewCompPreViewComponentScss(module, exports) {
    module.exports = ":host /deep/ .pre-view {\n  position: relative;\n  display: block; }\n  :host /deep/ .pre-view .view-icon {\n    position: absolute;\n    top: -50px;\n    right: 90px; }\n  :host /deep/ .pre-view .view-icon .view {\n      cursor: pointer;\n      margin-top: 13px;\n      width: 22px;\n      height: 22px; }\n  :host /deep/ .content {\n  position: absolute;\n  border: 1px solid ghostwhite;\n  left: 50%;\n  transform: translateX(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9jb21wLXByZS12aWV3L2NvbXAtcHJlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0VBSHRCO0lBS1ksa0JBQWtCO0lBQ2xCLFVBQVM7SUFDVCxXQUFXLEVBQUE7RUFQdkI7TUFTZ0IsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFBO0VBWjVCO0VBaUJRLGtCQUFrQjtFQUNsQiw0QkFBMkI7RUFDM0IsU0FBUztFQUNULDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2RldmVsb3AvY29tcC1wcmUtdmlldy9jb21wLXByZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgL2RlZXAvIHtcbiAgICAucHJlLXZpZXcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAudmlldy1pY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDotNTBweDtcbiAgICAgICAgICAgIHJpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgLnZpZXcge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBnaG9zdHdoaXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-pre-view/comp-pre-view.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/editor/develop/comp-pre-view/comp-pre-view.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CompPreViewComponent */

  /***/
  function srcAppEditorDevelopCompPreViewCompPreViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompPreViewComponent", function () {
      return CompPreViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directive/view-contain-ref-host.directive */
    "./src/app/editor/directive/view-contain-ref-host.directive.ts");
    /* harmony import */


    var src_app_core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/emitSub/emit-sub.service */
    "./src/app/core/emitSub/emit-sub.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../provider/comp-dynamic-create.service */
    "./src/app/editor/provider/comp-dynamic-create.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _provider_comp_storage_local_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../provider/comp-storage-local.service */
    "./src/app/editor/provider/comp-storage-local.service.ts");

    var CompPreViewComponent = /*#__PURE__*/function () {
      function CompPreViewComponent(localStorageService, emitSerive, elementRef, dynamicService, activatedRoute, componentFactoryResolver, route, location) {
        _classCallCheck(this, CompPreViewComponent);

        this.localStorageService = localStorageService;
        this.emitSerive = emitSerive;
        this.elementRef = elementRef;
        this.dynamicService = dynamicService;
        this.activatedRoute = activatedRoute;
        this.componentFactoryResolver = componentFactoryResolver;
        this.route = route;
        this.location = location;
      }

      _createClass(CompPreViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this18 = this;

          this.pageInfo = this.localStorageService.getPreViewPageInfo();
          var comps = this.localStorageService.getPreViceComponent();
          this.compList = JSON.parse(comps);
          var parentCompList = lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"](this.compList);
          this.eventEmitter = this.emitSerive.getEmitEvent().subscribe(function (res) {
            if (res && res['type'] === 'child-comp') {
              var data = res['data'];
              var currentList = lodash__WEBPACK_IMPORTED_MODULE_7__["concat"](parentCompList, data);

              _this18.initViewContRef();

              _this18.updateCompList(currentList);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentViewContRef) {
            this.currentViewContRef.clear();
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.currentViewContRef = this.viewContRef.viewContainerRef;
          this.updateCompList();
        }
      }, {
        key: "updateCompList",
        value: function updateCompList(list) {
          var _this19 = this;

          this.components = this.dynamicService.getCompList(list || this.compList);
          lodash__WEBPACK_IMPORTED_MODULE_7__["map"](this.components, function (comp) {
            _this19.renderComponent(comp);
          });
        }
      }, {
        key: "initViewContRef",
        value: function initViewContRef() {
          var len = this.components.length;

          for (var i = 0; i < len; i++) {
            this.currentViewContRef.clear(i);
          }
        }
      }, {
        key: "renderComponent",
        value: function renderComponent(currentComponent) {
          var _this20 = this;

          var compFactory = this.componentFactoryResolver.resolveComponentFactory(currentComponent.compType);
          var compRef = this.currentViewContRef.createComponent(compFactory);
          var compInstance = compRef.instance;
          compInstance.settingObj = currentComponent.settingObj;
          compInstance.onChildComponentChange.subscribe(function (e) {
            var type = e && e['type'];
            var eventSettingObj = e && e['dynamicData'] && e['dynamicData']['event'];

            if (eventSettingObj) {
              _this20.eventHandle(type, eventSettingObj);
            }
          });
        }
      }, {
        key: "eventHandle",
        value: function eventHandle(type, eventObj) {
          switch (type) {
            case 'click':
              if (eventObj['routeBool']) {
                console.log("单页面预览状态不支持页面跳转，可以查看页面跳转参数：", eventObj['route']);
              } else if (eventObj[type + 'Bool']) {
                console.log("点击事件处理，目前只做了路由处理");
              }

              break;

            default:
              return;
          }
        }
      }, {
        key: "routerLink",
        value: function routerLink(url, params) {
          if (url !== undefined && url !== null) {
            this.route.navigate([url], {
              queryParams: {
                pageObj: JSON.stringify(params)
              }
            });
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return CompPreViewComponent;
    }();

    CompPreViewComponent.ctorParameters = function () {
      return [{
        type: _provider_comp_storage_local_service__WEBPACK_IMPORTED_MODULE_8__["CompStorageLocalService"]
      }, {
        type: src_app_core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_3__["EmitSubService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_5__["CompDynamicCreateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_2__["ViewContainRefHostDirective"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_2__["ViewContainRefHostDirective"])], CompPreViewComponent.prototype, "viewContRef", void 0);
    CompPreViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comp-pre-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comp-pre-view.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-pre-view/comp-pre-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comp-pre-view.component.scss */
      "./src/app/editor/develop/comp-pre-view/comp-pre-view.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_comp_storage_local_service__WEBPACK_IMPORTED_MODULE_8__["CompStorageLocalService"], src_app_core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_3__["EmitSubService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_5__["CompDynamicCreateService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])], CompPreViewComponent);
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-setting/comp-setting.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/editor/develop/comp-setting/comp-setting.component.scss ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorDevelopCompSettingCompSettingComponentScss(module, exports) {
    module.exports = ":host /deep/ .comp-item {\n  position: relative;\n  border-left: 4px solid #ffffff;\n  margin-left: 1px; }\n\n:host /deep/ .user-select-node {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n:host /deep/ .page-config {\n  position: absolute;\n  top: -50px;\n  right: 45px;\n  min-width: 500px;\n  height: 43px;\n  display: inline-block; }\n\n:host /deep/ .page-config .title {\n    display: inline-block;\n    position: relative;\n    top: 2px;\n    padding: 0px 8px;\n    font-size: 14px;\n    color: #aaa; }\n\n:host /deep/ .page-config .pre-view-background {\n    display: inline-block;\n    position: absolute;\n    right: 180px;\n    height: 44px;\n    margin-top: 12px; }\n\n:host /deep/ .page-config .pre-view-background .item-bg {\n      cursor: pointer;\n      width: 22px;\n      padding: 3px; }\n\n:host /deep/ .page-config .pre-view-button {\n    height: 40px;\n    line-height: 40px;\n    display: inline-block;\n    position: absolute;\n    right: 105px; }\n\n:host /deep/ .page-config .pre-view-button img {\n      width: 20px;\n      position: relative;\n      margin-top: 8px;\n      cursor: pointer;\n      opacity: 0.7; }\n\n:host /deep/ .page-config .pre-view-button img:hover {\n        opacity: 1; }\n\n:host /deep/ .page-config .pre-view-button img.display-pre {\n        opacity: 0.4 !important; }\n\n:host /deep/ .left-border {\n  position: absolute;\n  width: 4px;\n  height: 819px;\n  background: #eeeeee;\n  border: 1px solid #eeeeee;\n  left: -6px;\n  top: 0px; }\n\n:host /deep/ .left-border .set-btn {\n    cursor: pointer;\n    position: absolute;\n    top: 385px;\n    width: 6px;\n    height: 30px;\n    background: rgba(255, 0, 0, 0.5);\n    right: 2px; }\n\n:host /deep/ .left-border .set-btn:hover {\n      background: rgba(255, 0, 0, 0.8); }\n\n:host /deep/ .left-border .set-btn img {\n      width: 6px;\n      height: 30px; }\n\n:host /deep/ .left-border .set-btn img:hover {\n        width: 7px; }\n\n:host /deep/ .item-discription {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 30px;\n  line-height: 30px;\n  border-left: 5px solid rgba(255, 0, 0, 0.9);\n  background: rgba(255, 0, 0, 0.05); }\n\n:host /deep/ .item-discription.noComp {\n    cursor: pointer;\n    opacity: 0.4; }\n\n:host /deep/ .item-discription .title {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    padding-left: 20px;\n    font-size: 13px; }\n\n:host /deep/ .comp-tit {\n  cursor: pointer;\n  position: relative;\n  height: 24px;\n  line-height: 24px;\n  background: #f2f2f2; }\n\n:host /deep/ .comp-tit .icon {\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    right: 20px;\n    top: 5px; }\n\n:host /deep/ .comp-tit .icon.icon-showmore {\n      -webkit-animation: trans-more 0.3s ease-in-out 0s;\n              animation: trans-more 0.3s ease-in-out 0s; }\n\n:host /deep/ .comp-tit .icon.icon-showlitter {\n      -webkit-animation: trans-lett 0.3s ease-in-out 0s;\n              animation: trans-lett 0.3s ease-in-out 0s;\n      transform: rotate(90deg); }\n\n:host /deep/ .comp-tit .tit {\n    margin-left: 8px; }\n\n:host /deep/ .set-list.showlitter {\n  overflow: hidden;\n  height: 3px; }\n\n:host /deep/ .set-list.showmore {\n  height: 100%; }\n\n:host /deep/ .set-item {\n  position: relative;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n  margin-bottom: 5px; }\n\n:host /deep/ .update {\n  position: absolute;\n  right: 1px;\n  margin-top: 11px; }\n\n:host /deep/ .update .save {\n    cursor: pointer;\n    border-radius: 3px;\n    color: #ffffff;\n    background: rgba(255, 0, 0, 0.5);\n    padding: 4px 11px; }\n\n:host /deep/ .update .save:hover {\n      background: red; }\n\n:host /deep/ .set-tabs {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-gap: 2px;\n  text-align: center;\n  margin-top: 5px; }\n\n:host /deep/ .set-tabs .tab {\n    cursor: pointer;\n    padding: 2px 0px;\n    height: 25px;\n    border-bottom: 2px solid #dddddd; }\n\n:host /deep/ .set-tabs .tab:hover, :host /deep/ .set-tabs .tab.active {\n      color: rgba(255, 0, 0, 0.5);\n      border-bottom: 2px solid red; }\n\n:host /deep/ .grid-2 {\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n:host /deep/ .grid-1 {\n  display: grid;\n  grid-template-columns: 100%; }\n\n:host /deep/ .item-set-grid, :host /deep/ .setting-valus {\n  position: relative; }\n\n:host /deep/ .item-set-grid .tit, :host /deep/ .setting-valus .tit {\n    height: 24px;\n    line-height: 24px;\n    margin-left: 5px;\n    color: #aaa; }\n\n:host /deep/ .item-set-grid .title, :host /deep/ .setting-valus .title {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n:host /deep/ .item-set-grid .title .icon, :host /deep/ .setting-valus .title .icon {\n      position: absolute;\n      right: 10px;\n      position: absolute;\n      top: 3px;\n      opacity: 0.3; }\n\n:host /deep/ .item-set-grid .title .icon:hover, :host /deep/ .setting-valus .title .icon:hover {\n        opacity: 0.7; }\n\n:host /deep/ .item-set-grid .title .icon img, :host /deep/ .setting-valus .title .icon img {\n        width: 12px; }\n\n:host /deep/ .set-val {\n  position: relative;\n  text-align: center;\n  margin: 5px;\n  height: 100%; }\n\n:host /deep/ .set-val.val-grid-2 {\n    display: grid;\n    grid-template-columns: 20% 80%; }\n\n:host /deep/ .set-val label {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    background: #eee;\n    padding: 2px 5px;\n    width: 27px;\n    height: 20px;\n    line-height: 19px; }\n\n:host /deep/ .set-val input.val {\n    width: 43px;\n    padding: 2px 3px;\n    border: 1px solid #eee;\n    position: relative;\n    left: 10px;\n    height: 20px; }\n\n:host /deep/ .set-val input[type='radio'] {\n    margin: 3px 3px; }\n\n:host /deep/ .set-val ul {\n    padding: 0;\n    margin: 0;\n    margin-bottom: 5px;\n    list-style: none;\n    text-align: left; }\n\n:host /deep/ .del {\n  position: absolute;\n  top: 0px;\n  right: 10px; }\n\n:host /deep/ .del .del-btn {\n    cursor: pointer;\n    width: 30px;\n    height: 30px;\n    padding: 5px;\n    border-radius: 50%;\n    opacity: 0.5; }\n\n:host /deep/ .del .del-btn:hover {\n      opacity: 0.9; }\n\n:host /deep/ .bd-style.item span {\n  border: 1px solid rgba(230, 230, 230, 0.8);\n  height: 18px;\n  width: 18px; }\n\n:host /deep/ .scrollY {\n  cursor: pointer;\n  max-height: 700px !important;\n  overflow-y: auto; }\n\n:host /deep/ .scrollY::-webkit-scrollbar {\n    width: 5px;\n    height: 5px; }\n\n:host /deep/ .scrollY::-webkit-scrollbar-track {\n    background: #f2f2f2; }\n\n:host /deep/ .scrollY::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(255, 0, 0, 0.5);\n    background-color: rgba(255, 0, 0, 0.5); }\n\n:host /deep/ .setting-valus {\n  margin-top: 5px; }\n\n:host /deep/ .data-val .tit, :host /deep/ .setting-valus .tit, :host /deep/ .setting-events .tit {\n  height: 24px;\n  line-height: 24px;\n  margin-left: 5px;\n  color: #aaa; }\n\n:host /deep/ .data-val .val, :host /deep/ .setting-valus .val, :host /deep/ .setting-events .val {\n  height: 30px;\n  margin: 5px; }\n\n:host /deep/ .data-val .val input, :host /deep/ .data-val .val textarea, :host /deep/ .setting-valus .val input, :host /deep/ .setting-valus .val textarea, :host /deep/ .setting-events .val input, :host /deep/ .setting-events .val textarea {\n    width: 130px;\n    height: 28px;\n    line-height: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9jb21wLXNldHRpbmcvY29tcC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTs7QUFQekI7RUFVUSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQWY3QjtJQWlCWSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUF0QnZCO0lBeUJZLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUE3QjVCO01BK0JnQixlQUFlO01BQ2YsV0FBVztNQUNYLFlBQVksRUFBQTs7QUFqQzVCO0lBcUNZLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7O0FBekN4QjtNQTJDZ0IsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsZUFBZTtNQUNmLFlBQVksRUFBQTs7QUEvQzVCO1FBaURvQixVQUFVLEVBQUE7O0FBakQ5QjtRQW9Eb0IsdUJBQXVCLEVBQUE7O0FBcEQzQztFQTBEUSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXdCO0VBQ3hCLFVBQVU7RUFDVixRQUFRLEVBQUE7O0FBaEVoQjtJQWtFWSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdDQUE4QjtJQUM5QixVQUFVLEVBQUE7O0FBeEV0QjtNQTBFZ0IsZ0NBQTZCLEVBQUE7O0FBMUU3QztNQTZFZ0IsVUFBVTtNQUNWLFlBQVksRUFBQTs7QUE5RTVCO1FBZ0ZvQixVQUFVLEVBQUE7O0FBaEY5QjtFQXNGUSx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwyQ0FBeUM7RUFDekMsaUNBQStCLEVBQUE7O0FBMUZ2QztJQTRGWSxlQUFlO0lBQ2YsWUFBWSxFQUFBOztBQTdGeEI7SUFnR1kseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBbEczQjtFQXNHUSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBMUczQjtJQTRHWSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUSxFQUFBOztBQWhIcEI7TUFrSGdCLGlEQUF5QztjQUF6Qyx5Q0FBeUMsRUFBQTs7QUFsSHpEO01BcUhnQixpREFBeUM7Y0FBekMseUNBQXlDO01BQ3pDLHdCQUF1QixFQUFBOztBQXRIdkM7SUEwSFksZ0JBQWdCLEVBQUE7O0FBMUg1QjtFQWdJVyxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQWpJdEI7RUFvSVksWUFBWSxFQUFBOztBQXBJeEI7RUF3SVEsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsa0JBQWtCLEVBQUE7O0FBM0kxQjtFQThJUSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQWhKeEI7SUFrSlksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGlCQUFpQixFQUFBOztBQXRKN0I7TUF3SmdCLGVBQThCLEVBQUE7O0FBeEo5QztFQTZKUSx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxhQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFsS3ZCO0lBb0tZLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdDQUErQixFQUFBOztBQXZLM0M7TUF5S2dCLDJCQUEwQjtNQUMxQiw0QkFBMkIsRUFBQTs7QUExSzNDO0VBZ0xRLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFqTHRDO0VBb0xRLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFyTG5DO0VBd0xRLGtCQUFrQixFQUFBOztBQXhMMUI7SUEwTFksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVSxFQUFBOztBQTdMdEI7SUFnTVkseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCLEVBQUE7O0FBaE03QjtNQWtNZ0Isa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFlBQVksRUFBQTs7QUF0TTVCO1FBd01vQixZQUFZLEVBQUE7O0FBeE1oQztRQTJNb0IsV0FBVyxFQUFBOztBQTNNL0I7RUFpTlEsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQXBOcEI7SUFzTlksYUFBYTtJQUNiLDhCQUE4QixFQUFBOztBQXZOMUM7SUEyTlksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQixFQUFBOztBQWxPN0I7SUFxT1ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7O0FBMU94QjtJQTZPWSxlQUFlLEVBQUE7O0FBN08zQjtJQWdQWSxVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7O0FBcFA1QjtFQXdQUSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUExUG5CO0lBNFBZLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBOztBQWpReEI7TUFtUWdCLFlBQVksRUFBQTs7QUFuUTVCO0VBMFFZLDBDQUFxQztFQUNyQyxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQTVRdkI7RUFnUlEsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixnQkFBZSxFQUFBOztBQWxSdkI7SUFvUlksVUFBVTtJQUNWLFdBQVcsRUFBQTs7QUFyUnZCO0lBeVJZLG1CQUFtQixFQUFBOztBQXpSL0I7SUE4UlksbUJBQWtCO0lBQ2xCLHNEQUFtRDtJQUNuRCxzQ0FBbUMsRUFBQTs7QUFoUy9DO0VBb1NRLGVBQWUsRUFBQTs7QUFwU3ZCO0VBd1NZLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUEzU3ZCO0VBOFNZLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBL1N2QjtJQWlUZ0IsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9kZXZlbG9wL2NvbXAtc2V0dGluZy9jb21wLXNldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IC9kZWVwLyB7XG4gICAgLmNvbXAtaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIH1cbiAgICAudXNlci1zZWxlY3Qtbm9kZSB7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbiAgICAucGFnZS1jb25maWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTUwcHg7XG4gICAgICAgIHJpZ2h0OiA0NXB4O1xuICAgICAgICBtaW4td2lkdGg6IDUwMHB4OyBcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgfVxuICAgICAgICAucHJlLXZpZXctYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDoxODBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICAuaXRlbS1iZyB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJlLXZpZXctYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwNXB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuZGlzcGxheS1wcmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxlZnQtYm9yZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBoZWlnaHQ6IDgxOXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNlZWVlZWU7XG4gICAgICAgIGxlZnQ6IC02cHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICAuc2V0LWJ0biB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDM4NXB4O1xuICAgICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwgMC41KTtcbiAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDAsMCwgMC44KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5pdGVtLWRpc2NyaXB0aW9uIHtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiYSgyNTUsMCwwLCAwLjkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsIDAuMDUpO1xuICAgICAgICAmLm5vQ29tcCB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb21wLXRpdCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAmLmljb24tc2hvd21vcmUge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnMtbW9yZSAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5pY29uLXNob3dsaXR0ZXIge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJhbnMtbGV0dCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50aXQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgIH1cbiBcbiAgICAuc2V0LWxpc3Qge1xuICAgICAgICAmLnNob3dsaXR0ZXIgIHtcbiAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5zaG93bW9yZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNldC1pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLnVwZGF0ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICAgICAgLnNhdmUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMXB4O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zZXQtdGFicyB7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICAgICAgICBncmlkLWdhcDoycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAudGFiIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZGRkZGRkO1xuICAgICAgICAgICAgJjpob3ZlciwgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ncmlkLTIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgfVxuICAgIC5ncmlkLTEge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgfVxuICAgIC5pdGVtLXNldC1ncmlkICwgLnNldHRpbmctdmFsdXN7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnRpdCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBjb2xvcjojYWFhO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNldC12YWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgJi52YWwtZ3JpZC0yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMjdweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnZhbCB7XG4gICAgICAgICAgICB3aWR0aDogNDNweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAzcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDNweDtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRlbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAuZGVsLWJ0biB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmQtc3R5bGUuaXRlbSB7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjZTZlNmU2LCAkYWxwaGE6IDAuOCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICB3aWR0aDogMThweDsgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zY3JvbGxZIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xuICAgICAgICBvdmVyZmxvdy15OmF1dG87XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgfVxuXG4gICAgXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iICB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDZweCByZ2JhKDI1NSwwLDAsIDAuNSk7O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDAsIDAuNSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNldHRpbmctdmFsdXMge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICAgIC5kYXRhLXZhbCwgLnNldHRpbmctdmFsdXMsIC5zZXR0aW5nLWV2ZW50cyB7XG4gICAgICAgIC50aXQge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgIH1cbiAgICAgICAgLnZhbCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIGlucHV0LHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/editor/develop/comp-setting/comp-setting.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/editor/develop/comp-setting/comp-setting.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CompSettingComponent */

  /***/
  function srcAppEditorDevelopCompSettingCompSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompSettingComponent", function () {
      return CompSettingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_editor_model_setting_object_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/editor/model/setting-object.module */
    "./src/app/editor/model/setting-object.module.ts");
    /* harmony import */


    var loadsh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! loadsh */
    "./node_modules/loadsh/lodash.js");
    /* harmony import */


    var loadsh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(loadsh__WEBPACK_IMPORTED_MODULE_3__);

    var CompSettingComponent = /*#__PURE__*/function () {
      function CompSettingComponent() {
        _classCallCheck(this, CompSettingComponent);

        this.settingObjChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.preViewComp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeBackground = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateCurrentPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showBool = true;
        this.DEFAULT_PAGE = {
          width: 1600,
          height: 820,
          background: "#fff"
        };
        this.states = [{
          state: 'style',
          name: "样式",
          active: true
        }, {
          state: "data",
          name: '数据',
          active: false
        }, {
          state: "event",
          name: "事件",
          active: false
        }];
      }

      _createClass(CompSettingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initData();
        }
      }, {
        key: "initData",
        value: function initData() {
          this.stateObj = 'style';
          this.styles = this.activeSettingObj && this.activeSettingObj['style'];
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.currentPage) {
            this.pageName = this.currentPage['value'];
          }
        }
      }, {
        key: "deleteComp",
        value: function deleteComp(event) {
          this.deleteComponent.emit(event);
        }
      }, {
        key: "paramsChange",
        value: function paramsChange(key) {
          this.settingObjChange.emit(this.activeSettingObj);
        }
      }, {
        key: "showGrigFun",
        value: function showGrigFun() {
          this.pageGridSetting['showRight'] = !this.pageGridSetting['showRight'];
        }
      }, {
        key: "preView",
        value: function preView(event) {
          this.preViewComp.emit(event);
        }
      }, {
        key: "changeBg",
        value: function changeBg(event) {
          this.changeBackground.emit(event);
        }
      }, {
        key: "activeState",
        value: function activeState(tab) {
          if (!tab || tab && tab['active']) return;
          loadsh__WEBPACK_IMPORTED_MODULE_3__["map"](this.states, function (item) {
            item['active'] = false;
          });
          tab['active'] = true;
          this.stateObj = tab['state'];
        } // 页面保存

      }, {
        key: "updatePage",
        value: function updatePage() {
          this.updateCurrentPage.emit();
        }
      }]);

      return CompSettingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_editor_model_setting_object_module__WEBPACK_IMPORTED_MODULE_2__["SettingObject"])], CompSettingComponent.prototype, "activeSettingObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompSettingComponent.prototype, "pageGridSetting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompSettingComponent.prototype, "hasPageBool", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompSettingComponent.prototype, "currentPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompSettingComponent.prototype, "settingObjChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompSettingComponent.prototype, "deleteComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompSettingComponent.prototype, "preViewComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompSettingComponent.prototype, "changeBackground", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CompSettingComponent.prototype, "updateCurrentPage", void 0);
    CompSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comp-setting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comp-setting.component.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/develop/comp-setting/comp-setting.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comp-setting.component.scss */
      "./src/app/editor/develop/comp-setting/comp-setting.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CompSettingComponent);
    /***/
  },

  /***/
  "./src/app/editor/develop/development.scss":
  /*!*************************************************!*\
    !*** ./src/app/editor/develop/development.scss ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function srcAppEditorDevelopDevelopmentScss(module, exports) {
    module.exports = ":host /deep/ input, :host /deep/ textarea, :host /deep/ button, :host /deep/ video {\n  outline: none; }\n\n:host /deep/ .devBody {\n  display: grid;\n  grid-template-columns: 175px 40px auto 175px;\n  margin: 0 2px; }\n\n:host /deep/ .devBody.width-all {\n    grid-template-columns: 175px 40px auto 175px; }\n\n:host /deep/ .devBody.width-no {\n    grid-template-columns: 10px 40px auto 10px; }\n\n:host /deep/ .devBody.width-left {\n    grid-template-columns: 175px 40px auto 10px; }\n\n:host /deep/ .devBody.width-right {\n    grid-template-columns: 10px 40px auto 175px; }\n\n:host /deep/ div.settings, :host /deep/ div.content, :host /deep/ div.comp-marage, :host /deep/ div.canvas-comp {\n  position: relative;\n  display: block;\n  height: 800px;\n  width: auto;\n  height: auto; }\n\n:host /deep/ div.canvas-comp {\n  left: 10px; }\n\n:host /deep/ div.comp-marage {\n  border: 1px solid #ccc;\n  height: 820px; }\n\n:host /deep/ div.setting-but {\n  border: 1px solid #ccc; }\n\n:host /deep/ div.comp-help {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  z-index: 1000; }\n\n:host /deep/ .hasPage {\n  opacity: 0.9; }\n\n:host /deep/ .selectPagePrompt {\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n:host /deep/ .selectPagePrompt .info {\n    display: inline-block;\n    cursor: pointer;\n    position: relative;\n    background: #fff;\n    border: 1px solid rgba(255, 0, 0, 0.5);\n    width: 150px;\n    height: 30px;\n    top: 200px;\n    font-size: 16px;\n    line-height: 30px; }\n\n:host /deep/ #componentsBody {\n  position: relative;\n  margin: 20px 10px 0 10px;\n  border-right: 1px solid #cccccc;\n  border-bottom: 1px solid #cccccc;\n  width: auto;\n  height: 800px;\n  overflow: visible; }\n\n:host /deep/ #componentsBody.bg-blank {\n    border: 1px solid #ccc; }\n\n:host /deep/ #componentsBody.bg-grid {\n    background-image: linear-gradient(rgba(200, 205, 208, 0.3) 1px, transparent 0), linear-gradient(90deg, rgba(200, 205, 208, 0.3), 1px, transparent 0), linear-gradient(#C8CDD0 1px, transparent 0), linear-gradient(90deg, #C8CDD0 1px, transparent 0);\n    background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px; }\n\n:host /deep/ #componentsBody .comp-item {\n    cursor: move;\n    background: white; }\n\n:host /deep/ #componentsBody .comp-active {\n    z-index: 11 !important; }\n\n:host /deep/ #componentsBody .comp-resize {\n    cursor: e-resize; }\n\n:host /deep/ .setting-but {\n  z-index: 11;\n  background: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9kZXZlbG9wbWVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBS1EsYUFBWSxFQUFBOztBQUxwQjtFQVNRLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsYUFBWSxFQUFBOztBQVhwQjtJQWFZLDRDQUE0QyxFQUFBOztBQWJ4RDtJQWdCWSwwQ0FBMEMsRUFBQTs7QUFoQnREO0lBbUJZLDJDQUEyQyxFQUFBOztBQW5CdkQ7SUFzQlksMkNBQTJDLEVBQUE7O0FBdEJ2RDtFQTJCWSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQS9CeEI7RUFrQ1ksVUFBVSxFQUFBOztBQWxDdEI7RUFxQ1ksc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUF0Q3pCO0VBeUNZLHNCQUFzQixFQUFBOztBQXpDbEM7RUE0Q1ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsYUFBYSxFQUFBOztBQS9DekI7RUFtRFEsWUFBWSxFQUFBOztBQW5EcEI7RUF1RFEsWUFBWTtFQUNaLFdBQVc7RUFFWCxrQkFBa0IsRUFBQTs7QUExRDFCO0lBNERZLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQXJFN0I7RUE0RVEsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBbEZ6QjtJQW9GWSxzQkFBc0IsRUFBQTs7QUFwRmxDO0lBdUZZLHFQQUlrRDtJQUNsRCwrREFBK0QsRUFBQTs7QUE1RjNFO0lBK0ZZLFlBQVk7SUFDWixpQkFBK0IsRUFBQTs7QUFoRzNDO0lBb0dZLHNCQUFzQixFQUFBOztBQXBHbEM7SUF3R1ksZ0JBQWdCLEVBQUE7O0FBeEc1QjtFQTRHUSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZGV2ZWxvcC9kZXZlbG9wbWVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCAvZGVlcC8ge1xuXG4gICAgJGNvbG9yLXJlZC0xOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcbiAgICAkYm9yZGVyLWNvbG9yMzogJGNvbG9yLXJlZC0xO1xuICAgIGlucHV0LHRleHRhcmVhLGJ1dHRvbiwgdmlkZW97XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmRldkJvZHkge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3NXB4IDQwcHggYXV0byAxNzVweDtcbiAgICAgICAgbWFyZ2luOjAgMnB4O1xuICAgICAgICAmLndpZHRoLWFsbCB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3NXB4IDQwcHggYXV0byAxNzVweDtcbiAgICAgICAgfVxuICAgICAgICAmLndpZHRoLW5vIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBweCA0MHB4IGF1dG8gMTBweDtcbiAgICAgICAgfVxuICAgICAgICAmLndpZHRoLWxlZnQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNzVweCA0MHB4IGF1dG8gMTBweDtcbiAgICAgICAgfVxuICAgICAgICAmLndpZHRoLXJpZ2h0IHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBweCA0MHB4IGF1dG8gMTc1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGl2IHtcbiAgICAgICAgJi5zZXR0aW5ncywgJi5jb250ZW50LCAmLmNvbXAtbWFyYWdlICwmLmNhbnZhcy1jb21we1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgJi5jYW52YXMtY29tcCB7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICYuY29tcC1tYXJhZ2Uge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGhlaWdodDogODIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5zZXR0aW5nLWJ1dCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICB9XG4gICAgICAgICYuY29tcC1oZWxwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhhc1BhZ2Uge1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG5cbiAgICB9XG4gICAgLnNlbGVjdFBhZ2VQcm9tcHQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG5cbiAgICB9XG4gICBcblxuICAgICNjb21wb25lbnRzQm9keSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHggMCAxMHB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogODAwcHg7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAmLmJnLWJsYW5rIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIH1cbiAgICAgICAgJi5iZy1ncmlkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgyMDAsIDIwNSwgMjA4LCAuMykgMXB4LCB0cmFuc3BhcmVudCAwKSxcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMDAsIDIwNSwgMjA4LCAuMyksIDFweCwgdHJhbnNwYXJlbnQgMCksXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoICNDOENERDAgMXB4LCB0cmFuc3BhcmVudCAwKSxcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0M4Q0REMCAxcHgsIHRyYW5zcGFyZW50IDApO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHgsIDIwcHggMjBweCwgMTAwcHggMTAwcHgsIDEwMHB4IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb21wLWl0ZW0ge1xuICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6I2ZmZmZmZiAsICRhbHBoYTogMS4wKVxuICAgICAgICB9XG4gICAgICAgIC5jb21wLWFjdGl2ZSB7XG4gICAgICAgICAgICAvLyBib3JkZXI6MXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgei1pbmRleDogMTEgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wLXJlc2l6ZSB7XG4gICAgICAgICAgICBjdXJzb3I6IGUtcmVzaXplO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zZXR0aW5nLWJ1dCB7XG4gICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/editor/develop/development.ts":
  /*!***********************************************!*\
    !*** ./src/app/editor/develop/development.ts ***!
    \***********************************************/

  /*! exports provided: DevelopmentPageComponent */

  /***/
  function srcAppEditorDevelopDevelopmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevelopmentPageComponent", function () {
      return DevelopmentPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_editor_directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/editor/directive/view-contain-ref-host.directive */
    "./src/app/editor/directive/view-contain-ref-host.directive.ts");
    /* harmony import */


    var src_app_editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/editor/provider/comp-config.service */
    "./src/app/editor/provider/comp-config.service.ts");
    /* harmony import */


    var src_app_editor_provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/editor/provider/comp-dynamic-create.service */
    "./src/app/editor/provider/comp-dynamic-create.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/emitSub/emit-sub.service */
    "./src/app/core/emitSub/emit-sub.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_editor_comps_comp_lib_tool_auxiliary_auxiliary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/editor/comps/comp-lib/tool/auxiliary/auxiliary.component */
    "./src/app/editor/comps/comp-lib/tool/auxiliary/auxiliary.component.ts");
    /* harmony import */


    var src_app_editor_comps_comp_lib_tool_area_area_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/editor/comps/comp-lib/tool/area/area.component */
    "./src/app/editor/comps/comp-lib/tool/area/area.component.ts");
    /* harmony import */


    var src_app_providers_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/providers/app.service */
    "./src/app/providers/app.service.ts");
    /* harmony import */


    var src_app_core_tool_user_agent_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/core/tool/user-agent.service */
    "./src/app/core/tool/user-agent.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _core_provider_baseHttp_base_http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../core/provider/baseHttp/base-http.service */
    "./src/app/core/provider/baseHttp/base-http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _provider_comp_storage_local_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../provider/comp-storage-local.service */
    "./src/app/editor/provider/comp-storage-local.service.ts");
    /* harmony import */


    var src_app_core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/core/provider/toaster/toastr.service */
    "./src/app/core/provider/toaster/toastr.service.ts");
    /* harmony import */


    var remove_drag_ghosting__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! remove-drag-ghosting */
    "./node_modules/remove-drag-ghosting/index.js");
    /* harmony import */


    var src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/core/provider/indexDB/indexDB.service */
    "./src/app/core/provider/indexDB/indexDB.service.ts");

    var DevelopmentPageComponent = /*#__PURE__*/function (_core_provider_baseHt2) {
      _inherits(DevelopmentPageComponent, _core_provider_baseHt2);

      var _super25 = _createSuper(DevelopmentPageComponent);

      function DevelopmentPageComponent(localStorageService, emitSerice, http, elementRef, componentFactoryResolver, service, infoService, dynamicService, activeRoute, router, userAgentService, eventManager, toaster, indexDBService) {
        var _this21;

        _classCallCheck(this, DevelopmentPageComponent);

        _this21 = _super25.call(this, http, '');
        _this21.localStorageService = localStorageService;
        _this21.emitSerice = emitSerice;
        _this21.http = http;
        _this21.elementRef = elementRef;
        _this21.componentFactoryResolver = componentFactoryResolver;
        _this21.service = service;
        _this21.infoService = infoService;
        _this21.dynamicService = dynamicService;
        _this21.activeRoute = activeRoute;
        _this21.router = router;
        _this21.userAgentService = userAgentService;
        _this21.eventManager = eventManager;
        _this21.toaster = toaster;
        _this21.indexDBService = indexDBService;
        _this21.PAGE_URL = 'page';
        _this21.pagesUrl = "pages";
        _this21.development_setting_bg = 'bg-grid';
        _this21.auxiComp = {};
        _this21.areaComp = {};
        _this21.currentIndex = -1; //激活组件的下标

        _this21.multipleChoiceArray = []; //多选操作组件列表

        _this21.mouseState = {
          down: false,
          move: false,
          up: false
        }; //鼠标事件记录，用于选中组件

        _this21.pageGridSetting = {
          showLeft: true,
          showRight: true
        };
        return _this21;
      }

      _createClass(DevelopmentPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.compBodyDom = this.elementRef.nativeElement.querySelector('#componentsBody');
          this.compBodyDom.addEventListener('click', this.clickListernerHandle.bind(this));
          this.compBodyDom.addEventListener('mousedown', this.selectArea.bind(this));
          this.compBodyDom.addEventListener('mousemove', this.selectArea.bind(this));
          this.compBodyDom.addEventListener('mouseup', this.selectArea.bind(this));
          this.getPageSize();
        }
      }, {
        key: "getPageSize",
        value: function getPageSize() {
          var contetDom = this.elementRef.nativeElement.querySelector('#componentsBody');
          this.contentPageSize['left'] = contetDom.offsetLeft;
          this.contentPageSize['top'] = contetDom.offsetTop;
        }
      }, {
        key: "initData",
        value: function initData() {
          this.currentViewContRef = this.viewContRef.viewContainerRef;
          this.currnetPageComps = null;
          this.auxiComp = this.infoService.getAuxiComp();
          this.areaComp = this.infoService.getAreaComp();
          this.contentPageSize = {
            top: 0,
            left: 0,
            rigth: 0,
            bottom: 0
          };
          this.getRouteParams();
          this.eventListener();
          this.eventEmitterSub();
        }
      }, {
        key: "getRouteParams",
        value: function getRouteParams() {
          var _this22 = this;

          this.activeRoute.queryParams.subscribe(function (res) {
            _this22.projectId = res['projectId'];
            _this22.pageId = res['project']; //编辑器不处理页面请求，仅仅作为页面编辑容器
          });
        }
      }, {
        key: "eventEmitterSub",
        value: function eventEmitterSub() {
          var _this23 = this;

          var parentCompList = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.currnetPageComps);
          this.sub = this.emitSerice.getEmitEvent().subscribe(function (res) {
            if (res && res['type'] === 'child-comp') {
              var data = res['data'];
              var currentList = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](parentCompList, data);

              _this23.initViewContRef();

              _this23.getCompList(currentList);
            }
          });
        }
      }, {
        key: "eventListener",
        value: function eventListener() {
          var _this24 = this;

          this.eventManager.addGlobalEventListener('window', 'keydown', function ($event) {
            if (!_this24.activeCompSettingObject) {
              return;
            }

            var del_window = _this24.userAgentService.isWindows && $event && $event.code === 'Delete';
            var del_mac = _this24.userAgentService.isMac && $event && $event.code === 'Backspace' && $event.keyCode === 8;
            var activeEleBool = document.activeElement && document.activeElement['selectionStart'] !== undefined; //mac Delete删除组件焦点输入框的内容

            var _doc = document.activeElement; //添加类型断言，TS类型检查导致的异常抛出

            var _delCompItem = $event && $event['target'] && $event['target']['class'] && $event['target']['classList'].indexOf('comp-item') > -1; //DOTO:不删除组态


            if (del_window || del_mac && (activeEleBool === false || activeEleBool && !_doc['value'] && _delCompItem) || del_mac && $event.ctrlKey && _this24.activeCompSettingObject || (del_window || del_mac) && $event.ctrlKey) {
              _this24.delCompEvet($event);
            } else if ($event.ctrlKey && _this24.currentIndex >= 0) {
              if ($event.code === 'KeyC' || $event.code === 'KeyV') {
                _this24.copyCompEvet($event);
              }
            } else if (['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'].indexOf($event.code) > -1 && _this24.activeCompSettingObject) {
              _this24.arrowEvent($event.code, $event);
            }
          });
        } //拖拽icon图标添加组件

      }, {
        key: "dragCompEnd",
        value: function dragCompEnd(event) {
          var compType = event && event['compType'] || 'text'; //容错处理，默认创建text组件

          this.addComponent(compType, event);
        } //增加组件

      }, {
        key: "addComponent",
        value: function addComponent(compType, event, addComp) {
          var compDefinInfo = this.dynamicService.createComponent(compType, this.infoService.getCompDefaultConfig(compType));
          var addCompJson = addComp || compDefinInfo && compDefinInfo['data'];
          this.initCompsState();

          if (compType && event) {
            this.initCopyState();
            this.getAuxiliaryComponent(null, 'addComponent');

            if (addCompJson && addCompJson['style']) {
              var _top = event['y'] - this.contentPageSize.top || addCompJson['style']['top'];

              var _left = event['x'] - this.contentPageSize.left || addCompJson['style']['left'];

              addCompJson['style']['top'] = _top >= 0 ? _top : 0;
              addCompJson['style']['left'] = _left >= 0 ? _left : 0;
              addCompJson['contentPageSize'] = this.contentPageSize;
              addCompJson['active'] = true;
            }
          }

          this.currnetPageComps.push(addCompJson);
          this.currentIndex = this.currnetPageComps.length - 1;
          var currentComp = this.dynamicService.getComp(addCompJson);
          this.activeCompSettingObject = addCompJson;
          this.components.push(currentComp);
          this.renderComponent(this.currentIndex);
        }
      }, {
        key: "initCompsState",
        value: function initCompsState() {
          this.currentIndex = -1;
          this.activeCompSettingObject = null;
          lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.currnetPageComps, function (item, k) {
            item['active'] = false;
          });
        } //修改组件

      }, {
        key: "chengeComponent",
        value: function chengeComponent(event) {
          var settingObj = event;
          var compInstance = this.components[this.currentIndex];
          return compInstance.settingObj = settingObj;
        } //父类容器监听事件

      }, {
        key: "clickListernerHandle",
        value: function clickListernerHandle(e) {
          if (!this.currnetPageComps) return;
          this.initCompsState();
          this.getPageSize(); //1.更新文本编辑状态

          var currentComp = this.currnetPageComps[this.currentIndex];

          if (currentComp && currentComp['type'] === 'text') {
            currentComp['editeabled'] = false;
          } //2.处理选中辅助组件


          this.getAuxiliaryComponent(null, 'parentListerner');
        } // 初始化视图容器,这样写是为了操作安全,扩展多人同时编辑,多页面操作切换

      }, {
        key: "initViewContRef",
        value: function initViewContRef() {
          if (!this.components) return; // let len = this.components.length;
          // for(let i=0; i < len;i++){
          //   this.currentViewContRef.clear(i)
          // }

          this.currentViewContRef.clear();
        } //删除组件 

      }, {
        key: "deleteComponent",
        value: function deleteComponent(event) {
          var _delComp = this.currentIndex;
          this.getAuxiliaryComponent(null, 'deleteComponent');

          if (_delComp > -1) {
            this.initViewContRef();
            this.currnetPageComps.splice(_delComp, 1);
            this.getCompList(this.currnetPageComps);
          }

          this.initCompsState();
        } //创建组件列表

      }, {
        key: "getCompList",
        value: function getCompList(jsonList) {
          this.components = this.dynamicService.getCompList(jsonList); //获取组件列表

          this.updateComponent(this.components);
        } //更新组件列表渲染

      }, {
        key: "updateComponent",
        value: function updateComponent(compList) {
          var _this25 = this;

          compList.forEach(function (comp, k) {
            _this25.renderComponent(k);
          });
        } //组件渲染

      }, {
        key: "renderComponent",
        value: function renderComponent(currentIndex) {
          var _this26 = this;

          var currentComponent = this.components[currentIndex];
          var compFactory = this.componentFactoryResolver.resolveComponentFactory(currentComponent.compType);
          var compRef = this.currentViewContRef.createComponent(compFactory);
          var compInstance = compRef.instance;
          var changeX = 0;
          var changeY = 0;
          compInstance.settingObj = currentComponent.settingObj;
          compInstance.onChildComponentChange.subscribe(function (e) {
            Object(remove_drag_ghosting__WEBPACK_IMPORTED_MODULE_19__["default"])(e);

            if (e && e.stopPropagation) {
              e.stopPropagation();
              var eventType = e && e.type;
              var style = currentComponent.settingObj && currentComponent.settingObj['style'];

              if (e['ignoreDragBool']) {// ignoreDragBool
              } else if (eventType === 'dragstart') {
                _this26.dragCompStartX = e.clientX;
                _this26.dragCompStartY = e.clientY;
                changeX = _this26.dragCompStartX - style['left'];
                changeY = _this26.dragCompStartY - style['top'];
              } else if (eventType === 'drag') {
                if (e.clientY === 0 && e.clientY === 0) return;
                style['left'] = e.clientX - changeX >= 0 ? e.clientX - changeX : 0;
                style['top'] = e.clientY - changeY >= 0 ? e.clientY - changeY : 0;
              }

              if (eventType === 'dragend') {
                style['left'] = style['left'] >= 0 ? style['left'] : 0;
                style['top'] = style['top'] >= 0 ? style['top'] : 0;
              }

              _this26.selectComp(currentComponent.settingObj, eventType);

              _this26.initCopyState();
            }
          });
        } //选择组件

      }, {
        key: "selectComp",
        value: function selectComp(settingObj, eventType) {
          this.activeCompSettingObject = settingObj;
          this.getActiveComponent(settingObj);

          if (eventType === 'click') {
            this.getAuxiliaryComponent(settingObj['style'], 'selectComponent');
          }
        } //选择组件，获取激活状态组件

      }, {
        key: "getActiveComponent",
        value: function getActiveComponent(settingObj) {
          var _this27 = this;

          this.initCompsState();
          lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.currnetPageComps, function (comp, k) {
            if (comp === settingObj) {
              _this27.currentIndex = k;
              comp['active'] = true;
              _this27.activeCompSettingObject = settingObj; // this.activeCurrentComp = comp;
            }
          });
        } //选择当前页面组件列表

      }, {
        key: "getCurrentPage",
        value: function getCurrentPage(page) {
          this.initViewContRef();
          this.currentPage = page;
          var localComp = this.localStorageService.getPreViceComponent();
          var useLocal = localComp && JSON.parse(localComp).length > 0;
          var comps = useLocal ? JSON.parse(localComp) : page['componentList'] && JSON.parse(page['componentList']) || [];
          this.router.navigate(['/develop'], {
            queryParams: {
              project: page['projectId'],
              page: page['id']
            }
          });
          this.currnetPageComps = comps;
          this.initPageCompState();
          this.getCompList(comps);
          this.activeCompSettingObject = null;
          this.getAuxiliaryComponent(null, 'deleteComponent');
        } //通过元素列表选择组态

      }, {
        key: "activeComp",
        value: function activeComp(comp) {
          var _this28 = this;

          this.initPageCompState();
          this.clickListernerHandle(null);
          comp['active'] = true;
          this.activeCompSettingObject = comp;
          lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.currnetPageComps, function (item, k) {
            if (item['active']) {
              _this28.currentIndex = k;
            }
          });
          this.getAuxiliaryComponent(this.activeCompSettingObject['style'], 'selectComponent');
        }
      }, {
        key: "initPageCompState",
        value: function initPageCompState() {
          lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.currnetPageComps, function (item) {
            if (['area', 'auxi'].indexOf(item['type']) === -1) {
              item['active'] = false;
            }
          });
        } //辅助组件处理 

      }, {
        key: "getAuxiliaryComponent",
        value: function getAuxiliaryComponent(selectStyle, eventType) {
          /**
           * 1.parentListerner 监听父类容器
           * 2.selectComponent 选择动态组件
           * 3.addComponent 添加组件
           * 4.deleteComponent 删除组件
           */
          this.auxiCompInit();

          if (eventType === 'selectComponent' && this.activeCompSettingObject && this.activeCompSettingObject['type'] !== 'line') {
            this.auxiComp = this.infoService.getAuxiComp();
            this.auxiComp['style'] = selectStyle;
            this.auxiComp['contentPageSize'] = this.contentPageSize;
            this.currnetPageComps.push(this.auxiComp);
            var compFactory = this.componentFactoryResolver.resolveComponentFactory(src_app_editor_comps_comp_lib_tool_auxiliary_auxiliary_component__WEBPACK_IMPORTED_MODULE_9__["AuxiliaryComponent"]);
            var compRef = this.currentViewContRef.createComponent(compFactory);
            var compInstance = compRef.instance;
            compInstance.settingObj = this.auxiComp;
          }
        } //辅助组件处理

      }, {
        key: "auxiCompInit",
        value: function auxiCompInit() {
          //计算辅助组件下标
          var auxiIndex = lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](this.currnetPageComps, function (item) {
            return item['type'] == 'auxi';
          });

          if (auxiIndex > -1) {
            this.components.splice(auxiIndex, 1);
            this.currnetPageComps.splice(auxiIndex, 1);
            this.currentViewContRef.remove(auxiIndex);
          }
        } //运行

      }, {
        key: "preView",
        value: function preView() {
          this.auxiCompInit();
          var comps = this.initPageComponentsStatus();
          this.localStorageService.setPreViewPageInfo(JSON.stringify(this.currentPage));
          this.localStorageService.setPreViewComponent(JSON.stringify(comps));
          this.router.navigate(['/workspace/develop/preview'], {
            queryParams: {
              project: this.projectId,
              page: this.pageId
            }
          });
        } //创建页面

      }, {
        key: "addPage",
        value: function addPage(event) {
          rxjs__WEBPACK_IMPORTED_MODULE_16__["Observable"].forkJoin(this.create({}, this.PAGE_URL)).subscribe(function (res) {});
        } //保存跟新页面

      }, {
        key: "savePage",
        value: function savePage() {
          var _this29 = this;

          var page = this.initPageStatus();
          var comps = this.initPageComponentsStatus();
          var compString = JSON.stringify(comps);
          page['componentList'] = compString;
          rxjs__WEBPACK_IMPORTED_MODULE_16__["Observable"].forkJoin([this.indexDBService.updateData(this.pagesUrl, page)]).subscribe(function (res) {
            _this29.emitSerice.setEmitEvent('update-projects');

            _this29.toaster.showToaster({
              state: _this29.toaster.STATE.SUCCESS,
              info: '页面更新成功'
            });
          }, function (error) {
            _this29.toaster.showToaster({
              state: _this29.toaster.STATE.ERROR,
              info: '页面更新失败'
            });
          });
        }
      }, {
        key: "initPageStatus",
        value: function initPageStatus() {
          var _page = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.currentPage);

          delete _page['actived'];
          return _page;
        }
      }, {
        key: "initPageComponentsStatus",
        value: function initPageComponentsStatus() {
          var _comps = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.currnetPageComps);

          var _auxiIndex = lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](_comps, function (item) {
            return item['type'] == 'auxi';
          });

          if (_auxiIndex > -1) {
            _comps.splice(_auxiIndex, 1);
          }

          lodash__WEBPACK_IMPORTED_MODULE_1__["map"](_comps, function (item) {
            delete item['active'];
          });
          return _comps;
        } //键盘事件-删除

      }, {
        key: "delCompEvet",
        value: function delCompEvet(event) {
          this.deleteComponent(event);
        } //键盘事件-拷贝

      }, {
        key: "copyCompEvet",
        value: function copyCompEvet(event) {
          if (event['key'] === 'c') {
            this.initCopyState();
            var currComp = this.currnetPageComps[this.currentIndex];
            this.copyComp = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](currComp);
            this.copyComp['active'] = false;
            this.getAuxiliaryComponent(null, 'addComponent');
          } else if (event['key'] === 'v' && this.copyComp) {
            ++this.copyNum;

            var _copyComp = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.copyComp);

            var _top = _copyComp && _copyComp['style'] && _copyComp['style']['top'];

            var _height = _copyComp && _copyComp['style'] && _copyComp['style']['height'];

            _copyComp['style']['top'] = _top + _height * this.copyNum;
            this.addComponent(null, null, _copyComp);
          }
        }
      }, {
        key: "arrowEvent",
        value: function arrowEvent(direction, event) {
          var styleObj = this.activeCompSettingObject && this.activeCompSettingObject['style'];

          switch (direction) {
            case 'ArrowLeft':
              styleObj['left'] = styleObj['left'] > 0 ? styleObj['left'] - 1 : 0;
              this.stopWindowScroll(event);
              break;

            case 'ArrowRight':
              styleObj['left'] = styleObj['left'] + 1;
              this.stopWindowScroll(event);
              break;

            case 'ArrowDown':
              if (!jquery__WEBPACK_IMPORTED_MODULE_13__('input:focus')['length']) {
                styleObj['top'] = styleObj['top'] >= 0 ? styleObj['top'] + 1 : 0;
                this.stopWindowScroll(event);
              } else if (jquery__WEBPACK_IMPORTED_MODULE_13__('input:focus') && jquery__WEBPACK_IMPORTED_MODULE_13__('input:focus')['length'] > 0 && jquery__WEBPACK_IMPORTED_MODULE_13__('input:focus')[0]['id'] === 'setTopVal') {
                styleObj['top'] = styleObj['top'] >= 0 ? styleObj['top'] - 1 : 0;
              }

              break;

            case 'ArrowUp':
              if (!jquery__WEBPACK_IMPORTED_MODULE_13__('input:focus')['length']) {
                styleObj['top'] = styleObj['top'] >= 1 ? styleObj['top'] - 1 : 0;
                this.stopWindowScroll(event);
              } else if (jquery__WEBPACK_IMPORTED_MODULE_13__('input:focus') && jquery__WEBPACK_IMPORTED_MODULE_13__('input:focus')['length'] > 0 && jquery__WEBPACK_IMPORTED_MODULE_13__('input:focus')[0]['id'] === 'setTopVal') {
                styleObj['top'] = styleObj['top'] >= 1 ? styleObj['top'] + 1 : 0;
              }

              break;
          }
        } //阻止页面滚蛋  

      }, {
        key: "stopWindowScroll",
        value: function stopWindowScroll(event) {
          event.preventDefault();
        } //初始化当前激活组态数据

      }, {
        key: "initCopyState",
        value: function initCopyState() {
          this.copyComp = null;
          this.copyNum = null;
        }
      }, {
        key: "selectArea",
        value: function selectArea(event) {
          var state = event && event['type'];
          var _left = this.areaComp['style']['left'];
          var _top = this.areaComp['style']['top'];

          switch (state) {
            case 'mousedown':
              this.mouseState['down'] = true;
              this.mouseState['up'] = false;
              this.mouseState['move'] = false;

              if (this.areaComp && this.areaComp['style']) {
                this.areaComp['style']['left'] = event.x - this.contentPageSize.left;
                this.areaComp['style']['top'] = event.y - this.contentPageSize.top;
              }

              break;

            case 'mousemove':
              if (this.mouseState['down'] && !this.mouseState['move'] && event.ctrlKey) {
                this.mouseState['move'] = true;
                this.mouseState['up'] = false;
                this.areaCompInit('add');
              } else if (this.mouseState['down']) {
                var _w = event.x - _left - this.contentPageSize.left;

                var _h = event.y - _top - this.contentPageSize.top;

                if (_w > 1) {
                  this.areaComp['style']['right'] = null;
                  this.areaComp['style']['width'] = _w;
                } else {
                  this.areaComp['style']['right'] = this.areaComp['style']['right'] || _left;
                  this.areaComp['style']['left'] = event.x - this.contentPageSize.left;
                  this.areaComp['style']['width'] = this.areaComp['style']['right'] - _left;
                }

                if (_h > 1) {
                  this.areaComp['style']['bottom'] = null;
                  this.areaComp['style']['height'] = _h;
                } else {
                  this.areaComp['style']['bottom'] = this.areaComp['style']['bottom'] || _top;
                  this.areaComp['style']['top'] = event.y - this.contentPageSize.top;
                  this.areaComp['style']['height'] = this.areaComp['style']['bottom'] - _top;
                }
              }

              break;

            case 'mouseup':
              this.mouseState['down'] = false;
              this.mouseState['up'] = true;
              this.mouseState['move'] = false;
              this.areaCompInit();
              break;
          }
        }
      }, {
        key: "areaCompInit",
        value: function areaCompInit(state) {
          var areaIndex = lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](this.currnetPageComps, function (item) {
            return item['type'] == 'area';
          });

          if (areaIndex === -1 && state === 'add') {
            this.areaComp = this.infoService.getAreaComp();
            this.currnetPageComps.push(this.areaComp);
            var compFactory = this.componentFactoryResolver.resolveComponentFactory(src_app_editor_comps_comp_lib_tool_area_area_component__WEBPACK_IMPORTED_MODULE_10__["AreaComponent"]);
            var compRef = this.currentViewContRef.createComponent(compFactory);
            var compInstance = compRef.instance;
            compInstance.settingObj = this.areaComp;
          } else if (areaIndex > -1) {
            this.delAreaComp();
          }
        } //删除区域选中辅助组件

      }, {
        key: "delAreaComp",
        value: function delAreaComp() {
          var areaIndex = lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](this.currnetPageComps, function (item) {
            return item['type'] == 'area';
          });

          if (areaIndex > -1) {
            this.currnetPageComps.splice(areaIndex, 1);
            this.currentViewContRef.remove(areaIndex);
            this.initViewContRef();
            this.getCompList(this.currnetPageComps);
          }
        }
      }, {
        key: "changeBg",
        value: function changeBg(event) {
          this.development_setting_bg = event === 'open' ? 'bg-grid' : 'bg-blank' || false;
        }
      }]);

      return DevelopmentPageComponent;
    }(_core_provider_baseHttp_base_http_service__WEBPACK_IMPORTED_MODULE_14__["BaseHttpService"]);

    DevelopmentPageComponent.ctorParameters = function () {
      return [{
        type: _provider_comp_storage_local_service__WEBPACK_IMPORTED_MODULE_17__["CompStorageLocalService"]
      }, {
        type: src_app_core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_7__["EmitSubService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]
      }, {
        type: src_app_providers_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"]
      }, {
        type: src_app_editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_4__["CompConfigService"]
      }, {
        type: src_app_editor_provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_5__["CompDynamicCreateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_core_tool_user_agent_service__WEBPACK_IMPORTED_MODULE_12__["UserAgentService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"]
      }, {
        type: src_app_core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_18__["TempoToastrService"]
      }, {
        type: src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_20__["IndexDBService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], DevelopmentPageComponent.prototype, "componets", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_editor_directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__["ViewContainRefHostDirective"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_editor_directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__["ViewContainRefHostDirective"])], DevelopmentPageComponent.prototype, "viewContRef", void 0);
    DevelopmentPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-development',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./development.html */
      "./node_modules/raw-loader/index.js!./src/app/editor/develop/development.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./development.scss */
      "./src/app/editor/develop/development.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_comp_storage_local_service__WEBPACK_IMPORTED_MODULE_17__["CompStorageLocalService"], src_app_core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_7__["EmitSubService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"], src_app_providers_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"], src_app_editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_4__["CompConfigService"], src_app_editor_provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_5__["CompDynamicCreateService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_core_tool_user_agent_service__WEBPACK_IMPORTED_MODULE_12__["UserAgentService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], src_app_core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_18__["TempoToastrService"], src_app_core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_20__["IndexDBService"]])], DevelopmentPageComponent);
    /***/
  },

  /***/
  "./src/app/editor/develop/developmonet.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/editor/develop/developmonet.module.ts ***!
    \*******************************************************/

  /*! exports provided: DevelopModule */

  /***/
  function srcAppEditorDevelopDevelopmonetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevelopModule", function () {
      return DevelopModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./development */
    "./src/app/editor/develop/development.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _comp_configuration_comp_list_comp_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comp-configuration/comp-list/comp-list.component */
    "./src/app/editor/develop/comp-configuration/comp-list/comp-list.component.ts");
    /* harmony import */


    var _comp_setting_comp_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comp-setting/comp-setting.component */
    "./src/app/editor/develop/comp-setting/comp-setting.component.ts");
    /* harmony import */


    var _directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../directive/view-contain-ref-host.directive */
    "./src/app/editor/directive/view-contain-ref-host.directive.ts");
    /* harmony import */


    var _directive_view_child_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../directive/view-child-contain-ref-host.directive */
    "./src/app/editor/directive/view-child-contain-ref-host.directive.ts");
    /* harmony import */


    var _comp_configuration_comp_page_list_comp_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./comp-configuration/comp-page-list/comp-page-list.component */
    "./src/app/editor/develop/comp-configuration/comp-page-list/comp-page-list.component.ts");
    /* harmony import */


    var _comp_configuration_comp_configuration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./comp-configuration/comp-configuration.component */
    "./src/app/editor/develop/comp-configuration/comp-configuration.component.ts");
    /* harmony import */


    var src_app_core_code_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/core/code.module */
    "./src/app/core/code.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _comps_comp_dev_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../comps/comp-dev.module */
    "./src/app/editor/comps/comp-dev.module.ts");
    /* harmony import */


    var _comps_comp_settings_style_comp_style_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../comps/comp-settings/style/comp-style.module */
    "./src/app/editor/comps/comp-settings/style/comp-style.module.ts");
    /* harmony import */


    var _comps_comp_settings_data_comp_data_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../comps/comp-settings/data/comp-data.module */
    "./src/app/editor/comps/comp-settings/data/comp-data.module.ts");
    /* harmony import */


    var _comps_comp_lib_business_comp_business_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../comps/comp-lib/business/comp-business.module */
    "./src/app/editor/comps/comp-lib/business/comp-business.module.ts");
    /* harmony import */


    var _comps_comp_settings_event_comp_event_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../comps/comp-settings/event/comp-event.module */
    "./src/app/editor/comps/comp-settings/event/comp-event.module.ts");
    /* harmony import */


    var _comps_comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../comps/comp-basic/comp-setting-basic.module */
    "./src/app/editor/comps/comp-basic/comp-setting-basic.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _provider_comp_config_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../provider/comp-config.service */
    "./src/app/editor/provider/comp-config.service.ts");
    /* harmony import */


    var _provider_comp_list_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../provider/comp-list.service */
    "./src/app/editor/provider/comp-list.service.ts");
    /* harmony import */


    var _comp_configuration_comp_page_comps_list_comp_page_comps_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./comp-configuration/comp-page-comps-list/comp-page-comps-list.component */
    "./src/app/editor/develop/comp-configuration/comp-page-comps-list/comp-page-comps-list.component.ts");
    /* harmony import */


    var _comp_help_comp_help_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./comp-help/comp-help.component */
    "./src/app/editor/develop/comp-help/comp-help.component.ts");
    /* harmony import */


    var _comp_pre_view_comp_pre_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./comp-pre-view/comp-pre-view.component */
    "./src/app/editor/develop/comp-pre-view/comp-pre-view.component.ts");

    var routes = [{
      path: "",
      component: _development__WEBPACK_IMPORTED_MODULE_1__["DevelopmentPageComponent"]
    }, {
      path: "preview",
      component: _comp_pre_view_comp_pre_view_component__WEBPACK_IMPORTED_MODULE_23__["CompPreViewComponent"]
    }];

    var DevelopModule = function DevelopModule() {
      _classCallCheck(this, DevelopModule);
    };

    DevelopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_development__WEBPACK_IMPORTED_MODULE_1__["DevelopmentPageComponent"], _comp_configuration_comp_list_comp_list_component__WEBPACK_IMPORTED_MODULE_3__["CompListComponent"], _comp_setting_comp_setting_component__WEBPACK_IMPORTED_MODULE_4__["CompSettingComponent"], _directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_5__["ViewContainRefHostDirective"], _directive_view_child_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_6__["ViewChildContainRefHostDirective"], _comp_configuration_comp_page_list_comp_page_list_component__WEBPACK_IMPORTED_MODULE_7__["CompPageListComp"], _comp_configuration_comp_configuration_component__WEBPACK_IMPORTED_MODULE_8__["CompConfigurationComponent"], _comp_configuration_comp_page_comps_list_comp_page_comps_list_component__WEBPACK_IMPORTED_MODULE_21__["CompPageCompsListComponent"], _comp_help_comp_help_component__WEBPACK_IMPORTED_MODULE_22__["CompHelpComponent"], _comp_pre_view_comp_pre_view_component__WEBPACK_IMPORTED_MODULE_23__["CompPreViewComponent"], _directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_5__["ViewContainRefHostDirective"]],
      imports: [src_app_core_code_module__WEBPACK_IMPORTED_MODULE_9__["CodeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _comps_comp_dev_module__WEBPACK_IMPORTED_MODULE_12__["CompDevModule"], _comps_comp_settings_style_comp_style_module__WEBPACK_IMPORTED_MODULE_13__["CompStyleModule"], _comps_comp_settings_data_comp_data_module__WEBPACK_IMPORTED_MODULE_14__["CompDataModule"], _comps_comp_lib_business_comp_business_module__WEBPACK_IMPORTED_MODULE_15__["CompBusinessModule"], _comps_comp_settings_event_comp_event_module__WEBPACK_IMPORTED_MODULE_16__["CompEventModule"], _comps_comp_basic_comp_setting_basic_module__WEBPACK_IMPORTED_MODULE_17__["CompSettingBasicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forChild(routes)],
      providers: [_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_19__["CompConfigService"], _provider_comp_list_service__WEBPACK_IMPORTED_MODULE_20__["CompListService"]],
      bootstrap: [],
      entryComponents: [],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], DevelopModule);
    /***/
  },

  /***/
  "./src/app/editor/directive/view-child-contain-ref-host.directive.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/editor/directive/view-child-contain-ref-host.directive.ts ***!
    \***************************************************************************/

  /*! exports provided: ViewChildContainRefHostDirective */

  /***/
  function srcAppEditorDirectiveViewChildContainRefHostDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewChildContainRefHostDirective", function () {
      return ViewChildContainRefHostDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewChildContainRefHostDirective = function ViewChildContainRefHostDirective(viewContainerRef) {
      _classCallCheck(this, ViewChildContainRefHostDirective);

      this.viewContainerRef = viewContainerRef;
    };

    ViewChildContainRefHostDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    ViewChildContainRefHostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[view-child-contain-ref]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])], ViewChildContainRefHostDirective);
    /***/
  },

  /***/
  "./src/app/editor/directive/view-contain-ref-host.directive.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/editor/directive/view-contain-ref-host.directive.ts ***!
    \*********************************************************************/

  /*! exports provided: ViewContainRefHostDirective */

  /***/
  function srcAppEditorDirectiveViewContainRefHostDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewContainRefHostDirective", function () {
      return ViewContainRefHostDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewContainRefHostDirective = function ViewContainRefHostDirective(viewContainerRef) {
      _classCallCheck(this, ViewContainRefHostDirective);

      this.viewContainerRef = viewContainerRef;
    };

    ViewContainRefHostDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    ViewContainRefHostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[view-contain-ref]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])], ViewContainRefHostDirective);
    /***/
  },

  /***/
  "./src/app/editor/model/setting-page-style.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/editor/model/setting-page-style.model.ts ***!
    \**********************************************************/

  /*! exports provided: PageStyle */

  /***/
  function srcAppEditorModelSettingPageStyleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageStyle", function () {
      return PageStyle;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PageStyle = function PageStyle() {
      _classCallCheck(this, PageStyle);
    };
    /***/

  },

  /***/
  "./src/app/editor/model/setting-style.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/editor/model/setting-style.model.ts ***!
    \*****************************************************/

  /*! exports provided: SettingStyle */

  /***/
  function srcAppEditorModelSettingStyleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingStyle", function () {
      return SettingStyle;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SettingStyle = function SettingStyle() {
      _classCallCheck(this, SettingStyle);
    };
    /***/

  },

  /***/
  "./src/app/editor/provider/comp-list.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/editor/provider/comp-list.service.ts ***!
    \******************************************************/

  /*! exports provided: CompListService */

  /***/
  function srcAppEditorProviderCompListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompListService", function () {
      return CompListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CompListService = /*#__PURE__*/function () {
      function CompListService() {
        _classCallCheck(this, CompListService);

        this.componentList = [{
          name: '基础',
          title: "基础组件,多为HTML元素组件",
          state: 'default',
          compList: [{
            name: '连线',
            type: 'line',
            iconUrl: 'assets/icons/line.svg'
          }, {
            name: '文本',
            type: 'text',
            iconUrl: 'assets/icons/text.svg'
          }, {
            name: '单行输入',
            type: 'input',
            iconUrl: 'assets/icons/input.svg'
          }, {
            name: '多行输入',
            type: 'textarea',
            iconUrl: 'assets/icons/textarea.svg'
          }, {
            name: '按钮',
            type: 'button',
            iconUrl: 'assets/icons/mtbutton.svg'
          }, {
            name: '图片',
            type: 'img',
            iconUrl: 'assets/icons/image.svg'
          }, {
            name: '视频',
            type: 'video',
            iconUrl: 'assets/icons/video.svg'
          }]
        }, {
          name: 'Chart',
          state: 'module',
          title: "Chart组件,支持数据绑定和接口绑定,支持定制",
          compList: [{
            name: "饼图",
            type: "chart_pie",
            iconUrl: 'assets/icons/bingtu.svg'
          }, {
            name: "雷达图",
            type: "chart_radar",
            iconUrl: 'assets/icons/leidatu.svg'
          }, {
            name: '折线',
            type: 'chart_polyline',
            iconUrl: 'assets/icons/zhexian.svg',
            vip_state: true
          }, {
            name: '仪表盘',
            type: 'chart_gauge',
            iconUrl: 'assets/icons/gauge.svg',
            vip_state: true
          }]
        }];
      }

      _createClass(CompListService, [{
        key: "getCompList",
        value: function getCompList() {
          return this.componentList;
        }
      }]);

      return CompListService;
    }();

    CompListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CompListService);
    /***/
  }
}]);
//# sourceMappingURL=src-app-editor-develop-developmonet-module-es5.js.map