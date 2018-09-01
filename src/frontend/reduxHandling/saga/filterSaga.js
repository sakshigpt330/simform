import { put, takeEvery } from 'redux-saga/effects';
import { filter } from '../../utils';

export const FILTER = function* lapiList() {
  yield takeEvery('FILTERS', function* (action) {
    yield put({ type: 'FILTER_STARTED' });
    try {
      yield put({ type: 'FILTER_SUCCESS', payload: filter(action.payload) });
    } catch (error) {
      yield put({ type: 'FILTER_FAILED' });
    }
  });
};
