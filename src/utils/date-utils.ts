import {
  add,
  format,
  isMonday,
  isSaturday,
  isSunday,
  previousMonday,
  nextMonday
} from 'date-fns';
import { MealplanDateRange } from '@/src/types/mealplan-date-range';

export function getDateRange(selectedDate?: Date) {
  if (selectedDate == null) {
    selectedDate = new Date();
  }

  let fromDate;
  if (isMonday(selectedDate)) {
    fromDate = selectedDate;
  } else if (isSaturday(selectedDate) || isSunday(selectedDate)) {
    fromDate = nextMonday(selectedDate);
  } else {
    fromDate = previousMonday(selectedDate);
  }

  const daterange: MealplanDateRange = {
    from: fromDate,
    to: add(fromDate, { days: 4 }) // Mon - Fri
  };
  return daterange;
}

export function formatDateRange(daterange: MealplanDateRange) {
  const formatStr = 'MMM do';
  return (
    format(daterange.from, formatStr) + ' - ' + format(daterange.to, formatStr)
  );
}
