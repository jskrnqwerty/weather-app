import * as React from "react";
const SvgPressureHighAlt = ({ title, titleId, ...props }) => (
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
        id="pressure-high-alt_svg__a"
        x1={21.91}
        x2={42.09}
        y1={14.52}
        y2={49.48}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.45} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <path
      fill="url(#pressure-high-alt_svg__a)"
      stroke="#ef4444"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M38 14H26a12 12 0 0 0-12 12v12a12 12 0 0 0 12 12h12a12 12 0 0 0 12-12V26a12 12 0 0 0-12-12Zm2 27h-4.17v-7.76h-7.66V41H24V23h4.17v6.91h7.66V23H40Z"
    />
  </svg>
);
export default SvgPressureHighAlt;
