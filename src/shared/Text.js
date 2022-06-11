import styled from 'styled-components';
import { space } from 'styled-system'

const Text = styled.span`
  ${({ align }) => align ? `text-align: ${align};` : ''}
  ${({ theme, size }) => size ? `font-size: ${theme.fontSizes[size]};` : ''}
  color: ${({ theme, color }) => color ? `${theme.colors[color]}` : 'black'};
  ${({ weight }) => weight ? `font-weight: ${weight};` : ''}
  ${({ theme, lineHeight }) => lineHeight ? `line-height: ${theme.fontSizes[lineHeight]};` : ''}
  ${space}
`;

export default Text;
