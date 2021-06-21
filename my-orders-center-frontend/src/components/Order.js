import React from 'react'
// import { connect } from 'react-redux'

const Order = ({order})=>{
    return(
        <tr>
            <th scope='row'>{order.attributes.nr}</th>
            <td>{order.attributes.description}</td>
            <td>{order.attributes.site.name}</td>
        </tr>

    )
}

export default Order;
// export default connect({orders})(Orders);