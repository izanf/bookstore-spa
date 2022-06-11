import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Text from '../../shared/Text';

const Container = styled.div`
  background: url('${props => props.image}') center center no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 290px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-size: 120%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%);
  padding: 1rem;
  max-height: 30%;
`;

const BookItem = ({ data }) => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate('/details', { state: { data } });
  }

  return (
    <Container image={data?.imageLinks?.thumbnail} onClick={onNavigate}>
      <Content>
        <Text color="white" weight="500" mb=".3rem">{data?.title}</Text>
        {data?.authors?.length ? <Text color="grayLight" size="xs">{data?.authors?.join(', ')}</Text> : null}
      </Content>
    </Container>
  );
};

export default BookItem;
