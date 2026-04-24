"use client";

import { Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

const products = [
  { id: 1, name: "Wedding Mirror", price: "250 EGP", image: "/imgs/logo.jpeg" },
  { id: 2, name: "Rose Bouquet", price: "300 EGP", image: "/imgs/logo.jpeg" },
  { id: 3, name: "Luxury Frame", price: "450 EGP", image: "/imgs/logo.jpeg" },
  { id: 4, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 5, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 6, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 7, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 8, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 9, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 10, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 11, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 12, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 13, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 14, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 16, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 17, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 18, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
  { id: 19, name: "Gift Box", price: "400 EGP", image: "/imgs/logo.jpeg" },
];

export default function ProductsPage() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className=" py-16 px-5 max-w-7xl mx-auto relative last">
      <h1 className="from-top box our text-7xl font-bold mb-6 text-center font-playfair wish">
       Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded-2xl shadow overflow-hidden">
            {/* Heart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product);
              }}
              className="absolute top-1 right-1 bg-white/90 p-1 rounded-full shadow-lg hover:bg-red-50 r z-10 transition-all"
              title={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart
                size={20}
                fill={isInWishlist(product.id) ? 'red' : 'none'}
                strokeWidth={isInWishlist(product.id) ? 1 : 2}
              />
            </button>
            
            {/* Image */}
            <div className="h-40 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h2 className="font-semibold text-lg truncate">{product.name}</h2>
              <p className="text-xl font-bold text-rose-300 mt-1">{product.price}</p>
              <div className="mt-3 space-y-1">
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-gradient-to-r from-pink-300 to-purple-400 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all w-full"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => {
                    addToCart(product);
                    window.location.href = '/checkout';
                  }}
                  className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:shadow-xl transition-all w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

