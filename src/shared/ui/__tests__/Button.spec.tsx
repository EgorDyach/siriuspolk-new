import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('<Button />', () => {
  it('should render button correctly', async () => {
    render(<Button />);
    expect(await screen.findByRole('button')).toBeInTheDocument();
  });
  it('should correctly render with classname', async () => {
    render(<Button className="test-class" />);
    const button = await screen.findByRole('button');
    expect(button).toHaveClass('test-class');
    expect(button).toHaveClass('py-[12px]', 'px-[32px]', 'text-white');
  });
  it('should correctly render with children', async () => {
    render(
      <Button>
        <div data-testid="children" />
      </Button>,
    );
    const children = await screen.findByTestId('children');
    expect(children).toBeInTheDocument();
    expect(children.parentElement).toHaveRole('button');
  });
  it('should correctly work onClick', async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
  it('should render as disabled when disabled prop is passed', async () => {
    render(<Button disabled={true} />);
    const button = await screen.findByRole('button');
    expect(button).toBeDisabled();
  });
  it('matches snapshot with default Button', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with children', () => {
    const { asFragment } = render(<Button>Test</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with disabled', () => {
    const { asFragment } = render(<Button disabled />);
    expect(asFragment()).toMatchSnapshot();
  });
});
