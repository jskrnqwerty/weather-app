import * as React from "react";
const SvgMoonWaxingCrescent = ({ title, titleId, ...props }) => (
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
        id="moon-waxing-crescent_svg__a"
        x1={26.76}
        x2={41.62}
        y1={20.91}
        y2={46.65}
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
      fill="url(#moon-waxing-crescent_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M39.12 16a18.38 18.38 0 0 0-2.38-.86l.08.06h0c11.54 12.1 2.63 32.1-14.07 31.62h-.1A18.21 18.21 0 0 0 24.88 48a17.5 17.5 0 1 0 14.24-32Z"
    />
  </svg>
);
export default SvgMoonWaxingCrescent;
