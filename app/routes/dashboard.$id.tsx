import { useParams } from '@remix-run/react';

export default function DashboardDetailRoute() {
  const { id } = useParams();

  return (
    <section style={{ maxWidth: 720, margin: '0 auto', paddingTop: 32 }}>
      <p style={{ margin: 0, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7280' }}>
        Dashboard detail
      </p>
      <h1 style={{ margin: '8px 0 16px', fontSize: 32 }}>Dashboard #{id}</h1>
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 16,
          padding: 24,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        }}
      >
        <p style={{ margin: 0, color: '#374151', lineHeight: 1.6 }}>
          This route is available at <strong>/dashboard/{id}</strong> and can be used to show a
          specific dashboard record or report.
        </p>
      </div>
    </section>
  );
}
