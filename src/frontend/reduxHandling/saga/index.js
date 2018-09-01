import { all } from 'redux-saga/effects';

import { LAPI_LIST } from './lapiListSaga';
import { RAM_LIST } from './ramSaga';
import { FILTER } from './filterSaga';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([
    LAPI_LIST(),
    RAM_LIST(),
    FILTER(),
  ]);
};

export default rootSaga;
