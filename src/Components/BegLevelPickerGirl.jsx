import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './BegLevelPickerGirl.css'; 
import begButton from '../assets/buttons&dialogues/begButton.png';
import intButton from '../assets/buttons&dialogues/intButton.png';
import advButton from '../assets/buttons&dialogues/advButton.png';
import bnextButton from '../assets/buttons&dialogues/beginNext.png';
import lockImage from '../assets/buttons&dialogues/lock.png';
import accessCodeImage from '../assets/buttons&dialogues/accessCode.png';
import doneButton from '../assets/buttons&dialogues/done.png';
import beginX from '../assets/buttons&dialogues/beginX.png'; // Import the X button image
// import backgroundVideo from '../BGAnimationGirl.mp4'; 

const BegLevelPickerGirl = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null); 
  const [accessCode, setAccessCode] = useState('');
  const [showAccessCodeInput, setShowAccessCodeInput] = useState(false);

  const handleStageClick = (level) => {
    setSelectedLevel(level);
  };

  const handleNextClick = () => {
    if (selectedLevel) {
      setShowAccessCodeInput(true);
    } else {
      alert('Please select a level');
    }
  };

  const handleDoneClick = () => {
    if (selectedLevel === 'Beginner' && accessCode === '1234') {
      navigate('/BeginnerLevelGirl');
    } else if (selectedLevel === 'Intermediate' && accessCode === '5678') {
      navigate('/IntermediatePage');
    } else if (selectedLevel === 'Advanced' && accessCode === '91011') {
      navigate('/AdvancedPage');
    } else {
      alert('Please select a level and enter the correct access code');
    }
  };

  const handleCloseClick = () => {
    setShowAccessCodeInput(false);
    setAccessCode('');
    setSelectedLevel(null);
  };

  return (
    <div className="chooselevelGirl">
        <video autoPlay muted loop className="background-video">
      <source src="/BGAnimationGirl.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className="buttons">
        <div className="buttonWithLock">
          <button onClick={() => handleStageClick('Beginner')} className={`beginButton ${selectedLevel === 'Beginner' ? 'selected' : ''}`}>
            <img src={begButton} alt="Beginner" />
          </button>
          <img src={lockImage} alt="Lock" className="lockImages1" />
        </div>
        <div className="buttonWithLock">
          <button onClick={() => handleStageClick('Intermediate')} className={`interButton ${selectedLevel === 'Intermediate' ? 'selected' : ''}`}>
            <img src={intButton} alt="Intermediate" />
          </button>
          <img src={lockImage} alt="Lock" className="lockImage2" />
        </div>
        <div className="buttonWithLock">
          <button onClick={() => handleStageClick('Advanced')} className={`advanButton ${selectedLevel === 'Advanced' ? 'selected' : ''}`}>
            <img src={advButton} alt="Advanced" />
          </button>
          <img src={lockImage} alt="Lock" className="lockImage3" />
        </div>
        <button onClick={handleNextClick} className="clickNext next-button">
          <img src={bnextButton} alt="Next" />
        </button>
      </div>
      {showAccessCodeInput && (
        <div className="access-code-container">
          <img src={accessCodeImage} alt="Access Code" className="access-code-image" />
          <input 
            type="text" 
            value={accessCode} 
            onChange={(e) => setAccessCode(e.target.value)} 
            className="access-code-input" 
            placeholder="Enter Access Code"
          />
          <button onClick={handleDoneClick} className="done-button-overlay">
            <img src={doneButton} alt="Done" />
          </button>
          <button onClick={handleCloseClick} className="close-button">
            <img src={beginX} alt="Close" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BegLevelPickerGirl;
