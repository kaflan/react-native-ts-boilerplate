import { SagaIterator } from 'redux-saga';
import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { start, filmListLoaded } from './actions';

const url: string = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json';

function* initWorker(): SagaIterator {
  try {
    const { data } = yield call(axios.get, url);
    yield put({ ...filmListLoaded(data) })
    console.log({ ...filmListLoaded(data) })
  } catch (error) {
    console.error(error);
  }
}

export default function* root(): SagaIterator {
  yield takeEvery(start, initWorker);
}
