import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

function TriangleArrowUpIcon(props: Props) {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#737D81" />
    </svg>
  );
}

export default TriangleArrowUpIcon;
