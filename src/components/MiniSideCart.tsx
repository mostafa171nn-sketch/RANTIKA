"use client";

import { useCart } from "@/contexts/CartContext";
import { Trash2, X, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function MiniSideCart() {
  const { cart, removeFromCart, updateQuantity, addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);



  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    const validPrice = isNaN(price) ? 0 : price;
    return sum + (validPrice * item.quantity);
  }, 0);

  return (
    <>
      {/* Cart Icon on Right */}
      <button
        onClick={() => setIsOpen(true)}
        className="box from-right indexx iconn fixed top-[40%] right-[1px] bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 sm:p-2 w-16 h-16 sm:w-12 sm:h-12 rounded-full shadow-lg hover:shadow-xl transition-all z-[60] flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" />
        </svg>
        {cart.length > 0 && (
          <span className=" absolute -top-[-5px] -left-[-3px] bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>



      {/* Mini Side Cart */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="indexx fixed inset-0 bg-black bg-opacity-0" onClick={() => setIsOpen(false)} />
          
          {/* Side Cart */}
          <div className={`indexx fixed top-0 right-0 h-full w-full sm:w-96 lg:w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Header */}
            <div className=" bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold your-cart">Your Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="zflex-1 overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex gap-3">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                          <p className="text-sm font-bold text-rose-300">{item.price}</p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-1 mt-1">
                            <button
                              onClick={() => {
                                if (item.quantity > 1) {
                                  updateQuantity(item.id, item.quantity - 1);
                                }
                              }}
                              className={`p-1 rounded transition-colors text-xs ${
                                item.quantity > 1 
                                  ? 'hover:bg-gray-200' 
                                  : 'opacity-50 cursor-not-allowed'
                              }`}
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-2 font-semibold text-xs min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors text-xs"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1  hover:text-red-600 rounded-full transition-colors flex-shrink-0"
                          title="Remove"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t p-4 bg-gray-50">
                <div className="flex justify-between text-lg font-bold mb-3">
                  <span>Total:</span>
                  <span className="text-rose-300">{total.toLocaleString()} EGP</span>
                </div>
                <button onClick={() => window.location.href = '/checkout'} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
