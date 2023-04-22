import axios from 'axios';
import {URL_API} from '../../api/const.js';
// import {commentsSlice} from './commentsSlice.js';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const COMMENTSDATA_REQUEST = 'COMMENTSDATA_REQUEST';
export const COMMENTSDATA_REQUEST_SUCCESS = 'COMMENTSDATA_REQUEST_SUCCESS';
export const COMMENTSDATA_REQUEST_ERROR = 'COMMENTSDATA_REQUEST_ERROR';

// export const commentsDataRequestAsync = (id) => (dispatch, getState) => {
//   const token = getState().token.token;
//   dispatch(commentsSlice.actions.commentsDataRequest());

//   token && axios(`${URL_API}/comments/${id}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then(
//       ({data: [
//         {
//           data: {
//             children: [{data: post}],
//           },
//         },
//         {
//           data: {children},
//         },
//       ]}) => {
//         const comments = children.map(item => item.data);
//         // const data = [post, comments];
//         // console.log('data: ', data);
//         dispatch(
//           commentsSlice.actions.commentsDataRequestSuccess({post, comments})
//         );
//       },
//     )
//     .catch((error) => {
//       dispatch(commentsSlice.actions.commentsDataRequestError({error}));
//       console.error(error);
//     });
// };

export const commentsDataRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
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
            data: {children},
          },
        ]}) => {
          const comments = children.map(item => item.data);
          return {post, comments};
        },
      )
      .catch((error) => ({error}));
  },
);
