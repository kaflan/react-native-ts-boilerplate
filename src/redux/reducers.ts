import { combineReducers, Reducer } from 'redux';
import {
  createNavigationReducer,
  ReducerState,
} from 'react-navigation-redux-helpers';
import { PrimaryNav } from '../navigation';
import { IState as IGlobalState } from './modules/global/types';
import { global } from './modules/global/reducer';

export interface ApplicationState {
  global: IGlobalState;
  nav: ReducerState;
}

const navReducer = createNavigationReducer(PrimaryNav);
const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  global,
  nav: navReducer,
});

export default reducers;
