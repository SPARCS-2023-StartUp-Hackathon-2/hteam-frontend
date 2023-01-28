import { Box, Button, Flex } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import CommonUserResponseFormBox from 'components/common/CommonUserResponseFormBox';
import InterviewInfoSet from 'components/common/InterviewInfoSet';
import { INTERVIEW_TYPES } from 'constants/interviews';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'dayjs/locale/ko';
import { MOCKUP_EXPORT_TIMES } from 'mockups/dates';
import TimeRangeButton from 'components/common/TimeRangeButton';

function ApplicantFormPage() {
  const router = useRouter();
  const { pid } = router.query;

  const [selected, setSelected] = useState(
    new Array(MOCKUP_EXPORT_TIMES.length).fill(false),
  );

  const [value, setValue] = useState<Date>();
  const [showTime, setShowTime] = useState(false); // 시간 선택 보여줄까요?
  useEffect(() => {
    if (value) {
      setShowTime(true);
    }
  }, [value]);
  return (
    <Flex
      sx={{
        // TODO: 테스트용 패딩임
        padding: '100px',
      }}
      justify="center"
    >
      <CommonUserResponseFormBox>
        <Flex gap="8px" direction="row" align="center">
          <Flex
            gap="20px"
            direction="column"
            align="center"
            sx={(theme) => ({
              borderRight: `1px solid ${theme.colors.gray[1]}`,
              padding: '32px',
            })}
          >
            <InterviewInfoSet
              title="인터뷰의 제목입니다. "
              type={INTERVIEW_TYPES[1]}
              description="이번 기수 회원 모집을 위한 선발 활동입니다. "
            />
          </Flex>
          <Flex
            gap="20px"
            direction="column"
            align="center"
            sx={(theme) => ({
              padding: '32px',
              borderRight: showTime
                ? `1px solid ${theme.colors.gray[1]}`
                : 'none',
            })}
          >
            <Calendar
              locale="ko"
              firstDayOfWeek="sunday"
              excludeDate={(date) =>
                date.getDay() === 0 ||
                date.getDay() === 6 ||
                date.getDate() === 17
              }
              value={value}
              onChange={setValue as any} // TODO: any 제거
            />
          </Flex>
          {showTime && (
            <Flex
              gap="12px"
              direction="column"
              align="flex-start"
              sx={(theme) => ({
                padding: '32px',
                height: '100%',
              })}
            >
              <p>
                {value
                  ? new Intl.DateTimeFormat('ko-KR', {
                      dateStyle: 'long',
                      timeZone: 'Asia/Seoul',
                    }).format(value)
                  : '선택 바람'}
              </p>
              {MOCKUP_EXPORT_TIMES.map((time, index) => (
                <TimeRangeButton
                  onClick={() => {
                    setSelected(
                      selected.map((item, i) => {
                        if (i === index) {
                          return true;
                        }
                      }),
                    );
                  }}
                  selected={selected[index]}
                  disabled={time.disabled}
                  key={index}
                >
                  {time.time}
                </TimeRangeButton>
              ))}
            </Flex>
          )}
        </Flex>
      </CommonUserResponseFormBox>
    </Flex>
  );
}

export default ApplicantFormPage;
