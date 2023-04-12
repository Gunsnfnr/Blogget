// import {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {commentsDataRequestAsync} from '../store/commentsData/commentsDataAction.js';

// export const useCommentsData = (id) => {
//   const token = useSelector(state => state.token.token);
//   // const [commentsData, setCommentsData] = useState({});

//   const commentsData = useSelector(state => state.commentsData.data);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(commentsDataRequestAsync(id));
//   }, [token]);
//   return [commentsData];
// };

