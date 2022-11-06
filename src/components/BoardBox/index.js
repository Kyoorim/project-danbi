import React, { useState } from 'react';
import { dbService } from '../../config';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

const BoardBox = ({ list, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(list.title);
  const [newBody, setNewBody] = useState(list.body);

  const PostRef = doc(dbService, 'list', `${list.id}`);

  const onDeleteClick = async () => {
    const ok = window.confirm('정말로 삭제하시겠습니까?');
    console.log(ok);
    if (ok) {
      //delete nweet
      await deleteDoc(PostRef);
    }
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(PostRef, {
      title: newTitle,
      body: newBody,
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
    });
    setEditing(false);
  };

  const onTitleChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewTitle(value);
  };

  const onBodyChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewBody(value);
  };
  return (
    <>
      {editing ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="제목 수정"
            value={newTitle}
            onChange={onTitleChange}
          ></input>
          <input
            type="text"
            placeholder="본문 수정"
            value={newBody}
            onChange={onBodyChange}
          ></input>
          <button type="submit" value="update post">
            제출하기
          </button>
        </form>
      ) : (
        <div>
          <span>{list.title}</span>
          <span>{list.body}</span>
          <span>{list.postedAt}</span>
          <span>{list.author}</span>
          {isOwner && (
            <>
              <button onClick={toggleEditing}>수정하기</button>
              <button onClick={onDeleteClick}>삭제하기</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default BoardBox;
