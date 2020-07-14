export const initialState = {
    cart: {}
};

export const reducer = (state, action) => {
    switch(action.type) {
        case "CHECKOUT":
            return {
                ...initialState
            };
        case "ADD_TO_CART":
            return {
                ...state,
                ...action.payload
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};