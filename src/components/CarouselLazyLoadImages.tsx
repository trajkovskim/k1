import { Carousel, CarouselRef, ElementIntersection, Image, SpinnerGIF } from 'components/common';
import React from 'react';

type ImageProps = React.ComponentProps<typeof Image>;

type Props = React.ComponentProps<typeof Carousel> & {
  images: string[];
  height?: ImageProps['height'];
  width?: ImageProps['width'];
  preview?: ImageProps['preview'];
  objectFit?: ImageProps['objectFit'];
  onImageClick?: (index: number) => void;
};

const CarouselLazyLoadImages = React.forwardRef<CarouselRef, Props>(
  ({ images, height, width, preview = false, objectFit = 'contain', ...props }, ref) => {
    const imageProps = { width, height, preview, objectFit };

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
              {...imageProps}
              onClick={() => props.onImageClick?.(index)}
              objectFit="contain"
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
