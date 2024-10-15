import { differenceInMonths, format, parseISO } from 'date-fns';

export function formatYearsAndMonthsSince(
  startDate: string,
  endDate: string | null
): string {
  const untilDate = endDate ? parseISO(endDate) : new Date();
  const startDateParsed = parseISO(startDate);
  const monthsDiff = Math.abs(differenceInMonths(startDateParsed, untilDate));

  if (monthsDiff === 0) return 'Started this month';

  const years = Math.floor(monthsDiff / 12);
  const months = monthsDiff % 12;

  const yearString = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthString =
    months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  return [yearString, monthString].filter(Boolean).join(', ');
}

export function formatDateMonth(
  inputDate: string,
  includeMonth = true
): string {
  try {
    const parsedDate = parseISO(inputDate);
    return includeMonth
      ? format(parsedDate, 'MMM yyyy')
      : parsedDate.getFullYear().toString();
  } catch (error) {
    console.error('Invalid date format', { error });
    return '';
  }
}

export function dateDifferenceInMonths(
  startDate: string,
  endDate: string | null
): string {
  try {
    const parsedStartDate = parseISO(startDate);
    const parsedEndDate = endDate ? parseISO(endDate) : new Date();
    const monthsDifference = differenceInMonths(parsedEndDate, parsedStartDate);

    if (monthsDifference === 0) return 'Started this month';

    const yearsDifference = Math.floor(monthsDifference / 12);
    const remainingMonths = monthsDifference % 12;

    const yearString =
      yearsDifference > 0
        ? `${yearsDifference} ${yearsDifference === 1 ? 'year' : 'years'}`
        : '';
    const monthString =
      remainingMonths > 0
        ? `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`
        : '';

    return [yearString, monthString].filter(Boolean).join(' and ');
  } catch (error) {
    console.error('Invalid date format', { error });
    return '';
  }
}

export function getRelativeTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const timeDifferenceInSeconds = Math.floor(
    (now.getTime() - date.getTime()) / 1000
  );

  const TIME_UNITS = [
    { unit: 'year', seconds: 365 * 24 * 60 * 60, abbreviation: 'y' },
    { unit: 'month', seconds: 30 * 24 * 60 * 60, abbreviation: 'mo' },
    { unit: 'day', seconds: 24 * 60 * 60, abbreviation: 'd' },
    { unit: 'hour', seconds: 60 * 60, abbreviation: 'h' },
    { unit: 'minute', seconds: 60, abbreviation: 'm' },
    { unit: 'second', seconds: 1, abbreviation: 's' },
  ];

  for (const { unit, seconds, abbreviation } of TIME_UNITS) {
    if (timeDifferenceInSeconds >= seconds) {
      const value = Math.floor(timeDifferenceInSeconds / seconds);
      return `${value}${abbreviation} ago`;
    }
  }

  return 'just now';
}

export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}
