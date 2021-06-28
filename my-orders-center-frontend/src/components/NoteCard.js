import React from 'react'
// 
const NoteCard = (props)=>{
    const { deleteNote} = props;
    const { id } = props.note;
    const { content, created_at } = props.note.attributes;
    const date = new Date(created_at);

    const handleClick = ()=>deleteNote(id);
    
    return (
        <tr>
            <th scope="row">
            <button 
                type="button" 
                onClick={handleClick} 
                className="btn btn-outline-dark btn-sm">X</button>  
            </th>
            <td>{date.toLocaleDateString()}</td>
            <td>{content}</td>
        </tr>
    )
}
export default NoteCard;