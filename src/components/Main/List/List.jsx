import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2023-05-24T05:41:00.000Z',
      id: '45',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 58,
      date: '2023-05-27T08:25:00.000Z',
      id: '36',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 24,
      date: '2023-05-24T09:45:00.000Z',
      id: '76',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 124,
      date: '2023-06-01T09:45:00.000Z',
      id: '52',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postsData) => (
        <Post key={postsData.id} postData={postsData} />
      ))}
    </ul>
  );
};


