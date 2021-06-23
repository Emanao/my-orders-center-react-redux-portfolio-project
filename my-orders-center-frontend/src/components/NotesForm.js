import React from 'react'
import {connect} from 'react-redux'

import { createNoteRequest } from '../actions/notes'

class NotesForm extends React.Component{
    state={
        content:""
    }
    handleChange = (event)=> this.setState({[event.target.name]: event.target.value})

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log("props")
        console.log(this.props)
        this.props.createNoteRequest(
            {
            content: this.state.content, 
            order_id: this.props.orderId
            },
            this.props.match
            );

    }

    render(){
        return(
            <div>
                <h4>Notes</h4>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                        <textarea 
                        type="text" 
                        name="content"
                        value={this.state.content}
                        className="form-control mb-2 mr-sm-2"  
                        onChange={this.handleChange}
                        placeholder="Add your notes"/>
                        <button 
                        type="submit" 
                        className="btn btn-dark">
                        Add Note
                        </button>
                </form>
            </div>
        )
    }
}
export default connect(null,{ createNoteRequest })(NotesForm);