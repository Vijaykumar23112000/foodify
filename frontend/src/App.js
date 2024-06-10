import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from './components/redux/authentication/Action';
import { findCartAction } from './components/redux/cart/Action';
import Router from './components/router/Router';

function App() {

  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const { authentication } = useSelector(store => store)

  useEffect(() => {
    const effectiveToken = authentication.token || token;
    if(effectiveToken){
      dispatch(getUserAction(effectiveToken));
      dispatch(findCartAction(effectiveToken));
    }

  }, [dispatch, authentication.token, token]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App;
