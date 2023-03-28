import * as React from "react";
const SvgMoonLastQuarter = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="moon-last-quarter_svg__a"
        x1={19.64}
        x2={37.19}
        y1={18.96}
        y2={49.35}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.45} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
    </defs>
    <circle
      cx={32}
      cy={32}
      r={16.5}
      fill="none"
      stroke="#e5e7eb"
      strokeDasharray="1.99 5.98"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="rotate(-45 32.002 31.994)"
    />
    <path
      fill="url(#moon-last-quarter_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M29.06 33.31a17.52 17.52 0 0 1 3.26-19 17.44 17.44 0 0 0-7.11 1.58A17.68 17.68 0 0 0 16 39.12a17.68 17.68 0 0 0 23.43 8.72 13.45 13.45 0 0 0 5.94-4.23 17.51 17.51 0 0 1-16.31-10.3Z"
    />
  </svg>
);
export default SvgMoonLastQuarter;
