import React from 'react'

const NoteCard = ({note})=>{
    return (
        <div>
            {note.attributes.created_at} - {note.attributes.content} 
        </div>
    )
}
export default NoteCard;