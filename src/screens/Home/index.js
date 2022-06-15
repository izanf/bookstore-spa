import React, { useState } from 'react';
import styled from 'styled-components';

import BookstoreService from '../../services/bookstore';

import Searchbar from '../../shared/Searchbar';
import Text from '../../shared/Text';
import BooksList from './BooksList';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: #777;
`;

const Content = styled.div`
  width: 900px;
`;

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleBooks = (data) => {
    setBooks(data);
  }

  const onSearch = async (e) => {
    const { value } = e.target;

    if (value.length > 2) {
      const res = await BookstoreService.getBooks(value);

      handleBooks(res);
    }
  };

  console.log('aaaa', books);

  return (
    <Container>
      <Content>
        <Text as="h1" align="center" size="lxx">Bookstore</Text>
        <Searchbar onChange={onSearch} />
        <BooksList data={books} />
      </Content>
    </Container>
  )
};

export default Home;
