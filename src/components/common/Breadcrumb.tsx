import { HomeOutlined } from '@ant-design/icons';
import { Button } from 'components/common/form';
import Container from 'components/common/Container';
import { Text } from 'components/common/typography';
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
    <Container styleConfig={{ direction: 'row', gap: '0.3rem', alignItems: 'center' }}>
      {paths.map((path, index) => (
        <>
          {index !== paths.length - 1 ? (
            <Button
              key={path.pathname}
              size="md"
              icon={path.icon}
              onClick={() => navigate({ pathname: path.pathname })}
            >
              {path.label}
            </Button>
          ) : (
            <Text>{path.label}</Text>
          )}

          {index !== paths.length - 1 && <Text>{'>'}</Text>}
        </>
      ))}
    </Container>
  );
};

export default Breadcrumb;
