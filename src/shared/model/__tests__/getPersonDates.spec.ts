import { getPersonDates } from '../getPersonDates';

describe('getPersonDates', () => {
  it('should return formatted birth and death dates correctly', () => {
    expect(getPersonDates(1900, 1960)).toBe('1900 - 1960');
  });
  it('should work with unknown birth date', () => {
    expect(getPersonDates(0, 1960)).toBe('Неизвестно - 1960');
  });
  it('should work with unknown death date', () => {
    expect(getPersonDates(1850, 0)).toBe('1850 - Неизвестно');
  });
  it('should work with birth date < 0', () => {
    expect(getPersonDates(-1000, 1960)).toBe('Неизвестно - 1960');
  });
  it('should work with death date < 0', () => {
    expect(getPersonDates(1850, -1)).toBe('1850 - Неизвестно');
  });
  it('should work with alive death date', () => {
    expect(getPersonDates(1850, 1)).toBe('1850 - н. в.');
  });
  it('should work with unknown birth date and alive death date', () => {
    expect(getPersonDates(0, 1)).toBe('Неизвестно - н. в.');
  });
  it('should handle undefined values correctly', () => {
    expect(getPersonDates(undefined as unknown as number, 1960)).toBe(
      'Неизвестно - 1960',
    );
    expect(getPersonDates(1900, undefined as unknown as number)).toBe(
      '1900 - Неизвестно',
    );
    expect(
      getPersonDates(
        undefined as unknown as number,
        undefined as unknown as number,
      ),
    ).toBe('Неизвестно - Неизвестно');
  });

  it('should handle null values correctly', () => {
    expect(getPersonDates(null as unknown as number, 1960)).toBe(
      'Неизвестно - 1960',
    );
    expect(getPersonDates(1900, null as unknown as number)).toBe(
      '1900 - Неизвестно',
    );
    expect(
      getPersonDates(null as unknown as number, null as unknown as number),
    ).toBe('Неизвестно - Неизвестно');
  });
});
