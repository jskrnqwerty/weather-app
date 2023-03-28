import * as React from "react";
const SvgWindBeaufort1 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="wind-beaufort-1_svg__a"
        x1={27.56}
        x2={38.27}
        y1={17.64}
        y2={36.19}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.45} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#wind-beaufort-1_svg__a"
        id="wind-beaufort-1_svg__b"
        x1={19.96}
        x2={31.37}
        y1={29.03}
        y2={48.8}
      />
    </defs>
    <path
      fill="none"
      stroke="url(#wind-beaufort-1_svg__a)"
      strokeDasharray="35 22"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M43.64 20a5 5 0 1 1 3.61 8.46h-35.5"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="2.1s"
        repeatCount="indefinite"
        values="-57; 57"
      />
    </path>
    <path
      fill="none"
      stroke="url(#wind-beaufort-1_svg__b)"
      strokeDasharray="24 15"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M29.14 44a5 5 0 1 0 3.61-8.46h-21"
    >
      <animate
        attributeName="stroke-dashoffset"
        begin="-.525s"
        dur="2.1s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M51 34.82a.52.52 0 0 1 .11.39v9.64a.51.51 0 0 1-.11.39.52.52 0 0 1-.4.12h-.85a.43.43 0 0 1-.51-.51V37l-2.1 1.17a.62.62 0 0 1-.46.12.57.57 0 0 1-.3-.31l-.38-.69a.58.58 0 0 1-.07-.4.67.67 0 0 1 .31-.29l2.93-1.68a1.34 1.34 0 0 1 .72-.21h.71a.52.52 0 0 1 .4.11Z"
    />
  </svg>
);
export default SvgWindBeaufort1;
