import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../css/Main.css';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [postsPerPage] = useState(7); // Posts per page
  const [totalPosts, setTotalPosts] = useState(0); // Total number of posts

  // Fetch posts data from API 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setTotalPosts(data.length); // Set the total number of posts
      })
      .catch((error) => console.log('Error fetching data:', error));
  }, []);

  // Get posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <p>This is the content of the home page.</p>
      
      {currentPosts.length > 0 ? (
        currentPosts.map((post) => (
          <div key={post.id} className="post">
            <Link to={`/post-detail/${post.id}`}><h3>{post.title}</h3></Link>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}

      {/* Pagination controls using Bootstrap 5 */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {/* Previous Page Button */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage - 1)}>&laquo; Previous</button>
          </li>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}

          {/* Next Page Button */}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next &raquo;</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
