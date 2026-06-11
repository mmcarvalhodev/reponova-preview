"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-default bg-soft">
        <Image
          src={main}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img + i}
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden rounded-lg border transition ${
                i === active
                  ? "border-champagne"
                  : "border-default hover:border-silver"
              }`}
            >
              <Image
                src={img}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
