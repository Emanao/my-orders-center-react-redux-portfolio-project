//synchronous action creator returning an action
 export const createOrder = order =>{
    return {
        type: "ADD_ORDER",
        order: order
    }
}
export const addOrderRequest = () =>{
    return {
        type: "ADD_ORDER_REQUEST",
    }

}
export const deleteOrder = (orderId)=> {
    return {
        type: "DELETE_ORDER",
        orderId
    }
}
export const loadOrders = (orders)=>{
    return {
        type: "LOAD_ORDERS",
        orders
    }
}


//asynchronous action creator that returns a functions instead of an action. Inner function receives the store and getState from the store. 
export const createOrderRequest = (order, history) =>{
    return dispatch =>{
        dispatch(addOrderRequest())
        const postData = {
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },body: JSON.stringify(order)
        }

        return fetch('http://localhost:3001/api/v1/orders',postData )
        .then(resp=>resp.json())
        .then(order=>{
            dispatch(createOrder(order.data));
            history.push(`/orders/${order.data.id}`)
        })
        .catch(error=>console.error('Error:', order.error))
    }

}
export const fetchOrders = ()=>{
    return (dispatch)=>{
        return fetch('http://localhost:3001/api/v1/orders')
        .then(resp=>resp.json())
        .then(orders=>{
            dispatch(loadOrders(orders.data))
        })
        .catch(error=>console.error('Error:', error))
    }
}
export const deleteOrderRequest = ( history, orderId) =>{
    return dispatch =>{
        const postData = {
            method: 'DELETE',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }}
        return fetch(`http://localhost:3001/api/v1/orders/${orderId}`,postData )
        .then(resp=>resp.json())
        .then(note=>{
            dispatch(deleteOrder(orderId));
            history.push(`/orders/`)

        })
        .catch(error=>console.error('Error:', error))
    }

}
