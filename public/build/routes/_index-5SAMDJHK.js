import {
  StatCard
} from "/build/_shared/chunk-DGPQUYRP.js";
import {
  AppShell
} from "/build/_shared/chunk-WVKMFNMX.js";
import {
  Box_default,
  Stack_default,
  Typography_default
} from "/build/_shared/chunk-K5PCVDWB.js";
import "/build/_shared/chunk-B43JI2TA.js";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h1", children: "Analytics Dashboard" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body1", color: "text.secondary", sx: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, minmax(0, 1fr))",
        md: "repeat(4, minmax(0, 1fr))"
      },
      gap: 2
    }, children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { ...stat }, void 0, false, {
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
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-5SAMDJHK.js.map
