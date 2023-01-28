import { Box, Button, Center, Flex, Text } from "@mantine/core";
import TwoPeopleIcon from "components/common/icons/TwoPeopleIcon";
import FormSectionBlock from "components/pages/forms/FormSectionBlock";
import { MOCKUP_QUESTIONS } from "mockups/questions";
import React from "react";
import CopyButtonIcon from "components/common/icons/CopyButtonIcon";
import MyButton from "components/common/Button";
import useFormInfo from "hooks/useFormInfo";
import useRecruitment from "hooks/useRecruitment";

function DocumentSection({ rid }: { rid: string }) {
  const { data, error, isLoading } = useFormInfo(rid);
  const { data: recruitmentData } = useRecruitment(rid);
  console.log(data);
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
        {recruitmentData?.state !== "PREPARING" && (
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
        )}
      </Flex>
      {recruitmentData?.state !== "PREPARING" ? (
        <>
          <Flex direction="column" gap="16px" sx={{ marginBottom: 26 }}>
            {data?.content?.data?.map((question: any, index: number) => (
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
        </>
      ) : (
        <>
          <Center>
            <Flex
              direction="column"
              gap="63px"
              align="center"
              sx={{ marginBottom: 10, marginTop: 20 }}
            >
              <Text>지원 형식이 없습니다. </Text>
              <MyButton>지원 서류 형식 만들기</MyButton>
            </Flex>
          </Center>
        </>
      )}
    </Box>
  );
}

export default DocumentSection;
