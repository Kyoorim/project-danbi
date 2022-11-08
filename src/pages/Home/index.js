import React, { useState } from 'react';
import * as S from './style';
import Profil from '../../components/Profil';
import Main from '../../components/Main';
import Nav from '../../components/Nav';

const Home = ({ userObj, isLoggedIn }) => {
  const [selectedBoard, setSelectedBoard] = useState(true);
  const [selectedMbti, setSelectedMbti] = useState(false);

  return (
    <>
      <S.Wrapper>
        <Profil isLoggedIn={isLoggedIn} userObj={userObj} />
        <Main
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          selectedBoard={selectedBoard}
          selectedMbti={selectedMbti}
        />
        <Nav selectedBoard={selectedBoard} selectedMbti={selectedMbti} />
      </S.Wrapper>
    </>
  );
};

export default Home;
