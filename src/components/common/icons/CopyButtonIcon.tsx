import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

const CopyButtonIcon = (props: Props) => {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.7895 0H1.68421C0.757895 0 0 0.736364 0 1.63636V13.0909H1.68421V1.63636H11.7895V0ZM14.3158 3.27273H5.05263C4.12632 3.27273 3.36842 4.00909 3.36842 4.90909V16.3636C3.36842 17.2636 4.12632 18 5.05263 18H14.3158C15.2421 18 16 17.2636 16 16.3636V4.90909C16 4.00909 15.2421 3.27273 14.3158 3.27273ZM14.3158 16.3636H5.05263V4.90909H14.3158V16.3636Z"
        fill="#272E31"
      />
    </svg>
  );
};

export default CopyButtonIcon;
