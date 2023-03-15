import { useState } from "react";
import Product from "./product";
export default function Main(props){
    const { cartItems, products,onAdd,onRemove }=props;
    const [categorys,setcategory]=useState("");
    return (
        <>
        <select className="select" onChange={event=>setcategory(event.target.value)}>
            <option>Select</option>
            <option>Kollywood</option>
            <option>Hollywood</option>
            <option>Individual</option>
        </select>
        
    <div className="content">
        
      <div className="products">
        {products.filter(i=>{
            if (categorys==='Select'){
                return i;
            } 
            if (i.category.toLowerCase().includes(categorys.toLowerCase())) {
                return i;
            }
            }
            ).map((product)=>(
            <Product 
            key={product.id}
            product={product}
            item={cartItems.find((x)=>x.id===product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
            ></Product>
        ))}
    </div>
    </div>
    </>
    );
}