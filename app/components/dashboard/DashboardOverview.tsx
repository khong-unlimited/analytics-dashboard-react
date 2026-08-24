import { Box, Card, Stack, Typography } from '@mui/material';

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
    <Stack spacing={3}>
      <Box>
        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.5 }}>
          Overview
        </Typography>
        <Typography variant="h1">Dashboard</Typography>
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

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.5fr 1fr' }, gap: 2 }}>
        <Card sx={{ p: 2.5 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Traffic by channel
          </Typography>

          <Stack spacing={2}>
            {channels.map((channel) => (
              <Box key={channel.name}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">{channel.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {channel.value}%
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    height: 10,
                    borderRadius: 999,
                    backgroundColor: 'grey.200',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      width: `${channel.value}%`,
                      background: channel.color,
                      borderRadius: 999,
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Stack>
        </Card>

        <Card sx={{ p: 2.5 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Regional performance
          </Typography>
          <Stack spacing={2}>
            {sales.map((sale) => (
              <Stack key={sale.region} direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {sale.region}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {sale.revenue}
                  </Typography>
                </Box>
                <Box
                  component="span"
                  sx={{
                    backgroundColor: 'success.light',
                    color: 'success.dark',
                    borderRadius: 999,
                    px: 1.1,
                    py: 0.5,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {sale.growth}
                </Box>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Box>
    </Stack>
  );
}
