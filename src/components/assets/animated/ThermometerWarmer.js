import * as React from "react";
const SvgThermometerWarmer = ({ title, titleId, ...props }) => (
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
        id="thermometer-warmer_svg__a"
        x1={23.73}
        x2={39.18}
        y1={19.16}
        y2={45.93}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#515a69" stopOpacity={0.05} />
        <stop offset={0.45} stopColor="#6b7280" stopOpacity={0.05} />
        <stop offset={1} stopColor="#384354" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="thermometer-warmer_svg__b"
        x1={23.48}
        x2={39.43}
        y1={18.73}
        y2={46.36}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.45} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
    </defs>
    <circle cx={32} cy={42} r={4.5} fill="#ef4444" />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M32 19v23"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 1; 0 0"
      />
    </path>
    <path
      fill="url(#thermometer-warmer_svg__a)"
      stroke="url(#thermometer-warmer_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M32.5 29H36m3 12.9a7 7 0 1 1-14 0 7.12 7.12 0 0 1 3-5.83v-17a4 4 0 1 1 8 0v17a7.12 7.12 0 0 1 3 5.83ZM32.5 25H36m-3.5-4H36"
    />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M44 38V26l-3 3.45L44 26l3 3.45"
    >
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="1.5s"
        keyTimes="0.0; 0.5; 0.9; 1.0"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 0; 0 -6; 0 -6"
      />
      <animate
        attributeName="opacity"
        dur="1.5s"
        keyTimes="0.0; 0.3; 0.8; 0.9; 1.0"
        repeatCount="indefinite"
        values="0; 1; 1; 0; 0"
      />
    </path>
  </svg>
);
export default SvgThermometerWarmer;
