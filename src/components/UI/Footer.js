import styled from 'styled-components';

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 15px;
  background-color: ${props =>
    props.darkMode ? 'var(--sub-bg-color-dark)' : 'var(--sub-bg-color-light)'};
  text-align: center;

  & .footer-text {
    display: inline-block;
    font-weight: bold;
    color: ${props => (props.darkMode ? '#FFF' : '#000')};
    font-size: 14px;
  }
`;

export default Footer;
