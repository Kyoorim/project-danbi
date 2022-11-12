import React from 'react';
import * as S from './style';
import Nav from '../Nav';

const Main = ({ children }) => {
  return (
    <S.ContentContainer>
      <h1>
        <span>⭐️프론트엔드 개발자 이규림의 미니포트폴리오⭐️</span>
      </h1>
      {children}
      <Nav />
    </S.ContentContainer>
  );
};

export default Main;
