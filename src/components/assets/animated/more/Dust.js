import * as React from "react";
const SvgDust = ({ title, titleId, ...props }) => (
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
        id="dust_svg__c"
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
        id="dust_svg__a"
        x1={22.14}
        x2={27.53}
        y1={36}
        y2={45.32}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fde68a" />
        <stop offset={0.45} stopColor="#fde68a" />
        <stop offset={1} stopColor="#fde171" />
      </linearGradient>
      <linearGradient
        xlinkHref="#dust_svg__a"
        id="dust_svg__d"
        x1={34.27}
        x2={39.66}
        y1={28.99}
        y2={38.32}
      />
      <linearGradient
        xlinkHref="#dust_svg__a"
        id="dust_svg__e"
        x1={43.47}
        x2={48.86}
        y1={23.68}
        y2={33}
      />
      <linearGradient
        xlinkHref="#dust_svg__a"
        id="dust_svg__f"
        x1={32.14}
        x2={37.53}
        y1={36}
        y2={45.32}
      />
      <linearGradient
        xlinkHref="#dust_svg__a"
        id="dust_svg__g"
        x1={44.27}
        x2={49.66}
        y1={28.99}
        y2={38.32}
      />
      <linearGradient
        xlinkHref="#dust_svg__a"
        id="dust_svg__h"
        x1={53.47}
        x2={58.86}
        y1={23.68}
        y2={33}
      />
      <clipPath id="dust_svg__b">
        <path fill="none" d="M7.5 7.5h47l-47 47v-47z" />
      </clipPath>
    </defs>
    <g clipPath="url(#dust_svg__b)">
      <path
        fill="url(#dust_svg__c)"
        stroke="#e6effc"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="url(#dust_svg__a)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m24.89 45.11 3.19-3.19"
      />
      <path
        fill="none"
        stroke="url(#dust_svg__d)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m33.03 36.97 7.42-7.42"
      />
      <path
        fill="none"
        stroke="url(#dust_svg__e)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m42.92 27.08 3.19-3.19"
      />
      <animateTransform
        attributeName="transform"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="-2 2; 0 0; -2 2"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="url(#dust_svg__f)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m34.89 45.11 3.19-3.19"
      />
      <path
        fill="none"
        stroke="url(#dust_svg__g)"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m43.03 36.97 7.42-7.42"
      />
      <path
        fill="none"
        stroke="url(#dust_svg__h)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m52.92 27.08 3.19-3.19"
      />
      <animateTransform
        attributeName="transform"
        begin="-2.5s"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="-2 2; 0 0; -2 2"
      />
    </g>
  </svg>
);
export default SvgDust;
