import React from 'react';
import { useReducer } from 'react';

const CartContext=React.createContext(
    {
        item:[],
        totalAmount:0,
        addItem:(item)=>{},
        removeItem:(id)=>{}

    }
);


const elementReducer=(state,action)=>{
    
 if(action.type==='ADD_ITEM')
 {
    let updatedItem;
    let UpdatedItems;
    const updatedAmount=state.totalAmount+action.item.price*action.item.amount;
    const existingCartItemIndex=state.item.findIndex(items=>
        items.id===action.item.id);
    const existingCartItem=state.item[existingCartItemIndex];    
    if(existingCartItem)
    {
        updatedItem={
            ...existingCartItem,
            amount:existingCartItem.amount+action.item.amount
        };
        UpdatedItems=[...state.item];
        UpdatedItems[existingCartItemIndex]=updatedItem;
    }
    else{
        UpdatedItems=state.item.concat(action.item);
    }
    return{
        item:UpdatedItems,
        totalAmount:updatedAmount
    }
 }
 if(action.type==="REMOVE")
 {
    const existingCartItemIndex=state.item.findIndex(items=>
        items.id===action.id);
    const existingCartItem=state.item[existingCartItemIndex];  
    const updatedAmount=state.totalAmount-existingCartItem.price;
    let updatedItem,UpdatedItems;
    if(existingCartItem.amount===1)
    {
        UpdatedItems=state.item.filter(items=>items.id!==action.id);
    }
    else{
        updatedItem={...existingCartItem,amount:existingCartItem.amount-1};
        UpdatedItems=[...state.item];
        UpdatedItems[existingCartItemIndex]=updatedItem;
    }

    return{
        item:UpdatedItems,
        totalAmount:updatedAmount
    }
 }
}
export const CartProvider=props=>{
    const [element,newelement]=useReducer(elementReducer, {
        item:[],
        totalAmount:0,
        addItem:(item)=>{},
        removeItem:(id)=>{}

    });
   
    const addItemToCartHandler=(item)=>{
        newelement({type:'ADD_ITEM',item:item})
    };
    const removeItemFromCartHandler=(id)=>{
        newelement({type:'REMOVE',id:id})
    };
    const cartItems={
        item:element.item,
        totalAmount:element.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    }
    return <CartContext.Provider value={cartItems}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;