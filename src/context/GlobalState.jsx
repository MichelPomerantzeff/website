import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
}

// Create Context
export const GlobalContext = createContext()

// Provider Component
export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(state.products))
    }, [state])

    // Actions
    const addItemToCart = item => {
        let storedItem = state.products.find(i => i.title === item.title)
        storedItem ? storedItem.units++ : item.units++
        dispatch({ type: "ADD_ITEM_TO_CART", payload: storedItem ? storedItem : item })
    }

    const removeItemFromCart = item => {
        let storedItem = state.products.find(i => i.title === item.title)
        storedItem.units --
        dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: storedItem })
    }

    const emptyCart = item => {
        dispatch({ type: "EMPTY_CART", payload: item })
    }

    return (
        <GlobalContext.Provider
            value={{
                addItemToCart,
                removeItemFromCart,
                emptyCart,
                products: state.products,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}