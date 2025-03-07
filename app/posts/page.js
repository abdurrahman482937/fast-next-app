import Link from "next/link";
import getAllPost from "../libs/getAllPost";

export default async function posts() {
  const posts = await getAllPost();
  return (
    <div className="flex flex-wrap gap-10">
      {posts.map((post) => (
        <div key={post.id} className="mt-4 h-auto w-50 py-4 px-3 border">
          <Link href={`posts/${post.id}`}>
            <text>{post.title}</text>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}
