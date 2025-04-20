import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('<Button />', () => {
  it('should render button correctly', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should correctly render with classname', () => {
    render(<Button className="test-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('test-class');
    expect(button).toHaveClass('py-[16px]', 'px-[40px]', 'text-white');
  });

  it('should correctly render with small size', () => {
    render(<Button size="small" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'text-sm',
      'md:text-base',
      'py-[12px]',
      'px-[32px]',
    );
  });

  it('should correctly render with gray theme', () => {
    render(<Button theme="gray" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-[#D9D9D9]',
      '!text-black',
      '[&>*]:text-black',
    );
  });

  it('should correctly render with children', () => {
    render(
      <Button>
        <div data-testid="children" />
      </Button>,
    );
    const children = screen.getByTestId('children');
    expect(children).toBeInTheDocument();
    expect(children.parentElement).toHaveRole('button');
  });

  it('should correctly work onClick', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('should render as disabled when disabled prop is passed', () => {
    render(<Button disabled={true} />);
    const button = screen.getByRole('button');
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

  it('matches snapshot with disabled', () => {
    const { asFragment } = render(<Button disabled />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('matches snapshot with small size', () => {
    const { asFragment } = render(<Button size="small" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('matches snapshot with gray theme', () => {
    const { asFragment } = render(<Button theme="gray" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
