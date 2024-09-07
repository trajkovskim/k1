import Meta from 'antd/es/card/Meta';
import { ProductProps } from 'components/card/types';
import React from 'react';

type Props = Pick<ProductProps, 'title' | 'summary' | 'onView'>;

const ProductTitle: React.FC<Props> = (props) => {
  return <Meta title={props.title} description={props.summary} />;
};

export default React.memo(ProductTitle);
