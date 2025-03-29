import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';

describe('NotFound Page', () => {
  it('should render title "Страница не найдена"', async () => {
    render(await NotFound());
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Страница не найдена',
    );
  });

  it('should render error text', async () => {
    render(await NotFound());
    expect(
      screen.getByText(/страница, которую вы ищете, не существует/i),
    ).toBeInTheDocument();
  });

  it('should render link to main', async () => {
    render(await NotFound());
    const link = screen.getByRole('link', { name: /вернуться на главную/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
