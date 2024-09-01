import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './K2.css';
import girlImage from '../assets/girl.png';
import speechBubbleImage from '../assets/buttons&dialogues/letsgo.png'; 
import nextButtonImage from '../assets/buttons&dialogues/next.png';

const K2 = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNextClick = () => {
    navigate('/ChooseLevel'); // Navigate to the '/chooselevel' route
  };

  return (
    <div className="K2">
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
  
  export default K2;