import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props =>
    props.darkMode
      ? 'var(--task-in-details-bg-overlay-dark)'
      : 'var(--task-in-details-bg-overlay-light)'};
  z-index: 1000;
`;

export default Backdrop;
