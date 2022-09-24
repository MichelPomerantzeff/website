//eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART":

            return {
                ...state,
                products: [action.payload, ...state.products.filter(i => i.title !== action.payload.title)].sort((a, b) => a.id - b.id),
            }
        case "REMOVE_ITEM_FROM_CART":
            return {
                ...state,
                products: action.payload.units < 1 ?
                    [...state.products.filter(i => i.title !== action.payload.title)].sort((a, b) => a.id - b.id)
                    :
                    [action.payload, ...state.products.filter(i => i.title !== action.payload.title)].sort((a, b) => a.id - b.id),
            }

        case "EMPTY_CART":
            return {
                ...state,
                products: []
            }

        default:
            return state
    }
}