// curiousTime 이 내가 지금 궁금한 시각
// fixedTime 이 어떤 고정된 비교 기준점, fixedTime 기준으로 curiousTime 이
// "before" 인지 "equal" 인지 "after" 인지 알려줌.

import { getHours, getMinutes, getTime } from 'date-fns';

export function compareTime(
  curiousTime: string,
  fixedTime: string,
): 'before' | 'equal' | 'after' {
  const { hour: curiousHour, minute: curiousMinute } =
    parseStringTime(curiousTime);
  const { hour: fixedHour, minute: fixedMinute } = parseStringTime(fixedTime);

  // 시각 먼저 비교
  if (curiousHour < fixedHour) {
    return 'before';
  }
  if (curiousHour > fixedHour) {
    return 'after';
  }

  // 시각이 같은 경우
  if (curiousMinute < fixedMinute) {
    return 'before';
  }
  if (curiousMinute > fixedMinute) {
    return 'after';
  }

  // 시각도 같고, 분도 같은 경우
  return 'equal';
}

// input : 23:21 같은 시각
export function parseStringTime(time: string) {
  const hour = Number(time.slice(0, 2));
  const minute = Number(time.slice(-2));

  return { hour, minute };
}

export function convertStringTimeToMinutes(time: string) {
  const { hour } = parseStringTime(time);
  const { minute } = parseStringTime(time);

  return 60 * hour + minute;
}
export function convertMinutesToStringTime(minutes: number) {
  const hour = String(Math.floor(minutes / 60));
  const minute = String(minutes % 60);

  return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
}

export function addMinutesToHours(time: string, minutes: number) {
  const timeInMinutes = convertStringTimeToMinutes(time);

  const result = timeInMinutes + minutes;

  // 자정 넘어가면 에러
  if (result > 1440) {
    return 'error - exceeds day';
  }

  return convertMinutesToStringTime(result);
}

export function extractOnlyTimeFromDateObject(date: Date) {
  const minute = String(getMinutes(date));
  const hour = String(getHours(date));

  return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
}
