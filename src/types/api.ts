export interface User {
  username: string;
  groupName: string;
  smtpHost: string;
  smtpEmail: string;
}

export type RecruitmentState = "PREPARING" | "FORM" | "INTERVIEW" | "COMPLETE";
export type interviewType = "VOICE_CALL" | "VIDEO_CALL" | "FACE_TO_FACE" | "FACE";
export interface Recruitment {
  id: number;
  name: string;
  state: RecruitmentState;
  startAt: string;
  endAt: string;
  content: any;
  interviewType: interviewType;
  interviewNotice: string | null;
}

// 하나 날짜
import { ComponentProps } from "react";
import FormSectionBlock from "components/pages/forms/FormSectionBlock";
export interface DateGroup {
  date: string;

  times: {
    start: string;
    end: string;
  }[];
}

export interface Question
  extends Omit<ComponentProps<typeof FormSectionBlock>, "dataId" | "selected"> {}
