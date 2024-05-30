import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { darkTheme } from './theme/DarkTheme';
import Cart from './components/cart/Cart';
// import RestaurantDetails from './components/restaurant/RestaurantDetails';
// import Home from './components/home/Home'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      <Cart />
    </ThemeProvider>
  )
}

export default App;
