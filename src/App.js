import { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./Data";
import {BrowserRouter as Switch,Route,Routes} from 'react-router-dom';
import Basket from './components/Basket';

function App() {
  const [cartItems,setCartItems]=useState( [] );
  const { products }=data;
  const onAdd=(product)=> {
    const exist=cartItems.find((x)=>x.id===product.id);
    if(exist)
    {
      const newcartItems=cartItems.map((x)=>
      x.id===product.id?{...exist,qty:exist.qty+1}:x
      );
      setCartItems(newcartItems);
    }else{
      const newcartItems=[...cartItems,{...product,qty:1}];
      setCartItems(newcartItems);
    }
    

  };
  const onRemove=(product)=> {
    const exist=cartItems.find((x)=>x.id===product.id);
    if(exist.qty===1)
    {
      const newcartItems=cartItems.filter((x)=>x.id!==product.id);
      setCartItems(newcartItems);
    }
    else
    {
      const newcartItems=cartItems.map((x)=>
        x.id===product.id?{...exist,qty:exist.qty -1}:x
        );
    setCartItems(newcartItems);
    }
  };
  return (
    
    <Switch>
    <div>
     <Header countcartItems={cartItems.length}/>
     
         <Routes> 
              <Route path='/' element={<Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />}/>
              <Route path='/cart' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />}/>
          </Routes>
    
     
      
     
    </div>
    </Switch>
  );
}

export default App;
