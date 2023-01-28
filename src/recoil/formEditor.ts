import { atom } from "recoil";
import { FormSectionItem } from "types/form";

export const selectedFormSectionIdState = atom<number>({
  key: "selectedFormSectionIdState",
  default: 1,
});

export const formSectionListState = atom<FormSectionItem[]>({
  key: "formSectionListState",
  default: [
    {
      id: 1,
      order: 1,
      type: "shortText",
      question: "단답",
    },
    {
      id: 2,
      order: 2,
      type: "longText",
      question: "장문",
    },
    {
      id: 3,
      order: 3,
      type: "radio",
      question: "객관",
    },
    {
      id: 4,
      order: 4,
      type: "checkbox",
      question: "체크",
    },
    {
      id: 5,
      order: 5,
      type: "dropdown",
      question: "드롭",
    },
  ],
});
