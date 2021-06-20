export default function orders (state=[]
    , action) {
    switch(action.type){
        case 'ADD_ORDER_REQUEST':
            // debugger
            return [...state]
        case 'ADD_ORDER':
            // debugger
            return [...state, action.order]
        default:
            return state
    }
}