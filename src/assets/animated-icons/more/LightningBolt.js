import * as React from "react";
const SvgLightningBolt = ({ title, titleId, ...props }) => (
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
        id="lightning-bolt_svg__a"
        x1={24.11}
        x2={37.64}
        y1={18.33}
        y2={41.78}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f7b23b" />
        <stop offset={0.45} stopColor="#f7b23b" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <path
      fill="url(#lightning-bolt_svg__a)"
      stroke="#f6a823"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="m29 15.5-6 18h6l-3 15 15-21h-9l6-12h-9z"
    >
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"
      />
    </path>
  </svg>
);
export default SvgLightningBolt;
