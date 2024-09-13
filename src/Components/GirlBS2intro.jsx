import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GirlBS2intro.css'; // Import CSS for styling

const GirlBegStage2Intro = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/Stage2?gender=girl');
  };

  const handleSkip = () => {
    navigate('/Stage2?gender=girl');
  };

  return (
    <div className="GirlBegStage2Intro">
      <video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
        <source src="/sandybs2instruc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
    </div>
  );
};

export default GirlBegStage2Intro;
