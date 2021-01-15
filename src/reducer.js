export const initialState = {
    basket: [],
};

export const calBasketTotal = (basket) => {
    let total = 0;
    basket.forEach(item => {
        total = total + item.price;
    });
    return total;
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;
