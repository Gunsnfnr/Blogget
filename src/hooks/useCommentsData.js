import axios from 'axios';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from '../api/const.js';
import {
  commentsDataRequest,
  commentsDataRequestError,
  commentsDataRequestSuccess
} from '../store/commentsData/commentsDataAction.js';

export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  dispatch(commentsDataRequest());
  const [commentsData, setCommentsData] = useState({});
  console.log('commentsData: ', commentsData);
  console.log('typeof(commentsData): ', typeof(commentsData));

  // const [post, comments] = useSelector(state => state.commentsData.data);
  // console.log('comments: ', comments);
  // console.log('post: ', post);

  // const [commentsDataR] = useSelector(state => state.commentsData.data);
  // console.log('commentsDataR: ', commentsDataR);

  // const commentsDataR = [{0: post}, comments];
  // console.log('commentsDataR: ', commentsDataR);
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    token && axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      // .then((response) => {
      //   if (response.status === 401) {
      //     throw new Error(response.status);
      //   }
      //   return response.json();
      // })
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
          setCommentsData([post, comments]);
          const data = [post, comments];
          console.log('DATA!!!: ', data);
          dispatch(commentsDataRequestSuccess(data));
        },
      )
      .catch((err) => {
        dispatch(commentsDataRequestError(err));
        console.error(err);
      });
  }, [token]);
  return [commentsData];
};

