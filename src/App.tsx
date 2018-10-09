import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PrimaryNavReduxConnected } from './redux/store';
import store from './redux/index';
import { start, finish } from './redux/modules/global/actions';

export default class App extends Component<void> {
  componentDidMount() {
    store.dispatch(start());
  }

  componentWillUnmount() {
    store.dispatch(finish());
  }

  render() {
    return (
      <Provider store={store}>
        <PrimaryNavReduxConnected />
      </Provider>
    );
  }
}
