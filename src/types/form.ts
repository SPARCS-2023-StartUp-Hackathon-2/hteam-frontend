export type FormSectionType = "shortText" | "longText" | "radio" | "checkbox" | "dropdown";

export interface FormSectionItem {
  id: number;
  order: number;
  type: FormSectionType;
  question: string;
  description: string;
  content: any;
}
