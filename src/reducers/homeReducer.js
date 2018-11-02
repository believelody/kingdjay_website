import * as types from '../types';

const initialState = {
  loading: false,
  home: null
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.LOADING_HOME:
      return {
        ...state,
        loading: payload
      };
    case types.HOME_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        home: payload
      }
    default:
      return state;
  }
}
