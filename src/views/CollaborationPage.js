import React, { useState } from 'react';
import CollaborationForm from '../components/CollaborationForm';
import { sendCollaborationRequest } from '../services/collaborationService';
import '../styles/CollaborationPage.scss';
import { Link } from 'react-router-dom';

function CollaborationPage() {
  const [requestSent, setRequestSent] = useState(false);

  const handleCollaborationSubmit = async (collaborationDetails) => {
    try {
      await sendCollaborationRequest(collaborationDetails);
      setRequestSent(true);
    } catch (error) {
      console.error('Failed to send collaboration request:', error);
    }
  };

  return (
    <div className="collaboration-page">
      <h1>Collaborate with Us</h1>
      {!requestSent ? (
        <CollaborationForm onSubmit={handleCollaborationSubmit} />
      ) : (
        <p>Thank you for your interest! We will get back to you soon.</p>
      )}
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default CollaborationPage;
