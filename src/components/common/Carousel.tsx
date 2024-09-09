import { Carousel as CarouselAntd } from 'antd';
import { CarouselRef as CarouselRefAntd } from 'antd/es/carousel';
import Container from 'components/common/Container';
import React from 'react';
import styled, { css } from 'styled-components';

const OnCarouselContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  color: white;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.1;
    z-index: 2;
  }

  > * {
    z-index: 3;
    position: relative;
  }
`;

type StyledCarouselProps = {
  gap?: React.CSSProperties['gap'];
  flexChildren?: boolean;
};

const StyledCarousel = styled(CarouselAntd)<StyledCarouselProps>`
  & > .slick-list > .slick-track > .slick-slide {
    padding-left: ${(props) => props.gap && `calc(${props.gap} / 2)`};
    padding-right: ${(props) => props.gap && `calc(${props.gap} / 2)`};

    > div > * {
      display: ${(props) => props.flexChildren && 'flex !important'};
    }
  }

  ${(props) =>
    !props.adaptiveHeight &&
    props.dotPosition !== 'left' &&
    props.dotPosition !== 'right' &&
    css`
      & > .slick-list {
        height: inherit;
        > .slick-track {
          display: flex;
          align-items: stretch;
          justify-content: stretch;

          > .slick-slide {
            height: auto;

            > div,
            > div > * {
              height: 100%;
            }
          }
        }
      }
    `}
`;

export type CarouselRef = CarouselRefAntd;

type Props = React.ComponentProps<typeof CarouselAntd> &
  StyledCarouselProps & {
    onImageContainer?: React.ReactNode;
  };

const Carousel = React.forwardRef<CarouselRef, Props>(({ autoplaySpeed = 5000, onImageContainer, ...props }, ref) => {
  return (
    <Container styleConfig={{ relative: true }}>
      {onImageContainer && <OnCarouselContainer>{onImageContainer}</OnCarouselContainer>}
      <StyledCarousel ref={ref} autoplay autoplaySpeed={autoplaySpeed} {...props}>
        {props.children}
      </StyledCarousel>
    </Container>
  );
});

Carousel.displayName = 'Carousel';

export default Carousel;
