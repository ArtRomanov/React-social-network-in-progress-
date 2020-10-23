import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'
import { Input } from '../components/common/FormsControl/FormsControls';
import { login } from '../Redux/authReducer';
import { maxLength, required } from '../utils/validators/validators';

const LoginForm = (props) => {
    const maxLength15 = maxLength(15)

    return (
    <form onSubmit = {props.handleSubmit}>
        <div>
            <Field name = {'email'} placeholder ={'Login'} component={Input}
            validate={[required]}/>
        </div>
        <div>
        <Field name = {'password'} type = 'password' placeholder ={'password'} component={Input}
        validate={[required]}/>
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

const Login = (props) => {
    
        const onSubmit = (formData) => {
            props.login(formData.email, formData.password, formData.rememberMe)
        };

        if (props.isAuth){
            return <Redirect to = {'/profile'}/>
        }

        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}
const  mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})



export default connect(mapStateToProps, {login})(Login);