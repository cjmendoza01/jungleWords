import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoPlayer.css';

const RewardPageBoy = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const [currentVideo, setCurrentVideo] = useState('/ribBoy.mp4');

    const handleVideoEnded = () => {
        if (currentVideo === '/ribBoy.mp4') {
          setCurrentVideo('/starBoy.mp4');
          videoRef.current.load();
          videoRef.current.play();
        } else {
      // Navigate to the next page after ribBoy.mp4 finishes
      navigate('/BegLevelPickerBoy');
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="background-video"
        src={currentVideo}
        onEnded={handleVideoEnded}
        autoPlay
        unmuted
      />
     
    </div>
  );
};

export default RewardPageBoy;
