import {
  Card_default,
  Stack_default,
  Typography_default
} from "/build/_shared/chunk-K5PCVDWB.js";
import {
  createHotContext
} from "/build/_shared/chunk-STV4APCW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/dashboard/StatCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/StatCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/StatCard.tsx"
  );
  import.meta.hot.lastModified = "1787614881403.723";
}
function StatCard({
  label,
  value,
  change,
  tone = "positive"
}) {
  const toneColor = {
    positive: "success.main",
    neutral: "primary.main",
    warning: "warning.main"
  }[tone];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { sx: {
    p: 2.5,
    height: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body2", color: "text.secondary", children: label }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h3", sx: {
      fontWeight: 700
    }, children: value }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "caption", sx: {
      color: toneColor,
      fontWeight: 700
    }, children: change }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/StatCard.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/dashboard/StatCard.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = StatCard;
var _c;
$RefreshReg$(_c, "StatCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  StatCard
};
//# sourceMappingURL=/build/_shared/chunk-DGPQUYRP.js.map
