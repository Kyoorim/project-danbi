import React, { useState, useEffect } from 'react';
import { query, onSnapshot, collection, orderBy } from 'firebase/firestore';
import { dbService } from '../../config';
import BoardBox from '../../components/BoardBox';

const Board = ({ userObj }) => {
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

  return (
    <div>
      {list.map((post) => (
        <BoardBox
          key={post.id}
          list={post}
          isOwner={post.creatorId === userObj?.uid}
        />
      ))}
    </div>
  );
};

export default Board;
