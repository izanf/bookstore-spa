import React from 'react';
import styled from 'styled-components';

import BookItem from './BookItem';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
  grid-gap: 1.5rem;
  padding: 2rem 0;
`;

const BooksList = ({ data }) => (
  <Container>
    {data.map((book) => (
      <BookItem data={book?.volumeInfo} />
    ))}
  </Container>
);

export default BooksList;
