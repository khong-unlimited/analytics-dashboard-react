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
import { CssBaseline, ThemeProvider } from "@mui/material";

// app/theme.ts
import { createTheme } from "@mui/material/styles";
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
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var meta = () => [{ title: "Analytics Dashboard" }];
function Root() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(ThemeProvider, { theme: appTheme, children: [
        /* @__PURE__ */ jsxDEV2(CssBaseline, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._index.tsx
var dashboard_index_exports = {};
__export(dashboard_index_exports, {
  default: () => DashboardIndexRoute
});

// app/components/dashboard/DashboardOverview.tsx
import { Box, Card as Card2, Stack as Stack2, Typography as Typography2 } from "@mui/material";

// app/components/dashboard/StatCard.tsx
import { Card, Stack, Typography } from "@mui/material";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function StatCard({ label, value, change, tone = "positive" }) {
  let toneColor = {
    positive: "success.main",
    neutral: "primary.main",
    warning: "warning.main"
  }[tone];
  return /* @__PURE__ */ jsxDEV3(Card, { sx: { p: 2.5, height: "100%" }, children: /* @__PURE__ */ jsxDEV3(Stack, { spacing: 1, children: [
    /* @__PURE__ */ jsxDEV3(Typography, { variant: "body2", color: "text.secondary", children: label }, void 0, !1, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(Typography, { variant: "h3", sx: { fontWeight: 700 }, children: value }, void 0, !1, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(Typography, { variant: "caption", sx: { color: toneColor, fontWeight: 700 }, children: change }, void 0, !1, {
      fileName: "app/components/dashboard/StatCard.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/StatCard.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/StatCard.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/dashboard/DashboardOverview.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var stats = [
  { label: "Monthly Revenue", value: "$184.2K", change: "+14.3%", tone: "positive" },
  { label: "New Customers", value: "3,482", change: "+9.8%", tone: "positive" },
  { label: "Avg. Order Value", value: "$214", change: "+2.1%", tone: "neutral" },
  { label: "Churn Rate", value: "1.9%", change: "-0.4%", tone: "warning" }
], channels = [
  { name: "Organic", value: 42, color: "#2563eb" },
  { name: "Paid Search", value: 28, color: "#8b5cf6" },
  { name: "Social", value: 18, color: "#10b981" },
  { name: "Referral", value: 12, color: "#f59e0b" }
], sales = [
  { region: "North America", revenue: "$72K", growth: "+18.4%" },
  { region: "Europe", revenue: "$58K", growth: "+12.1%" },
  { region: "APAC", revenue: "$39K", growth: "+9.6%" },
  { region: "LATAM", revenue: "$15K", growth: "+6.7%" }
];
function DashboardOverview() {
  return /* @__PURE__ */ jsxDEV4(Stack2, { spacing: 3, children: [
    /* @__PURE__ */ jsxDEV4(Box, { children: [
      /* @__PURE__ */ jsxDEV4(Typography2, { variant: "overline", color: "text.secondary", sx: { letterSpacing: 1.5 }, children: "Overview" }, void 0, !1, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Typography2, { variant: "h1", children: "Dashboard" }, void 0, !1, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(
      Box,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" },
          gap: 2
        },
        children: stats.map((stat) => /* @__PURE__ */ jsxDEV4(Box, { children: /* @__PURE__ */ jsxDEV4(StatCard, { ...stat }, void 0, !1, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) }, stat.label, !1, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV4(Box, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.5fr 1fr" }, gap: 2 }, children: [
      /* @__PURE__ */ jsxDEV4(Card2, { sx: { p: 2.5 }, children: [
        /* @__PURE__ */ jsxDEV4(Typography2, { variant: "h2", sx: { mb: 2 }, children: "Traffic by channel" }, void 0, !1, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4(Stack2, { spacing: 2, children: channels.map((channel) => /* @__PURE__ */ jsxDEV4(Box, { children: [
          /* @__PURE__ */ jsxDEV4(Stack2, { direction: "row", sx: { justifyContent: "space-between", mb: 1 }, children: [
            /* @__PURE__ */ jsxDEV4(Typography2, { variant: "body2", children: channel.name }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 60,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4(Typography2, { variant: "body2", color: "text.secondary", children: [
              channel.value,
              "%"
            ] }, void 0, !0, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 61,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4(
            Box,
            {
              sx: {
                height: 10,
                borderRadius: 999,
                backgroundColor: "grey.200",
                overflow: "hidden"
              },
              children: /* @__PURE__ */ jsxDEV4(
                Box,
                {
                  sx: {
                    height: "100%",
                    width: `${channel.value}%`,
                    background: channel.color,
                    borderRadius: 999
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/dashboard/DashboardOverview.tsx",
                  lineNumber: 73,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 65,
              columnNumber: 17
            },
            this
          )
        ] }, channel.name, !0, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Card2, { sx: { p: 2.5 }, children: [
        /* @__PURE__ */ jsxDEV4(Typography2, { variant: "h2", sx: { mb: 2 }, children: "Regional performance" }, void 0, !1, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4(Stack2, { spacing: 2, children: sales.map((sale) => /* @__PURE__ */ jsxDEV4(Stack2, { direction: "row", sx: { justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxDEV4(Box, { children: [
            /* @__PURE__ */ jsxDEV4(Typography2, { variant: "subtitle1", sx: { fontWeight: 600 }, children: sale.region }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 95,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4(Typography2, { variant: "caption", color: "text.secondary", children: sale.revenue }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 98,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardOverview.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4(
            Box,
            {
              component: "span",
              sx: {
                backgroundColor: "success.light",
                color: "success.dark",
                borderRadius: 999,
                px: 1.1,
                py: 0.5,
                fontSize: 12,
                fontWeight: 700
              },
              children: sale.growth
            },
            void 0,
            !1,
            {
              fileName: "app/components/dashboard/DashboardOverview.tsx",
              lineNumber: 102,
              columnNumber: 17
            },
            this
          )
        ] }, sale.region, !0, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/components/dashboard/DashboardOverview.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/DashboardOverview.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/DashboardOverview.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/DashboardOverview.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._index.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function DashboardIndexRoute() {
  return /* @__PURE__ */ jsxDEV5(DashboardOverview, {}, void 0, !1, {
    fileName: "app/routes/dashboard._index.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/dashboard.$id.tsx
var dashboard_id_exports = {};
__export(dashboard_id_exports, {
  default: () => DashboardDetailRoute
});
import { useParams } from "@remix-run/react";
import { Box as Box2, Card as Card3, Stack as Stack3, Typography as Typography3 } from "@mui/material";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function DashboardDetailRoute() {
  let { id } = useParams();
  return /* @__PURE__ */ jsxDEV6(Box2, { sx: { maxWidth: 720, mx: "auto", pt: 4 }, children: /* @__PURE__ */ jsxDEV6(Stack3, { spacing: 2, children: [
    /* @__PURE__ */ jsxDEV6(Typography3, { variant: "overline", color: "text.secondary", sx: { letterSpacing: 1.5 }, children: "Dashboard detail" }, void 0, !1, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6(Typography3, { variant: "h1", children: [
      "Dashboard #",
      id
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6(Card3, { sx: { p: 3 }, children: /* @__PURE__ */ jsxDEV6(Typography3, { variant: "body1", sx: { lineHeight: 1.7 }, children: [
      "This route is available at ",
      /* @__PURE__ */ jsxDEV6("strong", { children: [
        "/dashboard/",
        id
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.$id.tsx",
        lineNumber: 16,
        columnNumber: 40
      }, this),
      " and can be used to show a specific dashboard record or report."
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.$id.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.$id.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.$id.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardLayout
});
import { Outlet as Outlet2 } from "@remix-run/react";

// app/components/layout/AppShell.tsx
import { AppBar, Box as Box3, Container, Stack as Stack4, Toolbar, Typography as Typography4 } from "@mui/material";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function AppShell({ children }) {
  return /* @__PURE__ */ jsxDEV7(Box3, { sx: { minHeight: "100vh", backgroundColor: "background.default", color: "text.primary" }, children: [
    /* @__PURE__ */ jsxDEV7(AppBar, { position: "static", color: "transparent", children: /* @__PURE__ */ jsxDEV7(Toolbar, { sx: { justifyContent: "space-between", px: 3, py: 1.5 }, children: [
      /* @__PURE__ */ jsxDEV7(Typography4, { variant: "h6", sx: { fontWeight: 700, letterSpacing: 0.2 }, children: "PulseBoard" }, void 0, !1, {
        fileName: "app/components/layout/AppShell.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(Stack4, { direction: "row", spacing: 3, sx: { color: "text.secondary", fontSize: 14 }, children: [
        /* @__PURE__ */ jsxDEV7(Box3, { component: "span", children: "Overview" }, void 0, !1, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(Box3, { component: "span", children: "Reports" }, void 0, !1, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(Box3, { component: "span", children: "Customers" }, void 0, !1, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(Box3, { component: "span", children: "Settings" }, void 0, !1, {
          fileName: "app/components/layout/AppShell.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout/AppShell.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(Container, { maxWidth: "lg", sx: { py: 4 }, children: /* @__PURE__ */ jsxDEV7(Box3, { component: "main", sx: { width: "100%" }, children }, void 0, !1, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/layout/AppShell.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(
      Box3,
      {
        component: "footer",
        sx: {
          textAlign: "center",
          py: 3,
          color: "text.secondary",
          borderTop: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper"
        },
        children: "\xA9 2026 PulseBoard \u2022 Insights for every team"
      },
      void 0,
      !1,
      {
        fileName: "app/components/layout/AppShell.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/layout/AppShell.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function DashboardLayout() {
  return /* @__PURE__ */ jsxDEV8(AppShell, { children: /* @__PURE__ */ jsxDEV8(Outlet2, {}, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Box as Box4, Stack as Stack5, Typography as Typography5 } from "@mui/material";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var stats2 = [
  { label: "Total Revenue", value: "$128.4K", change: "+12.4%", tone: "positive" },
  { label: "Active Users", value: "24.8K", change: "+8.1%", tone: "neutral" },
  { label: "Conversion Rate", value: "4.82%", change: "+1.2%", tone: "positive" },
  { label: "Avg. Session", value: "18m 42s", change: "-0.8%", tone: "warning" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV9(AppShell, { children: /* @__PURE__ */ jsxDEV9(Stack5, { spacing: 3, children: [
    /* @__PURE__ */ jsxDEV9(Box4, { children: [
      /* @__PURE__ */ jsxDEV9(Typography5, { variant: "h1", children: "Analytics Dashboard" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9(Typography5, { variant: "body1", color: "text.secondary", sx: { mt: 1 }, children: "Track performance, engagement, and key business metrics." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9(
      Box4,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" },
          gap: 2
        },
        children: stats2.map((stat) => /* @__PURE__ */ jsxDEV9(Box4, { children: /* @__PURE__ */ jsxDEV9(StatCard, { ...stat }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this) }, stat.label, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/first.tsx
var first_exports = {};
__export(first_exports, {
  default: () => First,
  meta: () => meta2
});
import { Box as Box5, Typography as Typography6 } from "@mui/material";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta2 = () => [{ title: "First Page" }];
function First() {
  return /* @__PURE__ */ jsxDEV10(Box5, { sx: { p: 3 }, children: /* @__PURE__ */ jsxDEV10(Typography6, { variant: "body1", children: "hello world" }, void 0, !1, {
    fileName: "app/routes/first.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/first.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-VHDK67Z3.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-MCLTYUNI.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-STV4APCW.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ICXFTQ7O.js", imports: ["/build/_shared/chunk-K5PCVDWB.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-R6QKWEMO.js", imports: ["/build/_shared/chunk-XFSLEBCM.js", "/build/_shared/chunk-N26YYMR5.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-EFNB23OK.js", imports: ["/build/_shared/chunk-N26YYMR5.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.$id": { id: "routes/dashboard.$id", parentId: "routes/dashboard", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.$id-IUXEKKYL.js", imports: ["/build/_shared/chunk-K5PCVDWB.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard._index": { id: "routes/dashboard._index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard._index-CPDIIK73.js", imports: ["/build/_shared/chunk-XFSLEBCM.js", "/build/_shared/chunk-K5PCVDWB.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/first": { id: "routes/first", parentId: "root", path: "first", index: void 0, caseSensitive: void 0, module: "/build/routes/first-I5YNMHBZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b93e6491", hmr: { runtime: "/build/_shared/chunk-STV4APCW.js", timestamp: 1787614345554 }, url: "/build/manifest-B93E6491.js" };

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
  "routes/dashboard._index": {
    id: "routes/dashboard._index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_index_exports
  },
  "routes/dashboard.$id": {
    id: "routes/dashboard.$id",
    parentId: "routes/dashboard",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_id_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
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
