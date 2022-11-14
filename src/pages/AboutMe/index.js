import React from 'react';
import Layout from '../../components/Layout/Layout';
import ProfileBar from '../../components/Layout/ProfileBar';
import Card from '../../components/Layout/Card';
import Main from '../../components/Main';
import ProfileList from '../../components/AboutMeProfile/ProfileList';
import MyInfo from '../../components/AboutMeProfile/MyInfo';

const AboutMe = () => {
  return (
    <Layout>
      <ProfileBar>
        <Card>
          <ProfileList />
        </Card>
      </ProfileBar>
      <Main>
        <Card>
          <MyInfo />
        </Card>
      </Main>
    </Layout>
  );
};

export default AboutMe;
