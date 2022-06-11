import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '100%'};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Image = ({ width, height, src, alt}) => (
  <Figure width={width} height={height}>
    <Img src={src} alt={alt} />
  </Figure>
);

export default Image;
