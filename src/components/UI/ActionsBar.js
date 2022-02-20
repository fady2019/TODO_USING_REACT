import styled from 'styled-components';

const ActionsBar = styled.div`
  display: flex;
  border-top: 1px solid
    ${props =>
      props.darkMode
        ? 'var(--task-border-color-dark)'
        : 'var(--task-border-color-light)'};

  &[disabled] .action-btn {
    pointer-events: none;
    opacity: 0.4;
  }

  & .action-btn {
    color: ${props => (props.darkMode ? '#FFF' : '#000')};
  }

  &:not([disabled]) .action-btn:hover,
  &:not([disabled]) .action-btn.selected {
    background-color: ${props =>
      props.darkMode
        ? 'var(--tasks-filter-hover-bg-dark)'
        : 'var(--tasks-filter-hover-bg-light)'};
  }
`;

export default ActionsBar;
