export default function notes(state=[],action){
    switch(action.type){
        case "ADD_NOTE_REQUEST":
            return [...state]
        case "ADD_NOTE":
            return state.concat(action.note)
        case "DELETE_NOTE":
            return state.filter((note)=>note.id !== action.noteId);
        case "LOAD_NOTES":
            return action.notes;
        default:
            return state;
    }

} 