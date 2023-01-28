export function dateObjectToDateString(date: Date) {
  return new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'long',
    timeZone: 'Asia/Seoul',
  }).format(date);
}
