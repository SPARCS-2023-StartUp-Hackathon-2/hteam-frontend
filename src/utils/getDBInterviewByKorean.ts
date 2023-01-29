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

export function getKoreanInterviewByKorean(DBType: interviewType): string {
  switch (DBType) {
    case "VOICE_CALL":
      return "전화 인터뷰";
    case "VIDEO_CALL":
      return "화상 인터뷰";
    case "FACE_TO_FACE":
      return "대면 인터뷰";
    case "ETC":
      return "기타";
    case "VOICE_CALL":
    default:
      return "";
  }
}
