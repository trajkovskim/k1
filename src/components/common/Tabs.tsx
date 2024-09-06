import { Tabs as AntdTabs } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledTabs = styled(AntdTabs)``;

type Props = React.ComponentProps<typeof AntdTabs>;

const Tabs: React.FC<Props> = (props) => {
  return <StyledTabs {...props} />;
};

export default Tabs;
