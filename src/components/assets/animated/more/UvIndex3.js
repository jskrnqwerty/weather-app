import * as React from "react";
const SvgUvIndex3 = ({ title, titleId, ...props }) => (
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
        id="uv-index-3_svg__a"
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
      fill="url(#uv-index-3_svg__a)"
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
      d="M45.94 43.82a1.86 1.86 0 0 1 1.06 1.8 2.17 2.17 0 0 1-.73 1.74 3.18 3.18 0 0 1-2.16.64A2.9 2.9 0 0 1 41 46.18a.39.39 0 0 1 .27-.56l.82-.29a.4.4 0 0 1 .35 0 .58.58 0 0 1 .22.3 1.18 1.18 0 0 0 .46.61 1.61 1.61 0 0 0 .89.19c.73 0 1.09-.28 1.09-.84s-.3-.85-.91-.85h-.86a.51.51 0 0 1-.35-.09.43.43 0 0 1-.1-.34v-.67a.49.49 0 0 1 .1-.35.51.51 0 0 1 .35-.09H44a1.15 1.15 0 0 0 .69-.2.68.68 0 0 0 .27-.59c0-.53-.32-.8-1-.8a1.48 1.48 0 0 0-.83.18 1.24 1.24 0 0 0-.42.62.55.55 0 0 1-.22.29.52.52 0 0 1-.35 0l-.82-.29a.38.38 0 0 1-.27-.56 2.64 2.64 0 0 1 1.06-1.37 3.66 3.66 0 0 1 2-.45 2.88 2.88 0 0 1 2 .6 2 2 0 0 1 .7 1.62 1.76 1.76 0 0 1-.87 1.57Z"
    />
  </svg>
);
export default SvgUvIndex3;
