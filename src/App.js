import React, { useEffect, useState } from 'react';
import Router from './Router';
import { authService } from './config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { GlobalStyle } from './styles/GlobalStyle';

export default function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);

        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      {init ? (
        <Router isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        '로딩중...'
      )}
    </>
  );
}
