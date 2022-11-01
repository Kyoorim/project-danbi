import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    border: 5px solid var(--yellow);
    color: var(--yellow);
    font-size: 4rem;
    :hover {
      background-color: var(--yellow);
      color: white;
    }
    span {
      font-size: 4rem;
      font-weight: 600;
    }
  }
`;

export const Login = styled.span`
  margin-top: 40px;
  :hover {
    text-decoration: underline;
    font-weight: 700;
  }
`;

export const WithoutLogin = styled.span`
  margin-top: 20px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
    font-weight: 700;
  }
`;
