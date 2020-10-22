import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { required, maxLength } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControl/FormsControls'

const maxLength15 = maxLength(15)

const PostsForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div> 
            <Field component={Textarea}  name = 'newPostText' validate={[required, maxLength15]}/>
        </div>
        <div> 
            <button>Add post</button>
        </div>
    </form>)
}
const PostsReduxForm = reduxForm({form: 'posts'})(PostsForm)

const MyPostsForm = (props) => {
    return <PostsReduxForm onSubmit={(value)=> props.addNewPost(value)}/>
}

export default MyPostsForm