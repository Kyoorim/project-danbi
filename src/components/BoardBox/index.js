import React, { useState } from 'react';
import * as S from './style';
import { dbService } from '../../config';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

const BoardBox = ({ list, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(list.text);

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
              <h4>레드타이거</h4>
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
              <h4>레드타이거</h4>
              <span>({list.postedAt})</span>
            </div>
            {isOwner && (
              <div>
                <button onClick={toggleEditing}>수정 </button>
                <span>|</span>
                <button onClick={onDeleteClick}>삭제</button>
              </div>
            )}
          </S.Author>
          <S.Body>
            <div>이미지</div>
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
