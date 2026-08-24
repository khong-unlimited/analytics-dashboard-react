import {
  useParams
} from "/build/_shared/chunk-MCLTYUNI.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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
  import.meta.hot.lastModified = "1787614881405.7612";
}
function DashboardDetailRoute() {
  _s();
  const {
    id
  } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
    maxWidth: 720,
    mx: "auto",
    pt: 4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { spacing: 2, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "overline", color: "text.secondary", sx: {
      letterSpacing: 1.5
    }, children: "Dashboard detail" }, void 0, false, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h1", children: [
      "Dashboard #",
      id
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { sx: {
      p: 3
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body1", sx: {
      lineHeight: 1.7
    }, children: [
      "This route is available at ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
        "/dashboard/",
        id
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.$id.tsx",
        lineNumber: 47,
        columnNumber: 40
      }, this),
      " and can be used to show a specific dashboard record or report."
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.$id.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.$id.tsx",
    lineNumber: 29,
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
//# sourceMappingURL=/build/routes/dashboard.$id-CJNM2AJ2.js.map
