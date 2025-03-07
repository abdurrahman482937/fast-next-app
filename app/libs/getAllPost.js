export default async function getAllPost() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  if (!posts.ok) {
    throw new Error("something is wrong! Line 6. file getPost. folder libs");
  }

  return posts.json();
}
