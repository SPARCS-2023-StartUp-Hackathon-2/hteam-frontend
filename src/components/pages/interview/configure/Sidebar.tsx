import { Box, Checkbox, Divider, Flex, NumberInput, Text } from '@mantine/core';
import { RangeCalendar, TimeInput } from '@mantine/dates';
import React, { useState } from 'react';
import 'dayjs/locale/ko';
import { dateObjectToDateString } from 'utils/date';
import { KOREA_NOW } from 'constants/date';
import { addDays } from 'date-fns';
import Button from 'components/common/Button';

function Sidebar() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    KOREA_NOW,
    addDays(KOREA_NOW, 3),
  ]);

  const [checked, setChecked] = useState(false);

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.white,
        border: `1px solid ${theme.colors.gray[1]}`,
        borderRadius: theme.radius.sm,
        width: 360,
      })}
    >
      <Flex
        sx={(theme) => ({
          backgroundColor: theme.white,
          padding: '32px',
          borderBottom: `1px solid ${theme.colors.gray[1]}`,
        })}
        direction="column"
        align="center"
      >
        <Text
          sx={{
            fontWeight: 600,
          }}
        >
          {' '}
          면접 전형 기간
        </Text>
        <RangeCalendar
          locale="ko"
          value={value}
          onChange={setValue}
          firstDayOfWeek="sunday"
          sx={{
            marginBottom: 16,
          }}
        />
        <Flex direction="row">
          <Text>
            {value[0] ? dateObjectToDateString(value[0]) : '시작 일자 선택'}
          </Text>
          &nbsp;-&nbsp;
          <Text>
            {value[1] ? dateObjectToDateString(value[1]) : '종료 일자 선택'}
          </Text>
        </Flex>
      </Flex>
      <Flex
        sx={(theme) => ({
          backgroundColor: theme.white,
          padding: '32px',
          borderBottom: `1px solid ${theme.colors.gray[1]}`,
        })}
        gap="32px"
        direction="row"
        align="center"
      >
        <Text
          sx={{
            marginBottom: '8px',
            fontWeight: 600,
          }}
        >
          {' '}
          면접 진행 시간대
        </Text>
        <Flex gap="24px" align="center" direction="column">
          <Flex direction="column" align="center" gap="8px">
            <Text>시작 시각</Text>
            <TimeInput />
          </Flex>

          <Flex direction="column" align="center" gap="8px">
            <Text>종료 시각</Text>
            <TimeInput />
          </Flex>
        </Flex>
      </Flex>
      {/* ---------- 면접 진행 시간 */}
      <Flex
        direction="column"
        sx={(theme) => ({
          backgroundColor: theme.white,
          padding: '32px',
          borderBottom: `1px solid ${theme.colors.gray[1]}`,
        })}
        gap="16px"
        justify="center"
      >
        <Flex sx={(theme) => ({})} gap="32px" direction="row" align="center">
          <Text
            sx={{
              fontWeight: 600,
            }}
          >
            {' '}
            면접 진행 시간
          </Text>
          <Flex gap="24px" direction="column" align="center">
            <Flex align="center" gap="8px">
              <NumberInput sx={{ width: 100 }} /> 분
            </Flex>
          </Flex>
        </Flex>
        <Checkbox
          label="면접 준비 시간이 필요해요 "
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
        />
      </Flex>
      {/* -------------- 면접 전후 시간 */}
      {checked && (
        <>
          <Flex
            sx={(theme) => ({
              backgroundColor: theme.white,
              padding: '32px',
              borderBottom: `1px solid ${theme.colors.gray[1]}`,
            })}
            gap="16px"
            direction="row"
            align="center"
          >
            <Text
              sx={{
                marginBottom: '8px',
                fontWeight: 600,
              }}
            >
              {' '}
              면접 준비 시간
            </Text>
            <Flex gap="24px" direction="column" align="center">
              <Flex align="center" gap="8px">
                <Text>면접 전</Text>
                <NumberInput sx={{ width: 100 }} /> 분
              </Flex>
              <Flex align="center" gap="8px">
                <Text>면접 후</Text>
                <NumberInput sx={{ width: 100 }} /> 분
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
      <Flex
        sx={(theme) => ({
          backgroundColor: theme.white,
          padding: '32px',
        })}
        direction="column"
        align="center"
      >
        <Button>블럭 생성하기!</Button>
      </Flex>
    </Box>
  );
}

export default Sidebar;
