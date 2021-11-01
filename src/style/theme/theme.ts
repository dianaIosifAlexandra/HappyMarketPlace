import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1d44b8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e60073',
      contrastText: '#fff',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'medium',
      },
    },
    MuiTooltip: {
      defaultProps: {
        placement: 'top',
      },
    },
  },
});

export default theme;
