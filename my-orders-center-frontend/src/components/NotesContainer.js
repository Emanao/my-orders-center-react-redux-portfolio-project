import React from 'react'

import NotesForm from './NotesForm';
import NoteCard from './NoteCard';

const NotesContainer =(props)=>{
    const {order, notes, deleteNote, createNote} = props;
    const notesList = notes.map(note=><NoteCard 
                                        key={note.id} 
                                        note={note} 
                                        deleteNote={deleteNote}
                                        />);


    return(            
        <div>
            <NotesForm 
            createNote={createNote}
            orderId={order.id}
            />
            <hr/>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th className="col-sm-1" scope="col"> </th>
                        <th className="col-sm-2" scope="col">Created</th>
                        <th className="col-sm-9" scope="col">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {notesList}
                </tbody>
            </table>
        </div> 
    )
}

export default NotesContainer;