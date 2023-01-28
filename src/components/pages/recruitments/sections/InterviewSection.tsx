import { Box, Button, Flex, NumberInput, Text } from "@mantine/core";
import React from "react";
import MyButton from "components/common/Button";
import CopyButtonIcon from "components/common/icons/CopyButtonIcon";
import InterviewTypeCard from "components/pages/interview/configure/InterviewTypeCard";

function InterviewSection() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.white,
        padding: "22px 29px",
        border: `1px solid ${theme.colors.gray[1]}`,
        borderRadius: theme.radius.sm,
        width: 764,
      })}
    >
      <Flex justify="space-between" sx={{ marginBottom: 20 }}>
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: "20px",
            fontWeight: 600,
          })}
        >
          면접
        </Text>
      </Flex>
      {/* 여기서부터 본 컨텐츠 */}

      <Flex direction="column" sx={{ marginBottom: 16 }}>
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: "15px",
            fontWeight: 400,
            marginBottom: 3,
          })}
        >
          전화 인터뷰
        </Text>
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: 9,
          })}
        >
          allthat 개발동아리 8기 신입부원 모집
        </Text>

        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: "14px",
            fontWeight: 400,
          })}
        >
          간단한 전화 인터뷰 입니다.
        </Text>
      </Flex>
      <Flex direction={"column"} gap="14px" sx={{ marginBottom: 27 }}>
        <InterviewTypeCard typeName="일대일 인터뷰" interviewee="1" interviewer="1" kind="wide" />
        <Flex
          sx={(theme) => ({
            backgroundColor: theme.white,
            padding: "22px 29px",
            border: `1px solid ${theme.colors.gray[1]}`,
            borderRadius: theme.radius.sm,
            width: "100%",
          })}
          align="baseline"
          justify="center"
          gap="30px"
        >
          인터뷰 진행 시간:
          <NumberInput
            defaultValue={30}
            placeholder="Your age"
            hideControls
            readOnly
            styles={(theme) => ({
              input: {
                border: "none",
                borderBottom: `1px solid ${theme.colors.gray[2]}`,
                borderRadius: 0,
                textAlign: "center",
                width: 100,
              },
            })}
          />{" "}
          분
        </Flex>
      </Flex>

      {/* 여기까지 본 컨첸츠 */}
      <Flex justify="space-between">
        <Button
          styles={(theme) => ({
            root: {
              backgroundColor: theme.white,
              padding: "10px 30px",
              height: "auto",

              fontSize: "15px",
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
          <Text sx={{ lineHeight: 1, marginRight: 6 }}>일정 설정 링크 공유</Text> <CopyButtonIcon />
        </Button>
        <MyButton>수정하기</MyButton>
      </Flex>
    </Box>
  );
}
export default InterviewSection;
