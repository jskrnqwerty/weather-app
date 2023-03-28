import * as React from "react";
const SvgMoonWaxingGibbous = ({ title, titleId, ...props }) => (
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
        id="moon-waxing-gibbous_svg__a"
        x1={24.28}
        x2={40.93}
        y1={18.15}
        y2={47}
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
      fill="url(#moon-waxing-gibbous_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M49 27a16.78 16.78 0 0 0-19.45-11.9 17.2 17.2 0 0 1 1.73 4 17.76 17.76 0 0 1-13.82 22.19A16.83 16.83 0 0 0 37 48.74 17.83 17.83 0 0 0 49 27Z"
    />
  </svg>
);
export default SvgMoonWaxingGibbous;
