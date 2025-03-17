import Button from "@/app/Components/Button";
import Image from "next/image";
import cover from "@/public/cover.jpg";

export default function Artless() {
  return (
    <div className="px-20">
      <h1 className="text-3xl">Artless</h1>
      <p className="text-2xl">This is Artless Page.</p>
      <div className="w-[700px]">
        <Image className="border-zinc-500 border" src={cover} alt="cover image" quality={100} placeholder="blur" />
      </div>
      <Button />
    </div>
  );  
}
