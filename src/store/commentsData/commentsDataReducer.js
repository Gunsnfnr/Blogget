import {
  COMMENTSDATA_REQUEST,
  COMMENTSDATA_REQUEST_ERROR,
  COMMENTSDATA_REQUEST_SUCCESS,
} from './commentsDataAction';


const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const commentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTSDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case COMMENTSDATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case COMMENTSDATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

