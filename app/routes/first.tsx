import type { MetaFunction } from '@remix-run/node';
import { Box, Typography } from '@mui/material';

export const meta: MetaFunction = () => [{ title: 'First Page' }];

export default function First() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="body1">hello world</Typography>
    </Box>
  );
}
