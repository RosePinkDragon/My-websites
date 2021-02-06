import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

import { Post } from './components/Post';

import './App.css';
import Pagination from './components/Pagination';
import Navbar from './Navbar';

function App() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async() => {
      setLoading(true)
      const res = await axios.get('http://jsonplaceholder.typicode.com/posts');
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts();
  }, [])

  //getting posts
  const indexOfLastPost = currentPage* postsPerPage
  const indexOfFirstPost = indexOfLastPost-postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)


  const paginate = (number) => setCurrentPage(number)

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
        {/* http://jsonplaceholder.typicode.com/posts */}
       
      <h1 className="text-primary mb-3">Posts</h1>
      <Post loading={loading} post={currentPosts}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
    </>
  );
}

export default App;
