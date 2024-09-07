import { Layout } from 'antd';
import { BackToTopButton } from 'components/layout/BackToTopButton';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Footer />
      <BackToTopButton />
    </Layout>
  );
};

export default AppLayout;
