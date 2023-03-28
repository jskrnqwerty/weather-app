import * as React from "react";
const SvgPressureLowAlt = ({ title, titleId, ...props }) => (
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
        id="pressure-low-alt_svg__a"
        x1={21.91}
        x2={42.09}
        y1={14.52}
        y2={49.48}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.45} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
    </defs>
    <path
      fill="url(#pressure-low-alt_svg__a)"
      stroke="#2885c7"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M38 14H26a12 12 0 0 0-12 12v12a12 12 0 0 0 12 12h12a12 12 0 0 0 12-12V26a12 12 0 0 0-12-12Zm.5 27h-13V23h4v14.67h9Z"
    />
  </svg>
);
export default SvgPressureLowAlt;
