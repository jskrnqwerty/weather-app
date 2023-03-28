import * as React from "react";
const SvgMoonFirstQuarter = ({ title, titleId, ...props }) => (
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
        id="moon-first-quarter_svg__a"
        x1={24.26}
        x2={40.74}
        y1={18.57}
        y2={47.1}
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
      fill="url(#moon-first-quarter_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M38.8 15.87a17.48 17.48 0 0 0-7.12-1.58 17.37 17.37 0 0 1-13 29.32 13.42 13.42 0 0 0 5.93 4.23A17.68 17.68 0 0 0 48 39.12a17.68 17.68 0 0 0-9.2-23.25Z"
    />
  </svg>
);
export default SvgMoonFirstQuarter;
