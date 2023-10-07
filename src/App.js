import React ,{useState}from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
   const [cartOn,setCarton]=useState(false);
   function ShowCart(prev){
    setCarton(!cartOn);
   }

  return (
   <>
    { cartOn &&<Cart onShow={ShowCart}/>}
      <Header onShow={ShowCart}/>
      <main>
        <Meals/>
      </main>
   </>
  );
}

export default App;
