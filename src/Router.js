import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import WriteBoard from './pages/WriteBoard';
import Board from './pages/Board';

export default function Router({ userObj, isLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home userObj={userObj} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/main"
          element={<Main userObj={userObj} isLoggedIn={isLoggedIn} />}
        />
        {isLoggedIn && (
          <Route path="/write" element={<WriteBoard userObj={userObj} />} />
        )}
        <Route path="/board" element={<Board userObj={userObj} />} />
      </Routes>
    </BrowserRouter>
  );
}
