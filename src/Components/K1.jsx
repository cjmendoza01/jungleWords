import React from 'react';
import { useNavigate } from 'react-router-dom';
import './K1.css';
import girlImage from '../assets/girl.png';
import speechBubbleImage from '../assets/buttons&dialogues/ithink.png';
import nextButtonImage from '../assets/buttons&dialogues/next.png';

const K1 = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/K2');
  };

  return (
    <div className="K1">
      <div className="characters">
        <img src={girlImage} alt="Lost Character" className="character-girl" />
        <img src={speechBubbleImage} alt="Speech Bubble" className="speech-bubble" />
      </div>
      <button className="next-button" onClick={handleNextClick}>
        <img src={nextButtonImage} alt="Next" className="nextButtonImage" />
      </button>
    </div>
  );
}

export default K1;
