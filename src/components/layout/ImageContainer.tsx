import { Container } from 'components/common';
import styled from 'styled-components';

type StyledImageContainerProps = {
  imageSrc?: string;
};

const StyledImageContainer = styled(Container)<StyledImageContainerProps>`
  position: relative;
  color: #fff;
  transition: 200ms all;
  user-select: none;
  overflow: hidden;
  /* height: 100%; */
  /* display: flex !important; */

  &::before {
    content: '';
    background-image: ${(props) => props.imageSrc && `url(${props.imageSrc})`};
    background-size: cover;
    background-position: center center;
    background-color: ${(props) => (props.imageSrc ? '#232323' : '#fff')};
    filter: brightness(70%);

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

export default StyledImageContainer;
