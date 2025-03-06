"use client";

export default function Button() {
  return (
    <button
      className="mt-5 bg-zinc-600 px-5 py-2 cursor-pointer"
      onClick={() => {
        console.log("Button is clicked!");
      }}
    >
      Click Here
    </button>
  );
}
