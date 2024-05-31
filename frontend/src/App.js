import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './theme/DarkTheme';
import Router from './components/router/Router';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Router />
    </ThemeProvider>
  )
}

export default App;
