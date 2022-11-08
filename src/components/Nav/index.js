import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const Nav = (selectedBoard, selectedMbti) => {
  const navigate = useNavigate();

  const directToMbti = () => {
    selectedBoard(false);
    selectedMbti(true);
    navigate('/mbti');
  };
  return (
    <>
      <S.Wrapper>
        <div>게시판</div>
        <div onClick={directToMbti}>MBTI 보기</div>
      </S.Wrapper>
    </>
  );
};

export default Nav;
