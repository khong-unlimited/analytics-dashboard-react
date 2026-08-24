import {
  AppBar_default,
  Box_default,
  Container_default,
  Stack_default,
  Toolbar_default,
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
  import.meta.hot.lastModified = "1787614314716.122";
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

export {
  AppShell
};
//# sourceMappingURL=/build/_shared/chunk-N26YYMR5.js.map
