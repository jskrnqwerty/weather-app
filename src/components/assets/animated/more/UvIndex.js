import * as React from "react";
const SvgUvIndex = ({ title, titleId, ...props }) => (
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
        id="uv-index_svg__b"
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
      <clipPath id="uv-index_svg__a">
        <path
          fill="none"
          d="M33.5 48.5v-9a6 6 0 0 1 6-6h17v-26h-49v49h28V53a6 6 0 0 1-2-4.5Z"
        />
      </clipPath>
    </defs>
    <g strokeMiterlimit={10} clipPath="url(#uv-index_svg__a)">
      <circle
        cx={32}
        cy={32}
        r={10.5}
        fill="url(#uv-index_svg__b)"
        stroke="#f8af18"
        strokeWidth={0.5}
      />
      <path
        fill="none"
        stroke="#fbbf24"
        strokeLinecap="round"
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
    </g>
    <path
      fill="#374151"
      d="M41.69 46.56A1.87 1.87 0 0 0 43 47c1.17 0 1.76-.52 1.76-1.56v-5.87a.66.66 0 0 1 .12-.45.64.64 0 0 1 .44-.12h1.12a.46.46 0 0 1 .57.57v5.77A3.5 3.5 0 0 1 46 48a4.17 4.17 0 0 1-3 1 4.14 4.14 0 0 1-3-1 3.5 3.5 0 0 1-1-2.68v-5.75a.46.46 0 0 1 .57-.57h1.12a.6.6 0 0 1 .43.12.66.66 0 0 1 .12.45v5.83a1.47 1.47 0 0 0 .45 1.16ZM57.44 39.56l-3.17 9a.72.72 0 0 1-.25.38.81.81 0 0 1-.45.1h-1.13a.89.89 0 0 1-.45-.09.63.63 0 0 1-.24-.36l-3.19-9c-.14-.37 0-.56.37-.56h1a1.6 1.6 0 0 1 .73.11.67.67 0 0 1 .3.41l1.63 5.25c.06.23.13.48.19.77s.1.5.13.67v.25h.11a9.3 9.3 0 0 1 .35-1.67l1.6-5.27a.61.61 0 0 1 .3-.41 1.51 1.51 0 0 1 .71-.11h1c.48-.03.6.16.46.53Z"
    />
  </svg>
);
export default SvgUvIndex;
