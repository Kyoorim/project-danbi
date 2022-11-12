import React, { useState, useEffect } from 'react';
import { query, onSnapshot, collection, orderBy } from 'firebase/firestore';
import { dbService } from '../../config';
import BoardBox from '../../components/BoardBox';
import Layout from '../../components/Layout/Layout';
import ProfileBar from '../../components/Layout/ProfileBar';
import ProfileContent from '../../components/ProfileContent';
import Card from '../../components/Layout/Card';
import Main from '../../components/Main';
import WriteBoard from '../WriteBoard';

const Board = ({ userObj, isLoggedIn }) => {
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
    <Layout>
      <ProfileBar>
        <Card>
          <ProfileContent isLoggedIn={isLoggedIn} userObj={userObj} />
        </Card>
      </ProfileBar>
      <Main>
        <Card>
          {isLoggedIn && <WriteBoard userObj={userObj} />}
          {list.map((post) => (
            <BoardBox
              key={post.id}
              list={post}
              isOwner={post.creatorId === userObj?.uid}
            />
          ))}
        </Card>
      </Main>
    </Layout>
  );
};

export default Board;
