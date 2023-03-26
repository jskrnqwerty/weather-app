import * as React from "react";
const SvgMoonWaningCrescent = ({ title, titleId, ...props }) => (
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
        id="moon-waning-crescent_svg__a"
        x1={17.54}
        x2={35.04}
        y1={20.14}
        y2={50.45}
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
      fill="url(#moon-waning-crescent_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M41.25 46.82c-16.7.48-25.61-19.52-14.07-31.61h0l.08-.06a18.38 18.38 0 0 0-2.38.86A17.5 17.5 0 1 0 39.12 48a18.21 18.21 0 0 0 2.23-1.19Z"
    />
  </svg>
);
export default SvgMoonWaningCrescent;
