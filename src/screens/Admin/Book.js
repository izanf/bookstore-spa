import React, { useState } from 'react';
import styled from 'styled-components';

import BookstoreService from '../../services/bookstore';

import Text from '../../shared/Text';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

const Container = styled.div`
  width: 900px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  grid-template-areas: 
    "title title subtitle subtitle"
    "description description description description"
    "isbn isbn13 language infoLink";
  margin-top: 2rem;

  input {
    &:nth-child(1) {
      grid-area: title;
    }
  
    &:nth-child(2) {
      grid-area: subtitle;
    }
  
    &:nth-child(3) {
      grid-area: isbn;
    }
  
    &:nth-child(4) {
      grid-area: isbn13;
    }
  
    &:nth-child(5) {
      grid-area: language;
    }
  
    &:nth-child(5) {
      grid-area: infoLink;
    }
  }

  textarea {
    grid-area: description;
  }
`;

const Book = () => {
  const [data, setData] = useState({});

  const handleData = (field, value) => {
    setData({ ...data, [field]: value });
  }

  const onSave = () => {
    BookstoreService.createBook(data).then('SALVO COM SUCESSOW');
  }

  return (
    <Container>
      <Text size="xl">Cadastrar livro</Text>
      <Content>
        <Input placeholder="Titulo" value={data.title} onChange={e => handleData('title', e.target.value)} />
        <Input placeholder="Subtitle" value={data.subtitle} onChange={e => handleData('subtitle', e.target.value)} />
        <Input as="textarea" rows="4" placeholder="Descricao" value={data.description} onChange={e => handleData('description', e.target.value)} />
        <Input placeholder="IsBN" value={data.is_bn} onChange={e => handleData('is_bn', e.target.value)} />
        <Input placeholder="IsBN13" value={data.is_bn_13} onChange={e => handleData('is_bn_13', e.target.value)} />
        <Input placeholder="Lingua" value={data.language} onChange={e => handleData('language', e.target.value)} />
        <Input placeholder="Link de informacoes" value={data.info_link} onChange={e => handleData('info_link', e.target.value)} />
        <Input placeholder="Imagem de capa" value={data.image} onChange={e => handleData('image', e.target.value)} />
        <Input placeholder="Categorias" value={data.categories} onChange={e => handleData('categories', e.target.value)} />
        <Input placeholder="Maturidade" value={data.maturity_rating} onChange={e => handleData('maturity_rating', e.target.value)} />
        <Input placeholder="Quantidade de Paginas" value={data.page_count} onChange={e => handleData('page_count', e.target.value)} />
        <Input placeholder="Autores" value={data.authors} onChange={e => handleData('authors', e.target.value)} />
        <Input placeholder="Publicado por" value={data.publisher} onChange={e => handleData('publisher', e.target.value)} />
        <Input placeholder="Data de publicacao" value={data.published_date} onChange={e => handleData('published_date', e.target.value)} />
      </Content>
      <Button mt="1rem" onClick={onSave}>Salvar</Button>
    </Container>
  );
};

export default Book;