import * as React from "react";
const SvgWindBeaufort5 = ({ title, titleId, ...props }) => (
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
        id="wind-beaufort-5_svg__a"
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
        xlinkHref="#wind-beaufort-5_svg__a"
        id="wind-beaufort-5_svg__b"
        x1={19.96}
        x2={31.37}
        y1={29.03}
        y2={48.8}
      />
    </defs>
    <path
      fill="none"
      stroke="url(#wind-beaufort-5_svg__a)"
      strokeDasharray="35 22"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M43.64 20a5 5 0 1 1 3.61 8.46h-35.5"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="1.7s"
        repeatCount="indefinite"
        values="-57; 57"
      />
    </path>
    <path
      fill="none"
      stroke="url(#wind-beaufort-5_svg__b)"
      strokeDasharray="24 15"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M29.14 44a5 5 0 1 0 3.61-8.46h-21"
    >
      <animate
        attributeName="stroke-dashoffset"
        begin="-.425s"
        dur="1.7s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M52.37 34.82a.57.57 0 0 1 .11.39V36a.42.42 0 0 1-.51.51h-4.29l-.22 2.21h1.81a3.62 3.62 0 0 1 2.71.95 3.32 3.32 0 0 1 .94 2.33 3.42 3.42 0 0 1-1 2.52 3.69 3.69 0 0 1-2.75 1c-2.12 0-3.48-.81-4.07-2.45a.46.46 0 0 1 .32-.66l.83-.28a.54.54 0 0 1 .4 0 .62.62 0 0 1 .24.36 2.15 2.15 0 0 0 2.26 1.31 1.8 1.8 0 0 0 1.31-.47 1.71 1.71 0 0 0 .47-1.33 1.53 1.53 0 0 0-.48-1.19 1.82 1.82 0 0 0-1.28-.45H46a.55.55 0 0 1-.45-.14.6.6 0 0 1-.09-.46l.45-4.36a1 1 0 0 1 .22-.58 1 1 0 0 1 .61-.15H52a.55.55 0 0 1 .37.15Z"
    />
  </svg>
);
export default SvgWindBeaufort5;
