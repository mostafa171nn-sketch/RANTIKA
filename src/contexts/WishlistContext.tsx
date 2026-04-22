"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [mounted, setMounted] = useState(false);

  // Ensure we're on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load wishlist from localStorage on mount (client-side only)
  useEffect(() => {
    if (!mounted) return;
    
    try {
      const savedWishlist = localStorage.getItem('luxury-wishlist');
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        setWishlist(parsedWishlist);
      }
    } catch (e) {
      console.error('Failed to load wishlist:', e);
    }
  }, [mounted]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (!mounted) return;
    
    try {
      localStorage.setItem('luxury-wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist:', e);
    }
  }, [wishlist, mounted]);

  const addToWishlist = (product: Product) => {
    setWishlist((currentWishlist) => {
      // Prevent duplicates
      if (currentWishlist.find((item) => item.id === product.id)) {
        return currentWishlist;
      }
      return [...currentWishlist, product];
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((currentWishlist) => currentWishlist.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product: Product) => {
    console.log('Heart clicked - adding to wishlist:', product.name);
    setWishlist((currentWishlist) => {
      // Check if product already exists
      if (currentWishlist.find((item) => item.id === product.id)) {
        console.log('Product already in wishlist');
        return currentWishlist;
      }
      const newWishlist = [...currentWishlist, product];
      console.log('Added to wishlist, total items:', newWishlist.length);
      return newWishlist;
    });
  };

  const isInWishlist = (id: number) => wishlist.some((p) => p.id === id);

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
