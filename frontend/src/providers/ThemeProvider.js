import 'typeface-work-sans';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#791abe',
    },
    secondary: {
      main: '#ffff',
    },
  },
  typography: {
    fontFamily: 'Work Sans',
  },
  textTransform: 'none',
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
