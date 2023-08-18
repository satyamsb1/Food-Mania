import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = () =>{

    const cartItems = useSelector((store) =>store.cart.items);

    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart is Empty</h1>
        <div className="w-6/12 m-auto border-2 border-gray-250 rounded-2xl p-4 my-2">
            <ItemList items = {cartItems} />
        </div>
    </div>;
}

export default Cart;