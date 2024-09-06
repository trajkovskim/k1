import { Container } from 'components/common';
import styled from 'styled-components';

type StyledImageContainerProps = {
  imageSrc?: string;
};

const StyledImageContainer = styled(Container)<StyledImageContainerProps>`
  background-image: ${(props) => props.imageSrc && `url(${props.imageSrc})`};
  background-size: cover;
  background-position: center center;
  transition: 200ms all;
  position: relative;
  color: #fff;

  user-select: none;

  &::before {
    content: '';
    background-color: #232323;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    top: 0;
    left: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export default StyledImageContainer;
