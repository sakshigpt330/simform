import { ALL } from  '../../metaComponents';

export default function reducer(state = {
  data: ALL,
}, action) {
  switch (action.type) {
    case 'FILTER_INITATED': {
      return { ...state, changingStatus: 'uninitiated' };
    }
    case 'FILTER_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'FILTER_SUCCESS': {
      return { ...state, changingStatus: 'success', data: (state.data.concat(action.payload)) };
    }
    case 'FILTER_FAILED': {
      return { ...state, changingStatus: 'failed' };
    }
    default: {
      return state;
    }
  }
}
