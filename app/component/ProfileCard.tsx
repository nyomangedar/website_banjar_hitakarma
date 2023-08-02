import React from "react";

import { StaticImageData } from "next/image";
import Image from "next/image";

interface ProfileProps {
  image: StaticImageData;
  jobTitle: string;
  name: string;
}

export default function ProfileCard({ image, jobTitle, name }: ProfileProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg w-60 h-30 overflow-clip">
      <Image src={image} alt={name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          {jobTitle}
        </h2>
        <p className="text-md text-gray-500 mt-1">{name}</p>
      </div>
    </div>
  );
}
