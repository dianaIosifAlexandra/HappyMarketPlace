import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3366cc',
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
  typography: {
    subtitle2: {
      fontSize: '1rem',
    },
  },
});

export default theme;
