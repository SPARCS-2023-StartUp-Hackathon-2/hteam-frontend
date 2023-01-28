import { Flex, SimpleGrid } from '@mantine/core';
import InterviewTypeCard from 'components/pages/interview/configure/InterviewTypeCard';
import InterviewInputBox from 'components/pages/interview/InterviewInputBox';
import React from 'react';

function SelectInterviewTypeSection() {
  return (
    <InterviewInputBox title="인터뷰 유형을 입력하세요" buttonText="다음">
      {/* <Flex gap="36px" justify="center" align="center" direction="row"> */}
      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'md' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        <InterviewTypeCard
          typeName="일대일 인터뷰"
          interviewer="1"
          interviewee="1"
        />
        <InterviewTypeCard
          typeName="그룹 인터뷰"
          interviewer="1"
          interviewee="n"
        />
        <InterviewTypeCard
          typeName="다대일 인터뷰"
          interviewer="n"
          interviewee="1"
        />
        <InterviewTypeCard
          typeName="다대다 인터뷰"
          interviewer="n"
          interviewee="n"
        />
      </SimpleGrid>
      {/* </Flex> */}
    </InterviewInputBox>
  );
}

export default SelectInterviewTypeSection;
