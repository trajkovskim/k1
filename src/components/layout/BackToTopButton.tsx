import { UpOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from 'utils';

export const BackToTopButton: React.FC = () => {
  const portalsElement = document.getElementById('portals') as Element;
  const location = useLocation();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(scrollToTop, 0);

    const scrollEventHandler = () => setVisible(scrollY > 300);
    window.addEventListener('scroll', scrollEventHandler);

    return () => {
      window.removeEventListener('scroll', scrollEventHandler);
    };
  }, [location]);

  if (!visible) {
    return null;
  }

  return createPortal(<FloatButton icon={<UpOutlined />} onClick={scrollToTop} type="primary" />, portalsElement);
};
