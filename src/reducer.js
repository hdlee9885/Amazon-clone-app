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
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as its not in basket!`)
            }
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
};

export default reducer;
