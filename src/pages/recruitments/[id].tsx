import { Container, Flex, Text, Button, Box, Center } from "@mantine/core";

import ArrowLeftIcon from "components/common/icons/ArrowLeftIcon";
import CloseIcon from "components/common/icons/CloseIcon";
import NextStepDownwardIcon from "components/common/icons/NextStepDownwardIcon";
import RecruitmentProcessGraph from "components/common/RecruitmentProcessGraph";

import React from "react";
import { RecruitmentState } from "types/api";
import BasicInfoSection from "components/pages/recruitments/sections/BasicInfoSection";

import { useRouter } from "next/router";
import DocumentSection from "components/pages/recruitments/sections/DocumentSection";
import InterviewSection from "components/pages/recruitments/sections/InterviewSection";
import ApplicantsSection from "components/pages/recruitments/sections/ApplicantsSection";

function RecruitmentsDetailPage() {
  const router = useRouter();
  const id = router.query.id as string | undefined;

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
        })}
        align="center"
        justify="center"
      >
        <RecruitmentProcessGraph currentState="INTERVIEW" variant="big" />
      </Flex>
      <Flex justify="space-between">
        <Flex direction="column" gap="36px" align="center">
          <DocumentSection rid={id} />
          <NextStepDownwardIcon />
          <InterviewSection />
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
          <ApplicantsSection />
        </Flex>
      </Flex>
    </Container>
  );
}

export default RecruitmentsDetailPage;
