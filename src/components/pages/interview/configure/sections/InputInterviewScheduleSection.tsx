import InterviewInputBox from 'components/pages/interview/InterviewInputBox';
import { Calendar } from '@mantine/dates';
import 'dayjs/locale/ko';
import AdminWeekAndTimeSelector from 'components/pages/interview/configure/AdminWeekAndTimeSelector';
import Sidebar from 'components/pages/interview/configure/Sidebar';
import DateBlockDisplayer from 'components/common/DateBlockDisplayer';
import { Flex } from '@mantine/core';
import { createContext, useState } from 'react';
import { DateGroup } from 'types/api';

export const DatesContext = createContext([] as any);
function InputInterviewScheduleSection() {
  const [dates, setDates] = useState<DateGroup[]>();

  return (
    <DatesContext.Provider value={{ dates, setDates }}>
      <InterviewInputBox title="인터뷰 일정을 입력하세요" buttonText="제출">
        {/* 기존거 .. */}
        {/* <Calendar amountOfMonths={2} locale="ko" />
      <AdminWeekAndTimeSelector /> */}
        <Flex
          gap="100px"
          justify="flex-start"
          align="flex-start"
          sx={{ width: '100%' }}
        >
          <Sidebar />
          <DateBlockDisplayer />
        </Flex>
      </InterviewInputBox>
    </DatesContext.Provider>
  );
}

export default InputInterviewScheduleSection;
