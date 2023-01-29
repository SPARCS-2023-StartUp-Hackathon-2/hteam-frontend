import { Box, Button, Flex, Switch, Text } from "@mantine/core";
import { useRecoilState, useRecoilValue } from "recoil";
import Dropdown from "components/common/Dropdown";
import {
  basicFormSectionState,
  formSectionListState,
  selectedFormSectionState,
} from "recoil/formEditor";
import { FormSectionItem, FormSectionType } from "types/form";
import { useCallback, useState } from "react";
import { axiosClient } from "lib/axios";
import { useRouter } from "next/router";
import { useAuth } from "components/common/AuthProvider";
import ShareModal from "components/pages/forms/ShareModal";
import useRecruitment from "hooks/useRecruitment";

function FormSectionSettingAside() {
  const { axiosAuthHeader } = useAuth();
  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const basicFormSection = useRecoilValue(basicFormSectionState);
  const selectedFormSection = useRecoilValue(selectedFormSectionState);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const rid = router.query.rid as string;

  const { data: recruitmentData } = useRecruitment(rid);

  const handleClickCompleteButton = useCallback(async () => {
    setLoading(true);
    try {
      if (!recruitmentData) {
        throw new Error("recruitment data가 없습니다.");
      }

      const body: { content: { metadata: { title: string }; data: FormSectionItem[] } } = {
        content: {
          metadata: {
            title: recruitmentData.name,
          },
          data: [
            {
              id: 0,
              order: 1,
              question: "신상 정보 기입",
              description: "기본 정보",
              type: "basic",
              required: true,
              content: basicFormSection,
            },
            ...formSectionList,
          ],
        },
      };

      if (!rid) {
        throw new Error("rid가 없습니다.");
      }

      await axiosClient.patch(`/forms?recruitmentId=${rid}`, body, axiosAuthHeader);
      setLoading(false);
      setShowModal(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [axiosAuthHeader, basicFormSection, recruitmentData, formSectionList, rid]);

  return (
    <>
      <Flex
        direction="column"
        justify="space-between"
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderColor: theme.colors.gray[1],
          height: "100%",
          maxWidth: "304px",
          width: "100%",
          overflow: "hidden",
        })}
      >
        <Box>
          <Flex
            sx={(theme) => ({
              borderBottom: "1px solid",
              borderColor: theme.colors.gray[1],
              padding: 25,
            })}
            justify="space-between"
            align="center"
          >
            <Text fw="bold" size="md">
              설문 문항
            </Text>
          </Flex>

          <Flex
            sx={(theme) => ({
              borderBottom: "1px solid",
              borderColor: theme.colors.gray[1],
              padding: 25,
            })}
            direction="column"
          >
            <Text fw="bold" color="gray.6" sx={{ fontSize: 15, marginBottom: 22 }}>
              질문 유형
            </Text>
            {selectedFormSection ? (
              <Dropdown
                kind="default"
                data={[
                  { value: "shortText", label: "단답형" },
                  { value: "longText", label: "장문형" },
                  { value: "radio", label: "객관식" },
                  { value: "checkbox", label: "체크박스" },
                  { value: "dropdown", label: "드롭다운" },
                ]}
                value={selectedFormSection.type}
                onChange={(value: FormSectionType) =>
                  setFormSectionList((list) => {
                    if (!value) return list;

                    const newSectionInfo = { ...selectedFormSection };
                    newSectionInfo.type = value;

                    switch (value) {
                      case "shortText":
                      case "longText":
                        newSectionInfo.content = "";
                        break;
                      case "radio":
                      case "checkbox":
                      case "dropdown":
                        newSectionInfo.content = [
                          {
                            id: Date.now(),
                            data: "",
                          },
                        ];
                    }
                    const point = list.findIndex((item) => item.id === newSectionInfo.id);
                    return [
                      ...list.slice(0, point),
                      newSectionInfo,
                      ...list.slice(point + 1, list.length),
                    ];
                  })
                }
              />
            ) : (
              <Dropdown
                kind="default"
                disabled
                data={[{ value: "basic", label: "기본 질문" }]}
                defaultValue="basic"
              />
            )}
          </Flex>

          {selectedFormSection && (
            <Flex
              sx={(theme) => ({
                borderBottom: "1px solid",
                borderColor: theme.colors.gray[1],
                padding: 25,
              })}
              direction="column"
            >
              <Text fw="bold" color="gray.6" sx={{ fontSize: 15, marginBottom: 25 }}>
                질문 설정
              </Text>
              <Flex direction="column" sx={{ padding: "0 15px" }}>
                <Flex justify="space-between">
                  <Text color="gray.6" sx={{ fontSize: 15 }}>
                    필수
                  </Text>
                  <Switch
                    checked={selectedFormSection.required}
                    onChange={(e) =>
                      setFormSectionList((list) => {
                        const newSectionInfo = { ...selectedFormSection };
                        newSectionInfo.required = e.currentTarget.checked;
                        const point = list.findIndex((item) => item.id === newSectionInfo.id);
                        return [
                          ...list.slice(0, point),
                          newSectionInfo,
                          ...list.slice(point + 1, list.length),
                        ];
                      })
                    }
                  />
                </Flex>
              </Flex>
            </Flex>
          )}
        </Box>

        <Flex direction="column" gap={12} sx={{ padding: "58px 70px" }}>
          <Button color="gray.6" onClick={handleClickCompleteButton} loading={loading}>
            보내기
          </Button>
        </Flex>
      </Flex>

      {recruitmentData && (
        <ShareModal
          opened={showModal}
          onClose={() => setShowModal(false)}
          title={recruitmentData.name}
          rid={rid}
          uuid={recruitmentData.uuid}
        />
      )}
    </>
  );
}

export default FormSectionSettingAside;
