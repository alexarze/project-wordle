import React from 'react';
import Button from '../Button/Button';

function Banner({ variant, buttonAction, children }) {
  const className = `${variant === 'happy' ? 'happy' : 'sad'} banner`;
  return (
    <div className={className}>
      {children}
      <Button onClick={() => buttonAction()}>Start Over!</Button>
    </div>
  );
}

export default Banner;
