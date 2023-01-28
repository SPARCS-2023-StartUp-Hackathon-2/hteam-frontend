import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

const TwoPeopleIcon = (props: Props) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.37467 14.323C6.93717 14.323 2.08301 15.5417 2.08301 17.9688V19.7917H16.6663V17.9688C16.6663 15.5417 11.8122 14.323 9.37467 14.323ZM4.52051 17.7084C5.39551 17.1042 7.51009 16.4063 9.37467 16.4063C11.2393 16.4063 13.3538 17.1042 14.2288 17.7084H4.52051ZM9.37467 12.5C11.3851 12.5 13.0205 10.8646 13.0205 8.85421C13.0205 6.84379 11.3851 5.20837 9.37467 5.20837C7.36426 5.20837 5.72884 6.84379 5.72884 8.85421C5.72884 10.8646 7.36426 12.5 9.37467 12.5ZM9.37467 7.29171C10.2393 7.29171 10.9372 7.98962 10.9372 8.85421C10.9372 9.71879 10.2393 10.4167 9.37467 10.4167C8.51009 10.4167 7.81217 9.71879 7.81217 8.85421C7.81217 7.98962 8.51009 7.29171 9.37467 7.29171ZM16.708 14.3855C17.9163 15.2605 18.7497 16.4271 18.7497 17.9688V19.7917H22.9163V17.9688C22.9163 15.8646 19.2705 14.6667 16.708 14.3855ZM15.6247 12.5C17.6351 12.5 19.2705 10.8646 19.2705 8.85421C19.2705 6.84379 17.6351 5.20837 15.6247 5.20837C15.0622 5.20837 14.5413 5.34379 14.0622 5.57296C14.7184 6.50004 15.1038 7.63546 15.1038 8.85421C15.1038 10.073 14.7184 11.2084 14.0622 12.1355C14.5413 12.3646 15.0622 12.5 15.6247 12.5Z"
        fill="black"
      />
    </svg>
  );
};

export default TwoPeopleIcon;
