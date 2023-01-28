import { addDays, isEqual } from 'date-fns';
import {
  addMinutesToHours,
  compareTime,
  extractOnlyTimeFromDateObject,
} from 'utils/time';

export function generateDates(
  startDate: Date,
  endDate: Date,
  startTime: Date,
  endTime: Date,
  duration: number, // 인터뷰 진행 시간 (단위: 분)
) {
  console.log('dd');
  const stringStartTime = extractOnlyTimeFromDateObject(startTime);
  const stringEndTime = extractOnlyTimeFromDateObject(endTime);
  console.log(stringStartTime, stringEndTime);
  const dates = [];
  let currentDateCursor = startDate;
  while (!isEqual(currentDateCursor, addDays(endDate, 1))) {
    const times = [];
    let currentStartingTimeCursor = stringStartTime;
    // duration 더한 예상 끝값이 endtime 안 넘어가면
    while (
      compareTime(
        addMinutesToHours(currentStartingTimeCursor, duration),
        stringEndTime,
      ) !== 'after'
    ) {
      const timeTemplate = `${currentStartingTimeCursor}-${addMinutesToHours(
        currentStartingTimeCursor,
        duration,
      )}`;
      console.log(timeTemplate);
      times.push(timeTemplate);
      currentStartingTimeCursor = addMinutesToHours(
        currentStartingTimeCursor,
        duration,
      );
    }
    const dateObj = {
      date: currentDateCursor,
      times: times,
    };
    dates.push(dateObj);
    currentDateCursor = addDays(currentDateCursor, 1);
  }

  return dates;
}
