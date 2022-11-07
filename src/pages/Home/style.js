import styled from 'styled-components';

export const ProfilContainer = styled.div`
  background-color: #02b1d4;
  width: 280px;
  height: 500px;
  border-radius: 15px;
  display: flex;
  justify-content: flex-end;
`;

export const ProfilPage = styled.div`
  background-color: white;
  width: 260px;
  height: 460px;
  border-radius: 15px 10px 10px 15px;
  margin-top: 20px;
  border: 2px solid var(--gray);
  border-right: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ProfilBody = styled.div`
  width: 250px;
  height: 410px;
  border: 2px solid var(--gray);
  border-radius: 15px 10px 10px 15px;
  border-right: none;
  margin-bottom: 10px;
  margin-left: 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  span {
    padding: 20px 0px;
  }

  button {
    padding: 30px 0px;
    border: none;
    background-color: white;
    font-size: 1rem;
    color: inherit;
    :hover {
      text-decoration: underline;
      font-weight: 700;
    }
  }
`;

export const ContentContainer = styled.div`
  background-color: #02b1d4;
  width: 600px;
  height: 500px;
  border-radius: 15px;
`;

export const ContentPage = styled.div`
  background-color: white;
  width: 580px;
  height: 460px;
  border-radius: 10px 15px 15px 10px;
  margin-top: 20px;
  border: 2px solid var(--gray);
  border-left: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
`;

export const ContentBody = styled.div`
  width: 550px;
  height: 410px;
  border: 2px solid var(--gray);
  border-radius: 10px 15px 15px 10px;
  margin-bottom: 10px;
  border-left: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 10px 10px 10px;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #747474;

  /* section {
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
  button {
    margin-top: 40px;
    border: none;
    background-color: white;
    font-size: 1rem;
    color: inherit;
    :hover {
      text-decoration: underline;
      font-weight: 700;
    }
  } */
`;

// export const Login = styled.span`
//   margin-top: 40px;
//   :hover {
//     text-decoration: underline;
//     font-weight: 700;
//   }
// `;

// export const WithoutLogin = styled.span`
//   margin-top: 20px;
//   :hover {
//     text-decoration: underline;
//     cursor: pointer;
//     font-weight: 700;
//   }
// `;
