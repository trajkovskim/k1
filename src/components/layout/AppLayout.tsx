import { Layout } from 'antd';
import { Container } from 'components/common';
import Header from 'components/layout/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
    <Layout>
      <Container styleConfig={{ minHeight: '100dvh' }}>
        <Header />
        <Outlet />
      </Container>
    </Layout>
  );
};

export default AppLayout;
