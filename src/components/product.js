import React from "react";
function Product(props)
{
    const { item,product,onAdd,onRemove }=props;
    return (
        <>
        
        <div className="card">

            <img  className="small" src={product.image} alt={product.postername}/>
            <h3>{product.postername}</h3>
            <div className="price">${product.price}</div>
            <div>
                {item ? 
                (
                    <div className="qty">
                   <button onClick={()=>onRemove(item)} className="remove">-</button>
                   <span className="rem">{item.qty}</span>
                   <button onClick={()=>onAdd(item)} className="add">
                    +
                   </button>
                   
                 </div>
                 ) : (
                <button onClick={()=>onAdd(product)}>Add to Cart</button>
                 )}
            </div>
        </div>
        </>
    );
}
export default Product;
