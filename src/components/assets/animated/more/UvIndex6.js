import * as React from "react";
const SvgUvIndex6 = ({ title, titleId, ...props }) => (
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
        id="uv-index-6_svg__a"
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
      fill="url(#uv-index-6_svg__a)"
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
      fill="#ff8d00"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
      rx={6}
    />
    <path
      fill="#fff"
      d="M44.11 43C46 43 47 43.8 47 45.47a2.26 2.26 0 0 1-.8 1.85A3.29 3.29 0 0 1 44 48a3 3 0 0 1-2.23-.76 2.84 2.84 0 0 1-.77-2.12v-2.24a2.81 2.81 0 0 1 .78-2.12A3 3 0 0 1 44 40a2.73 2.73 0 0 1 2.87 1.73.37.37 0 0 1 0 .35.53.53 0 0 1-.3.21l-.77.29a.42.42 0 0 1-.34 0 .67.67 0 0 1-.22-.31 1.23 1.23 0 0 0-1.24-.66 1.11 1.11 0 0 0-1.27 1.25v.23a6.56 6.56 0 0 1 1.38-.09ZM44 46.41q1.26 0 1.26-.93a.84.84 0 0 0-.29-.7 1.63 1.63 0 0 0-1-.23 3.7 3.7 0 0 0-1.26.17v.49q.03 1.2 1.29 1.2Z"
    />
  </svg>
);
export default SvgUvIndex6;
