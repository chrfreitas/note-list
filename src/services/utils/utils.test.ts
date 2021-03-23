import { capitalize, orderByDate, OrderType } from './utils';

describe('Util Capitalize', () => {
  test('uppercase the first letter (capitalize)', () => {
    const capitalizedWorld = capitalize('jared');
    expect(capitalizedWorld).toBe('Jared');
  });
});

// eslint-disable-next-line max-lines-per-function
describe('Util OrderByDate', () => {
  const array = [
    { date: new Date('2021-02-13') },
    { date: new Date('2021-01-17') },
    { date: new Date('2021-02-05') },
    { date: new Date('2021-03-20') }
  ];

  test('returns the array ordered ascending', () => {
    const arrayExpected = [
      { date: new Date('2021-03-20') },
      { date: new Date('2021-02-13') },
      { date: new Date('2021-02-05') },
      { date: new Date('2021-01-17') }
    ];

    const orderedArray = orderByDate(array);
    expect(orderedArray).toEqual(arrayExpected);
  });

  test('returns the array ordered descending', () => {
    const arrayExpected = [
      { date: new Date('2021-01-17') },
      { date: new Date('2021-02-05') },
      { date: new Date('2021-02-13') },
      { date: new Date('2021-03-20') }
    ];

    const orderedArray = orderByDate(array, OrderType.descending);
    expect(orderedArray).toEqual(arrayExpected);
  });
});
