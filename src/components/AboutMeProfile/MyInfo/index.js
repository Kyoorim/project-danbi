import React from 'react';
import * as S from './style';
import profilepic from '../../../asset/profilepic.jpeg';
import { dummyMyInfo } from '../../../asset/dummyMyInfo';
import AnswerBox from '../AnswerBox';

const MyInfo = () => {
  const myinfo = dummyMyInfo;
  return (
    <S.Container>
      <img src={profilepic} />
      {myinfo?.map((el) => (
        <AnswerBox key={el.id} answer={el} />
      ))}
    </S.Container>
  );
};

export default MyInfo;
