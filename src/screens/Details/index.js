import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Text from '../../shared/Text';
import Image from '../../shared/Image';

const Container = styled.div`
  min-height: 100%;
  background: #777;
`;

const Content = styled.div`
  display: flex;
  width: 900px;
  margin: 0 auto;
  padding: 100px 0;
`;

const About = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const List = styled.ul`
  margin: 2rem 0;
`;

const Item = styled.li`
  margin-bottom: .5rem;
`;

const Details = () => {
  const location = useLocation();
  const { data } = location.state;
  const { authors, categories, imageLinks, infoLink, language, maturityRating, pageCount, publishedDate, title, subtitle, description } = data;
  console.log('prooooopsx', data);

  const joinStrings = (arr, delimiter = ', ') =>
    arr.join(delimiter);

  return (
    <Container>
      <Content>
        <Image width="300px" src={imageLinks?.thumbnail} />
        <About>
          <Text color="white" as="h2">{title}</Text>
          <Text color="white" >{subtitle}</Text>
          <List>
            <Item>
              <Text color="grayLight">Autores: </Text>
              <Text color="white" weight="bold">{joinStrings(authors)}</Text>
            </Item>
            <Item>
              <Text color="grayLight">Categorias: </Text>
              <Text color="white" weight="bold">{joinStrings(categories)}</Text>
            </Item>
            <Item>
              <Text color="grayLight">Lingua: </Text>
              <Text color="white" weight="bold">{language}</Text>
            </Item>
            <Item>
              <Text color="grayLight">Paginas: </Text>
              <Text color="white" weight="bold">{pageCount}</Text>
            </Item>
            <Item>
              <Text color="grayLight">Publicado em: </Text>
              <Text color="white" weight="bold">{publishedDate}</Text>
            </Item>
            <Item>
              <Text color="grayLight">Descricao: </Text>
              <Text color="white" weight="bold" lineHeight="md">{description}</Text>
            </Item>
            {maturityRating === 'MATURE' ? (
              <Item>
                <Image width="30px" height="30px" src="https://www.svgrepo.com/show/10550/plus-18-movie.svg" alt="Livro direcionado ao publico maior de 18 anos." />
              </Item>
            ) : null}
          </List>
        </About>
      </Content>
    </Container>
  );
};

export default Details;
