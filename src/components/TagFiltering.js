import React from 'react';
import './TagFiltering.scss';

const TagFiltering = ({ tags, onTagSelect }) => (
  <div className="tag-filtering">
    {tags.map((tag, index) => (
      <button key={index} onClick={() => onTagSelect(tag)} className="tag">
        {tag}
      </button>
    ))}
  </div>
);

export default TagFiltering;

