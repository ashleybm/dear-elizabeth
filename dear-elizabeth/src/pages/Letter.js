import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Letter.css';

function Letter() {
  const { id } = useParams();

  const letters = {
    1: {
      id: 1,
      title: "Potions & Prophecies",
      date: "Spring 1990",
      prompt: "Potions",
      author: "Minnie",
      recipients: ["Lorelei", "Elspeth", "Eileen"],
      content: `I didn't anticipate the reading I received in Spring, but I should have taken it as a warning. In the circle on my tray, were 2 crossed bones, my first silver dollar from bartending, and a gum wrapper from our last trip. Now at first, I was hoping this meant one of you would come into great wealth, but since two of these items were new, I didn't know what to expect from them. 

After the last few months, I can say I have a better understanding.

Steph and Rebecca came into the bar one night. I was sure they'd have brought Ant with them, but they came alone. They asked me for a surprise cocktail and since I had a lot of extra gin, I made them a Bramble. You know it- lemon- for protection. When I came back to ask if they wanted another, they were liplocked- and in the furthest back booth in the bar.

They had always hated each other in college. Especially after Steph hit Rebecca's parked car at 20 mph in third year. So I just stood there, slack jawed, and wondered how we'd gotten there. Then, I worried. In throwing something together, I'd forgotten to consider that all components have multiple uses. Will is will, but lemon also helps lubricate emotions, especially in that department. They jumped apart and Steph looked terrified. She ran out of the bar, and Rebecca looked at me like I'd lit her hair on fire. 

Steph had been at the bar the night prior with her boyfriend Matthew, and so of course I kept my mouth shut. But I didn't hear from either of them for almost a week, until Rebecca dropped by with a loaf of bread, and asked for a cure for heartbreak. This was where I needed the warning- because it turned out that Matthew showed at the bar looking for Rebecca not more than two weeks later. He came in with a metal bat, wet curls hairsprayed so hard that a match would have had him bald in an instant.

When he opened his mouth? I was tempted. 

'Fuck off Minnie, tell me where Rebecca's staying these days, and I'll leave your parents shop alone.' Girls- when I tell you this man nearly died- I mean it.

I told him to sit and I'd make a drink while I called Rebecca down from up the street. 'I don't want your liquor, you'll curse me or something.' Hissing like the snake he is of course. But when he saw the Sazerac with a full mango slice on the top, he slid it closer to him if only to get on the fruit atop the drink. (Wormwood- inhibit violent acts, anger reduction)

I went to the phone, and called three people. First, for me, my brother Eric to the bar. Ant- to check on Steph. Finally Rebecca, I told her he was waiting, and she told me she was going to show up with her father. This is how I knew I should have taken this as a warning. The coin- is a symbol of two things here. One, location, two, Matthew let it slip that he was entitled to Steph's paycheck on account of being her boyfriend, thinking I would agree. 

He had also stitched a Bully Boys patch onto his jacket, and I don't allow that shit in my bar. So I grabbed the top and ripped it off. He sprung back from the bar and raised his bat. Eric handled it after that, he walked in and socked him between the eyes. 

He didn't dare say anything after Eric beat him to a pulp. \`Turns out.. he'd been stealing her cash, trapping her in the house, and when he saw Rebecca hug Steph good bye he'd gotten suspicious. Eric told him to get out of town for the week or he'd make sure he spent it in the hospital.

Steph moved out- and is living in my guest room for a bit. She doesn't handle the foot traffic well tho, and I'd anticipate as soon as her and Rebecca smooth it over they'll be living together. I think the wrapper means loss, it's empty, but I also think it contextualizes the who.

With such an eventful Spring, I'm hoping for a warm Summer breeze for all of us.

xoxo,
Minnie`
    }
  };

  const letter = letters[id];

  if (!letter) {
    return <div>Letter not found</div>;
  }

  return (
    <div className="letter-page">
      <div className="letter-content">
        <div className="letter-navigation">
          <Link to="/letters" className="back-link">← Back to Letters</Link>
        </div>
        <div className="letter-header">
          <span className="letter-number">#{letter.id}</span>
          <span className="letter-prompt">{letter.prompt}</span>
          <span className="letter-date">{letter.date}</span>
        </div>
        <h1 className="letter-title">{letter.title}</h1>
        <div className="letter-meta">
          <p className="letter-author">From: {letter.author}</p>
          <p className="letter-recipients">To: {letter.recipients.join(", ")}</p>
        </div>
        <div className="letter-body">
          {letter.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Letter;
