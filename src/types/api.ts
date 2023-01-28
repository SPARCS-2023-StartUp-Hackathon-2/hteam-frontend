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
