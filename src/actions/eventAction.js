import * as types from '../types';
import client from '../contentfulCredentials';

export const eventLoading = (isLoading = true) => ({
  type: types.LOADING_EVENT,
  payload: isLoading
});

export const eventLoadSuccess = data => ({
  type: types.EVENT_LOADED_SUCCESS,
  payload: data
});

export const eventLoad = () => dispatch => {
  dispatch(eventLoading());
  // Get entries by content type
  client.getEntries({ 'content_type': 'event' })
    .then(({items}) => {
      // console.log(items[0].fields);
      dispatch(eventLoadSuccess(items[0].fields));
    })
    .catch(err => {
      console.log(err);
      dispatch(eventLoading(false));
    });
}
