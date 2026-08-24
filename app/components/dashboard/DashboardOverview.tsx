import { StatCard } from '~/components/dashboard/StatCard';

const stats = [
  { label: 'Monthly Revenue', value: '$184.2K', change: '+14.3%', tone: 'positive' as const },
  { label: 'New Customers', value: '3,482', change: '+9.8%', tone: 'positive' as const },
  { label: 'Avg. Order Value', value: '$214', change: '+2.1%', tone: 'neutral' as const },
  { label: 'Churn Rate', value: '1.9%', change: '-0.4%', tone: 'warning' as const },
];

const channels = [
  { name: 'Organic', value: 42, color: '#2563eb' },
  { name: 'Paid Search', value: 28, color: '#8b5cf6' },
  { name: 'Social', value: 18, color: '#10b981' },
  { name: 'Referral', value: 12, color: '#f59e0b' },
];

const sales = [
  { region: 'North America', revenue: '$72K', growth: '+18.4%' },
  { region: 'Europe', revenue: '$58K', growth: '+12.1%' },
  { region: 'APAC', revenue: '$39K', growth: '+9.6%' },
  { region: 'LATAM', revenue: '$15K', growth: '+6.7%' },
];

export function DashboardOverview() {
  return (
    <>
      <section style={{ marginBottom: 24 }}>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6b7280',
          }}
        >
          Overview
        </p>
        <h1 style={{ margin: '8px 0 0', fontSize: 36 }}>Dashboard</h1>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          marginBottom: 24,
        }}
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(280px, 0.8fr)',
          gap: 16,
        }}
      >
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: 16,
            padding: 20,
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          }}
        >
          <h2 style={{ margin: '0 0 18px', fontSize: 20 }}>Traffic by channel</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {channels.map((channel) => (
              <div key={channel.name}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                    fontSize: 14,
                    color: '#374151',
                  }}
                >
                  <span>{channel.name}</span>
                  <span>{channel.value}%</span>
                </div>
                <div
                  style={{
                    height: 10,
                    width: '100%',
                    background: '#e5e7eb',
                    borderRadius: 999,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${channel.value}%`,
                      height: '100%',
                      borderRadius: 999,
                      background: channel.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: 16,
            padding: 20,
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          }}
        >
          <h2 style={{ margin: '0 0 18px', fontSize: 20 }}>Regional performance</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {sales.map((sale) => (
              <div
                key={sale.region}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid #f3f4f6',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{sale.region}</div>
                  <div style={{ color: '#6b7280', fontSize: 12 }}>{sale.revenue}</div>
                </div>
                <span
                  style={{
                    color: '#059669',
                    background: '#ecfdf5',
                    borderRadius: 999,
                    padding: '6px 10px',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {sale.growth}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
