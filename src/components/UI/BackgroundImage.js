import styled from 'styled-components';

import bgLight from '../../assets/images/bg-desktop-light.jpg';
import bgDark from '../../assets/images/bg-desktop-dark.jpg';

const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: var(--background-img-height);
  background-image: url(${props => (props.darkMode ? bgDark : bgLight)});
  background-repeat: no-repeat;
  background-position-x: 50%;
`;

export default BackgroundImage;
