import { fireEvent, screen } from '@testing-library/react';
import { Checkbox } from '../checkbox';
import renderWithForm from '@shared/lib/tests/renderWithForm';

describe('<Checkbox />', () => {
  it('should render correctly', async () => {
    renderWithForm(<Checkbox />, {});
    expect(await screen.findByRole('checkbox')).toBeInTheDocument();
  });

  it('should work checking', async () => {
    const result = renderWithForm(
      <Checkbox data-testid="checkbox" name="test" />,
      { test: false },
    );
    expect(result.getValues().test).not.toBeTruthy();

    await fireEvent.click(await screen.findByTestId('checkbox'));
    expect(result.getValues().test).toBeTruthy();

    fireEvent.click(await screen.findByTestId('checkbox'));
    expect(result.getValues().test).not.toBeTruthy();
  });

  it('should call onChange', async () => {
    const onChange = jest.fn();
    renderWithForm(
      <Checkbox onChange={onChange} data-testid="checkbox" name="test" />,
      { test: false },
    );
    fireEvent.click(await screen.findByTestId('checkbox'));
    expect(onChange).toHaveBeenCalled();
  });

  it('should be disabled', async () => {
    const onChange = jest.fn();
    renderWithForm(
      <Checkbox
        disabled
        onChange={onChange}
        data-testid="checkbox"
        name="test"
      />,
      { test: false },
    );

    fireEvent.click(await screen.findByTestId('checkbox'));
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(await screen.findByTestId('checkbox')).toBeFalsy();
  });
});
