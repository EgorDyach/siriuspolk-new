import { render, screen } from '@testing-library/react';
import { Label } from '../Label';

describe('<Label />', () => {
  it('should render correctly', () => {
    render(<Label>test label</Label>);
    expect(screen.getByText(/test label/i)).toBeInTheDocument();
  });

  it('should render correctly with classname', () => {
    render(<Label className="test-class" />);
    expect(screen.getByTestId('label')).toHaveClass('test-class');
  });

  it('should render correctly with ReactNode', () => {
    render(
      <Label>
        <h1>heading</h1>
        <button>click</button>
      </Label>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('matches snapshot with default label', () => {
    const { asFragment } = render(<Label>test label</Label>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with react node', () => {
    const { asFragment } = render(
      <Label>
        <h1>heading</h1>
        <button>click</button>
      </Label>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
