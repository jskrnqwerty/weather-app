import * as React from "react";
const SvgSnowflake = ({ title, titleId, ...props }) => (
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
        id="snowflake_svg__a"
        x1={26.75}
        x2={37.25}
        y1={22.91}
        y2={41.09}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.45} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <linearGradient
        xlinkHref="#snowflake_svg__a"
        id="snowflake_svg__b"
        x1={24}
        x2={40}
        y1={18.15}
        y2={45.85}
      />
    </defs>
    <g>
      <circle
        cx={32}
        cy={32}
        r={7.5}
        fill="none"
        stroke="url(#snowflake_svg__a)"
        strokeMiterlimit={10}
        strokeWidth={6}
      />
      <path
        fill="none"
        stroke="url(#snowflake_svg__b)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={6}
        d="m45 39.5-6.5-3.75m-13-7.5L19 24.5M32 17v7.5M32 47v-7.5m-6.5-3.75L19 39.5m26-15-6.5 3.75"
      />
      <animateTransform
        attributeName="transform"
        dur="18s"
        repeatCount="indefinite"
        type="rotate"
        values="0 32 32; 360 32 32"
      />
    </g>
  </svg>
);
export default SvgSnowflake;
