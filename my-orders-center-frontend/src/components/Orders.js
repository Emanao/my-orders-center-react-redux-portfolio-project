import React from 'react'
import { connect } from 'react-redux'
import Order from './Order'

const Orders = ({orders})=>{
    console.log("Orders");
    console.log(orders);
    const ordersList = orders.map(order=><Order key={order.id} order={order}/>);
    return(
        <div>
            {ordersList}
        </div>
    )
}

export default connect(
    (state)=>({orders:state.orders}))(Orders);