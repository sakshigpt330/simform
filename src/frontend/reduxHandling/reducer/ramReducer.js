export default function reducer(state = {
  size: [],
}, action) {
  switch (action.type) {
    case 'RAM_INITATED': {
      return { ...state, changingStatus: 'uninitiated' };
    }
    case 'RAM_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'RAM_SUCCESS': {
      return { ...state, changingStatus: 'success', size: action.payload };
    }
    case 'RAM_FAILED': {
      return { ...state, changingStatus: 'failed' };
    }
    default: {
      return state;
    }
  }
}
