import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  padding: .5rem;
  border: 2px solid #eee;
  border-radius: 4px;
  color: #fff;

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }

  &:focus {
    outline: none;
    border-color: #ccc;
  }
`;

export default Input;
