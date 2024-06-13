import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from './components/redux/authentication/Action';
import { findCartAction } from './components/redux/cart/Action';
import Router from './components/router/Router';
import { getRestaurantByUserIdAction } from './components/redux/restaurant/Action';

function App() {

  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const { authentication , restaurant } = useSelector(store => store)
  const effectiveToken = authentication.token || token;

  useEffect(() => {
    if (effectiveToken) {
      dispatch(getUserAction(effectiveToken));
      dispatch(findCartAction(effectiveToken));
    }

  }, [dispatch, effectiveToken]);

  useEffect(() => {
      dispatch(getRestaurantByUserIdAction(effectiveToken))
  }, [dispatch , effectiveToken , authentication.user])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App;
