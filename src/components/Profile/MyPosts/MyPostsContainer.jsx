import { connect } from 'react-redux';
import { addPostActionCreater } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';


 let mapStateToProps = (state) => {
   return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
   }
 }
 let mapDispatchToProps = (dispatch) => {
   return {
    addPost: (post) => {
      dispatch(addPostActionCreater(post));
    }
   }
 }
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;