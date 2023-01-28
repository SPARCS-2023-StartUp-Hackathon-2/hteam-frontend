import React, { useContext } from 'react';
import { Flex, Text } from '@mantine/core';
import TimeRangeButton from 'components/common/TimeRangeButton';
import { DateGroup } from 'types/api';
import { MOCKUP_GENERATED_TIMES } from 'mockups/dates';
import { DatesContext } from 'components/pages/interview/configure/sections/InputInterviewScheduleSection';

function SingleDate({ date, times }: any) {
  console.log('DATE', date, 'TIMES', times);
  return (
    <>
      <Flex direction="column" align="flex-start">
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: 16,
          })}
        >
          {date.toLocaleDateString('ko-KR')}
        </Text>
        {/* <Text
        c="gray.8"
        sx={(theme) => ({
          fontSize: '16px',
          fontWeight: 600,
        })}
      >
        오전
      </Text> */}
        <Flex gap="8px" wrap="wrap">
          {times.map((time: any, index: number) => (
            <TimeRangeButton key={index}>{time}</TimeRangeButton>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

function DateBlockDisplayer() {
  const { dates } = useContext(DatesContext);
  console.log('DATES', dates);
  return (
    <Flex direction="column" gap="24px">
      {dates &&
        dates?.length > 0 &&
        dates.map((time: DateGroup, index: number) => (
          <SingleDate key={index} {...time} />
        ))}
    </Flex>
  );
}

export default DateBlockDisplayer;
