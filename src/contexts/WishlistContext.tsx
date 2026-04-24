"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef, ReactNode } from 'react';

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
  const [isReady, setIsReady] = useState(false);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load wishlist from localStorage on mount (client-side only)
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('luxury-wishlist');
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        setWishlist(parsedWishlist);
      }
    } catch (e) {
      console.error('Failed to load wishlist:', e);
    }
    setIsReady(true);
  }, []);

  // Debounced save wishlist to localStorage
  useEffect(() => {
    if (!isReady) return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      try {
        localStorage.setItem('luxury-wishlist', JSON.stringify(wishlist));
      } catch (e) {
        console.error('Failed to save wishlist:', e);
      }
    }, 300);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [wishlist, isReady]);

  const addToWishlist = useCallback((product: Product) => {
    setWishlist((currentWishlist) => {
      if (currentWishlist.find((item) => item.id === product.id)) {
        return currentWishlist;
      }
      return [...currentWishlist, product];
    });
  }, []);

  const removeFromWishlist = useCallback((id: number) => {
    setWishlist((currentWishlist) => currentWishlist.filter((item) => item.id !== id));
  }, []);

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((currentWishlist) => {
      if (currentWishlist.find((item) => item.id === product.id)) {
        return currentWishlist;
      }
      return [...currentWishlist, product];
    });
  }, []);

  const isInWishlist = useCallback((id: number) => {
    return wishlist.some((p) => p.id === id);
  }, [wishlist]);

  const value = useMemo(() => ({
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist
  }), [wishlist, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist]);

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

