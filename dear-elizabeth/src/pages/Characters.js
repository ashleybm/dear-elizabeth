import React from 'react';
import { Link } from 'react-router-dom';
import './Characters.css';

function Characters() {
  const mainCharacters = [
    {
      id: 'lorelei',
      name: "Lorelei Tempest Blair",
      image: "/assets/img/LoreleiTempestBlair.png",
      role: "Storm Weaver",
    },
    {
      id: 'minnie',
      name: "Minnie Chaplin",
      image: "/assets/img/MinnieChaplin.png",
      role: "Vellum Weaver",
    },
    {
      id: 'elspeth',
      name: "Elspeth Mackintosh",
      image: "/assets/img/ElspethMackintosh.jpg",
      role: "Truth Seeker",
    },
    {
      id: 'eileen',
      name: "Eileen Emberstone",
      image: "/assets/img/EileenEmberstone.png",
      role: "Opal Whisper",
    }
  ];

  const sideCharacters = Array(8).fill(null).map((_, index) => ({
    id: `npc${index + 1}`,
    name: `NPC ${index + 1}`,
    image: "/assets/img/placeholder.png",
  }));

  return (
    <div className="characters-page">
      <h1>Characters</h1>
      
      <section className="main-characters">
        <h2>Main Characters</h2>
        <div className="character-grid">
          {mainCharacters.map(character => (
            <Link to={`/characters/${character.id}`} key={character.id} className="character-preview">
              <div className="character-image-container">
                <img src={character.image} alt={character.name} />
                <div className="character-overlay">
                  <h3>{character.name}</h3>
                  <p>{character.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="side-characters">
        <h2>Supporting Characters</h2>
        <div className="side-character-grid">
          {sideCharacters.map(character => (
            <div key={character.id} className="side-character-preview">
              <div className="side-character-image">
                <img src={character.image} alt={character.name} />
                <div className="side-character-overlay">
                  <h4>{character.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Characters;
