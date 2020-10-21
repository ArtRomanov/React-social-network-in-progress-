import React from 'react'

export default class ProfileStatus extends React.Component {

    state = {
        text: 'Hello world',
        editMode: false
    }

    activateEditeMode = () => {
        debugger
        this.setState ({
            editMode: true
        })
    }
    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        })
    }

    render () {

        return <div>
            {!this.state.editMode && 
            <div>
                <span onDoubleClick = {this.activateEditeMode}>{this.props.profile.aboutMe}</span>
            </div>}
            {this.state.editMode && 
            <div  >
                <input value = {this.props.profile.aboutMe} 
                autoFocus = {true}
                onBlur = {this.deactivateEditeMode}></input>
            </div>}
            
        </div>
    }
}