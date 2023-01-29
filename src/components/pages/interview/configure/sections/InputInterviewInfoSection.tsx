import { Flex, Textarea, TextInput, Text, NumberInput, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "components/common/AuthProvider";
import Dropdown from "components/common/Dropdown";
import InterviewPatchCompletedModal from "components/modals/InterviewPatchCompletedModal";
import ApplicationCompleteModal from "components/pages/forms/ApplicationCompleteModal";
import InterviewInputBox from "components/pages/interview/InterviewInputBox";
import { INTERVIEW_TYPES } from "constants/interviews";
import { axiosClient } from "lib/axios";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { getDBInterviewByKorean } from "../../../../../utils/getDBInterviewByKorean";

function InputInterviewInfoSection() {
  const { axiosAuthHeader } = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { rid } = router.query;
  const form = useForm({
    initialValues: {
      interviewerCount: 0,
      intervieweeCount: 0,
      type: "",
      notice: "",
    },
  });

  const handleClickCompleteButton = useCallback(async () => {
    console.log(form.values);
    const formData = form.values;
    // setLoading(true);
    try {
      const body = { ...form.values, type: getDBInterviewByKorean(formData.type) };

      if (!rid) {
        throw new Error("rid가 없습니다.");
      }

      await axiosClient.patch(`/recruitments/${rid}/interview`, body, axiosAuthHeader);
      // setLoading(false);
      setShowModal(true);
    } catch (e) {
      console.error(e);
    } finally {
      // setLoading(false);
    }
  }, [axiosAuthHeader, form.values, rid]);
  return (
    <>
      <InterviewPatchCompletedModal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={"인터뷰 정보 업데이트 성공!"}
      />
      <InterviewInputBox
        title="인터뷰 유형을 입력하세요"
        buttonText="다음"
        buttonOnClick={handleClickCompleteButton}
      >
        <Flex
          gap="43px"
          justify="center"
          align="flex-start"
          direction="column"
          sx={{ width: "600px" }}
        >
          <Flex align="center" justify="center" gap="24px" sx={{ alignSelf: "center" }}>
            <Flex align="center" justify="center" gap="24px">
              <Text
                c="gray.8"
                sx={(theme) => ({
                  fontSize: "16px",
                  fontWeight: 600,
                })}
              >
                면접관
              </Text>
              <NumberInput sx={{ width: 70 }} {...form.getInputProps("interviewerCount")} />
              <Text
                c="gray.8"
                sx={(theme) => ({
                  fontSize: "15px",
                  fontWeight: 400,
                })}
              >
                명
              </Text>
            </Flex>
            <Flex align="center" justify="center" gap="24px">
              <Text
                c="gray.8"
                sx={(theme) => ({
                  fontSize: "16px",
                  fontWeight: 600,
                })}
              >
                지원자
              </Text>
              <NumberInput sx={{ width: 70 }} {...form.getInputProps("intervieweeCount")} />
              <Text
                c="gray.8"
                sx={(theme) => ({
                  fontSize: "15px",
                  fontWeight: 400,
                })}
              >
                명
              </Text>
            </Flex>
          </Flex>
          {/* <TextInput
          // TODO: 이 컴포넌트 form 걸로 바꿔라.
          label="인터뷰 제목"
          placeholder="인터뷰 제목을 입력해주세요"
          styles={{
            root: {
              width: '100%',
            },
            label: {
              marginBottom: 16,
            },
          }}
        /> */}
          <Dropdown
            label="인터뷰 방법"
            placeholder="인터뷰 방법"
            data={INTERVIEW_TYPES}
            kind="big"
            {...form.getInputProps("type")}
          />
          <Textarea
            label="인터뷰 관련 공지사항"
            placeholder="지원자들이 알아야 하는 인터뷰 관련 정보들을 입력해주세요"
            styles={(theme) => ({
              root: {
                width: "100%",
              },
              input: {
                padding: 21,
                height: 160,
                border: `1px solid ${theme.colors.gray[1]}`,
              },
              label: {
                marginBottom: 16,
              },
            })}
            {...form.getInputProps("notice")}
          />
        </Flex>
      </InterviewInputBox>
    </>
  );
}

export default InputInterviewInfoSection;
