export interface User {
  username: string;
  groupName: string;
  smtpHost: string;
  smtpEmail: string;
}

export type RecruitmentState = "PREPARING" | "FORM" | "INTERVIEW" | "COMPLETE";
export interface Recruitment {
  id: number;
  name: string;
  state: string;
  startAt: string;
  endAt: string;
}

// 하나 날짜
export interface DateGroup {
  date: string;

  times: {
    start: string;
    end: string;
  }[];
}
