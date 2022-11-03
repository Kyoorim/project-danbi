import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import Circle from '../../components/Circle';

const Home = ({ userObj }) => {
  const navigate = useNavigate();

  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    try {
      if (name === 'google') {
        provider = new GoogleAuthProvider();
      }
      await signInWithPopup(authService, provider);
      navigate('/main');
      console.log(userObj);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <S.Wrapper>
        <Circle>
          <span>DANBI</span>
        </Circle>
        <button name="google" onClick={onSocialClick}>
          구글 계정으로 로그인하기
        </button>
        <S.WithoutLogin onClick={() => navigate('/main')}>
          로그인 없이 입장
        </S.WithoutLogin>
      </S.Wrapper>
    </>
  );
};

export default Home;
