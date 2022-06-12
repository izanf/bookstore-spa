import styled from 'styled-components';
import { space } from 'styled-system';
import { darken } from 'polished';

const Button = styled.button`
  ${space}
  font-size: ${({ theme, size = 'sm' }) => theme.fontSizes[size]};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  cursor: pointer;
  background: ${({ theme, color = 'white' }) => theme.colors[color]};
  color: ${({ theme, color = 'black' }) => theme.colors[color]};

  &:hover {
    background: ${({ theme, color = 'white' }) => darken(0.1, theme.colors[color])};
  }
`;

export default Button;