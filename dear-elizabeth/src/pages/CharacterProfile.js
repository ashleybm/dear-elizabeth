import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppData } from '../store/AppContext';
import './CharacterProfile.css';
import SpotifyPlayer from '../components/SpotifyPlayer';

function CharacterProfile() {
  const { id } = useParams();
  const { characters, letters } = useAppData();
  const character = characters[id];

  if (!character) {
    return (
      <div className="character-profile">
        <div className="profile-container">
          <h1>Character not found</h1>
          <Link to="/characters" className="back-link">← Back to Characters</Link>
        </div>
      </div>
    );
  }

  // Filter letters authored by this character
  const characterLetters = letters.filter(letter => letter.author === id);

  return (
    <div className="character-profile">
      <div className="profile-container">
        <Link to="/characters" className="back-link">← Back to Characters</Link>
        
        <div className="profile-header">
          <div className="profile-image-container">
            <img src={`${process.env.PUBLIC_URL}${character.image}`} alt={character.name} />
          </div>
          <h1>{character.name}</h1>
        </div>

        <div className="profile-content">
          <section className="info-section">
            <div className="info-group">
              <h3>Basic Information</h3>
              {Object.entries(character.basics).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </p>
              ))}
            </div>

            <div className="info-group">
              <h3>Character Traits</h3>
              {Object.entries(character.traits).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </p>
              ))}
            </div>
          </section>

          {character.biography && (
            <section className="biography-section">
              <h3>Biography</h3>
              {character.biography.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          )}

          <div className="media-section">
            {character.playlistUrl && (
              <section className="music-section">
                <h3>Character Playlist</h3>
                <SpotifyPlayer playlistId={character.playlistUrl} />
              </section>
            )}

            {characterLetters.length > 0 && (
              <section className="letters-section">
                <h3>Letters Written</h3>
                <div className="letters-list">
                  {characterLetters.map(letter => (
                    <Link to={`/letters/${letter.id}`} key={letter.id} className="letter-link">
                      <div className="letter-header">
                        <span className="letter-number">#{letter.id}</span>
                        <span className="letter-prompt">{letter.tag}</span>
                      </div>
                      <h4 className="letter-title">{letter.title}</h4>
                      <span className="letter-date">{letter.date}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterProfile;
