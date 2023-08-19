import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let total = 0; // Initialize total outside the .map function

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto border-2 border-gray-250 rounded-2xl p-4 my-2">
        {cartItems.length === 0 && <h1>Cart is empty. Add Items to the cart!</h1>}
        <ItemList items={cartItems} />

        {/* Calculate total using .map function */}
        {cartItems.map((item) => {
          const price =
            item.card && item.card.info ? item.card.info.price : item.card.info.defaultPrice;
          total += price / 100;
          return null; // We're just calculating the total, no need to return JSX
        })}

        {/* Display total and Clear Cart button */}
        <div className="flex justify-around">
          {/* Display total with formatted price */}
          <p className="text-lg font-bold my-auto">Total: Rs {total.toFixed(2)}</p>
          {/* Clear Cart button */}
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
