import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

import { dbService } from '../../config';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';

// const isEmpty = (value) => value.trim() === '';

const WriteBoard = ({ userObj }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, 'list'),
      orderBy('createdAt', 'desc')
    );
    onSnapshot(q, (snapshot) => {
      const listArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(listArr);
      setList(listArr);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    const textObj = {
      title: title,
      body: body,
      creatorId: userObj.uid,
      author: userObj.displayName,
      createdAt:
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

    await addDoc(collection(dbService, 'list'), textObj);

    alert('성공적으로 등록되었습니다');
    navigate('/board');
  };

  const onTitleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };

  const onBodyChange = (event) => {
    const {
      target: { value },
    } = event;
    setBody(value);
  };

  return (
    <S.Wrapper>
      <section>
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
      </S.Form>
    </S.Wrapper>
  );
};

export default WriteBoard;
