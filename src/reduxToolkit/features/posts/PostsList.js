import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  console.log(posts)
//   const renderPosts = posts.map(post => (
//     <article key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content.sustring(0, 100)}</p>
//     </article>
//   ))

  return (
    <section>
      <h2>posts</h2>
      {/* {renderPosts} */}
    </section>
  );
};

export default PostsList;
