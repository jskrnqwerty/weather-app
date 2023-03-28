import * as React from "react";
const SvgThunderstormsDayRain = ({ title, titleId, ...props }) => (
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
        id="thunderstorms-day-rain_svg__b"
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
        id="thunderstorms-day-rain_svg__c"
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
      <linearGradient
        id="thunderstorms-day-rain_svg__a"
        x1={22.53}
        x2={25.47}
        y1={42.95}
        y2={48.05}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4286ee" />
        <stop offset={0.45} stopColor="#4286ee" />
        <stop offset={1} stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        xlinkHref="#thunderstorms-day-rain_svg__a"
        id="thunderstorms-day-rain_svg__d"
        x1={29.53}
        x2={32.47}
        y1={42.95}
        y2={48.05}
      />
      <linearGradient
        xlinkHref="#thunderstorms-day-rain_svg__a"
        id="thunderstorms-day-rain_svg__e"
        x1={36.53}
        x2={39.47}
        y1={42.95}
        y2={48.05}
      />
      <linearGradient
        id="thunderstorms-day-rain_svg__f"
        x1={26.74}
        x2={35.76}
        y1={37.88}
        y2={53.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f7b23b" />
        <stop offset={0.45} stopColor="#f7b23b" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <circle
      cx={19}
      cy={24}
      r={5}
      fill="url(#thunderstorms-day-rain_svg__b)"
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
      fill="url(#thunderstorms-day-rain_svg__c)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z"
    />
    <path
      fill="none"
      stroke="url(#thunderstorms-day-rain_svg__a)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m24.39 43.03-.78 4.94"
    >
      <animateTransform
        attributeName="transform"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#thunderstorms-day-rain_svg__d)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m31.39 43.03-.78 4.94"
    >
      <animateTransform
        attributeName="transform"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#thunderstorms-day-rain_svg__e)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m38.39 43.03-.78 4.94"
    >
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="url(#thunderstorms-day-rain_svg__f)"
      stroke="#f6a823"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="m30 36-4 12h4l-2 10 10-14h-6l4-8h-6z"
    >
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"
      />
    </path>
  </svg>
);
export default SvgThunderstormsDayRain;
