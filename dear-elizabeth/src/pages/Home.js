import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
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
              <span className="letter-date">February 15, 2025</span>
              <h3>Storm's Brewing</h3>
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
                <img src="/assets/img/LoreleiTempestBlair.png" alt="Lorelei Tempest Blair" />
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
