import React from 'react';
import './style.css';
import { jokes } from '../jokes.js';
import { Joke } from '../Joke';

export const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          useAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
