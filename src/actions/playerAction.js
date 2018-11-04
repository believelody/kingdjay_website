import * as types from '../types';

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
  type: types.OPEN_PLAYER
});

export const closePlayer = () => ({
  type: types.CLOSE_PLAYER
});

export const selectTrack = index => dispatch => {
  dispatch(openPlayer());
  dispatch({
    type: types.SELECT_TRACK,
    payload: index
  });
}
