import { BaseState } from 'context/base';

export type ApplicationContextState = {
  base: BaseState;
};

export type Action = {
  type: string;
};

export type Required<T> = {
  [P in keyof T]-?: T[P];
};
