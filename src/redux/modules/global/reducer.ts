import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { initialized } from './actions';
import { IState } from './types';

const INITIAL_STATE: IState = {
  isInitialized: false,
};

const reducer = reducerWithInitialState<IState>(INITIAL_STATE).case(
  initialized,
  (state) => ({
    ...state,
    isInitialized: true,
  })
);

export { reducer as global };
