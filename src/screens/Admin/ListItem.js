import React from 'react';
import styled from 'styled-components';

import Text from '../../shared/Text';

const Container = styled.li`
  display: flex;
  background: ${({ paint }) => paint ? '#999' : 'transparent'};
`;

const Box = styled.div`
  flex: ${({ flex }) => flex ?? 1};
  padding: .5rem;
`;

const ListItem = ({ data, paint }) => {
  return (
    <Container paint={paint}>
      <Box>
        <Text>{data?.id}</Text>
      </Box>
      <Box flex="10">
        <Text>{data?.title}</Text>
      </Box>
    </Container>
  )
};

export default ListItem;