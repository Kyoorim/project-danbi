import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin-top: 25px;
  border: 1px solid #d3d3d3;
  border-left: none;
  border-right: none;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin-bottom: 15px;
  border: 1px solid #d3d3d3;
  border-left: none;
  border-right: none;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  padding: 2px 10px 2px 10px;

  div:first-child {
    display: flex;
    align-items: center;
    span {
      font-size: 0.8rem;
      margin-right: 10px;
    }
    h4 {
      font-size: 0.9rem;
      margin-right: 10px;
      color: #787878;
      font-weight: 600;
    }
  }
  div:last-child {
    button {
      border: none;
      color: inherit;
      background-color: #f6f6f6;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 10px 15px 5px 15px;
  div {
    width: 86px;
    height: 86px;
    background-color: blue;
    margin-right: 10px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0px;
    textarea {
      width: 350px;
      height: 80px;
      border: none;
      resize: none;
      outline: none;
      margin-bottom: 10px;
    }
    p {
      width: 350px;
      height: 80px;
      background-color: white;
      margin-bottom: 10px;
    }
  }
`;
