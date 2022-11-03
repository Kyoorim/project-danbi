import React from 'react';
import * as S from './style';

import Circle from '../../components/Circle';

const Main = ({ isLoggedIn, userObj }) => {
  return (
    <S.Wrapper>
      <S.Content>
        <Circle>
          <span>MBTI로 알아보는</span>
          <span>내게 맞는 휴대폰 기종</span>
        </Circle>
        <Circle>
          <span>게시판 가기</span>
        </Circle>
      </S.Content>
      {isLoggedIn ? (
        <span>{userObj.displayName}님 환영합니다</span>
      ) : (
        <S.Login>구글 계정으로 로그인하기</S.Login>
      )}
    </S.Wrapper>
  );
};

export default Main;
