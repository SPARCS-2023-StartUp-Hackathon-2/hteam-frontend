import { interviewType } from "types/api";

export function getDBInterviewByKorean(korean: string): interviewType {
  switch (korean) {
    case "전화 인터뷰":
      return "VOICE_CALL";
    case "화상 인터뷰":
      return "VIDEO_CALL";
    case "대면 인터뷰":
      return "FACE_TO_FACE";
    case "기타":
      return "ETC";
    default:
      return "VOICE_CALL";
  }
}
