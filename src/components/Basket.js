import React from "react";
import './basket.css';
export default function Basket(props){
   const{cartItems,onAdd,onRemove}=props;
   const itemprice=cartItems.reduce((a,c)=>a+c.qty*c.price,0);
   const totalprice=itemprice;
   return(
   <div className="cartitem">
        <h2 className="carthead">Cart Items</h2><br/>
    <div className="summary">
    {cartItems.length===0 && <div className="empty">Cart is Empty</div>}
    {cartItems.map((item)=>(
        <div key={item.id}className="row">
            <div className="col-1 orders">{item.postername}&nbsp;
            <button onClick={()=> onRemove(item)} className="remove">
                -
            </button>
            <button onClick={()=> onAdd(item)} className="add">
                +
            </button>
            </div>
            <div className="col-1 textright">
            {item.qty} x ${item.price}
            </div>
            </div>
    ))}
   {cartItems.length!==0 && 
    (
    <>
    <hr />
    <div className="row">
        <div className="col-2">
            <strong>Total price</strong>
        </div>
        <div className="tot textright">
         <strong> ${totalprice}</strong> 
        </div>
    </div>
    <hr />
    <div>
        <button className="check" onClick={()=>alert('checked out successfully')}>
            checkout
        </button>
    </div>
    </>
   )}
   </div>
   </div>
   );
}
