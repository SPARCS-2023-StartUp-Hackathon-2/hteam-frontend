import { utcToZonedTime } from 'date-fns-tz';

export const KOREA_NOW = utcToZonedTime(new Date(), 'Asia/Seoul');
