import React from 'react';

function EndGameBanner({ hidden, variant, numGuesses, answer }) {
  const isHappy = variant === 'happy';
  const className = `${isHappy ? 'happy' : 'sad'} banner`;

  return (
    !hidden && (
      <div className={className}>
        <p>
          {isHappy ? (
            <>
              <strong>Congratulations!</strong> Got it in{' '}
              <strong>{numGuesses} guesses</strong>.
            </>
          ) : (
            <>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </>
          )}
        </p>
      </div>
    )
  );
}

export default EndGameBanner;
