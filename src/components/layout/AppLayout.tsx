import { Layout, Modal } from 'antd';
import { Button, Container, Text } from 'components/common';
import { BackToTopButton } from 'components/layout/BackToTopButton';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { goto } from 'utils';

const AppLayout: React.FC = () => {
  const [initialModal, setInitialModal] = useState<boolean>(false);

  useEffect(() => {
    setInitialModal(false);
  }, []);

  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Footer />
      <BackToTopButton />
      <Modal
        open={initialModal}
        onCancel={() => setInitialModal(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <Container styleConfig={{ gap: '10px' }}>
          <Text size="md">Already a member?</Text>
          <Button size="sm" type="link" onClick={() => goto('myherbalife.com')}>
            Visit myherbalife.com
          </Button>
        </Container>
      </Modal>
    </Layout>
  );
};

export default AppLayout;
