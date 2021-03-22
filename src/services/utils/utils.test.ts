import { capitalize } from './utils';

describe('Util', () => {
  test('uppercase the first letter (capitalize)', () => {
    const capitalizedWorld = capitalize('jared');
    expect(capitalizedWorld).toBe('Jared');
  });
});
