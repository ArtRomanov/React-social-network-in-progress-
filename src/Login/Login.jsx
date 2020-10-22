import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { Input } from '../components/common/FormsControl/FormsControls';
import { maxLength, required } from '../utils/validators/validators';

const LoginForm = (props) => {
    const maxLength15 = maxLength(15)

    return (
    <form onSubmit = {props.handleSubmit}>
        <div>
            <Field name = {'login'} placeholder ={'Login'} component={Input}
            validate={[required, maxLength15]}/>
        </div>
        <div>
        <Field name = {'password'} placeholder ={'password'} component={Input}
        validate={[required, maxLength15]}/>
        </div>
        <div>
        <Field name = {'rememberMe'} type="checkbox" component={'input'} 
        validate={[required]}/>remember me
        
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
        const onSubmit = (formData) => {};
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}




export default Login;