import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import startButtonImage from '../assets/buttons&dialogues/start.png'; // Ensure this path is correct

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CharacterPicker');
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <img src="/Logo.png" alt="JW Logo" />
          </div>
          <div className="nav-links">
            <a href="/" className="home-link">
              <img src="/home.png" alt="Home" />
            </a>
            <a href="/about-us" className="aboutus-link">
              <img src="/aboutuss.png" alt="About Us" />
            </a>
          </div>
        </nav>
      </header>
      <main>
        <video autoPlay muted loop className="video-background">
          <source src="/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="jungle-background">
          <div className="content">
            <img src="/Title.png" alt="Your Image Alt Text" />
            <div className="wooden-sign">
              <button onClick={handleClick} className="startButton">
                <img src={startButtonImage} alt="Start" className="startButtonImage" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
