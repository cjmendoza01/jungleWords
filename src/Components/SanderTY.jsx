import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SanderTY.css'; // Import CSS for styling
import button from '../assets/buttons&dialogues/skip.png';
import muteButton from '../assets/buttons&dialogues/muteButton.png';
import unmuteButton from '../assets/buttons&dialogues/unmuteButton.png';

const SanderTY = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted

  const handleVideoEnd = () => {
    navigate('/BS1GJBoy'); // Navigate to BS1GJBoy component
  };

  const handleSkip = () => {
    navigate('/BS1GJBoy'); // Navigate to BS1GJBoy component
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="SanderTY">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        onEnded={handleVideoEnd}
        className="video"
      >
        <source src="/bs1tyboy.mp4" type="video/mp4" />
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

export default SanderTY;
