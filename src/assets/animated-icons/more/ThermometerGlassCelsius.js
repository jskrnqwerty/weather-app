import * as React from "react";
const SvgThermometerGlassCelsius = ({ title, titleId, ...props }) => (
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
        id="thermometer-glass-celsius_svg__a"
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
        id="thermometer-glass-celsius_svg__b"
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
    <path
      fill="url(#thermometer-glass-celsius_svg__a)"
      stroke="url(#thermometer-glass-celsius_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M39 41.9a7 7 0 1 1-14 0 7.12 7.12 0 0 1 3-5.83v-17a4 4 0 1 1 8 0v17a7.12 7.12 0 0 1 3 5.83ZM32.5 25H36m-3.5-4H36m-3.5 8H36"
    />
    <path
      fill="#374151"
      d="M42.44 35a2 2 0 1 1 .56-1.47 2 2 0 0 1-.56 1.47Zm-2-.79a.89.89 0 0 0 1.26 0 .88.88 0 0 0 0-1.25.83.83 0 0 0-.63-.27.86.86 0 0 0-.63.27.89.89 0 0 0-.26.63.85.85 0 0 0 .21.57ZM45 32.29a3.68 3.68 0 0 1 2.61-.85c1.75 0 2.87.68 3.35 2.06a.37.37 0 0 1-.26.54l-.67.23a.46.46 0 0 1-.34 0 .49.49 0 0 1-.19-.28 1.79 1.79 0 0 0-1.89-1.13 2.13 2.13 0 0 0-1.46.45 1.61 1.61 0 0 0-.52 1.3v2.73a1.62 1.62 0 0 0 .52 1.3 2.08 2.08 0 0 0 1.46.46 1.78 1.78 0 0 0 1.88-1.1.53.53 0 0 1 .21-.29.5.5 0 0 1 .33 0l.66.24a.38.38 0 0 1 .28.54c-.49 1.38-1.61 2.07-3.37 2.07a3.68 3.68 0 0 1-2.6-.85 3.09 3.09 0 0 1-.92-2.37v-2.7a3.07 3.07 0 0 1 .92-2.35Z"
    />
  </svg>
);
export default SvgThermometerGlassCelsius;
