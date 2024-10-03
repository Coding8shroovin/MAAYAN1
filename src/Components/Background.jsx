import React from 'react';

const Background = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: 'rgb(150,175,150)', stopOpacity: 1 }} />
        <stop offset="70%" style={{ stopColor: 'rgb(90,110,90)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgb(40,60,40)', stopOpacity: 1 }} />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)" />
  </svg>
);

export default Background;
