import { Card, Stack, Typography } from '@mui/material';

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  tone?: 'positive' | 'neutral' | 'warning';
};

export function StatCard({ label, value, change, tone = 'positive' }: StatCardProps) {
  const toneColor = {
    positive: 'success.main',
    neutral: 'primary.main',
    warning: 'warning.main',
  }[tone];

  return (
    <Card sx={{ p: 2.5, height: '100%' }}>
      <Stack spacing={1}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
        <Typography variant="caption" sx={{ color: toneColor, fontWeight: 700 }}>
          {change}
        </Typography>
      </Stack>
    </Card>
  );
}
