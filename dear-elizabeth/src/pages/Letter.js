import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppData } from '../store/AppContext';
import './Letter.css';

function Letter() {
  const { id } = useParams();
  const { getLetterById, characters } = useAppData();
  
  const letter = getLetterById(id);

  if (!letter) {
    return <div>Letter not found</div>;
  }

  const author = characters[letter.author];
  const recipients = letter.recipients.map(recipientId => characters[recipientId]);

  return (
    <div className="letter-page">
      <div className="letter-navigation">
        <Link to="/letters" className="back-link">← Back to Letters</Link>
      </div>

      <div className="letter-content">
        <div className="letter-header">
          <div className="letter-top-row">
            <div className="letter-left">
              <span className="letter-number">#{letter.id}</span>
              {letter.prompt && <span className="letter-prompt">{letter.prompt}</span>}
            </div>
            <div className="letter-right">
              <span className="letter-date">{letter.date}</span>
            </div>
          </div>
          
          <div className="letter-title-row">
            <h1>{letter.title}</h1>
          </div>

          <div className="letter-recipients-row">
            To: {recipients.map((recipient, index) => (
              <React.Fragment key={letter.recipients[index]}>
                {index > 0 && ' '}
                <Link to={`/characters/${letter.recipients[index]}`}>
                  {recipient?.name.split(' ')[0]}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="letter-body">
          {letter.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="letter-footer">
          <div className="letter-author">
            From: <Link to={`/characters/${letter.author}`}>{author?.name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter;
