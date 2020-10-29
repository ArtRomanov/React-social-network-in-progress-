import React from 'react'

export default class ProfileStatus extends React.Component {

    state = {
        status: this.props.status,
        editMode: false
    }

    activateEditeMode = () => {
        this.setState ({
            editMode: true
        })
    }
    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate = (prevProps) => {
        
        if(prevProps.status  !== this.props.status) {
            this.setState ({
                status: this.props.status
            })
        }
    }

    render () {
        return (<div>
            {!this.state.editMode && 
            <div>
                <span onDoubleClick = {this.activateEditeMode}>{this.props.status || 'No comments'}</span>
            </div>}
            {this.state.editMode && 
            <div  >
                <input  onChange ={(e)=>this.onStatusChange(e)} value = {this.state.status}
                autoFocus = {true}
                onBlur = {this.deactivateEditeMode}></input>
            </div>}
        </div>)
    }
}