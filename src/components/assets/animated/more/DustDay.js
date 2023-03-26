import * as React from "react";
const SvgDustDay = ({ title, titleId, ...props }) => (
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
        id="dust-day_svg__c"
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
      <linearGradient
        id="dust-day_svg__a"
        x1={22.14}
        x2={27.53}
        y1={36}
        y2={45.32}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fde68a" />
        <stop offset={0.45} stopColor="#fde68a" />
        <stop offset={1} stopColor="#fde171" />
      </linearGradient>
      <linearGradient
        xlinkHref="#dust-day_svg__a"
        id="dust-day_svg__d"
        x1={34.27}
        x2={39.66}
        y1={28.99}
        y2={38.32}
      />
      <linearGradient
        xlinkHref="#dust-day_svg__a"
        id="dust-day_svg__e"
        x1={43.47}
        x2={48.86}
        y1={23.68}
        y2={33}
      />
      <linearGradient
        xlinkHref="#dust-day_svg__a"
        id="dust-day_svg__f"
        x1={32.14}
        x2={37.53}
        y1={36}
        y2={45.32}
      />
      <linearGradient
        xlinkHref="#dust-day_svg__a"
        id="dust-day_svg__g"
        x1={44.27}
        x2={49.66}
        y1={28.99}
        y2={38.32}
      />
      <linearGradient
        xlinkHref="#dust-day_svg__a"
        id="dust-day_svg__h"
        x1={53.47}
        x2={58.86}
        y1={23.68}
        y2={33}
      />
      <clipPath id="dust-day_svg__b">
        <path fill="none" d="M7.5 7.5h47l-47 47v-47z" />
      </clipPath>
    </defs>
    <g strokeMiterlimit={10} clipPath="url(#dust-day_svg__b)">
      <circle
        cx={32}
        cy={32}
        r={10.5}
        fill="url(#dust-day_svg__c)"
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
    <g>
      <path
        fill="none"
        stroke="url(#dust-day_svg__a)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m24.89 45.11 3.19-3.19"
      />
      <path
        fill="none"
        stroke="url(#dust-day_svg__d)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m33.03 36.97 7.42-7.42"
      />
      <path
        fill="none"
        stroke="url(#dust-day_svg__e)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m42.92 27.08 3.19-3.19"
      />
      <animateTransform
        attributeName="transform"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="-2 2; 0 0; -2 2"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="url(#dust-day_svg__f)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m34.89 45.11 3.19-3.19"
      />
      <path
        fill="none"
        stroke="url(#dust-day_svg__g)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m43.03 36.97 7.42-7.42"
      />
      <path
        fill="none"
        stroke="url(#dust-day_svg__h)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m52.92 27.08 3.19-3.19"
      />
      <animateTransform
        attributeName="transform"
        begin="-2.5s"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="-2 2; 0 0; -2 2"
      />
    </g>
  </svg>
);
export default SvgDustDay;
