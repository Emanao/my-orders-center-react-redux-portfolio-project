import React from 'react'
import { connect } from 'react-redux'
import { deleteNoteRequest } from '../actions/notes'

const NoteCard = ({ match, note, deleteNoteRequest})=>{
    const handleClick = (event)=>{
        console.log(note);
        deleteNoteRequest(match, note.id);
    }
    
    return (
        <div>
            <button type="button" onClick={handleClick} className="btn btn-outline-dark btn-sm">X</button>  
            <span className='ms-3'>{note.attributes.content}</span> 
        </div>
    )
}
export default connect(null,{deleteNoteRequest})(NoteCard);