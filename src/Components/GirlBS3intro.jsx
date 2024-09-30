import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GirlBS3intro.css'; // Import CSS for styling

const GirlBegStage3Intro = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/Stage3?level=1&gender=girl');
  };

  const handleSkip = () => {
    navigate('/Stage3?level=1&gender=girl');
  };

  return (
    <div className="GirlBegStage3Intro">
      <video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
        <source src="/sandybs3instruc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
    </div>
  );
};

export default GirlBegStage3Intro;
