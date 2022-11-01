import React, { useEffect, useState } from 'react';
import Router from './Router';
// import { authService } from './config';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { GlobalStyle } from './styles/GlobalStyle';

export default function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); //useState가 로그인 여부 알 수 있게 됨
  const [userObj, setUserObj] = useState(null); // 작성자가 누구인지 알게해줌

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // setIsLoggedIn(true);
        // const uid = user.uid;

        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) =>
            updateProfile(user, { displayName: user.displayName }),
        }); // 사용자가 로그인하면 로그인한 정보를 따른데다 쓸 수 있게 저장하는 것!
      } else {
        // setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  // const refreshUser = () => {
  //   const user = authService.currentUser;
  //   setUserObj({
  //     displayName: user.displayName,
  //     uid: user.uid,
  //     updateProfile: (args) =>
  //       updateProfile(user, { displayName: user.displayName }),
  //   });
  // };

  return (
    <React.StrictMode>
      <GlobalStyle />
      {init ? (
        <Router
          // refreshUser={refreshUser}
          // isLoggedIn={isLoggedIn}
          userObj={userObj}
        />
      ) : (
        '업데이트 반영중...'
      )}
    </React.StrictMode>
  );
}
