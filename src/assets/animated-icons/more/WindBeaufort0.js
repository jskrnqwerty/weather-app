import * as React from "react";
const SvgWindBeaufort0 = ({ title, titleId, ...props }) => (
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
        id="wind-beaufort-0_svg__a"
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
        xlinkHref="#wind-beaufort-0_svg__a"
        id="wind-beaufort-0_svg__b"
        x1={19.96}
        x2={31.37}
        y1={29.03}
        y2={48.8}
      />
    </defs>
    <path
      fill="none"
      stroke="url(#wind-beaufort-0_svg__a)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M43.64 20a5 5 0 1 1 3.61 8.46h-35.5"
    />
    <path
      fill="none"
      stroke="url(#wind-beaufort-0_svg__b)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M29.14 44a5 5 0 1 0 3.61-8.46h-21"
    />
    <path
      fill="#374151"
      d="M46.08 35.46a4.08 4.08 0 0 1 2.92-1 4.08 4.08 0 0 1 2.92 1 3.44 3.44 0 0 1 1 2.64V42a3.49 3.49 0 0 1-1 2.66 4.12 4.12 0 0 1-2.92 1 4.12 4.12 0 0 1-2.92-1A3.46 3.46 0 0 1 45 42v-3.9a3.41 3.41 0 0 1 1.08-2.64Zm4.46 1.26a2.66 2.66 0 0 0-3.08 0 1.78 1.78 0 0 0-.54 1.38V42a1.78 1.78 0 0 0 .54 1.38 2.67 2.67 0 0 0 3.08 0 1.78 1.78 0 0 0 .54-1.38v-3.9a1.78 1.78 0 0 0-.54-1.38Z"
    />
  </svg>
);
export default SvgWindBeaufort0;
