import * as React from "react";
const SvgStar = ({ title, titleId, ...props }) => (
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
        id="star_svg__a"
        x1={23.22}
        x2={40.78}
        y1={16.8}
        y2={47.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fcd966" />
        <stop offset={0.45} stopColor="#fcd966" />
        <stop offset={1} stopColor="#fccd34" />
        <animateTransform
          attributeName="gradientTransform"
          dur="18s"
          repeatCount="indefinite"
          type="rotate"
          values="0 32 32; 360 32 32"
        />
      </linearGradient>
    </defs>
    <path
      fill="url(#star_svg__a)"
      stroke="#fcd34d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="m33 23 9.06-4.25a2.39 2.39 0 0 1 3.18 3.18L41 31a2.42 2.42 0 0 0 0 2l4.25 9.06a2.39 2.39 0 0 1-3.18 3.18L33 41a2.42 2.42 0 0 0-2 0l-9.06 4.25a2.39 2.39 0 0 1-3.18-3.18L23 33a2.42 2.42 0 0 0 0-2l-4.25-9.06a2.39 2.39 0 0 1 3.18-3.18L31 23a2.42 2.42 0 0 0 2 0Z"
    >
      <animate
        attributeName="opacity"
        dur="3s"
        repeatCount="indefinite"
        values="1; 0.4; 1"
      />
      <animateTransform
        attributeName="transform"
        dur="18s"
        repeatCount="indefinite"
        type="rotate"
        values="360 32 32; 0 32 32"
      />
    </path>
  </svg>
);
export default SvgStar;
