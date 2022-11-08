import styled from 'styled-components';

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
