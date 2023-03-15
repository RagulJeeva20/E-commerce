import { Link } from "react-router-dom";

export default function Header(props){
    const { countcartItems}=props;
    return (
    <div className="header">
        
        
        <h2 className="heading">Fan Wall</h2>
        
        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart&nbsp;

            {countcartItems?(
            <button className="badge">{countcartItems}</button>
            ):(
                ''
            )}
            </Link>{' '}
            
        </div>
    
    </div>
    );
}