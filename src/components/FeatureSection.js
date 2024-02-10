import React from 'react';
import { Parallax } from 'react-parallax';
import './FeatureSection.scss';

const FeatureSection = () => {
  return (
    <Parallax bgImage="/path/to/image.jpg" strength={500}>
      <div className="feature-section">
        <h2>Discover Our Features</h2>
        <p>Explore the wide range of features our platform offers.</p>
      </div>
    </Parallax>
  );
};

export default FeatureSection;

