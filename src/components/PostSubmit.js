import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";

const PostSubmit = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    // Only allow numeric values
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Regex checks if the value is numeric (zero or more digits)
      setUserId(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Data to be sent in the request
    const postData = { userId, title, body };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const data = await response.json();
      console.log('Post submitted:', data);
      setSuccessMessage('Post submitted successfully! '+ data.id);
      // Optionally clear the form after successful submission
      setUserId('');
      setTitle('');
      setBody('');
    } catch (err) {
      setError('Error submitting post');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Submit Post</h2>
      <form className="post-submit" onSubmit={handleSubmit}>
        <div>
        <TextField
          id="userId"
          label="User ID"
          variant="outlined"
          className="form-control mb-2"
          value={userId}
          onChange={handleChange}
          required
        />
        </div>
        <div>
          <TextField
            id="title"
            className="form-control mb-2"
            variant="outlined"
            label="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField
            id="body"
            variant="outlined"
            label="Body" 
            value={body}
            multiline
            rows={4}
            className="form-control mb-2"
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting} variant="contained" className="btn btn-primary mt-2">
          {isSubmitting ? 'Submitting...' : 'Submit Post'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default PostSubmit;
