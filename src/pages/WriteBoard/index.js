import React, { useState } from 'react';
import * as S from './style';
import { storageService } from '../../config';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { apiService } from '../../api';

const WriteBoard = ({ userObj }) => {
  const [text, setText] = useState('');
  const [attachment, setAttachment] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = '';

    if (attachment) {
      const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      const response = await uploadString(
        attachmentRef,
        attachment,
        'data_url'
      );
      attachmentUrl = await getDownloadURL(response.ref);
      console.log(attachmentUrl);
    }

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
      attachmentUrl,
    };

    try {
      await apiService.PutPost(textObj);
      alert('성공적으로 등록되었습니다');
      setText('');
      setAttachment('');
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

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachement = () => {
    setAttachment(null);
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <textarea
        value={text}
        type="text"
        placeholder="방명록을 남겨주세요🥰"
        onChange={onTextChange}
      ></textarea>
      <p>
        <input
          type="file"
          accept="image/*"
          id="input-file"
          onChange={onFileChange}
        ></input>
        <button type="submit">등록</button>
      </p>
      {attachment && (
        <div>
          <img
            src={attachment}
            alt="사진 미리보기"
            width="50px"
            height="50px"
          />
          <button onClick={onClearAttachement}> 업로드 취소 </button>
        </div>
      )}
    </S.Form>
  );
};

export default WriteBoard;
