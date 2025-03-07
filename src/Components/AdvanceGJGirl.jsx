import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BS1GJGirl.css'; // Import CSS for styling
import button from '../assets/buttons&dialogues/advDone.png';
import buttonPlay from '../assets/buttons&dialogues/playAgain.png';

const GirlVideo = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted
  const [videoSource, setVideoSource] = useState('');

  // Randomly select a video source when the component mounts
  useEffect(() => {
    const videos = ['/vgoodGirl.mp4', '/goodGirl.mp4', '/excellentGirl.mp4'];
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    const uniqueVideoSource = `${randomVideo}?t=${new Date().getTime()}`; // Cache busting to force reload
    setVideoSource(uniqueVideoSource);
  }, []);

  const handleNextStage = () => {
    navigate('/RewardPageGirl');
  };

  const handleStart = () => {
    navigate('/qrGame?level=2&gender=girl&level=2');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="GirlVideo">
      {videoSource && (
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          className="video"
          loop={false} // Ensure the video does not loop
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <img 
        src={button} 
        alt="nextStage Button" 
        className="buttonz nextStage-buttonz" 
        onClick={handleNextStage} 
      />
      <img 
        src={buttonPlay} 
        alt="Play Again Button" 
        className="buttonz buttonPlay-buttonz" 
        onClick={handleStart} 
      />
    </div>
  );
};

export default GirlVideo;
