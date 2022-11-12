import styled from 'styled-components';

export const ProfilebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  /* margin-right: 20px; */
  /* justify-content: center; */
  align-items: center;
  box-sizing: border-box;
  ul {
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
    line-height: 1.4;
    li:first-of-type {
      padding-right: 10px;
      margin-right: 10px;
      border-right: 1px solid;
    }
  }
  .today {
    color: #e03131;
  }
`;
