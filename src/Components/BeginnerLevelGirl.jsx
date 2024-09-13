import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BeginnerLevelGirl.css'; 
import girlImage from '../assets/girl.png';
import begs1 from '../assets/buttons&dialogues/begs1.png';
import begs2 from '../assets/buttons&dialogues/begs2.png';
import begs3 from '../assets/buttons&dialogues/begs3.png';
import doneButton from '../assets/buttons&dialogues/done.png';
import backButtonImage from '../assets/buttons&dialogues/backButton.png'; // New back button import

const BeginnerLevelGirl = () => {
  const navigate = useNavigate();
  const [selectedStage, setSelectedStage] = useState(null);

  const handleStageClick = (stage) => {
    setSelectedStage(stage);
  };
  
  const handleDoneClick = () => {
    if (selectedStage === 'BS1') {
      navigate('/GirlBS1intro');
    } else {
      // Navigate to different routes for other stages
      if (selectedStage === 'BS2') {
        navigate('/GirlBS2intro');
      } else if (selectedStage === 'BS3') {
        navigate('/GirlBS3intro');
      } else {
        alert('Please select a stage');
      }
    }
  };
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="beginnerlevelGirl">
    <video autoPlay muted loop className="background-video">
      <source src="/BGAnimationGirl.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
       {/* Back button in the upper left corner */}
       <div className="back-button-container">
        <button onClick={handleBackClick} className="back-button">
          <img src={backButtonImage} alt="Back" />
        </button>
      </div>
      <div className="buttons">
        <button
          onClick={() => handleStageClick('BS1')}
          className={`begStage1 ${selectedStage === 'BS1' ? 'selected' : ''}`}
        >
          <img src={begs1} alt="s1" />
        </button>
        <button
          onClick={() => handleStageClick('BS2')}
          className={`begStage2 ${selectedStage === 'BS2' ? 'selected' : ''}`}
        >
          <img src={begs2} alt="s2" />
        </button>
        <button
          onClick={() => handleStageClick('BS3')}
          className={`begStage3 ${selectedStage === 'BS3' ? 'selected' : ''}`}
        >
          <img src={begs3} alt="s3" />
        </button>
        <button onClick={handleDoneClick} className="buttonLevel done-button">
          <img src={doneButton} alt="Done" />
        </button>
      </div>
    </div>
  );
};

export default BeginnerLevelGirl;
