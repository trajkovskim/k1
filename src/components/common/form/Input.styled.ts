import { CheckOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Input as AntdInput, AutoComplete as AntdAutoComplete } from 'antd';
import Spinner from 'components/common/Spinner';
import { ControlSize } from 'components/common/form/types';
import { getCalcInputHeightCss } from 'components/common/form/utils';
import styled, { css } from 'styled-components';

export type StyledInputProps = {
  newSize?: ControlSize;
  noBorder?: boolean;
};

export type StyledInputWithRightContainerProps = StyledInputProps & { rightcontainerwidth?: number };

export const inputCss = css<StyledInputWithRightContainerProps>`
  padding-right: ${(props) => `${props.rightcontainerwidth}px`};

  &::placeholder {
    font-size: inherit;
  }
`;

export const StyledAutocomplete = styled(AntdAutoComplete)<StyledInputWithRightContainerProps>`
  ${inputCss}
  height: ${(props) => props.newSize && getCalcInputHeightCss(props.theme, props.newSize, false)};
`;

export const StyledInput = styled(AntdInput)<StyledInputWithRightContainerProps>`
  ${inputCss}
  height: ${(props) => props.newSize && getCalcInputHeightCss(props.theme, props.newSize, false)};
`;

export const StyledTextarea = styled(AntdInput.TextArea)<StyledInputWithRightContainerProps>`
  ${inputCss}
`;

type StyledFormFieldContainerProps = { label?: string; size?: ControlSize };

export const StyledFormFieldContainer = styled.div<StyledFormFieldContainerProps>`
  font-size: ${(props) => props.size && props.theme.fontSize[props.size]};

  ${(props) =>
    props.label &&
    css`
      > input:not(input[type='checkbox']),
      > input:not(input[type='radio']) {
        height: ${props.size && getCalcInputHeightCss(props.theme, props.size, true)};
        padding-top: ${props.size && `calc(${props.size && props.theme.fontSize[props.size]} + 10px)`};
      }

      &::before {
        content: '${props.label}';
        pointer-events: none;
        top: 5px;
        left: 10px;
        font-size: ${props.size &&
        `calc(${props.theme.fontSize[props.size]} - ${props.theme.fontSize[props.size]} / 4.5)`};
        position: absolute;
      }
    `}
`;

export const TextareaWrapper = styled(StyledFormFieldContainer)``;

export const SelectWrapper = styled(StyledFormFieldContainer)``;

export const StyledRightContainer = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  padding-right: 5px;
  align-items: center;
`;

export const iconCss = css`
  user-select: none;
  width: 35px;
  padding: 0 7.5px;
  height: 100%;
`;

export const StyledGiCheckMark = styled(CheckOutlined)`
  ${iconCss}
  color: green;
`;

export const StyledBiErrorCircle = styled(ExclamationCircleFilled)`
  ${iconCss}
`;

export const StyledSpinner = styled(Spinner)`
  ${iconCss}
`;

export type StyledContainerProps = {
  fullwidth?: boolean;
};

export const StyledContainer = styled.div<StyledContainerProps>`
  /* position: relative; */
  width: 100%;
  max-width: ${(props) => (props.fullwidth ? '100%' : 'max-content')};
`;
