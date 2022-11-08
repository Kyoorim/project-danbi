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
