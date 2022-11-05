import React from 'react';

const BoardBox = ({ list }) => {
  const onClick = (e) => {
    e.preventDefault();

    console.log(list);
  };
  return (
    <>
      {/* <h4>{list.title}</h4>
      <h4>{list.body}</h4>
      <h4>{list.createdAt}</h4>
      <h4>{list.author}</h4> */}
      <button onClick={onClick}>press button</button>
    </>
  );
};

export default BoardBox;
