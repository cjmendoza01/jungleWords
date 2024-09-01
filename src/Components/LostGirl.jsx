import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LostGirl.css'; // Import CSS for styling
import button from '../assets/buttons&dialogues/skip.png';

const LostGirl = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/BegLevelPickerGirl');
  };

  const handleSkip = () => {
    navigate('/BegLevelPickerGirl');
  };

  return (
    <div className="LostGirl">
      <video autoPlay muted={false} onEnded={handleVideoEnd} className="video">
        <source src="/sandyLost.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img 
        src={button} 
        alt="Skip Button" 
        className="button" 
        onClick={handleSkip} 
      />
    </div>
  );
};

export default LostGirl;
