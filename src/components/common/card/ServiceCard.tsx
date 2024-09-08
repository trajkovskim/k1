import Meta from 'antd/es/card/Meta';
import Image from 'components/common/Image';
import Card from 'components/common/card/Card';
import React from 'react';

type Props = {
  className?: string;
  image?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  onClick?: () => void;
  imageHeight?: string;
};

const ServiceCard: React.FC<Props> = (props) => {
  return (
    <Card
      className={props.className}
      // transparent
      bordered={false}
      // shadow={false}
      body={<Meta title={props.title} description={props.description} />}
      cover={<Image src={props.image} objectFit="contain" height={props.imageHeight} />}
      onClick={props.onClick}
    />
  );
};

export default ServiceCard;
