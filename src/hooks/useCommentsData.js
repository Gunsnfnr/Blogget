import {useEffect, useState} from 'react';
import {URL_API} from '../api/const.js';
import {getToken} from '../api/token.js';
// import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const [commentsData, setCommentsData] = useState({});
  const token = getToken();

  useEffect(() => {
    token && fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
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
        ]) => {
          const comments = children.map(item => item.data);

          setCommentsData([post, comments]);
        },
      )
      .catch((err) => {
        console.error(err);
      });
  }, [token]);
  return [commentsData];
};

