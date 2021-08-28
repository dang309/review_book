import React from 'react';

import InList from '../components/Card/InList';

function BookContainer(props) {
  const { books } = props;

  return (
    <>
      {books.map((book) => (
        <InList key={book._id} {...book} />
      ))}
    </>
  );
}

export default BookContainer;
