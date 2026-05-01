"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

const TopNavbar = memo(function TopNavbar() {
  return (
<div className="zz fixed  left-0 w-full flex justify-center items-center  from-white/80 to-transparent">
      <Link href="/" className="flex flex-col items-center ">
        {/* Logo Image */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 mt-5">
          <Image
            src="/imgs/logo.jpeg"
            alt="Brand Logo"
            fill
            className="object-contain rounded-full"
            priority
          />
        </div>
        
{/* Brand Name with Italian Font */}
        <h2 className=" xx md:text-4xl text-pink-600 tracking-wider">
        RANTIKA
        </h2>
      </Link>
    </div>
  );
});

export default TopNavbar;