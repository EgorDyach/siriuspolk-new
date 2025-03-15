import { FC, SVGProps } from "react";
import withIcon from "../../lib/hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" fill="#52575D" />
    <path
      d="M17.8958 34.5625L27.4374 25L17.8958 15.4375L20.8333 12.5L33.3333 25L20.8333 37.5L17.8958 34.5625Z"
      fill="currentColor"
      fillOpacity="0.87"
    />
  </svg>
);

const ArrowRight = withIcon(Icon);

ArrowRight.displayName = "ArrowRight";
export default ArrowRight;
