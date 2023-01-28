import { Box, Flex, Textarea, TextInput, Text } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import CommonUserResponseFormBox from 'components/common/CommonUserResponseFormBox';
import InterviewInfoSet from 'components/common/InterviewInfoSet';
import { INTERVIEW_TYPES } from 'constants/interviews';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'dayjs/locale/ko';
import { MOCKUP_EXPORT_TIMES } from 'mockups/dates';
import TimeRangeButton from 'components/common/TimeRangeButton';
import Button from 'components/common/Button';
import InterviewInputBox from 'components/pages/interview/InterviewInputBox';

function ApplicantFormPage() {
  const router = useRouter();
  const { pid } = router.query;
  const [isDirty, setIsDirty] = useState(false);

  const [selected, setSelected] = useState(
    new Array(MOCKUP_EXPORT_TIMES.length).fill(false),
  );

  const [selectedTime, setSelectedTime] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

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
        {(currentStep === 1 || currentStep === 2) && (
          <>
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
              {currentStep === 1 && (
                <>
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
                            setIsDirty(true);
                            setSelectedTime(MOCKUP_EXPORT_TIMES[index].time);
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
                      {selected}
                      {isDirty && (
                        <Button
                          sx={{ alignSelf: 'flex-end' }}
                          onClick={() => {
                            setCurrentStep(2);
                          }}
                        >
                          다음
                        </Button>
                      )}
                    </Flex>
                  )}
                </>
              )}
              {currentStep === 2 && (
                <>
                  <Flex
                    gap="36px"
                    justify="center"
                    align="flex-start"
                    direction="column"
                    sx={{ width: '600px', padding: '32px' }}
                  >
                    <TextInput
                      // TODO: 이 컴포넌트 form 걸로 바꿔라.
                      label="이름"
                      placeholder="이름"
                      styles={(theme) => ({
                        root: {
                          width: '100%',
                        },
                        label: {
                          marginBottom: 9,
                        },
                        input: {
                          padding: '14px 24px 15px 20px',
                          height: 'auto',
                          lineHeight: '100%',
                          fontSize: '15px',
                          border: `1px solid ${theme.colors.gray[1]}`,
                        },
                      })}
                    />
                    <TextInput
                      // TODO: 이 컴포넌트 form 걸로 바꿔라.
                      label="이메일"
                      placeholder="이메일"
                      styles={(theme) => ({
                        root: {
                          width: '100%',
                        },
                        label: {
                          marginBottom: 9,
                        },
                        input: {
                          padding: '14px 24px 15px 20px',
                          height: 'auto',
                          lineHeight: '100%',
                          fontSize: '15px',
                          border: `1px solid ${theme.colors.gray[1]}`,
                        },
                      })}
                    />

                    <Textarea
                      label="건의사항"
                      placeholder="건의사항"
                      styles={(theme) => ({
                        root: {
                          width: '100%',
                        },
                        input: {
                          padding: 21,
                          height: 160,
                          border: `1px solid ${theme.colors.gray[1]}`,
                        },
                        label: {
                          marginBottom: 9,
                        },
                      })}
                    />
                    <Button
                      sx={{ alignSelf: 'flex-end' }}
                      onClick={() => {
                        setCurrentStep(3);
                      }}
                    >
                      제출하기
                    </Button>
                  </Flex>
                </>
              )}
            </Flex>
          </>
        )}
        {currentStep === 3 && (
          <Flex direction="column" sx={{ padding: '32px' }} align="center">
            <Text
              c="gray.8"
              sx={(theme) => ({
                fontSize: '24px',
                fontWeight: 600,
              })}
            >
              인터뷰 일정이 확정되었습니다.
            </Text>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.white,
                padding: '24px',
                border: `1px solid ${theme.colors.gray[1]}`,
                borderRadius: theme.radius.sm,
                marginTop: 100,
              })}
            >
              <InterviewInfoSet
                title={'같은 제목 입력해줘'}
                type={'같은 타입입력해줘'}
                description={'여기 내용 바꿔야해'}
                sx={{ width: 300 }}
              />
            </Box>
            <Text
              c="gray.8"
              sx={(theme) => ({
                fontSize: '16px',
                fontWeight: 600,
                marginTop: 24,
              })}
            >
              {new Intl.DateTimeFormat('ko-KR', {
                dateStyle: 'long',
                timeZone: 'Asia/Seoul',
              }).format(value)}{' '}
              {selectedTime}
            </Text>
            <Text
              c="gray.8"
              sx={(theme) => ({
                fontSize: '14px',
                fontWeight: 400,
                marginTop: 160,
              })}
            >
              확정된 일정이 이메일로 전달되었습니다.
            </Text>
          </Flex>
        )}
      </CommonUserResponseFormBox>
    </Flex>
  );
}

export default ApplicantFormPage;
