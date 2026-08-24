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
  import.meta.hot.lastModified = "1787593638164.195";
}
function StatCard({
  label,
  value,
  change,
  tone = "positive"
}) {
  const toneClass = {
    positive: "#10b981",
    neutral: "#3b82f6",
    warning: "#f59e0b"
  }[tone];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "1rem 1.25rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      color: "#6b7280",
      fontSize: 14
    }, children: label }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      fontSize: 28,
      fontWeight: 700,
      margin: "0.5rem 0"
    }, children: value }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      color: toneClass,
      fontSize: 13,
      fontWeight: 600
    }, children: change }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/StatCard.tsx",
    lineNumber: 32,
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
//# sourceMappingURL=/build/_shared/chunk-BUPDRWCN.js.map
