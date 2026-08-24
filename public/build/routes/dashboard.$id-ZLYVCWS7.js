import {
  useParams
} from "/build/_shared/chunk-MCLTYUNI.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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

// app/routes/dashboard.$id.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.$id.tsx"
  );
  import.meta.hot.lastModified = "1787611296290.4202";
}
function DashboardDetailRoute() {
  _s();
  const {
    id
  } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: {
    maxWidth: 720,
    margin: "0 auto",
    paddingTop: 32
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      margin: 0,
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#6b7280"
    }, children: "Dashboard detail" }, void 0, false, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
      margin: "8px 0 16px",
      fontSize: 32
    }, children: [
      "Dashboard #",
      id
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      borderRadius: 16,
      padding: 24,
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      margin: 0,
      color: "#374151",
      lineHeight: 1.6
    }, children: [
      "This route is available at ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
        "/dashboard/",
        id
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.$id.tsx",
        lineNumber: 58,
        columnNumber: 38
      }, this),
      " and can be used to show a specific dashboard record or report."
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.$id.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(DashboardDetailRoute, "yQgCIz/jJfqV1l9s2yoba81MT5A=", false, function() {
  return [useParams];
});
_c = DashboardDetailRoute;
var _c;
$RefreshReg$(_c, "DashboardDetailRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DashboardDetailRoute as default
};
//# sourceMappingURL=/build/routes/dashboard.$id-ZLYVCWS7.js.map
