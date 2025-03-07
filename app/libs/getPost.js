export default async function getPost(id) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!post.ok) {
    throw new Error("something is wrong! Line 6. file getPost. folder libs");
  }

  return post.json();
}
