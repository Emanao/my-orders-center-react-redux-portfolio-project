import React from 'react'
import { connect } from 'react-redux'

import NotesContainer from './NotesContainer'
import {loadNotesRequest} from '../actions/notes'

class OrderCard extends React.Component{
    componentDidMount(){
        this.props.loadNotesRequest(this.props.match)
    }
    render(){    
        return (
            !!this.props.order?
            <div className='container'>
                    <h3>Details of Order #: {this.props.order.attributes.nr}</h3>
                    <p>Description: {this.props.order.attributes.description}</p>
                    <p>Store: {this.props.order.attributes.site.name}</p>
                    <hr/>
                    <NotesContainer orderId={this.props.order.id} notes={this.props.notes} match={this.props.match}/>
            </div>:null
            )    
    }
}
export default connect((state)=>({notes: state.notes}),{loadNotesRequest})(OrderCard);