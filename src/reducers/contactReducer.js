import * as types from '../types';

const initialState = {
  loading: false,
  contact: null
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.LOADING_CONTACT:
      return {
        ...state,
        loading: payload
      };
    case types.CONTACT_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: payload
      }
    default:
      return state;
  }
}
