import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CircleLoader} from 'react-spinners';
import {postsDataRequestAsync} from '../../../store/postsData/postsDataAction';
import style from './List.module.css';
import Post from './Post';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const loadedPosts = useSelector(state => state.postsData.posts);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.postsData.loading);
  const dispatch = useDispatch();
  const {page} = useParams();
  console.log('page: ', page);

  const endList = useRef(null);

  useEffect(() => {
    dispatch(postsDataRequestAsync(page));
  }, [page]);

  // useEffect(() => {
  //   dispatch(postsDataRequestAsync());
  // }, [token]);

  useEffect(() => {
    if (!loadedPosts.length) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsDataRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, loadedPosts]);

  return (
    <>
      <ul className={style.list}>
        {loadedPosts.map((postsData) => (
          <Post key={postsData.id} postData={postsData} />
        ))}
        { (token && loading) ?
          <CircleLoader color='#94f285' css={{display: 'block'}} size={150} /> : ''
        }
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet />
    </>
  );
};


