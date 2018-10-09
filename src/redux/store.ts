import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import reducers, { ApplicationState } from './reducers';
import sagas from './sagas';
import { PrimaryNav } from '../navigation';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  // @ts-ignore
  (state) => state.nav
);
const PrimaryNavRedux = reduxifyNavigator(PrimaryNav, 'root');
const mapStateToProps = (state: ApplicationState) => ({
  state: state.nav,
});

export const PrimaryNavReduxConnected = connect(mapStateToProps)(
  // @ts-ignore
  PrimaryNavRedux
);

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
  const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware, middleware))
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
