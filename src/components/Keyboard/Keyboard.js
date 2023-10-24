import React from 'react';
import { KEYBOARD_US } from '../../constants';
import { stateToStatus } from '../../game-helpers';

function Key({ letter, letterStates, handleKeyPress }) {
  const state = letterStates[letter];
  const status = state !== undefined ? stateToStatus(state) : '';
  // console.log(`${letter} : ${state}`);

  return (
    <span
      onClick={() => handleKeyPress(letter)}
      className={`keyboard-key ${status}`}
    >
      {letter}
    </span>
  );
}

function Row({ letters, letterStates, handleKeyPress }) {
  return (
    <p className="keyboard-row">
      {letters.map((letter, i) => {
        return (
          <Key
            key={i}
            letter={letter}
            letterStates={letterStates}
            handleKeyPress={handleKeyPress}
          />
        );
      })}
    </p>
  );
}

function Keyboard({ letterStates, handleKeyPress }) {
  return (
    <div className="keyboard">
      {KEYBOARD_US.map((row, i) => {
        return (
          <Row
            key={i}
            letters={row}
            letterStates={letterStates}
            handleKeyPress={handleKeyPress}
          />
        );
      })}
    </div>
  );
}

export default Keyboard;
