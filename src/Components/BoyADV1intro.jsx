import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BoyIS1introo.css'; // Import CSS for styling

const BoyIntStage3Intro = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/QrGame');
  };

  const handleSkip = () => {
    navigate('/QrGame');
  };

  return (
    <div className="BoyIntStage1Intro">
      <video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
        <source src="/sanderadv1instruc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
    </div>
  );
};

export default BoyIntStage3Intro;
