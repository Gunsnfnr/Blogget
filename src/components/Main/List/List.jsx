import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CircleLoader} from 'react-spinners';

import style from './List.module.css';
import Post from './Post';
import {Outlet, useParams} from 'react-router-dom';
import {postsDataRequestAsync} from '../../../store/postsData/postsDataAction';

export const List = () => {
  const loadedPosts = useSelector(state => state.postsData.posts);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.postsData.loading);
  const dispatch = useDispatch();
  const {page} = useParams();
  const endList = useRef(null);

  useEffect(() => {
    dispatch(postsDataRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!loadedPosts.length || loadedPosts.length === 30) return;
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
        }{ (!token) ?
          <div>You are not logged in</div> : ''
        }
        {loadedPosts.length === 30 ?
        <div className={style.end}>
          <div className={style.btn}
            onClick={ () => {
              dispatch(postsDataRequestAsync());
            }
            }
          >Load more posts</div>
        </div> : ''}
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet />
    </>
  );
};


