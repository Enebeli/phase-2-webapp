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
                src="/archive-1.jpg"
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
          <div className="headline">The Power Of Doing Nothing</div>
          <div className="article-content">
            
            <figure className="image-figure">
              <Image
                src="/archive 2.png"
                alt="A guy in a park bench watching the sunset"
                width={400}
                height={150}
                className="article-image"
              />
              <figcaption className="image-caption">
                Guy in park bench watching sunset
              </figcaption>
            </figure>
            <p>
            In a world that glorifies hustle, rest can feel like a guilty pleasure.
             But doing nothing, just sitting with your thoughts, can be one of the 
             most productive things you do. When you pause, you give your mind
              space to process, reflect, and even heal.
            </p>
          </div>
          <p>
          We often think that slowing down means falling behind, but it's actually
           the opposite. Some of our best ideas, decisions, and moments of
            clarity come when we step back and breathe. Stillness isn't laziness;
             it's a reset button.
          </p>
        </div>

        
        <div className="column"> 
          <div className="headline">Taking Breaks Makes You Smarter</div>
          <div className="article-content">
            
            <figure className="image-figure">
              <Image
                src="/archive 3.png"
                alt="A guy taking a break from work and sipping coffee"
                width={400}
                height={150}
                className="article-image"
              />
              <figcaption className="image-caption">
                Guy sipping coffee on a break from work
              </figcaption>
            </figure>
            <p>
            Ever notice how stepping away from a tough problem helps you solve 
            it faster when you come back? That’s not a coincidence. Breaks 
            aren’t just for rest—they actually improve focus, memory, and
             problem-solving.
            </p>
          </div>
          <p>
          Your brain isn’t meant to go non-stop. A quick walk, a coffee break,
           or even a few minutes of daydreaming can recharge your mental battery.
            The smartest minds know when to push and when to pause.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Archives;
