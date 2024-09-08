import { Layout, Modal } from 'antd';
import { Button, Container, Text } from 'components/common';
import { BackToTopButton } from 'components/layout/BackToTopButton';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import { StyledContent } from 'components/layout/Layout.styled';
import { useTranslation } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { goto } from 'utils';

const StyledLayout = styled(Layout)`
  min-height: 100dvh;
  > main {
    flex: 1;
  }
`;

const AppLayout: React.FC = () => {
  const t = useTranslation();
  const [initialModal, setInitialModal] = useState<boolean>(false);

  useEffect(() => {
    const key = 'initial-modal';

    if (!sessionStorage.getItem(key)) {
      setInitialModal(true);
      sessionStorage.setItem(key, 'true');
    }
  }, []);

  return (
    <StyledLayout>
      <Header />
      <main>
        <StyledContent>
          <Outlet />
        </StyledContent>
      </main>
      <Footer />
      <BackToTopButton />
      <Modal
        open={initialModal}
        onCancel={() => setInitialModal(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <Container styleConfig={{ gap: '10px' }}>
          <Text size="md">{t('modal.alreadymember.title')}</Text>
          <Button size="sm" type="link" onClick={() => goto(t('links.myherbalifeLink'))}>
            {t('modal.alreadymember.visitButton')}
          </Button>
        </Container>
      </Modal>
    </StyledLayout>
  );
};

export default AppLayout;
