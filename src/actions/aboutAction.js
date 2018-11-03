import * as types from '../types';
import client from '../../misc/contentful';

export const aboutLoading = (isLoading = true) => ({
  type: types.LOADING_ABOUT,
  payload: isLoading
})

export const aboutLoadSuccess = data => ({
  type: types.ABOUT_LOADED_SUCCESS,
  payload: data
});

export const aboutLoad = () => dispatch => {
  dispatch(aboutLoading());
  // Get entries by content type
  client.getEntries({ 'content_type': 'about' })
    .then(({items}) => {
      // console.log(items[0].fields);
      dispatch(aboutLoadSuccess(items[0].fields));
    })
    .catch(err => {
      console.log(err);
      dispatch(aboutLoading(false));
    });
}
