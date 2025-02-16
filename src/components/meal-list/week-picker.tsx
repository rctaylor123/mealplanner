'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/src/components/ui/button';

import { getDateRange, formatDateRange } from '@/src/utils/date-utils';
import type { MealplanDateRange } from '@/src/types/mealplan-date-range';

import { CalendarIcon } from 'lucide-react';
import { add, sub } from 'date-fns';

import { cn } from '@/src/lib/utils';
import { Calendar } from '@/src/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/src/components/ui/popover';
import type { DateRange } from 'react-day-picker';

export function WeekPicker() {
  const [daterange, setDateRange] =
    React.useState<MealplanDateRange>(getDateRange());
  const [isCalendarOpen, setIsCalendarOpen] = React.useState<boolean>(false);

  function handleDateSelect(date: DateRange | undefined) {
    if (date) {
      let selectedDate = date.from;
      if (date.to && date.to != daterange.to) {
        selectedDate = date.to;
      }

      setDateRange(getDateRange(selectedDate));
    }
    setIsCalendarOpen(false);
  }

  function handleBackArrow() {
    setDateRange(getDateRange(sub(daterange.from, { weeks: 1 })));
  }

  function handleForwardArrow() {
    setDateRange(getDateRange(add(daterange.from, { weeks: 1 })));
  }

  return (
    <div className='flex'>
      <Button
        className='rounded-r-none'
        variant='outline'
        size='icon'
        onClick={handleBackArrow}
      >
        <ChevronLeft />
      </Button>
      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[240px] justify-start rounded-l-none rounded-r-none border-l-0 text-left font-normal'
            )}
          >
            <CalendarIcon />
            {formatDateRange(daterange)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            mode='range'
            defaultMonth={daterange?.from}
            selected={daterange}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Button
        className='rounded-l-none border-l-0'
        variant='outline'
        size='icon'
        onClick={handleForwardArrow}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
