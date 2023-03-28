import * as React from "react";
const SvgHurricane = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="hurricane_svg__a"
        x1={21.97}
        x2={42.03}
        y1={14.63}
        y2={49.37}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.45} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
        <animateTransform
          attributeName="gradientTransform"
          dur="1s"
          repeatCount="indefinite"
          type="rotate"
          values="0 32 32; 360 32 32"
        />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#hurricane_svg__a)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M43 32a11 11 0 1 1-11-11 11 11 0 0 1 11 11ZM25 14.61l-.48 1a33.68 33.68 0 0 0-3.42 17.82h0M39 49.39l.48-1a33.68 33.68 0 0 0 3.42-17.82h0"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        repeatCount="indefinite"
        type="rotate"
        values="360 32 32; 0 32 32"
      />
    </path>
  </svg>
);
export default SvgHurricane;
