import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BoyBS3intro.css'; // Import CSS for styling

const BoyBegStage3Intro = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/Stage3');
  };

  const handleSkip = () => {
    navigate('/Stage3');
  };

  return (
    <div className="BoyBegStage2Intro">
      <video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
        <source src="/sanderbs3instruc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
    </div>
  );
};

export default BoyBegStage3Intro;
