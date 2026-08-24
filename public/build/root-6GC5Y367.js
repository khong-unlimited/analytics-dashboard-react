import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-MCLTYUNI.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  CssBaseline_default,
  ThemeProvider,
  createTheme
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

// app/theme.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/theme.ts"
  );
  import.meta.hot.lastModified = "1787614881407.6956";
}
var appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb"
    },
    secondary: {
      main: "#8b5cf6"
    },
    success: {
      main: "#10b981"
    },
    warning: {
      main: "#f59e0b"
    },
    background: {
      default: "#f3f4f6",
      paper: "#ffffff"
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280"
    }
  },
  shape: {
    borderRadius: 12
  },
  typography: {
    fontFamily: 'Inter, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.3
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.4
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)",
          border: "1px solid #e5e7eb"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #e5e7eb",
          backgroundColor: "#ffffff",
          color: "#111827"
        }
      }
    }
  }
});

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
  import.meta.hot.lastModified = "1787614881404.824";
}
var meta = () => [{
  title: "Analytics Dashboard"
}];
function Root() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, { theme: appTheme, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Root;
var _c;
$RefreshReg$(_c, "Root");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Root as default,
  meta
};
//# sourceMappingURL=/build/root-6GC5Y367.js.map
