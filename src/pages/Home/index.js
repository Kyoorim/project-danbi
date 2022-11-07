import React from 'react';
import * as S from './style';
// import { useNavigate } from 'react-router-dom';
import { apiService } from '../../api';
import { MdAccountBox } from 'react-icons/md';
import Board from '../Board';
import WriteBoard from '../WriteBoard';
// import Circle from '../../components/Circle';

const Home = ({ userObj, isLoggedIn }) => {
  // const navigate = useNavigate();

  const onSocialClick = async (e) => {
    try {
      await apiService.SocialLogin(e);
      alert('로그인 성공');
      // navigate('/main');
    } catch {
      alert('로그인이 실패했습니다');
    }
  };
  return (
    <>
      <S.Wrapper>
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
        <S.ContentContainer>
          <S.ContentPage>
            <h1>⭐️MBTI 게시판에 오신것을 환영합니ㄷr⭐️</h1>
            <S.ContentBody>
              <WriteBoard userObj={userObj} />
              <Board userObj={userObj} />
            </S.ContentBody>
          </S.ContentPage>
        </S.ContentContainer>
        {/* <Circle>
          <span>DANBI</span>
        </Circle>
        <button name="google" onClick={onSocialClick}>
          구글 계정으로 로그인하기
        </button>
        <S.WithoutLogin onClick={() => navigate('/main')}>
          로그인 없이 입장
        </S.WithoutLogin> */}
      </S.Wrapper>
    </>
  );
};

export default Home;
