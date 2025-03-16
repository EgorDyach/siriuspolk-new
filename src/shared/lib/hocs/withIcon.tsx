import { cx } from 'class-variance-authority';
import { FC } from 'react';

type SVGProps = React.SVGProps<SVGSVGElement>;

export type IconWrapperProps = Omit<SVGProps, 'height' | 'width'> & {
  size?: number;
  height?: string;
  width?: string;
};

const withIcon: (
  Component: React.ComponentType<IconWrapperProps>,
) => FC<IconWrapperProps> =
  (Component) =>
  // eslint-disable-next-line react/display-name
  ({ size, height, width, className, ...props }) => (
    <div
      style={{
        width: size || width || 'auto',
        height: size || height || 'auto',
      }}
    >
      <Component className={cx('w-full h-full', className)} {...props} />
    </div>
  );

export default withIcon;
