import React, { useState } from 'react';

function DemoForm() {
    const [UserName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const postData = { UserName, email, body };

        try {
            setSuccessMessage(postData.UserName + ' '+ postData.email +' '+ postData.body);
            // Optionally clear the form after successful submission
            setUserName('');
            setEmail('');
            setBody('');
        } catch (err) {
            setError('Error submitting post');
            console.error('Error:', err);
        } finally {
            setIsSubmitting(false);
        }
    } 

    return(
        <div>
            <h2>Demo Form</h2>
            <form className="demo-form" onSubmit={submitHandler}>
                <label htmlFor="title">Username:</label>
                <input 
                    type="text"
                    name="username" 
                    id="username"
                    required
                    className="form-control"
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="title">Email:</label>
                <input 
                    type="email"
                    name="email" 
                    id="email"
                    required
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="title">Description:</label>
                <textarea 
                    name="body" 
                    id="body"
                    required
                    value={body}
                    className="form-control"
                    onChange={(e) => setBody(e.target.value)}
                />

                <button type="submit" disabled={isSubmitting} className="btn btn-primary mt-2">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
}

export default DemoForm;
