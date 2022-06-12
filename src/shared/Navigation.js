import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import Text from '../shared/Text';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
`;

const Navigation = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <FaArrowLeft color="white" size="1.4rem" onClick={() => navigate(-1)} cursor="pointer" />
        <Text size="md" color="white" ml="1rem">{title}</Text>
      </Content>
    </Container>
  );
};

export default Navigation;