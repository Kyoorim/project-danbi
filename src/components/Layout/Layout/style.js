import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #808080;
`;

export const BorderWrapper = styled.div`
  width: 85%;
  height: 90vh;
  padding: 25px;
  background: #55c0dc;
  border: 1px solid var(--gray);
  border-radius: 10px;
  box-sizing: border-box;
`;

export const BgWrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 8px 8px 8px;
  background: white;
  border: 2px solid var(--gray);
  border-radius: 10px;
`;
