import styled from 'styled-components';

const Card = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  width: 400px;
  background-color: ${props =>
    props.darkMode ? 'var(--tasks-background-dark)' : '#FFF'};

  & .card-header {
    padding: 20px 10px 10px 10px;
    color: ${props => (props.darkMode ? '#FFF' : '#000')};
    background-color: ${props =>
      props.darkMode
        ? 'var(--sub-bg-color-dark)'
        : 'var(--sub-bg-color-light)'};
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 998px) {
    width: 350px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export default Card;
