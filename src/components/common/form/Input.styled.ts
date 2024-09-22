import { CheckOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { AutoComplete as AntdAutoComplete, Input as AntdInput } from 'antd';
import Spinner from 'components/common/Spinner';
import { ControlSize } from 'components/common/form/types';
import { getCalcInputHeightCss, getCalcInputLabelCss, getCalcPaddingTopCss } from 'components/common/form/utils';
import styled, { css } from 'styled-components';

export type StyledInputProps = {
  newSize?: ControlSize;
  noBorder?: boolean;
};

export type StyledInputWithRightContainerProps = StyledInputProps & { rightcontainerwidth?: number };

export const inputCss = css<StyledInputWithRightContainerProps>`
  padding-right: ${(props) => props.rightcontainerwidth && `${props.rightcontainerwidth}px`};

  &::placeholder {
    font-size: inherit;
  }
`;

export const StyledAutocomplete = styled(AntdAutoComplete)<StyledInputWithRightContainerProps>`
  ${inputCss}
`;

export const StyledInput = styled(AntdInput)<StyledInputWithRightContainerProps>`
  ${inputCss}
`;

export const StyledTextarea = styled(AntdInput.TextArea)<StyledInputWithRightContainerProps>`
  ${inputCss}
`;

type StyledFormFieldContainerProps = {
  label?: string;
  fullwidth?: boolean;
  size?: ControlSize;
};

export const StyledFormFieldContainer = styled.div<StyledFormFieldContainerProps>`
  position: relative;
  font-size: ${(props) => props.size && props.theme.fontSize[props.size]};

  [class^='ant-'][class*='-borderless'] {
    padding-left: 0;

    .ant-select-selector {
      padding-left: 0;
    }
  }

  input:not(.ant-select-selection-search-input),
  .ant-select {
    font-size: inherit;
    height: ${(props) => props.size && getCalcInputHeightCss(props.theme, props.size, !!props.label)} !important;
  }

  ${(props) =>
    props.label &&
    css`
      input:not(.ant-select-selection-search-input),
      .ant-select-arrow,
      .ant-select-selection-item,
      .ant-select-selection-placeholder {
        padding-top: ${props.size && getCalcPaddingTopCss(props.theme, props.size)} !important;
      }

      &:has([class^='ant-'][class*='-borderless'])::before {
        left: 0;
      }

      &::before {
        content: '${props.label}';
        pointer-events: none;
        top: 5px;
        left: calc(16px - 16px / 4.5);
        font-size: ${props.size && getCalcInputLabelCss(props.theme, props.size)};
        position: absolute;
        z-index: 1;
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

  .ant-select {
    width: ${(props) => (props.fullwidth ? '100%' : 'max-content')};
  }
`;
