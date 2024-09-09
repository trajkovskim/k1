import TemplateApp from 'TemplateApp';
import { AppLayout } from 'components/layout';
import { Contact, DoTheChange, FitMarathon, Home, Result404, Shop, ViewDetails } from 'pages';
import React from 'react';
import { Route } from 'react-router-dom';

export enum Routes {
  INDEX = '/',
  ANY_WITH_LAYOUT = '/',
  SHOP = '/shop',
  SHOP_VIEW_DETAILS = '/shop/:id',
  ANY_OTHER = '*',
  PROJECTS = '/projects',
  DO_THE_CHANGE = '/projects/do-the-change',
  FIT_MARATHON = '/projects/fit-marathon',
  NOT_FOUND = '/not-found',
  CONTACT = '/contact',
}

export type RouteOption = Omit<React.ComponentProps<typeof Route>, 'children'> & {
  children?: Record<string, RouteOption>;
};

export type RouteOptions = Record<string, RouteOption>;

const routes: RouteOptions = {
  [Routes.INDEX]: {
    element: <TemplateApp />,
    children: {
      [Routes.ANY_WITH_LAYOUT]: {
        element: <AppLayout />,
        children: {
          [Routes.INDEX]: {
            element: <Home />,
          },
          [Routes.SHOP]: {
            element: <Shop />,
          },
          [Routes.SHOP_VIEW_DETAILS]: {
            element: <ViewDetails />,
          },
          [Routes.CONTACT]: {
            element: <Contact />,
          },
          [Routes.DO_THE_CHANGE]: {
            element: <DoTheChange />,
          },
          [Routes.FIT_MARATHON]: {
            element: <FitMarathon />,
          },
          [Routes.ANY_OTHER]: {
            element: <Result404 />,
          },
        },
      },
    },
  },
};

export const createViewDetailsRoute = (id: string) => Routes.SHOP_VIEW_DETAILS.replace(':id', id);

export default routes;
