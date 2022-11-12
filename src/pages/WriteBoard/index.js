import React, { useState } from 'react';
import * as S from './style';

import { apiService } from '../../api';

const WriteBoard = ({ userObj }) => {
  const [text, setText] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const textObj = {
      text: text,
      creatorId: userObj.uid,
      author: userObj.displayName,
      createdAt: Date.now(),
      postedAt:
        new Date().getFullYear() +
        '-' +
        (new Date().getMonth() + 1) +
        '-' +
        new Date().getDate() +
        ' ' +
        new Date().getHours() +
        ':' +
        new Date().getMinutes(),
    };

    try {
      await apiService.PutPost(textObj);
      alert('성공적으로 등록되었습니다');
      setText('');
    } catch {
      alert('등록에 실패했습니다');
    }
  };

  const onTextChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  // const onBodyChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setBody(value);
  // };

  return (
    <S.Form onSubmit={onSubmit}>
      <div></div>
      <section>
        <textarea
          value={text}
          type="text"
          placeholder="내용을 쓰세요"
          onChange={onTextChange}
        ></textarea>
        <button type="submit">등록</button>
      </section>
    </S.Form>
  );
};

export default WriteBoard;
