import CartContext from "./cart-context"
import { useReducer } from "react";
import React  from "react";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer=(state, action) => {
    if(action.type === "ADD"){
        const updatedTotalAmount =  state.totalAmount + action.item.price * action.item.amount;

        const existingcartItemIndex = state.items.findIndex(
            (item)=> item.id === action.item.id
        );
        
        const existingCartItem = state.items[existingcartItemIndex];
        let updatedItems;
        
        if(existingCartItem){
            const updatedItem={
            
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems=[...state.items];
            updatedItems[existingcartItemIndex]= updatedItem;
        }else {            
            updatedItems = state.items.concat(action.item);
        }
        
        
        return{
            items : updatedItems,
            totalAmount: updatedTotalAmount
        };
        
    }
    
    if(action.type === 'CLEAR'){
        return defaultCartState;

    }
    
    return defaultCartState;
};

const CartProvider=(props)=>{
    const [cartState, dispatchCartAction]= useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:"ADD", item: item});
    };

    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type:"REMOVE", id: id});
    };

    const clearCartHandler = ()=>{
        dispatchCartAction({type: 'CLEAR'});
    }
            
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    };



    return<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
        
    
}

export default CartProvider;