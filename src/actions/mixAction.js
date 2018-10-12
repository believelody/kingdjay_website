import * as types from '../types';
import client from '../contentfulCredentials';

export const mixLoading = (isLoading = true) => ({
  type: types.LOADING_MIX,
  payload: isLoading
})

export const mixLoadSuccess = data => ({
  type: types.MIX_LOADED_SUCCESS,
  payload: data
});

export const mixLoad = () => dispatch => {
  dispatch(eventLoading());
  // Get entries by content type
  client.getEntries({ 'content_type': 'mix' })
    .then(({items}) => {
      // console.log(items[0].fields);
      dispatch(mixLoadSuccess(items[0].fields));
    })
    .catch(err => {
      console.log(err);
      dispatch(mixLoading(false));
    });
}
