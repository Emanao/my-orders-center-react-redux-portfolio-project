import React from 'react'

const OrderCard = (props)=>{
    const {nr, description, tracking_url, site} = props.order.attributes;
    return(
        <>
            <h3>Details of Order #: {nr}</h3>
            <p>Description: {description}</p>
            <p>Store: {site.name}</p>
            <p>Tracking link: {tracking_url}</p>
        </>

    )
}
export default OrderCard;