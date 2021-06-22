import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

const OrderListItem = ({order})=>{
    return(
        <tr>
            <th scope='row'>
            <Link  to={`/orders/${order.id}`}>{order.attributes.nr}</Link>
            </th>
            <td>{order.attributes.description}</td>
            <td>{order.attributes.site.name}</td>
            
        </tr>

    )
}

export default OrderListItem;
// export default connect({orders})(Orders);