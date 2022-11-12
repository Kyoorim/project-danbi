import React from 'react';
import * as S from './style';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <S.Nav>
        <ul>
          <li>
            <NavLink exact to="/" className="selected">
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutme" activeClassName="selected">
              프로필
            </NavLink>
          </li>
          <li>
            <NavLink to="/board" className="selected">
              방명록
            </NavLink>
          </li>
        </ul>
      </S.Nav>
    </>
  );
};

export default Nav;
