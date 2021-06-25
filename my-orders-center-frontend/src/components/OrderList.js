import React from 'react'
import { connect } from 'react-redux'
// import { Route } from 'react-router-dom'
import OrderListItem from './OrderListItem'

const OrdersList = ({orders, match})=>{
    console.log("Orders");
    console.log(orders);
    console.log(match)
    const ordersList = orders.map(order=><OrderListItem key={order.id} order={order}/>);
    return(
        <>
            <div className='container'>
                <table className='table mt-3'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Tracking Link</th>
                            <th scope='col'>Site</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList}
                    </tbody>
                </table>
            </div>
            <>
                
            </>
        </>

    )
}

export default connect(
    ({orders})=>({orders}))(OrdersList);