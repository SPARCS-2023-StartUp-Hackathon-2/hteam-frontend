import { Box, Button, Center, Flex, Text } from "@mantine/core";
import TwoPeopleIcon from "components/common/icons/TwoPeopleIcon";
import FormSectionBlock from "components/pages/forms/FormSectionBlock";
import React from "react";
import MyButton from "components/common/Button";
import useFormInfo from "hooks/useFormInfo";
import useRecruitment from "hooks/useRecruitment";
import Link from "next/link";
import ShareButton from "components/common/ShareButton";

function DocumentSection({ rid }: { rid: string }) {
  const { data: formData } = useFormInfo(rid);
  const { data: recruitmentData } = useRecruitment(rid);

  if (!recruitmentData) return null;

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
      {formData ? (
        <>
          <Flex direction="column" gap="16px" sx={{ marginBottom: 26 }}>
            {formData?.content?.data?.map((question: any, index: number) => (
              <FormSectionBlock key={index} dataId={index} {...question} />
            ))}
          </Flex>
          <Flex justify="space-between">
            <ShareButton
              targetLink={`${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/forms/${recruitmentData.uuid}`}
            />
            <Link href={`/forms/write?rid=${rid}&modify=true`}>
              <MyButton>수정하기</MyButton>
            </Link>
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
              <Text>지원 형식이 없습니다.</Text>
              <Link href={`/forms/write?rid=${rid}`}>
                <MyButton>지원 서류 형식 만들기</MyButton>
              </Link>
            </Flex>
          </Center>
        </>
      )}
    </Box>
  );
}

export default DocumentSection;
