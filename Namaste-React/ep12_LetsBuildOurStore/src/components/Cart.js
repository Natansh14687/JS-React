import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return (
        <div className="text-center w-6/12 m-auto">
            <h1 className="font-bold text-2xl m-4 p-4">Your Cart</h1>
            <button className="font-bold text-white bg-black rounded-lg p-4 cursor-pointer mb-4" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h3 className="text-lg font-bold">Your Cart is Empty ! Please Add Some Items...</h3>}
            <ItemsList items={cartItems} />
        </div>
    )
}

export default Cart;