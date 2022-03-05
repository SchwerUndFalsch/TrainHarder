import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./pages/user/user";
import Homepage from "./pages/index/homepage";

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/user" element={<User />}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
