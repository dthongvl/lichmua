export enum CalendarType {
  Calendar = 'Calendar',
  LunarCalendar = 'LunarCalendar',
}

interface Range {
  type?: CalendarType;
  startDate: Date;
  endDate: Date;
}

export default Range;
