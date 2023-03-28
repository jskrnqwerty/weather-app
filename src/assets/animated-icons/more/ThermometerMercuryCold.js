import * as React from "react";
const SvgThermometerMercuryCold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={32} cy={42} r={4.5} fill="#2885c7" />
    <path
      fill="none"
      stroke="#2885c7"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M32 27v15"
    />
  </svg>
);
export default SvgThermometerMercuryCold;
