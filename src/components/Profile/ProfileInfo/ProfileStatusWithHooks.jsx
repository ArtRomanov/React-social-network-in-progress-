import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export  const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false),
        [status, setStatus] = useState(props.status)


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    
    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.target.value)
    }  

    return (<div>
        {!editMode &&
            <div>
                <span onDoubleClick = {activateEditMode} >{props.status || 'No comments'} </span>
            </div>
        }
        
       {editMode &&
            <div>
                <input onChange = {(e)=>{onStatusChange(e)} } onBlur = {deactivateEditMode}
                        autoFocus = {true} value = {status}s></input>
            </div>
        }
        
        
    </div>)
}