export default function orders (state=[], action) {
    switch(action.type){
        case "ADD_ORDER":
            return state.concat(action.order);
        default:
            return state
    }
}