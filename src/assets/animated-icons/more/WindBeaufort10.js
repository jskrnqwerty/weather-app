import * as React from "react";
const SvgWindBeaufort10 = ({ title, titleId, ...props }) => (
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
        id="wind-beaufort-10_svg__a"
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
        xlinkHref="#wind-beaufort-10_svg__a"
        id="wind-beaufort-10_svg__b"
        x1={19.96}
        x2={31.37}
        y1={29.03}
        y2={48.8}
      />
    </defs>
    <path
      fill="none"
      stroke="url(#wind-beaufort-10_svg__a)"
      strokeDasharray="35 22"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M43.64 20a5 5 0 1 1 3.61 8.46h-35.5"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="1.2s"
        repeatCount="indefinite"
        values="-57; 57"
      />
    </path>
    <path
      fill="none"
      stroke="url(#wind-beaufort-10_svg__b)"
      strokeDasharray="24 15"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M29.14 44a5 5 0 1 0 3.61-8.46h-21"
    >
      <animate
        attributeName="stroke-dashoffset"
        begin="-.3s"
        dur="1.2s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M46.28 34.82a.57.57 0 0 1 .11.39v9.64a.43.43 0 0 1-.51.51H45a.52.52 0 0 1-.4-.12.51.51 0 0 1-.11-.39V37l-2.1 1.17a.65.65 0 0 1-.47.12.6.6 0 0 1-.3-.31l-.37-.67a.53.53 0 0 1-.07-.4c0-.1.14-.19.31-.29l2.92-1.68a1.37 1.37 0 0 1 .72-.21h.72a.55.55 0 0 1 .43.09ZM49.38 35.46a4.84 4.84 0 0 1 5.84 0 3.44 3.44 0 0 1 1 2.64V42a3.49 3.49 0 0 1-1 2.66 4.88 4.88 0 0 1-5.84 0A3.42 3.42 0 0 1 48.33 42v-3.9a3.38 3.38 0 0 1 1.05-2.64Zm4.46 1.26a2.66 2.66 0 0 0-3.08 0 1.78 1.78 0 0 0-.55 1.38V42a1.78 1.78 0 0 0 .55 1.38 2.67 2.67 0 0 0 3.08 0 1.78 1.78 0 0 0 .54-1.38v-3.9a1.78 1.78 0 0 0-.54-1.38Z"
    />
  </svg>
);
export default SvgWindBeaufort10;
