"use client";

import React, { memo, useMemo, useCallback } from "react";
import { useCart } from "@/contexts/CartContext";
import { Trash2, X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MiniSideCart = memo(function MiniSideCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      const validPrice = isNaN(price) ? 0 : price;
      return sum + (validPrice * item.quantity);
    }, 0);
  }, [cart]);

  const cartItemCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const handleDecrease = useCallback((id: number, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  }, [updateQuantity]);

  const handleIncrease = useCallback((id: number, quantity: number) => {
    updateQuantity(id, quantity + 1);
  }, [updateQuantity]);

  const handleRemove = useCallback((id: number) => {
    removeFromCart(id);
  }, [removeFromCart]);

  const handleCheckout = useCallback(() => {
    router.push('/checkout');
  }, [router]);

  return (
    <>
      {/* Cart Icon on Right */}
      <button
        onClick={handleOpen}
        className="box from-right indexx iconn fixed top-[40%] right-[1px] bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 sm:p-2 w-16 h-16 sm:w-12 sm:h-12 rounded-full shadow-lg hover:shadow-xl transition-all z-[60] flex items-center justify-center"
        aria-label="Open cart"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" />
        </svg>
        {cart.length > 0 && (
          <span className="absolute -top-[-5px] -left-[-3px] bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Mini Side Cart */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="indexx fixed inset-0 bg-black bg-opacity-0"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Side Cart */}
          <div className={`indexx fixed top-0 right-0 h-full w-full sm:w-96 lg:w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold your-cart">Your Cart</h2>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close cart"
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
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded flex-shrink-0"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                          <p className="text-sm font-bold text-rose-300">{item.price}</p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-1 mt-1">
                            <button
                              onClick={() => handleDecrease(item.id, item.quantity)}
                              className={`p-1 rounded transition-colors text-xs ${
                                item.quantity > 1
                                  ? 'hover:bg-gray-200'
                                  : 'opacity-50 cursor-not-allowed'
                              }`}
                              disabled={item.quantity <= 1}
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-2 font-semibold text-xs min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrease(item.id, item.quantity)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors text-xs"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="p-1 hover:text-red-600 rounded-full transition-colors flex-shrink-0"
                          title="Remove"
                          aria-label="Remove item"
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
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
});

export default MiniSideCart;

