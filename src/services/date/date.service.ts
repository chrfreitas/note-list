import dayjs from 'dayjs';

const convertToTimeline = (date: Date): string => {
  if (DateService.isToday(date)) {
    // TODO: Include internacionalization
    return `Today, ${dayjs(date).format('HH:mm')}`;
  }

  if (DateService.isYesterday(date)) {
    // TODO: Include internacionalization
    return `Yesterday, ${dayjs(date).format('HH:mm')}`;
  }

  return dayjs(date).format('MMM D, YYYY, HH:mm');
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return dayjs(date).diff(today, 'day') === 0;
};

const isYesterday = (date: Date): boolean => {
  const today = new Date();
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1
  );

  return dayjs(date).diff(yesterday, 'day') === 0;
};

const DateService = {
  convertToTimeline,
  isToday,
  isYesterday,
};

export default DateService;
