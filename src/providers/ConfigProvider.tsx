import { ConfigProvider as AntdConfigProvider } from 'antd';
import React from 'react';
import { remToPx } from 'theme';

type Props = React.PropsWithChildren;

const ConfigProvider: React.FC<Props> = ({ children }) => {
  return (
    <AntdConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#fff',
            footerBg: '#232323',
          },
        },
        token: {
          colorPrimary: '#000',
          fontSize: remToPx(0.875),
          padding: 3.2,
        },
      }}
    >
      {children}
    </AntdConfigProvider>
  );
};

export default ConfigProvider;
