import * as React from "react";
const SvgBarometer = ({ title, titleId, ...props }) => (
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
        id="barometer_svg__a"
        x1={23}
        x2={41}
        y1={16.41}
        y2={47.59}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6b7280" />
        <stop offset={0.45} stopColor="#6b7280" />
        <stop offset={1} stopColor="#374151" />
      </linearGradient>
    </defs>
    <circle
      cx={32}
      cy={32}
      r={18}
      fill="url(#barometer_svg__a)"
      stroke="#e5e7eb"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <path
      fill="none"
      stroke="#9ca3af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M32 25v-6m13.5 13h-6M25 32h-6m22.5-8.5-3 3m-13 0-3-3m16 14 3 3m-19 0 3-3"
    />
    <circle cx={32} cy={32} r={3} fill="#ef4444" />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M32 35.5v-15"
    >
      <animateTransform
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="30 32 32; 55 32 32; 45 32 32; 55 32 32; 30 32 32"
      />
    </path>
  </svg>
);
export default SvgBarometer;
