import { ShopProductCard } from 'components/card';
import { BoxAnimation, Container, Tabs, Text, Title } from 'components/common';
import { WhiteBackgroundContainer } from 'components/layout';
import PageHeader from 'components/PageHeader';
import { useLanguage, useTranslation } from 'hooks';
import { PAGE_LEFT_PADDING, PAGE_MAX_WIDTH, PAGE_RIGHT_PADDING } from 'pages/constants';
import SortDropdown from 'pages/shop/SortDropdown';
import { ProductTypeFilterExtender, QueryParameters } from 'pages/shop/types';
import { convertProductTypesToFilterOptions } from 'pages/shop/utils';
import { getPrice } from 'pages/view-details/utils';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { createViewDetailsRoute, Routes } from 'routes';
import { ProductFilters, ProductType, searchProducts, SortBy } from 'services';
import { createQueryParameters, createQueryParametersObject } from 'utils';

type ListHeaderProps = {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
  sortBy?: SortBy;
  onSortByChange?: (sortBy: SortBy) => void;
};

const ListHeader: React.FC<ListHeaderProps> = (props) => {
  const tBase = useTranslation();

  const onTabChange = (activeKey: string) => {
    if (activeKey !== ProductTypeFilterExtender.ALL) {
      props.onFiltersChange({ types: [activeKey as ProductType] });
    } else {
      props.onFiltersChange({});
    }
  };

  return (
    <WhiteBackgroundContainer
      style={{ boxShadow: '8px 13px 8px -19px #000' }}
      styleConfig={{
        padding: { top: 'lg', left: 'lg', right: 'lg' },
        gap: '15px',
      }}
    >
      <SortDropdown sortBy={props.sortBy} onSortByChange={props.onSortByChange} />

      <Tabs
        onChange={onTabChange}
        activeKey={props.filters.types?.[0] ?? ProductTypeFilterExtender.ALL}
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

const INITIAL_SORT_BY = SortBy.UNSORTED;
const INITIAL_PRODUCT_FILTERS: ProductFilters = {};

const Shop: React.FC = () => {
  const t = useTranslation('shop');
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryParameters = createQueryParametersObject<QueryParameters>(searchParams.toString());

  const filters: ProductFilters = {
    types: (queryParameters.types?.split(',') as ProductFilters['types']) ?? INITIAL_PRODUCT_FILTERS.types,
    featured: (queryParameters.featured === 'true' || undefined) ?? INITIAL_PRODUCT_FILTERS.featured,
  };

  const sortBy: SortBy = (queryParameters.sortBy as SortBy) ?? SortBy.UNSORTED;

  const updateLocation = (filters: ProductFilters, sortBy: SortBy) => {
    navigate({
      search: createQueryParameters(filters, sortBy !== INITIAL_SORT_BY ? { sortBy } : {}),
      pathname: Routes.SHOP,
    });
  };

  const products = searchProducts({ filters, sortBy, acceptLanguage: language });

  return (
    <Container mdStyle={{ gap: '20px' }} lgStyle={{ gap: '3rem', padding: { bottom: 'xl' } }}>
      <PageHeader xs={12} styleConfig={{ direction: 'row', centered: true, padding: 'sm' }}>
        <Title title={t('title')} />
      </PageHeader>

      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{ centered: true }}
        mdStyle={{ padding: { left: PAGE_LEFT_PADDING, right: PAGE_RIGHT_PADDING } }}
      >
        <ListHeader
          onFiltersChange={(filters) => updateLocation(filters, sortBy)}
          filters={filters}
          sortBy={sortBy}
          onSortByChange={(sortBy) => updateLocation(filters, sortBy)}
        />
      </Container>

      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{ wrap: true, direction: 'row', centered: true, alignItems: 'stretch' }}
        mdStyle={{ padding: { left: PAGE_LEFT_PADDING, right: PAGE_RIGHT_PADDING }, gap: '20px' }}
      >
        {products.map((product) => (
          <Container key={product.id} xs={12} sm={6} lg={4} xl={3}>
            <BoxAnimation fullheight>
              <ShopProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                amount={getPrice(product)}
                href={createViewDetailsRoute(product.id.toString())}
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
