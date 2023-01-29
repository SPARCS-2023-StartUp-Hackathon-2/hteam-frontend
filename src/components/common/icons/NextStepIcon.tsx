import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

const NextStepIcon = (props: Props) => {
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="34"
        cy="34"
        r="33.5"
        transform="rotate(-180 34 34)"
        fill="white"
        stroke="#D7DBDC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.17 35L31 35L23 35L22 35L22 33L23 33L31 33L43.17 33L37.59 27.41L39 26L47 34L39 42L37.58 40.59L43.17 35Z"
        fill="#5C676A"
      />
    </svg>
  );
};

export default NextStepIcon;
