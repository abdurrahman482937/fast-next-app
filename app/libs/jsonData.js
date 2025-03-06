export default async function JsonData() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  return posts.json();
}
