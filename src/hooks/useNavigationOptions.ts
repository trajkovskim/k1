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
  };

  return options;
};
export default useNavigationOptions;
