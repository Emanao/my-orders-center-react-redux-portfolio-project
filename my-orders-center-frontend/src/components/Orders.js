import React from 'react'
import { connect } from 'react-redux'
import Order from './Order'

const Orders = ({orders})=>{
    console.log("Orders");
    console.log(orders);
    const ordersList = orders.map(order=><Order key={order.id} order={order}/>);
    return(
        <div className='container'>
            <div className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Site</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersList}
                </tbody>
        </div>
        </div>
    )
}

export default connect(
    (state)=>({orders:state.orders}))(Orders);