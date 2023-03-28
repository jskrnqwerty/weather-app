import * as React from "react";
const SvgWindBeaufort4 = ({ title, titleId, ...props }) => (
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
        id="wind-beaufort-4_svg__a"
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
        xlinkHref="#wind-beaufort-4_svg__a"
        id="wind-beaufort-4_svg__b"
        x1={19.96}
        x2={31.37}
        y1={29.03}
        y2={48.8}
      />
    </defs>
    <path
      fill="none"
      stroke="url(#wind-beaufort-4_svg__a)"
      strokeDasharray="35 22"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M43.64 20a5 5 0 1 1 3.61 8.46h-35.5"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="1.8s"
        repeatCount="indefinite"
        values="-57; 57"
      />
    </path>
    <path
      fill="none"
      stroke="url(#wind-beaufort-4_svg__b)"
      strokeDasharray="24 15"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M29.14 44a5 5 0 1 0 3.61-8.46h-21"
    >
      <animate
        attributeName="stroke-dashoffset"
        begin="-.45s"
        dur="1.8s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M53.25 41.33a.57.57 0 0 1 .11.39v.65a.6.6 0 0 1-.11.4.56.56 0 0 1-.4.11h-1v2a.43.43 0 0 1-.51.51h-.73a.55.55 0 0 1-.4-.12.51.51 0 0 1-.11-.39v-2h-5a.6.6 0 0 1-.4-.11.55.55 0 0 1-.11-.4v-.54a1 1 0 0 1 .18-.62l5-6.17a.88.88 0 0 1 .72-.36h.82a.6.6 0 0 1 .4.1.59.59 0 0 1 .11.41v6h1a.55.55 0 0 1 .43.14Zm-6.45-.12h3.26v-4Z"
    />
  </svg>
);
export default SvgWindBeaufort4;
