import { FC, SVGProps } from 'react';
import withIcon from '../../lib/hocs/withIcon';

const Icon: FC = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 193 187" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M38.5217 30.7356H146.382H161.791V46.1034V99.8908H146.382V61.4713H38.5217V138.31H107.861V153.678H38.5217H23.113V138.31V46.1034V30.7356H38.5217Z"
      fill="currentColor"
    />
    <path
      d="M148.292 129.481L166.307 152.266L151.005 164.303L132.987 141.519L121.541 155.295L107.968 94.1782L164.395 121.589L148.296 129.479L148.292 129.481ZM155.359 150.973L136.196 126.74L146.652 121.62L119.068 108.223L125.708 138.093L133.135 129.151L152.298 153.385L155.359 150.973Z"
      fill="currentColor"
    />
  </svg>
);

const ClickOnScreen = withIcon(Icon);

ClickOnScreen.displayName = 'ClickOnScreen';
export default ClickOnScreen;
