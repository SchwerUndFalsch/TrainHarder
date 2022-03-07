import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./pages/user/user";
import Homepage from "./pages/index/homepage";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import "@fontsource/league-spartan/500.css";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Layout>
                <CssBaseline />
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
