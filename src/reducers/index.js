import {ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM} from "../actions";

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item, index) => index !== action.payload)
            };
        case COMPLETE_ITEM:
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if (index === action.payload) {
                        item.done = !item.done
                    }
                    return item;
                })
            };
        default:
            return state;
    }
};

export default reducer;