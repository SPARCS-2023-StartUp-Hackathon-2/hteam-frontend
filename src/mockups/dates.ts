import { endOfDay } from "date-fns";
import { DateGroup } from "types/api";

export const MOCKUP_EXPORT_TIMES = [
  {
    time: "10:00-10:30",
    disabled: false,
  },
  {
    time: "10:30-11:00",
    disabled: true,
  },
  {
    time: "11:00-11:30",
    disabled: false,
  },
];

export const MOCKUP_GENERATED_TIMES: DateGroup[] = [
  {
    date: "2023-03-23",

    times: ["10:00-10:30", "10:30-11:00"],
  },
];
