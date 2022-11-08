import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 10px 15px 0px 15px;
  background-color: #f6f6f6;
  border: 1px solid #d3d3d3;
  border-left: none;
  border-right: none;
  width: 500px;
  margin-bottom: 20px;
  div {
    background-color: white;
    width: 86px;
    height: 86px;
    margin-right: 10px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0px;
    /* box-sizing: border-box; */
    textarea {
      width: 350px;
      height: 80px;
      border: 1px solid #d3d3d3;
      resize: none;
      outline: none;
    }
    button {
      border: 1px solid #d3d3d3;
      margin: 5px 0px 5px 0px;
      border-radius: 7px;
      color: inherit;
    }
  }
`;

// export const Title = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: left;
// `;

// export const Body = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
