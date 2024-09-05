import { initialState as initialStateBase } from 'context/base';
import baseReducer from 'context/base/reducer';
import { ApplicationContextState } from 'context/types';
import { combineReducers } from 'context/utils';

export const initialState: ApplicationContextState = {
  base: initialStateBase,
};

const rootReducer = combineReducers<Required<ApplicationContextState>>({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  base: baseReducer,
});

export default rootReducer;
