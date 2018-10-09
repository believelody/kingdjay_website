import * as types from '../types';

const initialState = {
  loading: false,
  event: {}
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    default:
      return state;
  }
}
