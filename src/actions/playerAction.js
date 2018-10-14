import * as types from '../types';
import client from '../contentfulCredentials';

export const playlistLoading = (isLoading = true) => ({
  type: types.LOADING_PLAYLIST,
  payload: isLoading
})

export const playlistLoadSuccess = data => ({
  type: types.PLAYLIST_LOADED_SUCCESS,
  payload: data
});

export const playlistLoad = playlist => dispatch => {
  dispatch(playlistLoading());
  dispatch(playlistLoadSuccess(playlist));
}

export const openPlayer = () => ({
  type: types.OPEN_PLAYER,
  payload: true
});

export const closePlayer = () => dispatch => ({
  type: types.CLOSE_PLAYER,
  payload: false
});

export const selectTrack = index => dispatch => {
  dispatch(openPlayer());
  dispatch({
    type: types.SELECT_TRACK,
    payload: index
  });
}
