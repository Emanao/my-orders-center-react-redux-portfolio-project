import React from 'react'

const OrderDetails = ({order})=>{
    return (
        !!order?
        <div>
                <h3>{order.attributes.nr}</h3>
                <p>{order.attributes.description}</p>
                <p>{order.attributes.Site}</p>

        </div>:null
        )
}
export default OrderDetails;