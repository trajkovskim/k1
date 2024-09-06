import { Select } from 'antd';
import { inputCss, StyledInputWithRightContainerProps } from 'components/common/form/Input.styled';
import { getCalcInputHeightCss } from 'components/common/form/utils';
import styled from 'styled-components';

export const StyledSelect = styled(Select)<StyledInputWithRightContainerProps>`
  ${inputCss}
  background: inherit;
  height: ${(props) => props.newSize && getCalcInputHeightCss(props.theme, props.newSize, false)};
`;
