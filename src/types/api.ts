export interface User {
  username: string;
  groupName: string;
  smtpHost: string;
  smtpEmail: string;
}

// 하나 날짜
export interface DateGroup {
  date: string;

  times: {
    start: string;
    end: string;
  }[];
}
