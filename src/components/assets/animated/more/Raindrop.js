import * as React from "react";
const SvgRaindrop = ({ title, titleId, ...props }) => (
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
        id="raindrop_svg__a"
        x1={23.61}
        x2={37.27}
        y1={21.85}
        y2={45.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3392d6" />
        <stop offset={0.45} stopColor="#3392d6" />
        <stop offset={1} stopColor="#2477b2" />
      </linearGradient>
    </defs>
    <path
      fill="url(#raindrop_svg__a)"
      stroke="#2885c7"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0 0 20 0C42 31.62 38.09 26 32 17Z"
    >
      <animateTransform
        attributeName="transform"
        calcMode="spline"
        dur="5s"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
        repeatCount="indefinite"
        type="scale"
        values="1 1; 1 .9; 1 1"
      />
    </path>
  </svg>
);
export default SvgRaindrop;
