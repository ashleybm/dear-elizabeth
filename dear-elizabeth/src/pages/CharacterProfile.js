import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CharacterProfile.css';
import SpotifyPlayer from '../components/SpotifyPlayer';

function CharacterProfile() {
  const { id } = useParams();

  const characters = {
    lorelei: {
      name: "Lorelei Tempest Blair",
      image: `/assets/img/LoreleiTempestBlair.png`,
      basics: {
        age: "28",
        home: "Bar Harbor, Maine",
        birthplace: "Salem, Massachusetts",
        birthdate: "June 18th, 1962",
        favoriteTea: "Earl Grey (& Coffee tbh)",
      },
      traits: {
        virtue: "Perseverance",
        vice: "Impulsiveness",
        value: "Authenticity",
      },
      playlistUrl: "0ydpBse7hugvL8IGaIMYuM",
      recentLetters: [],
      biography: [
        "In the mystical embrace of Salem, Massachusetts, Lorelei Tempest Blair was born on a storm-laden night in the summer of 1962 to Elaine Blair and her husband Theodore Blair, (formerly Proctor, yes, he took his wife's surname). The Blair family, renowned for their deep connection to ancient magic, could trace their lineage back through generations of gifted witches, now combined with the Proctor line.",
        "From a young age, Lorelei exhibited an innate affinity for the natural elements. Her laughter seemed to summon playful breezes, and when she danced, raindrops fell in a gentle rhythm. Elders in the Blair family recognized the signs—a Storm Weaver was emerging among them, destined to wield the power of storms.",
        "Lorelei's grandmother, Maeve Blair, a wise and weathered Storm Weaver, became her mentor. In the quiet corners of their historic Salem home, Maeve unveiled the mysteries of stormcraft. Lorelei eagerly absorbed the ancient knowledge, her bond with her grandmother deepening with every passing storm.",
        "On the eve of Lorelei's 18th birthday, a tempest of extraordinary proportions engulfed Salem. Lightning painted the sky in hues of blue, revealing the majestic form of the Thunderbird—the mythical guardian tied to the Blair lineage. Lorelei felt a surge of energy as the Thunderbird bestowed its blessing upon her, marking her as a true Storm Weaver."
      ]
    },
    minnie: {
      name: "Minnie Chaplin",
      image: `/assets/img/MinnieChaplin.png`,
      basics: {
        age: "27",
        home: "Suburbs of Chicago, IL",
        birthplace: "Philadelphia, Pennsylvania",
        birthdate: "November 28th, 1963",
        favoriteTea: "Ginger Peach White",
        favoriteDivination: "Micromancy",
      },
      traits: {
        virtue: "Enthusiasm",
        vice: "Indulgence",
        value: "Community",
      },
      playlistUrl: "5F4cW0RU4ACYpzGyEZRhLI",
      recentLetters: [
        {
          id: 1,
          title: "Potions & Prophecies",
          date: "Spring 1990",
          preview: "I didn't anticipate the reading I received in Spring, but I should have taken it as a warning."
        }
      ],
      biography: [
        "Minnie Chaplin, born on November 28th, 1963, in Philadelphia, Pennsylvania, grew up in the vibrant city, surrounded by her rowdy and lively family. Raised by her parents Seth (56 - March 21st, 1936) and Candy (55 - April 20th, 1937) alongside her two brothers, Eric (27 - January 7th, 1963) and Henderson (21 - September 14th, 1968), and half-sister Jackie (29 - December 5th, 1960), Minnie was immersed in a household that served as a vital community center. Her family's value for community deeply influenced her, instilling in her a strong sense of belonging and connection.",
        "After graduating from the University of Chicago with an associate's degree in History, Minnie found solace and camaraderie in the vibrant nightlife of her college town. She forged deep connections with her found family at the local bars, including Dylan (27 - January 30th, 1963- he/him), Max (26 - August 15th, 1963- she/her), Rebecca  (27 - October 6th, 1962- she/her), Ant (27 - June 10th, 1963 they-them), and Steph (27 - March 10th, 1963 she/her), who embraced her passions for history, magic, and the arts. Supported by these eclectic friends, Minnie continued her exploration of the mystical world she uncovered in her great aunt Dorothy's notes. Minnie couldn't explain it, but she always sensed there was something special about Dorothy, something beyond the ordinary. Dorothy's enigmatic legacy sparked Minnie's curiosity and imagination, leading her on a journey of discovery and self-discovery.",
        "Minnie, fueled by her passion for history, channeled her energy into her work as a curator at a local community museum. With her dedication to preserving the stories of her city, Minnie transformed the museum into a captivating space that reflected the rich heritage of Chicago. Drawing inspiration from her surroundings, Minnie curated exhibits that seamlessly blended history with elements of wonder, captivating visitors and sparking their imaginations. Supported by her friends and fueled by her love for her work, Minnie thrived in her role as a curator, embracing every opportunity to share the stories of Chicago with others. In addition to her museum work, Minnie bartended on the side to supplement her income.",
        "While she isn't entirely sure where she draws her power, her family has always been known as the family with a little magic. People in the neighborhood would ask her family members about luck, or hope, and those things were generally delivered with a well loved book, loaf of bread, or in a few twists of a wrench. Her mother always referred to herself as a common witch, but Minnie has always felt something boiling beneath the surface."
      ]
    },
    elspeth: {
      name: "Elspeth Mackintosh",
      image: `/assets/img/ElspethMackintosh.jpg`,
      basics: {
        age: "25",
        home: "Providence, Rhode Island",
        birthplace: "Edinburgh, Scotland",
        birthdate: "October 31st, 1965",
        favoriteTea: "Scottish Breakfast",
      },
      traits: {
        virtue: "Curiosity",
        vice: "Perfectionism",
        value: "Knowledge",
      },
      playlistUrl: "342SYgrgaBRVBfVtvT4b79",
      recentLetters: [],
      biography: [
        "Elspeth Mackintosh was born into a world where the ancient whispers of Scottish lore mingled with the brisk winds that swept across the shores of Loch Ness. She has always been captivated by the tales spun by locals and tourists alike, stories that danced between the realms of history and myth, reality and fantasy.",
        "Growing up on her family's estate near Inverness, Elspeth's days were filled with the sights and sounds of the Highlands, but it was the tales told in her mother's cafe and souvenir shop that truly ignited her imagination. Surrounded by relics of the past and fueled by the fervor of those who passed through, she found herself drawn to the mysteries that lurked beneath the surface of her homeland.",
        "But Elspeth's adventurous spirit often led her into trouble. With a courage that bordered on recklessness, she would trespass on private property in search of hidden secrets and forgotten treasures, much to the dismay of her parents. Eager to temper her wild ways and humble her, she was sent to live and work with her aunts in the United States.",
        "In New England, Elspeth found herself on a new journey of discovery. Immersed in a land rich with history and steeped in its own tales of mystery and intrigue, she felt a kinship with the stories that unfolded around her. Determined to channel her passion into something productive, she pursued a degree in journalism at Brown University, determined to become a voice for the untold stories waiting to be unearthed.",
        "After years of honing her skills in newsrooms across the region, Elspeth has emerged as a tenacious investigative journalist. With each article she writes and each mystery she unravels, she feels a connection to the land of her birth, knowing that her journey has only just begun."
      ]
    },
    eileen: {
      name: "Eileen Emberstone",
      image: `/assets/img/EileenEmberstone.png`,
      basics: {
        age: "28",
        home: "Phoenix, AZ",
        birthplace: "Phoenix, Arizona",
        birthdate: "May 15th, 1962",
        favoriteTea: "Lemon Ginger",
        favoriteDivination: "Abacomancy",
      },
      traits: {
        virtue: "Ambition",
        vice: "Gossip",
        value: "Earth",
      },
      playlistUrl: "2vzzLuhhzXXoftCqCIRwjo",
      recentLetters: [],
      biography: [
        "Eileen was born and raised in Phoenix, Arizona, where she still resides at the age of 28. She has always had a love for all things related to the earth and nature, stemming from her family's long lineage of witches. Eileen is passionate about her studies in geology, and is currently pursuing her PhD. Her goal is to use her knowledge to help protect and preserve the earth. She is also determined to break out of the traditional stereotypes of witches and prove that magic can coexist with science.",
        "Growing up in a family of witches, Eileen was introduced to witchcraft at a young age. However, she never really felt drawn to traditional forms of divination and instead discovered her love for abacomancy. This became her favorite form of divination and she spent countless hours perfecting her skills. Eileen has a deep connection with her twin brother, Eli, who also shares her passion for earth and nature. They often spend hours exploring the desert around their home. He has been her support system throughout her childhood and through perfecting her craft.",
        "Despite her strong passion for her studies, Eileen struggles with a vice – gossip. She often finds herself getting caught up in rumors and causing drama within her family circle. However, she has been working on controlling her urge to gossip and is slowly learning to prioritize what is truly important to her. As she delves deeper into her PhD and continues to hone her skills in abacomancy, Eileen's confidence and self-discovery grows. She realizes the value of her family's witchcraft and finally embraces her true identity as a powerful witch, no longer afraid of the negative stigma that may come with it."
      ]
    }
  };

  const character = characters[id];

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="character-profile">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <h1>{character.name}</h1>
            <div className="profile-image-container">
              <img src={`${process.env.PUBLIC_URL}${character.image}`} alt={character.name} />
            </div>
          </div>

          <div className="info-section">
            <div className="info-group">
              <h3>Basic Information</h3>
              {Object.entries(character.basics).map(([key, value]) => (
                <p key={key}><strong>{key}:</strong> {value}</p>
              ))}
            </div>

            <div className="info-group">
              <h3>Character Traits</h3>
              {Object.entries(character.traits).map(([key, value]) => (
                <p key={key}><strong>{key}:</strong> {value}</p>
              ))}
            </div>
          </div>

          <div className="media-section">
            <div className="music-section">
              <h3>Character Playlist</h3>
              <SpotifyPlayer playlistId={character.playlistUrl} />
            </div>
            {character.recentLetters.length > 0 && (
              <div className="letters-section">
                <h3>Recent Letters</h3>
                <div className="letters-list">
                  {character.recentLetters.map(letter => (
                    <Link to={`/letters/${letter.id}`} key={letter.id} className="letter-link">
                      <div className="letter-preview">
                        <h4>{letter.title}</h4>
                        <span className="letter-date">{letter.date}</span>
                        {letter.preview && <p className="preview-text">{letter.preview}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="biography-section">
            <h3>Biography</h3>
            <div className="bio-content">
              {character.biography.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterProfile;
