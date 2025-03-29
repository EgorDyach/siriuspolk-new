import { render, screen } from '@testing-library/react';
import ThankyouPage from '../ThankyouPage';

describe('ThankyouPage', () => {
  it('should render title "Спасибо за участие!"', async () => {
    render(await ThankyouPage());
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Спасибо за участие!',
    );
  });

  it('should render description with contacts', async () => {
    render(await ThankyouPage());
    expect(
      screen.getByText(/мы обязательно свяжемся с вами/i),
    ).toBeInTheDocument();
  });

  it('should render link to main', async () => {
    render(await ThankyouPage());
    const link = screen.getByRole('link', { name: /вернуться на главную/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
