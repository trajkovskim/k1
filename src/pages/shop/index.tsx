import { ShopProductCard } from 'components/card';
import { BoxAnimation, Container, Tabs, Text, Title } from 'components/common';
import { WhiteBackgroundContainer } from 'components/layout';
import PageHeader from 'components/PageHeader';
import { useLanguage, useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import SortDropdown from 'pages/shop/SortDropdown';
import { ProductTypeFilterExtender } from 'pages/shop/types';
import { convertProductTypesToFilterOptions } from 'pages/shop/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createViewDetailsRoute } from 'routes';
import { ProductFilters, ProductType, searchProducts, SortBy } from 'services';

type ListHeaderProps = {
  setFilters: (filters: ProductFilters) => void;
  sortBy?: SortBy;
  onSortByChange?: (sortBy: SortBy) => void;
};

const ListHeader: React.FC<ListHeaderProps> = (props) => {
  const tBase = useTranslation();

  const onTabChange = (activeKey: string) => {
    if (activeKey !== ProductTypeFilterExtender.ALL) {
      props.setFilters({ types: [activeKey as ProductType] });
    } else {
      props.setFilters({});
    }
  };

  return (
    <WhiteBackgroundContainer
      style={{ boxShadow: '8px 13px 8px -19px #000' }}
      xs={PAGE_MAX_WIDTH}
      styleConfig={{ centered: true, padding: { top: 'lg', left: 'lg', right: 'lg' }, gap: '15px' }}
    >
      <SortDropdown sortBy={props.sortBy} onSortByChange={props.onSortByChange} />

      <Tabs
        onChange={onTabChange}
        defaultActiveKey={ProductTypeFilterExtender.ALL}
        items={convertProductTypesToFilterOptions(tBase).map((option) => ({
          key: option.key,
          label: (
            <Text size="md" strong>
              {option.label}
            </Text>
          ),
        }))}
      />
    </WhiteBackgroundContainer>
  );
};

const Shop: React.FC = () => {
  const navigate = useNavigate();
  const t = useTranslation('shop');
  const [filters, setFilters] = useState<ProductFilters>({});
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.UNSORTED);
  const { language } = useLanguage();

  const products = searchProducts({ filters, sortBy, acceptLanguage: language });

  return (
    <Container lgStyle={{ gap: '3rem', padding: { bottom: 'xl' } }}>
      <PageHeader xs={12} styleConfig={{ direction: 'row', centered: true, padding: 'sm' }}>
        <Title title={t('title')} />
      </PageHeader>

      <ListHeader setFilters={setFilters} sortBy={sortBy} onSortByChange={setSortBy} />

      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{ wrap: true, direction: 'row', centered: true }}
        lgStyle={{ gap: '20px' }}
      >
        {products.map((product) => (
          <Container key={product.id} xs={12} sm={6} lg={4} xl={3}>
            <BoxAnimation>
              <ShopProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                amount={product.price.toString()}
                onView={() => navigate(createViewDetailsRoute(product.id.toString()))}
                images={[product.image]}
                imageHeight="280px"
              />
            </BoxAnimation>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Shop;
