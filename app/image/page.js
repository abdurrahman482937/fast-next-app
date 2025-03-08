"use client";
import { useState } from "react";
import axios from "axios";
  
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
      <div className="p-5 flex flex-wrap items-center justify-center gap-5">
        {image.map((img) => {
          return (
            <img className="border-zinc-500 border w-[500px] h-[500px]" src={img.download_url} alt="fetch image..." />
          );
        })}
      </div>
    </div>
  );
}
