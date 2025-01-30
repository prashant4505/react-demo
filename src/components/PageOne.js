import React, { useState, useEffect } from 'react';

function PageOne() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      // Fetch data from the API when the component mounts
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setPosts(data))  // Store the fetched data in state
        .catch(error => console.log('Error fetching data:', error));
    }, []);

  return (
    <div>
      <h2>Welcome to Page One</h2>
      <p>This is the content of the first page.</p>

      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post">
            <h3>nameame: {post.name}</h3>
            <p>Email: {post.email}</p>
            <p>Address: {post.address.street}, {post.address.city}, {post.address.zipcode}</p>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>  
      )}
      
    </div>
  );
}

export default PageOne;
