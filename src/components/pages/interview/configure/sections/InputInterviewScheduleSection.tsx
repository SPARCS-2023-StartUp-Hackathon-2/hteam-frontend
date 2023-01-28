import InterviewInputBox from 'components/pages/interview/InterviewInputBox';
import { Calendar } from '@mantine/dates';
import 'dayjs/locale/ko';
import AdminWeekAndTimeSelector from 'components/pages/interview/configure/AdminWeekAndTimeSelector';
import Sidebar from 'components/pages/interview/configure/Sidebar';
import DateBlockDisplayer from 'components/common/DateBlockDisplayer';
import { Flex } from '@mantine/core';

function InputInterviewScheduleSection() {
  return (
    <InterviewInputBox title="인터뷰 일정을 입력하세요" buttonText="제출">
      {/* 기존거 .. */}
      {/* <Calendar amountOfMonths={2} locale="ko" />
      <AdminWeekAndTimeSelector /> */}
      <Flex gap="100px">
        <Sidebar />
        <DateBlockDisplayer />
      </Flex>
    </InterviewInputBox>
  );
}

export default InputInterviewScheduleSection;
