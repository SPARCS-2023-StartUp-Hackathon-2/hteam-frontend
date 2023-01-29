import { Box, Button, Flex, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useAuth } from "components/common/AuthProvider";
import ApplicantRow from "components/pages/recruitments/ApplicantRow";
import useApplicants from "hooks/useApplicants";
import { axiosClient } from "lib/axios";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { RecruitmentState } from "types/api";

function FormApplicantsSection({
  rid,
  onNextStep,
  currentState,
}: {
  rid: string;
  onNextStep: () => void;
  currentState: RecruitmentState;
}) {
  const { axiosAuthHeader } = useAuth();
  const { data } = useApplicants(rid);
  const [mailLoading, setMailLoading] = useState(false);

  const handleClickEmailButton = useCallback(async () => {
    setMailLoading(true);
    try {
      await axiosClient.post(`/email/applicants/form?recruitmentId=${rid}`, {}, axiosAuthHeader);
      showNotification({
        title: "메일 전송 완료",
        message: "메일이 성공적으로 전송되었습니다.",
        color: "green",
      });
    } catch (e) {
      console.error(e);
    } finally {
      setMailLoading(false);
    }
  }, [rid, axiosAuthHeader]);

  const handleClickFinishButton = useCallback(async () => {
    if (currentState !== "FORM") return;
    try {
      await axiosClient.patch(
        `/recruitments/${rid}/state`,
        { state: "INTERVIEW" },
        axiosAuthHeader
      );
      onNextStep();
    } catch (e) {
      console.error(e);
    }
  }, [rid, axiosAuthHeader, onNextStep, currentState]);

  if (data) {
    return (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.white,
          padding: "22px 29px",
          border: `1px solid ${theme.colors.gray[1]}`,
          borderRadius: theme.radius.sm,
          width: "100%",
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
            서류 지원자
          </Text>
        </Flex>
        <Flex direction="column" gap={16}>
          {data.map((applicant) => (
            <ApplicantRow
              key={applicant.id}
              applicant={applicant}
              decisionButton={
                <Link
                  href={`/recruitments/${rid}/form?userId=${applicant.id}`}
                  passHref
                  legacyBehavior
                >
                  <Button
                    component="a"
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
                    지원 서류 보기
                  </Button>
                </Link>
              }
            />
          ))}
        </Flex>

        <Flex justify="space-between" sx={{ marginTop: 16 }}>
          <Button
            variant="outline"
            color="gray.1"
            sx={(theme) => ({ color: theme.colors.gray[9] })}
            onClick={handleClickEmailButton}
            loading={mailLoading}
          >
            서류 결과 공유
          </Button>

          <Button color="primary.2" sx={{ borderRadius: 999 }} onClick={handleClickFinishButton}>
            마감하기
          </Button>
        </Flex>
      </Box>
    );
  } else {
    return <></>;
  }
}

export default FormApplicantsSection;
