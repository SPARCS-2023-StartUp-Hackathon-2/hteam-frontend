export type RecruitmentState = "PREPARING" | "FORM" | "INTERVIEW" | "COMPLETE";

interface Props {
  currentState: RecruitmentState;
  startAt?: string;
  endAt?: string;
}

// Slider 로 만들어보기
function RecruitmentProcessGraph({ currentState, startAt, endAt }: Props) {
  return <div></div>;
}

export default RecruitmentProcessGraph;
