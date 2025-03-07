import getPost from "@/app/libs/getPost";

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  return {
    title: `${post.title} - my next app`,
    description: post.body,
  };
}

export default async function post({ params }) {
  const post = await getPost(params.id);
  return (
    <div className="mt-4 h-auto w-auto py-4 px-3">
      <text>{post.title}</text>
      <br />
      <text>{post.body}</text>
    </div>
  );
}
