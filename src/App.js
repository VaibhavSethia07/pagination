import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Loading from "./components/Loading";
import Paginator from "./components/Paginator";

const URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get(URL);
      setPosts(res.data);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const numbers = [];
  const totalPages = Math.ceil(posts.length / postsPerPage);
  for (let i = 1; i <= totalPages; i++) numbers.push(i);

  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
      <h1>My Blog</h1>
      <Posts posts={currentPosts} />
      <Paginator numbers={numbers} handlePageClick={handlePageClick} />
    </div>
  );
}

export default App;
