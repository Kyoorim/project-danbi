import React from 'react';
import * as S from './style';

const AnswerBox = ({ answer }) => {
  return (
    <S.Container>
      <h1>{answer.title}</h1>
      <p>{answer.intro}</p>
      {!answer.intro && (
        <>
          <h2>{answer.name1}</h2>
          <h3>{answer.content1}</h3>
          <h2>{answer.name2}</h2>
          <h3>{answer.content2}</h3>
          <h2>{answer.name3}</h2>
          <h3>{answer.content3}</h3>
        </>
      )}
    </S.Container>
  );
};

export default AnswerBox;
