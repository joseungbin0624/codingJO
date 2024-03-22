import React from 'react';
import { Parallax } from 'react-parallax';
import '../styles/FeatureSection.scss';

const FeatureSection = () => {
  // 배경 이미지 경로를 업데이트하거나, 적절한 이미지를 프로젝트 자산에 추가해야 합니다.
  return (
    <Parallax bgImage="/assets/feature-background.jpg" strength={500}>
      <div className="feature-section">
        <h2>Discover Our Features</h2>
        <p>Explore the wide range of features our platform offers.</p>
      </div>
    </Parallax>
  );
};

export default FeatureSection;
