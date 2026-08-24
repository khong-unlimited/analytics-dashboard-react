import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "First Page" }];

export default function First() {
  return <div style={{ padding: 20 }}>hello world</div>;
}
