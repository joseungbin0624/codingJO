import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendCollaboration } from '../store/collaborationSlice';
import '../styles/CollaborationPage.scss';

const CollaborationPage = () => {
    const dispatch = useDispatch();
    const [collabDetails, setCollabDetails] = useState({
        title: '',
        description: '',
        contactEmail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCollabDetails({ ...collabDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendCollaboration(collabDetails));
    };

    return (
        <div className="collaboration-page">
            <h1>Propose a Collaboration</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={collabDetails.title} onChange={handleChange} />
                <textarea name="description" placeholder="Description" value={collabDetails.description} onChange={handleChange}></textarea>
                <input type="email" name="contactEmail" placeholder="Contact Email" value={collabDetails.contactEmail} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CollaborationPage;
