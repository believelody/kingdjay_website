import * as types from '../types';

const initialState = {
  loading: false,
  mix: {}
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.LOADING_MIX:
      return {
        ...state,
        loading: payload
      };
    case types.MIX_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        mix: payload
      }
    default:
      return state;
  }
}
