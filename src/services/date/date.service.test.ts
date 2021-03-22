import MockDate from 'mockdate';
import DateService from './date.service';

// eslint-disable-next-line max-lines-per-function
describe('Date Service', () => {
  afterEach(() => {
    MockDate.reset();
  });

  test('timeline format when pass as param a normal date', () => {
    const date = new Date(2018, 4, 15, 20, 30);
    const dateConverted = DateService.convertToTimeline(date);
    expect(dateConverted).toBe('May 15, 2018, 20:30');
  });

  test('timeline format when day passed is today', () => {
    MockDate.set('2020-03-15 15:30');

    const date = new Date();
    const timelineDate = DateService.convertToTimeline(date);

    expect(timelineDate).toBe('Today, 15:30');
  });

  test('timeline format when day passed was yesterday', () => {
    const today = '2020-04-22 09:30';
    const yesterday = '2020-04-20 09:30';
    MockDate.set(today);

    const date = new Date(yesterday);
    const timelineDate = DateService.convertToTimeline(date);

    expect(timelineDate).toBe('Yesterday, 09:30');
  });
});
