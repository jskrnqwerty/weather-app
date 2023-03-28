import * as React from "react";
const SvgFogDay = ({ title, titleId, ...props }) => (
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
        id="fog-day_svg__c"
        x1={26.75}
        x2={37.25}
        y1={29.91}
        y2={48.09}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.45} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient
        id="fog-day_svg__a"
        x1={15.5}
        x2={48.5}
        y1={44}
        y2={44}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.45} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#fog-day_svg__a"
        id="fog-day_svg__d"
        y1={51}
        y2={51}
      />
      <clipPath id="fog-day_svg__b">
        <path fill="none" d="M0 7.5h64v32H0z" />
      </clipPath>
    </defs>
    <g strokeMiterlimit={10} clipPath="url(#fog-day_svg__b)">
      <circle
        cx={32}
        cy={39}
        r={10.5}
        fill="url(#fog-day_svg__c)"
        stroke="#f8af18"
        strokeWidth={0.5}
      />
      <path
        fill="none"
        stroke="#fbbf24"
        strokeLinecap="round"
        strokeWidth={3}
        d="M32 22.71V16.5m0 45v-6.21m11.52-27.81 4.39-4.39M16.09 54.91l4.39-4.39m0-23-4.39-4.39m31.82 31.78-4.39-4.39M15.71 39H9.5m45 0h-6.21"
      >
        <animateTransform
          attributeName="transform"
          dur="45s"
          repeatCount="indefinite"
          type="rotate"
          values="0 32 39; 360 32 39"
        />
      </path>
    </g>
    <path
      fill="none"
      stroke="url(#fog-day_svg__a)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M17 44h30"
    >
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#fog-day_svg__d)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M17 51h30"
    >
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </path>
  </svg>
);
export default SvgFogDay;
