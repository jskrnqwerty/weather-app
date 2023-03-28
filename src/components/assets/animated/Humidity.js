import * as React from "react";
const SvgHumidity = ({ title, titleId, ...props }) => (
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
        id="humidity_svg__a"
        x1={23.61}
        x2={37.27}
        y1={21.85}
        y2={45.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.45} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
    </defs>
    <path
      fill="url(#humidity_svg__a)"
      stroke="#2885c7"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0 0 20 0C42 31.62 38.09 26 32 17Z"
    />
    <path
      fill="#fff"
      d="M26.24 30.19a3 3 0 0 1 2.12-.69 3 3 0 0 1 2.12.69 2.51 2.51 0 0 1 .74 1.92v1.24a2.48 2.48 0 0 1-.74 1.9 3.05 3.05 0 0 1-2.12.68 3 3 0 0 1-2.12-.68 2.48 2.48 0 0 1-.74-1.9v-1.24a2.51 2.51 0 0 1 .74-1.92Zm11-.23a.42.42 0 0 1-.08.4L29 41.69a1.37 1.37 0 0 1-.44.44 1.87 1.87 0 0 1-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 0 1 .41-.41 2 2 0 0 1 .67-.08h.76q.27 0 .34.22Zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07Zm5.16 5.63a3 3 0 0 1 2.12-.69 3 3 0 0 1 2.12.69 2.51 2.51 0 0 1 .74 1.92v1.24a2.48 2.48 0 0 1-.74 1.9 3 3 0 0 1-2.12.68 3.05 3.05 0 0 1-2.12-.68 2.48 2.48 0 0 1-.74-1.9v-1.24a2.51 2.51 0 0 1 .76-1.92Zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07Z"
    />
  </svg>
);
export default SvgHumidity;
