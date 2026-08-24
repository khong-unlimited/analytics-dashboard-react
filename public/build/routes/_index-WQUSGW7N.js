import {
  StatCard
} from "/build/_shared/chunk-BUPDRWCN.js";
import {
  AppShell
} from "/build/_shared/chunk-CTQK3PBG.js";
import {
  createHotContext
} from "/build/_shared/chunk-STV4APCW.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1787593638166.6614";
}
var stats = [{
  label: "Total Revenue",
  value: "$128.4K",
  change: "+12.4%",
  tone: "positive"
}, {
  label: "Active Users",
  value: "24.8K",
  change: "+8.1%",
  tone: "neutral"
}, {
  label: "Conversion Rate",
  value: "4.82%",
  change: "+1.2%",
  tone: "positive"
}, {
  label: "Avg. Session",
  value: "18m 42s",
  change: "-0.8%",
  tone: "warning"
}];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: {
      marginBottom: 24
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
        margin: 0,
        fontSize: 36
      }, children: "Analytics Dashboard" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        margin: "8px 0 0",
        color: "#6b7280"
      }, children: "Track performance, engagement, and key business metrics." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 16
    }, children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { ...stat }, stat.label, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-WQUSGW7N.js.map
