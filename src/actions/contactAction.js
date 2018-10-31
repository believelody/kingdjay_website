import * as types from '../types';
import client from '../contentfulCredentials';

export const contactLoading = (isLoading = true) => ({
  type: types.LOADING_CONTACT,
  payload: isLoading
})

export const contactLoadSuccess = data => ({
  type: types.CONTACT_LOADED_SUCCESS,
  payload: data
});

export const contactLoad = () => dispatch => {
  dispatch(contactLoading());
  // Get entries by content type
  client.getEntries({ 'content_type': 'contact' })
    .then(({items}) => {
      // console.log(items[0].fields);
      dispatch(contactLoadSuccess(items[0].fields));
    })
    .catch(err => {
      console.log(err);
      dispatch(contactLoading(false));
    });
}
