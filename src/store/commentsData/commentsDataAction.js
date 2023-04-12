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
