import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 10;
  overflow-y: auto;
  width: 100%;
  height: 96%;
  margin-top: 10px;
  padding: 20px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  overflow-y: auto;
  section {
    width: 100%;
    height: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
