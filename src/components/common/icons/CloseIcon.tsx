import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

const CloseIcon = (props: Props) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.22146 0.889179L1 9.11064M9.22146 9.11062L1 0.88916" stroke="#5C676A" />
    </svg>
  );
};

export default CloseIcon;
