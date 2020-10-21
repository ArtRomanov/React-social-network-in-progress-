import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostTextOptionCreater } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';


 let mapStateToProps = (state) => {
   return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
   }
 }
 let mapDispatchToProps = (dispatch) => {
   return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextOptionCreater(text));
    },
    addPost: () => {
      dispatch(addPostActionCreater());
    }
   }
 }
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;