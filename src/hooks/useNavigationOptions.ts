import { HomeOutlined, PhoneOutlined, ProjectOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useTranslation } from 'hooks';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Routes } from 'routes';

export type NavigationOption = {
  label: string;
  href?: string;
  active: boolean;
  icon?: React.ReactElement;
  options?: Record<string, NavigationOption>;
};

const useNavigationOptions = () => {
  const location = useLocation();
  const t = useTranslation('nav');

  const options: Record<string, NavigationOption> = {
    [Routes.INDEX]: {
      label: t('home'),
      href: Routes.INDEX,
      active: !location.pathname.length || location.pathname === Routes.INDEX,
      icon: React.createElement(HomeOutlined),
    },
    [Routes.SHOP]: {
      label: t('shop'),
      href: Routes.SHOP,
      active: location.pathname === Routes.SHOP,
      icon: React.createElement(ShoppingOutlined),
    },
    [Routes.PROJECTS]: {
      label: t('projects'),
      active: location.pathname === Routes.DO_THE_CHANGE || location.pathname === Routes.FIT_MARATHON,
      icon: React.createElement(ProjectOutlined),
      options: {
        [Routes.DO_THE_CHANGE]: {
          label: t('doTheChange'),
          active: location.pathname === Routes.DO_THE_CHANGE,
          href: Routes.DO_THE_CHANGE,
        },
        [Routes.FIT_MARATHON]: {
          label: t('fitMarathon'),
          active: location.pathname === Routes.FIT_MARATHON,
          href: Routes.FIT_MARATHON,
        },
      },
    },
    [Routes.CONTACT]: {
      label: t('contact'),
      href: Routes.CONTACT,
      active: location.pathname === Routes.CONTACT,
      icon: React.createElement(PhoneOutlined),
    },
  };

  return options;
};
export default useNavigationOptions;
