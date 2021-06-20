//synchronous action creator returning an action
 export const addOrder = order =>{
    return {
        type: "ADD_ORDER",
        order
    }
}

export const addOrderRequest = () =>{
    return {
        type: "ADD_ORDER_REQUEST",
    }

}

//asynchronous action creator that returns a functions instead of an action. Inner function receives the store and getState from the store. 
export const asyncPostOrders = order =>{
    return dispatch =>{
        dispatch(addOrderRequest())
        fetch('http://localhost:3001/api/v1/orders',{
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(resp=>resp.json())
        .then(order=>{
            console.log(order.data);
            dispatch(addOrder(order.data));
        })
        .catch(console.log(order.error))
    }

}