import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../useDebounce';

jest.useFakeTimers();

describe('useDebounce', () => {
  it('should return initial value', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));

    expect(result.current).toBe('initial');
  });

  it('should return new value after time', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'first' },
      },
    );

    expect(result.current).toBe('first');

    rerender({ value: 'second' });
    expect(result.current).toBe('first');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('second');
  });

  it('should return old value before time', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'first' },
      },
    );

    rerender({ value: 'second' });
    act(() => {
      jest.advanceTimersByTime(300);
    });

    rerender({ value: 'third' });
    expect(result.current).toBe('first');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('third');
  });
});
