import React from 'react';
import * as S from './style';
import { authService } from '../../config';
import { apiService } from '../../api';
import { MdAccountBox } from 'react-icons/md';

const Profil = ({ isLoggedIn, userObj }) => {
  const onSocialClick = async (e) => {
    try {
      await apiService.SocialLogin(e);
      alert('로그인 성공');
    } catch {
      alert('로그인이 실패했습니다');
    }
  };

  const onLogoutClick = () => {
    authService.signOut();
    isLoggedIn(false);
  };
  return (
    <S.ProfilContainer>
      <S.ProfilPage>
        <span>오늘 날짜</span>
        <S.ProfilBody>
          {isLoggedIn ? (
            <>
              <MdAccountBox size="150" />
              <span>ㄴr는 ㄱr끔 눈물을 흘린ㄷr...</span>
              <span>{userObj.displayName}님 환영합니다</span>
              <span>활동명: 레드타이거</span>
              <button onClick={onLogoutClick}>로그아웃</button>
            </>
          ) : (
            <>
              <MdAccountBox size="150" />
              <span>로그인 후 이용하실 수 있습니다</span>
              <button name="google" onClick={onSocialClick}>
                구글 계정으로 로그인하기
              </button>
            </>
          )}
        </S.ProfilBody>
      </S.ProfilPage>
    </S.ProfilContainer>
  );
};

export default Profil;
