import React from 'react';
import * as S from './style';

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <S.BorderWrapper>
        <S.BgWrapper>{children}</S.BgWrapper>
      </S.BorderWrapper>
    </S.Wrapper>
  );
};

export default Layout;
