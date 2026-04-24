"use client";

import React, { memo, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: "home" },
  { path: "/products", label: "Products", icon: "box" },
  { path: "/wishlist", label: "Wishlist", icon: "heart" },
  { path: "/checkout", label: "Checkout", icon: "cart" },
];

const HomeIcon = memo(() => (
  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 5.432 4 13h2v7h4v-4h4v4h4v-7h2z" />
  </svg>
));

const BoxIcon = memo(() => (
  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 7l9-4 9 4-9 4-9-4zm0 2l9 4 9-4v8l-9 4-9-4V9z" />
  </svg>
));

const HeartIcon = memo(() => (
  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21s-6-4.35-9-8.28C.5 9.5 2.42 5 6 5c2 0 3 1 4 2 1-1 2-2 4-2 3.58 0 5.5 4.5 3 7.72C18 16.65 12 21 12 21z" />
  </svg>
));

const CartIcon = memo(() => (
  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 6h15l-1.5 9h-13L5 3H2v2h2l3.6 7.59-1.35 2.44C5.52 16.37 6.48 18 8 18h12v-2H8l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L22 6H6z" />
  </svg>
));

const ICON_MAP = {
  home: HomeIcon,
  box: BoxIcon,
  heart: HeartIcon,
  cart: CartIcon,
};

const BottoNavbar = memo(function BottoNavbar() {
  const pathname = usePathname();

  const navContent = useMemo(() => {
    return NAV_ITEMS.map((item) => {
      const isActive = pathname === item.path;
      const IconComponent = ICON_MAP[item.icon];

      return (
        <Link
          key={item.path}
          href={item.path}
          className="flex flex-col items-center"
          prefetch={true}
        >
          <div
            className={`
              flex flex-col items-center px-4 py-2 rounded-full
              transition-all duration-300
              ${isActive ? "activ-shadow reletive rounded-full px-5 py-5 before:content-[''] before:absolute before:inset-0 before:rounded-full shadow-lg scale-110" : ""}
            `}
          >
            <span className={isActive ? "tttt" : "text-white"}>
              <IconComponent />
            </span>
            <span className={`text-sm mt-1 ${isActive ? "tttt" : "text-white"}`}>
              {item.label}
            </span>
          </div>
        </Link>
      );
    });
  }, [pathname]);

  return (
    <div className="box from-bottom menu-b flex justify-around items-center bg-pink-200 p-3 rounded-full">
      {navContent}
    </div>
  );
});

export default BottoNavbar;

