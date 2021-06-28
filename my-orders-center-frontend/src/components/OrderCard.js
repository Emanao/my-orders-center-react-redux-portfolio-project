import React from 'react'

const OrderCard = (props)=>{
    const {id}=props.order;
    const {nr, description, tracking_url, site} = props.order.attributes;
    const {deleteOrder, history}=props;
    return(
        
        <>
            <div className="row">
                <div className="col-sm-10">
                    <h3>Details of Order #: {nr}</h3>
                </div>
                <div className="col-sm-2">
                    <button 
                    type="button" 
                    onClick={()=>deleteOrder(history, id)} 
                    className="btn btn-dark float-right">Delete Order</button>
                </div>
            </div>
            
            <p>Description: {description}</p>
            <p>Store: {site.name}</p>
            <p>Tracking link: <a href={tracking_url} target="_blank" rel="noopener noreferrer">{tracking_url}</a></p>
        </>

    )
}
export default OrderCard;