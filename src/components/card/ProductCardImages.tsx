import { ProductProps } from 'components/card/types';
import CarouselLazyLoadImages from 'components/CarouselLazyLoadImages';
import React from 'react';
import NoImageAvailable from 'assets/noimageavailable.jpg';

type Props = Pick<ProductProps, 'images' | 'id'> & {
  height: string;
};

const ProductCardImages: React.FC<Props> = (props) => {
  return (
    <CarouselLazyLoadImages
      height={props.height}
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
