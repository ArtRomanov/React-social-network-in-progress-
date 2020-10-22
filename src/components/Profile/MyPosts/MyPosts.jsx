import React from 'react';
import s from './MyPosts.module.css'
import MyPostsForm from './MyPostsForm';
import Post from './Posts/Post';


 const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} count ={p.likesCount} key = {p.id}/>)  
  
  let addNewPost = (post) => {
    props.addPost(post.newPostText)
  }

  return    <div className={s.postsBlock}>
              <h3>{props.hey}</h3>
                <div>
                  <MyPostsForm addNewPost  = {addNewPost}/>
                </div>
              <div className={s.posts}>
                {postsElements}
              </div>
            </div>
}
export default MyPosts;