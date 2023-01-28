import { Flex, Textarea, TextInput, Text, NumberInput } from '@mantine/core';
import Dropdown from 'components/common/Dropdown';
import InterviewInputBox from 'components/pages/interview/InterviewInputBox';
import { INTERVIEW_TYPES } from 'constants/interviews';
import React from 'react';

function InputInterviewInfoSection() {
  return (
    <InterviewInputBox title="인터뷰 유형을 입력하세요" buttonText="다음">
      <Flex
        gap="43px"
        justify="center"
        align="flex-start"
        direction="column"
        sx={{ width: '600px' }}
      >
        <Flex
          align="center"
          justify="center"
          gap="24px"
          sx={{ alignSelf: 'center' }}
        >
          <Flex align="center" justify="center" gap="24px">
            <Text
              c="gray.8"
              sx={(theme) => ({
                fontSize: '16px',
                fontWeight: 600,
              })}
            >
              면접관
            </Text>
            <NumberInput sx={{ width: 70 }} />
            <Text
              c="gray.8"
              sx={(theme) => ({
                fontSize: '15px',
                fontWeight: 400,
              })}
            >
              명
            </Text>
          </Flex>
          <Flex align="center" justify="center" gap="24px">
            <Text
              c="gray.8"
              sx={(theme) => ({
                fontSize: '16px',
                fontWeight: 600,
              })}
            >
              지원자
            </Text>
            <NumberInput sx={{ width: 70 }} />
            <Text
              c="gray.8"
              sx={(theme) => ({
                fontSize: '15px',
                fontWeight: 400,
              })}
            >
              명
            </Text>
          </Flex>
        </Flex>
        {/* <TextInput
          // TODO: 이 컴포넌트 form 걸로 바꿔라.
          label="인터뷰 제목"
          placeholder="인터뷰 제목을 입력해주세요"
          styles={{
            root: {
              width: '100%',
            },
            label: {
              marginBottom: 16,
            },
          }}
        /> */}
        <Dropdown
          label="인터뷰 방법"
          placeholder="인터뷰 방법"
          data={INTERVIEW_TYPES}
          kind="big"
        />
        <Textarea
          label="인터뷰 관련 공지사항"
          placeholder="지원자들이 알아야 하는 인터뷰 관련 정보들을 입력해주세요"
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
              marginBottom: 16,
            },
          })}
        />
      </Flex>
    </InterviewInputBox>
  );
}

export default InputInterviewInfoSection;
