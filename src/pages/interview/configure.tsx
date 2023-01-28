import { Container } from '@mantine/core';
import InputInterviewBasicInfo from 'components/pages/interview/configure/InputInterviewInfo';
import InputInterviewInfo from 'components/pages/interview/configure/InputInterviewInfo';
import InputInterviewSchedule from 'components/pages/interview/configure/InputInterviewSchedule';
import SelectInterviewType from 'components/pages/interview/configure/SelectInterviewType';
import React from 'react';

function ConfigurePage() {
  return (
    <Container size="lg">
      <SelectInterviewType />
      <InputInterviewInfo />
      <InputInterviewSchedule />
    </Container>
  );
}

export default ConfigurePage;
