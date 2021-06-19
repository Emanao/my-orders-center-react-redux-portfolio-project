export default function orders (state=[], action) {
    switch(action.type){
        case "ADD_ORDER":
            // debugger
            return state.concat(action.order);
        default:
            return state
    }
}