import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import Guesser from '../Guesser/Guesser';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameState, setGameState] = React.useState(0); // 0 = ongoing, 1 = won, -1 = lost

  function addGuess(guess) {
    const newGuessObj = {
      value: guess,
      checks: checkGuess(guess, answer),
    };
    const newGuessList = [...guessList, newGuessObj];
    setGuessList(newGuessList);

    // Handle winning
    if (guess === answer) {
      setGameState(1);
    } else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState(-1);
    }
  }

  return (
    <div className="guess-wrapper">
      <GuessResults guessList={guessList} />
      <Guesser addGuess={addGuess} active={gameState === 0} />
      {gameState === 1 && <WonBanner numGuesses={guessList.length} />}
      {gameState === -1 && <LostBanner answer={answer} />}
    </div>
  );
}

export default Game;
