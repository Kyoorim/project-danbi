import React, { useState, useEffect } from 'react';
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
      createdAt: Date.now(),
      creatorId: userObj.uid,
    };

    await addDoc(collection(dbService, 'list'), textObj);
    setTitle('');
    setBody('');
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
      <S.Form onSubmit={onSubmit}>
        <S.Title>
          <label htmlFor="title">제목</label>
          <div>
            Be specific and imagine you’re asking a question to another person
          </div>
          <input
            value={title}
            type="title"
            placeholder="제목을 쓰세요"
            onChange={onTitleChange}
          ></input>
        </S.Title>
        <S.Body>
          <label htmlFor="body">내용</label>
          <div>
            Include all the information someone would need to answer your
            question
          </div>
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
