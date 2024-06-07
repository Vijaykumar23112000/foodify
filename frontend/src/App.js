import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './theme/DarkTheme';
import Router from './components/router/Router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from './components/redux/authentication/Action';
import { findCartAction } from './components/redux/cart/Action';

function App() {

  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  
  const { authentication } = useSelector(store => store)

  useEffect(() => {
    dispatch(getUserAction(authentication.token || token))
    dispatch(findCartAction(token))
  }, [authentication.token])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App;
