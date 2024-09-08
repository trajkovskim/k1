import { Carousel, CarouselRef, ElementIntersection, Image, SpinnerGIF } from 'components/common';
import React from 'react';

type Props = React.ComponentProps<typeof Carousel> & {
  images: string[];
  height?: string;
  onImageClick?: (index: number) => void;
  preview?: boolean;
};

const CarouselLazyLoadImages = React.forwardRef<CarouselRef, Props>(
  ({ images, height, preview = false, ...props }, ref) => {
    return (
      <Carousel ref={ref} initialSlide={0} {...props} lazyLoad="ondemand">
        {images?.map((image, index) => (
          <ElementIntersection
            key={image}
            onEnter={(ref) => {
              ref?.querySelectorAll<HTMLImageElement>('img').forEach((imageRef) => {
                imageRef.src = imageRef.srcset ?? imageRef.src;
              });
            }}
          >
            <Image
              preview={preview}
              onClick={() => props.onImageClick?.(index)}
              objectFit="contain"
              height={height}
              srcSet={image}
              src={SpinnerGIF}
            />
          </ElementIntersection>
        ))}
      </Carousel>
    );
  }
);

CarouselLazyLoadImages.displayName = 'CarouselLazyLoadImages';

export default CarouselLazyLoadImages;
