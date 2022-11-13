import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 10px 15px 0px 15px;
  background-color: #f6f6f6;
  border: 1px solid #d3d3d3;
  border-left: none;
  border-right: none;
  width: 100%;
  margin-bottom: 20px;
  textarea {
    width: 100%;
    height: 80px;
    border: 1px solid #d3d3d3;
    resize: none;
    outline: none;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    input {
      width: 180px;
    }
    input::file-selector-button {
      margin: 5px 0px 5px 0px;
      background: #fff;
      border: 1px solid #d3d3d3;
      border-radius: 9px;
      margin-right: 10px;
  &:hover {
    background: var(--navColor);
    color: white;
    }
  }
}
    button {
      border: 1px solid #d3d3d3;
      margin: 5px 0px 5px 0px;
      border-radius: 7px;
      color: inherit;
    }
  }
`;
