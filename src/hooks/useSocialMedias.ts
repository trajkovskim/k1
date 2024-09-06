import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import React from 'react';

enum SocialMedia {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TELEGRAM = 'telegram',
  LINKEDIN = 'linkedin',
}

const useSocialMedias = () => {
  return [
    {
      type: SocialMedia.FACEBOOK,
      icon: React.createElement(FacebookFilled),
      href: '#',
    },
    {
      type: SocialMedia.INSTAGRAM,
      icon: React.createElement(InstagramFilled),
      href: '#',
    },
  ];
};

export default useSocialMedias;
