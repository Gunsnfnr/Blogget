
import {setToken} from '../api/token.js';

const initialState = {
  token: '',
};

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: '',
  // localStorage.removeItem('bearer');
  // location.href = 'http://localhost:3000';
});

export const tokenMiddleware = (store) => (next) => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }

  if (action.type === DELETE_TOKEN) {
    setToken('');
  }

  next(action);
};


export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
