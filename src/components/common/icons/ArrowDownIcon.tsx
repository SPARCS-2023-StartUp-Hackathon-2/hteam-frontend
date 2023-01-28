import { SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {}

const ArrowDownIcon = (props: Props) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 6L11 1" stroke="#C4CBCD" strokeWidth="2" />
    </svg>
  );
};

export default ArrowDownIcon;
