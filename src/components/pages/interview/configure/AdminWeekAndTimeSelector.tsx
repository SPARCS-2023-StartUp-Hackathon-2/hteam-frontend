import { Box, Checkbox, Flex } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import React from 'react';

function WeekdayAndTimeRow({ dayOfTheWeek }: { dayOfTheWeek: string }) {
  return (
    <Flex direction="row" align="center">
      <Checkbox label={dayOfTheWeek} />
      <TimeInput /> -
      <TimeInput />
    </Flex>
  );
}

function AdminWeekAndTimeSelector() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.white,
        padding: '32px',
        border: `1px solid ${theme.colors.gray[1]}`,
        borderRadius: theme.radius.sm,
      })}
    >
      <Flex gap="20px" direction="column" align="center">
        <WeekdayAndTimeRow dayOfTheWeek="일" />
        <WeekdayAndTimeRow dayOfTheWeek="월" />
        <WeekdayAndTimeRow dayOfTheWeek="화" />
        <WeekdayAndTimeRow dayOfTheWeek="수" />
        <WeekdayAndTimeRow dayOfTheWeek="목" />
        <WeekdayAndTimeRow dayOfTheWeek="금" />
        <WeekdayAndTimeRow dayOfTheWeek="토" />
      </Flex>
    </Box>
  );
}

export default AdminWeekAndTimeSelector;
