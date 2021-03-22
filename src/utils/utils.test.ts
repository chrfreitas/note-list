import { capitalize } from './utils';

test('uppercase the first letter (capitalize)', () => {
  const capitalizedWorld = capitalize('jared');
  expect(capitalizedWorld).toBe('Jared');
});
