import React, { memo } from "react";

const IMAGES = [
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
];

const DOUBLED_IMAGES = [...IMAGES, ...IMAGES];

const Marquee = memo(function Marquee() {
  return (
    <div className="overflow-hidden w-full mt-12">
      <div className="flex animate-marquee gap-6">
        {DOUBLED_IMAGES.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="marquee-img rh-32 md:h-40 rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
            width="160"
            height="128"
          />
        ))}
      </div>
    </div>
  );
});

export default Marquee;

