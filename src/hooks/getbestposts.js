// import {useEffect, useState} from 'react';
// import {URL_API} from '../api/const.js';
// // import {tokenContext} from '../context/tokenContext';

// export const useGetPosts = () => {
//   console.log(1);
//   const {token, delToken} = useState('');
//   console.log('getPostsToken: ', token);

//   useEffect(() => {
//     fetch(`${URL_API}/best`, {
//       headers: {
//         Authorization: `bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (response.status === 401) {
//           console.log('response.status 401');
//           delToken();
//           throw new Error('Something went wrong');
//         }
//         console.log('getPostsResponse: ', response);
//         return response.json;
//       })
//       .catch(err => {
//         console.log('err: ', err);
//       });
//   }, [token]);
// };

