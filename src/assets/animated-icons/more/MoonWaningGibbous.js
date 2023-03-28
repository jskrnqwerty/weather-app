import * as React from "react";
const SvgMoonWaningGibbous = ({ title, titleId, ...props }) => (
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
        id="moon-waning-gibbous_svg__a"
        x1={20.23}
        x2={37.75}
        y1={18.52}
        y2={48.86}
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
      fill="url(#moon-waning-gibbous_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M44.68 40.83a17.84 17.84 0 0 1-11.93-21.72 17.2 17.2 0 0 1 1.73-4A16.78 16.78 0 0 0 15 27a17.83 17.83 0 0 0 12 21.74 16.83 16.83 0 0 0 19.58-7.45 18 18 0 0 1-1.9-.46Z"
    />
  </svg>
);
export default SvgMoonWaningGibbous;
