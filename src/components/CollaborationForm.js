import React, { useState } from 'react';
import { isValidEmail } from '../utils/validationUtils';
import '../styles/CollaborationForm.scss'; // SCSS 스타일 파일

function CollaborationForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    // 폼 제출 로직
    setEmail(''); // 이메일 초기화
  };

  return (
    <form onSubmit={handleSubmit} className="collaboration-form">
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CollaborationForm;
