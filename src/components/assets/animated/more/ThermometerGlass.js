import * as React from "react";
const SvgThermometerGlass = ({ title, titleId, ...props }) => (
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
        id="thermometer-glass_svg__a"
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
        id="thermometer-glass_svg__b"
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
      fill="url(#thermometer-glass_svg__a)"
      stroke="url(#thermometer-glass_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M39 41.9a7 7 0 1 1-14 0 7.12 7.12 0 0 1 3-5.83v-17a4 4 0 1 1 8 0v17a7.12 7.12 0 0 1 3 5.83ZM32.5 25H36m-3.5-4H36m-3.5 8H36"
    />
  </svg>
);
export default SvgThermometerGlass;
