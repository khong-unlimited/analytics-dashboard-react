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

// app/components/layout/AppShell.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/AppShell.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/AppShell.tsx"
  );
  import.meta.hot.lastModified = "1787593638164.597";
}
function AppShell({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    minHeight: "100vh",
    background: "#f3f4f6",
    color: "#111827"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 1.5rem",
      background: "#111827",
      color: "#fff"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        fontWeight: 700,
        fontSize: 20
      }, children: "PulseBoard" }, void 0, false, {
        fileName: "app/components/layout/AppShell.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { style: {
        display: "flex",
        gap: 16,
        fontSize: 14
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Overview" }, void 0, false, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Reports" }, void 0, false, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Customers" }, void 0, false, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Settings" }, void 0, false, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/AppShell.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: {
      padding: "1.5rem"
    }, children }, void 0, false, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/AppShell.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = AppShell;
var _c;
$RefreshReg$(_c, "AppShell");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dashboard/StatCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "1rem 1.25rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      color: "#6b7280",
      fontSize: 14
    }, children: label }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      fontSize: 28,
      fontWeight: 700,
      margin: "0.5rem 0"
    }, children: value }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
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
_c2 = StatCard;
var _c2;
$RefreshReg$(_c2, "StatCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppShell, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { style: {
      marginBottom: 24
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { style: {
        margin: 0,
        fontSize: 36
      }, children: "Analytics Dashboard" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { style: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 16
    }, children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StatCard, { ...stat }, stat.label, false, {
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
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-6HREJAMM.js.map
