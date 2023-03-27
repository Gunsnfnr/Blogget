import React from 'react';
import PropTypes from 'prop-types';
import {useGetBestPosts} from '../hooks/getbestposts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [bestPosts] = useGetBestPosts();
  return (
    <postsContext.Provider value = {{bestPosts}}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
