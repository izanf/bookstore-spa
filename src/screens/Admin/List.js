import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BookstoreService from '../../services/bookstore';

import ListItem from './ListItem';
import Text from '../../shared/Text';

const Container = styled.div`
  width: 900px;
`;

const ItemsList = styled.ul`
  margin-top: 2rem;
`;

const List = () => {
  const [books, setBooks] = useState([]);

  const handleBooks = (data) => {
    setBooks(data);
  }
  
  useEffect(() => {
    BookstoreService.getBooks().then(handleBooks);
  }, []);

  return (
    <Container>
      <Text size="xl">Listagem dos livros</Text>
      <ItemsList>
        <ListItem data={{
          id: 'id',
          title: 'title',
        }} />
        {books.map((item, index) => <ListItem data={item} paint={index % 2 === 0} />)}
      </ItemsList>
    </Container>
  );
};

export default List;
