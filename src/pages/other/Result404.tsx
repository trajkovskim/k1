import { Result } from 'antd';
import { Button, Container } from 'components/common';
import { useTranslation } from 'hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes';

// const StyledContainer = styled(Container)`
//   user-select: none;

//   &:hover::before {
//     width: 100%;
//   }

//   &::before {
//     content: '';
//     border-bottom: 9px #075ebb solid;
//     display: block;
//     width: 44%;
//     height: 10px;
//     margin-bottom: 10px;

//     transition: 200ms all;
//   }

//   *:first-child {
//     font-size: 5rem;
//   }

//   *:last-child {
//     font-size: 2.5rem;
//   }
// `;

const Result404: React.FC = () => {
  const t = useTranslation('result.404');
  const navigate = useNavigate();

  return (
    <Container styleConfig={{ centered: true }}>
      <Result
        status="404"
        title={t('title')}
        subTitle={t('subtitle')}
        extra={<Button onClick={() => navigate(Routes.INDEX)}>{t('backHomeButton')}</Button>}
      />
    </Container>
  );
};

export default Result404;
