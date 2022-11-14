import React, { useState } from 'react';
import * as S from './style';
import { dbService, storageService } from '../../config';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';

const BoardBox = ({ list, isOwner, isLoggedIn }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(list.text);

  const PostRef = doc(dbService, 'list', `${list.id}`);

  const onDeleteClick = async () => {
    const ok = window.confirm('정말로 삭제하시겠습니까?');
    if (ok) {
      await deleteDoc(PostRef);
      const desertRef = ref(storageService, list.attachmentUrl);
      await deleteObject(desertRef);
    }
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(PostRef, {
      text: newText,
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

  const onTextChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewText(value);
  };

  return (
    <>
      {editing ? (
        <S.Form onSubmit={onSubmit}>
          <S.Author>
            <div>
              <h4>{list.author}</h4>
              <span>({list.postedAt})</span>
            </div>
            <div>
              <button type="submit" value="update post">
                업데이트
              </button>
            </div>
          </S.Author>
          <S.Body>
            <div>이미지</div>
            <section>
              <textarea
                value={newText}
                type="text"
                placeholder="내용을 수정하세요"
                onChange={onTextChange}
              ></textarea>
            </section>
          </S.Body>
        </S.Form>
      ) : (
        <S.PostContainer>
          <S.Author>
            <div>
              <h4>{list.author}</h4>
              <span>({list.postedAt})</span>
            </div>
            {isOwner && isLoggedIn && (
              <div>
                <button onClick={toggleEditing}>수정 </button>
                <span>|</span>
                <button onClick={onDeleteClick}>삭제</button>
              </div>
            )}
          </S.Author>
          <S.Body>
            {list.attachmentUrl && (
              <div>
                <img
                  src={list.attachmentUrl}
                  alt="photo"
                  width="86px"
                  height="86px"
                />
              </div>
            )}
            <section>
              <p>{list.text}</p>
            </section>
          </S.Body>
        </S.PostContainer>
      )}
    </>
  );
};

export default BoardBox;
