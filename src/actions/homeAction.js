import * as types from '../types';
import client from '../../misc/contentful';

export const homeLoading = (isLoading = true) => ({
  type: types.LOADING_HOME,
  payload: isLoading
})

export const homeLoadSuccess = data => ({
  type: types.HOME_LOADED_SUCCESS,
  payload: data
});

export const homeLoad = () => dispatch => {
  dispatch(homeLoading());
  // Get entries by content type
  client.getEntries({ 'content_type': 'home' })
    .then(({items}) => {
      // console.log(items[0].fields);
      dispatch(homeLoadSuccess(items[0].fields));
    })
    .catch(err => {
      console.log(err);
      dispatch(homeLoading(false));
    });
}
