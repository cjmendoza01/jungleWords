import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BS1GJBoy.css'; // Import CSS for styling
import button from '../assets/buttons&dialogues/nextStage.png';
import buttonPlay from '../assets/buttons&dialogues/playAgain.png';

const BoyVideo = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted
  const [videoSource, setVideoSource] = useState('');

  // Randomly select a video source when the component mounts
  useEffect(() => {
    const videos = ['/vgoodBoy.mp4', '/goodBoy.mp4', '/excellentBoy.mp4'];
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    const uniqueVideoSource = `${randomVideo}?t=${new Date().getTime()}`; // Cache busting to force reload
    setVideoSource(uniqueVideoSource);
  }, []);

  const handleNextStage = () => {
    navigate('/BegLevelPickerBoy');
  };

  const handleStart = () => {
    navigate('/BoyBS3intro');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="BoyVideo">
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
        className="button nextStage-button" 
        onClick={handleNextStage} 
      />
      <img 
        src={buttonPlay} 
        alt="Play Again Button" 
        className="button buttonPlay-button" 
        onClick={handleStart} 
      />
    </div>
  );
};

export default BoyVideo;
