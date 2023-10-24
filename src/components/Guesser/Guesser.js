import React from 'react';
import Keyboard from '../Keyboard/Keyboard';

function Guesser({ addGuess, active, letterStates }) {
  const [guess, setGuess] = React.useState('');

  function handleGuessChange(newGuess) {
    let newVal = newGuess.toUpperCase();
    if (newVal.length <= 5) {
      setGuess(newVal);
    }
  }

  // interim function for Keyboard prop
  function addLetterToGuess(letter) {
    handleGuessChange(guess + letter);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addGuess(guess);
    setGuess('');
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => handleGuessChange(e.target.value)}
          pattern="[A-Z]{5}"
          required
          disabled={!active}
        />
      </form>
      <Keyboard letterStates={letterStates} handleKeyPress={addLetterToGuess} />
    </>
  );
}

export default Guesser;
