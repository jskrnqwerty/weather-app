import * as React from "react";
const SvgSmokeParticles = ({ title, titleId, ...props }) => (
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
        id="smoke-particles_svg__a"
        x1={30.25}
        x2={33.25}
        y1={39.4}
        y2={44.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b8bdc6" />
        <stop offset={0.45} stopColor="#b8bdc6" />
        <stop offset={1} stopColor="#a5aab2" />
      </linearGradient>
      <linearGradient
        xlinkHref="#smoke-particles_svg__a"
        id="smoke-particles_svg__b"
        x1={23.5}
        x2={28}
        y1={29.1}
        y2={36.9}
      />
      <linearGradient
        xlinkHref="#smoke-particles_svg__a"
        id="smoke-particles_svg__c"
        x1={33.75}
        x2={39.75}
        y1={19.8}
        y2={30.2}
      />
    </defs>
    <circle
      cx={31.75}
      cy={42}
      r={3}
      fill="url(#smoke-particles_svg__a)"
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
      cy={42}
      r={4.5}
      fill="url(#smoke-particles_svg__b)"
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
      cy={42}
      r={6}
      fill="url(#smoke-particles_svg__c)"
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
export default SvgSmokeParticles;
