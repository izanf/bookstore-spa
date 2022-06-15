import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Text from '../../shared/Text';
import Routes from './Routes';

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  background: #777;
`;

const MenuContainer = styled.ul`
  margin-top: 2rem;
`;

const MenuItem = styled.li`
  padding: .5rem 1rem;
  cursor: pointer;

  &:hover {
    background: #999;
  }
`;

const Side = styled.aside`
  flex: 1;
`;

const Content = styled.main`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const Admin = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Side>
        <Text>Admin</Text>
        <MenuContainer>
          <MenuItem onClick={() => navigate('/admin')}>Lista de livros</MenuItem>
          <MenuItem onClick={() => navigate('/admin/register')}>Cadastrar livro</MenuItem>
        </MenuContainer>
      </Side>
      <Content>
        <Routes />
      </Content>
    </Container>
  )
};

export default Admin;
