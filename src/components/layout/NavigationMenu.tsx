import { MenuProps } from 'antd';
import { Text } from 'components/common';
import { StyledNav } from 'components/layout/Layout.styled';
import { useNavigationOptions } from 'hooks';
import React from 'react';

type Props = {
  mode: MenuProps['mode'];
  onNavigate?: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createMenuOptions = (options: ReturnType<typeof useNavigationOptions>, onNavigate?: () => void): any =>
  Object.values(options).map((option) => ({
    key: option.label,
    label: <Text>{option.label}</Text>,
    onClick:
      option.navigate &&
      (() => {
        option.navigate?.();
        onNavigate?.();
      }),
    icon: option.icon,
    type: option.options ? 'submenu' : 'item',
    children: option.options ? createMenuOptions(option.options, onNavigate) : undefined,
  }));

export const findActive = (options?: ReturnType<typeof useNavigationOptions>): string[] => {
  if (!options) {
    return [];
  }

  for (const value of Object.values(options)) {
    if (value.active) {
      return [value.label, ...findActive(value.options)];
    }
  }

  return [];
};

const NavigationMenu: React.FC<Props> = (props) => {
  const navOptions = useNavigationOptions();
  const selectedKeys = findActive(navOptions);

  return (
    <nav>
      <StyledNav
        items={createMenuOptions(navOptions, props.onNavigate)}
        mode={props.mode}
        selectedKeys={selectedKeys}
      />
    </nav>
  );
};

export default NavigationMenu;
