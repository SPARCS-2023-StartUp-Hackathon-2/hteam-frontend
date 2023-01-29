import { Container, Flex, Text } from "@mantine/core";

import NextStepDownwardIcon from "components/common/icons/NextStepDownwardIcon";
import RecruitmentProcessGraph from "components/common/RecruitmentProcessGraph";

import React, { useState } from "react";
import BasicInfoSection from "components/pages/recruitments/sections/BasicInfoSection";

import { useRouter } from "next/router";
import DocumentSection from "components/pages/recruitments/sections/DocumentSection";
import InterviewSection from "components/pages/recruitments/sections/InterviewSection";
import ApplicantsSection from "components/pages/recruitments/sections/ApplicantsSection";
import useRecruitment from "hooks/useRecruitment";
import FormApplicantsSection from "components/pages/recruitments/sections/FormApplicantsSection";
import InterviewApplicantsSection from "components/pages/recruitments/sections/InterviewApplicantsSection";
import FinalStageSection from "components/pages/recruitments/sections/FinalStageSection";
import NextStepIcon from "components/common/icons/NextStepIcon";
import PreviousStepIcon from "components/common/icons/PreviousStepIcon";

function RecruitmentsDetailPage() {
  const router = useRouter();
  const id = router.query.id as string | undefined;
  const { data } = useRecruitment(id as string);
  const [stage, setStage] = useState(1);

  if (!id) return null;
  return (
    <Container size="lg" sx={{ paddingTop: 45, paddingBottom: 45 }}>
      <BasicInfoSection rid={id} />
      <Flex
        sx={(theme) => ({
          backgroundColor: theme.white,
          padding: "60px 29px",
          border: `1px solid ${theme.colors.gray[1]}`,
          borderRadius: theme.radius.sm,
          marginBottom: 43,
          width: "100%",
          position: "relative",
        })}
        align="center"
        justify="center"
      >
        {stage > 1 && (
          <PreviousStepIcon
            onClick={() => {
              setStage(stage - 1);
            }}
            style={{
              position: "absolute",
              top: 30,
              left: -34,
            }}
          />
        )}
        {stage < 4 && (
          <NextStepIcon
            onClick={() => {
              setStage(stage + 1);
            }}
            style={{
              position: "absolute",
              top: 30,
              right: -34,
            }}
          />
        )}

        <RecruitmentProcessGraph currentState={data?.state ?? "PREPARING"} variant="big" />
      </Flex>
      {stage === 1 && (
        <Flex justify="space-between">
          <Flex direction="column" gap="36px" align="center">
            <DocumentSection rid={id} />
            <NextStepDownwardIcon />
            <InterviewSection rid={id} />
            <NextStepDownwardIcon />
            <Text
              c="gray.2"
              sx={(theme) => ({
                fontSize: "20px",
                fontWeight: 600,
              })}
            >
              모집 완료!
            </Text>
          </Flex>
          <Flex sx={{ marginLeft: 52, flexGrow: 1 }}>
            <ApplicantsSection rid={id} />
          </Flex>
        </Flex>
      )}
      {stage === 2 && <FormApplicantsSection rid={id} />}
      {stage === 3 && <InterviewApplicantsSection />}
      {stage === 4 && <FinalStageSection />}
    </Container>
  );
}

export default RecruitmentsDetailPage;
