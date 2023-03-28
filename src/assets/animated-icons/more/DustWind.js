import * as React from "react";
const SvgDustWind = ({ title, titleId, ...props }) => (
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
        id="dust-wind_svg__a"
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
        xlinkHref="#dust-wind_svg__a"
        id="dust-wind_svg__c"
        x1={19.96}
        x2={31.37}
        y1={29.03}
        y2={48.8}
      />
      <linearGradient
        id="dust-wind_svg__b"
        x1={24.13}
        x2={27.87}
        y1={36.25}
        y2={42.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fde68a" />
        <stop offset={0.45} stopColor="#fde68a" />
        <stop offset={1} stopColor="#fde171" />
      </linearGradient>
      <linearGradient
        xlinkHref="#dust-wind_svg__b"
        id="dust-wind_svg__d"
        x1={14.13}
        x2={17.87}
        y1={21.25}
        y2={27.75}
      />
      <linearGradient
        xlinkHref="#dust-wind_svg__b"
        id="dust-wind_svg__e"
        x1={30.13}
        x2={33.87}
        y1={28.75}
        y2={35.25}
      />
    </defs>
    <path
      fill="none"
      stroke="url(#dust-wind_svg__a)"
      strokeDasharray="35 22"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M43.64 20a5 5 0 1 1 3.61 8.46h-35.5"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="2s"
        repeatCount="indefinite"
        values="-57; 57"
      />
    </path>
    <path
      fill="none"
      stroke="url(#dust-wind_svg__c)"
      strokeDasharray="24 15"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M29.14 44a5 5 0 1 0 3.61-8.46h-21"
    >
      <animate
        attributeName="stroke-dashoffset"
        begin="-1.5s"
        dur="2s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <g>
      <path
        fill="none"
        stroke="url(#dust-wind_svg__b)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M21.5 39.5h9"
      />
      <animateTransform
        attributeName="transform"
        dur=".9s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 15 0"
      />
      <animate
        attributeName="opacity"
        dur=".9s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="url(#dust-wind_svg__d)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M11.5 24.5h9"
      />
      <animateTransform
        attributeName="transform"
        begin="-.3s"
        dur=".9s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 18 0"
      />
      <animate
        attributeName="opacity"
        begin="-.3s"
        dur=".9s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="url(#dust-wind_svg__e)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M27.5 32h9"
      />
      <animateTransform
        attributeName="transform"
        begin="-.6s"
        dur=".9s"
        repeatCount="indefinite"
        type="translate"
        values="-6 0; 12 0"
      />
      <animate
        attributeName="opacity"
        begin="-.6s"
        dur=".9s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
    </g>
  </svg>
);
export default SvgDustWind;
