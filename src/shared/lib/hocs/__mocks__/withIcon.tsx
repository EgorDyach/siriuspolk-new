import { screen, waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import withIcon from '../withIcon';
import { JSX, SVGProps } from 'react';

const mockedWithIcon = async (
  props: JSX.IntrinsicAttributes &
    Omit<SVGProps<SVGSVGElement>, 'height' | 'width'> & {
      size?: number;
      height?: string;
      width?: string;
    },
) => {
  const mockComponent = jest.fn((props) => (
    <svg {...props} data-testid="icon" />
  ));
  const Component = withIcon(mockComponent);

  render(<Component {...props} />);

  await waitFor(() => expect(mockComponent).toHaveBeenCalled());

  const icon = screen.getByTestId('icon');
  expect(icon).toBeInTheDocument();

  expect(icon).toHaveClass('w-full h-full');
  const wrapper = icon.parentElement;
  return wrapper;
};

export default mockedWithIcon;
