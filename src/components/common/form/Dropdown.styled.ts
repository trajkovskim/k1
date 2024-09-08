import { Select } from 'antd';
import { inputCss, StyledInputWithRightContainerProps } from 'components/common/form/Input.styled';
import { getCalcInputHeightCss } from 'components/common/form/utils';
import styled from 'styled-components';

export const StyledSelect = styled(Select)<StyledInputWithRightContainerProps>`
  ${inputCss}
  background: inherit;

  ${(props) =>
    props.theme.select &&
    props.variant &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    props.theme.select[props.variant] &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    createPropeties(props.theme.select[props.variant])};

  &,
  .ant-select-selector {
    width: 100%;
    height: ${(props) => props.newSize && getCalcInputHeightCss(props.theme, props.newSize, false)};
  }
`;
