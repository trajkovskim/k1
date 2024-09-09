import NoImageAvailable from 'assets/noimageavailable.jpg';
import CarouselLazyLoadImages from 'components/CarouselLazyLoadImages';
import React from 'react';

type Props = React.ComponentProps<typeof CarouselLazyLoadImages>;

const ProductCardImages: React.FC<Props> = (props) => {
  return (
    <CarouselLazyLoadImages
      {...props}
      height={props.height}
      width={props.width}
      fade
      arrows={false}
      initialSlide={0}
      lazyLoad="ondemand"
      dots={false}
      images={props.images ?? [NoImageAvailable]}
    />
  );
};

export default ProductCardImages;
