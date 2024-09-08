import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import useTranslation from 'hooks/useTranslation';
import React from 'react';

enum SocialMedia {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TELEGRAM = 'telegram',
  LINKEDIN = 'linkedin',
}

const useSocialMedias = () => {
  const t = useTranslation('links');

  return [
    {
      type: SocialMedia.FACEBOOK,
      icon: React.createElement(FacebookFilled),
      href: t('facebook'),
    },
    {
      type: SocialMedia.INSTAGRAM,
      icon: React.createElement(InstagramFilled),
      href: t('instagram'),
    },
    {
      type: SocialMedia.LINKEDIN,
      icon: React.createElement(LinkedinFilled),
      href: t('linkedin'),
    },
  ];
};

export default useSocialMedias;
