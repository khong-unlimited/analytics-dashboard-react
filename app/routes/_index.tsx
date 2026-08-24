import { Box, Stack, Typography } from '@mui/material';

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
      <Stack spacing={3}>
        <Box>
          <Typography variant="h1">Analytics Dashboard</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Track performance, engagement, and key business metrics.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
            gap: 2,
          }}
        >
          {stats.map((stat) => (
            <Box key={stat.label}>
              <StatCard {...stat} />
            </Box>
          ))}
        </Box>
      </Stack>
    </AppShell>
  );
}
