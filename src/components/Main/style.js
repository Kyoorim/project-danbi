import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  box-sizing: border-box;
  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      color: orange;
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`;
