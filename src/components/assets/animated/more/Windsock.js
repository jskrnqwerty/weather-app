import * as React from "react";
const SvgWindsock = ({ title, titleId, ...props }) => (
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
        id="windsock_svg__b"
        x1={11.25}
        x2={25.75}
        y1={19.45}
        y2={44.55}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.45} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="windsock_svg__a"
        x1={22.43}
        x2={28.34}
        y1={17.8}
        y2={28.04}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f87171" />
        <stop offset={0.45} stopColor="#f87171" />
        <stop offset={1} stopColor="#dc2626" />
      </linearGradient>
      <linearGradient
        xlinkHref="#windsock_svg__a"
        id="windsock_svg__c"
        x1={31.57}
        x2={36.49}
        y1={18.65}
        y2={27.19}
      />
      <linearGradient
        xlinkHref="#windsock_svg__a"
        id="windsock_svg__d"
        x1={40.71}
        x2={44.65}
        y1={19.5}
        y2={26.34}
      />
    </defs>
    <path
      fill="none"
      stroke="url(#windsock_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M18.5 47V17"
    />
    <g>
      <path
        fill="url(#windsock_svg__a)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="m23.93 17.13 3.59.53a.79.79 0 0 1 .68.79v9.21a.8.8 0 0 1-.68.79l-3.59.55a.8.8 0 0 1-.92-.79V17.92a.81.81 0 0 1 .92-.79Z"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="-0.1 1; 0 0; -0.1 -1; 0 0; -0.1 1"
      />
    </g>
    <g>
      <path
        fill="url(#windsock_svg__c)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="m32.58 18.27 3.59.52a.8.8 0 0 1 .68.79v6.94a.8.8 0 0 1-.68.79l-3.59.53a.8.8 0 0 1-.92-.79v-8a.8.8 0 0 1 .92-.78Z"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.1s"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="-0.1 1; 0 0; -0.1 -1; 0 0; -0.1 1"
      />
    </g>
    <g>
      <path
        fill="url(#windsock_svg__d)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="m41.22 19.4 3.6.53a.79.79 0 0 1 .68.79v4.67a.8.8 0 0 1-.68.79l-3.6.52a.79.79 0 0 1-.91-.79v-5.72a.8.8 0 0 1 .91-.79Z"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="-0.1 1; 0 0; -0.1 -1; 0 0; -0.1 1"
      />
    </g>
  </svg>
);
export default SvgWindsock;
