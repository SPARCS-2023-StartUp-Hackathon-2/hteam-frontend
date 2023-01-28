import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

const ArrowLeftIcon = (props: Props) => {
  return (
    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.83 7H16H24H25V9H24H16H3.83L9.41 14.59L8 16L0 8L8 0L9.42 1.41L3.83 7Z"
        fill="#5C676A"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
