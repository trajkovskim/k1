import { Image, Text } from 'components/common';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes';

const LogoImage: React.FC = () => {
  const navigate = useNavigate();

  return <Text fontSize="md">Logo</Text>;

  return <Image onClick={() => navigate(Routes.INDEX)} alt="logo" width="170px" height="100%" objectFit="contain" />;
};

export default LogoImage;
