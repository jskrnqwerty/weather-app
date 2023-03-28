import * as React from "react";
const SvgUmbrella = ({ title, titleId, ...props }) => (
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
        id="umbrella_svg__a"
        x1={22.66}
        x2={37.25}
        y1={20.66}
        y2={45.94}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.45} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="umbrella_svg__b"
        x1={25.63}
        x2={36.33}
        y1={19.89}
        y2={38.42}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.45} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#umbrella_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M32 31.19v14M32 17v2m-6 26.5a3 3 0 0 0 6 0"
    />
    <g>
      <path
        fill="url(#umbrella_svg__b)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M45.5 33.12c0-8.28-6-15-13.5-15s-13.5 6.72-13.5 15l1.43-.91a6 6 0 0 1 6.58.08l1.24.83.77-.54a6 6 0 0 1 7 0l.77.54 1.24-.83a6 6 0 0 1 6.58-.08Z"
      />
      <path
        fill="none"
        stroke="#ef4444"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M32 18.12s-5 6.63-4.25 15M36.25 33.13c.75-8.38-4.25-15-4.25-15"
      />
      <animateTransform
        attributeName="transform"
        dur="2s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 0.5; 0 0"
      />
    </g>
  </svg>
);
export default SvgUmbrella;
