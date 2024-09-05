import { Container } from 'components/common';
import Navbar from 'components/layout/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Container styleConfig={{ minHeight: '100dvh' }}>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default Layout;
