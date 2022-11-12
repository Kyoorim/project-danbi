import React from 'react';
import * as S from './style';

const ProfileBar = ({ children }) => {
  return (
    <S.ProfilebarContainer>
      <ul>
        <li>
          TODAY <span className="today">1</span>
        </li>
        <li>TOTAL 2022</li>
      </ul>
      {children}
    </S.ProfilebarContainer>
  );
};

export default ProfileBar;
