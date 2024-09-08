import { HomeOutlined } from '@ant-design/icons';
import Container from 'components/common/Container';
import { Button } from 'components/common/form';
import { useTranslation } from 'hooks';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Routes } from 'routes';

type Props = {
  idLabel?: React.ReactNode;
};

const Breadcrumb: React.FC<Props> = (props) => {
  const t = useTranslation('breadcrumb');
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const paths: {
    label: React.ReactNode;
    pathname?: string;
    icon?: React.ReactNode;
  }[] = [
    {
      label: t('home'),
      pathname: Routes.INDEX,
      icon: <HomeOutlined />,
    },
  ];

  if (location.pathname.startsWith(Routes.SHOP)) {
    paths.push({ label: t('shop'), pathname: Routes.SHOP });
  }

  if (props.idLabel || id) {
    paths.push({ label: props.idLabel ?? id });
  }

  return (
    <Container styleConfig={{ direction: 'row', gap: '0.3rem' }}>
      {paths.map((path, index) => (
        <>
          {index !== paths.length - 1 ? (
            <Button
              key={path.pathname}
              type="link"
              size="md"
              icon={path.icon}
              onClick={() => navigate({ pathname: path.pathname })}
            >
              {path.label}
            </Button>
          ) : (
            <Button disabled type="link" size="md">
              {path.label}
            </Button>
          )}

          {index !== paths.length - 1 && (
            <Button disabled type="link" size="md">
              {'>'}
            </Button>
          )}
        </>
      ))}
    </Container>
  );
};

export default Breadcrumb;
