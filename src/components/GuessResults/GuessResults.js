import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
        const guess = guessList[i];
        return <Guess key={i} checks={guess ? guess.checks : null} />;
      })}
    </div>
  );
}

export default GuessResults;
