import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BS2BoyGonzoTY.css'; // Import CSS for styling
import button from '../assets/buttons&dialogues/skip.png';
import muteButton from '../assets/buttons&dialogues/muteButton.png';
import unmuteButton from '../assets/buttons&dialogues/unmuteButton.png';

const BS2BoyGonzoTY = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted

  const handleVideoEnd = () => {
    navigate('/BS2GJBoy'); // Navigate to BS1GJBoy component
  };

  const handleSkip = () => {
    navigate('/BS2GJBoy'); // Navigate to BS1GJBoy component
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="BS2BoyGonzoTY">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        onEnded={handleVideoEnd}
        className="video"
      >
        <source src="/GonzoBS1TY.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      <img
        src={isMuted ? unmuteButton : muteButton}
        alt="Mute/Unmute Button"
        className="button mute-button"
        onClick={toggleMute}
      />
    </div>
  );
};

export default BS2BoyGonzoTY;
