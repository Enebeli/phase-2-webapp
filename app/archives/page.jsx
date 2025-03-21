import React from "react";
import "./archives.css";
import Image from "next/image";

const Archives = () => {
  return (
    <div className="archives-page">
      <header>The Ink That Never Fades</header>

      <div className="subhead">
        An archive of voices, thoughts, and timeless creativity.
      </div>

      <div className="content">
     
        <div className="column">
          <div className="headline">Bored and Brilliant</div>
          <div className="article-content">
            
            <figure className="image-figure">
              <Image
                src="/archive-1.jpeg"
                alt="2 ladies looking over sunset"
                width={400}
                height={150}
                className="article-image"
              />
              <figcaption className="image-caption">
                Girls Watching Sunset By Good Studio
              </figcaption>
            </figure>
            <p>
              These days, we do everything we can to avoid boredom—scrolling,
              streaming, or finding something to fill the silence. But boredom
              isn’t the enemy; it’s actually a secret weapon for creativity.
              When you’re not distracted, your mind starts to wander, connecting
              random thoughts in ways it wouldn’t otherwise. This “mental drift”
              is where creative ideas often spark.
            </p>
          </div>
          <p>
            Think about how great ideas often come in the shower or during a
            long walk—that’s boredom doing its magic. Research shows that doing
            simple, repetitive tasks gives your brain the space to explore new
            ideas. Some of the most creative people, from Einstein to J.K.
            Rowling, have credited boredom for their breakthroughs.
          </p>
        </div>

      
        <div className="column">
          <div className="headline">Headline 2</div>
          <p>Some text for the second column.</p>
        </div>

        
        <div className="column"> 
          <div className="headline">Headline 3</div>
          <p>Some text for the third column.</p>
        </div>
      </div>
    </div>
  );
};

export default Archives;
