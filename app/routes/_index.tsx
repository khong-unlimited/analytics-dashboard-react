import { AppShell } from '~/components/layout/AppShell';
import { StatCard } from '~/components/dashboard/StatCard';

const stats = [
  { label: 'Total Revenue', value: '$128.4K', change: '+12.4%', tone: 'positive' as const },
  { label: 'Active Users', value: '24.8K', change: '+8.1%', tone: 'neutral' as const },
  { label: 'Conversion Rate', value: '4.82%', change: '+1.2%', tone: 'positive' as const },
  { label: 'Avg. Session', value: '18m 42s', change: '-0.8%', tone: 'warning' as const },
];

export default function Index() {
  return (
    <AppShell>
      <section style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 36 }}>Analytics Dashboard</h1>
        <p style={{ margin: '8px 0 0', color: '#6b7280' }}>
          Track performance, engagement, and key business metrics.
        </p>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>
    </AppShell>
  );
}
