import {
  Box_default,
  Typography_default
} from "/build/_shared/chunk-QWSUIDKH.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-STV4APCW.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/first.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/first.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/first.tsx"
  );
  import.meta.hot.lastModified = "1787614881406.91";
}
var meta = () => [{
  title: "First Page"
}];
function First() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
    p: 3
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body1", children: "hello world" }, void 0, false, {
    fileName: "app/routes/first.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/first.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = First;
var _c;
$RefreshReg$(_c, "First");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  First as default,
  meta
};
//# sourceMappingURL=/build/routes/first-7ZPM42MF.js.map
