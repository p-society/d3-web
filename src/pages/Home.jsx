// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { SpriteAnimator, useSprite } from 'react-sprite-animator';
import './Home.css';

const Home = () => {
  const fire_style = useSprite({
      sprite: 'src/assets/spritesheet.svg',
      width:200,
      height:400,
      fps:9,
  })
  return (
    <div>
      <h1>Home Page</h1>
      <button>
        <Link to="/events">Go to Events</Link>
      </button>
      <div id='fire' style={fire_style}>Hello check check</div>
    </div>
  );
};

export default Home;

