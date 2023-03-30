import {Text} from '../../../UI/Text/Text.jsx';
import style from './Comments.module.css';
import PropTypes from 'prop-types';

// import React, {Component} from 'react';
import {useEffect} from 'react';

export const Comments = (comments) => {
  useEffect(() => {

  }, [comments]);
  if (comments) {
    console.log('comments: ', comments);
    // console.log(comments.comments[0].author);
  }

  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Text As='h3' className={style.author} size={18} tsize={22}>Maks</Text>
        <Text As='p' className={style.comment} size={14} tsize={18}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat natus eaque modi!</Text>
        {/* <Date date={date} /> */}
      </li>
    </ul>
  );
};


// export class Comments extends Component {
//   constructor(comments) {
//     super(comments);

//     this.state = {
//       data: null,
//       loading: true,
//     };
//   }

//   setTimeout(() => {
//     console.log(this.props);
//   }, 3000);

//   // const Comments = (comments) => {}
//   componentDidMount(comments) {
//     console.log(this.props);
//     setTimeout(() => {
//       console.log(this.props);
//     }, 3000);
//     (result) => {
//       this.setState({data: result, loading: false});
//     };
//     (error) => {
//       this.setState({data: {}, loading: false});
//       console.error(error);
//     };
//     console.log('comments: ', comments);
//     // console.log(comments.comments[0].author);
//   }

//   render() {
//     if (this.state.loading) {
//       return (<p>Loading...</p>);
//     }

//     // return (<div data={this.state.data}></div>);
//     return (
//       <ul className={style.list}>
//         <li className={style.item}>
//           <Text As='h3' className={style.author} size={18} tsize={22}>Maks</Text>
//           <Text As='p' className={style.comment} size={14} tsize={18}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Fugiat natus eaque modi!</Text>
//           {/* <Date date={date} /> */}
//         </li>
//       </ul>
//     );
//   }
// }

// export default Comments;

//   // for (let i = 0; i < comments.comments.length; i++) {
//   //   const commentAuthor = comments.comments[0].author;
//   //   const commentCreated = comments.comments[0].created;
//   //   const commentBody = comments.comments[0].body;
//   // }

Comments.propTypes = {
  comments: PropTypes.array,
};
