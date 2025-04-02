import { removeDuplicates } from '../removeDuplicates';

describe('removeDuplcates', () => {
  it('should work with empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });
  it('should work correct', () => {
    expect(removeDuplicates([1, 2, 3, 3])).toEqual([1, 2, 3]);
  });
  it('should work correct with different types', () => {
    expect(removeDuplicates([1, 2, '2', '3', '3'])).toEqual([1, 2, '2', '3']);
  });
});
