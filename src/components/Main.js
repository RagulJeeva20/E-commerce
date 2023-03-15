import Product from "./product";
export default function Main(props){
    const { cartItems, products,onAdd,onRemove }=props;
    return (
    <div className="content">
      <div className="products">
        {products.map((product)=>(
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
    );
}