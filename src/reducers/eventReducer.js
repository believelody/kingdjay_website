import * as types from '../types';

const initialState = {
  loading: false,
  event: null
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.LOADING_EVENT:
      return {
        ...state,
        loading: payload
      };
    case types.EVENT_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        event: payload
      }
    default:
      return state;
  }
}
