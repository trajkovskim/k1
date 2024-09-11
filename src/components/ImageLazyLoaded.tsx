import { ElementIntersection, Image, SpinnerGIF } from 'components/common';
import React from 'react';

type Props = React.ComponentProps<typeof Image>;

const ImageLazyLoaded: React.FC<Props> = (props) => {
  return (
    <ElementIntersection
      onEnter={(ref) => {
        ref?.querySelectorAll<HTMLImageElement>('img').forEach((imageRef) => {
          imageRef.src = imageRef.srcset ?? imageRef.src;
        });
      }}
    >
      <Image objectFit="contain" srcSet={props.src} src={SpinnerGIF} {...props} />
    </ElementIntersection>
  );
};

export default ImageLazyLoaded;
