export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  const token = '';
  if (location.pathname.includes('/auth')) {
    const token = new URLSearchParams(location.hash.substring(1))
      .get('access_token');
    setToken(token);
    return token;
  }

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};
// export const delToken = () => {
//   console.log();
//   localStorage.clear();
//   location.href = 'http://localhost:3000';
// };


