"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BottoNavbar() {
  const pathname = usePathname();

  const items = [
    { path: "/", label: "Home", icon: "home" },
    { path: "/products", label: "Products", icon: "box" },
    { path: "/wishlist", label: "Wishlist", icon: "heart" },
    { path: "/checkout", label: "Checkout", icon: "cart" },
  ];

  return (
    <div className="box from-bottom menu-b  flex justify-around items-center bg-pink-200 p-3 rounded-full">

      {items.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.path}
            href={item.path}
            className="flex flex-col items-center"
          >
            <div
              className={`
                flex flex-col items-center px-4 py-2 rounded-full
                transition-all duration-300
                ${isActive ? "activ-shadow reletive rounded-full px-5 py-5 before:content-[''] before:absolute before:inset-0 before:rounded-full shadow-lg  scale-110  " : ""}
              `}
            >
              {/* ICON */}
              <span className={isActive ? " tttt" : "text-white"}>
                {item.icon === "home" && (
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 5.432 4 13h2v7h4v-4h4v4h4v-7h2z" />
                  </svg>
                )}

                {item.icon === "box" && (
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 7l9-4 9 4-9 4-9-4zm0 2l9 4 9-4v8l-9 4-9-4V9z" />
                  </svg>
                )}

                {item.icon === "heart" && (
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21s-6-4.35-9-8.28C.5 9.5 2.42 5 6 5c2 0 3 1 4 2 1-1 2-2 4-2 3.58 0 5.5 4.5 3 7.72C18 16.65 12 21 12 21z" />
                  </svg>
                )}

                {item.icon === "cart" && (
                  <svg className="size-6 " fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h15l-1.5 9h-13L5 3H2v2h2l3.6 7.59-1.35 2.44C5.52 16.37 6.48 18 8 18h12v-2H8l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L22 6H6z" />
                  </svg>
                )}
              </span>

              {/* TEXT */}
              <span
                className={`text-sm mt-1 ${
                  isActive ? "tttt" : "text-white"
                }`}
              >
                {item.label}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}