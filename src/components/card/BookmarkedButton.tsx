import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button } from 'components/common';
import React from 'react';

type Props = {
  bookmarked?: boolean;
  onClick?: React.ComponentProps<typeof Button>['onClick'];
};

const BookmarkedButton: React.FC<Props> = (props) => {
  return null;
  return <Button icon={props.bookmarked ? <HeartFilled /> : <HeartOutlined />} onClick={props.onClick} />;
};

export default BookmarkedButton;
