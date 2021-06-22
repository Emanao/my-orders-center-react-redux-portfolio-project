import React from 'react'

const OrderDetails = ({order})=>{
    return (
        !!order?
        <div className='container'>
                <h3>Details of Order #: {order.attributes.nr}</h3>
                <p>Description: {order.attributes.description}</p>
                <p>Store: {order.attributes.site.name}</p>
                <h4>Notes</h4>
                {order.attributes.notes.map((note, idx)=><p key={idx}>{note.content}</p>)}


        </div>:null
        )
}
export default OrderDetails;