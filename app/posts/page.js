import Link from "next/link";
import JsonData from "../libs/jsonData";

export default async function posts() {
  const posts = await JsonData();
  return (
    <div>
      {posts.map((post) => (
        <>
          <Link href={`posts/${post.id}`}>
            <text key={post.id}>{post.title}</text>
          </Link>
          <br />
        </>
      ))}
    </div>
  );
}
