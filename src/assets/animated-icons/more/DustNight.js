import * as React from "react";
const SvgDustNight = ({ title, titleId, ...props }) => (
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
        id="dust-night_svg__c"
        x1={21.92}
        x2={38.52}
        y1={18.75}
        y2={47.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.45} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
        <animateTransform
          attributeName="gradientTransform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="5 32 32; -15 32 32; 5 32 32"
        />
      </linearGradient>
      <linearGradient
        id="dust-night_svg__a"
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
        xlinkHref="#dust-night_svg__a"
        id="dust-night_svg__d"
        x1={34.27}
        x2={39.66}
        y1={28.99}
        y2={38.32}
      />
      <linearGradient
        xlinkHref="#dust-night_svg__a"
        id="dust-night_svg__e"
        x1={43.47}
        x2={48.86}
        y1={23.68}
        y2={33}
      />
      <linearGradient
        xlinkHref="#dust-night_svg__a"
        id="dust-night_svg__f"
        x1={32.14}
        x2={37.53}
        y1={36}
        y2={45.32}
      />
      <linearGradient
        xlinkHref="#dust-night_svg__a"
        id="dust-night_svg__g"
        x1={44.27}
        x2={49.66}
        y1={28.99}
        y2={38.32}
      />
      <linearGradient
        xlinkHref="#dust-night_svg__a"
        id="dust-night_svg__h"
        x1={53.47}
        x2={58.86}
        y1={23.68}
        y2={33}
      />
      <clipPath id="dust-night_svg__b">
        <path fill="none" d="M7.5 7.5h47l-47 47v-47z" />
      </clipPath>
    </defs>
    <g clipPath="url(#dust-night_svg__b)">
      <path
        fill="url(#dust-night_svg__c)"
        stroke="#72b9d5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M46.66 36.2a16.66 16.66 0 0 1-16.78-16.55 16.29 16.29 0 0 1 .55-4.15A16.56 16.56 0 1 0 48.5 36.1c-.61.06-1.22.1-1.84.1Z"
      />
      <animateTransform
        attributeName="transform"
        dur="10s"
        repeatCount="indefinite"
        type="rotate"
        values="-5 32 32;15 32 32;-5 32 32"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="url(#dust-night_svg__a)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m24.89 45.11 3.19-3.19"
      />
      <path
        fill="none"
        stroke="url(#dust-night_svg__d)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m33.03 36.97 7.42-7.42"
      />
      <path
        fill="none"
        stroke="url(#dust-night_svg__e)"
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
        stroke="url(#dust-night_svg__f)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m34.89 45.11 3.19-3.19"
      />
      <path
        fill="none"
        stroke="url(#dust-night_svg__g)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m43.03 36.97 7.42-7.42"
      />
      <path
        fill="none"
        stroke="url(#dust-night_svg__h)"
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
export default SvgDustNight;
