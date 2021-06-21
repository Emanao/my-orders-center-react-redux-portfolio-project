import React from 'react'
// import { connect } from 'react-redux'

const OrderItem = ({order})=>{
    return(
        <tr>
            <th scope='row'>{order.attributes.nr}</th>
            <td>{order.attributes.description}</td>
            <td>{order.attributes.site.name}</td>
        </tr>

    )
}

export default OrderItem;
// export default connect({orders})(Orders);