import * as React from "react";
const SvgHazeNight = ({ title, titleId, ...props }) => (
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
        id="haze-night_svg__c"
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
        id="haze-night_svg__a"
        x1={17.94}
        x2={26.94}
        y1={41.73}
        y2={57.32}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.45} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__d"
        x1={28.81}
        x2={37.81}
        y1={35.45}
        y2={51.04}
      />
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__e"
        x1={37.06}
        x2={46.06}
        y1={30.68}
        y2={46.27}
      />
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__f"
        x1={17.94}
        x2={26.94}
        y1={48.73}
        y2={64.32}
      />
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__g"
        x1={28.81}
        x2={37.81}
        y1={42.45}
        y2={58.04}
      />
      <linearGradient
        xlinkHref="#haze-night_svg__a"
        id="haze-night_svg__h"
        x1={37.06}
        x2={46.06}
        y1={37.68}
        y2={53.27}
      />
      <clipPath id="haze-night_svg__b">
        <path fill="none" d="M0 7.5h64v32H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#haze-night_svg__b)">
      <path
        fill="url(#haze-night_svg__c)"
        stroke="#72b9d5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M46.66 36.2a16.66 16.66 0 0 1-16.78-16.55 16.29 16.29 0 0 1 .55-4.15A16.56 16.56 0 1 0 48.5 36.1c-.61.06-1.22.1-1.84.1Z"
      >
        <animateTransform
          attributeName="transform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="-5 32 32; 15 32 32; -5 32 32"
        />
      </path>
    </g>
    <g>
      <path
        fill="none"
        stroke="url(#haze-night_svg__a)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M17 44h4.5"
      />
      <path
        fill="none"
        stroke="url(#haze-night_svg__d)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M28.5 44H39"
      />
      <path
        fill="none"
        stroke="url(#haze-night_svg__e)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M42.5 44H47"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="url(#haze-night_svg__f)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M17 51h4.5"
      />
      <path
        fill="none"
        stroke="url(#haze-night_svg__g)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M28.5 51H39"
      />
      <path
        fill="none"
        stroke="url(#haze-night_svg__h)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M42.5 51H47"
      />
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
  </svg>
);
export default SvgHazeNight;
