import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import style from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";


const HeaderCartButton=(props)=>{
 const ctx=useContext(CartContext);
 const cartItemNumbers=ctx.item.reduce((curNumber,items)=>{
    return curNumber+items.amount;
 },0);
    return(
    <button className={style.button} onClick={props.onShow}>
    <span className={style.icon}>
        <CartIcon/>
    </span>
    <span>
        Your Cart
    </span>
    <span className={style.badge}>
        {cartItemNumbers}
    </span>
    </button>
    )
};

export default HeaderCartButton;