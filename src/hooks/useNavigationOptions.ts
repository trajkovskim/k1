import { useTranslation } from 'hooks';
import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
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
      active: location.pathname === Routes.INDEX,
      icon: React.createElement(FaHome),
    },
    [Routes.SHOP]: {
      label: t('shop'),
      navigate: () => navigate(Routes.SHOP),
      active: location.pathname === Routes.SHOP,
      icon: React.createElement(BiShoppingBag),
    },
  };

  return options;
};
export default useNavigationOptions;
