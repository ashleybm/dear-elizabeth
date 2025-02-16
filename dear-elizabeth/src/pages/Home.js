import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  // Get all characters' letters and find the most recent one
  const characters = {
    lorelei: {
      recentLetters: [
        { id: 1, title: "Storm's Brewing", date: "February 15, 1990" },
        { id: 2, title: "Midnight Musings", date: "February 10, 1990" },
        { id: 3, title: "Salem Memories", date: "February 5, 1990" },
        { id: 4, title: "Ocean's Call", date: "January 30, 1990" },
        { id: 5, title: "Winter's Heart", date: "January 25, 1990" },
      ],
    },
    minnie: {
      recentLetters: [
        { id: 6, title: "Backstage Stories", date: "February 14, 1990" },
        { id: 7, title: "Opening Night", date: "February 8, 1990" },
        { id: 8, title: "Theater Dreams", date: "February 3, 1990" },
        { id: 9, title: "Chicago Tales", date: "January 28, 1990" },
        { id: 10, title: "Winter in the City", date: "January 23, 1990" },
      ],
    },
    elspeth: {
      recentLetters: [
        { id: 11, title: "Library Mysteries", date: "February 13, 1990" },
        { id: 12, title: "Book Findings", date: "February 7, 1990" },
        { id: 13, title: "Ancient Texts", date: "February 2, 1990" },
        { id: 14, title: "Providence Nights", date: "January 27, 1990" },
        { id: 15, title: "Winter Studies", date: "January 22, 1990" },
      ],
    },
    eileen: {
      recentLetters: [
        { id: 16, title: "Desert Magic", date: "February 12, 1990" },
        { id: 17, title: "Phoenix Dawn", date: "February 6, 1990" },
        { id: 18, title: "Crystal Visions", date: "February 1, 1990" },
        { id: 19, title: "Arizona Sunset", date: "January 26, 1990" },
        { id: 20, title: "Winter in the Desert", date: "January 21, 1990" },
      ],
    },
  };

  // Combine all letters into a single array
  const allLetters = Object.values(characters).flatMap(char => char.recentLetters);
  
  // Sort letters by date (most recent first) and get the latest one
  const latestLetter = allLetters.sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  )[0];

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Dear Elizabeth</h1>
        <p className="subtitle">A Tale Told Through Letters</p>
      </div>
      
      <div className="content-container">
        <section className="introduction-card">
          <h2>Welcome to the Story</h2>
          <p>
            Welcome to a unique TTRPG experience where story unfolds through
            the intimate correspondence between characters. Each letter reveals
            new depths to the narrative, relationships, and the world itself.
          </p>
        </section>

        <section className="featured-content">
          <div className="latest-letter">
            <h2>Latest Letter</h2>
            <div className="letter-preview">
              <span className="letter-date">{latestLetter.date}</span>
              <h3>{latestLetter.title}</h3>
              <p className="preview-text">
                "My dearest Elizabeth, 
                The storm that's been brewing these past few days reminds me so much of that night in Salem..."
              </p>
              <Link to="/letters" className="read-more">Read More Letters →</Link>
            </div>
          </div>

          <div className="featured-character">
            <h2>Featured Character</h2>
            <Link to="/characters/lorelei" className="character-preview">
              <div className="character-image-container">
                <img src={`${process.env.PUBLIC_URL}/assets/img/LoreleiTempestBlair.png`} alt="Lorelei Tempest Blair" />
                <div className="character-overlay">
                  <h3>Lorelei Tempest Blair</h3>
                  <p>Storm Weaver</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
