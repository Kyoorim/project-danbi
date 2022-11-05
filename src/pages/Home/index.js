import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../api';

import Circle from '../../components/Circle';

const Home = () => {
  const navigate = useNavigate();

  const onSocialClick = async (e) => {
    try {
      await apiService.SocialLogin(e);
      alert('로그인 성공');
      navigate('/main');
    } catch {
      alert('로그인이 실패했습니다');
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
