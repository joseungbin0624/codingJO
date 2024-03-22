import React from 'react';
import '../styles/TagFiltering.scss';

const TagFiltering = ({ tags, onSelectTag }) => {
  return (
    <div className="tag-filtering">
      {tags.map(tag => (
        <button key={tag} onClick={() => onSelectTag(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFiltering;
