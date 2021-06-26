import React from 'react'
import { connect } from 'react-redux'

import NotesContainer from './NotesContainer'
import OrderCard from './OrderCard'
import {loadNotesRequest} from '../actions/notes'

class OrderContainer extends React.Component{
    componentDidMount(){
        this.props.loadNotesRequest(this.props.match)
    }
    render(){    
        const {order, notes, match} = this.props;
        return (
            !!order?
            <div className='container'>
                    <OrderCard order={order} />
                    <hr/>
                    <NotesContainer 
                    orderId={order.id} 
                    notes={notes} 
                    match={match}/>
            </div>:null
        )    
    }
}
export default connect((state)=>({notes: state.notes}),{loadNotesRequest})(OrderContainer);