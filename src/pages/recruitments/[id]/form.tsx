import { Box, Button, Center, Container, Flex, Text } from "@mantine/core";
import { useAuth } from "components/common/AuthProvider";
import FormSectionBlock from "components/pages/forms/FormSectionBlock";
import ApplicantRow from "components/pages/recruitments/ApplicantRow";
import BasicInfoSection from "components/pages/recruitments/sections/BasicInfoSection";
import useApplicant from "hooks/useApplicant";
import { axiosClient } from "lib/axios";
import { useRouter } from "next/router";
import { Fragment, useCallback } from "react";

function ApplicantFormPage() {
  const { axiosAuthHeader } = useAuth();
  const router = useRouter();
  const rid = router.query.id as string | undefined;
  const uid = router.query.userId as string | undefined;

  const { data, mutate } = useApplicant(uid);

  const handleClickPassButton = useCallback(async () => {
    try {
      await axiosClient.patch(
        `/applicants/${uid}/state`,
        { type: "FORM", state: "PASS" },
        axiosAuthHeader
      );
      mutate();
    } catch (e) {
      console.error(e);
    }
  }, [axiosAuthHeader, uid, mutate]);

  const handleClickFailButton = useCallback(async () => {
    try {
      await axiosClient.patch(
        `/applicants/${uid}/state`,
        { type: "FORM", state: "FAIL" },
        axiosAuthHeader
      );
      mutate();
    } catch (e) {
      console.error(e);
    }
  }, [axiosAuthHeader, uid, mutate]);

  if (!rid || !uid) return null;
  if (!data) return null;
  return (
    <Container size="lg" sx={{ paddingTop: 45, paddingBottom: 45 }}>
      <BasicInfoSection rid={rid} backLink={`/recruitments/${rid}`} />

      <ApplicantRow
        applicant={data}
        decisionButton={
          <Flex gap={16}>
            <Button onClick={handleClickPassButton}>합격</Button>
            <Button color="red" onClick={handleClickFailButton}>
              불합격
            </Button>
          </Flex>
        }
      />
      <Center
        sx={(theme) => ({ padding: 52, border: "1px solid", borderColor: theme.colors.gray[1] })}
      >
        <Flex direction="column" gap={23} sx={{ maxWidth: 687, width: "100%" }}>
          {data.formContent.data
            .slice(1, data.formContent.data.length)
            .map((question, index: number) => (
              <Flex key={index} direction="column" sx={{ width: "100%" }}>
                <FormSectionBlock dataId={index} {...question} order={question.order - 1} />
                <Box
                  sx={(theme) => ({
                    border: "1px solid",
                    borderColor: theme.colors.gray[1],
                    padding: "26px 40px",
                  })}
                >
                  {question.content || <Text color="gray.2">답변하지 않음</Text>}
                </Box>
              </Flex>
            ))}
        </Flex>
      </Center>
    </Container>
  );
}

export default ApplicantFormPage;
