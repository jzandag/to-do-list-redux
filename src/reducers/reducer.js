import * as actionTypes from "./actions";

const initState = {
    list: []
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.ADD_ITEM:
            const newList = {id: new Date(), status: 0, name: action.name}
            return {
                ...state,
                list: state.list.concat(newList)
            }
        case actionTypes.REMOVE_ITEM:
            const newArr = state.list.filter(li => li.id !== action.id);
            console.log(newArr);
            return {
                ...state,
                list: newArr
            }
        case actionTypes.STATUS:
            const liIndex = state.list.findIndex(e => e.id === action.id)
            const list = [...state.list]
            list[liIndex].status = list[liIndex].status === 0 ? 1 : 0 ;
            return {
                ...state,
                list
            }
        default:
    }
    return state
}

export default reducer