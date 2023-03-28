import * as React from "react";
const SvgDrizzle = ({ title, titleId, ...props }) => (
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
        id="drizzle_svg__b"
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
        id="drizzle_svg__a"
        x1={23.31}
        x2={24.69}
        y1={44.3}
        y2={46.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4286ee" />
        <stop offset={0.45} stopColor="#4286ee" />
        <stop offset={1} stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        xlinkHref="#drizzle_svg__a"
        id="drizzle_svg__c"
        x1={30.31}
        x2={31.69}
        y1={44.3}
        y2={46.7}
      />
      <linearGradient
        xlinkHref="#drizzle_svg__a"
        id="drizzle_svg__d"
        x1={37.31}
        x2={38.69}
        y1={44.3}
        y2={46.7}
      />
    </defs>
    <path
      fill="url(#drizzle_svg__b)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z"
    />
    <path
      fill="none"
      stroke="url(#drizzle_svg__c)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m24.08 45.01-.16.98"
    >
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#drizzle_svg__d)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m31.08 45.01-.16.98"
    >
      <animateTransform
        attributeName="transform"
        begin="-0.5s"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.5s"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#drizzle_svg__e)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m38.08 45.01-.16.98"
    >
      <animateTransform
        attributeName="transform"
        begin="-1s"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
  </svg>
);
export default SvgDrizzle;
