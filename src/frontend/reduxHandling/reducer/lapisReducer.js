export default function reducer(state = {
  name: [],
}, action) {
  switch (action.type) {
    case 'LAPI_INITATED': {
      return { ...state, changingStatus: 'uninitiated' };
    }
    case 'LAPI_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'LAPI_SUCCESS': {
      return { ...state, changingStatus: 'success', name: action.payload };
    }
    case 'LAPI_FAILED': {
      return { ...state, changingStatus: 'failed' };
    }
    default: {
      return state;
    }
  }
}
