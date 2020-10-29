import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'
import { createField, Input } from '../components/common/FormsControl/FormsControls';
import { login, getCaptchaUrl } from '../Redux/authReducer';
import { required } from '../utils/validators/validators';
import s from './../components/common/FormsControl//FormsControls.module.css'
const LoginForm = ({handleSubmit, error, captchaUrl }) => {
    return (
    <form onSubmit = {handleSubmit}>
        <div>
            <Field name = {'email'} placeholder ={'Login'} component={Input}
            validate={[required]}/>
        </div>
        <div>
        <Field name = {'password'} type = 'password' placeholder ={'password'} component={Input}
        validate={[required]}/>
        </div>
        <div>
        <Field name = {'rememberMe'} type="checkbox" component={'input'} />remember me
        </div>
        {captchaUrl && <img src={captchaUrl}  />}
        {captchaUrl && <Field name = 'captcha' component={Input} validate = {[required]} />}
            {error
            ?   <div className = {s.errorForm}>
                    {error}
                </div> 
            : ''}
        
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    
        const onSubmit = (formData) => {
            debugger
            props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
        };

        if (props.isAuth){
            return <Redirect to = {'/profile'}/>
        }

        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl}/>
        </div>
}
const  mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    captchaUrl: state.authReducer.captchaUrl
    
})



export default connect(mapStateToProps, {login, getCaptchaUrl})(Login);