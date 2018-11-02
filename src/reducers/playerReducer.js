import * as types from '../types';

const initialState = {
  loading: false,
  playlist: [],
  player: false,
  currentTrackIndex: -1
}

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case types.LOADING_PLAYLIST:
      return {
        ...state,
        loading: payload
      };
    case types.PLAYLIST_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        playlist: payload
      }
    case types.OPEN_PLAYER:
      return {
        ...state,
        player: true
      }
    case types.CLOSE_PLAYER:
      return {
        ...state,
        player: false
      }
    case types.SELECT_TRACK:
      return {
        ...state,
        currentTrackIndex: payload
      }
    default:
      return state;
  }
}
