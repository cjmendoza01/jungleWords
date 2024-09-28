import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BoyIS1introo.css'; // Import CSS for styling

const GirlIntStage3Intro = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/stage3?level=2&gender=girl');
  };

  const handleSkip = () => {
    navigate('/stage3?level=2&gender=girl');
  };

  return (
    <div className="GirlIntStage3Intro">
      <video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
        <source src="/sandyis3instruc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
    </div>
  );
};

export default GirlIntStage3Intro;
