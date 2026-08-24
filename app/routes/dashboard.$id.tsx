import { useParams } from '@remix-run/react';
import { Box, Card, Stack, Typography } from '@mui/material';

export default function DashboardDetailRoute() {
  const { id } = useParams();

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto', pt: 4 }}>
      <Stack spacing={2}>
        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.5 }}>
          Dashboard detail
        </Typography>
        <Typography variant="h1">Dashboard #{id}</Typography>
        <Card sx={{ p: 3 }}>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            This route is available at <strong>/dashboard/{id}</strong> and can be used to show a
            specific dashboard record or report.
          </Typography>
        </Card>
      </Stack>
    </Box>
  );
}
