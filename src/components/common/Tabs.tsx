import { Tabs as AntdTabs } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledTabs = styled(AntdTabs)`
  user-select: none;

  .ant-tabs-nav {
    margin-bottom: 0;
  }
`;

type Props = React.ComponentProps<typeof AntdTabs>;

const Tabs: React.FC<Props> = (props) => {
  return <StyledTabs {...props} />;
};

export default Tabs;
