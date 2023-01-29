import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

const PreviousStepIcon = (props: Props) => {
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="34" cy="34" r="33.5" fill="white" stroke="#D7DBDC" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.83 33H37H45H46V35H45H37H24.83L30.41 40.59L29 42L21 34L29 26L30.42 27.41L24.83 33Z"
        fill="#5C676A"
      />
    </svg>
  );
};

export default PreviousStepIcon;
