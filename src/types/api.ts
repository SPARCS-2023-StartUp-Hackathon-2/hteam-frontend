import { FormSectionItem } from "types/form";

export interface User {
  username: string;
  groupName: string;
  smtpHost: string;
  smtpEmail: string;
}

export type RecruitmentState = "PREPARING" | "FORM" | "INTERVIEW" | "COMPLETE";
export type interviewType = "VOICE_CALL" | "VIDEO_CALL" | "FACE_TO_FACE" | "FACE";
export type ApplicantState = "UNDEFINED" | "FAIL" | "PASS";

export interface Recruitment {
  id: number;
  uuid: string;
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

  times: string[];
}

export interface Question
  extends Omit<ComponentProps<typeof FormSectionBlock>, "dataId" | "selected"> {}

export interface FormContent {
  content: {
    metadata: {
      title: string;
    };
    data: FormSectionItem[];
  };
}

export interface Applicant {
  id: number;
  uuid: string;
  name: string;
  email: string;
  phoneNumber: string;
  submittedAt: string;
  formState: ApplicantState;
  formContent: FormContent["content"];
  interviewState: ApplicantState;
}
