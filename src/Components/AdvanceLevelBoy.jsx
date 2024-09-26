import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdvanceLevelBoy.css'; 
import girlImage from '../assets/girl.png';
import advs1 from '../assets/buttons&dialogues/advs1.png';
import advs2 from '../assets/buttons&dialogues/advs2.png';
import doneButton from '../assets/buttons&dialogues/done.png';

const AdvanceLevelBoy = () => {
  const navigate = useNavigate();
  const [selectedStage, setSelectedStage] = useState(null);

  const handleStageClick = (stage) => {
    setSelectedStage(stage);
  };
  
  const handleDoneClick = () => {
    if (selectedStage === 'AS1') {
      navigate('/QrGame');
    } else {
      // Navigate to different routes for other stages
      if (selectedStage === 'AS2') {
        navigate('/QrGame');
      } else if (selectedStage === 'AS3') {
        navigate('/stage3');
      } else {
        alert('Please select a stage');
      }
    }
  };

  return (
    <div className="advancelevelBoy">
    <video autoPlay muted loop className="background-video">
      <source src="/BGAnimationBoy.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className="buttons">
        <button
          onClick={() => handleStageClick('AS1')}
          className={`advStage1 ${selectedStage === 'AS1' ? 'selected' : ''}`}
        >
          <img src={advs1} alt="a1" />
        </button>
        <button
          onClick={() => handleStageClick('AS2')}
          className={`advStage2 ${selectedStage === 'AS2' ? 'selected' : ''}`}
        >
          <img src={advs2} alt="a2" />
        </button>
        <button
          onClick={() => handleStageClick('AS3')}
          className={`advStage3 ${selectedStage === 'AS3' ? 'selected' : ''}`}
        >
        </button>
        <button onClick={handleDoneClick} className="buttonLevel done-button">
          <img src={doneButton} alt="Done" />
        </button>
      </div>
    </div>
  );
};

export default AdvanceLevelBoy;
