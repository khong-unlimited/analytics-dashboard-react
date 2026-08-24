import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Meta, Links, Outlet, ScrollRestoration, Scripts } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, _loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const appStylesHref = "/assets/app-82T3T9TH.css";
const links = () => [{ rel: "stylesheet", href: appStylesHref }];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
function AppShell({ children }) {
  return /* @__PURE__ */ jsxs("div", { style: { minHeight: "100vh", background: "#f3f4f6", color: "#111827" }, children: [
    /* @__PURE__ */ jsxs("header", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 1.5rem",
      background: "#111827",
      color: "#fff"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: { fontWeight: 700, fontSize: 20 }, children: "PulseBoard" }),
      /* @__PURE__ */ jsxs("nav", { style: { display: "flex", gap: 16, fontSize: 14 }, children: [
        /* @__PURE__ */ jsx("span", { children: "Overview" }),
        /* @__PURE__ */ jsx("span", { children: "Reports" }),
        /* @__PURE__ */ jsx("span", { children: "Customers" }),
        /* @__PURE__ */ jsx("span", { children: "Settings" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("main", { style: { padding: "1.5rem" }, children })
  ] });
}
function StatCard({ label, value, change, tone = "positive" }) {
  const toneClass = {
    positive: "#10b981",
    neutral: "#3b82f6",
    warning: "#f59e0b"
  }[tone];
  return /* @__PURE__ */ jsxs("div", { style: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "1rem 1.25rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
  }, children: [
    /* @__PURE__ */ jsx("div", { style: { color: "#6b7280", fontSize: 14 }, children: label }),
    /* @__PURE__ */ jsx("div", { style: { fontSize: 28, fontWeight: 700, margin: "0.5rem 0" }, children: value }),
    /* @__PURE__ */ jsx("div", { style: { color: toneClass, fontSize: 13, fontWeight: 600 }, children: change })
  ] });
}
const stats = [
  { label: "Total Revenue", value: "$128.4K", change: "+12.4%", tone: "positive" },
  { label: "Active Users", value: "24.8K", change: "+8.1%", tone: "neutral" },
  { label: "Conversion Rate", value: "4.82%", change: "+1.2%", tone: "positive" },
  { label: "Avg. Session", value: "18m 42s", change: "-0.8%", tone: "warning" }
];
function Index() {
  return /* @__PURE__ */ jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxs("section", { style: { marginBottom: 24 }, children: [
      /* @__PURE__ */ jsx("h1", { style: { margin: 0, fontSize: 36 }, children: "Analytics Dashboard" }),
      /* @__PURE__ */ jsx("p", { style: { margin: "8px 0 0", color: "#6b7280" }, children: "Track performance, engagement, and key business metrics." })
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16
        },
        children: stats.map((stat) => /* @__PURE__ */ jsx(StatCard, { ...stat }, stat.label))
      }
    )
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CVPF5pWH.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-vsE2zdOU.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-BLidMkgP.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-vsE2zdOU.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-j645AyiF.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] } }, "url": "/assets/manifest-d8bda136.js", "version": "d8bda136" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
