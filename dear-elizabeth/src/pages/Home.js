import React from 'react';
import { Link } from 'react-router-dom';
import { useAppData } from '../store/AppContext';
import './Home.css';

function Home() {
  const { letters, characters } = useAppData();

  // Sort letters by date (most recent first)
  const sortedLetters = [...letters].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Get the most recent letter
  const latestLetter = sortedLetters[0];

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
            <h2>Recent Letters</h2>
            {latestLetter && (
              <Link to={`/letters/${latestLetter.id}`} className="letter-card">
                <div className="letter-header">
                  <span className="letter-number">#{latestLetter.id}</span>
                  <span className="letter-prompt">{latestLetter.prompt}</span>
                </div>
                <span className="letter-date">{latestLetter.date}</span>
                <h2 className="letter-title-home">{latestLetter.title}</h2>
                <div className="letter-meta">
                  <p className="letter-author">From: {characters[latestLetter.author]?.name}</p>
                  <p className="letter-recipients">
                    To: {latestLetter.recipients.map(recipientId => 
                      characters[recipientId]?.name
                    ).join(", ")}
                  </p>
                </div>
              </Link>
            )}
            <Link to="/letters" className="read-more">Read More Letters →</Link>
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
