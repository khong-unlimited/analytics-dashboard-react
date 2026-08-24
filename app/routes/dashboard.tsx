import { Outlet } from '@remix-run/react';

import { AppShell } from '~/components/layout/AppShell';

export default function DashboardLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
