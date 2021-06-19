//synchronous action creator returning an action
 export const addOrder = order =>{
    return {
        type: "ADD_ORDER",
        order
    }

}

//asynchronous action creator that returns a functions instead of an action. Inner function receives the store and getState from the store. 
export const asyncPostOrders = order =>{
    return dispatch =>{
        dispatch()
        fetch('http://localhost:3001/api/v1/orders',{
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(resp=>resp.json())
        .then(order =>{
            // if(order.error){
            //     alert(order.error)
            // }else{
                dispatch(addOrder(order))
            // }
        })
        .catch(console.log(order.error))
    }

}