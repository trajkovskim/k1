import Meta from 'antd/es/card/Meta';
import Image from 'components/common/Image';
import Card from 'components/common/card/Card';
import React from 'react';

type Props = {
  image?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  onClick?: () => void;
};

const ServiceCard: React.FC<Props> = (props) => {
  return (
    <Card
      transparent
      bordered={false}
      shadow={false}
      body={<Meta title={props.title} description={props.description} />}
      cover={<Image src={props.image} objectFit="cover" height="250px" />}
      onClick={props.onClick}
    />
  );
};

export default ServiceCard;
