"use client";

import { useCart } from "@/contexts/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-16 px-5 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8 font-playfair wish">Your Wishlist</h1>
          <p className="text-xl text-gray-500 mb-8">Your wishlist is empty</p>
        </div>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    const validPrice = isNaN(price) ? 0 : price;
    return sum + (validPrice * item.quantity);
  }, 0);

  return (
    <div className="py-16 px-5 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-12 text-center font-playfair">Your Wishlist</h1>
      
      <div className="space-y-6 mb-12">
        {cart.map((product) => (
          <div key={product.id} className="flex items-center gap-6 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-xl flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-xl truncate">{product.name}</h3>
              <p className="text-lg text-gray-600">{product.price} × {product.quantity}</p>
              <p className="text-2xl font-bold text-rose-600">
                {(parseFloat(product.price.replace(/[^0-9.]/g, '')) * product.quantity).toLocaleString()} EGP
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full">
                <button
                  onClick={() => {
                    if (product.quantity > 1) {
                      updateQuantity(product.id, product.quantity - 1);
                    }
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    product.quantity > 1 
                      ? 'hover:bg-gray-200' 
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  title={product.quantity > 1 ? "Decrease quantity" : "Minimum quantity is 1"}
                >
                  <Minus size={16} />
                </button>
                <span className="px-3 font-semibold text-gray-700 min-w-[40px] text-center">
                  {product.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  title="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="p-2 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors"
                title="Remove"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-8 rounded-2xl shadow-2xl">
        <div className="flex justify-between text-3xl font-bold mb-6">
          <span>Total:</span>
          <span>{total.toLocaleString()} EGP</span>
        </div>
        <button className="w-full bg-white text-rose-500 py-4 px-8 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-lg">
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
}
