import React from "react";

const Posts = ({ posts }) => {
  return (
    <section>
      <ul>
        {posts.map((post, idx) => {
          return <li key={idx}>{post.title}</li>;
        })}
      </ul>
    </section>
  );
};

export default Posts;
