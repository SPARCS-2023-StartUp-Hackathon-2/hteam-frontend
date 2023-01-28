import { atom, selector } from "recoil";
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
      description: "단답",
      required: false,
      content: "",
    },
    {
      id: 2,
      order: 2,
      type: "longText",
      question: "장문",
      description: "장문",
      required: true,
      content: "",
    },
    {
      id: 3,
      order: 3,
      type: "radio",
      question: "객관",
      description: "객관",
      required: true,
      content: [],
    },
    {
      id: 4,
      order: 4,
      type: "checkbox",
      question: "체크",
      description: "체크",
      required: false,
      content: [],
    },
    {
      id: 5,
      order: 5,
      type: "dropdown",
      question: "드롭",
      description: "드롭",
      required: false,
      content: [],
    },
  ],
});

export const selectedFormSectionState = selector({
  key: "selectedFormSectionState",
  get: ({ get }) => {
    const id = get(selectedFormSectionIdState);
    const list = get(formSectionListState);

    return list.find((item) => item.id === id);
  },
});
