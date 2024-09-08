import { HomeOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useTranslation } from 'hooks';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from 'routes';

export type NavigationOption = {
  label: string;
  navigate?: () => void;
  active: boolean;
  icon?: React.ReactElement;
  options?: Record<string, NavigationOption>;
};

const useNavigationOptions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const t = useTranslation('nav');

  const options: Record<string, NavigationOption> = {
    [Routes.INDEX]: {
      label: t('home'),
      navigate: () => navigate(Routes.INDEX),
      active: !location.pathname.length || location.pathname === Routes.INDEX,
      icon: React.createElement(HomeOutlined),
    },
    [Routes.SHOP]: {
      label: t('shop'),
      navigate: () => navigate(Routes.SHOP),
      active: location.pathname === Routes.SHOP,
      icon: React.createElement(ShoppingOutlined),
    },
    [Routes.PROJECTS]: {
      label: t('projects'),
      active: location.pathname === Routes.DO_THE_CHANGE || location.pathname === Routes.FIT_MARATHON,
      icon: React.createElement(ShoppingOutlined),
      options: {
        [Routes.DO_THE_CHANGE]: {
          label: t('doTheChange'),
          active: location.pathname === Routes.DO_THE_CHANGE,
          navigate: () => navigate(Routes.DO_THE_CHANGE),
        },
        [Routes.FIT_MARATHON]: {
          label: t('fitMarathon'),
          active: location.pathname === Routes.FIT_MARATHON,
          navigate: () => navigate(Routes.FIT_MARATHON),
        },
      },
    },
  };

  return options;
};
export default useNavigationOptions;
