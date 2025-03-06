import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "This is Blog 1 Description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "This is Blog 2 Description",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "This is Blog 3 Description",
    },
  ];
  return (
    <div className="px-20">
      {blogs.map((blog) => (
        <h2 key={blog.id} className=" text-xl font-mono mb-5">
          <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h2>
      ))}
    </div>
  );
}
