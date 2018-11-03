import * as types from '../types';
import client from '../contentfulCredentials';
import axios from 'axios';

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

export const sendEmail = data => dispatch => {
  dispatch(contactLoading());
  axios.post('/.netlify/functions/send-email', data)
    .then(({status}) => dispatch({
      type: types.CONTACT_SEND_FORM,
      payload: status
    }))
    .catch(err => {
      console.error(err);
      dispatch(contactLoading(false));
    })
}
