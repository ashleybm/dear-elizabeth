import React from 'react';
import { Link } from 'react-router-dom';
import { useAppData } from '../store/AppContext';
import './Letters.css';

function Letters() {
  const { letters, characters } = useAppData();

  return (
    <div className="letters-page">
      <div className="letters-container">
        <h1>Letters</h1>
        <p className="tagline">A collection of correspondences between witches in the 1990s</p>
        <div className="letters-grid">
          {letters.map(letter => (
            <Link to={`/letters/${letter.id}`} key={letter.id} className="letter-card">
              <div className="letter-header">
                <div className="letter-header-left">
                  <span className="letter-number">#{letter.id}</span>
                </div>
                <span className="letter-prompt">{letter.prompt}</span>
                <div className="letter-header-right">
                  <span className="letter-date">{letter.date}</span>
                </div>
              </div>
              <h2 className="letter-title">{letter.title}</h2>
              <div className="letter-meta">
                <p className="letter-author">From: {characters[letter.author]?.name}</p>
                <p className="letter-recipients">
                  To: {letter.recipients.map(recipientId => 
                    characters[recipientId]?.name
                  ).join(", ")}
                </p>
              </div>
              <p className="letter-preview">{letter.preview}</p>
              <div className="read-more">Read More →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Letters;
