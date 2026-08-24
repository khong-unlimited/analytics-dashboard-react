import {
  AppBar_default,
  Box_default,
  Card_default,
  Container_default,
  Stack_default,
  Toolbar_default,
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
  import.meta.hot.lastModified = "1787614881404.3135";
}
function AppShell({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
    minHeight: "100vh",
    backgroundColor: "background.default",
    color: "text.primary"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppBar_default, { position: "static", color: "transparent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toolbar_default, { sx: {
      justifyContent: "space-between",
      px: 3,
      py: 1.5
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h6", sx: {
        fontWeight: 700,
        letterSpacing: 0.2
      }, children: "PulseBoard" }, void 0, false, {
        fileName: "app/components/layout/AppShell.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", spacing: 3, sx: {
        color: "text.secondary",
        fontSize: 14
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { component: "span", children: "Overview" }, void 0, false, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { component: "span", children: "Reports" }, void 0, false, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { component: "span", children: "Customers" }, void 0, false, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { component: "span", children: "Settings" }, void 0, false, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/AppShell.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { maxWidth: "lg", sx: {
      py: 4
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { component: "main", sx: {
      width: "100%"
    }, children }, void 0, false, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { component: "footer", sx: {
      textAlign: "center",
      py: 3,
      color: "text.secondary",
      borderTop: "1px solid",
      borderColor: "divider",
      backgroundColor: "background.paper"
    }, children: "\xA9 2026 PulseBoard \u2022 Insights for every team" }, void 0, false, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/AppShell.tsx",
    lineNumber: 25,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { sx: {
    p: 2.5,
    height: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Stack_default, { spacing: 1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "body2", color: "text.secondary", children: label }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "h3", sx: {
      fontWeight: 700
    }, children: value }, void 0, false, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "caption", sx: {
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
  import.meta.hot.lastModified = "1787614881405.3796";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Stack_default, { spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Typography_default, { variant: "h1", children: "Analytics Dashboard" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Typography_default, { variant: "body1", color: "text.secondary", sx: {
        mt: 1
      }, children: "Track performance, engagement, and key business metrics." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box_default, { sx: {
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, minmax(0, 1fr))",
        md: "repeat(4, minmax(0, 1fr))"
      },
      gap: 2
    }, children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StatCard, { ...stat }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 67,
      columnNumber: 15
    }, this) }, stat.label, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 46,
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
//# sourceMappingURL=/build/routes/_index-X4O23U2U.js.map
