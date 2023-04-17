import {
  POSTSDATA_REQUEST,
  POSTSDATA_REQUEST_ERROR,
  POSTSDATA_REQUEST_SUCCESS,
  POSTSDATA_REQUEST_SUCCESS_AFTER
} from './postsDataAction';


const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
};

export const postsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTSDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case POSTSDATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts[0],
        error: '',
        after: action.posts[1],
        isLast: !action.posts[1],
      };

    case POSTSDATA_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.posts[0]],
        error: '',
        after: action.posts[1],
        isLast: !action.posts[1],
      };

    case POSTSDATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
