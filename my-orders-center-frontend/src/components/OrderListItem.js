import React from 'react'
import { Link } from 'react-router-dom'

const OrderListItem = ({order})=>{
    return(
        <tr>
            <th scope='row'>
            <Link  to={`/orders/${order.id}`}>{order.attributes.nr}</Link>
            </th>
            <td>{order.attributes.description}</td>
            <td>{order.attributes.tracking_url}</td>
            <td>{order.attributes.site.name}</td>
            
        </tr>

    )
}

export default OrderListItem;
