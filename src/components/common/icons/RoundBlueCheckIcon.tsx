import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

const RoundBlueCheckIcon = (props: Props) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="28" cy="28" r="28" fill="#D9E8FF" />
      <path
        d="M23.9545 34.0568L17.9886 28.0909L16 30.0795L23.9545 38.0341L41 20.9886L39.0114 19L23.9545 34.0568Z"
        fill="#5196FF"
      />
    </svg>
  );
};

export default RoundBlueCheckIcon;
