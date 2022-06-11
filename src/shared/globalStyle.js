import { createGlobalStyle } from 'styled-components';
import '../assets/css/reset.css';

export default createGlobalStyle`
html, body, #root {
  height: 100%;
}

h1 {
  font-size: ${({ theme }) => theme.fontSizes.xlx};
}

h2 {
  font-size: ${({ theme }) => theme.fontSizes.xl};
}

h3 {
  font-size: ${({ theme }) => theme.fontSizes.lg};
}

h4 {
  font-size: ${({ theme }) => theme.fontSizes.md};
}

* {
  font-family: 'Roboto Condensed', sans-serif;
}
`;