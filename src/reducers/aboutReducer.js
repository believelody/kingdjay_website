import * as types from '../types';

const initialState = {
  loading: false,
  about: null
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.LOADING_ABOUT:
      return {
        ...state,
        loading: payload
      };
    case types.ABOUT_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        about: payload
      }
    default:
      return state;
  }
}
