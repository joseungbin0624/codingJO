import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';
import './3DCourseCard.scss';
import Button from './Button'; // Assuming Button.js is in the same directory

const CourseCard3D = ({ course }) => {
  const [isHovered, setHovered] = useState(false);

  // Animation for the card
  const cardAnimation = useSpring({
    scale: isHovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  });

  return (
    <div className="course-card-3d-container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Canvas>
        <a.mesh scale={cardAnimation.scale} castShadow>
          {/* Add 3D object/model here. For simplicity, using a simple box. */}
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={isHovered ? 'hotpink' : 'orange'} />
        </a.mesh>
      </Canvas>
      <div className="course-card-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <Button text="Learn More" onClick={() => console.log('Course Selected:', course.id)} />
      </div>
    </div>
  );
};

export default CourseCard3D;
