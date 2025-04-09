import { cleanup, render, screen } from '@testing-library/react';
import { Input } from '../Input';

describe('<Input />', () => {
  it('should render correctly', () => {
    render(<Input />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
  it('should render correctly with classname', () => {
    render(<Input className="test-class" />);
    expect(screen.getByTestId('label')).toHaveClass('test-class');
  });
  it('should render correctly with required', () => {
    render(<Input required />);
    expect(screen.getByTestId('input')).toBeRequired();
    expect(screen.getByTestId('required-mark')).toBeInTheDocument();
  });
  it('should render correctly with different types', () => {
    render(<Input type="email" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'email');
    cleanup();
    render(<Input type="password" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'password');
    cleanup();
    render(<Input type="file" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'file');
  });
  it('should render correctly with label', () => {
    render(<Input label="Test input" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.getByText(/test input/i)).toBeInTheDocument();
  });
  it('should render correctly with error', () => {
    render(<Input error="Test error" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.getByText(/test error/i)).toBeInTheDocument();
  });
  it('should connect name and htmlFor', () => {
    render(<Input name="test-name" />);
    expect(screen.getByTestId('input')).toHaveAttribute('name', 'test-name');
    expect(screen.getByTestId('label')).toHaveAttribute('for', 'test-name');
  });
  it('should render correctly with other props', () => {
    render(<Input disabled style={{ color: 'red' }} placeholder="test" />);
    expect(screen.getByTestId('input')).toBeDisabled();
    expect(screen.getByTestId('input')).toHaveAttribute('placeholder', 'test');
    expect(screen.getByTestId('input')).toHaveStyle('color: red');
  });
  it('matches snapshot with default input', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with label and required', () => {
    const { asFragment } = render(<Input label="Имя" required />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { asFragment } = render(<Input error="Ошибка" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with disabled', () => {
    const { asFragment } = render(<Input disabled />);
    expect(asFragment()).toMatchSnapshot();
  });
});
