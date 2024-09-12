import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntermediateLevelGirl.css'; 
import girlImage from '../assets/girl.png';
import ints1 from '../assets/buttons&dialogues/ints1.png';
import ints2 from '../assets/buttons&dialogues/ints2.png';
import ints3 from '../assets/buttons&dialogues/ints3.png';
import doneButton from '../assets/buttons&dialogues/done.png';
import backButtonImage from "../assets/buttons&dialogues/backButton.png"; // New back button import

const IntermediateLevelGirl = () => {
  const navigate = useNavigate();
  const [selectedStage, setSelectedStage] = useState(null);

  const handleStageClick = (stage) => {
    setSelectedStage(stage);
  };
  
  const handleDoneClick = () => {
    if (selectedStage === 'IS1') {
      navigate('/Stage2?level=2&gender=girl');
    } else {
      // Navigate to different routes for other stages
      if (selectedStage === 'IS2') {
        navigate('/BeginnerStage1Boy');
      } else if (selectedStage === 'IS3') {
        navigate('/stage3');
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
          onClick={() => handleStageClick('IS1')}
          className={`intStage1 ${selectedStage === 'IS1' ? 'selected' : ''}`}
        >
          <img src={ints1} alt="i1" />
        </button>
        <button
          onClick={() => handleStageClick('IS2')}
          className={`intStage2 ${selectedStage === 'IS2' ? 'selected' : ''}`}
        >
          <img src={ints2} alt="i2" />
        </button>
        <button
          onClick={() => handleStageClick('IS3')}
          className={`intStage3 ${selectedStage === 'IS3' ? 'selected' : ''}`}
        >
          <img src={ints3} alt="i3" />
        </button>
        <button onClick={handleDoneClick} className="buttonLevel done-button">
          <img src={doneButton} alt="Done" />
        </button>
      </div>
    </div>
  );
};

export default IntermediateLevelGirl;
