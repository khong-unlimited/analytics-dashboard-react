var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, _loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/app.css?url
var app_default = "/build/_assets/app-M3P4P5CJ.css?url";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: app_default }], meta = () => [{ title: "Analytics Dashboard" }];
function Root() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});

// app/components/layout/AppShell.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function AppShell({ children }) {
  return /* @__PURE__ */ jsxDEV3("div", { style: { minHeight: "100vh", background: "#f3f4f6", color: "#111827" }, children: [
    /* @__PURE__ */ jsxDEV3("header", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 1.5rem",
      background: "#111827",
      color: "#fff"
    }, children: [
      /* @__PURE__ */ jsxDEV3("div", { style: { fontWeight: 700, fontSize: 20 }, children: "PulseBoard" }, void 0, !1, {
        fileName: "app/components/layout/AppShell.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("nav", { style: { display: "flex", gap: 16, fontSize: 14 }, children: [
        /* @__PURE__ */ jsxDEV3("span", { children: "Overview" }, void 0, !1, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("span", { children: "Reports" }, void 0, !1, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("span", { children: "Customers" }, void 0, !1, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("span", { children: "Settings" }, void 0, !1, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout/AppShell.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("main", { style: { padding: "1.5rem" }, children }, void 0, !1, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout/AppShell.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/dashboard/StatCard.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function StatCard({ label, value, change, tone = "positive" }) {
  let toneClass = {
    positive: "#10b981",
    neutral: "#3b82f6",
    warning: "#f59e0b"
  }[tone];
  return /* @__PURE__ */ jsxDEV4("div", { style: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "1rem 1.25rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
  }, children: [
    /* @__PURE__ */ jsxDEV4("div", { style: { color: "#6b7280", fontSize: 14 }, children: label }, void 0, !1, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { style: { fontSize: 28, fontWeight: 700, margin: "0.5rem 0" }, children: value }, void 0, !1, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { style: { color: toneClass, fontSize: 13, fontWeight: 600 }, children: change }, void 0, !1, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/StatCard.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var stats = [
  { label: "Total Revenue", value: "$128.4K", change: "+12.4%", tone: "positive" },
  { label: "Active Users", value: "24.8K", change: "+8.1%", tone: "neutral" },
  { label: "Conversion Rate", value: "4.82%", change: "+1.2%", tone: "positive" },
  { label: "Avg. Session", value: "18m 42s", change: "-0.8%", tone: "warning" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV5(AppShell, { children: [
    /* @__PURE__ */ jsxDEV5("section", { style: { marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxDEV5("h1", { style: { margin: 0, fontSize: 36 }, children: "Analytics Dashboard" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { style: { margin: "8px 0 0", color: "#6b7280" }, children: "Track performance, engagement, and key business metrics." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5(
      "section",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16
        },
        children: stats.map((stat) => /* @__PURE__ */ jsxDEV5(StatCard, { ...stat }, stat.label, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/first.tsx
var first_exports = {};
__export(first_exports, {
  default: () => First,
  meta: () => meta2
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta2 = () => [{ title: "First Page" }];
function First() {
  return /* @__PURE__ */ jsxDEV6("div", { style: { padding: 20 }, children: "hello world" }, void 0, !1, {
    fileName: "app/routes/first.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-36KHQW4L.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-NR672UOL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-STV4APCW.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HR2GBPDE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6HREJAMM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/first": { id: "routes/first", parentId: "root", path: "first", index: void 0, caseSensitive: void 0, module: "/build/routes/first-OWGHRFN6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "5988e7e5", hmr: { runtime: "/build/_shared/chunk-STV4APCW.js", timestamp: 1787603740504 }, url: "/build/manifest-5988E7E5.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/first": {
    id: "routes/first",
    parentId: "root",
    path: "first",
    index: void 0,
    caseSensitive: void 0,
    module: first_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
