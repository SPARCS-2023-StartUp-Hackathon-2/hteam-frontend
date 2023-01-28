import { Box, Checkbox, Flex, NumberInput } from '@mantine/core';
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
    <Flex
      direction="row"
      align="center"
      sx={(theme) => ({
        backgroundColor: theme.white,

        border: `1px solid ${theme.colors.gray[1]}`,
        borderRadius: theme.radius.sm,
      })}
    >
      <Flex
        gap="20px"
        direction="column"
        align="center"
        sx={(theme) => ({
          borderRight: `1px solid ${theme.colors.gray[1]}`,
          padding: '32px',
        })}
      >
        <WeekdayAndTimeRow dayOfTheWeek="일" />
        <WeekdayAndTimeRow dayOfTheWeek="월" />
        <WeekdayAndTimeRow dayOfTheWeek="화" />
        <WeekdayAndTimeRow dayOfTheWeek="수" />
        <WeekdayAndTimeRow dayOfTheWeek="목" />
        <WeekdayAndTimeRow dayOfTheWeek="금" />
        <WeekdayAndTimeRow dayOfTheWeek="토" />
      </Flex>
      <Box>
        <Box>
          <Flex
            gap="20px"
            direction="row"
            align="center"
            sx={(theme) => ({
              borderBottom: `1px solid ${theme.colors.gray[1]}`,
              padding: '32px',
            })}
          >
            인터뷰 진행 시간
            <NumberInput
              defaultValue={30}
              placeholder="Your age"
              hideControls
            />
          </Flex>
        </Box>
        <Box>
          <Flex
            gap="20px"
            direction="row"
            align="center"
            sx={(theme) => ({
              padding: '32px',
            })}
          >
            인터뷰 준비 시간
            <Flex gap="20px" direction="column" align="center">
              <NumberInput
                defaultValue={30}
                label="인터뷰 전"
                placeholder="인터뷰 전"
                hideControls
              />
              <NumberInput
                defaultValue={30}
                label="인터뷰 후"
                placeholder="인터뷰 후"
                hideControls
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default AdminWeekAndTimeSelector;
