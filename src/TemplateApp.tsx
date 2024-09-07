import ApplicationContextProvider from 'context';
import React from 'react';
import { Outlet } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeProvider';

const TemplateAppLayoutProvider: React.FC = () => {
  return (
    <ThemeProvider>
      <ApplicationContextProvider>
        <Outlet />
      </ApplicationContextProvider>
    </ThemeProvider>
  );
};

export default TemplateAppLayoutProvider;
