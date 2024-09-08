import { Dropdown } from 'components/common/form';
import { useTranslation } from 'hooks';
import { convertSortByToOptions } from 'pages/shop/utils';
import React from 'react';
import { SortBy } from 'services';

type Props = {
  fullwidth?: boolean;
  onSortByChange?: (sortBy: SortBy) => void;
  sortBy?: SortBy;
};

const SortAndSizeDropdowns: React.FC<Props> = (props) => {
  const t = useTranslation('shop');

  return (
    <>
      <Dropdown
        noBorder
        variant="borderless"
        size="md"
        label={t('pagination.sortByInput.label')}
        fullwidth
        value={props.sortBy}
        onChange={(value) => props.onSortByChange?.(value)}
        options={convertSortByToOptions(t)}
      />
      {/* <Dropdown
        noBorder
        size="md"
        label={t('pagination.resultSizeInput.label')}
        fullwidth={props.fullwidth}
        value={props.pageSize}
        onChange={(event) => props.onPageSizeChange && props.onPageSizeChange(Number(event.target.value))}
        options={convertPageSizeToOptions(t)}
      /> */}
    </>
  );
};

export default SortAndSizeDropdowns;
