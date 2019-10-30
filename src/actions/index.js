export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const COMPLETE_ITEM = "COMPLETE_ITEM";

export const addItem = payload => {
    return {
        type: ADD_ITEM,
        payload
    }
};

export const removeItem = payload => {
    return {
        type: REMOVE_ITEM,
        payload
    }
};

export const completeItem = payload => {
    return {
        type: COMPLETE_ITEM,
        payload
    }
};