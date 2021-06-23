import React from 'react'

import NotesForm from './NotesForm';
import NoteCard from './NoteCard';


const NotesContainer =({match, orderId, notes})=>{
    return(            
        <div>
            <NotesForm match={match} orderId={orderId}/>
            <hr/>
            {notes.map(note=><div key={note.id}><NoteCard note={note} /></div>)}
        </div> 
    )
}

export default NotesContainer;