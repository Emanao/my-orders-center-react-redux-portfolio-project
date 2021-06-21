import React from 'react'
import { connect } from 'react-redux'
import OrderItem from './OrderRow'

const OrdersList = ({orders})=>{
    console.log("Orders");
    console.log(orders);
    const ordersList = orders.map(order=><OrderItem key={order.id} order={order}/>);
    return(
        <div className='container'>
            <table className='table mt-3'>
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
        </table>
        </div>
    )
}

export default connect(
    ({orders})=>({orders}))(OrdersList);