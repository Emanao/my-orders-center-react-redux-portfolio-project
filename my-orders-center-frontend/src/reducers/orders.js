export default function orders (state={
    data:[], 
    loading:false
    }
    , action) {
    switch(action.type){
        case 'ADD_ORDER_REQUEST':
            // debugger
            return{
                ...state,
                loading: true,
                data: [...state.data]
            }
        case 'ADD_ORDER':
            // debugger
            return {
                ...state,
                loading: false,
                data: [...state.data, action.order]
            }
        default:
            return state
    }
}