import Input from '../../UI/Input';
import React,{ useRef,useState } from 'react';
import style from './MealItemForm.module.css';
const MealItemForm=props=>{
    
    const [validAmount,setValidAmount]=useState(true);
    const amountref=useRef();
    const submitHandler=event=>{
     event.preventDefault();
     const enteredAmount=amountref.current.value;
     const enteredAmtNo=+enteredAmount;
     if(enteredAmount.trim().length===0 || 
     enteredAmtNo<1 ||enteredAmtNo>5)
     {
        setValidAmount(false);
        return;
     }
     props.onAddToCart(enteredAmtNo);
    }


   return(
       <form className={style.form} onSubmit={submitHandler}>
          <Input label="Amount"
            ref={amountref}
            input={{
            type:'number',
             id:'amount'+props.id,
             min:'1',
             max:'5',
             step:'1',
             defaultValue:'1',
          }}/>
          <button className={style.button}>+ Add</button>
          {!validAmount && <p>Enter a valid amount (1-5)</p>}

       </form>

   )

}

export default MealItemForm;