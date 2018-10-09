import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';
import { start } from './actions';

function* initWorker(): SagaIterator {
  yield call(console.log, 'startup saga works');
}

export default function* root(): SagaIterator {
  yield takeEvery(start, initWorker);
}
