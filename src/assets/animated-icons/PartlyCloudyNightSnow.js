import * as React from "react";
const SvgPartlyCloudyNightSnow = ({ title, titleId, ...props }) => (
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
        id="partly-cloudy-night-snow_svg__a"
        x1={13.58}
        x2={24.15}
        y1={15.57}
        y2={33.87}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.45} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
        <animateTransform
          attributeName="gradientTransform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"
        />
      </linearGradient>
      <linearGradient
        id="partly-cloudy-night-snow_svg__b"
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
        xlinkHref="#partly-cloudy-night-snow_svg__a"
        id="partly-cloudy-night-snow_svg__c"
        x1={30.12}
        x2={31.88}
        y1={43.48}
        y2={46.52}
      />
      <linearGradient
        xlinkHref="#partly-cloudy-night-snow_svg__a"
        id="partly-cloudy-night-snow_svg__d"
        x1={29.67}
        x2={32.33}
        y1={42.69}
        y2={47.31}
      />
      <linearGradient
        xlinkHref="#partly-cloudy-night-snow_svg__a"
        id="partly-cloudy-night-snow_svg__e"
        x1={23.12}
        x2={24.88}
        y1={43.48}
        y2={46.52}
      />
      <linearGradient
        xlinkHref="#partly-cloudy-night-snow_svg__a"
        id="partly-cloudy-night-snow_svg__f"
        x1={22.67}
        x2={25.33}
        y1={42.69}
        y2={47.31}
      />
      <linearGradient
        xlinkHref="#partly-cloudy-night-snow_svg__a"
        id="partly-cloudy-night-snow_svg__g"
        x1={37.12}
        x2={38.88}
        y1={43.48}
        y2={46.52}
      />
      <linearGradient
        xlinkHref="#partly-cloudy-night-snow_svg__a"
        id="partly-cloudy-night-snow_svg__h"
        x1={36.67}
        x2={39.33}
        y1={42.69}
        y2={47.31}
      />
    </defs>
    <path
      fill="url(#partly-cloudy-night-snow_svg__a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M29.33 26.68a10.61 10.61 0 0 1-10.68-10.54A10.5 10.5 0 0 1 19 13.5a10.54 10.54 0 1 0 11.5 13.11 11.48 11.48 0 0 1-1.17.07Z"
    >
      <animateTransform
        attributeName="transform"
        dur="10s"
        repeatCount="indefinite"
        type="rotate"
        values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"
      />
    </path>
    <path
      fill="url(#partly-cloudy-night-snow_svg__b)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z"
    />
    <g>
      <circle
        cx={31}
        cy={45}
        r={1.25}
        fill="none"
        stroke="url(#partly-cloudy-night-snow_svg__c)"
        strokeMiterlimit={10}
      />
      <path
        fill="none"
        stroke="url(#partly-cloudy-night-snow_svg__d)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m33.17 46.25-1.09-.63m-2.16-1.24-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="-1 -6; 1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 31 45; 360 31 45"
      />
      <animate
        attributeName="opacity"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <circle
        cx={24}
        cy={45}
        r={1.25}
        fill="none"
        stroke="url(#partly-cloudy-night-snow_svg__e)"
        strokeMiterlimit={10}
      />
      <path
        fill="none"
        stroke="url(#partly-cloudy-night-snow_svg__f)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m26.17 46.25-1.09-.63m-2.16-1.24-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 24 45; 360 24 45"
      />
      <animate
        attributeName="opacity"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <circle
        cx={38}
        cy={45}
        r={1.25}
        fill="none"
        stroke="url(#partly-cloudy-night-snow_svg__g)"
        strokeMiterlimit={10}
      />
      <path
        fill="none"
        stroke="url(#partly-cloudy-night-snow_svg__h)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m40.17 46.25-1.09-.63m-2.16-1.24-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 38 45; 360 38 45"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
  </svg>
);
export default SvgPartlyCloudyNightSnow;
