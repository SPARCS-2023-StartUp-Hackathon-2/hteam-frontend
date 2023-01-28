import { Container, Flex } from '@mantine/core';
import InputInterviewInfoSection from 'components/pages/interview/configure/sections/InputInterviewInfoSection';
import InputInterviewScheduleSection from 'components/pages/interview/configure/sections/InputInterviewScheduleSection';
import SelectInterviewTypeSection from 'components/pages/interview/configure/sections/SelectInterviewTypeSection';
import React from 'react';

function ConfigurePage() {
  return (
    <Container size="lg">
      <Flex gap="32px" direction="column">
        {/* <SelectInterviewTypeSection /> */}
        <InputInterviewInfoSection />
        <InputInterviewScheduleSection />
      </Flex>
    </Container>
  );
}

export default ConfigurePage;
