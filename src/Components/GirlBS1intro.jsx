import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GirlBS1intro.css'; // Import CSS for styling

const GirlBegStage1Intro = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/BeginnerStage1Girl');
  };

  const handleSkip = () => {
    navigate('/BeginnerStage1Girl');
  };

  return (
    <div className="GirlBegStage1Intro">
      <video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
        <source src="/sandybs1instruc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
    </div>
  );
};

export default GirlBegStage1Intro;
