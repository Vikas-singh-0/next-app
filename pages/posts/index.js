import Link from "next/link";

function postList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <h2 key={post.id}>
          {post.description}
          <Link href={`posts/${post.id}`}>
            {post.id}
          </Link>
        </h2>
      ))}
    </>
  );
}
export default postList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
