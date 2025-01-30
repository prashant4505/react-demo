import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams(); // Get post ID from URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulating fetching post data (Replace with API call)
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
      <Link to="/" className="mt-4 btn btn-primary btn-sm">
        Back to Posts
      </Link>
    </div>
  );
};

export default PostDetail;
