import * as React from "react";
const SvgOvercastDay = ({ title, titleId, ...props }) => (
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
        id="overcast-day_svg__a"
        x1={16.5}
        x2={21.5}
        y1={19.67}
        y2={28.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset={0.45} stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient
        id="overcast-day_svg__b"
        x1={40.76}
        x2={50.83}
        y1={23}
        y2={40.46}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#9ca3af" />
        <stop offset={0.45} stopColor="#9ca3af" />
        <stop offset={1} stopColor="#6b7280" />
      </linearGradient>
      <linearGradient
        id="overcast-day_svg__c"
        x1={22.56}
        x2={39.2}
        y1={21.96}
        y2={50.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.45} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
    </defs>
    <circle
      cx={19}
      cy={24}
      r={5}
      fill="url(#overcast-day_svg__a)"
      stroke="#f8af18"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      fill="none"
      stroke="#fbbf24"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M19 15.67V12.5m0 23v-3.17m5.89-14.22 2.24-2.24M10.87 32.13l2.24-2.24m0-11.78-2.24-2.24m16.26 16.26-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
    >
      <animateTransform
        attributeName="transform"
        dur="45s"
        repeatCount="indefinite"
        type="rotate"
        values="0 19 24; 360 19 24"
      />
    </path>
    <path
      fill="url(#overcast-day_svg__b)"
      stroke="#848b98"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M34.23 33.45a4.05 4.05 0 0 0 4.05 4h16.51a4.34 4.34 0 0 0 .81-8.61 3.52 3.52 0 0 0 .06-.66 4.06 4.06 0 0 0-6.13-3.48 6.08 6.08 0 0 0-11.25 3.19 6.34 6.34 0 0 0 .18 1.46h-.18a4.05 4.05 0 0 0-4.05 4.1Z"
    >
      <animateTransform
        attributeName="transform"
        dur="7s"
        repeatCount="indefinite"
        type="translate"
        values="-2.1 0; 2.1 0; -2.1 0"
      />
    </path>
    <path
      fill="url(#overcast-day_svg__c)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z"
    >
      <animateTransform
        attributeName="transform"
        dur="7s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </path>
  </svg>
);
export default SvgOvercastDay;
