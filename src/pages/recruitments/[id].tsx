import { Container, Flex, Text, Button } from "@mantine/core";

import ArrowLeftIcon from "components/common/icons/ArrowLeftIcon";
import CloseIcon from "components/common/icons/CloseIcon";
import NextStepDownwardIcon from "components/common/icons/NextStepDownwardIcon";
import ApplicantsSection from "components/pages/admin/sections/ApplicantsSection";
import DocumentSection from "components/pages/admin/sections/DocumentSection";
import InterviewSection from "components/pages/admin/sections/InterviewSection";

import React from "react";

function RecruitmentsDetailPage() {
  return (
    <Container size="lg" sx={{ paddingTop: 45 }}>
      <Flex justify="space-between" sx={{ marginBottom: 20 }}>
        <Flex gap="27px" align="baseline">
          <ArrowLeftIcon />
          <Flex direction="column" align="baseline">
            <Text
              c="gray.8"
              sx={(theme) => ({
                fontSize: "24px",
                fontWeight: 600,
                marginBottom: 16,
              })}
            >
              allthat 개발동아리 8기 신입부원 모집
            </Text>
            <Text
              c="gray.8"
              sx={(theme) => ({
                fontSize: "15px",
                fontWeight: 400,
              })}
            >
              2022.12.02 ~ 2023.01.17
            </Text>
          </Flex>
        </Flex>
        <Button
          styles={(theme) => ({
            root: {
              backgroundColor: theme.white,
              padding: "10px 30px",

              fontSize: "13px",
              fontWeight: 400,
              border: `1px solid ${theme.colors.gray[1]}`,
              color: theme.black,
              borderRadius: theme.radius.sm,
              "&:hover": {
                backgroundColor: theme.colors.gray[1],
              },
            },
            inner: {
              height: "auto",
            },
          })}
        >
          <Text sx={{ lineHeight: 1, marginRight: 6 }}>삭제하기</Text> <CloseIcon />
        </Button>
      </Flex>
      <Flex>
        <Flex direction="column" gap="36px" align="center">
          <DocumentSection />
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
        <Flex sx={{ marginLeft: 52 }}>
          <ApplicantsSection />
        </Flex>
      </Flex>
    </Container>
  );
}

export default RecruitmentsDetailPage;
