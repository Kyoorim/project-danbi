import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  line-height: 135%;
  white-space: pre-wrap;
  text-align: center;
  h1 {
    font-size: 1.5rem;
    color: orange;
    font-weight: 600;
    padding: 20px 0px;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    color: black;
  }
  h3 {
    padding: 10px 0px 15px 0px;
  }
`;
