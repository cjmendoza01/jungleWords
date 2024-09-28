import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BoyIS1introo.css'; // Import CSS for styling

const GirlIntStage1Intro = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/Stage2?level=2&gender=girl');
  };

  const handleSkip = () => {
    navigate('/Stage2?level=2&gender=girl');
  };

  return (
    <div className="GirlIntStage2Intro">
      <video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
        <source src="/sandyis1instruc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
    </div>
  );
};

export default GirlIntStage1Intro;
