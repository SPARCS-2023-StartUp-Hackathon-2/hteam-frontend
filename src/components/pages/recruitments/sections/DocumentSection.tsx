import { Box, Button, Flex, Text } from "@mantine/core";
import TwoPeopleIcon from "components/common/icons/TwoPeopleIcon";
import FormSectionBlock from "components/pages/forms/FormSectionBlock";
import { MOCKUP_QUESTIONS } from "mockups/questions";
import React from "react";
import CopyButtonIcon from "components/common/icons/CopyButtonIcon";
import MyButton from "components/common/Button";
import useFormInfo from "hooks/useFormInfo";

function DocumentSection({ rid }: { rid: string }) {
  const { data, error, isLoading } = useFormInfo(rid);

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
          서류
        </Text>
        <Flex align="center">
          <TwoPeopleIcon />
          <Text
            c="gray.8"
            sx={(theme) => ({
              fontSize: "14px",
              fontWeight: 400,
            })}
          >
            00명 지원
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap="16px" sx={{ marginBottom: 26 }}>
        {MOCKUP_QUESTIONS.map((question, index) => (
          <FormSectionBlock key={index} dataId={index} {...question} />
        ))}
      </Flex>
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
          <Text sx={{ lineHeight: 1, marginRight: 6 }}>설문 링크 공유</Text> <CopyButtonIcon />
        </Button>
        <MyButton>수정하기</MyButton>
      </Flex>
    </Box>
  );
}

export default DocumentSection;