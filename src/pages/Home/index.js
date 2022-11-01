import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

import Circle from '../../components/Circle';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Wrapper>
        <Circle>
          <span>DANBI</span>
        </Circle>
        <S.Login>구글 계정으로 로그인하기</S.Login>
        <S.WithoutLogin onClick={() => navigate('/main')}>
          로그인 없이 입장
        </S.WithoutLogin>
      </S.Wrapper>
    </>
  );
};

export default Home;
