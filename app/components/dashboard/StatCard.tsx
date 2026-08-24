type StatCardProps = {
  label: string;
  value: string;
  change: string;
  tone?: 'positive' | 'neutral' | 'warning';
};

export function StatCard({ label, value, change, tone = 'positive' }: StatCardProps) {
  const toneClass = {
    positive: '#10b981',
    neutral: '#3b82f6',
    warning: '#f59e0b',
  }[tone];

  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      padding: '1rem 1.25rem',
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    }}>
      <div style={{ color: '#6b7280', fontSize: 14 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700, margin: '0.5rem 0' }}>{value}</div>
      <div style={{ color: toneClass, fontSize: 13, fontWeight: 600 }}>{change}</div>
    </div>
  );
}
