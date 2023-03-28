import * as React from "react";
const SvgFallingStars = ({ title, titleId, ...props }) => (
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
        id="falling-stars_svg__a"
        x1={36.88}
        x2={41.12}
        y1={15.33}
        y2={22.67}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fcd966" />
        <stop offset={0.45} stopColor="#fcd966" />
        <stop offset={1} stopColor="#fccd34" />
      </linearGradient>
      <linearGradient
        xlinkHref="#falling-stars_svg__a"
        id="falling-stars_svg__b"
        x1={43.79}
        x2={48.21}
        y1={25.17}
        y2={32.83}
      />
      <linearGradient
        xlinkHref="#falling-stars_svg__a"
        id="falling-stars_svg__d"
        x1={43.11}
        x2={46.89}
        y1={18.73}
        y2={25.27}
      />
      <linearGradient
        id="falling-stars_svg__e"
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
      <clipPath id="falling-stars_svg__c">
        <path fill="none" d="M64 2.79 30 23l2 6 5 4 27-12V2.79z" />
      </clipPath>
    </defs>
    <path
      fill="url(#falling-stars_svg__a)"
      stroke="#fcd34d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="m35.44 16.87 1.3 2.13a.55.55 0 0 1 .06.5l-.8 2.36a.59.59 0 0 0 .87.7l2.13-1.3a.55.55 0 0 1 .5-.06l2.36.8a.59.59 0 0 0 .7-.87L41.26 19a.55.55 0 0 1-.06-.5l.8-2.36a.59.59 0 0 0-.87-.7L39 16.74a.55.55 0 0 1-.5.06l-2.36-.8a.59.59 0 0 0-.7.87Z"
    >
      <animate
        attributeName="opacity"
        dur="3s"
        repeatCount="indefinite"
        values=".8; 0; .8"
      />
    </path>
    <path
      fill="url(#falling-stars_svg__b)"
      stroke="#fcd34d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="m42.27 30.82 2.49.07a.62.62 0 0 1 .46.22l1.53 2a.6.6 0 0 0 1.07-.35l.07-2.49a.62.62 0 0 1 .22-.46l2-1.53a.6.6 0 0 0-.35-1.07l-2.49-.07a.62.62 0 0 1-.46-.22l-1.53-2a.6.6 0 0 0-1.07.35l-.07 2.49a.62.62 0 0 1-.22.46l-2 1.53a.6.6 0 0 0 .35 1.07Z"
    >
      <animate
        attributeName="opacity"
        begin="-1.5s"
        dur="3s"
        repeatCount="indefinite"
        values=".8; 0; .8"
      />
    </path>
    <g clipPath="url(#falling-stars_svg__c)">
      <path
        fill="url(#falling-stars_svg__d)"
        stroke="#fcd34d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="m41 20.81 1.78 1.74A.6.6 0 0 1 43 23l-.2 2.49a.6.6 0 0 0 1 .46l1.74-1.78A.6.6 0 0 1 46 24l2.49.2a.6.6 0 0 0 .46-1l-1.78-1.74A.6.6 0 0 1 47 21l.2-2.49a.6.6 0 0 0-1-.46l-1.74 1.78A.6.6 0 0 1 44 20l-2.49-.2a.6.6 0 0 0-.51 1.01Z"
      />
      <path
        fill="none"
        stroke="#fcd34d"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m41.5 23.5-1.34.67"
      />
      <path
        fill="none"
        stroke="#fcd34d"
        strokeDasharray="2.53 2.53"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m37.9 25.3-7.93 3.96"
      />
      <path
        fill="none"
        stroke="#fcd34d"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m28.84 29.83-1.34.67"
      />
      <animateTransform
        attributeName="transform"
        dur="2s"
        repeatCount="indefinite"
        type="translate"
        values="-15 9; 15 -7; 15 -7"
      />
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1; 1; 0; 0; 0"
      />
    </g>
    <path
      fill="url(#falling-stars_svg__e)"
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
  </svg>
);
export default SvgFallingStars;
