import React from 'react';

function Banner({ variant, children }) {
  const className = `${variant === 'happy' ? 'happy' : 'sad'} banner`;
  return <div className={className}>{children}</div>;
}

export default Banner;
