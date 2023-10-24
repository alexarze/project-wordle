import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess, statusToState } from '../../game-helpers';
import Guesser from '../Guesser/Guesser';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [letterStates, setLetterStates] = React.useState([]); // -1 = incorrect, 0 = misplaced, 1 = correct
  const [gameState, setGameState] = React.useState(0); // 0 = ongoing, 1 = won, -1 = lost

  function addGuess(guess) {
    const newGuessObj = {
      value: guess,
      checks: checkGuess(guess, answer),
    };
    const newGuessList = [...guessList, newGuessObj];
    setGuessList(newGuessList);

    // Update letter status based on new checks
    console.log(letterStates);
    updateLetterStates(newGuessObj.checks);

    // Handle winning
    if (guess === answer) {
      setGameState(1);
    } else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState(-1);
    }
  }

  // Update the letter states based on a given checkGuess result
  function updateLetterStates(checks) {
    let newLetterStates = { ...letterStates };

    // for each letter check, update the state of that letter to be the max value (or set if unset)
    checks.forEach(({ letter, status }) => {
      const currentState = newLetterStates[letter];
      newLetterStates[letter] = currentState
        ? Math.max(statusToState(status), currentState)
        : statusToState(status);
    });

    // push updates
    setLetterStates(newLetterStates);
    // console.log(newLetterStates);
  }

  return (
    <div className="guess-wrapper">
      <GuessResults guessList={guessList} />
      <Guesser
        addGuess={addGuess}
        letterStates={letterStates}
        active={gameState === 0}
      />
      {gameState === 1 && <WonBanner numGuesses={guessList.length} />}
      {gameState === -1 && <LostBanner answer={answer} />}
    </div>
  );
}

export default Game;
