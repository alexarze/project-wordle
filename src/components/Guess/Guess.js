import React from 'react';
import { range } from '../../utils';

function Guess({ guess, checks }) {
  return (
    <p className="guess">
      {range(0, 5).map((i) => {
        return (
          <span key={i} className={`cell ${checks ? checks[i].status : ''}`}>
            {checks ? checks[i].letter : ''}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
