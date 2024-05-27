import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { darkTheme } from './theme/DarkTheme';
import RestaurantDetails from './components/restaurant/RestaurantDetails';
// import Home from './components/home/Home'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      <RestaurantDetails />
    </ThemeProvider>
  )
}

export default App;
