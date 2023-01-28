import { atom, selector } from "recoil";
import { BasicFormSectionItem, FormSectionItem } from "types/form";

export const selectedFormSectionIdState = atom<number>({
  key: "selectedFormSectionIdState",
  default: 0,
});

export const basicFormSectionState = atom<BasicFormSectionItem>({
  key: "basicFormSectionState",
  default: {
    name: "",
    email: "",
    phoneNumber: "",
  },
});

export const formSectionListState = atom<FormSectionItem[]>({
  key: "formSectionListState",
  default: [],
});

export const selectedFormSectionState = selector({
  key: "selectedFormSectionState",
  get: ({ get }) => {
    const id = get(selectedFormSectionIdState);
    const list = get(formSectionListState);

    return list.find((item) => item.id === id);
  },
});
