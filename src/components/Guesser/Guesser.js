import React from 'react';

function Guesser({ addGuess, active }) {
  const [guess, setGuess] = React.useState('');

  function handleGuessChange(e) {
    let newVal = e.target.value.toUpperCase();
    if (newVal.length <= 5) {
      setGuess(newVal);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleGuessChange}
        pattern="[A-Z]{5}"
        required
        disabled={!active}
      />
    </form>
  );
}

export default Guesser;
