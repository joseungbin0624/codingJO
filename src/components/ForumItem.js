// src/components/ForumItem.js

import React from 'react';

function ForumItem({ forum }) {
  return (
    <div className="forum-item">
      <h3>{forum.title}</h3>
      <p>{forum.description}</p>
    </div>
  );
}

export default ForumItem;
