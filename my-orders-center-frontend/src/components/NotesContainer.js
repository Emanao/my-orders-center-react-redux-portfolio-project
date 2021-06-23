import React from 'react'

import NotesForm from './NotesForm';
import NoteCard from './NoteCard';


const NotesContainer =({match, orderId, notes})=>{
    return(            
        <div>
            <NotesForm match={match} orderId={orderId}/>
            <hr/>
            <div className="row gx-5">
                {notes.map(note=><div key={note.id}><NoteCard note={note} /></div>)}
            </div>
        </div> 
    )
}

export default NotesContainer;