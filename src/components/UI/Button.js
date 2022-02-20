import styled from 'styled-components';

const Button = styled.button`
  border: none;
  display: block;
  width: 100%;
  cursor: pointer;
  font: inherit;
  background: transparent;

  & > .btn-text {
    position: relative;
    display: block;
    padding: 12px 8px;
    text-align: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.4;
  }
`;

export default Button;
