import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import WriteBoard from './pages/WriteBoard';

export default function Router({ userObj }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<WriteBoard userObj={userObj} />} />
      </Routes>
    </BrowserRouter>
  );
}
