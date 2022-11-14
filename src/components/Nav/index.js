import React from 'react';
import * as S from './style';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <S.Nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'selected' : '')}
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) => (isActive ? 'selected' : '')}
            >
              프로필
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/board"
              className={({ isActive }) => (isActive ? 'selected' : '')}
            >
              방명록
            </NavLink>
          </li>
        </ul>
      </S.Nav>
    </>
  );
};

export default Nav;
