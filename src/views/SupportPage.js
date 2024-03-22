import React, { useState } from 'react';
import { submitSupportTicket } from '../services/supportService'; // 수정: 함수 사용 변경
import '../styles/SupportPage.scss';

function SupportPage() {
  const [request, setRequest] = useState({ email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRequest({ ...request, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await submitSupportTicket(request); // 수정: 함수 사용 변경
      alert('Support request submitted successfully. We will contact you shortly.');
      setRequest({ email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Failed to submit support request:', error);
    }
  };

  return (
    <div className="support-page">
      <h1>Need Help?</h1>
      <form onSubmit={handleSubmit} className="support-form">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={request.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Describe your issue or question"
          value={request.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default SupportPage;
