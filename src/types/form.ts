export type FormSectionType = "shortText" | "longText" | "radio" | "checkbox" | "dropdown";

export interface FormSectionItem {
  id: number;
  order: number;
  type: FormSectionType;
  question: string;
  description: string;
  required: boolean;
  content: any;
}

export interface AddibleInputData {
  id: number;
  data: string;
}
