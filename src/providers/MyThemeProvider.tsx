import { createTheme, ThemeProvider } from '@mui/material';
import { ReactElement } from 'react';

export default function AuthGuard(props: { children: ReactElement }) {
  const { children } = props;
  const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            textTransform: 'none',
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
