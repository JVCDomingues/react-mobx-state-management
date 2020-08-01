import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#333',
      dark: '#333'
    },
    secondary: {
      main: '#f48fb1',
      light: '#f6a5c0',
      dark: '#aa647b'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f'
    }
  }
})