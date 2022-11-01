import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 250px;
    height: 250px;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0px 20px 20px 20px;
    :first-child {
      display: flex;
      flex-direction: column;
      color: var(--orange);
      border: 5px solid var(--orange);
      :hover {
        cursor: pointer;
        background-color: var(--orange);
        color: white;
      }
      span {
        padding: 10px;
      }
    }
    :last-child {
      color: var(--darkgreen);
      border: 5px solid var(--darkgreen);
      :hover {
        cursor: pointer;
        background-color: var(--darkgreen);
        color: white;
      }
    }
  }
`;

export const Login = styled.span`
  margin-top: 40px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
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
