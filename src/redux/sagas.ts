import { all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import global from './modules/global/saga';

export default function* root() {
  yield all([global()]);
}
