import React, { useState, useEffect } from 'react';
import * as S from './style';
import { query, onSnapshot, collection, orderBy } from 'firebase/firestore';
import { dbService } from '../../config';
// import BoardBox from '../../components/BoardBox';

const Board = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const q = query(collection(dbService, 'list'), orderBy('createdAt'));
    onSnapshot(q, (snapshot) => {
      const listArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(listArr);
      setList(listArr);
    });
  }, []);

  return (
    <>
      <div>
        {list.map((post) => (
          //   <BoardBox key={post.id} list={list} />
          <S.Container key={post.id}>
            <div>
              <span>{post.title}</span>
              <span>{post.body}</span>
            </div>
            <div>{post.author}</div>
            <div>{post.createdAt}</div>
          </S.Container>
        ))}
      </div>
    </>
  );
};

export default Board;
