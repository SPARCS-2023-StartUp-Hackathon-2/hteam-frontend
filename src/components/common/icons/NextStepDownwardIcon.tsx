import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

const NextStepDownwardIcon = (props: Props) => {
  return (
    <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L19.5 20L38 1" stroke="#D7DBDC" strokeWidth="2" />
    </svg>
  );
};

export default NextStepDownwardIcon;
