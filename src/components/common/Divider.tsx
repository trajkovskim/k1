import { Divider } from 'antd';
import styled from 'styled-components';

const StyledDivider = styled(Divider)`
  height: ${(props) => props.type == 'vertical' && '100%'};
`;

export default StyledDivider;
