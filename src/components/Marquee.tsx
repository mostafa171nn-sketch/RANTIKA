import { Key } from "lucide-react";

const images = [
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
  "/imgs/logo.jpeg",
  
];

export default function Marquee() {
    
  return (
    <div className="overflow-hidden w-full mt-12">
      <div className="flex animate-marquee gap-6">
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            className="marquee-img rh-32 md:h-40 rounded-2xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}