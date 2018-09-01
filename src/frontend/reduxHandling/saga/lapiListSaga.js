import { put, takeEvery } from 'redux-saga/effects';
import { LAPTOPS } from '../../metaComponents';

export const LAPI_LIST = function* lapiList() {
  yield takeEvery('LAPI', function* (action) {
    yield put({ type: 'LAPI_STARTED' });
    try {
      yield put({ type: 'LAPI_SUCCESS', payload: LAPTOPS });
    } catch (error) {
      yield put({ type: 'LAPI_FAILED' });
    }
  });
};
