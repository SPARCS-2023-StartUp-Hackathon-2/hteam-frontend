import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

function TriangleArrowDownIcon(props: Props) {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#737D81" />
    </svg>
  );
}

export default TriangleArrowDownIcon;
