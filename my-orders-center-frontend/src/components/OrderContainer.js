import React from 'react'
import { connect } from 'react-redux'

import NotesContainer from './NotesContainer'
import OrderCard from './OrderCard'
import {deleteNoteRequest, createNoteRequest} from '../actions/notes'


class OrderContainer extends React.Component{
    loadOrderNotes=()=>{
        const {order, notes} = this.props;
        const orderNotes = notes.filter(note=>note.attributes.order.id.toString() === order.id)
        return  orderNotes
    }
   
    render(){    
        const {order, match, deleteNoteRequest, createNoteRequest} = this.props;
        return (
            !!order.id?
            <div className='container'>
                    <OrderCard 
                    order={order} />
                    <hr/>
                    <NotesContainer 
                    order={order}
                    notes={this.loadOrderNotes()}
                    match={match}
                    createNote={createNoteRequest}
                    deleteNote={deleteNoteRequest}/>
            </div>:null
        )    
    }
}
export default connect(
    (state)=>({notes: state.notes}),
    {createNoteRequest, deleteNoteRequest})
    (OrderContainer);