import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import './ChooseLevel.css'; 
import girlImage from '../assets/girl.png';
import begButton from '../assets/buttons&dialogues/begButton.png';
import intButton from '../assets/buttons&dialogues/intButton.png';
import advButton from '../assets/buttons&dialogues/advButton.png';
import doneButton from '../assets/buttons&dialogues/done.png';
import plsChoose from '../assets/buttons&dialogues/plschoose.png';

const ChooseLevel = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null); // Initialize selectedLevel state

  const handleStageClick = (level) => {
    setSelectedLevel(level);
  };

  const handleDoneClick = () => {
    if (selectedLevel === 'Beginner') {
      navigate('/ChooseBeginnerLevel');
    } else {
      // Navigate to different routes for other levels
      if (selectedLevel === 'Intermediate') {
        navigate('/IntermediatePage');
      } else if (selectedLevel === 'Advanced') {
        navigate('/AdvancedPage');
      } else {
        alert('Please select a level');
      }
    }
  };

  return (
    <div className="chooselevel">
      <img src={girlImage} alt="Girl" className="girl-image" />
      <div className="speech-bubble">
        <img src={plsChoose} alt="Please choose your level" />
      </div>
      <div className="buttons">
        <button onClick={() => handleStageClick('Beginner')} className={`button ${selectedLevel === 'Beginner' ? 'selected' : ''}`}>
          <img src={begButton} alt="Beginner" />
        </button>
        <button onClick={() => handleStageClick('Intermediate')} className={`button ${selectedLevel === 'Intermediate' ? 'selected' : ''}`}>
          <img src={intButton} alt="Intermediate" />
        </button>
        <button onClick={() => handleStageClick('Advanced')} className={`button ${selectedLevel === 'Advanced' ? 'selected' : ''}`}>
          <img src={advButton} alt="Advanced" />
        </button>
        <button onClick={handleDoneClick} className="button done-button">
          <img src={doneButton} alt="Done" />
        </button>
      </div>
    </div>
  );
};

export default ChooseLevel;
