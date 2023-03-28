import * as React from "react";
const SvgThermometerFahrenheit = ({ title, titleId, ...props }) => (
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
        id="thermometer-fahrenheit_svg__a"
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
        id="thermometer-fahrenheit_svg__b"
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
      d="M32 27v15"
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
      fill="url(#thermometer-fahrenheit_svg__a)"
      stroke="url(#thermometer-fahrenheit_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M39 41.9a7 7 0 1 1-14 0 7.12 7.12 0 0 1 3-5.83v-17a4 4 0 1 1 8 0v17a7.12 7.12 0 0 1 3 5.83ZM32.5 25H36m-3.5-4H36m-3.5 8H36"
    />
    <path
      fill="#374151"
      d="M42.72 34.92a2.18 2.18 0 1 1-1.53-3.72 2.17 2.17 0 0 1 1.53 3.72Zm-2.21-.86a.91.91 0 0 0 .68.28.93.93 0 0 0 .68-.28.89.89 0 0 0 .28-.67.93.93 0 0 0-.28-.68.87.87 0 0 0-.68-.29.89.89 0 0 0-.68.29.93.93 0 0 0-.28.68.89.89 0 0 0 .28.67ZM50.89 31.41a.47.47 0 0 1 .11.35v.66a.46.46 0 0 1-.11.35.5.5 0 0 1-.36.1h-4.09v2.46h3.44a.55.55 0 0 1 .36.1.5.5 0 0 1 .11.36v.65a.5.5 0 0 1-.11.36.51.51 0 0 1-.36.1h-3.44v3.44a.38.38 0 0 1-.45.46h-.76a.55.55 0 0 1-.36-.1.46.46 0 0 1-.11-.36v-8.58a.43.43 0 0 1 .11-.35.5.5 0 0 1 .36-.1h5.3a.5.5 0 0 1 .36.1Z"
    />
  </svg>
);
export default SvgThermometerFahrenheit;
