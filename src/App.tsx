import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./pages/user/user";
import Homepage from "./pages/index/homepage";
import {ThemeProvider} from "@mui/styles";
import theme from "./theme/theme";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/user" element={<User />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
