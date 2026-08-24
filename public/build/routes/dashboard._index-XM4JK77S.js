import {
  StatCard
} from "/build/_shared/chunk-BUPDRWCN.js";
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
  import.meta.hot.lastModified = "1787611568473.825";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: {
      marginBottom: 24
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        margin: 0,
        fontSize: 12,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#6b7280"
      }, children: "Overview" }, void 0, false, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
        margin: "8px 0 0",
        fontSize: 36
      }, children: "Dashboard" }, void 0, false, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 16,
      marginBottom: 24
    }, children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { ...stat }, stat.label, false, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 103,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
      gap: 16
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
          margin: "0 0 18px",
          fontSize: 20
        }, children: "Traffic by channel" }, void 0, false, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: 16
        }, children: channels.map((channel) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
            fontSize: 14,
            color: "#374151"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: channel.name }, void 0, false, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 137,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              channel.value,
              "%"
            ] }, void 0, true, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 138,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            height: 10,
            width: "100%",
            background: "#e5e7eb",
            borderRadius: 999,
            overflow: "hidden"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            width: `${channel.value}%`,
            height: "100%",
            borderRadius: 999,
            background: channel.color
          } }, void 0, false, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 147,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this)
        ] }, channel.name, true, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 128,
          columnNumber: 38
        }, this)) }, void 0, false, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
          margin: "0 0 18px",
          fontSize: 20
        }, children: "Regional performance" }, void 0, false, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 165,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: 12
        }, children: sales.map((sale) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 0",
          borderBottom: "1px solid #f3f4f6"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              fontWeight: 600
            }, children: sale.region }, void 0, false, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 182,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              color: "#6b7280",
              fontSize: 12
            }, children: sale.revenue }, void 0, false, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 185,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "#059669",
            background: "#ecfdf5",
            borderRadius: 999,
            padding: "6px 10px",
            fontSize: 12,
            fontWeight: 700
          }, children: sale.growth }, void 0, false, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this)
        ] }, sale.region, true, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 174,
          columnNumber: 32
        }, this)) }, void 0, false, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/DashboardOverview.tsx",
    lineNumber: 78,
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
  import.meta.hot.lastModified = "1787611581237.7014";
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
//# sourceMappingURL=/build/routes/dashboard._index-XM4JK77S.js.map
