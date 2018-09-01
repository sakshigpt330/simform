import { put, takeEvery } from 'redux-saga/effects';
import { RAM_SIZES } from '../../metaComponents';

export const RAM_LIST = function* lapiList() {
  yield takeEvery('RAM', function* (action) {
    yield put({ type: 'RAM_STARTED' });
    try {
      yield put({ type: 'RAM_SUCCESS', payload: RAM_SIZES });
    } catch (error) {
      yield put({ type: 'RAM_FAILED' });
    }
  });
};
