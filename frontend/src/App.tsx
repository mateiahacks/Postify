import { FC } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./utils/GlobalStyles";
import { theme } from "./utils/constants";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Login from './pages/Login';
import Registration from "./pages/Registration";
import Home from "./pages/Home";

const App: FC = () => {
  const { user } = useAppSelector(state => state.auth);


  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={user ? <Navigate to='/'/> : <Login />}/>
        <Route path='/registration' element={user ? <Navigate to='/'/> : <Registration />} />
      </Routes>
    </Router>
    </>
    </ThemeProvider>
  )
}

export default App;
