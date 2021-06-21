import React from 'react'
// import { connect } from 'react-redux'

const Order = ({order})=>{
    return(
        <p>{order.attributes.description}</p>
    )
}

export default Order;
// export default connect({orders})(Orders);