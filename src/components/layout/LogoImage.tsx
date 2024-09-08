import Logo from 'assets/logo.png';
import { Image } from 'components/common';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes';

const LogoImage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Image
      onClick={() => navigate(Routes.INDEX)}
      src={Logo}
      alt="logo"
      width="230px"
      height="100%"
      objectFit="contain"
    />
  );
};

export default LogoImage;
