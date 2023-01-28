import { Question } from "types/api";

export const MOCKUP_QUESTIONS: Question[] = [
  {
    order: 1,
    type: "basic",
    question: "이름, 번호, 이메일",
  },
  {
    order: 2,
    type: "shortText",
    question: "개발이란 무엇인가요? ",
  },
  {
    order: 3,
    type: "longText",
    question: "이름, 번호, 이메일",
  },
  {
    order: 4,
    type: "radio",
    question: "개발이란 무엇인가요?",
  },
  {
    order: 5,
    type: "checkbox",
    question: "질문을 입력해주세요",
  },
];
