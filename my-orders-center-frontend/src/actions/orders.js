//synchronous action creator returning an action
 export const addOrder = order =>{
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
export const addOrders = (orders)=>{
    return {
        type: "ADD_ORDERS",
        orders
    }
}

//asynchronous action creator that returns a functions instead of an action. Inner function receives the store and getState from the store. 
export const createOrder = (order, history) =>{
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
            console.log(order.data);
            dispatch(addOrder(order.data));
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
            console.log(orders);
            dispatch(addOrders(orders.data))
        })
        .catch(error=>console.error('Error:', error))
    }
}