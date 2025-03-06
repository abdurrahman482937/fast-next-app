import { notFound } from "next/navigation";

export default function BlogsPage({ params }) {
  if (params.id >= 4) {
    notFound();
  }
  return (
    <div className="px-20">
      <h2>{params.id}</h2>
    </div>
  );
};
