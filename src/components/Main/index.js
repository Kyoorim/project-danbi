import React from 'react';
import * as S from './style';
import WriteBoard from '../../pages/WriteBoard';
import Board from '../../pages/Board';
import Mbti from '../Mbti';

const Main = ({ userObj, isLoggedIn, selectedBoard, selectedMbti }) => {
  return (
    <>
      <S.ContentContainer>
        <S.ContentPage>
          <h1>⭐️MBTI 게시판에 오신것을 환영합니ㄷr⭐️</h1>
          <S.ContentBody>
            {selectedBoard && (
              <>
                {isLoggedIn && <WriteBoard userObj={userObj} />}
                <Board userObj={userObj} />
              </>
            )}
            {selectedMbti && <Mbti />}
          </S.ContentBody>
        </S.ContentPage>
      </S.ContentContainer>
    </>
  );
};

export default Main;
