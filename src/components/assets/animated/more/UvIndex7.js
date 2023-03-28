import * as React from "react";
const SvgUvIndex7 = ({ title, titleId, ...props }) => (
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
        id="uv-index-7_svg__a"
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
      fill="url(#uv-index-7_svg__a)"
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
      d="M46.9 40.1a.5.5 0 0 1 .1.36V41a1.51 1.51 0 0 1-.15.65l-2.8 5.93a.61.61 0 0 1-.27.34 1.88 1.88 0 0 1-.6.07h-.92c-.28 0-.36-.15-.23-.46l2.79-5.87h-3.36a.53.53 0 0 1-.36-.1.49.49 0 0 1-.1-.35v-.76a.5.5 0 0 1 .1-.36.48.48 0 0 1 .36-.1h5.07a.53.53 0 0 1 .37.11Z"
    />
  </svg>
);
export default SvgUvIndex7;
