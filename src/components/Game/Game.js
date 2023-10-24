import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import Guesser from '../Guesser/Guesser';
import GuessResults from '../GuessResults/GuessResults';
import EndGameBanner from '../EndGameBanner/EndGameBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);

  const gameActive = !hasWon && guessList.length < NUM_OF_GUESSES_ALLOWED;

  function addGuess(guess) {
    const newGuessObj = {
      value: guess,
      key: crypto.randomUUID(),
      checks: checkGuess(guess, answer),
    };
    setGuessList([...guessList, newGuessObj]);

    // Handle winning
    if (guess === answer) setHasWon(true);
  }

  return (
    <div className="guess-wrapper">
      <GuessResults guessList={guessList} />
      <Guesser addGuess={addGuess} active={gameActive} />
      <EndGameBanner
        hidden={gameActive}
        variant={hasWon ? 'happy' : 'sad'}
        numGuesses={guessList.length}
        answer={answer}
      />
    </div>
  );
}

export default Game;
