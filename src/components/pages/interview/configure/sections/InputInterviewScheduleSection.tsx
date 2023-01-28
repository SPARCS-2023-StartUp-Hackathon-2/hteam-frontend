import InterviewInputBox from 'components/pages/interview/InterviewInputBox';
import { Calendar } from '@mantine/dates';
import 'dayjs/locale/ko';
import AdminWeekAndTimeSelector from 'components/pages/interview/configure/AdminWeekAndTimeSelector';

function InputInterviewScheduleSection() {
  return (
    <InterviewInputBox title="인터뷰 일정을 입력하세요" buttonText="제출">
      <Calendar amountOfMonths={2} locale="ko" />
      <AdminWeekAndTimeSelector />
    </InterviewInputBox>
  );
}

export default InputInterviewScheduleSection;
