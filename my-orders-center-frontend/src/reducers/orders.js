export default function orders (state=[]
    , action) {
    switch(action.type){
        case 'ADD_ORDER_REQUEST':
            return [...state];
        case 'ADD_ORDER':
            return [...state, action.order];
        case 'ADD_ORDERS':
            return action.orders
        default:
            return state;
    }
}