import type { ReactNode } from 'react';
import { AppBar, Box, Container, Stack, Toolbar, Typography } from '@mui/material';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', color: 'text.primary' }}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: 'space-between', px: 3, py: 1.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.2 }}>
            PulseBoard
          </Typography>

          <Stack direction="row" spacing={3} sx={{ color: 'text.secondary', fontSize: 14 }}>
            <Box component="span">Overview</Box>
            <Box component="span">Reports</Box>
            <Box component="span">Customers</Box>
            <Box component="span">Settings</Box>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box component="main" sx={{ width: '100%' }}>
          {children}
        </Box>
      </Container>

      <Box
        component="footer"
        sx={{
          textAlign: 'center',
          py: 3,
          color: 'text.secondary',
          borderTop: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
        }}
      >
        © 2026 PulseBoard • Insights for every team
      </Box>
    </Box>
  );
}
