import * as React from "react";
const SvgUvIndex5 = ({ title, titleId, ...props }) => (
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
        id="uv-index-5_svg__a"
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
      fill="url(#uv-index-5_svg__a)"
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
      fill="#ffb800"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
      rx={6}
    />
    <path
      fill="#fff"
      d="M46.58 40.1a.47.47 0 0 1 .1.35v.73a.46.46 0 0 1-.1.35.47.47 0 0 1-.35.1h-2.91l-.11 1.16h1a2.77 2.77 0 0 1 2.07.72 2.51 2.51 0 0 1 .7 1.84 2.57 2.57 0 0 1-.77 1.89 2.83 2.83 0 0 1-2.09.76c-1.62 0-2.65-.61-3.1-1.82a.52.52 0 0 1 0-.37.5.5 0 0 1 .29-.21l.85-.3a.45.45 0 0 1 .35 0 .49.49 0 0 1 .22.3 1.23 1.23 0 0 0 .47.59 1.69 1.69 0 0 0 .88.2 1 1 0 0 0 .75-.27 1 1 0 0 0 .28-.77.85.85 0 0 0-.29-.69 1.08 1.08 0 0 0-.75-.25h-2.3a.47.47 0 0 1-.38-.12.52.52 0 0 1-.08-.4l.33-3.22a.7.7 0 0 1 .19-.5.75.75 0 0 1 .53-.14h3.87a.47.47 0 0 1 .35.07Z"
    />
  </svg>
);
export default SvgUvIndex5;
