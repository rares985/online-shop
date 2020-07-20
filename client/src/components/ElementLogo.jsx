import React from 'react';

const ElementLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5em"
      height="5em"
      viewBox="0 0 256 256"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ 'dominant-baseline': 'hanging' }}
    >
      <rect width="256" height="256" fill="#3b4a6b" rx="16" ry="16" />
      <text
        x="10"
        y="20"
        textAnchor="start"
        fill="#ffffff"
        fontSize="160"
        fontStyle="normal"
        fontFamily="Ubuntu Mono"
      >
        Sh
      </text>
      <g transform="translate(192, 20)">
        <rect width="52" height="36" rx="4" ry="4" fill="#f0d43a" />
        <text
          x="26"
          y="18"
          alignmentBaseline="central"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="32"
          fontStyle="normal"
          fontFamily="Ubuntu Mono"
        >
          on
        </text>
      </g>
      <g transform="translate(192, 68)">
        <rect width="52" height="36" rx="4" ry="4" fill="#f0d43a" />
        <text
          x="26"
          y="18"
          alignmentBaseline="central"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="32"
          fontStyle="normal"
          fontFamily="Ubuntu Mono"
        >
          li
        </text>
      </g>
      <g transform="translate(192, 116)">
        <rect width="52" height="36" rx="4" ry="4" fill="#f0d43a" />
        <text
          x="26"
          y="18"
          alignmentBaseline="central"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="32"
          fontStyle="normal"
          fontFamily="Ubuntu Mono"
        >
          ne
        </text>
      </g>
      <text
        x="20"
        y="192"
        alignmentBaseline="hanging"
        textAnchor="start"
        fill="#ffffff"
        fontSize="32"
        fontStyle="normal"
        fontFamily="Ubuntu Mono"
      >
        online-shop
      </text>
    </svg>
  );
};

export default ElementLogo;
