import axios from 'axios';
import {URL_API} from '../../api/const.js';

export const COMMENTSDATA_REQUEST = 'COMMENTSDATA_REQUEST';
export const COMMENTSDATA_REQUEST_SUCCESS = 'COMMENTSDATA_REQUEST_SUCCESS';
export const COMMENTSDATA_REQUEST_ERROR = 'COMMENTSDATA_REQUEST_ERROR';

export const commentsDataRequest = () => ({
  type: COMMENTSDATA_REQUEST,
  error: '',
});

export const commentsDataRequestSuccess = (data) => ({
  type: COMMENTSDATA_REQUEST_SUCCESS,
  data,
});

export const commentsDataRequestError = (error) => ({
  type: COMMENTSDATA_REQUEST_ERROR,
  error,
});


export const commentsDataRequestAsync = (id) => (dispatch, getState) => {
  dispatch(commentsDataRequest());
  const token = getState().token.token;

  token && axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ({data: [
        {
          data: {
            children: [{data: post}],
          },
        },
        {
          data: {
            children,
          },
        },
      ]}) => {
        const comments = children.map(item => item.data);
        // setCommentsData([post, comments]);
        const data = [post, comments];
        dispatch(commentsDataRequestSuccess(data));
      },
    )
    .catch((err) => {
      dispatch(commentsDataRequestError(err));
      console.error(err);
    });
};
