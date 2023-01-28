import React from 'react';
import { Flex, Text } from '@mantine/core';
import TimeRangeButton from 'components/common/TimeRangeButton';
import { DateGroup } from 'types/api';
import { MOCKUP_GENERATED_TIMES } from 'mockups/dates';

function SingleDate({ date, times }: DateGroup) {
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
          {date}
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
          {times.map((time, index) => (
            <TimeRangeButton key={index}>
              {time.start}-{time.end}
            </TimeRangeButton>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

function DateBlockDisplayer() {
  return (
    <Flex direction="column" gap="24px">
      {MOCKUP_GENERATED_TIMES.map((time, index) => (
        <SingleDate key={index} {...time} />
      ))}
    </Flex>
  );
}

export default DateBlockDisplayer;
