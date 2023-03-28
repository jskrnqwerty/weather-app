import * as React from "react";
const SvgUvIndex1 = ({ title, titleId, ...props }) => (
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
        id="uv-index-1_svg__a"
        x1={26.75}
        x2={37.25}
        y1={22.91}
        y2={41.09}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.45} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <circle
      cx={32}
      cy={32}
      r={10.5}
      fill="url(#uv-index-1_svg__a)"
      stroke="#f8af18"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      fill="none"
      stroke="#fbbf24"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M32 15.71V9.5m0 45v-6.21m11.52-27.81 4.39-4.39M16.09 47.91l4.39-4.39m0-23-4.39-4.39m31.82 31.78-4.39-4.39M15.71 32H9.5m45 0h-6.21"
    >
      <animateTransform
        attributeName="transform"
        dur="45s"
        repeatCount="indefinite"
        type="rotate"
        values="0 32 32; 360 32 32"
      />
    </path>
    <rect
      width={21}
      height={21}
      x={33.5}
      y={33.5}
      fill="#91c700"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
      rx={6}
    />
    <path
      fill="#fff"
      d="M45.4 40.1a.5.5 0 0 1 .1.36v7.08a.5.5 0 0 1-.1.36.46.46 0 0 1-.35.1h-.89a.46.46 0 0 1-.35-.1.5.5 0 0 1-.1-.36v-5.29l-1.07.62a.42.42 0 0 1-.68-.18l-.38-.69a.45.45 0 0 1-.07-.35.64.64 0 0 1 .29-.27l2-1.18a1.24 1.24 0 0 1 .64-.18h.63a.46.46 0 0 1 .33.08Z"
    />
  </svg>
);
export default SvgUvIndex1;
