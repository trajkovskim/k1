import {
  and,
  isControl,
  isEnumControl,
  isIntegerControl,
  isLayout,
  isMultiLineControl,
  isStringControl,
  JsonFormsRendererRegistryEntry,
  optionIs,
  or,
  rankWith,
  scopeEndsWith,
} from '@jsonforms/core';
import AntdFormItemRenderer from 'components/common/jsonform/AntdFormItemRenderer';

import AutocompleteControl from 'components/common/jsonform/renderers/AutocompleteControl';
import CounterControl from 'components/common/jsonform/renderers/CounterControl';
import DropdownControl from 'components/common/jsonform/renderers/DropdownControl';
import InputControl from 'components/common/jsonform/renderers/InputControl';
import LayoutControl from 'components/common/jsonform/renderers/LayoutControl';
import TextareaControl from 'components/common/jsonform/renderers/TextareaControl';

export const renderers: JsonFormsRendererRegistryEntry[] = [
  {
    tester: rankWith(1, isLayout),
    renderer: LayoutControl,
  },
  {
    tester: rankWith(1, or(isStringControl, isIntegerControl)),
    renderer: InputControl,
  },
  {
    tester: rankWith(2, isEnumControl),
    renderer: DropdownControl,
  },
  {
    tester: rankWith(2, and(isEnumControl, optionIs('autocomplete', true))),
    renderer: AutocompleteControl,
  },
  {
    tester: rankWith(1, and(isStringControl, isMultiLineControl)),
    renderer: TextareaControl,
  },
  {
    tester: rankWith(2, scopeEndsWith('quantity')),
    renderer: CounterControl,
  },
];

export const antdFormItemRenderer: JsonFormsRendererRegistryEntry = {
  tester: rankWith(5, isControl),
  renderer: AntdFormItemRenderer,
};
