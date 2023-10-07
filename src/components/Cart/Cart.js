import { useContext } from 'react';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart=props=>{
  const ctx=useContext(CartContext);
  const totalAmt=ctx.totalAmount;
  const hasItems=ctx.item.length>0;
   const CartItemRemoveHandler=(id)=>{
    ctx.removeItem(id);
    console.log(id);
   };
   const CartItemAddHandler=(tem)=>{
    ctx.addItem(tem);
   };

    const cartItems=(
        <ul className={style['cart-items']}>
       { ctx.item.map((tem)=>
        <CartItem
        key={tem.id} 
        name={tem.name}
        amount={tem.amount}
        price={tem.price}
        onAdd={CartItemAddHandler.bind(null,tem)}
        onRemove={CartItemRemoveHandler.bind(null,tem.id)}
        />
        )}
       </ul>);
  return(
    <Modal onShow={props.onShow}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>{totalAmt}</span>
        </div>
        <div className={style.actions}>
            <button className={style['button--alt']} onClick={props.onShow}>Close</button>
           { hasItems && <button className={style.button}>Order</button>}
        </div>
    </Modal>
  )
}
export default Cart;