import { FC } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./utils/GlobalStyles";
import { theme } from "./utils/constants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';

const App: FC = () => {

  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
    </>
    </ThemeProvider>
  )
}

export default App;
