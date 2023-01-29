import InterviewInputBox from "components/pages/interview/InterviewInputBox";
import { Calendar } from "@mantine/dates";
import "dayjs/locale/ko";
import AdminWeekAndTimeSelector from "components/pages/interview/configure/AdminWeekAndTimeSelector";
import Sidebar from "components/pages/interview/configure/Sidebar";
import DateBlockDisplayer from "components/common/DateBlockDisplayer";
import { Flex } from "@mantine/core";
import { createContext, useCallback, useState } from "react";
import { DateGroup } from "types/api";
import { axiosClient } from "lib/axios";
import { useRouter } from "next/router";
import { useAuth } from "components/common/AuthProvider";
import { format } from "date-fns";
import ScheduleSendCompletedModal from "components/modals/ScheduleSendCompletedModal";

export const DatesContext = createContext([] as any);
function InputInterviewScheduleSection() {
  const [dates, setDates] = useState<DateGroup[]>();
  const router = useRouter();
  const { rid } = router.query;
  const { axiosAuthHeader } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const handleClickSubmitButton = useCallback(async () => {
    console.log(dates);
    // setLoading(true);
    if (dates) {
      try {
        const body = [] as any;

        dates.map((date) => {
          const newDate = { ...date, date: format(date.date as any, "yyyy-MM-dd") };
          body.push(newDate);
        });

        console.log("BODY", body);
        if (!rid) {
          throw new Error("rid가 없습니다.");
        }

        await axiosClient.post(`schedules?recruitmentId=${rid}`, body, axiosAuthHeader);
        // setLoading(false);
        setShowModal(true);
      } catch (e) {
        console.error(e);
      } finally {
        // setLoading(false);
      }
    }
  }, [axiosAuthHeader, dates, rid]);
  return (
    <>
      <ScheduleSendCompletedModal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={"인터뷰 시간블럭 업데이트 성공!"}
      />
      <DatesContext.Provider value={{ dates, setDates }}>
        <InterviewInputBox
          title="인터뷰 일정을 입력하세요"
          buttonText="제출"
          buttonOnClick={handleClickSubmitButton}
        >
          {/* 기존거 .. */}
          {/* <Calendar amountOfMonths={2} locale="ko" />
      <AdminWeekAndTimeSelector /> */}
          <Flex gap="100px" justify="flex-start" align="flex-start" sx={{ width: "100%" }}>
            <Sidebar />
            <DateBlockDisplayer />
          </Flex>
        </InterviewInputBox>
      </DatesContext.Provider>
    </>
  );
}

export default InputInterviewScheduleSection;
