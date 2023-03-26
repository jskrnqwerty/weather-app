import * as React from "react";
const SvgPartlyCloudyNightSmoke = ({ title, titleId, ...props }) => (
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
        id="partly-cloudy-night-smoke_svg__b"
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
        id="partly-cloudy-night-smoke_svg__c"
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
        id="partly-cloudy-night-smoke_svg__a"
        x1={30.25}
        x2={33.25}
        y1={48.4}
        y2={53.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b8bdc6" />
        <stop offset={0.45} stopColor="#b8bdc6" />
        <stop offset={1} stopColor="#a5aab2" />
      </linearGradient>
      <linearGradient
        xlinkHref="#partly-cloudy-night-smoke_svg__a"
        id="partly-cloudy-night-smoke_svg__d"
        x1={23.5}
        x2={28}
        y1={38.1}
        y2={45.9}
      />
      <linearGradient
        xlinkHref="#partly-cloudy-night-smoke_svg__a"
        id="partly-cloudy-night-smoke_svg__e"
        x1={33.75}
        x2={39.75}
        y1={28.8}
        y2={39.2}
      />
    </defs>
    <path
      fill="url(#partly-cloudy-night-smoke_svg__b)"
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
      fill="url(#partly-cloudy-night-smoke_svg__c)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z"
    />
    <circle
      cx={31.75}
      cy={51}
      r={3}
      fill="url(#partly-cloudy-night-smoke_svg__a)"
      stroke="#afb4bc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    >
      <animateTransform
        attributeName="transform"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 -17;"
      />
      <animate
        attributeName="opacity"
        dur="3s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
      <animate
        attributeName="r"
        dur="3s"
        repeatCount="indefinite"
        values="3; 4.5; 6"
      />
    </circle>
    <circle
      cx={25.75}
      cy={51}
      r={4.5}
      fill="url(#partly-cloudy-night-smoke_svg__d)"
      stroke="#afb4bc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    >
      <animateTransform
        attributeName="transform"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 -17;"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
      <animate
        attributeName="r"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="3; 4.5; 6"
      />
      <animate
        attributeName="cx"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="31.75; 25.75"
      />
    </circle>
    <circle
      cx={36.75}
      cy={51}
      r={6}
      fill="url(#partly-cloudy-night-smoke_svg__e)"
      stroke="#afb4bc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    >
      <animateTransform
        attributeName="transform"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 -17;"
      />
      <animate
        attributeName="opacity"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
      <animate
        attributeName="r"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="3; 4.5; 6"
      />
      <animate
        attributeName="cx"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="31.75; 36.75"
      />
    </circle>
  </svg>
);
export default SvgPartlyCloudyNightSmoke;
