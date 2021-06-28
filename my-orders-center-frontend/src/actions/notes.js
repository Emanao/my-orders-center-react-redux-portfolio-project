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

export const createNoteRequest = (note) =>{
    return dispatch =>{
        dispatch(addNoteRequest())
        const postData = {
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },body: JSON.stringify(note)
        }

        return fetch(`http://localhost:3001/api/v1/notes`,postData )
        .then(resp=>resp.json())
        .then(note=>{
            dispatch(createNote(note.data));
        })
        .catch(error=>console.error('Error:', error))
    }

}
export const loadNotesRequest = ()=>{
    return (dispatch)=>{
        return fetch(`http://localhost:3001/api/v1/notes`)
        .then(resp=>resp.json())
        .then(notes=>{
            dispatch(loadNotes(notes.data))
        })
        .catch(error=>console.error('Error:', error))
    }
}

export const deleteNoteRequest = (noteId) =>{
    return dispatch =>{
        const postData = {
            method: 'DELETE',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }}
        return fetch(`http://localhost:3001/api/v1/notes/${noteId}`,postData )
        .then(resp=>resp.json())
        .then(note=>{
            dispatch(deleteNote(noteId));
        })
        .catch(error=>console.error('Error:', error))
    }

}
