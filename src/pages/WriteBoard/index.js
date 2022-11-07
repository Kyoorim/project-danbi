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
    /* <section>
        <div onClick={() => navigate('/board')}>게시판 바로가기</div>
      </section>
      <S.Form onSubmit={onSubmit}>
        <S.Title>
          <label htmlFor="author">작성자</label>{' '}
          <span>{userObj.displayName}</span>
          <label htmlFor="title">제목</label>
          <input
            value={title}
            type="title"
            placeholder="제목을 쓰세요"
            onChange={onTitleChange}
          ></input>
        </S.Title>
        <S.Body>
          <label htmlFor="body">내용</label>
          <textarea
            rows="12"
            id="body"
            type="text"
            value={body}
            onChange={onBodyChange}
            placeholder="내용을 쓰세요"
          ></textarea>
        </S.Body>
        <button type="submit">게시글 등록</button>
      </S.Form> */
    // </S.Wrapper>
  );
};

export default WriteBoard;
