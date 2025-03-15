import { FC, SVGProps } from "react";
import withIcon from "../../lib/hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <rect
      width="50"
      height="50"
      transform="matrix(-1 0 0 1 50 0)"
      fill="#52575D"
    />
    <path
      d="M32.1042 34.5625L22.5626 25L32.1042 15.4375L29.1667 12.5L16.6667 25L29.1667 37.5L32.1042 34.5625Z"
      fill="currentColor"
      fillOpacity="0.87"
    />
  </svg>
);

const ArrowLeft = withIcon(Icon);

ArrowLeft.displayName = "ArrowLeft";
export default ArrowLeft;
