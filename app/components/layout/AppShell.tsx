import type { ReactNode } from 'react';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6', color: '#111827' }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        background: '#111827',
        color: '#fff',
      }}>
        <div style={{ fontWeight: 700, fontSize: 20 }}>PulseBoard</div>
        <nav style={{ display: 'flex', gap: 16, fontSize: 14 }}>
          <span>Overview</span>
          <span>Reports</span>
          <span>Customers</span>
          <span>Settings</span>
        </nav>
      </header>
      <main style={{ padding: '1.5rem' }}>{children}</main>
    </div>
  );
}
