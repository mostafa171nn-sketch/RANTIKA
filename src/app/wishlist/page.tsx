"use client";

import { useWishlist } from "@/contexts/WishlistContext";
import { Trash2, Heart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-16 px-5 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8 font-playfair wish">Your Wishlist</h1>
          <div className="mb-8 wish">
            <Heart size={64} className="mx-auto text-gray-300" />
          </div>
          <p className="text-xl text-gray-500 mb-8 wish">Your wishlist is empty</p>
          <a
            href="/products"
            className="inline-block   px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-lg t"
          ><span className="tt">Browse Products
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-5 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-12 text-center font-playfair wish">Your Wishlist</h1>

      <div className="space-y-6 mb-12">
        {wishlist.map((product) => (
          <div key={product.id} className="flex items-center gap-6 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-xl flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-xl truncate">{product.name}</h3>
              <p className="text-2xl font-bold text-rose-300">{product.price}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="p-2 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors"
                title="Remove from wishlist"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-rose-300 to-pink-300 text-white p-8 rounded-2xl shadow-2xl">
        <div className="text-center">
          <p className="text-xl mb-6">You have {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist</p>
          <a
            href="/products"
            className="inline-block bg-white text-rose-500 py-4 px-8 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-lg text-black"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}
