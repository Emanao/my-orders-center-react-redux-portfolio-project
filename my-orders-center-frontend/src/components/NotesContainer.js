import React from 'react'

import NotesForm from './NotesForm';
import NoteCard from './NoteCard';

// 
const NotesContainer =(props)=>{
    const {order, notes, deleteNote, createNote} = props;

    return(            
        <div>
            <NotesForm 
            createNote={createNote}
            orderId={order.id}
            />
            <hr/>
            <div className="row gx-5">
                {notes.map(note=><div key={note.id}>
                    <NoteCard 
                        note={note} 
                        deleteNote={deleteNote}
                        />
                </div>)}
            </div>
        </div> 
    )
}

export default NotesContainer;