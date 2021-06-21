import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

const OrderItem = ({order})=>{
    return(
        <tr>
            <th scope='row'>
                <Link>{order.attributes.nr}</Link>
                </th>
            <td>{order.attributes.description}</td>
            <td>{order.attributes.site.name}</td>
        </tr>

    )
}

export default OrderItem;
// export default connect({orders})(Orders);