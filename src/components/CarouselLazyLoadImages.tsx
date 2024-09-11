import { Carousel, CarouselRef } from 'components/common';
import ImageLazyLoaded from 'components/ImageLazyLoaded';
import React from 'react';

type ImageProps = React.ComponentProps<typeof ImageLazyLoaded>;

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
          <ImageLazyLoaded key={image} {...imageProps} onClick={() => props.onImageClick?.(index)} src={image} />
        ))}
      </Carousel>
    );
  }
);

CarouselLazyLoadImages.displayName = 'CarouselLazyLoadImages';

export default CarouselLazyLoadImages;
