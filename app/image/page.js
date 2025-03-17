"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
  
export default function page() {
  const [image, setImage] = useState([]);
  const getImage = async () => {
    const response = (await axios.get("https://picsum.photos/v2/list")).data;
    setImage(response);
    console.log(response);
    return response;
  };
  return (
    <div>
      <button
        onClick={getImage}
        className="px-5 py-3 bg-indigo-400 cursor-pointer"
      >
        Get Image
      </button>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-5">
        {image.map((img, i) => {
          return (
            <Image key={i} width={1000} height={1000} className="border-zinc-500 border w-[500px] h-[500px]" src={img.download_url} alt="fetch image..." />
          );
        })}
      </div>
    </div>
  );
}
