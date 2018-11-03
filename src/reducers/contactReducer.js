import * as types from '../types';

const initialState = {
  loading: false,
  contact: null,
  status: null,
  submissionPending: false
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.LOADING_CONTACT:
      return {
        ...state,
        loading: payload
      };
    case types.CONTACT_SUBMISSION_PENDING:
      return {
        ...state,
        submissionPending: payload
      };
    case types.CONTACT_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: payload
      }
    case types.CONTACT_SEND_FORM:
      console.log(payload);
      return {
        ...state,
        submissionPending: false,
        status: payload
      }
    case types.CONTACT_CLEAR_MESSAGE:
      return {
        ...state,
        status: null
      }
    default:
      return state;
  }
}
