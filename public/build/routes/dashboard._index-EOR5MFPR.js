import {
  StatCard
} from "/build/_shared/chunk-DGPQUYRP.js";
import {
  Box_default,
  Card_default,
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

// app/components/dashboard/DashboardOverview.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dashboard/DashboardOverview.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dashboard/DashboardOverview.tsx"
  );
  import.meta.hot.lastModified = "1787614881403.209";
}
var stats = [{
  label: "Monthly Revenue",
  value: "$184.2K",
  change: "+14.3%",
  tone: "positive"
}, {
  label: "New Customers",
  value: "3,482",
  change: "+9.8%",
  tone: "positive"
}, {
  label: "Avg. Order Value",
  value: "$214",
  change: "+2.1%",
  tone: "neutral"
}, {
  label: "Churn Rate",
  value: "1.9%",
  change: "-0.4%",
  tone: "warning"
}];
var channels = [{
  name: "Organic",
  value: 42,
  color: "#2563eb"
}, {
  name: "Paid Search",
  value: 28,
  color: "#8b5cf6"
}, {
  name: "Social",
  value: 18,
  color: "#10b981"
}, {
  name: "Referral",
  value: 12,
  color: "#f59e0b"
}];
var sales = [{
  region: "North America",
  revenue: "$72K",
  growth: "+18.4%"
}, {
  region: "Europe",
  revenue: "$58K",
  growth: "+12.1%"
}, {
  region: "APAC",
  revenue: "$39K",
  growth: "+9.6%"
}, {
  region: "LATAM",
  revenue: "$15K",
  growth: "+6.7%"
}];
function DashboardOverview() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "overline", color: "text.secondary", sx: {
        letterSpacing: 1.5
      }, children: "Overview" }, void 0, false, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h1", children: "Dashboard" }, void 0, false, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 80,
      columnNumber: 7
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
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this) }, stat.label, false, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 98,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        lg: "1.5fr 1fr"
      },
      gap: 2
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { sx: {
        p: 2.5
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h2", sx: {
          mb: 2
        }, children: "Traffic by channel" }, void 0, false, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 2, children: channels.map((channel) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", sx: {
            justifyContent: "space-between",
            mb: 1
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body2", children: channel.name }, void 0, false, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 126,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body2", color: "text.secondary", children: [
              channel.value,
              "%"
            ] }, void 0, true, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
            height: 10,
            borderRadius: 999,
            backgroundColor: "grey.200",
            overflow: "hidden"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
            height: "100%",
            width: `${channel.value}%`,
            background: channel.color,
            borderRadius: 999
          } }, void 0, false, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 137,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this)
        ] }, channel.name, true, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 121,
          columnNumber: 38
        }, this)) }, void 0, false, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { sx: {
        p: 2.5
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h2", sx: {
          mb: 2
        }, children: "Regional performance" }, void 0, false, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 2, children: sales.map((sale) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { direction: "row", sx: {
          justifyContent: "space-between",
          alignItems: "center"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "subtitle1", sx: {
              fontWeight: 600
            }, children: sale.region }, void 0, false, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "caption", color: "text.secondary", children: sale.revenue }, void 0, false, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 167,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 161,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { component: "span", sx: {
            backgroundColor: "success.light",
            color: "success.dark",
            borderRadius: 999,
            px: 1.1,
            py: 0.5,
            fontSize: 12,
            fontWeight: 700
          }, children: sale.growth }, void 0, false, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this)
        ] }, sale.region, true, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 157,
          columnNumber: 32
        }, this)) }, void 0, false, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/DashboardOverview.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
}
_c = DashboardOverview;
var _c;
$RefreshReg$(_c, "DashboardOverview");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard._index.tsx"
  );
  import.meta.hot.lastModified = "1787614881406.1172";
}
function DashboardIndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DashboardOverview, {}, void 0, false, {
    fileName: "app/routes/dashboard._index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = DashboardIndexRoute;
var _c2;
$RefreshReg$(_c2, "DashboardIndexRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DashboardIndexRoute as default
};
//# sourceMappingURL=/build/routes/dashboard._index-EOR5MFPR.js.map
