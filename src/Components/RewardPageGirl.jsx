import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoPlayer.css';

const RewardPageGirl = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const [currentVideo, setCurrentVideo] = useState('/starGirl.mp4');

    const handleVideoEnded = () => {
        if (currentVideo === '/starGirl.mp4') {
          setCurrentVideo('/ribGirl.mp4');
          videoRef.current.load();
          videoRef.current.play();
        } else {
      // Navigate to the next page after ribBoy.mp4 finishes
      navigate('/BegLevelPickerGirl');
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
        muted
      />
     
    </div>
  );
};

export default RewardPageGirl;
