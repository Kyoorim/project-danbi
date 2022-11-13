import React from 'react';
import * as S from './style';
import Layout from '../../components/Layout/Layout';
import ProfileBar from '../../components/Layout/ProfileBar';
import Card from '../../components/Layout/Card';
import Main from '../../components/Main';
import ProfileContent from '../../components/ProfileContent';
import mainpic from '../../asset/mainpic.png';

const Home = ({ isLoggedIn, userObj }) => {
  return (
    <Layout>
      <ProfileBar>
        <Card>
          <ProfileContent isLoggedIn={isLoggedIn} userObj={userObj} />
        </Card>
      </ProfileBar>
      <Main isLoggedIn={isLoggedIn} userObj={userObj}>
        <Card>
          <S.ContentSection>
            <h2>미니룸</h2>
            <div>
              <img src={mainpic} alt="miniroom" />
            </div>
          </S.ContentSection>
          <S.ContentSection>
            <h2>Bonjour 코딩!</h2>
            <ul>
              <li>코딩이라는 새로운 언어와 기술을 통해::</li>
              <li>
                물리적 세계를 넘어서 더 넓고 잠재력 넘치는 세상을 탐험해보고자
                합니다
              </li>
              <li>🥑로그인하시고 방명록을 남겨주세요🥑</li>
              <li></li>
            </ul>
          </S.ContentSection>
        </Card>
      </Main>
    </Layout>
  );
};

export default Home;
