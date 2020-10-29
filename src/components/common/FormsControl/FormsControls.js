import React from 'react'
import { Field } from 'redux-form'
import s from './../FormsControl/FormsControls.module.css'


export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error 
        
    return (
        <div className = {s.formControl + ' ' + (hasError ? s.error : '')}>
                {props.children}
            <div>
                <span>{hasError && meta.error}</span>
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input} = props
return <FormControl {...props} ><textarea {...input}/></FormControl>
}

export const Input = (props) => {
    const {input, ...restProps} = props
return <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)


//Альтернативное решение валидатора

// const Element = Element => ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//       <div className={ s.formControl + " " + (hasError ? s.error : "") }>
//         <Element {...input} {...props} />
//         { hasError && <span> { meta.error } </span> }
//       </div>
//     );
//   };
//   const Textarea = Element("textarea")