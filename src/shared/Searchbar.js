import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  font-size: 2.4rem;
  text-indent: 10px;
  border-radius: 8px;
  border: none;

  &:focus {
    outline: none;    
  }
`;

const Searchbar = (props) => (
  <Box>
    <Input type="text" placeholder="Search" {...props} />
  </Box>
);

export default Searchbar;
