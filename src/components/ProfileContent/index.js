import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { authService } from '../../config';
import { apiService } from '../../api';
import myphoto from '../../asset/myphoto.jpeg';
import { MdMailOutline, MdLocationOn, MdPhoneIphone } from 'react-icons/md';
import { TfiGithub, TfiWrite } from 'react-icons/tfi';

const ProfileContent = ({ isLoggedIn, userObj }) => {
  const navigate = useNavigate();
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
  };

  return (
    <S.FlexWrapper>
      <S.ProfileSection>
        <img src={myphoto} />
        <S.LinkTitle>
          <TfiGithub />
          <a
            href="https://github.com/Kyoorim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </S.LinkTitle>
        <S.LinkTitle>
          <TfiWrite />
          <a
            href="https://velog.io/@tootb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Velog
          </a>
        </S.LinkTitle>
      </S.ProfileSection>
      <S.ProfileSection>
        <p>
          <span className="my-name">이규림</span>
        </p>
        <p>
          <MdMailOutline />
          tootb.kyoo@gmail.com
        </p>
        <p>
          <MdPhoneIphone />
          010-5120-2659
        </p>
        <p>
          <MdLocationOn />
          서울시 서대문구
        </p>
      </S.ProfileSection>
      {isLoggedIn ? (
        <button onClick={onLogoutClick}>
          {userObj.displayName}님 로그아웃
        </button>
      ) : (
        <button name="google" onClick={onSocialClick}>
          구글로 로그인
        </button>
      )}
    </S.FlexWrapper>
  );
};

export default ProfileContent;
