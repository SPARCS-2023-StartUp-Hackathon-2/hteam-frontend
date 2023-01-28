import { Box, Text, Flex } from "@mantine/core";
import Button from "components/common/Button";
import PeopleIcon from "components/pages/interview/configure/PeopleIcon";
import React, { ReactNode } from "react";

interface Props {
  typeName: string;
  interviewee: string; // 면접 대상자 명수
  interviewer: string; // 면접관 명수
  kind?: "default" | "wide";
}

function InterviewTypeCard({ typeName, interviewee, interviewer, kind = "default" }: Props) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.white,
        padding: "22px 55px 26px",
        border: `1px solid ${theme.colors.gray[1]}`,
        borderRadius: theme.radius.sm,
        width: kind === "wide" ? "100%" : "null",
      })}
    >
      <Flex gap="8px" direction="column" align="center">
        <PeopleIcon interviewee={interviewee} interviewer={interviewer} kind={kind} />
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: "20px",
            fontWeight: 600,
          })}
        >
          {typeName}
        </Text>
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: "14px",
            fontWeight: 400,
          })}
        >
          면접관 {interviewer}명 : 지원자 {interviewee}명
        </Text>
      </Flex>
    </Box>
  );
}

export default InterviewTypeCard;
