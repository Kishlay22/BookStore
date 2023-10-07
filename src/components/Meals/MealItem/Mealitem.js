import { useContext } from 'react';
import style from './MealItem.module.css';
import MealitemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
const Mealitem=props=>{
  const ctx=useContext(CartContext);
  const price=`$${props.price.toFixed(2)}`;
  const addToCartHandler=amount=>{
     ctx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
     })
  };
  return(
   <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>
        <div><MealitemForm id={props.id} onAddToCart={addToCartHandler}></MealitemForm></div>
   </li>

  )
}

export default Mealitem;