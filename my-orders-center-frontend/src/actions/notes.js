export const createNote = (note)=> {
    return {
        type: "ADD_NOTE",
        note: note
    }
}
export const addNoteRequest = () =>{
    return {
        type: "ADD_NOTE_REQUEST",
    }
}

export const deleteNote = (noteId)=> {
    return {
        type: "DELETE_NOTE",
        noteId
    }
}

export const loadNotes = (notes)=>{
    return {
        type: "LOAD_NOTES",
        notes
    }
}
export const createNoteRequest = (note, match) =>{
    return dispatch =>{
        dispatch(addNoteRequest())
        const postData = {
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },body: JSON.stringify(note)
        }

        return fetch(`http://localhost:3001/api/v1/${match.url}/notes`,postData )
        .then(resp=>resp.json())
        .then(note=>{
            console.log(note.data);
            dispatch(createNote(note.data));
        })
        .catch(error=>console.error('Error:', error))
    }

}
export const loadNotesRequest = (match)=>{
    return (dispatch)=>{
        return fetch(`http://localhost:3001/api/v1/${match.url}/notes`)
        .then(resp=>resp.json())
        .then(notes=>{
            console.log(notes.data);
            dispatch(loadNotes(notes.data))
        })
        .catch(error=>console.error('Error:', error))
    }
}

export const deleteNoteRequest = (match, noteId) =>{
    return dispatch =>{
        const postData = {
            method: 'DELETE',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }}
        return fetch(`http://localhost:3001/api/v1/${match.url}/notes/${noteId}`,postData )
        .then(resp=>resp.json())
        .then(note=>{
            console.log(note);
            dispatch(deleteNote(noteId));
            // dispatch(createNote(note.data));
        })
        .catch(error=>console.error('Error:', error))
    }

}
