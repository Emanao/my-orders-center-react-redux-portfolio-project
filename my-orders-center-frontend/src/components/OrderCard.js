import React from 'react'

import NoteCard from './NoteCard';

const OrderCard = ({order})=>{
    return (
        !!order?
        <div className='container'>
                <h3>Details of Order #: {order.attributes.nr}</h3>
                <p>Description: {order.attributes.description}</p>
                <p>Store: {order.attributes.site.name}</p>
                <h4>Notes</h4>
                {order.attributes.notes.map((note, idx)=><div key={idx}><NoteCard note={note}/></div>)}


        </div>:null
        )
}
export default OrderCard;