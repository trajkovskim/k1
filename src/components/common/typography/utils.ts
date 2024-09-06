import { FontSize } from 'components/common/typography/types';

export const transformSize = (size: FontSize): `fontSize${Uppercase<Exclude<FontSize, 'md'>>}` | 'fontSize' =>
  `fontSize${size === 'md' ? '' : (size.toUpperCase() as Uppercase<Exclude<FontSize, 'md'>>)}`;
