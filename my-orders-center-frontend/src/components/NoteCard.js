import React from 'react'
// 
const NoteCard = (props)=>{
    const { note, deleteNote} = props

    const handleClick = ()=>deleteNote(note.id);
    
    return (
        <div> 
            <button 
            type="button" 
            onClick={handleClick} 
            className="btn btn-outline-dark btn-sm">X</button>  
            <span className='ms-3'>{note.attributes.content}</span> 
        </div>
    )
}
export default NoteCard;