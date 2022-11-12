import React from 'react';
import * as S from './style';
import { authService } from '../../config';
import { apiService } from '../../api';
import {
  MdLink,
  MdMailOutline,
  MdLocationOn,
  MdPhoneIphone,
} from 'react-icons/md';

const ProfileContent = ({ isLoggedIn, userObj }) => {
  const onSocialClick = async (e) => {
    try {
      await apiService.SocialLogin(e);
      alert('로그인 성공');
      console.log('로그인성공');
      console.log(userObj);
    } catch {
      alert('로그인이 실패했습니다');
    }
  };
  const onLogoutClick = () => {
    authService.signOut();
    isLoggedIn(false);
  };
  return (
    <S.FlexWrapper>
      <S.ProfileSection>
        {/* <img src={publicUrl + '/resources/img/memo_.jpg'} alt="profile" /> */}
        {/* <S.LinkTitle onClick={goGithub}>
      <MdLink />
      Github
    </S.LinkTitle>
    <LinkTitle onClick={goVelog}>
      <MdLink />
      Velog
    </LinkTitle> */}
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
