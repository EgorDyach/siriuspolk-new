import { screen, waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import mockedWithIcon from '../__mocks__/withIcon';
import withIcon from '../withIcon';

describe('withIcon', () => {
  it('should render wrapped component with correct size', async () => {
    const wrapper = await mockedWithIcon({ size: 20 });
    expect(wrapper).toHaveStyle({
      width: '20px',
      height: '20px',
    });
  });
  it('should render wrapped component with correct size with staged width and height', async () => {
    const wrapper = await mockedWithIcon({
      size: 20,
      width: '10px',
      height: '2000px',
    });

    expect(wrapper).toHaveStyle({
      width: '20px',
      height: '20px',
    });
  });
  it('should render wrapped component with staged width', async () => {
    const wrapper = await mockedWithIcon({
      width: '30px',
    });

    expect(wrapper).toHaveStyle({
      width: '30px',
      height: 'auto',
    });
  });
  it('should render wrapped component with staged height', async () => {
    const wrapper = await mockedWithIcon({
      height: '30px',
    });
    expect(wrapper).toHaveStyle({
      width: 'auto',
      height: '30px',
    });
  });
  it('should render wrapped component with unstaged size', async () => {
    const wrapper = await mockedWithIcon({});
    expect(wrapper).toHaveStyle({
      width: 'auto',
      height: 'auto',
    });
  });
  it('should render wrapped component with unstaged size', async () => {
    const wrapper = await mockedWithIcon({});
    expect(wrapper).toHaveStyle({
      width: 'auto',
      height: 'auto',
    });
  });
  it('should render wrapped component with custom classname', async () => {
    const mockComponent = jest.fn((props) => (
      <svg {...props} data-testid="icon" />
    ));
    const Component = withIcon(mockComponent);

    render(<Component size={100} className="test-class" />);

    await waitFor(() => expect(mockComponent).toHaveBeenCalled());

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();

    expect(icon).toHaveClass('w-full h-full test-class');
    const wrapper = icon.parentElement;
    expect(wrapper).toHaveStyle({
      width: '100px',
      height: '100px',
    });
  });
});
