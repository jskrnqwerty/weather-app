import * as React from "react";
const SvgPartlyCloudyDayHaze = ({ title, titleId, ...props }) => (
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
        id="partly-cloudy-day-haze_svg__b"
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
        id="partly-cloudy-day-haze_svg__c"
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
        id="partly-cloudy-day-haze_svg__a"
        x1={17.94}
        x2={26.94}
        y1={55.73}
        y2={71.32}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.45} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        xlinkHref="#partly-cloudy-day-haze_svg__a"
        id="partly-cloudy-day-haze_svg__d"
        x1={28.81}
        x2={37.81}
        y1={49.45}
        y2={65.04}
      />
      <linearGradient
        xlinkHref="#partly-cloudy-day-haze_svg__a"
        id="partly-cloudy-day-haze_svg__e"
        x1={37.06}
        x2={46.06}
        y1={44.68}
        y2={60.27}
      />
      <linearGradient
        xlinkHref="#partly-cloudy-day-haze_svg__a"
        id="partly-cloudy-day-haze_svg__f"
        x1={17.94}
        x2={26.94}
        y1={49.73}
        y2={65.32}
      />
      <linearGradient
        xlinkHref="#partly-cloudy-day-haze_svg__a"
        id="partly-cloudy-day-haze_svg__g"
        x1={28.81}
        x2={37.81}
        y1={43.45}
        y2={59.04}
      />
    </defs>
    <circle
      cx={19}
      cy={24}
      r={5}
      fill="url(#partly-cloudy-day-haze_svg__b)"
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
      fill="url(#partly-cloudy-day-haze_svg__c)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z"
    />
    <g>
      <path
        fill="none"
        stroke="url(#partly-cloudy-day-haze_svg__c)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M17 58h4.5"
      />
      <path
        fill="none"
        stroke="url(#partly-cloudy-day-haze_svg__a)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M28.5 58H39"
      />
      <path
        fill="none"
        stroke="url(#partly-cloudy-day-haze_svg__d)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M42.5 58H47"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="url(#partly-cloudy-day-haze_svg__e)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M17 52h4.5"
      />
      <path
        fill="none"
        stroke="url(#partly-cloudy-day-haze_svg__f)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M28.5 52H39"
      />
      <path
        fill="none"
        stroke="url(#partly-cloudy-day-haze_svg__g)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M42.5 52H47"
      />
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
  </svg>
);
export default SvgPartlyCloudyDayHaze;
