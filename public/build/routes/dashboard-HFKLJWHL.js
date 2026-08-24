import {
  Outlet
} from "/build/_shared/chunk-MCLTYUNI.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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

// app/routes/dashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1787611291929.4653";
}
function DashboardLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = DashboardLayout;
var _c;
$RefreshReg$(_c, "DashboardLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DashboardLayout as default
};
//# sourceMappingURL=/build/routes/dashboard-HFKLJWHL.js.map
